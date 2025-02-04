

// "use client";
// import React, { useState } from "react";
// import { CartContext } from "./context";

// interface Obj {
//   id: string;  // <-- Ensure id is a string
//   name: string;
//   image: string;
//   price: number;
// }

// const CartProvider = ({ children }: { children: React.ReactNode }) => {
//   const [cart, setCart] = useState<Obj[]>([]);

//   const add = (obj: Obj) => setCart((prev) => [...prev, obj]);
//   const del = (id: string) => setCart((prev) => prev.filter((item) => item.id !== id));

//   return (
//     <CartContext.Provider value={{ cart, add, del }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export default CartProvider;


// today

// "use client";
// import React, { useState, useEffect } from "react";
// import { CartContext } from "./context";

// interface Obj {
//   id: string;
//   name: string;
//   image: string;
//   price: number;
// }

// const CartProvider = ({ children }: { children: React.ReactNode }) => {
//   const [cart, setCart] = useState<Obj[]>(() => {
//     if (typeof window !== "undefined") {
//       const storedCart = localStorage.getItem("cart");
//       return storedCart ? JSON.parse(storedCart) : [];
//     }
//     return [];
//   });

//   useEffect(() => {
//     localStorage.setItem("cart", JSON.stringify(cart));
//   }, [cart]);

//   const add = (obj: Obj) => setCart((prev) => [...prev, obj]);
//   const del = (id: string) => setCart((prev) => prev.filter((item) => item.id !== id));

//   return (
//     <CartContext.Provider value={{ cart, add, del }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export default CartProvider;

