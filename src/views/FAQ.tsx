import { motion } from 'motion/react';
import { Section } from '@/src/components/common/Section';
import { Plus, Minus, HelpCircle, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/src/lib/utils';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      category: "Measuring & Quotes",
      question: "How do I get an accurate quote?",
      answer: "The best way is to book a mobile consultation. We come to your premises in the Gauteng area, take professional measurements, and show you samples in your own environment. This ensures 100% accuracy in both costing and aesthetic choice."
    },
    {
      category: "Measuring & Quotes",
      question: "Is there a call-out fee for measurements?",
      answer: "We offer free measurement and quotations within Benoni and surrounding East Rand areas. For locations further afield across Gauteng, a small fuel surcharge may apply, which is usually credited back to you once the quote is accepted."
    },
    {
      category: "Installation",
      question: "Do you provide professional installation?",
      answer: "Yes, we handle the entire process. Our installation teams are highly skilled and supervised to ensure that every floor is laid to the manufacturer's exact specifications, preserving your warranty."
    },
    {
      category: "Installation",
      question: "How long does installation typically take?",
      answer: "Most residential carpet or vinyl installations take 1-2 days depending on the area size. Large commercial projects or artificial grass installations are scheduled specifically based on project scope."
    },
    {
      category: "Products",
      question: "What types of flooring do you specialize in?",
      answer: "We specialize in high-quality wool and synthetic carpets, luxury vinyl tiles (LVT), nested rigid vinyl, and premium artificial grass for both residential and commercial applications."
    },
    {
      category: "Products",
      question: "Do your products come with warranties?",
      answer: "Absolutely. All our flooring products carry manufacturer warranties, ranging from 5 to 25 years depending on the brand and usage type (Residential vs. Commercial)."
    },
    {
      category: "Maintenance",
      question: "How should I maintain my new flooring?",
      answer: "Maintenance varies by product. For carpets, regular vacuuming and professional steam cleaning every 12-18 months is recommended. For vinyl, regular sweeping and damp mopping with pH-neutral cleaners is best. We provide specific care guides with every installation."
    }
  ];

  return (
    <main className="pt-32">
      {/* Search/Header with Video Background */}
      <section className="relative h-[50vh] md:h-[60vh] min-h-[350px] flex items-center justify-center overflow-hidden border-b border-stone-100">
        <video 
          src="https://storage.googleapis.com/dentcarpets/dent%20video.mp4"
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2070&auto=format&fit=crop"
        />
        <div className="absolute inset-0 bg-stone-900/40" />
        <div className="relative z-10 text-center space-y-6 max-w-4xl px-6">
          <div className="inline-flex p-3 bg-white/10 backdrop-blur-md rounded-2xl mb-4">
             <HelpCircle className="text-[#9A845C] w-6 h-6" />
          </div>
          <h1 className="text-4xl md:text-7xl font-bold text-white tracking-tight">How can we help?</h1>
          <p className="text-white/80 text-base md:text-lg max-w-xl mx-auto font-medium">
            Find answers to common questions about our products, process, and installation services.
          </p>
        </div>
      </section>

      <Section className="bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-12">
            {/* Grouped by Category */}
            {Array.from(new Set(faqs.map(f => f.category))).map((category) => (
              <div key={category} className="space-y-6">
                <h2 className="text-xs font-black uppercase tracking-[0.2em] text-[#9A845C] border-b border-stone-100 pb-4">
                  {category}
                </h2>
                <div className="space-y-4">
                  {faqs.filter(f => f.category === category).map((faq, i) => {
                    const globalIndex = faqs.indexOf(faq);
                    const isOpen = openIndex === globalIndex;
                    
                    return (
                      <div 
                        key={globalIndex}
                        className={cn(
                          "border rounded-sm transition-all duration-300",
                          isOpen ? "border-stone-900 shadow-lg" : "border-stone-100 hover:border-stone-200"
                        )}
                      >
                        <button
                          onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                          className="w-full text-left p-6 md:p-8 flex items-center justify-between gap-4"
                        >
                          <span className="text-lg font-bold text-stone-900 leading-tight">
                            {faq.question}
                          </span>
                          <div className={cn(
                            "w-8 h-8 rounded-full border flex items-center justify-center transition-colors shrink-0",
                            isOpen ? "bg-stone-900 border-stone-900 text-white" : "border-stone-200 text-stone-400"
                          )}>
                            {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                          </div>
                        </button>
                        
                        <motion.div
                          initial={false}
                          animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 md:px-8 pb-8 text-stone-500 leading-relaxed font-medium">
                            {faq.answer}
                          </div>
                        </motion.div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Still have questions? */}
          <div className="mt-24 p-12 bg-stone-950 rounded-sm text-center space-y-8 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-[#9A845C]/10 blur-[100px] rounded-full" />
             <div className="relative z-10 space-y-6">
                <div className="w-12 h-12 bg-[#9A845C] rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="text-white w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white">Still have questions?</h3>
                <p className="text-stone-400 max-w-sm mx-auto">
                  Our team is ready to assist you personally with any queries regarding your flooring project.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <a 
                    href="/contact" 
                    className="px-8 py-4 bg-white text-stone-900 font-black text-[10px] uppercase tracking-widest rounded-full hover:bg-[#9A845C] hover:text-white transition-all shadow-xl"
                  >
                    Contact Us
                  </a>
                  <a 
                    href="tel:0114251468" 
                    className="px-8 py-4 bg-transparent border border-white/20 text-white font-black text-[10px] uppercase tracking-widest rounded-full hover:bg-white/10 transition-all"
                  >
                    Call Now
                  </a>
                </div>
             </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
