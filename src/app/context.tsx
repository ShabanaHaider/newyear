


// 30 jan
// "use client";
// import { createContext, ReactNode, useState } from "react";

// interface Obj {
//   id: number;
//   name: string;
//   image: string; // Added image property
// }

// interface CartContextType {
//   cart: Obj[];
//   add: (obj: Obj) => void;
//   del: (id: number) => void;
// }

// export const CartContext = createContext<CartContextType>({} as CartContextType);

// export const CartProvider = ({ children }: { children: ReactNode }) => {
//   const [cart, setCart] = useState<Obj[]>([]);

//   const add = (obj: Obj) => setCart((prev) => [...prev, obj]);
//   const del = (id: number) => setCart((prev) => prev.filter((item) => item.id !== id));

//   return (
//     <CartContext.Provider value={{ cart, add, del }}>
//       {children}
//     </CartContext.Provider>
//   );
// };


// corrected

// "use client";
// import { createContext, ReactNode } from "react";

// interface Obj {
//   id: number;
//   name: string;
//   image: string; // Ensure consistency across all files
  
  
// }

// interface CartContextType {
//   cart: Obj[];
//   add: (obj: Obj) => void;
//   del: (id: number) => void;
// }

// export const CartContext = createContext<CartContextType>({
//   cart: [],
//   add: () => {},
//   del: () => {},
// });

// improved


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



