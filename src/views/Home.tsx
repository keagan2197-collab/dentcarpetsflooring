import { motion } from 'motion/react';
import { Hero } from '@/src/components/home/Hero';
import { Section } from '@/src/components/common/Section';
import { BeforeAfterSlider } from '@/src/components/home/BeforeAfterSlider';
import { ProjectSlideshow } from '@/src/components/home/ProjectSlideshow';
import { brands, clients, productCategories, processSteps, testimonials, faqs, completedProjects } from '@/src/data/siteData';
import { Star, ArrowRight, Plus, Minus, Send, Phone, Mail, CheckCircle2 } from 'lucide-react';
import React, { useState } from 'react';
import { cn } from '@/src/lib/utils';
import { Link } from 'react-router-dom';
import { ClientLogoSlider } from '@/src/components/home/ClientLogoSlider';
import { AreasWeService } from '@/src/components/home/AreasWeService';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    flooringType: 'What flooring are you looking for?',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');
    
    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', phone: '', flooringType: 'What flooring are you looking for?', message: '' });
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Failed to send quote request');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
      setErrorMessage('A network error occurred. Please try again.');
    }
  };

  return (
    <main className="overflow-hidden">
      <Hero />

      {/* Trust Stats */}
      <section className="px-6 py-6 md:py-12 border-b border-stone-100">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Years Experience', value: '55+' },
            { label: 'Projects Completed', value: '2500+' },
            { label: 'Happy Clients', value: '2500+' },
            { label: 'Google Rating', value: '4.8★' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-[20px] shadow-[0_4px_12px_rgba(0,0,0,0.02)] border border-stone-100"
            >
              <div className="text-4xl font-bold text-stone-900 mb-1">{stat.value}</div>
              <div className="text-[10px] font-black uppercase tracking-[0.2em] text-[#9A845C]">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Hero Before & After Slider */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#9A845C]">Visual Comparison</span>
                <h2 className="text-5xl md:text-6xl font-bold text-stone-900 tracking-tight leading-none">
                  See the <br />
                  <span className="text-stone-400">Dent Difference.</span>
                </h2>
                <p className="text-stone-500 text-lg font-medium leading-relaxed max-w-md">
                  We don't just lay floors; we transform spaces. Drag the slider to see how our professional installation breathes new life into tired rooms across Gauteng.
                </p>
              </div>
              
              <div className="space-y-6 pt-6 border-t border-stone-100">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-stone-50 flex items-center justify-center text-[#9A845C]">
                    <Star size={18} fill="currentColor" />
                  </div>
                  <p className="font-bold text-stone-900">Premium Materials Sourced Locally</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-stone-50 flex items-center justify-center text-[#9A845C]">
                    <Plus size={18} />
                  </div>
                  <p className="font-bold text-stone-900">55+ Years of Precision Engineering</p>
                </div>
              </div>

              <div className="pt-8">
                <a 
                  href="#contact" 
                  className="inline-flex items-center gap-3 px-8 py-4 bg-stone-900 text-white rounded-full font-bold text-sm hover:scale-105 active:scale-95 transition-all shadow-xl"
                >
                  Start Your Transformation
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>

            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <BeforeAfterSlider 
                  beforeImage="https://storage.googleapis.com/dentcarpets/before%20image%20dent%20carpets"
                  afterImage="https://storage.googleapis.com/dentcarpets/after%20image%20"
                  className="shadow-[0_32px_64px_rgba(0,0,0,0.1)]"
                />
                <div className="mt-6 flex items-center justify-center gap-4 text-stone-400">
                  <span className="text-[10px] font-black uppercase tracking-widest">Drag to Compare</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* About & Flooring Options Section */}
      <Section title="Flooring You Can Trust – Installed Properly" subtitle="Home & Business" id="about">
        <div className="space-y-24">
          <div className="max-w-4xl">
            <div className="space-y-6">
              <p className="text-3xl md:text-4xl text-stone-900 leading-tight font-bold tracking-tight">
                We supply and install high-quality flooring for homes and businesses across Gauteng – with a strong focus on precision, durability, and a clean professional finish.
              </p>
              <p className="text-stone-500 leading-relaxed text-lg max-w-3xl">
                With over 55 years of experience, we understand that flooring is a long-term investment. That’s why we take pride in doing the job properly – from preparation to final installation – ensuring a result that not only looks great but lasts.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 py-10 border-y border-stone-100 mt-12">
              <div className="text-left">
                <div className="font-bold text-stone-900 text-3xl">55+</div>
                <div className="text-[10px] font-black text-[#9A845C] uppercase tracking-[0.2em] mt-1">Years Experience</div>
              </div>
              <div className="text-left">
                <div className="font-bold text-stone-900 text-3xl">2500+</div>
                <div className="text-[10px] font-black text-[#9A845C] uppercase tracking-[0.2em] mt-1">Jobs Completed</div>
              </div>
              <div className="text-left hidden md:block">
                <div className="font-bold text-stone-900 text-3xl">4.8★</div>
                <div className="text-[10px] font-black text-[#9A845C] uppercase tracking-[0.2em] mt-1">Google Rating</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((cat, i) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative h-[450px] rounded-[32px] overflow-hidden bg-stone-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-stone-100"
              >
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-stone-900/60 transition-opacity group-hover:bg-stone-900/40" />
                <div className="absolute bottom-0 left-0 right-0 p-10 space-y-4">
                  <h4 className="text-3xl font-bold text-white">{cat.title}</h4>
                  <p className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2">
                    {cat.description}
                  </p>
                  <div className="pt-4 flex translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <Link
                      to={`/products/${cat.id}`}
                      className="px-8 py-3 bg-white text-stone-900 rounded-full text-xs font-bold shadow-lg hover:bg-[#9A845C] hover:text-white transition-all flex items-center gap-2"
                    >
                      View Selection
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Process Section */}
      <Section title="Our Simple & Professional Installation Process" subtitle="The Dent Standard" id="process" className="bg-stone-50/50">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {processSteps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 space-y-6 bg-white rounded-[32px] shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-stone-100 relative group"
            >
              <div className="w-10 h-10 bg-stone-900 text-white font-bold text-xs rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                {i + 1}
              </div>
              <div className="space-y-3">
                <h4 className="text-sm font-black text-stone-900 uppercase tracking-widest">{step.title}</h4>
                <p className="text-stone-500 text-[13px] leading-relaxed font-medium">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-16 text-center space-y-8">
          <p className="text-xl font-bold text-stone-900 bg-white inline-block px-8 py-3 rounded-full border border-stone-100 shadow-sm">
            We take pride in neat, professional workmanship – done right the first time
          </p>
          <div className="flex justify-center">
             <a 
              href="#contact"
              className="inline-flex items-center gap-3 px-10 py-4 bg-stone-900 text-white rounded-full font-bold text-sm hover:scale-105 active:scale-95 transition-all shadow-xl"
             >
               Get a Free Quote
               <ArrowRight size={18} />
             </a>
          </div>
        </div>
      </Section>

      {/* Clients Section */}
      <Section title="Trusted by Leading Businesses & Organisations" subtitle="Commercial Success" className="bg-white">
        <ClientLogoSlider />
        <div className="mt-16 text-center space-y-8">
          <div className="space-y-2">
            <p className="text-stone-500 font-bold uppercase tracking-widest text-sm">Our Reach</p>
            <p className="text-2xl font-bold text-stone-900">2500+ successful projects completed across residential and commercial spaces</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
             <a href="tel:0114251468" className="px-8 py-4 bg-stone-900 text-white rounded-full font-bold text-sm flex items-center gap-2 hover:bg-stone-800 transition-all">
               Call Now
               <Phone size={16} />
             </a>
             <a href="https://wa.me/27825584844" target="_blank" className="px-8 py-4 bg-[#25D366] text-white rounded-full font-bold text-sm flex items-center gap-2 hover:opacity-90 transition-all">
               WhatsApp Us
               <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.319 1.592 5.548 0 10.058-4.51 10.06-10.059 0-2.69-1.047-5.216-2.948-7.117-1.9-1.901-4.427-2.947-7.113-2.948-5.552 0-10.06 4.51-10.063 10.06 0 2.12.563 4.107 1.635 5.861l-1.071 3.913 4.1-.11z"/></svg>
             </a>
          </div>
        </div>
      </Section>

      {/* Areas We Service Section */}
      <AreasWeService />

      {/* Brands Section */}
      <div className="py-12 md:py-24 bg-stone-50/30 border-y border-stone-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div className="space-y-4">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#9A845C]">Industry Partners</span>
            <h3 className="text-4xl font-bold text-stone-900 tracking-tight">Partnered With Industry-Leading Brands</h3>
            <p className="text-stone-500 max-w-2xl font-medium">
              We source quality materials from trusted local and international flooring suppliers to ensure durability and a premium finish
            </p>
          </div>
          <Link to="/brands" className="text-sm font-bold text-stone-900 group flex items-center gap-2 bg-white px-6 py-3 rounded-full border border-stone-100 hover:bg-stone-900 hover:text-white transition-all shadow-sm">
            View all brands
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Marquee effect for brands */}
        <div className="flex gap-12 px-6 animate-marquee flex-nowrap min-w-full">
           <div className="flex shrink-0 items-center justify-around gap-16 min-w-full">
              {brands.map((brand, i) => (
                <div key={i} className="transition-all duration-500 w-40 h-20 flex items-center justify-center">
                  <img src={brand.logo} alt={brand.name} className="max-w-full max-h-full object-contain" referrerPolicy="no-referrer" />
                </div>
              ))}
           </div>
           <div className="flex shrink-0 items-center justify-around gap-16 min-w-full">
              {brands.map((brand, i) => (
                <div key={i+"dup"} className="transition-all duration-500 w-40 h-20 flex items-center justify-center">
                  <img src={brand.logo} alt={brand.name} className="max-w-full max-h-full object-contain" referrerPolicy="no-referrer" />
                </div>
              ))}
           </div>
        </div>
      </div>

      {/* Completed Projects Slideshow */}
      <Section title="Real Results, Real Quality" subtitle="Our Completed Projects" id="projects" className="bg-white">
        <ProjectSlideshow />
        <div className="mt-12 text-center">
           <Link to="/projects" className="inline-flex items-center gap-2 font-bold text-stone-900 underline underline-offset-8 hover:text-[#9A845C] transition-colors">
              Explore our project archive
           </Link>
        </div>
      </Section>

      {/* Testimonials Section */}
      <Section title="Real Feedback from Our Clients" subtitle="Google Reviews" id="testimonials" className="bg-stone-50/20 border-t border-stone-100">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6 bg-white p-8 rounded-2xl border border-stone-100">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-white shadow-md rounded-xl flex items-center justify-center p-2">
              <svg viewBox="0 0 24 24" className="w-10 h-10"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-3xl font-black text-stone-900">4.8</span>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => <Star key={i} size={18} className="fill-[#FBBC05] text-[#FBBC05]" />)}
                </div>
              </div>
              <p className="text-stone-400 text-xs font-bold uppercase tracking-widest">Based on 250+ Google Reviews</p>
            </div>
          </div>
          <a 
            href="https://share.google/gJl7Yu816dOHThYhz" 
            target="_blank"
            className="px-8 py-4 bg-stone-900 text-white rounded-full font-bold text-sm hover:bg-[#9A845C] transition-all flex items-center gap-2 shadow-lg"
          >
            Leave a Google Review
            <ArrowRight size={18} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-10 rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.02)] border border-stone-100 space-y-6 flex flex-col h-full"
            >
              <div className="flex items-center justify-between">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-[#FBBC05] text-[#FBBC05]" />
                  ))}
                </div>
                <svg viewBox="0 0 24 24" className="w-5 h-5 opacity-20"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="currentColor"/></svg>
              </div>
              
              <p className="text-stone-700 font-medium leading-relaxed flex-1">"{test.text}"</p>
              
              <div className="pt-6 border-t border-stone-50 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-stone-100 shrink-0">
                  <img 
                    src={`https://i.pravatar.cc/150?u=${test.name}`} 
                    alt={test.name} 
                    className="w-full h-full object-cover" 
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-stone-900 text-sm truncate">{test.name}</span>
                    <div className="w-3.5 h-3.5 bg-blue-500 rounded-full flex items-center justify-center shrink-0">
                      <CheckCircle2 size={10} className="text-white" />
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-stone-400 text-[10px] font-bold uppercase tracking-widest">
                    <span>Verified Reviewer</span>
                    <span className="w-1 h-1 bg-stone-300 rounded-full" />
                    <span>2 months ago</span>
                  </div>
                </div>
                <div className="bg-stone-50 p-2 rounded-lg">
                  <svg viewBox="0 0 24 24" className="w-4 h-4"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* FAQ Section */}
      <Section title="Your Flooring Questions – Answered" subtitle="Helpfully Answered" id="faq" className="bg-stone-50/50 border-y border-stone-100">
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <FaqItem key={i} question={faq.question} answer={faq.answer} />
          ))}
        </div>
        <div className="mt-16 text-center space-y-6">
           <div className="space-y-1">
             <p className="text-xl font-bold text-stone-900">Still have questions?</p>
             <p className="text-stone-500">Our team is here to help – get in touch today</p>
           </div>
           <div className="flex flex-wrap justify-center gap-4">
             <a href="#contact" className="px-8 py-3 bg-stone-900 text-white rounded-full font-bold text-sm shadow-lg hover:bg-stone-800 transition-all">
                Get a Quote
             </a>
             <a href="https://wa.me/27825584844" target="_blank" className="px-8 py-3 bg-white border border-stone-100 text-stone-900 rounded-full font-bold text-sm shadow-sm hover:bg-stone-50 transition-all">
                WhatsApp Us
             </a>
           </div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section title="Ready to Upgrade Your Floors?" subtitle="Contact Us Today" id="contact" className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact Info */}
          <div className="lg:col-span-12 xl:col-span-4 space-y-12">
            <div className="space-y-6">
              <p className="text-2xl text-stone-900 leading-tight font-bold">
                Whether it’s your home or business, we’ll help you choose the right flooring and handle everything from start to finish – professionally and efficiently
              </p>
              <p className="text-[#9A845C] font-black uppercase tracking-[0.2em] text-xs">
                Fast turnaround times available across Gauteng
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-stone-100">
               <div className="space-y-1">
                  <div className="text-xl font-bold text-stone-900">55+ Years</div>
                  <div className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">Experience</div>
               </div>
               <div className="space-y-1">
                  <div className="text-xl font-bold text-stone-900">2500+ Jobs</div>
                  <div className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">Completed</div>
               </div>
               <div className="space-y-1">
                  <div className="text-xl font-bold text-stone-900">4.8 Rated</div>
                  <div className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">Client Reviews</div>
               </div>
            </div>

            <div className="space-y-4">
              <a href="tel:0114251468" className="flex items-center gap-6 p-6 rounded-3xl bg-stone-50 border border-stone-100 group hover:border-stone-200 transition-all">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-stone-900 group-hover:bg-stone-900 group-hover:text-white transition-all">
                  <Phone size={24} />
                </div>
                <div>
                  <span className="text-xs uppercase font-bold tracking-widest text-stone-400 block mb-1">Landline</span>
                  <span className="font-bold text-stone-900">011-425-1468</span>
                </div>
              </a>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a href="tel:0825584844" className="flex items-center gap-6 p-6 rounded-3xl bg-stone-50 border border-stone-100 group hover:border-stone-200 transition-all">
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-stone-900 group-hover:bg-stone-900 group-hover:text-white transition-all">
                    <Phone size={24} />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold tracking-widest text-stone-400 block mb-1">Mobile</span>
                    <span className="font-bold text-stone-900 whitespace-nowrap">082-558-4844</span>
                  </div>
                </a>
                <a href="tel:0722726198" className="flex items-center gap-6 p-6 rounded-3xl bg-stone-50 border border-stone-100 group hover:border-stone-200 transition-all">
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-stone-900 group-hover:bg-stone-900 group-hover:text-white transition-all">
                    <Phone size={24} />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold tracking-widest text-stone-400 block mb-1">Mobile</span>
                    <span className="font-bold text-stone-900 whitespace-nowrap">072-272-6198</span>
                  </div>
                </a>
              </div>
              <a href="mailto:James.dent@mweb.co.za" className="flex items-center gap-6 p-6 rounded-3xl bg-stone-50 border border-stone-100 group hover:border-stone-200 transition-all">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-stone-900 group-hover:bg-stone-900 group-hover:text-white transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <span className="text-xs uppercase font-bold tracking-widest text-stone-400 block mb-1">Email Us</span>
                  <span className="font-bold text-stone-900">James.dent@mweb.co.za</span>
                </div>
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7 xl:col-span-5">
            <form 
              onSubmit={handleSubmit}
              className="bg-white p-8 md:p-12 rounded-[3rem] shadow-[0_30px_60px_rgba(0,0,0,0.08)] border border-stone-100 space-y-6 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-2 bg-[#9A845C]" />
              <div className="space-y-2">
                 <h4 className="text-2xl font-bold text-stone-900">Request a Callback</h4>
                 <p className="text-stone-500">Fill in your details and we'll contact you for a quote.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-stone-50 border border-stone-100 rounded-2xl px-6 py-4 outline-none focus:border-stone-300 transition-all font-medium" 
                  />
                </div>
                <div className="space-y-2">
                  <input 
                    type="tel" 
                    placeholder="Phone Number" 
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-stone-50 border border-stone-100 rounded-2xl px-6 py-4 outline-none focus:border-stone-300 transition-all font-medium" 
                  />
                </div>
              </div>
              <div className="space-y-2">
                <select 
                  value={formData.flooringType}
                  onChange={(e) => setFormData({ ...formData, flooringType: e.target.value })}
                  className="w-full bg-stone-50 border border-stone-100 rounded-2xl px-6 py-4 outline-none focus:border-stone-300 transition-all appearance-none font-medium text-stone-600"
                >
                  <option disabled>What flooring are you looking for?</option>
                  <option>Carpets</option>
                  <option>Commercial Flooring</option>
                  <option>Laminate</option>
                  <option>Vinyl</option>
                  <option>Artificial Grass</option>
                </select>
              </div>
              <div className="space-y-2">
                <textarea 
                  rows={4} 
                  placeholder="Tell us about your project area (sqm or room type)..." 
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-stone-50 border border-stone-100 rounded-2xl px-6 py-4 outline-none focus:border-stone-300 transition-all resize-none font-medium" 
                />
              </div>
              <button 
                type="submit"
                disabled={status === 'submitting'}
                className="w-full py-5 bg-stone-900 text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-stone-800 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 disabled:opacity-50"
              >
                {status === 'submitting' ? 'Sending...' : 'Send Quote Request'}
                <ArrowRight size={20} />
              </button>

              {status === 'success' && (
                <p className="text-green-600 text-sm font-bold text-center">Thank you! Your request has been sent.</p>
              )}
              {status === 'error' && (
                <div className="space-y-2 text-center">
                  <p className="text-red-600 text-sm font-bold">Sorry, something went wrong.</p>
                  <p className="text-red-500 text-[10px] font-medium italic">{errorMessage}</p>
                </div>
              )}
            </form>
          </div>

          {/* Video Branding */}
          <div className="lg:col-span-5 xl:col-span-3 h-full min-h-[400px] lg:min-h-full">
            <div className="relative h-full w-full rounded-[3rem] overflow-hidden shadow-2xl border border-stone-100 group">
              <video 
                src="https://storage.googleapis.com/dentcarpets/dent%20video.mp4"
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                poster="https://images.unsplash.com/photo-1545022388-43a762e088b0?q=80&w=2070&auto=format&fit=crop"
              />
              <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-stone-900/20 transition-colors" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl">
                  <p className="text-[10px] font-black text-[#9A845C] uppercase tracking-[0.2em] mb-2">Quality Guarantee</p>
                  <p className="text-sm font-bold text-stone-900">Specialists in high-end domestic & industrial flooring solutions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string; key?: any }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-stone-200 rounded-2xl overflow-hidden bg-white transition-all">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left"
      >
        <span className="font-bold text-stone-900">{question}</span>
        <div className={cn(
          "w-8 h-8 rounded-full border border-stone-100 flex items-center justify-center transition-all",
          isOpen ? "bg-stone-900 text-white border-stone-900" : "bg-white text-stone-900"
        )}>
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </div>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0 }}
        className="overflow-hidden"
      >
        <div className="p-6 pt-0 text-stone-500 text-sm leading-relaxed border-t border-stone-50">
          {answer}
        </div>
      </motion.div>
    </div>
  );
}

