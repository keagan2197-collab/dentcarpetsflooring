import { useState, useRef, type MouseEvent } from 'react';
import { Play, MapPin, Sparkles, Heart } from 'lucide-react';
import { VideoReel, normalizeVideoUrl } from '@/src/data/videoReelsData';

interface ReelCardProps {
  reel: VideoReel;
  onOpenModal: () => void;
}

export function ReelCard({ reel, onOpenModal }: ReelCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [likes, setLikes] = useState(reel.likesCount || 120);
  const [isLiked, setIsLiked] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Use media fragment #t=0.5 so browsers immediately cue and display the frame at 0.5s as thumbnail
  const videoSrc = `${normalizeVideoUrl(reel.videoUrl)}#t=0.5`;

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay may be restricted by browser until user gesture
      });
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      // Reset back to thumbnail frame
      try {
        videoRef.current.currentTime = 0.5;
      } catch {
        // Ignore if video not yet seekable
      }
    }
  };

  const toggleLike = (e: MouseEvent) => {
    e.stopPropagation();
    if (isLiked) {
      setLikes(likes - 1);
      setIsLiked(false);
    } else {
      setLikes(likes + 1);
      setIsLiked(true);
    }
  };

  return (
    <div
      onClick={onOpenModal}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative aspect-[9/16] w-full rounded-[28px] overflow-hidden bg-stone-950 shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer border border-stone-200/60 hover:border-[#9A845C]/40 hover:-translate-y-1.5 select-none"
    >
      {/* Background Video Frame as the True Thumbnail */}
      <video
        ref={videoRef}
        src={videoSrc}
        muted
        playsInline
        loop
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* Subtle Dark Vignette Gradients for Legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/25 to-black/40 pointer-events-none" />

      {/* Dynamic Golden Border Glow on Hover */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#9A845C]/40 rounded-[28px] pointer-events-none transition-colors duration-500" />

      {/* Header Info: Slot Badge & Duration */}
      <div className="absolute top-4 inset-x-4 flex items-center justify-between z-10">
        <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-stone-900 text-[10px] font-black uppercase tracking-wider shadow-sm flex items-center gap-1.5">
          <span className="text-[#9A845C] font-mono">#{reel.slotNumber ? String(reel.slotNumber).padStart(2, '0') : '01'}</span>
          <span>Video</span>
        </span>

        <div className="flex items-center gap-1.5 bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-full text-white text-[10px] font-medium border border-white/10">
          <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
          <span>{reel.duration || '0:35'}</span>
        </div>
      </div>

      {/* Center Play Button Overlay */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
        <div className="w-14 h-14 rounded-full bg-white/90 group-hover:bg-[#9A845C] text-stone-900 group-hover:text-white flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-all duration-300 group-hover:rotate-6">
          <Play size={22} className="fill-current translate-x-0.5" />
        </div>
      </div>

      {/* Bottom Content & Meta */}
      <div className="absolute bottom-0 inset-x-0 p-5 z-10 space-y-2.5 text-white">
        <div className="flex items-center gap-1.5 text-stone-300 text-[11px]">
          <MapPin size={12} className="text-[#9A845C] shrink-0" />
          <span className="truncate">{reel.location}</span>
        </div>

        <h3 className="font-bold text-base md:text-lg leading-snug line-clamp-2 text-white group-hover:text-[#F3EAD8] transition-colors">
          {reel.title}
        </h3>

        <div className="pt-1 flex items-center justify-between border-t border-white/10 text-xs">
          <button
            onClick={toggleLike}
            className="flex items-center gap-1.5 text-stone-300 hover:text-red-400 transition-colors pointer-events-auto"
          >
            <Heart size={14} className={isLiked ? 'fill-red-500 text-red-500' : ''} />
            <span className="text-[11px] font-semibold">{likes}</span>
          </button>

          <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#9A845C] group-hover:underline">
            Watch Reel
            <Sparkles size={11} />
          </span>
        </div>
      </div>
    </div>
  );
}
