import React, { useState } from 'react';
import { motion } from 'motion/react';
import { clients } from '@/src/data/siteData';

export function ClientLogoSlider() {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  return (
    <div className="w-full space-y-4" id="client-slider">
      {/* Outer wrapper with premium fade gradients on sides */}
      <div className="relative overflow-hidden w-full py-8 md:py-10 bg-[#FBFBFA] rounded-[32px] border border-stone-200/40">
        
        {/* Soft elegant edge blend gradients */}
        <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-[#FBFBFA] via-[#FBFBFA]/90 to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-[#FBFBFA] via-[#FBFBFA]/90 to-transparent z-10 pointer-events-none" />

        {/* Marquee horizontal stream track */}
        <div className="flex overflow-hidden w-full">
          <motion.div
            className="flex gap-5 sm:gap-6 shrink-0"
            animate={{
              x: ["0%", "-50%"]
            }}
            transition={{
              ease: "linear",
              duration: 22, // Slick constant speed
              repeat: Infinity
            }}
            // Option: Slows down slightly or pauses on hover to make it interactive and premium
            whileHover={{ 
              animationPlayState: "paused"
            }}
            style={{
              display: 'flex',
              whiteSpace: 'nowrap'
            }}
          >
            {/* We duplicate the client array to achieve seamless uninterrupted scrolling loop */}
            {[...clients, ...clients].map((client, index) => {
              const uniqueKey = `${client.name}-${index}`;
              const isError = imageErrors[uniqueKey];
              
              return (
                <div
                  key={uniqueKey}
                  className="bg-white rounded-[24px] shadow-[0_6px_28px_rgba(50,45,40,0.02)] border border-stone-100 flex items-center justify-center p-5 sm:p-6 h-28 w-44 sm:w-56 shrink-0 select-none group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-stone-200/40 cursor-grab active:cursor-grabbing"
                >
                  {client.logo && !isError ? (
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="max-w-full max-h-full object-contain filter-none opacity-100 transition-all duration-300 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                      onError={() => setImageErrors(prev => ({ ...prev, [uniqueKey]: true }))}
                    />
                  ) : (
                    <span className="text-[11px] font-black uppercase text-stone-500 tracking-[0.2em] text-center leading-tight px-2 group-hover:text-[#9A845C] transition-colors">
                      {client.name}
                    </span>
                  )}
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
