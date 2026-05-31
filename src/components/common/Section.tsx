import { ReactNode } from 'react';
import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  title?: string;
  subtitle?: string;
  dark?: boolean;
}

export function Section({ children, className, id, title, subtitle, dark }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'py-24 md:py-32 px-6',
        dark ? 'bg-stone-950 text-white' : 'bg-white text-stone-900',
        className
      )}
    >
      <div className="max-w-7xl mx-auto">
        {(title || subtitle) && (
          <div className="mb-16 md:mb-24 space-y-4">
            {subtitle && (
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={cn(
                  "text-[11px] font-bold uppercase tracking-[0.1em] block mb-4",
                  dark ? "text-accent" : "text-accent"
                )}
              >
                {subtitle}
              </motion.span>
            )}
            {title && (
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold tracking-tight text-text-primary"
              >
                {title}
              </motion.h2>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
