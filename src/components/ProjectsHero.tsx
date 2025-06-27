import React from 'react';

export const ProjectsHero: React.FC = () => {
  return (
    <section
      className="w-full bg-[#06153A] relative overflow-hidden projects-hero-section flex items-center"
      style={{
        height: 'calc(100vh - 60px)',
        minHeight: 'calc(100vh - 60px)',
      }}
    >
      {/* Content container */}
      <div className="w-full max-w-[1440px] mx-auto relative px-6 sm:px-10 md:px-16 lg:px-20 flex flex-col h-full z-10">
        {/* Top section with text */}
        <div className="pt-16 sm:pt-20 md:pt-24 lg:pt-28">
          {/* Left Heading Block */}
          <div className="relative z-10 max-w-[600px]">
            <div className="relative">
              <h1
                className="text-white text-[50px] sm:text-[70px] md:text-[90px] lg:text-[110px] font-normal leading-none"
                style={{
                  fontFamily:
                    '"Myriad Pro", "Myriad Pro-SemiExtended", Helvetica, Arial, sans-serif',
                  fontWeight: 200,
                }}
              >
                OUR
              </h1>
              {/* Decorative Line */}
              <div className="absolute top-1/2 left-[50%] w-[150px] sm:w-[200px] md:w-[250px] lg:w-[300px] h-[3px] bg-white transform -translate-y-1/2"></div>
            </div>
            <h1
              className="text-white text-[50px] sm:text-[70px] md:text-[90px] lg:text-[110px] font-normal leading-none mt-4"
              style={{
                fontFamily:
                  '"Myriad Pro", "Myriad Pro-SemiExtended", Helvetica, Arial, sans-serif',
                fontWeight: 200,
              }}
            >
              PROJECTS
            </h1>
          </div>
        </div>
      </div>

      {/* SVG Image - Right side of viewport, bottom of hero section */}
      <div className="absolute bottom-0 right-0 w-[85%] sm:w-[90%] md:w-[85%] lg:w-[70%] z-0">
        <img
          src="/images/Project.svg"
          alt="City Skyline"
          className="w-full h-auto object-contain object-bottom-right"
          style={{
            filter: 'brightness(1.1)',
            maxHeight: '60vh'
          }}
        />
      </div>

      {/* Bottom Bar */}
      <div className="absolute bottom-0 left-0 w-full h-[13px] bg-[#06153A] z-20"></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#06153A] via-transparent to-[#06153A]/30 pointer-events-none z-5"></div>

      {/* Responsive height adjustments */}
      <style>{`
        @media (min-width: 640px) {
          .projects-hero-section {
            height: calc(100vh - 80px) !important;
            min-height: calc(100vh - 80px) !important;
          }
        }
        @media (min-width: 768px) {
          .projects-hero-section {
            height: calc(100vh - 100px) !important;
            min-height: calc(100vh - 100px) !important;
          }
        }
        
        /* Landscape mode optimizations */
        @media (max-height: 600px) {
          .projects-hero-section .text-[50px] {
            font-size: 35px !important;
          }
          .projects-hero-section .sm\\:text-[70px] {
            font-size: 45px !important;
          }
          .projects-hero-section .md\\:text-[90px] {
            font-size: 55px !important;
          }
          .projects-hero-section .lg\\:text-[110px] {
            font-size: 65px !important;
          }
          .projects-hero-section .pt-16 {
            padding-top: 2rem !important;
          }
          .projects-hero-section .sm\\:pt-20 {
            padding-top: 2.5rem !important;
          }
          .projects-hero-section .md\\:pt-24 {
            padding-top: 3rem !important;
          }
          .projects-hero-section .lg\\:pt-28 {
            padding-top: 3.5rem !important;
          }
          .projects-hero-section .w-[150px] {
            width: 120px !important;
          }
          .projects-hero-section .sm\\:w-[200px] {
            width: 150px !important;
          }
          .projects-hero-section .md\\:w-[250px] {
            width: 180px !important;
          }
          .projects-hero-section .lg\\:w-[300px] {
            width: 220px !important;
          }
        }
        
        /* Very short screens (like tablets in landscape) */
        @media (max-height: 500px) {
          .projects-hero-section .text-[50px] {
            font-size: 30px !important;
          }
          .projects-hero-section .sm\\:text-[70px] {
            font-size: 35px !important;
          }
          .projects-hero-section .md\\:text-[90px] {
            font-size: 40px !important;
          }
          .projects-hero-section .lg\\:text-[110px] {
            font-size: 45px !important;
          }
          .projects-hero-section .pt-16 {
            padding-top: 1rem !important;
          }
          .projects-hero-section .sm\\:pt-20 {
            padding-top: 1.25rem !important;
          }
          .projects-hero-section .md\\:pt-24 {
            padding-top: 1.5rem !important;
          }
          .projects-hero-section .lg\\:pt-28 {
            padding-top: 1.75rem !important;
          }
          .projects-hero-section .mt-4 {
            margin-top: 0.5rem !important;
          }
          .projects-hero-section .w-[150px] {
            width: 100px !important;
          }
          .projects-hero-section .sm\\:w-[200px] {
            width: 120px !important;
          }
          .projects-hero-section .md\\:w-[250px] {
            width: 140px !important;
          }
          .projects-hero-section .lg\\:w-[300px] {
            width: 160px !important;
          }
        }
        
        /* Ultra-wide screens */
        @media (min-width: 1440px) {
          .projects-hero-section .lg\\:text-[110px] {
            font-size: 130px !important;
          }
          .projects-hero-section .lg\\:w-[300px] {
            width: 350px !important;
          }
        }
        
        /* Mobile phone viewport adjustments */
        @media (max-width: 640px) {
          .projects-hero-section {
            height: 100vh !important;
            min-height: 100vh !important;
          }
        }
        
        /* Very narrow but tall screens */
        @media (max-width: 480px) and (min-height: 800px) {
          .projects-hero-section .pt-16 {
            padding-top: 4rem !important;
          }
        }
        
        /* Tablet SVG size improvements */
        @media (min-width: 640px) and (max-width: 1024px) {
          .projects-hero-section img {
            max-height: 65vh !important;
          }
        }
      `}</style>
    </section>
  );
};
