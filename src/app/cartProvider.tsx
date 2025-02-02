// "use client"
// import React,{useState} from 'react'
// import {CartContext} from "./context";
// interface Obj {

//     id:number
//     name:string
// }

// const CartProvider = ({children}:{children: React.ReactNode}) => {
//     const [cart,setCart] = useState<Obj[]>([])
//     const add =(obj:Obj)=>setCart([...cart,obj])
//     const del=(id:number) =>{
//         const newCart=cart.filter((val)=> val.id !== id)
//         return setCart([...newCart])
//     }
//   return <>
//     <CartContext.Provider value={{cart,add,del}}>
//         {children}

//         </CartContext.Provider >
//         </>;
  
// };
// export default CartProvider;


// corrected

// "use client";
// import React, { useState } from "react";
// import { CartContext } from "./context"; // Ensure correct path to context.tsx

// interface Obj {
//   id: number;
//   name: string;
//   image: string; // Ensure image exists in Obj type
  
// }

// const CartProvider = ({ children }: { children: React.ReactNode }) => {
//   const [cart, setCart] = useState<Obj[]>([]);

//   const add = (obj: Obj) => setCart((prev) => [...prev, obj]);
//   const del = (id: number) => setCart((prev) => prev.filter((item) => item.id !== id));

//   return (
//     <CartContext.Provider value={{ cart, add, del }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export default CartProvider;


// improved

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


