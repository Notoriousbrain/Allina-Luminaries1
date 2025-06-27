import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

const Solutions = () => {
  const accordionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [openAccordion, setOpenAccordion] = React.useState<string | null>(null);

  const solutions = [
    {
      id: "01",
      title: "STREETLIGHT SUPPLY",
      content: {
        description: "Connecting streetlights to smartphones and apps for advanced features such as dimming, scheduling, and real-time updates",
        features: [
          {
            title: "CCMS",
            description: "Energy-efficient and long-lasting lighting solutions KFS with smart control capabilities and remote monitoring features for optimal performance."
          },
          {
            title: "IOT INTEGRATION",
            description: "Seamless integration with IoT platforms enabling advanced features like real-time monitoring, data analytics, and predictive maintenance."
          },
          {
            title: "AUTOMATION",
            description: "Smart automation systems for efficient operation, including scheduled dimming, fault detection, and energy consumption optimization."
          }
        ]
      }
    },
    {
      id: "02",
      title: "EPC FOR STREETLIGHTS",
      content: {
        description: "Comprehensive EPC services for streetlight infrastructure projects",
        features: [
          {
            title: "PROJECT PLANNING",
            description: "Detailed project planning and design services with focus on efficiency and sustainability."
          },
          {
            title: "IMPLEMENTATION",
            description: "Expert implementation of lighting solutions with quality assurance and timely delivery."
          },
          {
            title: "COMMISSIONING",
            description: "Professional commissioning services ensuring optimal performance and reliability."
          }
        ]
      }
    },
    {
      id: "03",
      title: "OPERATION & MAINTENANCE (O&M)",
      content: {
        description: "Professional O&M services for sustainable lighting infrastructure",
        features: [
          {
            title: "PREVENTIVE MAINTENANCE",
            description: "Regular maintenance schedules to ensure optimal performance and prevent failures."
          },
          {
            title: "EMERGENCY RESPONSE",
            description: "24/7 emergency response team for quick resolution of critical issues."
          },
          {
            title: "PERFORMANCE MONITORING",
            description: "Continuous monitoring and reporting of system performance metrics."
          }
        ]
      }
    },
    {
      id: "04",
      title: "SMART LIGHTING SOLUTIONS",
      content: {
        description: "Advanced smart lighting solutions for modern urban infrastructure",
        features: [
          {
            title: "SMART CONTROLS",
            description: "Intelligent control systems with advanced features for optimal lighting management."
          },
          {
            title: "ENERGY MANAGEMENT",
            description: "Smart energy management solutions for improved efficiency and cost savings."
          },
          {
            title: "DATA ANALYTICS",
            description: "Advanced analytics for performance optimization and predictive maintenance."
          }
        ]
      }
    },
    {
      id: "05",
      title: "END-TO-END SOLUTIONS",
      content: {
        description: "Complete end-to-end lighting infrastructure solutions",
        features: [
          {
            title: "CONSULTING",
            description: "Expert consulting services for optimal solution design and planning."
          },
          {
            title: "IMPLEMENTATION",
            description: "Professional implementation services with quality assurance."
          },
          {
            title: "SUPPORT",
            description: "Comprehensive post-implementation support and maintenance services."
          }
        ]
      }
    }
  ];

  // Initialize GSAP
  useGSAP(() => {
    // Set initial state for all accordion contents
    contentRefs.current.forEach((contentRef) => {
      if (contentRef) {
        gsap.set(contentRef, { height: 0, opacity: 0, overflow: 'hidden' });
      }
    });
  }, []);

  const toggleAccordion = (id: string) => {
    const index = solutions.findIndex(solution => solution.id === id);
    const contentRef = contentRefs.current[index];
    const accordionRef = accordionRefs.current[index];

    if (!contentRef) return;

    if (openAccordion === id) {
      // Close accordion
      gsap.to(contentRef, {
        height: 0,
        opacity: 0,
        duration: 0.6,
        ease: "power2.inOut",
        onComplete: () => {
          setOpenAccordion(null);
        }
      });

      // Animate accordion item back to normal
      gsap.to(accordionRef, {
        backgroundColor: 'transparent',
        duration: 0.4,
        ease: "power2.out"
      });
    } else {
      // Close any previously open accordion
      if (openAccordion) {
        const prevIndex = solutions.findIndex(solution => solution.id === openAccordion);
        const prevContentRef = contentRefs.current[prevIndex];
        const prevAccordionRef = accordionRefs.current[prevIndex];
        
        if (prevContentRef) {
          gsap.to(prevContentRef, {
            height: 0,
            opacity: 0,
            duration: 0.4,
            ease: "power2.inOut"
          });
        }
        
        if (prevAccordionRef) {
          gsap.to(prevAccordionRef, {
            backgroundColor: 'transparent',
            duration: 0.3,
            ease: "power2.out"
          });
        }
      }

      // Open new accordion
      setOpenAccordion(id);
      
      // Animate accordion item
      gsap.to(accordionRef, {
        // backgroundColor: 'rgba(6, 21, 58, 0.05)',
        duration: 0.4,
        ease: "power2.out"
      });

      // Animate content
      gsap.to(contentRef, {
        height: 'auto',
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
        onStart: () => {
          gsap.set(contentRef, { overflow: 'visible' });
        }
      });
    }
  };

  return (
    <>
      {/* STREETLIGHTING SOLUTIONS Section Title */}
      <div className="flex justify-center items-center py-8 sm:py-10 md:py-12 px-4">
        <h2 className="text-[#06153A] text-lg sm:text-xl md:text-[32px] lg:text-[38px] font-normal tracking-[2px] sm:tracking-[3px] md:tracking-[4px] text-center"
            style={{ fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif', fontWeight: 400 }}>
          STREETLIGHTING SOLUTIONS
        </h2>
      </div>

      {/* STREETLIGHTING SOLUTIONS Content */}
      <div className="w-full bg-[#E7DED7] pt-0 pb-0">
        <div className="container mx-auto px-4 flex flex-col items-center">
        
        <div style={{ width: '1360px', maxWidth: '100%' }}>
          <div className="w-full">
            {solutions.map((solution, index) => (
              <div
                key={solution.id}
                ref={(el) => accordionRefs.current[index] = el}
                className="bg-transparent transition-all duration-300 ease-in-out"
                style={{ marginBottom: index < solutions.length - 1 ? '24px' : '0' }}
              >
                <button
                  onClick={() => toggleAccordion(solution.id)}
                  className="flex items-center w-full hover:no-underline py-6 px-0 cursor-pointer transition-all duration-300 ease-in-out"
                  style={{
                    width: '100%',
                    height: '47px',
                    padding: '0'
                  }}
                >
                  <div className="flex items-center gap-4 w-full">
                    <span 
                      className="solutions-number"
                      style={{
                        fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif',
                        fontWeight: 600,
                        fontSize: 'clamp(20px, 3.5vw, 42px)',
                        lineHeight: '100%',
                        letterSpacing: '0.2em',
                        color: '#06153A'
                      }}
                    >
                      {solution.id}
                    </span>
                    <span 
                      className="solutions-title"
                      style={{
                        fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif',
                        fontWeight: 400,
                        fontSize: 'clamp(16px, 2.8vw, 36px)',
                        lineHeight: '100%',
                        letterSpacing: '0.16em',
                        color: '#06153A'
                      }}
                    >
                      {solution.title}
                    </span>
                    <div className="ml-auto transition-transform duration-300 ease-in-out"
                         style={{
                           transform: openAccordion === solution.id ? 'rotate(45deg)' : 'rotate(0deg)'
                         }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 4V20M4 12H20" stroke="#06153A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </button>
                
                {/* Decorative line with gaps */}
                <div style={{ margin: '25px 0' }}>
                  <div 
                    style={{
                      width: '100%',
                      height: '1px',
                      backgroundColor: '#06153A'
                    }}
                  />
                </div>

                <div 
                  ref={(el) => contentRefs.current[index] = el}
                  className="px-0 pt-4 pb-8"
                >
                  <p className="text-[#06153A] mb-8 text-lg">
                    {solution.content.description}
                  </p>
                  {solution.content.features.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                      {solution.content.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="space-y-4">
                          <h3 className="text-[#06153A] font-medium text-lg">
                            {feature.title}
                          </h3>
                          <p className="text-[#06153A] text-base">
                            {feature.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                  <div className="w-full h-[300px] relative mt-8 overflow-hidden rounded-lg">
                    <img
                      src="/images/image2.png"
                      alt={`${solution.title} illustration`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    
    {/* Responsive styles for landscape modes */}
    <style>{`
      /* Mobile devices */
      @media (max-width: 640px) {
        .solutions-number {
          font-size: clamp(18px, 4vw, 24px) !important;
        }
        .solutions-title {
          font-size: clamp(14px, 3.5vw, 20px) !important;
        }
      }
      
      /* Tablet and larger screens */
      @media (min-width: 768px) {
        .solutions-number {
          font-size: clamp(24px, 3.5vw, 42px) !important;
        }
        .solutions-title {
          font-size: clamp(20px, 2.8vw, 36px) !important;
        }
      }
      
      /* Desktop screens */
      @media (min-width: 1024px) {
        .solutions-number {
          font-size: clamp(28px, 3.5vw, 42px) !important;
        }
        .solutions-title {
          font-size: clamp(24px, 2.8vw, 36px) !important;
        }
      }
      
      /* Large desktop screens */
      @media (min-width: 1440px) {
        .solutions-number {
          font-size: clamp(32px, 3.5vw, 48px) !important;
        }
        .solutions-title {
          font-size: clamp(28px, 2.8vw, 40px) !important;
        }
      }
      
      /* Ultra-wide screens */
      @media (min-width: 1920px) {
        .solutions-number {
          font-size: clamp(36px, 3.5vw, 52px) !important;
        }
        .solutions-title {
          font-size: clamp(32px, 2.8vw, 44px) !important;
        }
      }
      
      /* Landscape mode optimizations for tablets */
      @media (max-height: 600px) and (min-width: 768px) {
        .solutions-number {
          font-size: clamp(20px, 3vw, 28px) !important;
        }
        .solutions-title {
          font-size: clamp(16px, 2.5vw, 24px) !important;
        }
      }
      
      /* Very short screens (like tablets in landscape) */
      @media (max-height: 500px) and (min-width: 768px) {
        .solutions-number {
          font-size: clamp(18px, 2.5vw, 24px) !important;
        }
        .solutions-title {
          font-size: clamp(14px, 2vw, 20px) !important;
        }
      }
      
      /* Mobile landscape adjustments */
      @media (max-width: 640px) and (max-height: 500px) {
        .solutions-number {
          font-size: clamp(16px, 4vw, 20px) !important;
        }
        .solutions-title {
          font-size: clamp(12px, 3vw, 16px) !important;
        }
      }
      
      /* Mobile responsive adjustments */
      @media (max-width: 768px) {
        .grid-cols-1.md\\:grid-cols-3 {
          grid-template-columns: 1fr;
        }
      }
      
      /* Smooth transitions for all interactive elements */
      button {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }
      
      button:hover {
        transform: translateY(-1px);
      }
      
      button:active {
        transform: translateY(0);
      }
    `}</style>
    </>
  );
};

export default Solutions; 