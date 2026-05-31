import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';
import { cn } from '@/src/lib/utils';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
}

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = 'Before',
  afterLabel = 'After',
  className
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPosition(percent);
  };

  useEffect(() => {
    if (!isDragging) return;

    const onMouseMove = (e: MouseEvent) => handleMove(e.clientX);
    const onTouchMove = (e: TouchEvent) => handleMove(e.touches[0].clientX);
    const onMouseUp = () => setIsDragging(false);

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('touchmove', onTouchMove);
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('touchend', onMouseUp);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('touchend', onMouseUp);
    };
  }, [isDragging]);

  const startDragging = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    // Move immediately to the click position
    if ('clientX' in e) {
      handleMove(e.clientX);
    } else {
      handleMove(e.touches[0].clientX);
    }
  };

  return (
    <div 
      ref={containerRef}
      className={cn(
        "relative aspect-[16/9] w-full rounded-[32px] overflow-hidden select-none border border-stone-100 shadow-2xl group",
        isDragging ? "cursor-grabbing" : "cursor-ew-resize",
        className
      )}
      onMouseDown={startDragging}
      onTouchStart={startDragging}
    >
      {/* After Image (Background) */}
      <img 
        src={afterImage} 
        alt="After" 
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
        referrerPolicy="no-referrer"
        draggable={false}
      />

      {/* Before Image (Clipped) */}
      <div 
        className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img 
          src={beforeImage} 
          alt="Before" 
          className="absolute inset-0 w-full h-full object-cover select-none"
          referrerPolicy="no-referrer"
          draggable={false}
        />
      </div>

      {/* Labels */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-6 left-6 px-4 py-2 bg-black/40 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-widest rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
        >
          {beforeLabel}
        </div>
        <div 
          className="absolute top-6 right-6 px-4 py-2 bg-[#9A845C]/80 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-widest rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
        >
          {afterLabel}
        </div>
      </div>

      {/* Slider Line */}
      <div 
        className="absolute inset-y-0 w-[2px] bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] z-10 pointer-events-none"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center border-4 border-stone-900/5 backdrop-blur-sm">
          <div className="flex gap-1">
             <div className="w-1 h-3 bg-stone-300 rounded-full" />
             <div className="w-1 h-3 bg-stone-300 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
