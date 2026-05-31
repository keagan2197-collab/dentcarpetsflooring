import { motion } from 'motion/react';
import { Section } from '@/src/components/common/Section';
import { Phone, Mail, MapPin, Clock, MessageSquare, ArrowRight } from 'lucide-react';
import { QuoteForm } from '@/src/components/common/QuoteForm';

export default function Contact() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: [
        { label: "Landline: 011-425-1468", link: "tel:0114251468" },
        { label: "James: 082-558-4844", link: "tel:0825584844" },
        { label: "Matthew: 072-272-6198", link: "tel:0722726198" }
      ],
    },
    {
      icon: Mail,
      title: "Email Us",
      details: [
        { label: "James.dent@mweb.co.za", link: "mailto:James.dent@mweb.co.za" }
      ],
    },
    {
      icon: MapPin,
      title: "Our Office",
      details: [
        { label: "Benoni, Gauteng", link: "https://maps.google.com" },
        { label: "South Africa", link: "https://maps.google.com" }
      ],
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Fri: 08:00 - 17:00", "Sat: 08:30 - 12:30", "Sun: Closed"],
    }
  ];

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
          poster="https://images.unsplash.com/photo-1577415124269-fc1140a69e91?q=80&w=2070&auto=format&fit=crop"
        />
        <div className="absolute inset-0 bg-stone-900/40" />
        <div className="relative z-10 text-center space-y-4 px-6">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[10px] font-black uppercase tracking-[0.4em] text-[#9A845C]"
          >
            Get In Touch
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-8xl font-bold text-white tracking-tight"
          >
            Contact <span className="text-white/60">Us.</span>
          </motion.h1>
        </div>
      </section>

      <Section className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Column: Form */}
          <div className="lg:col-span-7 space-y-12">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-stone-900 tracking-tight">Request a Quote.</h2>
              <p className="text-stone-500 text-lg max-w-xl">
                Fill in the form below with your project details, and our team will get back to you with a comprehensive quote within 24 hours.
              </p>
            </div>
            
            <div className="bg-stone-50 md:p-12 p-8 rounded-sm border border-stone-100 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#9A845C]" />
              <QuoteForm 
                title="Your Details"
                subtitle="One of our friendly specialists will contact you."
              />
            </div>
          </div>

          {/* Right Column: Info */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-32">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 bg-white border border-stone-100 rounded-sm hover:-translate-y-1 transition-all shadow-[0_4px_12px_rgba(0,0,0,0.02)]"
                >
                  <info.icon className="w-8 h-8 text-[#9A845C] mb-6" />
                  <h3 className="text-sm font-black text-stone-900 uppercase tracking-widest mb-4">{info.title}</h3>
                  <div className="space-y-1">
                    {info.details.map((detail, j) => {
                      if (typeof detail === 'string') {
                        return <p key={j} className="text-sm text-stone-500 font-medium">{detail}</p>;
                      }
                      const d = detail as { label: string; link: string };
                      return (
                        <a 
                          key={j} 
                          href={d.link}
                          target={d.link.startsWith('http') ? "_blank" : undefined}
                          className="block text-sm text-stone-500 font-medium hover:text-[#9A845C] transition-colors"
                        >
                          {d.label}
                        </a>
                      );
                    })}
                  </div>
                  {/* Contact Links rendered directly above */}
                </motion.div>
              ))}
            </div>

            {/* Quick WhatsApp Card */}
            <div className="p-8 bg-[#25D366]/5 border border-[#25D366]/10 rounded-sm space-y-4">
              <div className="flex items-center gap-3">
                <MessageSquare className="text-[#25D366]" size={20} />
                <h4 className="text-sm font-black text-stone-900 uppercase tracking-widest">Instant Chat</h4>
              </div>
              <p className="text-sm text-stone-600 font-medium">
                Need a quick answer? Send us a message on WhatsApp and one of our consultants will assist you immediately.
              </p>
              <a 
                href="https://wa.me/27825584844" 
                target="_blank"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] text-white rounded-full font-bold text-xs shadow-xl shadow-[#25D366]/20 hover:scale-105 active:scale-95 transition-all"
              >
                Launch WhatsApp
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* Map Section or Additional Branding */}
      <section className="px-6 py-24 bg-stone-900 overflow-hidden relative">
        <div className="max-w-7xl mx-auto text-center space-y-8 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Serving the Entire <br className="md:hidden" /> Gauteng Region.</h2>
          <p className="text-stone-400 text-lg max-w-2xl mx-auto font-medium">
            From Johannesburg to Pretoria, Benoni to Sandton. We bring the showroom to you with mobile consultations and expert on-site measurement.
          </p>
          <div className="flex items-center justify-center gap-12 pt-8 flex-wrap">
            {['Benoni', 'Sandton', 'Pretoria', 'Midrand', 'Bedfordview'].map((area) => (
              <span key={area} className="text-stone-500 font-black text-xs uppercase tracking-[0.3em]">{area}</span>
            ))}
          </div>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#9A845C]/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#9A845C]/05 blur-[120px] rounded-full -translate-x-1/2 translate-y-1/2" />
      </section>
    </main>
  );
}
