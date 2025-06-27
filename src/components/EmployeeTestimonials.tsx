import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    text: [
      "Working as an IoT Engineer in our smart streetlighting division",
      "has been an exciting journey—every day, I get to build solutions",
      "that make cities safer and more energy-efficient."
    ],
    author: "Sarah Johnson",
    role: "IoT Engineer"
  },
  {
    text: [
      "Being part of the renewable energy team at ALLINA has given me",
      "the opportunity to work on cutting-edge solar projects that are",
      "making a real difference in sustainable development."
    ],
    author: "Michael Chen",
    role: "Renewable Energy Specialist"
  },
  {
    text: [
      "The collaborative environment and innovative projects at ALLINA",
      "have helped me grow both professionally and personally.",
      "Every project feels meaningful and impactful."
    ],
    author: "Priya Sharma",
    role: "Project Manager"
  },
];

const CONTAINER_WIDTH = 800;
const SHRUNKEN_WIDTH = 0;
const ANIMATION_DURATION = 500;
const SLIDE_DURATION = 3000;

export const EmployeeTestimonials = () => {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [shrinkPhase, setShrinkPhase] = useState(false);

  useEffect(() => {
    let shrinkTimeout;
    shrinkTimeout = setTimeout(() => {
      setShrinkPhase(true); // Start shrinking
      setTimeout(() => {
        setAnimating(true); // Swap content
        setCurrent((prev) => (prev + 1) % testimonials.length);
        setTimeout(() => {
          setAnimating(false);
          setShrinkPhase(false); // Expand back
        }, ANIMATION_DURATION);
      }, ANIMATION_DURATION);
    }, SLIDE_DURATION);
    return () => {
      clearTimeout(shrinkTimeout);
    };
  }, [current]);

  // Calculate dynamic line width
  const containerWidth = shrinkPhase ? SHRUNKEN_WIDTH : CONTAINER_WIDTH;
  const lineWidth = `calc((100% - ${containerWidth}px) / 2 - 48px)`;

  return (
    <>
      {/* EMPLOYEE TESTIMONIALS Section Title */}
      <div className="flex justify-center items-center py-8 sm:py-10 md:py-12 px-4">
        <h2 className="text-[#06153A] text-lg sm:text-xl md:text-[25px] font-normal tracking-[2px] sm:tracking-[3px] md:tracking-[4px] text-center"
            style={{ fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif', fontWeight: 400 }}>
        EMPLOYEE TESTIMONIALS
      </h2>
      </div>
      
      {/* EMPLOYEE TESTIMONIALS Content */}
      <section className="w-full bg-[#E7DED7] pt-0 pb-8 flex flex-col items-center min-h-[400px]">
      {/* Dots */}
        <div className="flex gap-2 mb-8">
        {testimonials.map((_, idx) => (
          <span
            key={idx}
            className={`w-3 h-3 rounded-full ${idx === current ? 'bg-orange-500' : 'bg-[#d9d9d9]'} transition-all`}
            style={{ display: 'inline-block' }}
          />
        ))}
      </div>

      {/* Animated lines and testimonial */}
        <div className="relative flex items-center justify-center w-full max-w-6xl" style={{ minHeight: '300px', marginBottom: '40px' }}>
        {/* Left line */}
        <div
          className="absolute left-0 top-1/2 -translate-y-1/2 h-[1px] bg-[#7b7b7b] transition-all duration-500"
          style={{
            width: lineWidth,
            borderRadius: 1,
          }}
        />
        {/* Left vertical line */}
        <div
          className="absolute top-1/2 -translate-y-1/2 w-[1px] h-[20px] bg-[#7b7b7b] transition-all duration-500"
          style={{
            left: lineWidth,
          }}
        />
        {/* Right line */}
        <div
          className="absolute right-0 top-1/2 -translate-y-1/2 h-[1px] bg-[#7b7b7b] transition-all duration-500"
          style={{
            width: lineWidth,
            borderRadius: 1,
          }}
        />
        {/* Right vertical line */}
        <div
          className="absolute top-1/2 -translate-y-1/2 w-[1px] h-[20px] bg-[#7b7b7b] transition-all duration-500"
          style={{
            right: lineWidth,
          }}
        />
        
                 {/* Testimonial Container */}
         <div
           className="relative z-10 flex items-center justify-center"
           style={{
             width: CONTAINER_WIDTH,
             minHeight: '300px',
             margin: '0 48px',
             position: 'relative'
           }}
         >
           {/* Corner Brackets */}
           <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-[#7b7b7b]" />
           <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-[#7b7b7b]" />
           <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-[#7b7b7b]" />
           <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-[#7b7b7b]" />
           
           {/* Content Mask */}
           <div
             className="overflow-hidden transition-all duration-500 flex items-center justify-center"
             style={{
               width: containerWidth,
               height: '100%',
               transition: 'width 0.5s cubic-bezier(0.4,0,0.2,1)',
             }}
           >
             {/* Inner Content */}
             <div className="flex flex-col items-center justify-center px-8 py-12 whitespace-nowrap">
               {/* Quote Icon */}
               <div className="text-orange-500 text-4xl mb-6">
                 <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                   <path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.318.142-.686.238-1.028.466-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.945-.33.358-.656.734-.909 1.162-.293.408-.492.856-.702 1.299-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539l.025.168.026-.006A4.5 4.5 0 1 0 6.5 10zm11 0c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.318.142-.686.238-1.028.466-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.945-.33.358-.656.734-.909 1.162-.293.408-.492.856-.702 1.299-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539l.025.168.026-.006A4.5 4.5 0 1 0 17.5 10z"/>
                 </svg>
               </div>
               
               {/* Testimonial Text */}
               <div 
                 className="text-[#06153A] text-center mb-8"
                 style={{
                   fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif',
                   fontSize: '18px',
                   lineHeight: '1.6',
                   width: '1000px',
                   letterSpacing: '0.05em'
                 }}
               >
                 {testimonials[current].text.map((line, index) => (
                   <div key={index} style={{ marginBottom: index < testimonials[current].text.length - 1 ? '8px' : '0' }}>
                     {line}
                   </div>
                 ))}
               </div>
               
               {/* Author Info */}
               <div className="text-center">
                 <div 
                   className="text-[#06153A] font-semibold mb-1"
                   style={{
                     fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif',
                     fontSize: '16px'
                   }}
                 >
                   {testimonials[current].author}
                 </div>
                 <div 
                   className="text-[#7b7b7b]"
                   style={{
                     fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif',
                     fontSize: '14px'
                   }}
                 >
                   {testimonials[current].role}
                 </div>
               </div>
             </div>
           </div>
         </div>
      </div>
    </section>
    </>
  );
}; 