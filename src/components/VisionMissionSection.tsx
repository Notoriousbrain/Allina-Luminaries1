import React, { useRef } from 'react';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ContentData {
  quote: string;
  description: string;
  emphasizedWords: string[];
}

export const VisionMissionSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollContentRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const visionButtonRef = useRef<HTMLButtonElement>(null);
  const missionButtonRef = useRef<HTMLButtonElement>(null);
  const visionSectionRef = useRef<HTMLDivElement>(null);
  const missionSectionRef = useRef<HTMLDivElement>(null);

  const contentData: Record<string, ContentData> = {
    vision: {
      quote: "TO ILLUMINATE THE FUTURE WITH SUSTAINABLE, SMART, AND RELIABLE LIGHTING SOLUTIONS THAT ENHANCE COMMUNITIES AND PROTECT OUR PLANET",
      description: "We envision a world where every street, every community, and every corner is illuminated by intelligent, energy-efficient lighting systems that not only provide safety and security but also contribute to environmental sustainability and urban development.",
      emphasizedWords: ["ILLUMINATE", "FUTURE", "SUSTAINABLE", "SMART", "RELIABLE", "ENHANCE", "COMMUNITIES", "PROTECT", "PLANET"]
    },
    mission: {
      quote: "TO DELIVER CUTTING-EDGE STREET LIGHTING INFRASTRUCTURE THROUGH INNOVATIVE TECHNOLOGY, EXCEPTIONAL SERVICE, AND UNWAVERING COMMITMENT TO EXCELLENCE",
      description: "Our mission is to transform urban landscapes through state-of-the-art lighting solutions, providing comprehensive EPC services, IoT integration, and sustainable energy management that creates safer, smarter, and more connected communities worldwide.",
      emphasizedWords: ["DELIVER", "CUTTING-EDGE", "INFRASTRUCTURE", "INNOVATIVE", "TECHNOLOGY", "EXCEPTIONAL", "SERVICE", "COMMITMENT", "EXCELLENCE"]
    }
  };

  const renderQuoteWithEmphasis = (quote: string, emphasizedWords: string[]) => {
    const words = quote.split(' ');
    return words.map((word, index) => {
      const cleanWord = word.replace(/[.,!?;]/g, '');
      const isEmphasized = emphasizedWords.includes(cleanWord);
      const punctuation = word.match(/[.,!?;]/g)?.[0] || '';
      
      return (
        <span key={index}>
          <span className={isEmphasized ? 'text-white font-semibold' : 'text-gray-400'}>
            {cleanWord}
          </span>
          {punctuation && <span className="text-gray-400">{punctuation}</span>}
          {index < words.length - 1 && ' '}
        </span>
      );
    });
  };

  useGSAP(() => {
    const container = sectionRef.current;
    const scrollWrapper = scrollContentRef.current;
    const background = backgroundRef.current;
    const visionBtn = visionButtonRef.current;
    const missionBtn = missionButtonRef.current;

    if (!container || !scrollWrapper || !background || !visionBtn || !missionBtn) return;

    const sections = gsap.utils.toArray(
      scrollWrapper.children
    ) as HTMLElement[];

    // Main scroll animation
    gsap.to(scrollWrapper, {
      yPercent: -100,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "center center", // Pin when section center aligns with viewport center
        end: `+=${container.offsetHeight * (sections.length - 1)}`,
        scrub: true,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
        onUpdate: (self) => {
          const isVisionActive = self.progress < 0.5;

          visionBtn.classList.toggle("text-white", isVisionActive);
          visionBtn.classList.toggle("text-[#C1A278]", !isVisionActive);

          missionBtn.classList.toggle("text-white", !isVisionActive);
          missionBtn.classList.toggle("text-[#C1A278]", isVisionActive);
        },
      },
    });

    // Background zoom animation
    gsap.fromTo(background, 
      {
        scale: 1.2, // Start zoomed in
      },
      {
        scale: 1.0, // End at original size
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "center center", // Start zoom when section center aligns with viewport center
          end: `+=${container.offsetHeight * (sections.length - 1)}`,
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#E7DED7] py-12 sm:py-19 md:py-21 mb-0"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Title */}
        <div className="text-center mb-6 sm:mb-9">
          <h2 className="text-[#06153A] text-lg sm:text-xl md:text-[25px] font-normal tracking-[2px] sm:tracking-[3px] md:tracking-[4px] text-center"
              style={{ fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif', fontWeight: 400 }}>
            OUR PURPOSE
          </h2>
        </div>

        {/* Main Container */}
        <div className="w-full bg-black rounded-[30px] p-8 sm:p-12 lg:p-16 xl:p-20 flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-16 xl:gap-20 min-h-[500px] lg:min-h-[600px] relative overflow-hidden">
          {/* Background Image with Zoom Effect - Covers Entire Component */}
          <div 
            ref={backgroundRef}
            className="absolute inset-0 w-full h-full z-0 rounded-[30px]"
            style={{
              backgroundImage: `url('/images/image1.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              transformOrigin: 'center center'
            }}
          ></div>
          
          {/* Dark Gradient Overlay - Covers Entire Component */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/60 rounded-[30px] z-10"></div>

          {/* Left Sidebar - Navigation */}
          <div className="relative flex flex-row lg:flex-col gap-6 lg:gap-8 z-20">
            <div></div>

            <button
              ref={visionButtonRef}
              className="text-left pl-4 lg:pl-8 text-white"
              style={{
                fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif',
                fontSize: 'clamp(16px, 2.5vw, 20px)',
                fontWeight: 500,
                letterSpacing: '0.1em',
                textTransform: 'uppercase'
              }}
            >
              VISION
            </button>

            <button
              ref={missionButtonRef}
              className="text-left pl-4 lg:pl-8 text-[#C1A278]"
        style={{
                fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif',
                fontSize: 'clamp(16px, 2.5vw, 20px)',
                fontWeight: 500,
                letterSpacing: '0.1em',
                textTransform: 'uppercase'
              }}
            >
              MISSION
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="w-full rounded-[30px] overflow-hidden h-[500px] lg:h-[600px] relative z-20">
            
            <div ref={scrollContentRef} className="h-full w-full relative z-30">
              {/* Vision Section */}
              <div 
                ref={visionSectionRef} 
                className="h-full snap-start py-6 relative"
              >
                <div className="h-full flex flex-col justify-center px-8 py-12 lg:py-16">
                  {/* Large Quotation Mark */}
                  <div className="text-5xl sm:text-6xl lg:text-7xl text-white font-serif mb-4 lg:mb-6 text-center">
                    "
                  </div>

                  {/* Main Quote */}
                  <div className="mb-10 lg:mb-12">
                    <p 
                      className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl leading-relaxed lg:leading-relaxed text-center tracking-wide"
                      style={{
                        fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif',
                        lineHeight: '1.4'
                      }}
                    >
                      {renderQuoteWithEmphasis(contentData.vision.quote, contentData.vision.emphasizedWords)}
                    </p>
                  </div>

                  {/* Description */}
                  <div className="max-w-4xl mx-auto">
                    <p 
                      className="text-gray-300 text-base sm:text-lg leading-relaxed text-center"
                      style={{
                        fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif',
                        lineHeight: '1.6',
                        letterSpacing: '0.05em'
                      }}
                    >
                      {contentData.vision.description}
            </p>
          </div>
                </div>
              </div>

              {/* Mission Section */}
              <div 
                ref={missionSectionRef} 
                className="h-full snap-start py-6 relative"
              >
                <div className="h-full flex flex-col justify-center px-8 py-12 lg:py-16">
                  {/* Large Quotation Mark */}
                  <div className="text-5xl sm:text-6xl lg:text-7xl text-white font-serif mb-4 lg:mb-6 text-center">
                    "
                  </div>

                  {/* Main Quote */}
                  <div className="mb-10 lg:mb-12">
                    <p 
                      className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl leading-relaxed lg:leading-relaxed text-center tracking-wide"
                      style={{
                        fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif',
                        lineHeight: '1.4'
                      }}
                    >
                      {renderQuoteWithEmphasis(contentData.mission.quote, contentData.mission.emphasizedWords)}
                    </p>
        </div>

                  {/* Description */}
                  <div className="max-w-4xl mx-auto">
                    <p 
                      className="text-gray-300 text-base sm:text-lg leading-relaxed text-center"
                      style={{
                        fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif',
                        lineHeight: '1.6',
                        letterSpacing: '0.05em'
                      }}
                    >
                      {contentData.mission.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 