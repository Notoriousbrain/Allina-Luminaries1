import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import allinaLogoLight from '/images/AllinaHeader.svg';
import allinaLogoDark from '/images/allina-logo-dark.png';

// Adjustable logo vertical offset (in px)
const LOGO_VERTICAL_OFFSET = 0; // Change this value to adjust logo distance from top

export const Header: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { theme, isJourneyInView } = useTheme();
  const isDark = theme === 'dark';
  const logoSrc = isDark ? allinaLogoDark : allinaLogoLight;
  const headerTextColor = isDark ? '#DDB9A2' : '#06153A';
  const location = useLocation();

  const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
    const isActive = location.pathname === to;
    return (
      <Link
        to={to}
        className="relative uppercase tracking-[2.5px] md:tracking-[3.2px] text-lg md:text-xl transition-colors duration-700 group"
        style={{ color: headerTextColor, fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif' }}
      >
        {children}
        <span 
          className={`absolute left-0 bottom-0 w-0 h-[2px] bg-current transition-all duration-300 ${
            isActive ? 'w-1/2' : 'group-hover:w-1/2'
          }`}
        />
      </Link>
    );
  };

  // Responsive: hide nav links on small screens, always show ☰
  return ( 
    <header className="relative w-full h-[60px] sm:h-[80px] md:h-[100px] z-50">
      <nav 
        className="fixed w-full h-[60px] sm:h-[80px] md:h-[100px] top-0 left-0 bg-white dark:bg-black transition-all duration-700 z-50 shadow-[0_6px_32px_0_rgba(0,0,0,0.18)]"
        style={{ 
          opacity: isJourneyInView ? 0 : 1,
          pointerEvents: isJourneyInView ? 'none' : 'auto'
        }}
      >
        <div className="max-w-[1440px] mx-auto relative h-full px-4 sm:px-6 md:px-8 flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center h-full">
            <Link to="/" className="block h-full flex items-center">
              <div
                className="relative h-[80px] sm:h-[95px] md:h-[120px] flex items-center"
                style={{ marginTop: LOGO_VERTICAL_OFFSET }}
              >
                <img src={logoSrc} alt="ALLINA" className="h-full w-auto" />
              </div>
            </Link>
          </div>

          {/* Nav Links + Hamburger */}
          <div className="flex items-center gap-6 md:gap-10 ml-auto">
            <div className="hidden sm:flex items-center gap-6 md:gap-10">
              <NavLink to="/about">ABOUT</NavLink>
              <NavLink to="/projects">PROJECTS</NavLink>
              <NavLink to="/services">SERVICES</NavLink>
            </div>
            {/* Hamburger/Close Toggle */}
            <button
              className="flex items-center justify-center w-10 h-10 rounded transition-all duration-500 focus:outline-none relative"
              aria-label={drawerOpen ? "Close menu" : "Open menu"}
              onClick={() => setDrawerOpen(!drawerOpen)}
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <span 
                  className={`absolute w-full h-[2px] transition-all duration-300 origin-center ${
                    drawerOpen 
                      ? 'rotate-45 top-1/2 -translate-y-1/2' 
                      : 'rotate-0 top-0'
                  }`}
                  style={{ backgroundColor: headerTextColor }}
                />
                <span 
                  className={`absolute w-full h-[2px] top-1/2 -translate-y-1/2 transition-all duration-300 ${
                    drawerOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                  style={{ backgroundColor: headerTextColor }}
                />
                <span 
                  className={`absolute w-full h-[2px] transition-all duration-300 origin-center ${
                    drawerOpen 
                      ? '-rotate-45 top-1/2 -translate-y-1/2' 
                      : 'rotate-0 bottom-0'
                  }`}
                  style={{ backgroundColor: headerTextColor }}
                />
              </div>
            </button>
          </div>
            </div>

        {/* Right-side Drawer */}
        <div 
          className={`fixed right-0 top-[60px] sm:top-[80px] md:top-[100px] w-[20vw] h-[40vh] bg-white dark:bg-black shadow-xl transition-transform duration-500 transform rounded-bl-[20px] z-40 ${
            drawerOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{ WebkitTapHighlightColor: 'transparent' }}
        >
          <nav className="flex flex-col items-start gap-6 h-full p-8">
                <Link 
                  to="/sustainability"
              className="uppercase tracking-[2.5px] text-xl transition-colors duration-700 relative group outline-none"
              style={{ 
                color: headerTextColor, 
                fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif',
                WebkitTapHighlightColor: 'transparent'
              }}
              onClick={() => setDrawerOpen(false)}
                >
                  SUSTAINABILITY
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-current transition-all duration-300 group-hover:w-1/2" />
                </Link>
                <Link 
                  to="/career"
              className="uppercase tracking-[2.5px] text-xl transition-colors duration-700 relative group outline-none"
              style={{ 
                color: headerTextColor, 
                fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif',
                WebkitTapHighlightColor: 'transparent'
              }}
              onClick={() => setDrawerOpen(false)}
            >
              CAREERS
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-current transition-all duration-300 group-hover:w-1/2" />
                </Link>
                <Link 
                  to="/contact"
              className="uppercase tracking-[2.5px] text-xl transition-colors duration-700 relative group outline-none"
              style={{ 
                color: headerTextColor, 
                fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif',
                WebkitTapHighlightColor: 'transparent'
              }}
              onClick={() => setDrawerOpen(false)}
            >
              CONTACT US
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-current transition-all duration-300 group-hover:w-1/2" />
                </Link>
              </nav>
        </div>
      </nav>
    </header>
  );
};
