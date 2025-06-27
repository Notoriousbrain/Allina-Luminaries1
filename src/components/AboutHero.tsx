import React from 'react';

export const AboutHero = () => {
  return (
    <div 
      className="relative w-full overflow-hidden mb-0"
      style={{
        height: '86.25vh',
        backgroundColor: '#06153A'
      }}
    >
      {/* Main heading group with line */}
      <div 
        className="about-hero-heading-group"
        style={{
          position: 'absolute',
          width: '50%',
          height: '50%',
          top: '7.28%',
          left: '3.61%'
        }}
      >
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
          {/* WHO heading with line */}
          <div className="flex items-center" style={{ position: 'absolute', top: '0', left: '0', width: '100%' }}>
            <div
              className="about-hero-heading-who"
              style={{
                fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif',
                fontWeight: 400,
                color: '#ffffff',
                fontSize: 'clamp(5rem, 11vw, 10rem)',
                letterSpacing: 'clamp(0.2rem, 0.8vw, 0.6rem)',
                lineHeight: '1',
                marginRight: 'clamp(1rem, 3vw, 2rem)'
              }}
            >
              WHO
            </div>
            
            {/* Decorative line after WHO */}
            <div
              style={{
                flex: '1',
                height: '1px',
                backgroundColor: '#ffffff',
                maxWidth: '300px'
              }}
            />
          </div>
          
          {/* WE ARE heading */}
          <div
            className="about-hero-heading-we-are"
            style={{
              position: 'absolute',
              top: 'clamp(5rem, 11vw, 10rem)',
              left: '0',
              fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif',
              fontWeight: 400,
              color: '#ffffff',
              fontSize: 'clamp(4rem, 10vw, 8rem)',
              letterSpacing: 'clamp(0.2rem, 0.8vw, 0.6rem)',
              lineHeight: '1'
            }}
          >
            WE ARE
          </div>
        </div>
      </div>

      {/* Bottom right description */}
      <p
        className="about-hero-text"
        style={{
          position: 'absolute',
          width: '20.42%',
          top: '78.28%',
          left: '76.81%',
          fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif',
          fontWeight: 400,
          color: '#ffffff',
          fontSize: '1.11vw',
          textAlign: 'justify',
          letterSpacing: '0',
          lineHeight: '1.875vw'
        }}
      >
        Over the years, ALLINA has evolved into a forward-thinking organization with a broader vision to address the growing demands of modern infrastructure.
      </p>

      {/* First image - left middle */}
      <img
        className="about-hero-image"
        src="/images/image1.jpg"
        alt="ALLINA infrastructure"
        style={{
          position: 'absolute',
          width: '18%',
          height: '78%',
          top: '20.79%',
          left: '57%',
          objectFit: 'cover',
          filter: 'grayscale(100%)'
        }}
      />

      {/* Second image - top right */}
      <img
        className="about-hero-image"
        src="/images/image2.png"
        alt="ALLINA team"
        style={{
          position: 'absolute',
          width: '20%',
          height: '69%',
          top: '7.28%',
          left: '77%',
          objectFit: 'cover',
          filter: 'grayscale(100%)'
        }}
      />

      {/* Bottom left description */}
      <p
        className="about-hero-text"
        style={{
          position: 'absolute',
          width: '24.65%',
          top: '67.55%',
          left: '3.61%',
          fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif',
          fontWeight: 400,
          color: '#ffffff',
          fontSize: '1.11vw',
          textAlign: 'justify',
          letterSpacing: '0',
          lineHeight: '1.875vw'
        }}
      >
        ALLINA, formerly known as Allina Luminaries, began its journey as a dedicated provider of high-quality streetlighting solutions. With a strong foundation in engineering, procurement, and construction (EPC) services, the company has established itself as a trusted name in the streetlighting industry
      </p>

      {/* Third image - bottom center */}
      <img
        className="about-hero-image"
        src="/images/image3.jpg"
        alt="ALLINA solutions"
        style={{
          position: 'absolute',
          width: '18%',
          height: '42%',
          top: '56.56%',
          left: '37%',
          objectFit: 'cover',
          filter: 'grayscale(100%)'
        }}
      />

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 1024px) {
          .about-hero-heading-who,
          .about-hero-heading-we-are {
            font-size: clamp(3rem, 8vw, 6rem) !important;
            letter-spacing: clamp(0.15rem, 0.6vw, 0.4rem) !important;
          }
          
          .about-hero-heading-we-are {
            top: clamp(4rem, 7vw, 5.5rem) !important;
          }
          
          .about-hero-text {
            font-size: 1.5vw !important;
            line-height: 2.5vw !important;
          }
          
          .about-hero-image {
            width: 14% !important;
          }
        }

        @media (max-width: 768px) {
          .about-hero-heading-group {
            width: 90% !important;
            height: auto !important;
            top: 5% !important;
          }
          
          .about-hero-heading-who,
          .about-hero-heading-we-are {
            font-size: clamp(2.5rem, 12vw, 4rem) !important;
            letter-spacing: clamp(0.1rem, 1vw, 0.3rem) !important;
          }
          
          .about-hero-heading-we-are {
            top: clamp(3rem, 10vw, 4rem) !important;
          }
          
          .about-hero-text {
            width: 85% !important;
            font-size: 2.5vw !important;
            line-height: 3.5vw !important;
          }
          
          .about-hero-image {
            width: 35% !important;
            height: auto !important;
          }
        }

        @media (max-width: 480px) {
          .about-hero-heading-group {
            width: 95% !important;
            top: 3% !important;
          }
          
          .about-hero-heading-who,
          .about-hero-heading-we-are {
            font-size: clamp(2rem, 15vw, 3rem) !important;
            letter-spacing: clamp(0.05rem, 1.2vw, 0.2rem) !important;
          }
          
          .about-hero-heading-we-are {
            top: clamp(2.5rem, 12vw, 3.5rem) !important;
          }
          
          .about-hero-text {
            width: 90% !important;
            font-size: 3.5vw !important;
            line-height: 4.5vw !important;
          }
          
          .about-hero-image {
            width: 40% !important;
          }
        }
      `}</style>
    </div>
  );
};
