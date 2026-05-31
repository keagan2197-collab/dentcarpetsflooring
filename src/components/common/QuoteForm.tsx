import React, { useState } from 'react';
import { Send, CheckCircle2, Loader2 } from 'lucide-react';
import { cn } from '@/src/lib/utils';

interface QuoteFormProps {
  className?: string;
  items?: any[];
  onSuccess?: () => void;
  title?: string;
  subtitle?: string;
}

export function QuoteForm({ className, items, onSuccess, title = "Your Details", subtitle }: QuoteFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    suburb: '',
    city: '',
    areaSize: '',
    requirements: '',
    type: [] as string[]
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    console.log('Quote Request Sent:', { formData, items });
    
    setIsSubmitting(false);
    setIsSuccess(true);
    
    if (onSuccess) {
      setTimeout(() => {
        onSuccess();
      }, 3000);
    }
    
    setTimeout(() => {
      setIsSuccess(false);
      setFormData({ 
        firstName: '', lastName: '', email: '', phone: '', 
        suburb: '', city: '', areaSize: '', requirements: '', type: [] 
      });
    }, 5000);
  };

  const toggleType = (type: string) => {
    setFormData(prev => ({
      ...prev,
      type: prev.type.includes(type) 
        ? prev.type.filter(t => t !== type)
        : [...prev.type, type]
    }));
  };

  if (isSuccess) {
    return (
      <div className={cn("text-center space-y-6 py-12", className)}>
        <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 size={40} />
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-stone-900">Request Received!</h3>
          <p className="text-stone-500 max-w-sm mx-auto">
            Thank you for your interest. Our team will get back to you shortly with a personalized quote.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={cn("space-y-8", className)}>
      <div>
        <h3 className="text-sm font-bold text-stone-900 mb-6">{title}</h3>
        {subtitle && <p className="text-sm text-stone-500 mb-6 -mt-4">{subtitle}</p>}
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">First Name</label>
              <input
                required
                type="text"
                placeholder="John"
                value={formData.firstName}
                onChange={e => setFormData({ ...formData, firstName: e.target.value })}
                className="w-full px-4 py-3 bg-white border border-stone-200 rounded-sm focus:outline-none focus:border-stone-900 text-sm transition-colors"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">Last Name</label>
              <input
                required
                type="text"
                placeholder="Doe"
                value={formData.lastName}
                onChange={e => setFormData({ ...formData, lastName: e.target.value })}
                className="w-full px-4 py-3 bg-white border border-stone-200 rounded-sm focus:outline-none focus:border-stone-900 text-sm transition-colors"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">Email Address</label>
              <input
                required
                type="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-white border border-stone-200 rounded-sm focus:outline-none focus:border-stone-900 text-sm transition-colors"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">Phone Number</label>
              <input
                required
                type="tel"
                placeholder="+27..."
                value={formData.phone}
                onChange={e => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 bg-white border border-stone-200 rounded-sm focus:outline-none focus:border-stone-900 text-sm transition-colors"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">Suburb</label>
              <input
                required
                type="text"
                placeholder="e.g. Sandton"
                value={formData.suburb}
                onChange={e => setFormData({ ...formData, suburb: e.target.value })}
                className="w-full px-4 py-3 bg-white border border-stone-200 rounded-sm focus:outline-none focus:border-stone-900 text-sm transition-colors"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">City</label>
              <input
                required
                type="text"
                placeholder="e.g. Johannesburg"
                value={formData.city}
                onChange={e => setFormData({ ...formData, city: e.target.value })}
                className="w-full px-4 py-3 bg-white border border-stone-200 rounded-sm focus:outline-none focus:border-stone-900 text-sm transition-colors"
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-bold text-stone-900 mb-6">Your Requirements</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          {['Residential Carpets', 'Commercial Carpets', 'Vinyl Flooring', 'Artificial Grass'].map((type) => (
            <label key={type} className="flex items-center group cursor-pointer">
              <div 
                onClick={() => toggleType(type)}
                className={cn(
                  "w-10 h-5 rounded-full transition-all relative mr-3 shrink-0",
                  formData.type.includes(type) ? "bg-[#9A845C]" : "bg-stone-200"
                )}
              >
                <div className={cn(
                  "absolute top-1 w-3 h-3 bg-white rounded-full transition-all",
                  formData.type.includes(type) ? "left-6" : "left-1"
                )} />
              </div>
              <span className="text-xs font-bold text-stone-600 truncate">{type}</span>
            </label>
          ))}
        </div>
        <div className="space-y-1.5">
          <label className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">Installation Area Size (sqm) & Notes</label>
          <textarea
            rows={4}
            placeholder="e.g. 45sqm for a master bedroom, looking for something durable..."
            value={formData.requirements}
            onChange={e => setFormData({ ...formData, requirements: e.target.value })}
            className="w-full px-4 py-3 bg-white border border-stone-200 rounded-sm focus:outline-none focus:border-stone-900 text-sm resize-none transition-colors"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={cn(
          "w-full py-5 rounded-sm font-black text-xs uppercase tracking-[0.25em] transition-all flex items-center justify-center gap-3 shadow-xl",
          isSubmitting ? "bg-stone-200 text-stone-400 cursor-not-allowed" : "bg-stone-900 text-white hover:bg-[#9A845C] active:scale-[0.98]"
        )}
      >
        {isSubmitting ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Submit Request
            <Send size={18} />
          </>
        )}
      </button>
    </form>
  );
}
