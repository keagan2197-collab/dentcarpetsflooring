import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { productCategories, products } from '@/src/data/siteData';
import { Section } from '@/src/components/common/Section';
import { ChevronLeft, Filter, Search } from 'lucide-react';
import { useState } from 'react';

export default function CategoryDetail() {
  const { id } = useParams<{ id: string }>();
  const category = productCategories.find((c) => c.id === id);
  const categoryProducts = products.filter((p) => p.categoryId === id);
  
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

  if (!category) {
    return (
      <div className="pt-36 min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Category Not Found</h1>
          <Link to="/products" className="text-stone-500 underline">Back to all products</Link>
        </div>
      </div>
    );
  }

  const allAvailableBrands = Array.from(new Set(categoryProducts.flatMap(p => p.brands)));

  const toggleBrand = (brand: string) => {
    setSelectedBrands(prev => 
      prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
    );
  };

  const filteredProducts = categoryProducts.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBrand = selectedBrands.length === 0 || p.brands.some(b => selectedBrands.includes(b));
    return matchesSearch && matchesBrand;
  });

  return (
    <main className="pt-32 min-h-screen bg-white">
      {/* Category Hero with Video Overlay */}
      <div className="relative h-[50vh] md:h-[60vh] min-h-[350px] bg-stone-900 overflow-hidden">
        <video 
          src="https://storage.googleapis.com/dentcarpets/dent%20video.mp4"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="https://images.unsplash.com/photo-1545022388-43a762e088b0?q=80&w=2070&auto=format&fit=crop"
        />
        <div className="absolute inset-0 bg-stone-900/40" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <div className="flex items-center gap-2 text-[#9A845C] font-black uppercase tracking-[0.3em] text-[10px] mb-4">
                <Link to="/products" className="hover:text-white transition-colors">Products</Link>
                <span>/</span>
                <span className="text-white">{category.title}</span>
              </div>
              <h1 className="text-4xl md:text-7xl font-bold text-white tracking-tighter mb-4 md:mb-6">
                {category.title}
              </h1>
              <p className="text-base md:text-lg text-white/80 leading-relaxed max-w-xl font-medium">
                {category.description}
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar Filters */}
          <aside className="w-full lg:w-64 shrink-0 space-y-12">
            <div className="space-y-6">
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-stone-400">Search Products</h3>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" size={14} />
                <input 
                  type="text" 
                  placeholder="e.g. Aqua..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-stone-50 border border-stone-100 py-3 pl-10 pr-4 text-xs outline-none focus:border-stone-300 transition-all font-medium"
                />
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-stone-400">Brands</h3>
              <div className="space-y-3">
                {allAvailableBrands.map(brand => (
                  <label key={brand} className="flex items-center gap-3 cursor-pointer group">
                    <input 
                      type="checkbox" 
                      checked={selectedBrands.includes(brand)}
                      onChange={() => toggleBrand(brand)}
                      className="w-4 h-4 rounded border-stone-200 text-stone-900 focus:ring-stone-500"
                    />
                    <span className="text-sm text-stone-600 group-hover:text-stone-900 transition-colors font-medium">
                      {brand}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-stone-400">Application</h3>
              <div className="space-y-3">
                {['Residential', 'Commercial'].map(app => (
                  <label key={app} className="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" className="w-4 h-4 rounded border-stone-200 text-stone-900 focus:ring-stone-500" />
                    <span className="text-sm text-stone-600 group-hover:text-stone-900 transition-colors font-medium">
                      {app}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </aside>

          {/* Product Feed */}
          <div className="flex-1 space-y-12">
            <div className="flex items-center justify-between border-b border-stone-100 pb-6">
              <p className="text-xs font-bold text-stone-400 uppercase tracking-widest">
                Showing {filteredProducts.length} Results
              </p>
              <div className="flex items-center gap-4">
                <span className="text-[10px] font-black uppercase tracking-widest text-stone-400">Sort By</span>
                <select className="text-xs font-bold border-none bg-transparent outline-none cursor-pointer">
                  <option>Newest First</option>
                  <option>Name A-Z</option>
                  <option>Name Z-A</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
              {filteredProducts.map((product, i) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="group"
                >
                  <Link to={`/products/${id}/${product.id}`} className="block space-y-6">
                    <div className="relative aspect-square overflow-hidden bg-stone-50 rounded-sm">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/[0.02] transition-colors duration-300" />
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        {product.brands.map(brand => (
                          <span key={brand} className="text-[9px] font-black uppercase tracking-[0.2em] text-[#9A845C]">
                            {brand}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-xl font-bold text-stone-900 group-hover:text-[#9A845C] transition-colors tracking-tight">
                        {product.name}
                      </h3>
                      <div className="h-[1px] w-8 bg-stone-200 group-hover:w-16 group-hover:bg-[#9A845C] transition-all duration-500" />
                      <p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest pt-1">
                        View Details
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="py-24 text-center bg-stone-50 rounded-3xl">
                <p className="text-stone-400 font-medium">No results match your criteria.</p>
                <button 
                  onClick={() => {setSearchTerm(''); setSelectedBrands([]);}}
                  className="mt-4 text-xs font-black uppercase tracking-widest text-[#9A845C] hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
