import { Section } from '@/src/components/common/Section';
import { motion } from 'motion/react';
import { useState } from 'react';
import { cn } from '@/src/lib/utils';
import { completedProjects } from '@/src/data/siteData';

const projects = completedProjects.map(p => ({
  id: p.id,
  title: p.title,
  image: p.image,
  category: p.category === 'Commercial' ? 'Commercial' : 'Residential'
}));

const categories = ['All', 'Residential', 'Commercial'];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <main className="pt-32">
      {/* Hero Section with Video Overlay */}
      <section className="relative h-[50vh] md:h-[60vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <video 
          src="https://storage.googleapis.com/dentcarpets/dent%20video.mp4"
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?q=80&w=2070&auto=format&fit=crop"
        />
        <div className="absolute inset-0 bg-stone-900/40" />
        <div className="relative z-10 text-center space-y-4 px-6">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[10px] font-black uppercase tracking-[0.4em] text-[#9A845C]"
          >
            Our Work
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-8xl font-bold text-white tracking-tight"
          >
            Recent Projects.
          </motion.h1>
        </div>
      </section>

      <Section title="Our Recent Work" subtitle="Showcase" className="bg-white">
        <div className="flex flex-wrap gap-4 mb-16">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-bold transition-all",
                activeCategory === cat
                  ? "bg-stone-900 text-white shadow-lg"
                  : "bg-stone-100 text-stone-500 hover:bg-stone-200"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, i) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="group relative aspect-square rounded-[24px] overflow-hidden bg-white border border-black/5"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-stone-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                 <div className="text-center p-8">
                    <span className="text-white/60 text-xs font-bold uppercase tracking-widest block mb-2">{project.category}</span>
                    <h3 className="text-white text-2xl font-bold">{project.title}</h3>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </main>
  );
}