function ClientCard({ client, i }: { client: { name: string; logo?: string }; i: number; key?: any }) {
  const [imageError, setImageError] = useState(false);

  // Layout classes for biggest to smallest brand hierarchy
  let colSpanClass = "col-span-12 sm:col-span-4 lg:col-span-3";
  let hClass = "h-20 sm:h-24 md:h-28";
  let pClass = "p-4";
  let textClass = "text-[10px] font-black";

  if (i < 2) {
    // ABSA, Santam (Largest)
    colSpanClass = "col-span-12 sm:col-span-6";
    hClass = "h-36 sm:h-40 md:h-44";
    pClass = "p-8 md:p-10";
    textClass = "text-sm md:text-base font-black";
  } else if (i < 8) {
    // RACE! to St Dunstans College (Medium)
    colSpanClass = "col-span-6 sm:col-span-4";
    hClass = "h-28 sm:h-32 md:h-36";
    pClass = "p-6";
    textClass = "text-xs font-bold";
  }

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.05 }}
      style={{ contentVisibility: 'auto' }}
      className={cn(
        "group bg-[#F8F7F5] rounded-24 transition-all duration-300 hover:shadow-xl hover:shadow-stone-200/50 hover:border-stone-200 border border-stone-100 flex items-center justify-center",
        colSpanClass,
        hClass,
        pClass
      )}
    >
      {client.logo && !imageError ? (
        <img 
          src={client.logo} 
          alt={client.name} 
          className="max-w-full max-h-full object-contain transition-all duration-500 scale-100 group-hover:scale-105"
          referrerPolicy="no-referrer"
          onError={() => setImageError(true)}
        />
      ) : (
        <span className={cn(
          "text-stone-400 uppercase tracking-[0.2em] text-center group-hover:text-stone-900 transition-colors px-2",
          textClass
        )}>
          {client.name}
        </span>
      )}
    </motion.div>
  );
}
