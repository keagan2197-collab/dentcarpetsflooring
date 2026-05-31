import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-white text-stone-600 py-24 px-10 border-t border-black/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          <div className="space-y-8">
            <Link to="/" className="flex items-center gap-0 group">
              <img 
                src="https://storage.googleapis.com/dentcarpets/dent%20carpet%20logo%20v2" 
                alt="Dent Carpets Logo" 
                className="h-[86px] w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </Link>
            <p className="text-[10px] font-black leading-relaxed max-w-xs uppercase tracking-[0.2em] text-stone-400">
              Premium flooring installation across Gauteng – done properly since 1971.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="https://www.instagram.com/dentcarpetsandflooring/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-[#9A845C] transition-colors"
               >
                <Instagram size={18} />
              </a>
              <a 
                href="https://www.facebook.com/dentcarpetsandflooring/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-[#9A845C] transition-colors"
               >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          <div>
            <span className="text-[#9A845C] font-bold mb-8 uppercase text-[11px] tracking-widest block">Navigation</span>
            <ul className="space-y-4 text-[13px] font-medium">
              <li><Link to="/" className="hover:text-stone-900 transition-colors">Home</Link></li>
              <li><Link to="/products" className="hover:text-stone-900 transition-colors">Flooring Options</Link></li>
              <li><Link to="/about" className="hover:text-stone-900 transition-colors">About Us</Link></li>
              <li><Link to="/process" className="hover:text-stone-900 transition-colors">Installation Process</Link></li>
              <li><Link to="/brands" className="hover:text-stone-900 transition-colors">Our Brands</Link></li>
              <li><Link to="/projects" className="hover:text-stone-900 transition-colors">Recent Projects</Link></li>
              <li><Link to="/contact" className="hover:text-stone-900 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <span className="text-[#9A845C] font-bold mb-8 uppercase text-[11px] tracking-widest block">Connect</span>
            <ul className="space-y-6 text-[13px] font-medium">
              <li className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-stone-50 flex items-center justify-center text-stone-900">
                  <Phone size={14} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-black uppercase tracking-widest text-stone-400">Call Us</span>
                  <span className="font-bold">011-425-1468</span>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-stone-50 flex items-center justify-center text-stone-900">
                  <Mail size={14} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-black uppercase tracking-widest text-stone-400">Email Us</span>
                  <span className="font-bold">James.dent@mweb.co.za</span>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-stone-50 flex items-center justify-center text-stone-900">
                  <MapPin size={14} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-black uppercase tracking-widest text-stone-400">Serving</span>
                  <span className="font-bold">Johannesburg & Gauteng</span>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <span className="text-[#9A845C] font-bold mb-8 uppercase text-[11px] tracking-widest block">Contact Us</span>
            <p className="text-[13px] mb-6 leading-relaxed">Let's talk about your flooring project.</p>
            <form className="flex border border-black/5 rounded-full overflow-hidden bg-stone-50">
              <input
                type="email"
                placeholder="Email Address"
                className="bg-transparent px-6 py-3 text-[13px] outline-none w-full"
              />
              <button className="bg-stone-900 text-white px-6 py-3 text-[13px] font-bold hover:bg-black transition-colors shrink-0">
                Send
              </button>
            </form>
          </div>
        </div>

        <div className="mt-24 pt-8 border-t border-stone-100 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] font-bold uppercase tracking-widest opacity-50">
          <p>© {new Date().getFullYear()} Dent Carpets and Flooring.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-stone-900 transition-colors">Privacy</a>
            <a href="#" className="hover:text-stone-900 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
