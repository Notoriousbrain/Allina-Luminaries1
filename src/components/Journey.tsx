import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "../context/ThemeContext";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

// Register plugin
gsap.registerPlugin(ScrollTrigger);

export const Journey: React.FC = () => {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [backgroundProgress, setBackgroundProgress] = useState(0);
  const { setJourneyInView, theme } = useTheme();

  const isDark = theme === "dark";

  // Update context state on visibility change
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setJourneyInView(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [setJourneyInView]);

  // GSAP section animation (pin + background + image move)
  useGSAP(() => {
    const section = sectionRef.current;
    const img = imgRef.current;
    if (!section || !img) return;

    const initScrollTrigger = () => {
      const containerHeight = window.innerHeight;
      const svgHeight = img.naturalHeight || img.height || 600;

      const initialY = containerHeight * 0.5;
      const finalY = initialY - svgHeight;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=150%",
          scrub: true,
          pin: true,
          anticipatePin: 1,
          onUpdate: ({ progress }) => setBackgroundProgress(progress),
        },
      });

      tl.fromTo(img, { y: initialY }, { y: finalY, ease: "none" });
    };

    if (img.complete) {
      initScrollTrigger();
      ScrollTrigger.refresh();
    } else {
      img.onload = () => {
        initScrollTrigger();
        ScrollTrigger.refresh();
      };
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="relative bg-[#000000] w-full">
      <section
        ref={sectionRef}
        className="overflow-hidden transition-all duration-700"
        style={{
          height: "100vh",
          backgroundColor:"#000000",
          transition: "background-color 0.5s ease-in-out",
        }}
      >
        <div
          className="absolute top-[10%] left-1/2 transform -translate-x-1/2 text-3xl md:text-4xl lg:text-5xl font-bold z-20 uppercase tracking-[2.5px] md:tracking-[3.2px] transition-all duration-700"
          style={{
            fontFamily: "Myriad Pro, Helvetica, Arial, sans-serif",
            fontWeight: "400",
            textAlign: "center",
            fontSize: "2.5rem",
            color: "#DDB9A2",
          }}
        >
          OUR JOURNEY
        </div>

        <div
          className="absolute inset-0 w-full h-full flex justify-center items-start overflow-hidden"
          style={{
            WebkitMaskImage:
              "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 15%, rgba(0, 0, 0, 1) 40%, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, .5) 90%, rgba(0, 0, 0, 0) 100%)",
            maskImage:
              "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 15%, rgba(0, 0, 0, 1) 40%, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, .5) 90%, rgba(0, 0, 0, 0) 100%)",
          }}
        >
          <img
            ref={imgRef}
            src="/animation.svg"
            alt="Journey Animation"
            className="absolute"
            style={{
              left: "50%",
              transform: "translateX(-50%)",
              maxWidth: "100%",
              height: "auto",
              transition: "none",
            }}
          />
        </div>
      </section>
    </div>
  );
};
