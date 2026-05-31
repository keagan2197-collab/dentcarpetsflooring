import { Section } from '@/src/components/common/Section';
import { productCategories } from '@/src/data/siteData';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Products() {
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
          poster="https://images.unsplash.com/photo-1581850518621-c966bb617639?q=80&w=2070&auto=format&fit=crop"
        />
        <div className="absolute inset-0 bg-stone-900/40" />
        <div className="relative z-10 text-center space-y-4 px-6">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[10px] font-black uppercase tracking-[0.4em] text-[#9A845C]"
          >
            Premium Solutions
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-8xl font-bold text-white tracking-tight"
          >
            Our Collection.
          </motion.h1>
        </div>
      </section>

      <Section title="Expertly Curated Flooring" subtitle="Explore Our Selection" className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productCategories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group flex flex-col gap-6"
            >
              <div className="relative aspect-[4/5] rounded-[24px] overflow-hidden bg-stone-100 shadow-[0_4px_12px_rgba(0,0,0,0.03)] border border-black/5">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-stone-900">{cat.title}</h3>
                <p className="text-stone-500 leading-relaxed text-sm">
                  {cat.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {cat.variants.map((v, i) => (
                    <span key={i} className="text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full border border-stone-100 text-stone-400 group-hover:border-stone-300 group-hover:text-stone-600 transition-colors">
                      {v}
                    </span>
                  ))}
                </div>
                <div className="pt-4">
                   <Link to={`/products/${cat.id}`} className="inline-flex items-center gap-2 font-bold text-stone-900 group/btn text-sm">
                    View Variants
                    <div className="w-8 h-8 rounded-full bg-stone-50 flex items-center justify-center group-hover/btn:bg-stone-900 group-hover/btn:text-white transition-all">
                      <ArrowRight size={14} />
                    </div>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </main>
  );
}
