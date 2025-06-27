import React, { useState, useRef, useEffect } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./ui/accordion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const OurValues = () => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const accordionRefs = useRef([]);
  const contentRefs = useRef([]);
  const buttonRef = useRef(null);

  const values = [
    {
      num: "01.",
      title: "SUSTAINABILITY",
      short: "SUSTAINABILITY",
      desc: "We are committed to environmentally responsible practices, ensuring that our projects contribute to a greener and more sustainable future.",
    },
    {
      num: "02.",
      title: "INNOVATION",
      short: "INNOVATION",
      desc: "We embrace new technologies and ideas to deliver smarter, more efficient solutions that meet the evolving needs of our clients and communities.",
    },
    {
      num: "03.",
      title: "QUALITY",
      short: "QUALITY",
      desc: "Excellence is at the heart of everything we do. From the materials we use to the services we provide, we maintain the highest standards of quality.",
    },
    {
      num: "04.",
      title: "CUSTOMER FOCUS",
      short: "CUSTOMER FOCUS",
      desc: "Our clients are at the centre of our operations. We strive to build strong relationships by understanding their needs and exceeding their expectations.",
    },
    {
      num: "05.",
      title: "INTEGRITY",
      short: "INTEGRITY",
      desc: "We operate with transparency, honesty, and accountability, fostering trust and respect with our clients, partners, and employees.",
    },
    {
      num: "06.",
      title: "COLLABORATION",
      short: "COLLABORATION",
      desc: "We believe in the power of teamwork and partnerships, working together to achieve shared goals and create lasting value.",
    },
  ];

  const [openItems, setOpenItems] = useState([]);
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  const allOpen = openItems.length === values.length;

  // GSAP animations
  useGSAP(() => {
    // Initial animation for the container
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
      }
    );

    // Stagger animation for accordion items
    gsap.fromTo(
      accordionRefs.current,
      { opacity: 0, x: 30, scale: 0.95 },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.4,
      }
    );

    // Image animation
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, scale: 0.85, rotation: -8, y: 30 },
      {
        opacity: 1,
        scale: 1,
        rotation: 0,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
        delay: 0.6,
      }
    );

    // Button animation
    gsap.fromTo(
      buttonRef.current,
      { opacity: 0, y: 20, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "power3.out",
        delay: 0.8,
      }
    );
  }, []);

  // Animate accordion content
  const animateAccordionContent = (index: number, isOpen: boolean) => {
    const content = contentRefs.current[index];
    if (!content) return;

    if (isOpen) {
      gsap.fromTo(
        content,
        {
          height: 0,
          opacity: 0,
          scaleY: 0,
          y: -10,
        },
        {
          height: "auto",
          opacity: 1,
          scaleY: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
        }
      );
    } else {
      gsap.to(content, {
        height: 0,
        opacity: 0,
        scaleY: 0,
        y: -10,
        duration: 0.5,
        ease: "power2.in",
      });
    }
  };

  // Button hover animations
  const handleButtonHover = () => {
    setIsButtonHovered(true);
    gsap.to(buttonRef.current, {
      scale: 1.05,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleButtonLeave = () => {
    setIsButtonHovered(false);
    gsap.to(buttonRef.current, {
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  // Accordion item hover effects
  const handleAccordionHover = (index: number, isHovered: boolean) => {
    const accordionItem = accordionRefs.current[index];
    if (!accordionItem) return;

    gsap.to(accordionItem, {
      scale: isHovered ? 1.02 : 1,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleExpandCollapseAll = () => {
    if (allOpen) {
      // Collapse all with staggered animation
      openItems.forEach((item, index) => {
        setTimeout(() => {
          animateAccordionContent(parseInt(item), false);
        }, index * 80);
      });
      setOpenItems([]);
    } else {
      // Expand all with staggered animation
      const allIndices = values.map((_, idx) => idx.toString());
      allIndices.forEach((item, index) => {
        setTimeout(() => {
          animateAccordionContent(parseInt(item), true);
        }, index * 80);
      });
      setOpenItems(allIndices);
    }
  };

  const handleAccordionChange = (items: string[]) => {
    const newItems = items.filter((item) => !openItems.includes(item));
    const removedItems = openItems.filter((item) => !items.includes(item));

    // Animate new items opening
    newItems.forEach((item) => {
      animateAccordionContent(parseInt(item), true);
    });

    // Animate removed items closing
    removedItems.forEach((item) => {
      animateAccordionContent(parseInt(item), false);
    });

    setOpenItems(items);
  };

  return (
    <>
      <div className="flex justify-center items-center py-8 sm:py-10 md:py-12 px-4">
        <h2
          className="text-[#06153A] text-lg sm:text-xl md:text-[25px] font-normal tracking-[2px] sm:tracking-[3px] md:tracking-[4px] text-center"
          style={{
            fontFamily: "Myriad Pro, Helvetica, Arial, sans-serif",
            fontWeight: 400,
          }}
        >
          OUR VALUES
        </h2>
      </div>

      <div className="w-full bg-black overflow-hidden mb-8" ref={containerRef}>
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between pt-6 sm:pt-8 md:pt-12 mb-8 sm:mb-12 md:mb-16">
            <h3
              className="text-white font-normal text-lg sm:text-xl md:text-2xl lg:text-[28px] leading-tight md:leading-[40px]"
              style={{
                fontFamily: "Myriad Pro, Helvetica, Arial, sans-serif",
                maxWidth: "854px",
                letterSpacing: "0.01em",
                fontWeight: 400,
                margin: 0,
              }}
            >
              At ALLINA, our core values define who we are and guide every
              decision we make. These values are the foundation of our success.
            </h3>
            <button
              ref={buttonRef}
              className={`text-white text-base sm:text-lg font-normal tracking-[2px] px-4 sm:px-6 py-3 border border-white rounded-full mt-6 md:mt-0 transition-all duration-300 cursor-pointer ${
                isButtonHovered
                  ? "bg-white text-black shadow-lg shadow-white/20"
                  : "hover:bg-white hover:text-black hover:shadow-lg hover:shadow-white/20"
              }`}
              style={{ fontWeight: 400 }}
              onClick={handleExpandCollapseAll}
              onMouseEnter={handleButtonHover}
              onMouseLeave={handleButtonLeave}
            >
              {allOpen ? "COLLAPSE ALL -" : "EXPAND ALL +"}
            </button>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 pb-12 lg:pb-16">
            <div className="flex-1 w-full lg:w-[350px] xl:w-[500px] mx-auto lg:mx-0 flex justify-center order-2 lg:order-1">
              <div
                ref={imageRef}
                className="w-full h-[600px] bg-cover bg-center rounded-lg shadow-2xl shadow-black/30 hover:shadow-3xl hover:shadow-black/40 transition-all duration-500 cursor-pointer"
                style={{
                  backgroundImage:
                    "url(https://c.animaapp.com/zheglGTa/img/unsplash-xu5mqq0chck.png)",
                  transformOrigin: "center center",
                }}
                onMouseEnter={() => {
                  gsap.to(imageRef.current, {
                    scale: 1.02,
                    duration: 0.4,
                    ease: "power2.out",
                  });
                }}
                onMouseLeave={() => {
                  gsap.to(imageRef.current, {
                    scale: 1,
                    duration: 0.4,
                    ease: "power2.out",
                  });
                }}
              />
            </div>

            <div className="flex-1 min-w-0 order-1 lg:order-2">
              <Accordion
                type="multiple"
                value={openItems}
                onValueChange={handleAccordionChange}
              >
                {values.map((value, idx) => (
                  <AccordionItem
                    key={idx}
                    value={idx.toString()}
                    className="border-b border-white/30 transition-all duration-300 hover:border-white/50"
                    ref={(el) => (accordionRefs.current[idx] = el)}
                    onMouseEnter={() => handleAccordionHover(idx, true)}
                    onMouseLeave={() => handleAccordionHover(idx, false)}
                  >
                    <AccordionTrigger
                      className="flex items-center gap-4 sm:gap-6 py-4 sm:py-6 transition-all duration-300 hover:bg-white/5 rounded-lg px-2 -mx-2"
                      iconColor="#ffffff"
                    >
                      <span
                        className="text-white text-base sm:text-lg lg:text-xl xl:text-2xl font-normal min-w-[50px] sm:min-w-[60px] lg:min-w-[80px] transition-all duration-300"
                        style={{
                          fontFamily:
                            "Myriad Pro, Helvetica, Arial, sans-serif",
                          fontWeight: 400,
                        }}
                      >
                        {value.num}
                      </span>
                      <span
                        className="text-white font-normal text-left flex-1 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[32px] leading-tight lg:leading-[79px] transition-all duration-300"
                        style={{
                          fontFamily:
                            "Myriad Pro, Helvetica, Arial, sans-serif",
                          fontWeight: 400,
                          letterSpacing: "0.05em",
                          display: "block",
                          marginBottom: 0,
                        }}
                      >
                        {value.title}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div
                        ref={(el) => (contentRefs.current[idx] = el)}
                        className="overflow-hidden"
                      >
                        <p
                          className="text-white text-sm sm:text-base lg:text-lg xl:text-xl leading-6 lg:leading-7 max-w-[500px] font-normal mt-0 pb-4 transition-all duration-300"
                          style={{
                            fontFamily:
                              "Myriad Pro, Helvetica, Arial, sans-serif",
                            fontWeight: 400,
                            marginTop: 0,
                            letterSpacing: "0.03em",
                          }}
                        >
                          {value.desc}
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
