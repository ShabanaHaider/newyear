

"use client";
import React, { useState } from "react";
import { CartContext } from "./context";

interface Obj {
  id: string;  // <-- Ensure id is a string
  name: string;
  image: string;
  price: number;
}

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<Obj[]>([]);

  const add = (obj: Obj) => setCart((prev) => [...prev, obj]);
  const del = (id: string) => setCart((prev) => prev.filter((item) => item.id !== id));

  return (
    <CartContext.Provider value={{ cart, add, del }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;


