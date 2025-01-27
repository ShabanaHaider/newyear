// "use client"
// import {createContext} from "react"
// interface Cart {
//     [x:string]:any
// }

// export const CartContext = createContext({} as Cart)


"use client";
import { createContext, ReactNode, useState } from "react";

interface Obj {
  id: number;
  name: string;
}

interface CartContextType {
  cart: Obj[];
  add: (obj: Obj) => void;
  del: (id: number) => void;
}

export const CartContext = createContext<CartContextType>({} as CartContextType);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Obj[]>([]);

  const add = (obj: Obj) => setCart((prev) => [...prev, obj]);
  const del = (id: number) => setCart((prev) => prev.filter((item) => item.id !== id));

  return (
    <CartContext.Provider value={{ cart, add, del }}>
      {children}
    </CartContext.Provider>
  );
};


