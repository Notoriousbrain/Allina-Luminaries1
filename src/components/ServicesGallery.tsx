import React, { useState } from 'react';

interface ServiceItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

export const ServicesGallery: React.FC = () => {
  const sectionRef = React.useRef<HTMLElement>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const services: ServiceItem[] = [
    {
      id: 1,
      title: "Smart Street Lighting",
      description: "IoT-enabled intelligent lighting systems for smart cities",
      image: "https://images.unsplash.com/photo-1542652694-40abf526446e?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Energy Management",
      description: "Efficient power solutions for sustainable infrastructure",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "GIS Mapping",
      description: "Advanced geographical mapping for infrastructure planning",
      image: "https://images.unsplash.com/photo-1576400883215-7083980b6193?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 4,
      title: "Infrastructure Solutions",
      description: "End-to-end EPC services for urban development",
      image: "https://images.unsplash.com/photo-1517685352821-92cf88aee5a5?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 5,
      title: "Automation Systems",
      description: "Smart control systems for efficient operations",
      image: "https://images.unsplash.com/photo-1498084393753-b411b2d26b34?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 6,
      title: "Renewable Integration",
      description: "Solar-powered and sustainable lighting solutions",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="w-full bg-[#E7DED7] dark:bg-black transition-colors duration-700 flex items-center justify-center min-h-screen py-12 sm:py-16 md:py-20">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        
        {/* Section Title */}
        <h2 className="text-center text-[#06153A] dark:text-[#E7DED7] font-normal tracking-[2.5px] sm:tracking-[3px] md:tracking-[3.2px] mb-12 sm:mb-16 md:mb-20 transition-colors duration-700 services-gallery-title"
            style={{ 
              fontFamily: '"Myriad Pro", Helvetica, Arial, sans-serif',
              fontSize: 'clamp(24px, 4vw, 42px)'
            }}>
          GLIMPSE TO OUR SERVICES
        </h2>

        {/* Mobile Layout (≤768px) */}
        <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="relative rounded-[20px] overflow-hidden aspect-[4/3] cursor-pointer group transform transition-all duration-300 hover:scale-105"
              onMouseEnter={() => setHoveredId(service.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <img 
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 transition-opacity duration-300">
                <h3 className="text-white text-lg sm:text-xl font-normal mb-2"
                    style={{ fontFamily: '"Myriad Pro", Helvetica, Arial, sans-serif' }}>
                  {service.title}
                </h3>
                <p className="text-[#DDB9A2] text-sm leading-relaxed"
                   style={{ fontFamily: '"Myriad Pro", Helvetica, Arial, sans-serif' }}>
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Tablet Layout (769px - 1200px) */}
        <div className="hidden md:block lg:hidden">
          <div className="grid grid-cols-2 gap-8 max-w-[900px] mx-auto">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`relative rounded-[20px] overflow-hidden cursor-pointer group transform transition-all duration-500 ${
                  index < 4 ? 'aspect-[3/2]' : 'aspect-[4/3]'
                } ${hoveredId !== null && hoveredId !== service.id ? 'scale-95 opacity-70' : ''} 
                  ${hoveredId === service.id ? 'scale-105 z-10' : ''}`}
                onMouseEnter={() => setHoveredId(service.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6 transition-opacity duration-300 ${
                  hoveredId === service.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <h3 className="text-white text-xl font-normal mb-2"
                      style={{ fontFamily: '"Myriad Pro", Helvetica, Arial, sans-serif' }}>
                    {service.title}
                  </h3>
                  <p className="text-[#DDB9A2] text-sm leading-relaxed"
                     style={{ fontFamily: '"Myriad Pro", Helvetica, Arial, sans-serif' }}>
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Layout (≥1200px) */}
        <div className="hidden lg:block">
          <div className="relative max-w-[1200px] mx-auto" style={{ height: 'clamp(600px, 50vh, 800px)' }}>
            {/* Custom grid layout for desktop */}
            
            {/* 1st Image - Tall left side (increased height) */}
            <div className="absolute top-0 left-0 w-[38%] h-[70%]">
              <div
                className={`w-full h-full relative rounded-[20px] overflow-hidden cursor-pointer group transform transition-all duration-500 ${
                  hoveredId !== null && hoveredId !== 1 ? 'scale-95 opacity-70' : ''
                } ${hoveredId === 1 ? 'scale-105 z-10' : ''}`}
                onMouseEnter={() => setHoveredId(1)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <img 
                  src={services[0].image}
                  alt={services[0].title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6 transition-opacity duration-300 ${
                  hoveredId === 1 ? 'opacity-100' : 'opacity-0'
                }`}>
                  <h3 className="text-white text-2xl font-normal mb-3"
                      style={{ fontFamily: '"Myriad Pro", Helvetica, Arial, sans-serif' }}>
                    {services[0].title}
                  </h3>
                  <p className="text-[#DDB9A2] text-sm leading-relaxed"
                     style={{ fontFamily: '"Myriad Pro", Helvetica, Arial, sans-serif' }}>
                    {services[0].description}
                  </p>
                </div>
              </div>
            </div>

            {/* 2nd Image - Top right */}
            <div className="absolute top-0 right-[30%] w-[28%] h-[30%]">
              <div
                className={`w-full h-full relative rounded-[20px] overflow-hidden cursor-pointer group transform transition-all duration-500 ${
                  hoveredId !== null && hoveredId !== 2 ? 'scale-95 opacity-70' : ''
                } ${hoveredId === 2 ? 'scale-105 z-10' : ''}`}
                onMouseEnter={() => setHoveredId(2)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <img 
                  src={services[1].image}
                  alt={services[1].title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6 transition-opacity duration-300 ${
                  hoveredId === 2 ? 'opacity-100' : 'opacity-0'
                }`}>
                  <h3 className="text-white text-xl font-normal mb-2"
                      style={{ fontFamily: '"Myriad Pro", Helvetica, Arial, sans-serif' }}>
                    {services[1].title}
                  </h3>
                  <p className="text-[#DDB9A2] text-sm leading-relaxed"
                     style={{ fontFamily: '"Myriad Pro", Helvetica, Arial, sans-serif' }}>
                    {services[1].description}
                  </p>
                </div>
              </div>
            </div>

            {/* 3rd Image - Top far right */}
            <div className="absolute top-0 right-0 w-[28%] h-[30%]">
              <div
                className={`w-full h-full relative rounded-[20px] overflow-hidden cursor-pointer group transform transition-all duration-500 ${
                  hoveredId !== null && hoveredId !== 3 ? 'scale-95 opacity-70' : ''
                } ${hoveredId === 3 ? 'scale-105 z-10' : ''}`}
                onMouseEnter={() => setHoveredId(3)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <img 
                  src={services[2].image}
                  alt={services[2].title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6 transition-opacity duration-300 ${
                  hoveredId === 3 ? 'opacity-100' : 'opacity-0'
                }`}>
                  <h3 className="text-white text-xl font-normal mb-2"
                      style={{ fontFamily: '"Myriad Pro", Helvetica, Arial, sans-serif' }}>
                    {services[2].title}
                  </h3>
                  <p className="text-[#DDB9A2] text-sm leading-relaxed"
                     style={{ fontFamily: '"Myriad Pro", Helvetica, Arial, sans-serif' }}>
                    {services[2].description}
                  </p>
                </div>
              </div>
            </div>

            {/* 4th Image - Under 2nd & 3rd images, spanning their combined width, extending to match 1st image height */}
            <div className="absolute top-[32%] right-0 w-[58%] h-[38%]">
              <div
                className={`w-full h-full relative rounded-[20px] overflow-hidden cursor-pointer group transform transition-all duration-500 ${
                  hoveredId !== null && hoveredId !== 4 ? 'scale-95 opacity-70' : ''
                } ${hoveredId === 4 ? 'scale-105 z-10' : ''}`}
                onMouseEnter={() => setHoveredId(4)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <img 
                  src={services[3].image}
                  alt={services[3].title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6 transition-opacity duration-300 ${
                  hoveredId === 4 ? 'opacity-100' : 'opacity-0'
                }`}>
                  <h3 className="text-white text-2xl font-normal mb-3"
                      style={{ fontFamily: '"Myriad Pro", Helvetica, Arial, sans-serif' }}>
                    {services[3].title}
                  </h3>
                  <p className="text-[#DDB9A2] text-sm leading-relaxed"
                     style={{ fontFamily: '"Myriad Pro", Helvetica, Arial, sans-serif' }}>
                    {services[3].description}
                  </p>
                </div>
              </div>
            </div>

            {/* 5th Image - Bottom left */}
            <div className="absolute bottom-0 left-0 w-[58%] h-[25%]">
              <div
                className={`w-full h-full relative rounded-[20px] overflow-hidden cursor-pointer group transform transition-all duration-500 ${
                  hoveredId !== null && hoveredId !== 5 ? 'scale-95 opacity-70' : ''
                } ${hoveredId === 5 ? 'scale-105 z-10' : ''}`}
                onMouseEnter={() => setHoveredId(5)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <img 
                  src={services[4].image}
                  alt={services[4].title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6 transition-opacity duration-300 ${
                  hoveredId === 5 ? 'opacity-100' : 'opacity-0'
                }`}>
                  <h3 className="text-white text-xl font-normal mb-2"
                      style={{ fontFamily: '"Myriad Pro", Helvetica, Arial, sans-serif' }}>
                    {services[4].title}
                  </h3>
                  <p className="text-[#DDB9A2] text-sm leading-relaxed"
                     style={{ fontFamily: '"Myriad Pro", Helvetica, Arial, sans-serif' }}>
                    {services[4].description}
                  </p>
                </div>
              </div>
            </div>

            {/* 6th Image - Bottom right */}
            <div className="absolute bottom-0 right-0 w-[40%] h-[25%]">
              <div
                className={`w-full h-full relative rounded-[20px] overflow-hidden cursor-pointer group transform transition-all duration-500 ${
                  hoveredId !== null && hoveredId !== 6 ? 'scale-95 opacity-70' : ''
                } ${hoveredId === 6 ? 'scale-105 z-10' : ''}`}
                onMouseEnter={() => setHoveredId(6)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <img 
                  src={services[5].image}
                  alt={services[5].title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6 transition-opacity duration-300 ${
                  hoveredId === 6 ? 'opacity-100' : 'opacity-0'
                }`}>
                  <h3 className="text-white text-lg font-normal mb-2"
                      style={{ fontFamily: '"Myriad Pro", Helvetica, Arial, sans-serif' }}>
                    {services[5].title}
                  </h3>
                  <p className="text-[#DDB9A2] text-sm leading-relaxed"
                     style={{ fontFamily: '"Myriad Pro", Helvetica, Arial, sans-serif' }}>
                    {services[5].description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive styles */}
      <style>{`
        /* Landscape mode optimizations */
        @media (max-height: 600px) {
          .services-gallery-title {
            font-size: clamp(20px, 3vw, 32px) !important;
            margin-bottom: 2rem !important;
          }
        }
        
        /* Very short screens */
        @media (max-height: 500px) {
          .services-gallery-title {
            font-size: clamp(18px, 2.5vw, 28px) !important;
            margin-bottom: 1.5rem !important;
          }
        }
        
        /* Ultra-wide screens */
        @media (min-width: 1600px) {
          .services-gallery-title {
            font-size: clamp(32px, 3vw, 50px) !important;
          }
        }
      `}</style>
    </section>
  );
};