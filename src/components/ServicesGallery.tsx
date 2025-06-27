import React, { useState } from 'react';

interface ServiceItem {
  id: number;
  title: string;
  description: string;
  image: string;
  size: {
    width: string;
    height: string;
    left?: string;
    top?: string;
  };
}

export const ServicesGallery: React.FC = () => {
  const sectionRef = React.useRef<HTMLElement>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const services: ServiceItem[] = [
    {
      id: 1,
      title: "Smart Street Lighting",
      description: "IoT-enabled intelligent lighting systems for smart cities",
      image: "https://images.unsplash.com/photo-1542652694-40abf526446e?q=80&w=800&auto=format&fit=crop",
      size: { width: '499.85px', height: '463.88px', left: '42px' }
    },
    {
      id: 2,
      title: "Energy Management",
      description: "Efficient power solutions for sustainable infrastructure",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=800&auto=format&fit=crop",
      size: { width: '464.46px', height: '223.25px', left: '586.08px' }
    },
    {
      id: 3,
      title: "GIS Mapping",
      description: "Advanced geographical mapping for infrastructure planning",
      image: "https://images.unsplash.com/photo-1576400883215-7083980b6193?q=80&w=800&auto=format&fit=crop",
      size: { width: '305.22px', height: '223.25px', left: '1094.78px' }
    },
    {
      id: 4,
      title: "Infrastructure Solutions",
      description: "End-to-end EPC services for urban development",
      image: "https://images.unsplash.com/photo-1517685352821-92cf88aee5a5?q=80&w=800&auto=format&fit=crop",
      size: { width: '813.92px', height: '195.46px', left: '586.08px', top: '270.41px' }
    },
    {
      id: 5,
      title: "Automation Systems",
      description: "Smart control systems for efficient operations",
      image: "https://images.unsplash.com/photo-1498084393753-b411b2d26b34?q=80&w=800&auto=format&fit=crop",
      size: { width: '852.25px', height: '206.96px', left: '42px', top: '509.55px' }
    },
    {
      id: 6,
      title: "Renewable Integration",
      description: "Solar-powered and sustainable lighting solutions",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=800&auto=format&fit=crop",
      size: { width: '461.51px', height: '206.96px', left: '938.49px', top: '509.55px' }
    }
  ];

  // Calculate the centering offset for desktop layout
  // Total gallery width is approximately 1358px (from 42px to 1400px)
  // We want to center this within the container
  const galleryWidth = 1358; // Total width of the gallery layout
  const containerMaxWidth = 1440; // Max width of container
  const centeringOffset = (containerMaxWidth - galleryWidth) / 2;

  return (
    <section 
      ref={sectionRef}
      className="w-full bg-[#E7DED7] dark:bg-black transition-colors duration-700 mb-0">
      <div className="max-w-[1440px] mx-auto relative min-h-[600px] sm:min-h-[700px] md:min-h-[800px] px-4 sm:px-6 md:px-8">
        <h2 className="text-center text-[#06153A] dark:text-[#E7DED7] text-[24px] sm:text-[28px] md:text-[32px] font-normal tracking-[2.5px] sm:tracking-[3px] md:tracking-[3.2px] mb-8 sm:mb-8 md:mb-8 transition-colors duration-700"
            style={{ fontFamily: '"Myriad Pro", Helvetica, Arial, sans-serif' }}>
          GLIMPSE TO OUR SERVICES
        </h2>

        {/* Mobile Grid Layout */}
        <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="relative rounded-[15px] sm:rounded-[20px] overflow-hidden aspect-[4/3] sm:aspect-[3/2] cursor-pointer group"
              onMouseEnter={() => setHoveredId(service.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <img 
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-4 sm:p-6 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                <h3 className="text-white text-lg sm:text-xl font-normal mb-1 sm:mb-2">{service.title}</h3>
                <p className="text-[#DDB9A2] text-xs sm:text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Layout - Centered */}
        <div className="hidden md:block relative flex justify-center">
          <div className="relative" style={{ width: `${galleryWidth}px`, height: '716.51px' }}>
            {services.map((service) => {
              // Calculate centered position by subtracting the original offset and adding centering offset
              const originalLeft = parseFloat(service.size.left?.replace('px', '') || '0');
              const centeredLeft = originalLeft - 42; // Remove original offset from leftmost element
              
              return (
            <div
              key={service.id}
              className={`absolute rounded-[20px] overflow-hidden transition-all duration-500 cursor-pointer ${
                hoveredId !== null && hoveredId !== service.id ? 'scale-95 opacity-50' : ''
              } ${hoveredId === service.id ? 'scale-105 z-10' : ''}`}
                  style={{
                    width: service.size.width,
                    height: service.size.height,
                    left: `${centeredLeft}px`,
                    top: service.size.top || '0px'
                  }}
              onMouseEnter={() => setHoveredId(service.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <img 
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
              <div className={`absolute inset-0 bg-black/50 flex flex-col justify-end p-6 transition-opacity duration-300 ${
                hoveredId === service.id ? 'opacity-100' : 'opacity-0'
              }`}>
                <h3 className="text-white text-2xl font-normal mb-2">{service.title}</h3>
                <p className="text-[#DDB9A2] text-sm">{service.description}</p>
              </div>
            </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}; 

