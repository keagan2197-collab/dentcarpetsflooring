import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Globe, Check } from 'lucide-react';
import { cn } from '@/src/lib/utils';

interface Area {
  name: string;
  x: string;
  y: string;
  labelPos: 'top' | 'bottom' | 'left' | 'right';
  isCenter?: boolean;
}

const serviceAreas: Area[] = [
  { name: 'Pretoria', x: '70%', y: '16%', labelPos: 'top' },
  { name: 'Centurion', x: '78%', y: '28%', labelPos: 'right' },
  { name: 'Midrand', x: '72%', y: '42%', labelPos: 'right' },
  { name: 'Kempton Park', x: '86%', y: '46%', labelPos: 'right' },
  { name: 'Sandton', x: '63%', y: '50%', labelPos: 'left' },
  { name: 'Boksburg', x: '80%', y: '56%', labelPos: 'right' },
  { name: 'Bedfordview', x: '35%', y: '54%', labelPos: 'left' },
  { name: 'Johannesburg', x: '58%', y: '64%', labelPos: 'bottom', isCenter: true },
  { name: 'Benoni', x: '88%', y: '62%', labelPos: 'right' },
  { name: 'Edenvale', x: '76%', y: '68%', labelPos: 'right' },
  { name: 'Alberton', x: '68%', y: '78%', labelPos: 'bottom' },
  { name: 'East Rand', x: '85%', y: '72%', labelPos: 'right' }
];

