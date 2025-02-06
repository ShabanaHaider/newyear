// "use client";
// import { createContext } from "react";


// interface Obj {
//   id: string;   // <-- Change id to string (since Sanity productId is a string)
//   name: string;
//   image: string;
//   price: number; // <-- Include price for better cart management
// }

// interface CartContextType {
//   cart: Obj[];
//   add: (obj: Obj) => void;
//   del: (id: string) => void;
// }

// export const CartContext = createContext<CartContextType>({
//   cart: [],
//   add: () => {},
//   del: () => {},
// });



// today

// "use client";
// import React, { createContext, useState, ReactNode } from "react";

// // Cart Item Interface
// interface CartItem {
//   id: string;
//   name: string;
//   image: string;
//   price: number;
// }

// // Context Value Interface
// interface CartContextType {
//   cart: CartItem[];
//   add: (item: CartItem) => Promise<void>;
//   del: (id: string) => void;
//   clearCart: () => void;
// }

// // Creating Context
// export const CartContext = createContext<CartContextType>({
//   cart: [],
//   add: async () => {},
//   del: () => {},
//   clearCart: () => {},
// });

// // CartProvider Props
// interface CartProviderProps {
//   children: ReactNode;
// }

// // CartProvider Component
// const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
//   const [cart, setCart] = useState<CartItem[]>([]);

//   // Add to Cart
//   const add = async (item: CartItem) => {
//     setCart((prevCart) => [...prevCart, item]);
//     return Promise.resolve(); // Ensures await compatibility
//   };

//   // Delete from Cart
//   const del = (id: string) => {
//     setCart((prevCart) => prevCart.filter((item) => item.id !== id));
//   };

//   // Clear Entire Cart
//   const clearCart = () => {
//     setCart([]);
//   };

//   return (
//     <CartContext.Provider value={{ cart, add, del, clearCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export default CartProvider;



// updated

// "use client";
// import React, { createContext, useState, useContext, ReactNode } from "react";

// // Cart Item Interface
// interface CartItem {
//   id: string;
//   name: string;
//   image: string;
//   price: number;
// }

// // Cart Context Interface
// interface CartContextType {
//   cart: CartItem[];
//   add: (item: CartItem) => void;
//   del: (id: string) => void;
//   clearCart: () => void;
// }

// // Create Context
// const CartContext = createContext<CartContextType | undefined>(undefined);

// // Cart Provider Component
// export const CartProvider = ({ children }: { children: ReactNode }) => {
//   const [cart, setCart] = useState<CartItem[]>([]);

//   const add = (item: CartItem) => {
//     setCart((prev) => [...prev, item]);
//   };

//   const del = (id: string) => {
//     setCart((prev) => prev.filter((item) => item.id !== id));
//   };

//   const clearCart = () => {
//     setCart([]);
//   };

//   return (
//     <CartContext.Provider value={{ cart, add, del, clearCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// // Custom Hook
// export const useCart = () => {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error("useCart must be used within a CartProvider");
//   }
//   return context;
// };






// context.tsx
// "use client";
// import React, { createContext, useState, ReactNode } from "react";

// interface CartItem {
//   id: string;
//   name: string;
//   image: string;
//   price: number;
// }

// interface CartContextType {
//   cart: CartItem[];
//   add: (item: CartItem) => Promise<void>;
//   del: (id: string) => void;
//   clearCart: () => void;
// }

// export const CartContext = createContext<CartContextType | undefined>(undefined);  // ✅ Exported

// interface CartProviderProps {
//   children: ReactNode;
// }

// const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
//   const [cart, setCart] = useState<CartItem[]>([]);

//   const add = async (item: CartItem) => {
//     setCart((prevCart) => [...prevCart, item]);
//     return Promise.resolve();
//   };

//   const del = (id: string) => {
//     setCart((prevCart) => prevCart.filter((item) => item.id !== id));
//   };

//   const clearCart = () => {
//     setCart([]);
//   };

//   return (
//     <CartContext.Provider value={{ cart, add, del, clearCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export default CartProvider;  // ✅ Exported as default




// context.tsx
// "use client";
// import React, { createContext, useState, useContext, ReactNode } from "react";

// // Cart Item Interface
// interface CartItem {
//   id: string;
//   name: string;
//   image: string;
//   price: number;
// }

// // Context Value Interface
// interface CartContextType {
//   cart: CartItem[];
//   add: (item: CartItem) => Promise<void>;
//   del: (id: string) => void;
//   clearCart: () => void;
// }

// // Creating Context
// const CartContext = createContext<CartContextType | undefined>(undefined);

// // Custom Hook to use Cart
// export const useCart = () => {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error("useCart must be used within a CartProvider");
//   }
//   return context;
// };

// // CartProvider Props
// interface CartProviderProps {
//   children: ReactNode;
// }

// // CartProvider Component
// export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
//   const [cart, setCart] = useState<CartItem[]>([]);

//   // Add to Cart
//   const add = async (item: CartItem) => {
//     setCart((prevCart) => [...prevCart, item]);
//     return Promise.resolve();
//   };

