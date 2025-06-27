import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section
      className="hero-section"
      style={{
        width: '100%',
        height: 'calc(100vh - 60px)', // Mobile: 100vh - 60px header
        background: '#06153A',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 0,
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 2vw',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* Responsive Video Logo */}
        <video
          src={"/images/Allina.mp4"}
          autoPlay
          loop
          muted
          playsInline
          className="hero-video"
          style={{
            display: 'block',
            objectFit: 'cover',
            width: '22vw',
            maxWidth: 220,
            minWidth: 80,
            height: '22vw',
            maxHeight: 220,
            minHeight: 80,
            margin: '2vw auto 1vw auto',
            background: '#06153A',
            border: 'none',
          }}
        />
        {/* ALLINA Heading - fix letter-spacing after last letter */}
        <h1
          className="hero-allina"
          style={{
            fontFamily: 'Myriad Pro, Arial, Helvetica, sans-serif',
            fontWeight: 400,
            fontSize: 'clamp(2rem, 13vw, 11rem)',
            lineHeight: 1,
            color: '#DDB9A2',
            textAlign: 'center',
            width: '100%',
            margin: 0,
            marginBottom: '0vw',
            wordBreak: 'break-word',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          {['A', 'L', 'L', 'I', 'N', 'A'].map((char, idx, arr) => (
            <span
              key={idx}
              style={{
                letterSpacing: idx !== arr.length - 1 ? '0.25em' : '0',
                display: 'inline-block',
              }}
            >
              {char}
            </span>
          ))}
        </h1>
        {/* Tagline */}
        <div
          className="hero-tagline"
          style={{
            width: '100%',
            maxWidth: 900,
            margin: '0 auto',
            marginBottom: '3.8vw',
            marginTop: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span
            style={{
              fontFamily: 'Myriad Pro, Arial, Helvetica, sans-serif',
              fontWeight: 400,
              fontSize: 'clamp(0.8rem, 1.7vw, 1.1rem)',
              lineHeight: 1.1,
              letterSpacing: '0.5em',
              color: '#fff',
              textAlign: 'center',
              width: '100%',
              display: 'block',
              wordBreak: 'break-word',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            ILLUMINATING PROGRESS | EMPOWERING GROWTH
          </span>
        </div>
        {/* Paragraph */}
        <div
          className="hero-paragraph"
          style={{
            width: '100%',
            maxWidth: 960,
            margin: '0 auto',
            marginBottom: '1vw',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span
            style={{
              fontFamily: 'Myriad Pro, Arial, Helvetica, sans-serif',
              fontWeight: 400,
              fontSize: 'clamp(0.85rem, 1.5vw, 1rem)',
              lineHeight: 1.5,
              letterSpacing: 0,
              color: '#fff',
              textAlign: 'center',
              width: '100%',
              display: 'block',
              wordBreak: 'break-word',
            }}
          >
            From smart streetlighting solutions to end-to-end EPC services, ALLINA is committed to delivering innovative, sustainable, and reliable infrastructure solutions. Together, we light the way to a brighter future.
          </span>
        </div>
      </div>
      {/* Responsive styles */}
      <style>{`
        /* Small screens (sm) - 100vh minus 80px header */}
        @media (min-width: 640px) {
          .hero-section {
            height: calc(100vh - 80px) !important;
          }
        }
        
        /* Medium screens and larger (md+) - 100vh minus 100px header */}
        @media (min-width: 768px) {
          .hero-section {
            height: calc(100vh - 100px) !important;
          }
        }
        
        /* Mobile styles adjustments */}
        @media (max-width: 700px) {
          .hero-video {
            margin-top: 2vw !important;
            margin-bottom: 1vw !important;
            width: 70px !important;
            height: 70px !important;
            min-width: 50px !important;
            min-height: 50px !important;
            max-width: 90px !important;
            max-height: 90px !important;
          }
          .hero-allina {
            font-size: 2.1rem !important;
            margin-bottom: 1vw !important;
            letter-spacing: 0.18em !important;
          }
          .hero-tagline {
            font-size: 0.75rem !important;
            margin-bottom: 1vw !important;
            white-space: nowrap !important;
            overflow: hidden !important;
            text-overflow: ellipsis !important;
          }
          .hero-paragraph {
            font-size: 0.85rem !important;
            margin-bottom: 0vw !important;
            line-height: 1.3 !important;
            max-width: 95vw !important;
          }
          .hero-allina, .hero-tagline, .hero-paragraph {
            text-align: center !important;
            justify-content: center !important;
            align-items: center !important;
            margin-left: auto !important;
            margin-right: auto !important;
            width: 100% !important;
            display: flex !important;
          }
        }
        @media (max-width: 500px) {
          .hero-video {
            width: 50px !important;
            height: 50px !important;
            min-width: 40px !important;
            min-height: 40px !important;
            max-width: 60px !important;
            max-height: 60px !important;
          }
          .hero-allina {
            font-size: 1.3rem !important;
            margin-bottom: 1vw !important;
            letter-spacing: 0.13em !important;
          }
          .hero-tagline {
            font-size: 0.6rem !important;
            margin-bottom: 1vw !important;
            white-space: nowrap !important;
            overflow: hidden !important;
            text-overflow: ellipsis !important;
          }
          .hero-paragraph {
            font-size: 0.7rem !important;
            margin-bottom: 0vw !important;
            line-height: 1.2 !important;
            max-width: 98vw !important;
          }
        }
      `}</style>
    </section>
  );
};
