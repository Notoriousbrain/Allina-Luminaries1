import React, { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface MetricData {
  value: string;
  label: string;
}

export const Metrics: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollContentRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const keyFiguresButtonRef = useRef<HTMLButtonElement>(null);
  const climateCommitmentButtonRef = useRef<HTMLButtonElement>(null);
  const keySectionRef = useRef<HTMLDivElement>(null);
  const climateSectionRef = useRef<HTMLDivElement>(null);

  const keyFiguresData: MetricData[] = [
    { value: "1 Mn", label: "Streetlights Deployed" },
    { value: "20K+", label: "CCMS Panels Deployed" },
    { value: "98%", label: "Uptime of Lights" },
    { value: "100%", label: "On-Time Completion" },
  ];

  const climateCommitmentData: MetricData[] = [
    { value: "45%", label: "Energy Efficiency" },
    { value: "5 Mn Kg", label: "Carbon Emissions Reduced" },
  ];

  useGSAP(() => {
    const container = sectionRef.current;
    const scrollWrapper = scrollContentRef.current;
    const keyBtn = keyFiguresButtonRef.current;
    const climateBtn = climateCommitmentButtonRef.current;

    if (!container || !scrollWrapper || !keyBtn || !climateBtn) return;

    const sections = gsap.utils.toArray(
      scrollWrapper.children
    ) as HTMLElement[];

    gsap.to(scrollWrapper, {
      yPercent: -100,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top-=100 top", // Pin when section hits 100px from top
        end: `+=${container.offsetHeight * (sections.length - 1)}`,
        scrub: true,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
        onUpdate: (self) => {
          const isKeyActive = self.progress < 0.5;

          keyBtn.classList.toggle("text-white", isKeyActive);
          keyBtn.classList.toggle("text-[#C1A278]", !isKeyActive);

          climateBtn.classList.toggle("text-white", !isKeyActive);
          climateBtn.classList.toggle("text-[#C1A278]", isKeyActive);
        },
      },
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#E7DED7] py-16 sm:py-20 md:py-24"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2
            ref={titleRef}
            className="text-[#06153A] text-lg sm:text-xl md:text-[25px] font-normal tracking-[2px] sm:tracking-[3px] md:tracking-[4px] uppercase"
            style={{
              fontFamily: "Myriad Pro, Helvetica, Arial, sans-serif",
              fontWeight: 400,
            }}
          >
            OUR METRICS
          </h2>
        </div>

        <div className="w-full bg-black rounded-[30px] p-12 sm:p-16 lg:p-20 xl:p-24 flex flex-col lg:flex-row items-start lg:items-center gap-12 lg:gap-20 xl:gap-24 max-h-[500px] min-h-[500px] lg:min-h-[600px] lg:max-h-[600px]">
          <div className="relative flex flex-row lg:flex-col gap-8 lg:gap-12">
            <div></div>

            <button
              ref={keyFiguresButtonRef}
              className="text-left pl-4 lg:pl-8 text-white"
              style={{
                fontFamily: "Myriad Pro, Helvetica, Arial, sans-serif",
                fontSize: "clamp(16px, 2.5vw, 20px)",
                fontWeight: 400,
                letterSpacing: "0.05em",
              }}
            >
              Key Figures
            </button>

            <button
              ref={climateCommitmentButtonRef}
              className="text-left pl-4 lg:pl-8 text-[#C1A278]"
              style={{
                fontFamily: "Myriad Pro, Helvetica, Arial, sans-serif",
                fontSize: "clamp(16px, 2.5vw, 20px)",
                fontWeight: 400,
                letterSpacing: "0.05em",
              }}
            >
              Climate
              <br className="hidden lg:block" />
              <span className="lg:hidden"> </span>Commitment
            </button>
          </div>

          <div className="w-full bg-black rounded-[30px] overflow-hidden h-[500px] lg:h-[600px]">
            <div ref={scrollContentRef} className="h-full w-full">
              <div ref={keySectionRef} className="h-full snap-start py-6">
                <div className="relative h-full flex flex-col justify-center">
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-white/20"></div>
                    <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/20"></div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 px-8 py-12 lg:py-16 relative z-10">
                    {keyFiguresData.map((metric, index) => (
                      <div key={index} className="text-center">
                        <div
                          className="text-white font-normal mb-4 sm:mb-6"
                          style={{
                            fontFamily:
                              "Myriad Pro, Helvetica, Arial, sans-serif",
                            fontSize: "clamp(3.5rem, 10vw, 6rem)",
                            fontWeight: 300,
                          }}
                        >
                          {metric.value}
                        </div>
                        <div
                          className="text-gray-400"
                          style={{
                            fontFamily:
                              "Myriad Pro, Helvetica, Arial, sans-serif",
                            fontSize: "clamp(14px, 2.5vw, 18px)",
                            fontWeight: 400,
                            letterSpacing: "0.05em",
                          }}
                        >
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div ref={climateSectionRef} className="h-full snap-start py-6">
                <div className="relative h-full flex flex-col justify-center">
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/20"></div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 lg:gap-20 xl:gap-24 max-w-5xl mx-auto px-8 py-12 lg:py-16 relative z-10">
                    {climateCommitmentData.map((metric, index) => (
                      <div key={index} className="text-center">
                        <div
                          className="text-white font-normal mb-4 sm:mb-6"
                          style={{
                            fontFamily:
                              "Myriad Pro, Helvetica, Arial, sans-serif",
                            fontSize: "clamp(3.5rem, 10vw, 6rem)",
                            fontWeight: 300,
                          }}
                        >
                          {metric.value}
                        </div>
                        <div
                          className="text-gray-400"
                          style={{
                            fontFamily:
                              "Myriad Pro, Helvetica, Arial, sans-serif",
                            fontSize: "clamp(14px, 2.5vw, 18px)",
                            fontWeight: 400,
                            letterSpacing: "0.05em",
                          }}
                        >
                          {metric.label}
                        </div>
                      </div>
                    ))}
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