//   // Delete from Cart
//   const del = (id: string) => {
//     setCart((prevCart) => prevCart.filter((item) => item.id !== id));
//   };

//   // Clear Entire Cart
//   const clearCart = () => {
//     setCart([]);
//   };

//   return (
//     <CartContext.Provider value={{ cart, add, del, clearCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// // Export CartContext if needed elsewhere
// export { CartContext };



// "use client";
// import { createContext, useContext, useState, ReactNode } from "react";

// // ✅ CartItem Interface
// export interface CartItem {
//   id: string;
//   name: string;
//   price: number;
//   image: string;
// }

// // ✅ CartContextType Interface
// export interface CartContextType {
//   cart: CartItem[];
//   add: (item: CartItem) => void;
//   del: (id: string) => void;
// }

// // Creating the context
// export const CartContext = createContext<CartContextType | undefined>(undefined);

// // Provider Component
// export const CartProvider = ({ children }: { children: ReactNode }) => {
//   const [cart, setCart] = useState<CartItem[]>([]);

//   const add = (item: CartItem) => {
//     setCart((prev) => [...prev, item]);
//   };

//   const del = (id: string) => {
//     setCart((prev) => prev.filter((item) => item.id !== id));
//   };

//   return (
//     <CartContext.Provider value={{ cart, add, del }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// // Custom Hook for convenience
// export const useCart = () => {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error("useCart must be used within a CartProvider");
//   }
//   return context;
// };


"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";

// ✅ CartItem Interface
export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
}

// ✅ CartContextType Interface
export interface CartContextType {
  cart: CartItem[];
  add: (item: CartItem) => void;
  del: (id: string) => void;
}

// Creating the context
export const CartContext = createContext<CartContextType | undefined>(undefined);

// Provider Component
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  // ✅ Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // ✅ Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const add = (item: CartItem) => {
    setCart((prev) => [...prev, item]);
  };

  const del = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, add, del }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom Hook for convenience
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};


// commented code of app/cart.tsx-now file deleted

// "use client";
// import React, { useContext } from "react";
// import { CartContext } from "./context";  // ✅ Correct Import
// import Image from "next/image";

// interface CartProps {
//   productName?: string;
//   productImage?: string;
//   productId?: string;
//   productPrice?: number;
// }

// const Cart: React.FC<CartProps> = ({ productName, productImage, productId, productPrice }) => {
//   const context = useContext(CartContext);

//   if (!context) {
//     return <p>Cart context is not available.</p>;  // ✅ Graceful fallback
//   }

//   const { cart, del } = context;

//   return (
//     <div className="ml-10">
//       <h1 className=" text-2xl mb-4">Cart</h1>
//       <p>Total Products: <strong>{cart.length}</strong></p>
//       <ol className="mt-4">
//         {cart.length > 0 ? (
//           cart.map((item) => (
//             <li key={item.id} className="flex items-center mb-2 border-b pb-2">
//               <Image src={item.image} alt={item.name} width={64} height={64} className="mr-4" />
//               <span className="flex-1">{item.name}</span>
//               <span>${item.price}</span>
//               <button
//                 className="px-4 py-2 bg-red-500 text-white rounded ml-4"
//                 onClick={() => del(item.id)}
//               >
//                 Delete
//               </button>
//             </li>
//           ))
//         ) : (
//           productName && productImage && productPrice ? (
//             <li className="flex items-center mb-2 border-b pb-2">
//               <Image src={productImage} alt={productName} width={64} height={64} className="mr-4" />
//               <span className="flex-1">{productName}</span>
//               <span>${productPrice}</span>
//             </li>
//           ) : (
//             <p>No items in the cart.</p>
//           )
//         )}
//       </ol>
//     </div>
//   );
// };

// export default Cart;

// refactored

// "use client";
// import React, { useContext } from "react";
// import { CartContext } from "./context"; // ✅ Correct Import
// import Image from "next/image";

// const Cart: React.FC = () => {
//   const context = useContext(CartContext);

//   if (!context) {
//     return <p>Cart context is not available.</p>; // ✅ Graceful fallback
//   }

//   const { cart, del } = context;

//   return (
//     <div className="ml-10">
//       <h1 className="text-2xl mb-4">Cart</h1>
//       <p>Total Products: <strong>{cart.length}</strong></p>

//       <ol className="mt-4">
//         {cart.length > 0 ? (
//           cart.map((item) => (
//             <li key={item.id} className="flex items-center mb-2 border-b pb-2">
//               <Image
//                 src={item.image}
//                 alt={item.name}
//                 width={64}
//                 height={64}
//                 className="mr-4"
//               />
//               <span className="flex-1">{item.name}</span>
//               <span>${item.price}</span>
//               <button
//                 className="px-4 py-2 bg-[#B88E2F] text-white rounded ml-4"
//                 onClick={() => del(item.id)}
//               >
//                 Delete
//               </button>
//             </li>
//           ))
//         ) : (
//           <p>No items in the cart.</p>
//         )}
//       </ol>
//     </div>
//   );
// };

// export default Cart;











