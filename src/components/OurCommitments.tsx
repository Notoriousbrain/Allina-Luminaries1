import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./ui/accordion";

export const SustainabilityIntro = () => (
  <section
    id="commitment-section"
    className="w-full bg-[#E7DED7] py-10 flex justify-center items-center"
  >
    <p
      className="text-[#06153A] text-center mx-auto"
      style={{
        maxWidth: 900,
        fontFamily: "Myriad Pro, Helvetica, Arial, sans-serif",
        fontWeight: 400,
        fontSize: 18,
        lineHeight: "28px",
        letterSpacing: "0.5%",
        margin: 0,
      }}
    >
      At ALLINA, sustainability is at the core of everything we do. We believe
      in creating solutions that not only meet the needs of today but also
      preserve resources for future generations. From energy-efficient
      streetlighting to renewable energy projects, our commitment to green
      practices drives us to innovate and deliver infrastructure that
      contributes to a sustainable and brighter future.
    </p>
  </section>
);

export const OurCommitments = () => {
  const commitments = [
    {
      num: "01.",
      title: "ENERGY EFFICIENCY",
      desc: "We implement advanced energy-saving technologies to maximize efficiency and minimize waste in every project.",
    },
    {
      num: "02.",
      title: "RENEWABLE ENERGY",
      desc: "Our projects integrate solar, wind, and other renewable sources to reduce reliance on fossil fuels.",
    },
    {
      num: "03.",
      title: "SUSTAINABLE PRACTICES",
      desc: "We follow green construction and operational practices to ensure long-term environmental stewardship.",
    },
    {
      num: "04.",
      title: "COMMUNITY IMPACT",
      desc: "We strive to create positive social and economic impacts in the communities we serve.",
    },
  ];

  const [openItems, setOpenItems] = useState([]);

  const allOpen = openItems.length === commitments.length;

  const handleExpandCollapseAll = () => {
    if (allOpen) {
      setOpenItems([]);
    } else {
      setOpenItems(commitments.map((_, idx) => idx.toString()));
    }
  };

  const handleAccordionChange = (items) => {
    setOpenItems(items);
  };

  return (
    <section className="w-full bg-[#00343C] overflow-hidden py-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex flex-col gap-8 mb-0">
          {/* Title */}
          <h2
            className="text-white font-normal"
            style={{
              fontFamily: "Myriad Pro, Helvetica, Arial, sans-serif",
              fontWeight: 0,
              fontSize: "clamp(48px, 8vw, 90px)",
              lineHeight: "1.2",
              letterSpacing: "0.05em",
            }}
          >
            OUR COMMITMENT
          </h2>

          {/* Description Text */}
          <p
            className="text-white font-normal max-w-7xl"
            style={{
              fontFamily: "Myriad Pro, Helvetica, Arial, sans-serif",
              fontWeight: 100,
              fontSize: "clamp(16px, 2vw, 20px)",
              lineHeight: "1.75",
              letterSpacing: "0.01em",
            }}
          >
            At ALLINA, we are dedicated to sustainable development and energy
            efficiency. Our mission is to create infrastructure solutions that
            minimize environmental impact while maximizing energy savings and
            operational efficiency. By integrating advanced technologies like
            IoT, solar power, and energy-efficient systems, we aim to reduce
            carbon emissions and promote eco-friendly practices in every project
            we undertake.
          </p>

          {/* Expand/Collapse Button */}
          <div className="flex justify-start mt-0">
            <button
              className="text-white text-lg font-normal tracking-[2px] px-6 py-2 border border-white rounded-full hover:bg-white hover:text-black transition"
              style={{ fontWeight: 400 }}
              onClick={handleExpandCollapseAll}
            >
              {allOpen ? "COLLAPSE ALL -" : "EXPAND ALL +"}
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row gap-16">
          {/* Left side - Accordion Commitments */}
          <div className="flex-1 min-w-0 order-2 md:order-1">
            <Accordion
              type="multiple"
              value={openItems}
              onValueChange={handleAccordionChange}
            >
              {commitments.map((commitment, idx) => (
                <AccordionItem
                  key={idx}
                  value={idx.toString()}
                  className="border-b border-white/30"
                >
                  <AccordionTrigger
                    className="flex items-center gap-8 py-8"
                    iconColor="#ffffff"
                  >
                    <span
                      className="text-white font-normal min-w-[80px]"
                      style={{
                        fontFamily: "Myriad Pro, Helvetica, Arial, sans-serif",
                        fontWeight: 400,
                        fontSize: "clamp(20px, 3vw, 28px)",
                      }}
                    >
                      {commitment.num}
                    </span>
                    <span
                      className="text-white font-normal text-left flex-1"
                      style={{
                        fontFamily: "Myriad Pro, Helvetica, Arial, sans-serif",
                        fontWeight: 400,
                        fontSize: "clamp(24px, 4vw, 32px)",
                        lineHeight: "1.3",
                        letterSpacing: "0.03em",
                        display: "block",
                        marginBottom: 0,
                      }}
                    >
                      {commitment.title}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-8">
                    <p
                      className="text-white leading-7 max-w-[500px] font-normal"
                      style={{
                        fontFamily: "Myriad Pro, Helvetica, Arial, sans-serif",
                        fontWeight: 400,
                        fontSize: "clamp(16px, 2vw, 18px)",
                        margin: 0,
                      }}
                    >
                      {commitment.desc}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Right side - Image */}
          <div className="flex-shrink-0 mx-auto md:mx-0 flex justify-center order-1 md:order-2">
            <div
              className="bg-cover bg-center rounded-lg"
              style={{
                width: "clamp(400px, 50vw, 578px)",
                height: "clamp(350px, 45vw, 502px)",
                backgroundImage:
                  "url(https://c.animaapp.com/zheglGTa/img/unsplash-xu5mqq0chck.png)",
                transition: "transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
