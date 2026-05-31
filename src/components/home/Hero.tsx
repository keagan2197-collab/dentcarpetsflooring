import { motion } from 'motion/react';
import { Instagram, Facebook } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative px-2 md:px-4 pt-24 md:pt-28 mb-4">
      <div className="relative h-[500px] md:h-[550px] w-full overflow-hidden flex items-center bg-stone-900 rounded-[24px]">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="https://images.unsplash.com/photo-1581850518616-bcb819054436?q=80&w=2070&auto=format&fit=crop"
            className="w-full h-full object-cover"
          >
            <source
              src="https://storage.googleapis.com/dentcarpets/dent%20video.mp4"
              type="video/mp4"
            />
          </video>
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Content */}
        <div className="relative z-10 px-6 md:px-24 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Social Links above Title */}
            <div className="flex items-center gap-4 mb-2">
              <a 
                href="https://www.instagram.com/dentcarpetsandflooring/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors hover:scale-110"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://www.facebook.com/dentcarpetsandflooring/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors hover:scale-110"
              >
                <Facebook size={20} />
              </a>
              <div className="h-[1px] w-12 bg-white/30 ml-2" />
            </div>

            <h1 className="text-4xl md:text-7xl font-bold text-white tracking-tighter leading-[1.1]">
              Professional Flooring <br />
              <span className="text-white/60">Installation in Gauteng</span>
            </h1>

            <p className="text-base md:text-xl text-white/80 font-medium max-w-2xl leading-relaxed">
              Trusted by homeowners and businesses for over 55 years. We supply and install carpet, laminate, vinyl and more – done properly, with a clean and professional finish.
            </p>

            <div className="flex flex-wrap items-center gap-3 md:gap-4 pt-6">
              <a 
                href="#contact"
                className="flex-1 sm:flex-none text-center px-8 md:px-10 py-4 bg-white text-stone-900 rounded-full font-bold text-sm transition-all hover:scale-105 active:scale-95 shadow-xl"
              >
                Get a Quote
              </a>
              <a 
                href="tel:0114251468"
                className="flex-1 sm:flex-none text-center px-8 md:px-10 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-full font-bold text-sm transition-all hover:bg-white/20"
              >
                Call Now
              </a>
            </div>
          </motion.div>
        </div>

        {/* Stats Preview in Hero */}
        <div className="absolute bottom-12 right-12 hidden md:flex gap-12 border-l border-white/20 pl-12">
          <div className="text-white">
            <span className="block text-3xl font-bold">2500+</span>
            <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em]">Completed Projects</span>
          </div>
          <div className="text-white">
            <span className="block text-3xl font-bold">2500+</span>
            <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em]">Happy Clients</span>
          </div>
        </div>
      </div>
    </section>
  );
}
