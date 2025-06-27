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
      <div className="w-full max-w-[1440px] mx-auto relative px-6 sm:px-10 md:px-16 lg:px-20 flex flex-col justify-center h-full z-10">
        {/* Text Container */}
        <div className="relative w-full h-full flex flex-col items-center justify-center">
          {/* "WHAT WE" text */}
          <div 
            className="relative text-center mb-4 sm:mb-6 md:mb-8"
            style={{
              fontFamily: 'Myriad Pro, sans-serif',
              fontSize: 'clamp(40px, 9vw, 95px)',
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
            className="relative text-center"
            style={{
              fontFamily: 'Anton, sans-serif',
              fontSize: 'clamp(80px, 28vw, 550px)',
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
              maxWidth: '100%',
              wordBreak: 'break-word'
            }}
          >
            OFFER
          </div>
        </div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 z-0"></div>

      {/* Responsive height and font adjustments */}
      <style>{`
        @media (min-width: 640px) {
          .services-hero-section {
            height: calc(100vh - 80px) !important;
            min-height: calc(100vh - 80px) !important;
          }
        }
        @media (min-width: 768px) {
          .services-hero-section {
            height: calc(100vh - 100px) !important;
            min-height: calc(100vh - 100px) !important;
          }
        }
        
        /* Landscape mode optimizations */
        @media (max-height: 600px) {
          .services-hero-section {
            font-size: 0.8em !important;
          }
          .services-hero-section [style*="clamp(40px, 8vw, 90px)"] {
            font-size: clamp(30px, 6vw, 60px) !important;
          }
          .services-hero-section [style*="clamp(80px, 20vw, 450px)"] {
            font-size: clamp(60px, 15vw, 300px) !important;
          }
        }
        
        /* Very short screens (like tablets in landscape) */
        @media (max-height: 500px) {
          .services-hero-section [style*="clamp(40px, 8vw, 90px)"] {
            font-size: clamp(25px, 5vw, 45px) !important;
          }
          .services-hero-section [style*="clamp(80px, 20vw, 450px)"] {
            font-size: clamp(50px, 12vw, 200px) !important;
          }
          .services-hero-section .mb-4 {
            margin-bottom: 0.5rem !important;
          }
          .services-hero-section .sm\\:mb-6 {
            margin-bottom: 0.75rem !important;
          }
          .services-hero-section .md\\:mb-8 {
            margin-bottom: 1rem !important;
          }
        }
        
        /* Tablet and larger screens - Bigger fonts */
        @media (min-width: 768px) {
          .services-hero-section [style*="clamp(40px, 8vw, 120px)"] {
            font-size: clamp(60px, 8vw, 140px) !important;
          }
          .services-hero-section [style*="clamp(80px, 22vw, 550px)"] {
            font-size: clamp(120px, 22vw, 600px) !important;
          }
        }
        
        /* Ultra-wide screens */
        @media (min-width: 1440px) {
          .services-hero-section [style*="clamp(40px, 8vw, 120px)"] {
            font-size: clamp(80px, 8vw, 160px) !important;
          }
          .services-hero-section [style*="clamp(80px, 22vw, 550px)"] {
            font-size: clamp(150px, 22vw, 700px) !important;
          }
        }
        
        /* Mobile phone viewport adjustments */
        @media (max-width: 640px) {
          .services-hero-section {
            height: 100vh !important;
            min-height: 100vh !important;
          }
        }
        
        /* Very narrow screens */
        @media (max-width: 480px) {
          .services-hero-section [style*="clamp(40px, 8vw, 90px)"] {
            font-size: clamp(20px, 8vw, 35px) !important;
          }
          .services-hero-section [style*="clamp(80px, 20vw, 450px)"] {
            font-size: clamp(40px, 20vw, 80px) !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ServicesHero; 