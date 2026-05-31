import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Facebook, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';
import { useQuote } from '@/src/context/QuoteContext';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Flooring Options', path: '/products' },
  { name: 'Our Process', path: '/process' },
  { name: 'Projects', path: '/projects' },
  { name: 'About', path: '/about' },
  { name: 'FAQ', path: '/faq' },
  { name: 'Contact Us', path: '/contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';
  
  const { itemCount } = useQuote();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Check scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down & passed a threshold
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }
      
      setIsScrolled(currentScrollY > 20);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-white/95 backdrop-blur-md border-b border-black/5 shadow-sm px-6 md:px-12 flex items-center h-24',
        !isVisible && 'transform -translate-y-full shadow-none'
      )}
    >
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center gap-0 group transition-all duration-500 opacity-100 visible"
        >
          <div className="h-14 md:h-[5rem] flex items-center">
             <img 
               src="https://storage.googleapis.com/dentcarpets/dent%20carpet%20logo%20v2" 
               alt="Dent Carpets Logo" 
               className="h-full w-auto object-contain"
               referrerPolicy="no-referrer"
             />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => cn(
                "text-[11px] font-bold uppercase tracking-[0.15em] transition-all",
                "text-stone-500 hover:text-[#9A845C]",
                isActive && "text-stone-900"
              )}
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-6">
          <div className="flex items-center gap-4">
            <a 
              href="https://www.instagram.com/dentcarpetsandflooring/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="transition-colors hover:scale-110 text-stone-600 hover:text-[#9A845C]"
            >
              <Instagram size={20} />
            </a>
            <a 
              href="https://www.facebook.com/dentcarpetsandflooring/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="transition-colors hover:scale-110 text-stone-600 hover:text-[#9A845C]"
            >
              <Facebook size={20} />
            </a>
          </div>

          {/* Quote Cart Button */}
          {itemCount > 0 && (
            <button 
              className="relative p-2 text-stone-900 hover:text-[#9A845C] transition-colors"
              onClick={() => {
                // We'll trigger the tray open via a global state or just rely on the tray's own button
                // But since we want to open it from here:
                window.dispatchEvent(new CustomEvent('open-quote-tray'));
              }}
            >
              <ShoppingBag size={24} />
              <span className="absolute -top-1 -right-1 bg-[#9A845C] text-white text-[9px] font-black w-5 h-5 rounded-full flex items-center justify-center border-2 border-white">
                {itemCount}
              </span>
            </button>
          )}

          <Link
            to="/contact"
            className="px-8 py-3.5 bg-stone-900 text-white rounded-full text-[11px] font-black uppercase tracking-widest hover:bg-[#9A845C] transition-all shadow-lg hover:shadow-xl"
          >
            👉 Get a Quote
          </Link>
        </div>

        {/* Mobile menu trigger */}
        <button
          className="lg:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="text-stone-900" />
          ) : (
            <Menu className="text-stone-900" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl border-t border-stone-100 py-8 px-6 flex flex-col gap-4 lg:hidden"
          >
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) => cn(
                  "text-xl font-medium text-stone-600 transition-colors",
                  isActive && "text-stone-900 font-bold"
                )}
              >
                {item.name}
              </NavLink>
            ))}
            <div className="flex items-center gap-6 mt-4 pt-6 border-t border-stone-100 text-stone-500">
              <a href="https://www.instagram.com/dentcarpetsandflooring/" target="_blank" rel="noopener noreferrer" className="hover:text-stone-900 transition-colors">
                <Instagram size={24} />
              </a>
              <a href="https://www.facebook.com/dentcarpetsandflooring/" target="_blank" rel="noopener noreferrer" className="hover:text-stone-900 transition-colors">
                <Facebook size={24} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
