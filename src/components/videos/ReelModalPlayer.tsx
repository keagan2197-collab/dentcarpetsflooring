import { useEffect, useRef, useState } from 'react';
import { X, Play, Pause, Volume2, VolumeX, ChevronLeft, ChevronRight, Share2, Heart, MapPin, Check, ArrowRight } from 'lucide-react';
import { VideoReel, normalizeVideoUrl } from '@/src/data/videoReelsData';
import { Link } from 'react-router-dom';

interface ReelModalPlayerProps {
  reels: VideoReel[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export function ReelModalPlayer({
  reels,
  currentIndex,
  isOpen,
  onClose,
  onNavigate,
}: ReelModalPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState('0:00');
  const [duration, setDuration] = useState('0:00');
  const [copiedShare, setCopiedShare] = useState(false);
  const [liked, setLiked] = useState(false);
  const [hasError, setHasError] = useState(false);

  const currentReel = reels[currentIndex];

  useEffect(() => {
    if (!isOpen) return;

    setIsPlaying(true);
    setProgress(0);
    setHasError(false);

    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay with sound may be blocked by browser policy, try muted
          setIsMuted(true);
          if (videoRef.current) {
            videoRef.current.muted = true;
            videoRef.current.play().catch(() => {
              setIsPlaying(false);
            });
          }
        });
      }
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') handleNext();
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') handlePrev();
      if (e.key === ' ' && e.target === document.body) {
        e.preventDefault();
        togglePlay();
      }
      if (e.key === 'm' || e.key === 'M') {
        toggleMute();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, isOpen]);

  const handleNext = () => {
    if (currentIndex < reels.length - 1) {
      onNavigate(currentIndex + 1);
    } else {
      onNavigate(0);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      onNavigate(currentIndex - 1);
    } else {
      onNavigate(reels.length - 1);
    }
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const current = videoRef.current.currentTime;
    const dur = videoRef.current.duration;
    if (dur > 0) {
      setProgress((current / dur) * 100);
      const curMins = Math.floor(current / 60);
      const curSecs = Math.floor(current % 60).toString().padStart(2, '0');
      setCurrentTime(`${curMins}:${curSecs}`);
      const durMins = Math.floor(dur / 60);
      const durSecs = Math.floor(dur % 60).toString().padStart(2, '0');
      setDuration(`${durMins}:${durSecs}`);
    }
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedShare(true);
    setTimeout(() => setCopiedShare(false), 2000);
  };

