import React from 'react';

const ServicesHero = () => {
  return (
    <section 
      className="relative w-full overflow-hidden flex items-center justify-center services-hero-section" 
      style={{
        background: '#05343E',
        height: 'calc(100vh - 60px)',
        minHeight: 'calc(100vh - 60px)',
      }}
    >
      {/* Content container */}
      <div className="w-full max-w-[1440px] mx-auto relative px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 flex flex-col justify-center h-full z-10">
        {/* Text Container */}
        <div className="relative w-full h-full flex flex-col items-center justify-center">
          {/* "WHAT WE" text */}
          <div 
            className="relative text-center mb-2 sm:mb-4 md:mb-6 lg:mb-8 what-we-text"
            style={{
              fontFamily: 'Myriad Pro, sans-serif',
              fontSize: 'clamp(24px, 6vw, 95px)',
              fontWeight: '400',
              letterSpacing: '0.1em',
              color: 'white',
              zIndex: 10,
              lineHeight: '1.2'
            }}
          >
            WHAT WE
          </div>

          {/* "OFFER" text with image mask */}
          <div 
            className="relative text-center offer-text"
            style={{
              fontFamily: 'Anton, sans-serif',
              fontSize: 'clamp(48px, 18vw, 550px)',
              fontWeight: '400',
              letterSpacing: '0.05em',
              textAlign: 'center',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
              backgroundImage: 'url(/images/image1.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              zIndex: 10,
              lineHeight: '0.9',
              width: '80vw',
              maxWidth: '80vw',
              whiteSpace: 'nowrap',
              overflow: 'hidden'
            }}
          >
            OFFER
          </div>
        </div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 z-0"></div>

      {/* Responsive styles */}
      <style>{`
        /* Base styles for all screen sizes */
        .services-hero-section {
          height: calc(100vh - 60px);
          min-height: calc(100vh - 60px);
        }

        /* Mobile phones (up to 640px) */
        @media (max-width: 640px) {
          .services-hero-section {
            height: 100vh;
            min-height: 100vh;
          }
          
          .what-we-text {
            font-size: clamp(20px, 8vw, 35px) !important;
            margin-bottom: 0.5rem !important;
          }
          
          .offer-text {
            font-size: clamp(36px, 12vw, 80px) !important;
          }
        }

        /* Small tablets (641px - 768px) */
        @media (min-width: 641px) and (max-width: 768px) {
          .services-hero-section {
            height: calc(100vh - 80px);
            min-height: calc(100vh - 80px);
          }
          
          .what-we-text {
            font-size: clamp(32px, 7vw, 60px) !important;
            margin-bottom: 1rem !important;
          }
          
          .offer-text {
            font-size: clamp(64px, 14vw, 200px) !important;
          }
        }

        /* Tablets (769px - 1024px) */
        @media (min-width: 769px) and (max-width: 1024px) {
          .services-hero-section {
            height: calc(100vh - 100px);
            min-height: calc(100vh - 100px);
          }
          
          .what-we-text {
            font-size: clamp(48px, 8vw, 80px) !important;
            margin-bottom: 1.5rem !important;
          }
          
          .offer-text {
            font-size: clamp(96px, 16vw, 300px) !important;
          }
        }

        /* Desktop (1025px - 1440px) */
        @media (min-width: 1025px) and (max-width: 1440px) {
          .services-hero-section {
            height: calc(100vh - 100px);
            min-height: calc(100vh - 100px);
          }
          
          .what-we-text {
            font-size: clamp(60px, 8vw, 95px) !important;
            margin-bottom: 2rem !important;
          }
          
          .offer-text {
            font-size: clamp(120px, 18vw, 450px) !important;
          }
        }

        /* Large desktop (1441px and up) */
        @media (min-width: 1441px) {
          .services-hero-section {
            height: calc(100vh - 100px);
            min-height: calc(100vh - 100px);
          }
          
          .what-we-text {
            font-size: clamp(80px, 8vw, 120px) !important;
            margin-bottom: 2rem !important;
          }
          
          .offer-text {
            font-size: clamp(150px, 20vw, 550px) !important;
          }
        }

        /* Landscape mode optimizations for short screens */
        @media (max-height: 600px) and (orientation: landscape) {
          .services-hero-section {
            height: 100vh;
            min-height: 100vh;
          }
          
          .what-we-text {
            font-size: clamp(20px, 4vw, 40px) !important;
            margin-bottom: 0.25rem !important;
          }
          
          .offer-text {
            font-size: clamp(40px, 8vw, 120px) !important;
          }
        }

        /* Very short screens (like tablets in landscape) */
        @media (max-height: 500px) and (orientation: landscape) {
          .what-we-text {
            font-size: clamp(16px, 3vw, 30px) !important;
            margin-bottom: 0.125rem !important;
          }
          
          .offer-text {
            font-size: clamp(32px, 6vw, 80px) !important;
          }
        }

        /* Ultra-wide screens */
        @media (min-width: 1920px) {
          .what-we-text {
            font-size: clamp(100px, 8vw, 140px) !important;
          }
          
          .offer-text {
            font-size: clamp(180px, 22vw, 700px) !important;
          }
        }

        /* Ensure text doesn't overflow on very narrow screens */
        @media (max-width: 360px) {
          .what-we-text {
            font-size: clamp(18px, 6vw, 25px) !important;
          }
          
          .offer-text {
            font-size: clamp(32px, 10vw, 60px) !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ServicesHero; 