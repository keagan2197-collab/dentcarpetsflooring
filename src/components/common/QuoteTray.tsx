import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useQuote } from '@/src/context/QuoteContext';
import { X, ShoppingBag, Trash2, Send, CheckCircle2, Loader2 } from 'lucide-react';
import { cn } from '@/src/lib/utils';

import { QuoteForm } from './QuoteForm';

export function QuoteTray() {
  const { items, removeItem, clearQuote, itemCount } = useQuote();
  const [isOpen, setIsOpen] = useState(false);

  React.useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('open-quote-tray', handleOpen);
    return () => window.removeEventListener('open-quote-tray', handleOpen);
  }, []);

  const handleSuccess = () => {
    clearQuote();
    setIsOpen(false);
  };

  if (itemCount === 0 && !isOpen) return null;

  return (
    <>
      {/* Floating Toggle */}
      <AnimatePresence>
        {!isOpen && itemCount > 0 && (
          <motion.button
            initial={{ scale: 0, y: 100 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0, y: 100 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-8 right-8 z-50 bg-stone-900 text-white p-6 rounded-full shadow-2xl flex items-center gap-3 hover:bg-[#9A845C] transition-all group"
          >
            <div className="relative">
              <ShoppingBag size={24} />
              <span className="absolute -top-3 -right-3 bg-[#9A845C] text-white text-[10px] font-black w-6 h-6 rounded-full flex items-center justify-center border-2 border-stone-900">
                {itemCount}
              </span>
            </div>
            <span className="text-xs font-black uppercase tracking-widest overflow-hidden max-w-0 group-hover:max-w-xs transition-all duration-500 whitespace-nowrap">
              Review Quote ({itemCount})
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Slide-over Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-lg bg-white z-[70] shadow-2xl flex flex-col"
            >
              {/* Header */}
              <div className="p-8 border-b border-stone-100 flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-stone-900">Your Quote Request</h2>
                  <p className="text-xs font-bold text-stone-400 uppercase tracking-widest mt-1">
                    {itemCount} {itemCount === 1 ? 'Item' : 'Items'} Selected
                  </p>
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-stone-50 rounded-full transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto p-8 space-y-8">
                {/* Items List */}
                <div className="space-y-4">
                  {items.map((item) => (
                    <div key={`${item.productId}-${item.variantName}`} className="flex gap-4 p-4 bg-stone-50 border border-stone-100 rounded-2xl group">
                      <img src={item.variantImage} alt="" className="w-20 h-20 object-cover rounded-xl" />
                      <div className="flex-1 min-w-0">
                        <p className="text-[10px] font-black uppercase tracking-widest text-[#9A845C] mb-1">{item.variantName}</p>
                        <h4 className="text-sm font-bold text-stone-900 truncate">{item.productName}</h4>
                        <div className="flex items-center gap-3 mt-3">
                          <span className="text-[10px] font-bold text-stone-400">Qty: {item.quantity}</span>
                          <button 
                            onClick={() => removeItem(item.productId, item.variantName)}
                            className="text-stone-300 hover:text-red-500 transition-colors"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <QuoteForm 
                  items={items} 
                  onSuccess={handleSuccess}
                  className="pt-8 border-t border-stone-100"
                />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
