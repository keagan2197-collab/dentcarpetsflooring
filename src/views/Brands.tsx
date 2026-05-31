import { Section } from '@/src/components/common/Section';
import { brands } from '@/src/data/siteData';
import { motion } from 'motion/react';

export default function Brands() {
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
          poster="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2064&auto=format&fit=crop"
        />
        <div className="absolute inset-0 bg-stone-900/40" />
        <div className="relative z-10 text-center space-y-4 px-6">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[10px] font-black uppercase tracking-[0.4em] text-[#9A845C]"
          >
            Our Partners
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-8xl font-bold text-white tracking-tight"
          >
            Premium Brands.
          </motion.h1>
        </div>
      </section>

      <Section title="Industry Trusted Partners" subtitle="Associated Brands">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {brands.map((brand, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group flex flex-col gap-6"
            >
              <div className="relative aspect-[4/5] rounded-[32px] overflow-hidden bg-stone-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-black/[0.03] transition-all duration-500 hover:shadow-2xl hover:shadow-stone-200/50">
                <img 
                  src={brand.logo} 
                  alt={`${brand.name} collection`}
                  className="w-full h-full object-contain p-12 transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="space-y-4 px-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-stone-900 leading-tight">{brand.name}</h3>
                </div>
                <p className="text-stone-400 text-[10px] font-bold uppercase tracking-[0.2em] leading-relaxed">
                  Industry Leader • Premium Range
                </p>
                <div className="pt-2 flex">
                  <button className="text-[11px] font-bold uppercase tracking-widest text-[#9A845C] border-b-2 border-accent/10 pb-1 hover:border-accent transition-all group-hover:text-stone-900 flex items-center gap-2">
                    Explore Modern Textures
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Feature Section on Brands Page */}
      <Section dark className="bg-stone-950">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
           <div className="space-y-8">
             <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Why we partner with the best</h2>
             <p className="text-stone-500 leading-relaxed text-lg">
               Our reputation is built on the materials we use. We only partner with manufacturers who meet our strict criteria for durability, sustainability, and aesthetic excellence.
             </p>
             <ul className="space-y-4">
                {['European Safety Standards', 'Sustainable Raw Materials', 'Patented Installation Systems', 'Extended Wear Warranties'].map((feature, i) => (
                  <li key={i} className="flex items-center gap-4 text-stone-300 font-medium">
                     <div className="w-2 h-2 rounded-full bg-stone-700" />
                     {feature}
                  </li>
                ))}
             </ul>
           </div>
           <div className="relative aspect-square rounded-[3rem] overflow-hidden">
              <img src="https://picsum.photos/seed/quality/800/800" alt="Quality Assurance" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-stone-900/20" />
           </div>
        </div>
      </Section>
    </main>
  );
}
