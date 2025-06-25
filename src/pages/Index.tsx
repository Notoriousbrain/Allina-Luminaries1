import React, { useEffect, useRef, useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { DeviceShowcase } from '@/components/DeviceShowcase';
import { ServicesGallery } from '@/components/ServicesGallery';
import { Metrics } from '@/components/Metrics';
import { ContactCard } from '@/components/ContactCard';
import { Journey } from '@/components/Journey';
import { Footer } from '@/components/Footer';

const Index = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const containerRect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Start animation when the container starts entering the viewport
      if (containerRect.top <= 0 && containerRect.bottom > windowHeight) {
        // Calculate progress based on how much of the container has been scrolled
        const progress = Math.min(Math.abs(containerRect.top) / windowHeight, 1);
        setScrollProgress(progress);
      } else if (containerRect.top > 0) {
        // Before animation starts
        setScrollProgress(0);
      } else if (containerRect.bottom <= windowHeight) {
        // Animation complete
        setScrollProgress(1);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="min-h-screen w-full transition-colors duration-700">
      <Header />
      <Hero />
      <DeviceShowcase />
      <ServicesGallery />
      <Metrics />
      <Journey />
      
      {/* Animated Footer Section */}
      <div 
        ref={containerRef}
        className="relative"
        style={{ height: '200vh' }} // Double height to allow for scroll animation
      >
        {/* Footer - positioned fixed in background */}
        <div 
          className="sticky top-0 z-10 w-full h-screen flex items-end bg-white"
        >
          <div className="w-full">
            <Footer />
          </div>
        </div>
        
        {/* Contact Card - overlays footer and slides up */}
        <div 
          className="absolute top-0 left-0 w-full h-screen z-20 bg-white"
          style={{
            transform: `translateY(${scrollProgress * -100}vh)`,
          }}
        >
          <ContactCard />
        </div>
      </div>
    </main>
  );
};

export default Index;
