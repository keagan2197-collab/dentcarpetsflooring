import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface QuoteItem {
  id: string;
  productId: string;
  productName: string;
  variantName: string;
  variantColor: string;
  variantImage: string;
  quantity: number;
}

interface QuoteContextType {
  items: QuoteItem[];
  addItem: (item: QuoteItem) => void;
  removeItem: (productId: string, variantName: string) => void;
  clearQuote: () => void;
  itemCount: number;
}

const QuoteContext = createContext<QuoteContextType | undefined>(undefined);

export function QuoteProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<QuoteItem[]>([]);

  const addItem = (newItem: QuoteItem) => {
    setItems((prev) => {
      const existingItemIndex = prev.findIndex(
        (item) => item.productId === newItem.productId && item.variantName === newItem.variantName
      );

      if (existingItemIndex > -1) {
        const updatedItems = [...prev];
        updatedItems[existingItemIndex].quantity += newItem.quantity;
        return updatedItems;
      }

      return [...prev, newItem];
    });
  };

  const removeItem = (productId: string, variantName: string) => {
    setItems((prev) => prev.filter((item) => !(item.productId === productId && item.variantName === variantName)));
  };

  const clearQuote = () => setItems([]);

  const itemCount = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <QuoteContext.Provider value={{ items, addItem, removeItem, clearQuote, itemCount }}>
      {children}
    </QuoteContext.Provider>
  );
}

export function useQuote() {
  const context = useContext(QuoteContext);
  if (context === undefined) {
    throw new Error('useQuote must be used within a QuoteProvider');
  }
  return context;
}
