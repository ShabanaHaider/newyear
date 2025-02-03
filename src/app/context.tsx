"use client";
import { createContext } from "react";


interface Obj {
  id: string;   // <-- Change id to string (since Sanity productId is a string)
  name: string;
  image: string;
  price: number; // <-- Include price for better cart management
}

interface CartContextType {
  cart: Obj[];
  add: (obj: Obj) => void;
  del: (id: string) => void;
}

export const CartContext = createContext<CartContextType>({
  cart: [],
  add: () => {},
  del: () => {},
});



