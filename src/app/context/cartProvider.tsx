// /app/context/cartProvider.tsx
"use client";
import React, { createContext, useState, useContext, ReactNode } from "react";


interface CartContextType {
  items: string[]; // Example, could be more complex
  addToCart: (item: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<string[]>([]);

  const addToCart = (item: string) => {
    setItems([...items, item]);
  };

  return (
    <CartContext.Provider value={{ items, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export default CartProvider;