  if (!isOpen || !currentReel) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-2 sm:p-4 md:p-6"
      onClick={onClose}
    >
      {/* Navigation Arrows */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          handlePrev();
        }}
        className="hidden md:flex absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 text-white items-center justify-center backdrop-blur-md border border-white/10 transition-all hover:scale-105"
        aria-label="Previous reel"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          handleNext();
        }}
        className="hidden md:flex absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 text-white items-center justify-center backdrop-blur-md border border-white/10 transition-all hover:scale-105"
        aria-label="Next reel"
      >
        <ChevronRight size={24} />
      </button>

      {/* Main Modal Card */}
      <div 
        className="relative bg-stone-950 rounded-3xl overflow-hidden shadow-2xl border border-white/10 w-full max-w-4xl max-h-[92vh] flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-40 p-2.5 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-md transition-all hover:scale-105 border border-white/10"
          aria-label="Close"
        >
          <X size={18} />
        </button>

        {/* Video Player 9:16 Area */}
        <div className="relative w-full md:w-[420px] bg-black aspect-[9/16] max-h-[65vh] md:max-h-[85vh] flex items-center justify-center overflow-hidden shrink-0 group">
          <video
            ref={videoRef}
            src={normalizeVideoUrl(currentReel.videoUrl)}
            className="w-full h-full object-cover cursor-pointer"
            onClick={togglePlay}
            onTimeUpdate={handleTimeUpdate}
            onEnded={handleNext}
            onError={() => setHasError(true)}
            playsInline
            loop
            muted={isMuted}
          />

          {/* Fallback overlay if video fails or is loading */}
          {hasError && (
            <div className="absolute inset-0 bg-stone-900 flex flex-col items-center justify-center p-6 text-center text-white">
              <img 
                src={currentReel.posterUrl} 
                alt={currentReel.title}
                className="absolute inset-0 w-full h-full object-cover opacity-40 blur-xs"
              />
              <div className="relative z-10 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#9A845C] bg-black/60 px-3 py-1 rounded-full">
                  Video Preview
                </span>
                <p className="text-sm font-semibold">{currentReel.title}</p>
                <a
                  href={currentReel.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-xs font-bold text-white bg-[#9A845C] px-4 py-2 rounded-full hover:bg-[#85714C] transition-colors"
                >
                  Open Direct Video Stream
                </a>
              </div>
            </div>
          )}

          {/* Center Play Overlay Icon when paused */}
          {!isPlaying && !hasError && (
            <div 
              onClick={togglePlay}
              className="absolute inset-0 flex items-center justify-center bg-black/30 cursor-pointer transition-opacity"
            >
              <div className="w-16 h-16 rounded-full bg-[#9A845C] text-white flex items-center justify-center shadow-xl transform scale-110">
                <Play size={28} className="fill-white translate-x-0.5" />
              </div>
            </div>
          )}

          {/* Top Video Overlays */}
          <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
            <span className="px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-white text-[10px] font-black uppercase tracking-wider border border-white/10">
              Dent Carpets
            </span>
            <span className="px-2.5 py-1 bg-red-600/90 text-white text-[9px] font-black uppercase tracking-wider rounded-full flex items-center gap-1 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              Reel
            </span>
          </div>

          {/* Bottom Video Controls and Timeline */}
          <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-20 flex flex-col gap-2">
            {/* Scrubber Progress Bar */}
            <div 
              className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden cursor-pointer relative"
              onClick={(e) => {
                if (!videoRef.current) return;
                const rect = e.currentTarget.getBoundingClientRect();
                const pos = (e.clientX - rect.left) / rect.width;
                videoRef.current.currentTime = pos * videoRef.current.duration;
              }}
            >
              <div 
                className="h-full bg-[#9A845C] transition-all duration-100" 
                style={{ width: `${progress}%` }} 
              />
            </div>

            <div className="flex items-center justify-between text-white text-xs">
              <div className="flex items-center gap-3">
                <button
                  onClick={togglePlay}
                  className="hover:text-[#9A845C] transition-colors p-1"
                  aria-label={isPlaying ? 'Pause' : 'Play'}
                >
                  {isPlaying ? <Pause size={16} /> : <Play size={16} />}
                </button>
                <button
                  onClick={toggleMute}
                  className="hover:text-[#9A845C] transition-colors p-1"
                  aria-label={isMuted ? 'Unmute' : 'Mute'}
                >
                  {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                </button>
                <span className="text-[10px] font-mono text-stone-300">
                  {currentTime} / {duration !== '0:00' ? duration : (currentReel.duration || '0:35')}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setLiked(!liked)}
                  className={`p-1 transition-colors ${liked ? 'text-red-500 fill-red-500' : 'text-white hover:text-red-400'}`}
                  aria-label="Like"
                >
                  <Heart size={16} className={liked ? 'fill-current' : ''} />
                </button>
                <button
                  onClick={handleShare}
                  className="p-1 hover:text-[#9A845C] transition-colors"
                  aria-label="Share"
                >
                  {copiedShare ? <Check size={16} className="text-emerald-400" /> : <Share2 size={16} />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Details & CTA Sidebar */}
        <div className="flex-1 p-6 md:p-8 flex flex-col justify-between overflow-y-auto bg-stone-900 text-white">
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 text-stone-400 text-xs mb-2">
                <MapPin size={13} className="text-[#9A845C]" />
                <span>{currentReel.location}</span>
                {currentReel.client && (
                  <>
                    <span>•</span>
                    <span className="text-stone-300 font-medium">{currentReel.client}</span>
                  </>
                )}
              </div>

              <h2 className="text-2xl font-bold tracking-tight text-white leading-snug">
                {currentReel.title}
              </h2>
            </div>

            <p className="text-stone-300 text-sm leading-relaxed">
              {currentReel.description}
            </p>

            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-stone-800">
              <div className="bg-stone-800/60 p-3 rounded-2xl border border-stone-700/50">
                <span className="block text-[9px] uppercase tracking-wider text-stone-400 font-bold">Duration</span>
                <span className="text-xs font-semibold text-white mt-0.5 block">{currentReel.duration || '0:35'}</span>
              </div>
              <div className="bg-stone-800/60 p-3 rounded-2xl border border-stone-700/50">
                <span className="block text-[9px] uppercase tracking-wider text-stone-400 font-bold">Installer</span>
                <span className="text-xs font-semibold text-[#9A845C] mt-0.5 block">Dent Carpets Master Team</span>
              </div>
            </div>

            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-wider text-stone-400 font-bold block">
                  More in this Collection
                </span>
                <span className="text-[10px] text-stone-400 font-mono">
                  {reels.length} Videos
                </span>
              </div>
              <div className="flex gap-2.5 overflow-x-auto pb-2 scrollbar-none">
                {reels.map((reel, idx) => (
                  <button
                    key={reel.id}
                    onClick={() => onNavigate(idx)}
                    title={reel.title}
                    className={`group relative w-16 h-24 rounded-xl overflow-hidden shrink-0 border-2 transition-all bg-stone-950 ${
                      idx === currentIndex
                        ? 'border-[#9A845C] ring-2 ring-[#9A845C]/40 scale-105 opacity-100 z-10'
                        : 'border-stone-800 opacity-60 hover:opacity-100 hover:border-stone-600'
                    }`}
                  >
                    {/* Real Video Frame Thumbnail */}
                    <video
                      src={`${normalizeVideoUrl(reel.videoUrl)}#t=0.5`}
                      muted
                      playsInline
                      preload="metadata"
                      className="w-full h-full object-cover pointer-events-none"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

                    {/* Slot Number Badge */}
                    <span className="absolute top-1 left-1 px-1.5 py-0.5 rounded bg-black/70 text-[8px] font-mono font-bold text-white leading-none">
                      #{String(reel.slotNumber || idx + 1).padStart(2, '0')}
                    </span>

                    {/* Active State or Duration */}
                    {idx === currentIndex ? (
                      <span className="absolute bottom-1 inset-x-1 py-0.5 rounded bg-[#9A845C] text-[7px] font-black uppercase text-white text-center leading-none">
                        Playing
                      </span>
                    ) : (
                      <span className="absolute bottom-1 right-1 text-[8px] text-stone-300 font-mono leading-none">
                        {reel.duration || '0:35'}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-6 border-t border-stone-800 space-y-3 mt-6">
            <Link
              to="/contact"
              onClick={onClose}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#9A845C] hover:bg-[#85714C] text-white rounded-xl text-xs font-black uppercase tracking-wider shadow-lg transition-all"
            >
              <span>Get a Free Quote for This Style</span>
              <ArrowRight size={14} />
            </Link>

            <div className="flex items-center justify-between text-[11px] text-stone-400 px-1">
              <span>Use arrow keys <kbd className="px-1.5 py-0.5 rounded bg-stone-800 text-[10px] text-stone-300">←</kbd> <kbd className="px-1.5 py-0.5 rounded bg-stone-800 text-[10px] text-stone-300">→</kbd> to browse</span>
              <span>Dent Carpets Since 1971</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
