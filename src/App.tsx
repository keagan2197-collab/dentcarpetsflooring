import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { motion } from 'motion/react';
import { Header } from '@/src/components/common/Header';
import { Footer } from '@/src/components/common/Footer';
import Home from '@/src/views/Home';
import Products from '@/src/views/Products';
import Brands from '@/src/views/Brands';
import Projects from '@/src/views/Projects';
import CategoryDetail from '@/src/views/CategoryDetail';
import ProductDetail from '@/src/views/ProductDetail';
import Contact from '@/src/views/Contact';
import About from '@/src/views/About';
import FAQ from '@/src/views/FAQ';
import Process from '@/src/views/Process';
import { Section } from '@/src/components/common/Section';
import { processSteps } from '@/src/data/siteData';
import { QuoteProvider } from '@/src/context/QuoteContext';
import { QuoteTray } from '@/src/components/common/QuoteTray';

// Simple placeholder page component for other routes
const PlaceholderPage = ({ title }: { title: string }) => (
  <main className="pt-36 min-h-screen">
    <Section title={title} subtitle="Coming Soon">
      <div className="py-24 text-center space-y-8">
        <p className="text-xl text-stone-500 max-w-2xl mx-auto">
          We're currently refining our {title.toLowerCase()} page to give you the best possible experience. Please check back soon.
        </p>
      </div>
    </Section>
  </main>
);

export default function App() {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <QuoteProvider>
      <div className="font-sans text-stone-900 bg-white selection:bg-stone-900 selection:text-white">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/about" element={<About />} />
          <Route path="/process" element={<Process />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products/:id" element={<CategoryDetail />} />
          <Route path="/products/:categoryId/:productId" element={<ProductDetail />} />
        </Routes>
        <Footer />
        <QuoteTray />
      </div>
    </QuoteProvider>
  );
}
