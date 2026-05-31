import { motion } from 'motion/react';
import { Section } from '@/src/components/common/Section';
import { processSteps } from '@/src/data/siteData';

export default function Process() {
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
          poster="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop"
        />
        <div className="absolute inset-0 bg-stone-900/40" />
        <div className="relative z-10 text-center space-y-4 px-6">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[10px] font-black uppercase tracking-[0.4em] text-[#9A845C]"
          >
            Our Methodology
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-8xl font-bold text-white tracking-tight"
          >
            The <span className="text-white/60">Process.</span>
          </motion.h1>
        </div>
      </section>

      <Section title="Our Delivery Process" subtitle="Step by Step" className="bg-white">
        <div className="grid grid-cols-1 gap-12 mt-12">
          {processSteps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-8 md:gap-16 items-start"
            >
              <div className="text-8xl md:text-9xl font-black text-stone-100 shrink-0 leading-none tabular-nums">
                {step.number}
              </div>
              <div className="pt-8 md:pt-12 space-y-4 max-w-xl">
                <h3 className="text-3xl font-bold text-stone-900">{step.title}</h3>
                <p className="text-stone-500 leading-relaxed text-lg">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </main>
  );
}
