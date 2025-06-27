import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

export const DeviceShowcase: React.FC = () => {
  const { setTheme } = useTheme();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '-45% 0px -45% 0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTheme('dark');
        } else {
          // Switch back to main theme when DeviceShowcase is not in view
          setTheme('light');
        }
      });
    }, options);

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [setTheme]);

  return (
    <section 
      ref={sectionRef}
      className="w-full min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] lg:min-h-screen flex items-center justify-center py-12 sm:py-16 md:py-20 px-4 md:px-8 transition-colors duration-700 mb-0"
    >
      <div className="relative w-full max-w-5xl aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9] rounded-[20px] sm:rounded-[30px] md:rounded-[40px] overflow-hidden bg-[#06153A] shadow-xl sm:shadow-2xl">
        <div className="absolute inset-0 flex items-center justify-center">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/0gfEeFk1V4g?autoplay=1&mute=1&loop=1&playlist=0gfEeFk1V4g&controls=0"
            title="Device Showcase Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </div>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-16 sm:h-20 md:h-24 bg-gradient-to-b from-[#06153A] to-transparent opacity-80"></div>
          <div className="absolute bottom-0 left-0 w-full h-16 sm:h-20 md:h-24 bg-gradient-to-t from-[#06153A] to-transparent opacity-80"></div>
        </div>
      </div>
    </section>
  );
};
