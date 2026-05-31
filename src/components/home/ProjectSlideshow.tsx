import React from 'react';
import { motion } from 'motion/react';
import { completedProjects } from '@/src/data/siteData';

export function ProjectSlideshow() {
  // Triple the projects to ensure seamless infinite scroll
  const displayProjects = [...completedProjects, ...completedProjects, ...completedProjects];

  return (
    <div className="relative w-full overflow-hidden py-10">
      <motion.div 
        className="flex gap-6 w-fit"
        animate={{
          x: [0, "-33.333%"],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 80,
            ease: "linear",
          },
        }}
        whileHover={{ animationPlayState: "paused" }}
      >
        {displayProjects.map((project, i) => (
          <div 
            key={`${project.id}-${i}`}
            className="relative w-[300px] md:w-[450px] aspect-[4/3] shrink-0 rounded-[32px] overflow-hidden group shadow-xl border border-stone-100"
          >
            <img 
              src={project.image} 
              alt={project.title} 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              referrerPolicy="no-referrer"
              draggable={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#9A845C] block mb-2">{project.category}</span>
              <h5 className="text-white font-bold text-lg">{project.title}</h5>
            </div>
          </div>
        ))}
      </motion.div>
      
      {/* Gradients to fade edges */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
    </div>
  );
}
