import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { productCategories, products } from '@/src/data/siteData';
import { Section } from '@/src/components/common/Section';
import { ChevronLeft, Share2, Info, CheckCircle2, Download, ArrowRight, ShieldCheck, Truck, Ruler, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { cn } from '@/src/lib/utils';
import { useQuote } from '@/src/context/QuoteContext';

export default function ProductDetail() {
  const { categoryId, productId } = useParams<{ categoryId: string; productId: string }>();
  const product = products.find((p) => p.id === productId);
  const category = productCategories.find((c) => c.id === categoryId);

  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0] || null);
  const [quantity, setQuantity] = useState(1);
  const [isScrolledPastHero, setIsScrolledPastHero] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  
  const { addItem } = useQuote();

  const handleAddToQuote = () => {
    if (!product || !selectedVariant) return;
    
    addItem({
      id: `${product.id}-${selectedVariant.name}`,
      productId: product.id,
      productName: product.name,
      variantName: selectedVariant.name,
      variantColor: selectedVariant.color,
      variantImage: selectedVariant.image,
      quantity: quantity
    });

    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  useEffect(() => {
    if (product?.variants?.length) {
      setSelectedVariant(product.variants[0]);
    }

    const handleScroll = () => {
      if (heroRef.current) {
        const heroBottom = heroRef.current.offsetTop + heroRef.current.offsetHeight;
        setIsScrolledPastHero(window.scrollY > heroBottom - 500);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [product]);

  if (!product || !category) {
    return (
      <div className="pt-36 min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-stone-900">Product Not Found</h1>
          <Link to="/products" className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.2em] text-[#9A845C] hover:text-stone-900 transition-colors">
            <ChevronLeft size={16} />
            Back to products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Action Bar (Sticky) */}
      <AnimatePresence>
        {isScrolledPastHero && (
          <motion.div 
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            exit={{ y: -100 }}
            className="fixed top-20 left-0 right-0 z-40 bg-white border-b border-stone-100 shadow-sm hidden md:block"
          >
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <img src={product.image} alt="" className="w-10 h-10 object-cover rounded" />
                <div>
                  <h3 className="text-sm font-bold text-stone-900">{product.name}</h3>
                  <p className="text-[10px] font-bold text-[#9A845C] uppercase tracking-widest">{product.brands.join(', ')}</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <span className="text-xs font-bold text-stone-400">Current selection: <span className="text-stone-900">{selectedVariant?.name}</span></span>
                <button 
                  onClick={handleAddToQuote}
                  className={cn(
                    "px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all",
                    isAdded ? "bg-green-500 text-white" : "bg-stone-900 text-white hover:bg-[#9A845C]"
                  )}
                >
                  {isAdded ? 'Added to List!' : 'Add to Quote'}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section with Video Overlay */}
      <section className="relative h-[30vh] md:h-[40vh] min-h-[250px] flex items-center justify-center overflow-hidden">
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
        <div className="absolute inset-0 bg-stone-900/60" />
        <div className="relative z-10 text-center space-y-4 px-6 pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-[#9A845C]"
          >
            <Link to="/products" className="hover:text-white transition-colors">Products</Link>
            <span className="text-white/20">/</span>
            <Link to={`/products/${categoryId}`} className="hover:text-white transition-colors">{category.title}</Link>
            <span className="text-white/20">/</span>
            <span className="text-white">{product.name}</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-6xl font-bold text-white tracking-tight"
          >
            {product.name}
          </motion.h1>
        </div>
      </section>

      <div ref={heroRef} className="max-w-7xl mx-auto px-6 py-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Main Visual */}
          <div className="lg:col-span-7 space-y-8 lg:sticky lg:top-44">
            <motion.div 
              key={selectedVariant?.name || 'main'}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square md:aspect-[4/5] overflow-hidden bg-stone-50 border border-stone-100 shadow-sm rounded-sm"
            >
              <img 
                src={selectedVariant?.image || product.image} 
                alt={product.name} 
                className="roomvo-visualize w-full h-full object-cover cursor-pointer"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 md:top-6 md:left-6 flex flex-wrap gap-2">
                {product.brands.map(brand => (
                  <span key={brand} className="bg-white/90 backdrop-blur-md text-[9px] md:text-[10px] font-black uppercase tracking-widest px-3 py-1.5 md:px-4 md:py-2 text-stone-900 shadow-sm border border-black/5">
                    {brand}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Quick Benefits */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-stone-100">
               <div className="space-y-2">
                 <ShieldCheck size={24} className="text-[#9A845C]" />
                 <p className="text-[10px] font-black uppercase tracking-widest text-stone-900 leading-tight">Guaranteed Quality</p>
               </div>
               <div className="space-y-2">
                 <Truck size={24} className="text-[#9A845C]" />
                 <p className="text-[10px] font-black uppercase tracking-widest text-stone-900 leading-tight">Fast Delivery</p>
               </div>
               <div className="space-y-2">
                 <Ruler size={24} className="text-[#9A845C]" />
                 <p className="text-[10px] font-black uppercase tracking-widest text-stone-900 leading-tight">Precision Fitting</p>
               </div>
            </div>
          </div>

          {/* Configuration & Details */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-8xl font-bold tracking-tighter text-stone-900 leading-none">
                {product.name}
              </h1>
              <p className="text-xl text-stone-500 leading-relaxed font-medium">
                {product.description}
              </p>
            </div>

            {/* Color Palette Selection */}
            {product.variants && (
              <div className="space-y-10">
                <div className="flex items-center justify-between border-b border-stone-200 pb-5">
                  <h3 className="text-xs font-black uppercase tracking-[0.25em] text-stone-900">
                    Range Color Palette
                  </h3>
                  <span className="text-[10px] font-black text-[#9A845C] uppercase tracking-widest">
                    {selectedVariant?.name || 'Please select'}
                  </span>
                </div>
                <div className="grid grid-cols-4 md:grid-cols-5 gap-4">
                  {product.variants.map((v) => (
                    <button
                      key={v.name}
                      onClick={() => setSelectedVariant(v)}
                      className="group flex flex-col items-center gap-3 outline-none"
                    >
                      <div className={cn(
                        "w-full aspect-square border-2 transition-all p-1 rounded-full overflow-hidden",
                        selectedVariant?.name === v.name ? "border-stone-900 scale-105" : "border-transparent hover:border-stone-200"
                      )}>
                        <div 
                          className="w-full h-full rounded-full border border-black/10 overflow-hidden" 
                          style={{ backgroundColor: v.color }}
                          title={v.name}
                        >
                          <img 
                            src={v.image} 
                            alt={v.name} 
                            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                      </div>
                      <span className={cn(
                        "text-[9px] font-bold uppercase tracking-widest text-center transition-colors line-clamp-1",
                        selectedVariant?.name === v.name ? "text-stone-900" : "text-stone-400 group-hover:text-stone-600"
                      )}>
                        {v.name}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Features Icons Grid */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-12 border-y border-stone-100">
              {product.features?.map((feature, i) => (
                <div key={i} className="flex gap-4 items-center">
                   <div className="w-12 h-12 bg-stone-50 rounded-xl flex items-center justify-center text-[#9A845C] shrink-0">
                      <CheckCircle2 size={24} strokeWidth={1.5} />
                   </div>
                   <h4 className="text-[11px] font-black uppercase tracking-widest text-stone-900 leading-tight">
                     {feature}
                   </h4>
                </div>
              ))}
            </div>

            {/* Specifications */}
            <div className="space-y-8">
               <h3 className="text-xs font-black uppercase tracking-[0.25em] text-stone-900">
                 Technical Specifications
               </h3>
               <div className="grid grid-cols-1 gap-1 border-t border-stone-100 pt-6">
                 {Object.entries(product.specs || {}).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-5 border-b border-stone-50">
                       <span className="text-[11px] font-bold text-stone-400 uppercase tracking-widest">{key}</span>
                       <span className="text-sm font-bold text-stone-900">{value}</span>
                    </div>
                 ))}
               </div>
            </div>

            {/* Final Actions */}
            <div className="pt-4 md:pt-8 space-y-4 md:space-y-6 sticky bottom-4 md:bottom-6 z-10 md:static">
              <div className="flex flex-col gap-4 md:gap-6 p-5 md:p-8 bg-stone-900 text-white rounded-sm shadow-2xl">
                 <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 md:gap-6">
                   <h3 className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em]">Estimate Area Size</h3>
                   <div className="flex items-center justify-between bg-white/10 rounded-lg sm:rounded-full px-4 py-2 w-full sm:w-auto">
                      <button 
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="p-2 hover:text-[#9A845C] transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="text-sm font-bold min-w-[4rem] text-center">{quantity} sqm</span>
                      <button 
                        onClick={() => setQuantity(quantity + 1)}
                        className="p-2 hover:text-[#9A845C] transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus size={16} />
                      </button>
                   </div>
                 </div>
                 <button 
                  onClick={handleAddToQuote}
                  className={cn(
                    "w-full py-5 md:py-6 font-black text-xs uppercase tracking-[0.2em] md:tracking-[0.25em] transition-all flex items-center justify-center gap-3 rounded-sm",
                    isAdded ? "bg-green-500 text-white" : "bg-[#9A845C] text-white hover:bg-white hover:text-stone-900 shadow-2xl shadow-[#9A845C]/20"
                  )}
                 >
                  {isAdded ? (
                    <>
                      <CheckCircle2 size={18} />
                      Items Added
                    </>
                  ) : (
                    <>
                      Add to Project Quote
                      <ArrowRight size={18} />
                    </>
                  )}
                </button>
              </div>

              <div className="grid grid-cols-2 gap-3 md:gap-4">
                <button className="py-4 md:py-5 bg-white border border-stone-200 text-stone-900 font-black text-[9px] md:text-[10px] uppercase tracking-[0.15em] md:tracking-[0.2em] hover:bg-stone-50 transition-all flex items-center justify-center gap-2 rounded-sm">
                  <Download size={14} className="shrink-0" />
                  <span className="truncate">Datasheet</span>
                </button>
                <button className="py-4 md:py-5 bg-white border border-stone-200 text-stone-900 font-black text-[9px] md:text-[10px] uppercase tracking-[0.15em] md:tracking-[0.2em] hover:bg-stone-50 transition-all flex items-center justify-center gap-2 rounded-sm">
                  <Share2 size={14} className="shrink-0" />
                  <span className="truncate">Share</span>
                </button>
              </div>
            </div>

            <div className="p-10 bg-stone-50 border border-stone-100 space-y-5 rounded-sm">
               <div className="flex items-center gap-3 text-[#9A845C]">
                  <Info size={20} />
                  <span className="text-[11px] font-black uppercase tracking-[0.25em]">Expert Installation</span>
               </div>
               <p className="text-sm text-stone-500 leading-relaxed font-medium">
                With over 55 years of experience, we don’t just supply {product.name.toLowerCase()} – we ensure it’s installed with the precision it deserves. Serving all of Gauteng with professional, durable results.
               </p>
            </div>
          </div>
        </div>
      </div>

      <Section className="bg-stone-900 py-32 overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 relative">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#9A845C]/10 rounded-full blur-3xl" />
          <div className="space-y-10 relative z-10">
             <span className="text-[10px] font-black text-[#9A845C] uppercase tracking-[0.5em]">Dent Carpets Heritage</span>
             <h2 className="text-3xl md:text-7xl font-bold text-white tracking-tighter max-w-3xl leading-[0.9]">Transforming spaces across Gauteng since 1971.</h2>
             <div className="pt-10 flex flex-wrap gap-8 items-center border-t border-white/10">
                <div className="space-y-2">
                  <p className="text-3xl font-bold text-white">55+</p>
                  <p className="text-[10px] font-black text-[#9A845C] uppercase tracking-widest">Years Experience</p>
                </div>
                <div className="space-y-2">
                  <p className="text-3xl font-bold text-white">2500+</p>
                  <p className="text-[10px] font-black text-[#9A845C] uppercase tracking-widest">Projects Completed</p>
                </div>
                <Link to="/#contact" className="ml-auto inline-flex items-center gap-4 text-xs font-black uppercase tracking-[0.3em] text-white hover:text-[#9A845C] transition-colors group">
                  Book Free Site Measure
                  <ArrowRight size={20} className="transition-transform group-hover:translate-x-2" />
                </Link>
             </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
