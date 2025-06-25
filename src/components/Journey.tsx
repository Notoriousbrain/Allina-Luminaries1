import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from '../context/ThemeContext';

export const Journey: React.FC = () => {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [animationProgress, setAnimationProgress] = useState(0);
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  const [isSectionInView, setIsSectionInView] = useState(false);
  const [backgroundTransition, setBackgroundTransition] = useState(0); // 0 = grey, 1 = black
  const { setJourneyInView, theme } = useTheme();
  
  const isDark = theme === 'dark';
  const headerTextColor = isDark ? '#DDB9A2' : '#06153A';
  
  useEffect(() => {
    setJourneyInView(isSectionInView);
  }, [isSectionInView, setJourneyInView]);

  useEffect(() => {
    const section = sectionRef.current;
    const img = imgRef.current;
    
    if (!section || !img) return;

    let currentProgress = 0;
    let sectionInView = false;
    let animationComplete = false;
    let isScrollLocked = false;
    let lockedScrollPosition = 0;
    let isInitialized = false;
    let lockEnforceTimer: number | null = null;

    // Set up the initial animation state
    const initializeAnimation = () => {
      if (img && !isInitialized) {
        const containerHeight = window.innerHeight;
        const initialY = containerHeight * 0.5;
        img.style.transform = `translate(-50%, ${initialY}px)`;
        currentProgress = 0;
        animationComplete = false;
        setAnimationProgress(0);
        setIsAnimationComplete(false);
        isInitialized = true;
      }
    };    // Main scroll handler - manages animation state and scroll locking
    const handlePageScroll = (e: Event) => {
      const rect = section.getBoundingClientRect();
      const isAtTop = rect.top <= 5;
      const isNavbarHideThreshold = rect.top <= window.innerHeight * 0.6;
      const sectionMiddle = rect.top + rect.height / 2;
      const is50PercentInView = sectionMiddle <= window.innerHeight * 0.5;
      
      // Change background from grey to black when section crosses 50%
      if (is50PercentInView && backgroundTransition < 1) {
        setBackgroundTransition(1);
      } else if (!is50PercentInView && backgroundTransition > 0) {
        setBackgroundTransition(0);
      }

      initializeAnimation();
      
      // Hide navbar early when section comes into view
      if (isNavbarHideThreshold) {
        sectionInView = true;
        setIsSectionInView(true);
      } else if (rect.top > window.innerHeight * 0.6) {
        sectionInView = false;
        setIsSectionInView(false);
      }

      // Lock scroll when section reaches top and animation isn't done
      if (isAtTop && !animationComplete) {        
        if (!isScrollLocked) {
          const currentScroll = window.pageYOffset;
          const sectionTop = currentScroll + rect.top;
          lockedScrollPosition = sectionTop;
          isScrollLocked = true;
          
          window.scrollTo({
            top: lockedScrollPosition,
            behavior: 'auto'
          });
          
          // Keep checking to maintain scroll lock
          if (lockEnforceTimer) clearInterval(lockEnforceTimer);
          lockEnforceTimer = setInterval(() => {
            if (isScrollLocked && !animationComplete && window.pageYOffset !== lockedScrollPosition) {
              window.scrollTo({
                top: lockedScrollPosition,
                behavior: 'auto'
              });
            }
          }, 10) as unknown as number;
        }
      } else if (!isAtTop && rect.top > 20) {
        // Reset everything when user scrolls away
        if (sectionInView) {
          currentProgress = 0;
          animationComplete = false;
          isScrollLocked = false;
          lockedScrollPosition = 0;
          isInitialized = false;
          setAnimationProgress(0);
          setIsAnimationComplete(false);
          setBackgroundTransition(0);
          
          if (lockEnforceTimer) {
            clearInterval(lockEnforceTimer);
            lockEnforceTimer = null;
          }
        }
        sectionInView = false;
        setIsSectionInView(false);
      } else if (isAtTop && animationComplete) {
        // Animation done, unlock scrolling
        isScrollLocked = false;
        
        if (lockEnforceTimer) {
          clearInterval(lockEnforceTimer);
          lockEnforceTimer = null;
        }
      } else if (!isAtTop && animationComplete && rect.top > 5) {
        // User scrolling back up after animation - enable reverse
        if (!isScrollLocked) {
          const currentScroll = window.pageYOffset;
          const sectionTop = currentScroll + rect.top;
          lockedScrollPosition = sectionTop;
          isScrollLocked = true;
          animationComplete = false;
          setIsAnimationComplete(false);
          
          window.scrollTo({
            top: lockedScrollPosition,
            behavior: 'auto'
          });
          
          if (lockEnforceTimer) clearInterval(lockEnforceTimer);
          lockEnforceTimer = setInterval(() => {
            if (isScrollLocked && !animationComplete && window.pageYOffset !== lockedScrollPosition) {
              window.scrollTo({
                top: lockedScrollPosition,
                behavior: 'auto'
              });
            }
          }, 10) as unknown as number;
        }
      }
    };    // Prevent normal scrolling when animation is active
    const preventAllScroll = (e: Event) => {
      if (isScrollLocked && !animationComplete) {
        e.preventDefault();
        e.stopPropagation();
        
        setTimeout(() => {
          window.scrollTo({
            top: lockedScrollPosition,
            behavior: 'auto'
          });
        }, 0);
        
        return false;
      }
    };    initializeAnimation();
    handlePageScroll(new Event('scroll'));
    
    window.addEventListener('scroll', handlePageScroll, { passive: false });
    window.addEventListener('scroll', preventAllScroll, { passive: false });
    window.addEventListener('wheel', preventAllScroll, { passive: false });
    window.addEventListener('touchmove', preventAllScroll, { passive: false });

    // Backup detection using intersection observer
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          handlePageScroll(new Event('scroll'));
        }
      },
      { 
        threshold: [0, 0.1]
      }
    );

    observer.observe(section);

    const handleImageLoad = () => {
      const svgHeight = img.naturalHeight || img.height;
      const containerHeight = window.innerHeight;

      const initialY = containerHeight * 0.5;
      const finalY = (containerHeight * 0.5) - svgHeight;

      function updateAnimation(progress: number) {
        const currentY = initialY - (initialY - finalY) * progress;
        img.style.transform = `translate(-50%, ${currentY}px)`;
        
        currentProgress = progress;
        setAnimationProgress(progress);

        const svgBottom = currentY + svgHeight;
        const svgTop = currentY;
        const targetBottomPosition = containerHeight * 0.5;
        const targetTopPosition = containerHeight * 0.5;
        
        // Check if animation should complete
        if (svgBottom <= targetBottomPosition || svgTop >= targetTopPosition || progress >= 1) {
          animationComplete = true;
          setIsAnimationComplete(true);
          
          if (lockEnforceTimer) {
            clearInterval(lockEnforceTimer);
            lockEnforceTimer = null;
          }
        } else if (progress <= 0) {
          // Animation fully reversed - unlock scroll
          animationComplete = true;
          setIsAnimationComplete(true);
          isScrollLocked = false;
          
          if (lockEnforceTimer) {
            clearInterval(lockEnforceTimer);
            lockEnforceTimer = null;
          }
        } else {
          animationComplete = false;
          setIsAnimationComplete(false);
        }
      }      // Handle wheel scrolling for animation
      function handleWheelScroll(e: WheelEvent) {
        if (isScrollLocked && !animationComplete) {
          e.preventDefault();
          e.stopPropagation();
          
          const scrollSensitivity = Math.abs(e.deltaY) / 1000;
          const delta = Math.min(scrollSensitivity, 0.01);
          
          if (e.deltaY > 0) {
            // Scroll down - move animation forward
            const newProgress = Math.min(1, currentProgress + delta);
            updateAnimation(newProgress);
          } else if (e.deltaY < 0) {
            // Scroll up - reverse animation
            const newProgress = Math.max(0, currentProgress - delta);
            updateAnimation(newProgress);
          }
          
          setTimeout(() => {
            window.scrollTo({
              top: lockedScrollPosition,
              behavior: 'auto'
            });
          }, 0);
        }
      }

      function preventScroll(e: Event) {
        if (isScrollLocked && !animationComplete) {
          e.preventDefault();
          e.stopPropagation();
          
          setTimeout(() => {
            window.scrollTo({
              top: lockedScrollPosition,
              behavior: 'auto'
            });
          }, 0);
        }
      }

      updateAnimation(0);

      window.addEventListener('wheel', handleWheelScroll, { passive: false });
      window.addEventListener('scroll', preventScroll, { passive: false });

      return () => {
        window.removeEventListener('wheel', handleWheelScroll);
        window.removeEventListener('scroll', preventScroll);
      };
    };

    if (img.complete) {
      handleImageLoad();
    } else {
      img.onload = handleImageLoad;
    }

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handlePageScroll);
      window.removeEventListener('scroll', preventAllScroll);
      window.removeEventListener('wheel', preventAllScroll);
      window.removeEventListener('touchmove', preventAllScroll);
      
      if (lockEnforceTimer) {
        clearInterval(lockEnforceTimer);
      }
      
      if (img) {
        img.onload = null;
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden transition-all duration-700"
      style={{
        backgroundColor: backgroundTransition === 0 ? '#E7DED7' : '#000000'
      }}
    >
      {/* Journey Text - Only visible in this section */}
      <div 
        className="absolute top-[10%] left-1/2 transform -translate-x-1/2 text-3xl md:text-4xl lg:text-5xl font-bold z-20 uppercase tracking-[2.5px] md:tracking-[3.2px] transition-all duration-700"
        style={{ 
          fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif',
          fontWeight: '400',
          textAlign: 'center',
          fontSize: '2.5rem',
          color: backgroundTransition === 0 ? headerTextColor : '#DDB9A2' // navbar color for grey bg, gold for black
        }}
      >
        OUR JOURNEY
      </div>

      {/* SVG animation container with fade effect */}
      <div 
        className="absolute inset-0 w-full h-full flex justify-center items-start overflow-hidden"
        style={{
          WebkitMaskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 15%, rgba(0, 0, 0, 1) 40%, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, .5) 90%, rgba(0, 0, 0, 0) 100%)',
          maskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 15%, rgba(0, 0, 0, 1) 40%, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, .5) 90%, rgba(0, 0, 0, 0) 100%)'
        }}
      >
        <img
          ref={imgRef}
          src="/animation.svg"
          alt="Journey Animation"
          className="absolute"
          style={{
            left: '50%',
            transform: 'translate(-50%, 50vh)',
            maxWidth: '100%',
            height: 'auto',
            transition: 'none'
          }}
        />
      </div>
    </section>
  );
};