export function AreasWeService() {
  const [hoveredArea, setHoveredArea] = useState<string | null>(null);

  return (
    <section className="px-6 py-20 bg-[#FBFBFA] border-t border-stone-200/50 overflow-hidden" id="areas-service">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Panel: Content + Badges */}
          <div className="lg:col-span-5 space-y-8 z-10">
            <div className="space-y-4">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#9A845C] block">
                Serving Gauteng
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-stone-900 tracking-tight leading-none">
                Areas We Service
              </h2>
              <div className="w-12 h-1 bg-[#9A845C] rounded-full" />
              <p className="text-stone-500 font-medium leading-relaxed max-w-sm">
                We proudly provide professional flooring installation services across Gauteng and surrounding areas.
              </p>
            </div>

            {/* Badges Grid */}
            <div className="grid grid-cols-2 gap-3">
              {serviceAreas.map((area) => {
                const isActive = hoveredArea === area.name;
                return (
                  <motion.div
                    key={area.name}
                    onMouseEnter={() => setHoveredArea(area.name)}
                    onMouseLeave={() => setHoveredArea(null)}
                    whileHover={{ scale: 1.02 }}
                    className={cn(
                      "flex items-center gap-3 px-5 py-3.5 rounded-2xl border transition-all duration-300 cursor-pointer select-none",
                      isActive 
                        ? "bg-white border-[#9A845C] text-[#9A845C] shadow-[0_8px_30px_rgba(154,132,92,0.06)] font-bold scale-[1.02]" 
                        : "bg-white border-stone-200/60 text-stone-700 hover:border-stone-300 shadow-[0_4px_15px_rgba(0,0,0,0.01)]"
                    )}
                  >
                    <MapPin 
                      size={15} 
                      className={cn(
                        "transition-colors shrink-0",
                        isActive ? "text-[#9A845C]" : "text-stone-400"
                      )} 
                    />
                    <span className="text-xs sm:text-[13px] tracking-tight truncate">
                      {area.name}
                    </span>
                  </motion.div>
                );
              })}
            </div>

            {/* Specialty Surrounding Footer Badge */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="inline-flex items-center gap-3.5 px-6 py-4 bg-stone-900 border border-stone-800 text-white rounded-2xl shadow-lg mt-4 cursor-pointer"
            >
              <div className="w-5 h-5 rounded-full bg-[#9A845C] flex items-center justify-center">
                <Globe size={11} className="text-white" />
              </div>
              <span className="text-xs font-black uppercase tracking-[0.1em]">
                And surrounding Gauteng areas.
              </span>
            </motion.div>
          </div>

          {/* Right Panel: Interactive Concentric-Circle Map Graph */}
          <div className="lg:col-span-7 relative flex items-center justify-center p-4">
            <div className="relative w-full aspect-[4/3] rounded-[32px] overflow-hidden bg-stone-50 border border-stone-200/40 p-4 shadow-[0_12px_40px_rgba(0,0,0,0.02)]">
              
              {/* Concentric Circles Background (SVG ripples expanding from Johannesburg at roughly 58%, 64%) */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                {/* Center of ripples coordinates mapped to percentage coordinates x=58, y=64 */}
                <circle cx="58%" cy="64%" r="40" className="stroke-[#9A845C]/15 fill-none stroke-2" />
                <circle cx="58%" cy="64%" r="90" className="stroke-[#9A845C]/10 fill-none stroke-[1.5] stroke-dashed" strokeDasharray="4 4" />
                <circle cx="58%" cy="64%" r="160" className="stroke-[#9A845C]/8 fill-none stroke-[1.5] stroke-dashed" strokeDasharray="5 5" />
                <circle cx="58%" cy="64%" r="240" className="stroke-[#9A845C]/5 fill-none stroke-[1.5] stroke-dashed" strokeDasharray="6 6" />
                <circle cx="58%" cy="64%" r="320" className="stroke-[#9A845C]/4 fill-none stroke-1 stroke-dashed" strokeDasharray="8 8" />

                {/* Styled Grid Crosshairs under the map */}
                <line x1="58%" y1="0%" x2="58%" y2="100%" className="stroke-stone-200/30 stroke-1" />
                <line x1="0%" y1="64%" x2="100%" y2="64%" className="stroke-stone-200/30 stroke-1" />
              </svg>

              {/* Graphic Ambient Glow behind maps */}
              <div className="absolute top-[20%] left-[30%] w-64 h-64 bg-[#9A845C]/5 rounded-full blur-[80px] pointer-events-none" />

              {/* Map Locations Overlay */}
              <div className="absolute inset-0 w-full h-full">
                {serviceAreas.map((area) => {
                  const isActive = hoveredArea === area.name;
                  return (
                    <div
                      key={area.name}
                      style={{ 
                        left: area.x, 
                        top: area.y,
                        transform: 'translate(-50%, -50%)'
                      }}
                      className="absolute z-20"
                      onMouseEnter={() => setHoveredArea(area.name)}
                      onMouseLeave={() => setHoveredArea(null)}
                    >
                      <div className="relative flex items-center justify-center">
                        
                        {/* Interactive Ripple Glow on hover */}
                        <AnimatePresence>
                          {(isActive || area.isCenter) && (
                            <motion.span
                              initial={{ scale: 0.5, opacity: 0 }}
                              animate={{ scale: isActive ? 2.2 : 1.5, opacity: [0.4, 0.1, 0] }}
                              exit={{ opacity: 0 }}
                              transition={{ 
                                repeat: Infinity, 
                                duration: isActive ? 1.5 : 2.5, 
                                ease: "easeOut" 
                              }}
                              className="absolute w-8 h-8 bg-[#9A845C] rounded-full pointer-events-none z-0"
                            />
                          )}
                        </AnimatePresence>

                        {/* Interactive pulsing map pin */}
                        <motion.div
                          animate={{ 
                            scale: isActive ? 1.25 : 1,
                            y: isActive ? -4 : 0
                          }}
                          transition={{ type: "spring", stiffness: 400, damping: 25 }}
                          className={cn(
                            "relative w-7 h-7 rounded-full flex items-center justify-center shadow-lg transition-all border outline-none z-10 cursor-pointer",
                            area.isCenter 
                              ? "bg-stone-900 border-stone-800 text-white" 
                              : isActive 
                                ? "bg-[#9A845C] border-[#9A845C] text-white" 
                                : "bg-white border-stone-200 text-stone-700 hover:border-stone-300"
                          )}
                        >
                          <MapPin size={isActive ? 13 : 11} fill={isActive || area.isCenter ? "currentColor" : "none" } />
                        </motion.div>

                        {/* City Tag Text Label */}
                        <div
                          className={cn(
                            "absolute bg-white px-2.5 py-1.5 rounded-xl border border-stone-100 shadow-[0_4px_12px_rgba(0,0,0,0.04)] text-[10px] md:text-xs font-bold pointer-events-none transition-all duration-300 whitespace-nowrap z-30",
                            isActive 
                              ? "text-stone-900 scale-105 border-[#9A845C] shadow-md shadow-[#9A845C]/10" 
                              : "text-stone-500",
                            
                            // Positional styling
                            area.labelPos === 'top' && 'bottom-full mb-2',
                            area.labelPos === 'bottom' && 'top-full mt-2',
                            area.labelPos === 'left' && 'right-full mr-2.5',
                            area.labelPos === 'right' && 'left-full ml-2.5'
                          )}
                        >
                          {area.isCenter ? (
                            <span className="font-extrabold text-[#9A845C] tracking-wide text-[11px] sm:text-xs">
                              {area.name}
                            </span>
                          ) : (
                            area.name
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
