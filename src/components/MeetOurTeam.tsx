import React from 'react';

export const MeetOurTeam = () => {
  return (
    <>
      {/* MEET OUR TEAM Section Title */}
      <div className="flex justify-center items-center py-8 sm:py-10 md:py-12 px-4">
        <h2 className="text-[#06153A] text-lg sm:text-xl md:text-[25px] font-normal tracking-[2px] sm:tracking-[3px] md:tracking-[4px] text-center"
            style={{ fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif', fontWeight: 400 }}>
          MEET OUR TEAM
        </h2>
      </div>

      {/* MEET OUR TEAM Content */}
      <div className="w-full bg-[#E7DED7]">
        <div className="flex flex-col items-center pt-0 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto w-full">
          {/* Team Member 1 */}
          <div className="relative overflow-hidden rounded-[15px] sm:rounded-[18px] md:rounded-[20px] group">
            <div className="relative w-full aspect-square overflow-hidden">
              <img 
                src="https://c.animaapp.com/zheglGTa/img/image-11@2x.png" 
                alt="Team Member 1"
                className="w-full h-full object-cover transition-all duration-500 grayscale group-hover:grayscale-0 group-hover:scale-110"
              />
              {/* Vignette overlay - only visible on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            {/* Text overlay - only visible on hover */}
            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
              <h3 className="text-white text-lg sm:text-xl md:text-2xl font-normal tracking-[2px] sm:tracking-[3px] md:tracking-[4.8px] mb-1 sm:mb-2">
                TEAM MEMBER
              </h3>
              <p className="text-white text-base sm:text-lg font-normal">
                Position
              </p>
            </div>
          </div>

          {/* Founder & CEO */}
          <div className="relative overflow-hidden rounded-[15px] sm:rounded-[18px] md:rounded-[20px] group">
            <div className="relative w-full aspect-square overflow-hidden">
              <img 
                src="https://c.animaapp.com/zheglGTa/img/image-12.png" 
                alt="Founder CEO"
                className="w-full h-full object-cover transition-all duration-500 grayscale group-hover:grayscale-0 group-hover:scale-110"
              />
              {/* Vignette overlay - only visible on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            {/* Text overlay - only visible on hover */}
            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
              <h3 className="text-white text-lg sm:text-xl md:text-2xl font-normal tracking-[2px] sm:tracking-[3px] md:tracking-[4.8px] mb-1 sm:mb-2">
                RITIK GUPTA
              </h3>
              <p className="text-white text-base sm:text-lg font-normal">
                Founder & CEO
              </p>
            </div>
          </div>

          {/* Team Member 3 */}
          <div className="relative overflow-hidden rounded-[15px] sm:rounded-[18px] md:rounded-[20px] group sm:col-span-2 md:col-span-1">
            <div className="relative w-full aspect-square overflow-hidden">
              <img 
                src="https://c.animaapp.com/zheglGTa/img/image-11@2x.png" 
                alt="Team Member 3"
                className="w-full h-full object-cover transition-all duration-500 grayscale group-hover:grayscale-0 group-hover:scale-110"
              />
              {/* Vignette overlay - only visible on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            {/* Text overlay - only visible on hover */}
            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
              <h3 className="text-white text-lg sm:text-xl md:text-2xl font-normal tracking-[2px] sm:tracking-[3px] md:tracking-[4.8px] mb-1 sm:mb-2">
                TEAM MEMBER
              </h3>
              <p className="text-white text-base sm:text-lg font-normal">
                Position
              </p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
