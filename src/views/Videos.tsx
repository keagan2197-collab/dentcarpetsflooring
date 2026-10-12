import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ChevronRight, Film } from 'lucide-react';
import { defaultVideoReels } from '@/src/data/videoReelsData';
import { ReelCard } from '@/src/components/videos/ReelCard';
import { ReelModalPlayer } from '@/src/components/videos/ReelModalPlayer';

export default function Videos() {
  // Exactly 10 video slots for the video gallery
  const reels = defaultVideoReels.slice(0, 10);
  const [activeModalIndex, setActiveModalIndex] = useState<number | null>(null);

  return (
    <main className="pt-32 pb-24 min-h-screen bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
        {/* Gallery Header */}
        <div className="text-left space-y-4 border-b border-stone-200 pb-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-stone-400 text-xs uppercase tracking-widest font-bold">
            <Link to="/" className="hover:text-stone-900 transition-colors">
              Home
            </Link>
            <ChevronRight size={12} />
            <Link to="/projects" className="hover:text-stone-900 transition-colors">
              Projects
            </Link>
            <ChevronRight size={12} />
            <span className="text-[#9A845C]">Videos</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#9A845C]/10 text-[#9A845C] text-xs font-bold uppercase tracking-wider">
                <Film size={13} />
                <span>Installation Videos & Reels</span>
              </div>
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-6xl font-bold text-stone-900 tracking-tight"
              >
                Video Gallery.
              </motion.h1>
              <p className="text-stone-500 text-sm md:text-base max-w-2xl leading-relaxed">
                Watch our master craftsmen in action across 10 featured installation projects. Click any video to play full screen.
              </p>
            </div>

            <div className="text-xs text-stone-400 font-mono shrink-0">
              10 Featured Videos • Gauteng
            </div>
          </div>
        </div>

        {/* 10-Video Gallery Grid */}
        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {reels.map((reel, idx) => (
              <div key={reel.id} className="space-y-3">
                <ReelCard
                  reel={reel}
                  onOpenModal={() => setActiveModalIndex(idx)}
                />
                <div className="px-1 text-left space-y-0.5">
                  <div className="flex items-center justify-between text-xs text-stone-400">
                    <span className="font-mono font-bold text-[#9A845C]">
                      Video {String(reel.slotNumber || idx + 1).padStart(2, '0')}
                    </span>
                    <span className="truncate max-w-[120px]">{reel.location}</span>
                  </div>
                  <h3 className="text-sm font-bold text-stone-900 line-clamp-1 leading-snug">
                    {reel.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Active Modal Player for all 10 videos */}
      {activeModalIndex !== null && (
        <ReelModalPlayer
          reels={reels}
          currentIndex={activeModalIndex}
          isOpen={activeModalIndex !== null}
          onClose={() => setActiveModalIndex(null)}
          onNavigate={(newIdx) => setActiveModalIndex(newIdx)}
        />
      )}
    </main>
  );
}
