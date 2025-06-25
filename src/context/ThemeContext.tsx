import React, { createContext, useContext, useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  setJourneyInView: (inView: boolean) => void;
  isJourneyInView: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [baseTheme, setBaseTheme] = useState<Theme>('light');
  const [isJourneyInView, setIsJourneyInView] = useState(false);
  
  // Computed theme: dark when journey is in view, otherwise use base theme
  const theme = isJourneyInView ? 'dark' : baseTheme;

  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
    
    // Set initial background color
    document.documentElement.style.setProperty(
      '--background',
      theme === 'light' ? '#F2EBE3' : '#06153A'
    );
  }, [theme]);

  const setTheme = (newTheme: Theme) => {
    setBaseTheme(newTheme);
  };

  const setJourneyInView = (inView: boolean) => {
    setIsJourneyInView(inView);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, setJourneyInView, isJourneyInView }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}; 