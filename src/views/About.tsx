import { motion } from 'motion/react';
import { Section } from '@/src/components/common/Section';
import { Target, Users, Heart, ShieldCheck, Award, Ruler } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To transform spaces through premium flooring solutions that combine aesthetic beauty with lifelong durability."
    },
    {
      icon: Users,
      title: "Family First",
      description: "As a family-owned business, we treat every project with the care and attention we would give our own homes."
    },
    {
      icon: Heart,
      title: "Passion for Quality",
      description: "We hand-select our brands and products to ensure our clients receive the absolute best in textile technology."
    }
  ];

  const highlights = [
    { icon: Ruler, label: "Precise Measurement" },
    { icon: ShieldCheck, label: "Guaranteed Installation" },
    { icon: Award, label: "Premium Materials" }
  ];

  return (
    <main className="pt-32">
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <video 
          src="https://storage.googleapis.com/dentcarpets/dent%20video.mp4"
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="https://images.unsplash.com/photo-1581850518616-bcb819054436?q=80&w=2070&auto=format&fit=crop"
        />
        <div className="absolute inset-0 bg-stone-900/40" />
        <div className="relative z-10 text-center px-6">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[10px] font-black uppercase tracking-[0.5em] text-[#9A845C] mb-6 block"
          >
            Since 1971
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-8xl font-bold text-white tracking-tight leading-none"
          >
            Our <span className="italic font-normal">Story.</span>
          </motion.h1>
        </div>
      </section>

      {/* Main Narrative */}
      <Section className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-stone-900 tracking-tight">Experience & Service Second to None</h2>
              <div className="w-20 h-1 bg-[#9A845C]" />
            </div>
            <p className="text-xl text-stone-600 leading-relaxed font-medium">
              At Dent Carpets & Flooring, we believe flooring is more than just a surface — it’s the foundation of every beautiful space. From warm family homes to modern commercial interiors, we are passionate about delivering flooring solutions that combine quality, style, and long-lasting performance.
            </p>
            <div className="space-y-6 text-stone-500 leading-relaxed">
              <p>
                Based in Benoni and proudly serving Gauteng, our family-run business has built a reputation on honest service, expert advice, and professional workmanship. With years of industry experience, we understand that every project is unique, which is why we take the time to guide our clients through the best flooring options for their space, lifestyle, and budget.
              </p>
              <p>
                We specialise in a wide range of flooring solutions including luxury vinyl flooring, carpets, laminate flooring, artificial grass, carpet tiles, and more. From the initial consultation and measurements to the final installation, our team is committed to precision, attention to detail, and exceptional customer service every step of the way.
              </p>
              <p>
                At Dent Carpets & Flooring, we don’t believe in cutting corners — we believe in creating spaces that feel complete, elegant, and built to last.
              </p>
            </div>

            <div className="pt-6 border-t border-stone-100">
              <h3 className="text-lg font-bold text-stone-900 mb-4">Why Choose Us?</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5">
                {[
                  "Professional consultations & expert advice",
                  "Precision measurements & quality workmanship",
                  "Premium flooring products",
                  "Reliable, family-run service",
                  "Residential & commercial installations",
                  "Trusted by homeowners, designers & businesses across Gauteng"
                ].map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-stone-600 text-sm">
                    <span className="text-[#9A845C] text-lg leading-none mt-0.5">•</span>
                    <span className="leading-tight">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex gap-8 pt-6 border-t border-stone-100">
               {highlights.map((h, i) => (
                 <div key={i} className="flex flex-col items-center gap-3">
                     <h.icon className="w-6 h-6 text-[#9A845C]" />
                     <span className="text-[10px] font-black uppercase tracking-widest text-stone-400 text-center">{h.label}</span>
                 </div>
               ))}
            </div>
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-4 bg-stone-50 rounded-sm -z-10 group-hover:scale-105 transition-transform duration-700" />
            <img 
              src="https://images.unsplash.com/photo-1582213726892-25b8210cc889?q=80&w=2070&auto=format&fit=crop" 
              alt="Family Consultation" 
              className="w-full h-[600px] object-cover rounded-sm shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-8 right-8 bg-white p-8 shadow-xl max-w-xs space-y-2">
              <p className="text-xs font-black uppercase tracking-widest text-[#9A845C]">The Team</p>
              <p className="text-sm font-bold text-stone-900">"We personally oversee every major installation to ensure the Dent standard is met."</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Values Grid */}
      <section className="py-24 bg-stone-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <value.icon className="w-8 h-8 text-stone-900" />
                </div>
                <h3 className="text-xl font-bold text-stone-900 tracking-tight">{value.title}</h3>
                <p className="text-stone-500 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-white border-t border-stone-100">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
          <h2 className="text-4xl font-bold text-stone-900">Experience the difference of a professional mobile consultation.</h2>
          <p className="text-stone-500 text-lg max-w-2xl mx-auto">
            We bring our showroom directly to your door, allowing you to see colors and textures in your own lighting.
          </p>
          <div className="pt-4">
            <a 
              href="/contact" 
              className="inline-flex items-center gap-3 px-10 py-5 bg-stone-900 text-white font-black text-xs uppercase tracking-widest hover:bg-[#9A845C] transition-all rounded-full"
            >
              Book a Consultation
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
