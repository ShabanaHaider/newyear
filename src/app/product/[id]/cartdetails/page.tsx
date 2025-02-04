// "use client";
// import React, { useContext } from "react";
// import { CartContext } from "@/app/context";
// import Image from "next/image";

// const CartPage = () => {
//   const { cart, del } = useContext(CartContext);

//   return (
//     <div>
//       <h1>Cart Page</h1>
//       <ul>
//         {cart.map((item) => (
//           <li key={item.id} className="flex items-center mb-4">
//             {/* Add image display */}
//             <Image
//               src={item.image}
//               alt={item.name}
//               width={80} // Specify width
//               height={80} // Specify height
//               className="mr-4 rounded"
//             />
//             <span className="flex-1">{item.name}</span>
//             <button
//               className="px-4 py-2 bg-red-500 text-white rounded"
//               onClick={() => del(item.id)}
//             >
//               Remove
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default CartPage;


// today


// "use client";
// import React, { useContext } from "react";
// import { CartContext } from "@/app/context";
// import Image from "next/image";
// import { useRouter } from "next/navigation";


// const CartDetails = () => {
//   const { cart, del } = useContext(CartContext);
//   const router = useRouter();

//   console.log("Cart Data:", cart);  // Debugging
  

//   return (
//     <div className="container mx-auto p-6">
//       <h1 className="text-2xl font-bold mb-4">Cart Details</h1>
//       <p>Total Products: <strong>{cart.length}</strong></p>

//       <ul>
//         {cart.map((item) => (
//           <li key={item.id} className="flex items-center mb-4 border-b pb-2">
//             <Image src={item.image} alt={item.name} width={80} height={80} />
//             <div className="ml-4 flex-1">
//               <p className="font-semibold">{item.name}</p>
//               <p>${item.price}</p>
//             </div>
//             <button
//               className="px-4 py-2 bg-red-500 text-white rounded"
//               onClick={() => del(item.id)}
//             >
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>

//       <div className="mt-6 flex gap-4">
//         <button
//           className="px-6 py-3 bg-[#B88E2F] text-white rounded"
//           onClick={() => router.push("/")}
//         >
//           Shop More
//         </button>
//         <button
//           className="px-6 py-3 bg-green-500 text-white rounded"
//           onClick={() => alert("Proceed to Checkout")}
//         >
//           Proceed to Checkout
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CartDetails;



// "use client";
// // import React from "react";
// import React, { useContext, useEffect } from "react";
// import Cart from "@/app/cart";
// import { useRouter } from "next/navigation";
// import Image from "next/image";
// import CartProvider from "@/app/context/cartProvider"; // Import CartProvider




// const CartDetails = () => {
//   const router = useRouter();

//   return (
//     <CartProvider> {/* Wrapping the content with CartProvider */}
//       <div className="container mx-auto p-6">
//         <h1 className="text-2xl font-bold mb-4">Cart Details</h1>

//         {/* Reusing the Cart component */}
//         <Cart />

//         <div className="mt-6 flex gap-4">
//           <button
//             className="px-6 py-3 bg-[#B88E2F] text-white rounded"
//             onClick={() => router.push("/")}
//           >
//             Shop More
//           </button>
//           <button
//             className="px-6 py-3 bg-green-500 text-white rounded"
//             onClick={() => alert("Proceed to Checkout")}
//           >
//             Proceed to Checkout
//           </button>
//         </div>
//       </div>
//     </CartProvider>
//   );
// };

// export default CartDetails;


// updated

// "use client";
// import React from "react";
// import { useRouter } from "next/navigation";
// import Cart from "@/app/cart";
// import { CartProvider } from "@/app/context"; // Unified Import

// const CartDetails = () => {
//   const router = useRouter();

//   return (
//     <CartProvider>
//       <h1 className="text-2xl font-bold">Cart Details</h1>
//       <Cart />
//       <button onClick={() => router.push("/")}>Shop More</button>
//     </CartProvider>
//   );
// };

// export default CartDetails;



// "use client";

// import React, { useContext } from "react";
// import { CartContext } from "@/app/context";
// import Image from "next/image";

// const CartDetailsPage = () => {
//   const { cart, del } = useContext(CartContext);

//   return (
//     <div className="container mx-auto p-6">
//       <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
//       {cart.length > 0 ? (
//         <ul>
//           {cart.map((item) => (
//             <li
//               key={item.id}
//               className="flex items-center justify-between border-b py-4"
//             >
//               <div className="flex items-center">
//                 <Image
//                   src={item.image}
//                   alt={item.name}
//                   width={64}
//                   height={64}
//                   className="mr-4 rounded"
//                 />
//                 <div>
//                   <h2 className="text-lg font-semibold">{item.name}</h2>
//                   <p>${item.price}</p>
//                 </div>
//               </div>
//               <button
//                 onClick={() => del(item.id)}
//                 className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
//               >
//                 Remove
//               </button>
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>Your cart is currently empty.</p>
//       )}
//     </div>
//   );
// };

// export default CartDetailsPage;


// "use client";
// import { useContext } from "react";
// import { CartContext, CartContextType, CartItem } from "@/app/context";
// import Image from "next/image";

// const CartDetails = () => {
//   const cartContext = useContext(CartContext);

//   // Handle case where context might be undefined
//   if (!cartContext) {
//     return <p>Loading cart...</p>;
//   }

//   const { cart, del } = cartContext;

//   return (
//     <div className="container mx-auto p-6">
//       <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
//       <p>Total Items: {cart.length}</p>

//       <ul className="space-y-4">
//         {cart.length > 0 ? (
//           cart.map((item: CartItem) => (
//             <li
//               key={item.id}
//               className="flex items-center justify-between border-b pb-4"
//             >
//               <div className="flex items-center space-x-4">
//                 <Image
//                   src={item.image}
//                   alt={item.name}
//                   width={80}
//                   height={80}
//                   className="rounded"
//                 />
//                 <div>
//                   <h2 className="text-xl font-semibold">{item.name}</h2>
//                   <p className="text-gray-600">${item.price}</p>
//                 </div>
//               </div>
//               <button
//                 onClick={() => del(item.id)}
//                 className="px-4 py-2 bg-red-500 text-white rounded"
//               >
//                 Remove
//               </button>
//             </li>
//           ))
//         ) : (
//           <p>No items in the cart.</p>
//         )}
//       </ul>
//     </div>
//   );
// };

// export default CartDetails;

// "use client"; // ✅ Required for Context to work properly

// import { useCart } from "@/app/context";
// import Image from "next/image";

// const CartDetails = () => {
//   const { cart, del } = useCart(); // ✅ Using custom hook

//   return (
//     <div className="container mx-auto p-6">
//       <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
//       <p>Total Items: {cart.length}</p>

//       <ul className="space-y-4">
//         {cart.length > 0 ? (
//           cart.map((item) => (
//             <li
//               key={item.id}
//               className="flex items-center justify-between border-b pb-4"
//             >
//               <div className="flex items-center space-x-4">
//                 <Image
//                   src={item.image}
//                   alt={item.name}
//                   width={80}
//                   height={80}
//                   className="rounded"
//                 />
//                 <div>
//                   <h2 className="text-xl font-semibold">{item.name}</h2>
//                   <p className="text-gray-600">${item.price}</p>
//                 </div>
//               </div>
//               <button
//                 onClick={() => del(item.id)}
//                 className="px-4 py-2 bg-red-500 text-white rounded"
//               >
//                 Remove
//               </button>
//             </li>
//           ))
//         ) : (
//           <p>No items in the cart.</p>
//         )}
//       </ul>
//     </div>
//   );
// };

// export default CartDetails;


// "use client";
// import { useCart } from "@/app/context";
// import Image from "next/image";
// import { useEffect, useState } from "react";

// const CartDetails = () => {
//   const { cart, del } = useCart();
//   const [localCart, setLocalCart] = useState(cart);

//   // ✅ Sync local state with cart changes
//   useEffect(() => {
//     setLocalCart(cart);
//   }, [cart]);

//   return (
//     <div className="container mx-auto p-6">
//       <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
//       <p>Total Items: {localCart.length}</p>

//       <ul className="space-y-4">
//         {localCart.length > 0 ? (
//           localCart.map((item) => (
//             <li key={item.id} className="flex items-center justify-between border-b pb-4">
//               <div className="flex items-center space-x-4">
//                 <Image src={item.image} alt={item.name} width={80} height={80} className="rounded" />
//                 <div>
//                   <h2 className="text-xl font-semibold">{item.name}</h2>
//                   <p className="text-gray-600">${item.price}</p>
//                 </div>
//               </div>
//               <button
//                 onClick={() => del(item.id)}
//                 className="px-4 py-2 bg-red-500 text-white rounded"
//               >
//                 Remove
//               </button>
//             </li>
//           ))
//         ) : (
//           <p>No items in the cart.</p>
//         )}
//       </ul>
//     </div>
//   );
// };

// export default CartDetails;




// shop more option included now

// "use client";
// import { useCart } from "@/app/context";
// import Image from "next/image";
// import { useRouter } from "next/navigation";

// const CartDetails = () => {
//   const { cart, del } = useCart();
//   const router = useRouter();

//   return (
//     <div className="container mx-auto p-6">
//       <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
//       <p>Total Items: {cart.length}</p>

//       <ul className="space-y-4">
//         {cart.length > 0 ? (
//           cart.map((item) => (
//             <li
//               key={item.id}
//               className="flex items-center justify-between border-b pb-4"
//             >
//               <div className="flex items-center space-x-4">
//                 <Image
//                   src={item.image}
//                   alt={item.name}
//                   width={80}
//                   height={80}
//                   className="rounded"
//                 />
//                 <div>
//                   <h2 className="text-xl font-semibold">{item.name}</h2>
//                   <p className="text-gray-600">${item.price}</p>
//                 </div>
//               </div>
//               <button
//                 onClick={() => del(item.id)}
//                 className="px-4 py-2 bg-red-500 text-white rounded"
//               >
//                 Remove
//               </button>
//             </li>
//           ))
//         ) : (
//           <p>No items in the cart.</p>
//         )}
//       </ul>

//       {/* ✅ New Buttons */}
//       <div className="flex space-x-4 mt-6">
//         <button
//           className="px-6 py-3 bg-[#B88E2F] text-white rounded"
//           onClick={() => router.push("/")}
//         >
//           Shop More
//         </button>

//         <button
//           className="px-6 py-3 bg-green-500 text-white rounded"
//           onClick={() => alert("Proceed to Checkout")}
//         >
//           Proceed to Checkout
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CartDetails;


// "use client";
// import { useCart } from "@/app/context";
// import Image from "next/image";
// import { useRouter } from "next/navigation";

// const CartDetails = () => {
//   const { cart, del } = useCart();
//   const router = useRouter();

//   return (

//     <div className="w-full">
//           {/* Main Image Section */}
//           <div className="relative flex justify-center bg-white py-10">
//             <Image
//               src="/shopmainpic.png"
//               alt="shopmainpic"
//               width={1440}
//               height={316}
//               className="cursor-pointer"
//             />
            
    
//             <div
//               className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
//               font-bold text-4xl text-black"
//             >
//               <Image
//                 src="/Meubel House_Logos-05.png"
//                 alt="MEUELLOGO"
//                 width={77}
//                 height={77}
//               />
//               <h2 className="absolute top-1/4 mt-16 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-4xl text-black">
//                 CART
//               </h2>
//             </div>
    
//             <div className="flex absolute top-1/4 mt-20 justify-center items-center gap-6">
//               <div className="text-xs text-gray-800">
//                 <p>Home</p>
//               </div>
//               <div>
//                 <img src="/tinyrightarrow.png" alt="rightarrow" />
//               </div>


//               <div>
//                 <p className="text-xs text-gray-800">Shop</p>
//               </div>

//               <div>
//                 <img src="/tinyrightarrow.png" alt="rightarrow" />
//               </div>

//               <div>
//                 <p className="text-xs text-gray-800">Cart</p>
//               </div>

//              </div>
            
//              </div>


//     <div className="container mx-auto p-6">
//       <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
//       <p>Total Items: {cart.length}</p>

//       <ul className="space-y-4">
//         {cart.length > 0 ? (
//           cart.map((item) => (
//             <li
//               key={item.id}
//               className="flex items-center justify-between border-b pb-4"
//             >
//               <div className="flex items-center space-x-4">
//                 <Image
//                   src={item.image}
//                   alt={item.name}
//                   width={80}
//                   height={80}
//                   className="rounded"
//                 />
//                 <div>
//                   <h2 className="text-xl font-semibold">{item.name}</h2>
//                   <p className="text-gray-600">${item.price}</p>
//                 </div>
//               </div>
//               <button
//                 onClick={() => del(item.id)}
//                 className="px-4 py-2 bg-red-500 text-white rounded"
//               >
//                 Remove
//               </button>
//             </li>
//           ))
//         ) : (
//           <p>No items in the cart.</p>
//         )}
//       </ul>

//       {/* ✅ New Buttons */}
//       <div className="flex space-x-4 mt-6">
//         <button
//           className="px-6 py-3 bg-[#B88E2F] text-white rounded"
//           onClick={() => router.push("/")}
//         >
//           Shop More
//         </button>

//         <button
//           className="px-6 py-3 bg-green-500 text-white rounded"
//           onClick={() => alert("Proceed to Checkout")}
//         >
//           Proceed to Checkout
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CartDetails;


// "use client";
// import { useCart } from "@/app/context";
// import Image from "next/image";
// import { useRouter } from "next/navigation";

// const CartDetails = () => {
//   const { cart, del } = useCart();
//   const router = useRouter();

//   return (
//     <div className="w-full">
//       {/* Main Image Section */}
//       <div className="relative flex justify-center bg-white py-10">
//         <Image
//           src="/shopmainpic.png"
//           alt="shopmainpic"
//           width={1440}
//           height={316}
//           className="cursor-pointer"
//         />

//         <div
//           className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
//           font-bold text-4xl text-black"
//         >
//           <Image
//             src="/Meubel House_Logos-05.png"
//             alt="MEUELLOGO"
//             width={77}
//             height={77}
//           />
//           <h2 className="absolute top-1/4 mt-16 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-4xl text-black">
//             CART
//           </h2>
//         </div>

//         <div className="flex absolute top-1/4 mt-20 justify-center items-center gap-6">
//           <div className="text-xs text-gray-800">
//             <p>Home</p>
//           </div>
//           <div>
//             <Image src="/tinyrightarrow.png" alt="rightarrow" width={16} height={16} />
//           </div>

//           <div>
//             <p className="text-xs text-gray-800">Shop</p>
//           </div>

//           <div>
//             <Image src="/tinyrightarrow.png" alt="rightarrow" width={16} height={16} />
//           </div>

//           <div>
//             <p className="text-xs text-gray-800">Cart</p>
//           </div>
//         </div>
//       </div>

//       <div className="container mx-auto p-6">
//         <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
//         <p>Total Items: {cart.length}</p>

//         <ul className="space-y-4">
//           {cart.length > 0 ? (
//             cart.map((item) => (
//               <li
//                 key={item.id}
//                 className="flex items-center justify-between border-b pb-4"
//               >
//                 <div className="flex items-center space-x-4">
//                   <Image
//                     src={item.image}
//                     alt={item.name}
//                     width={80}
//                     height={80}
//                     className="rounded"
//                   />
//                   <div>
//                     <h2 className="text-xl font-semibold">{item.name}</h2>
//                     <p className="text-gray-600">${item.price}</p>
//                   </div>
//                 </div>
//                 <button
//                   onClick={() => del(item.id)}
//                   className="px-4 py-2 bg-red-500 text-white rounded"
//                 >
//                   Remove
//                 </button>
//               </li>
//             ))
//           ) : (
//             <p>No items in the cart.</p>
//           )}
//         </ul>

//         {/* ✅ Action Buttons */}
//         <div className="flex space-x-4 mt-6">
//           <button
//             className="px-6 py-3 bg-[#B88E2F] text-white rounded"
//             onClick={() => router.push("/")}
//           >
//             Shop More
//           </button>

//           <button
//             className="px-6 py-3 bg-green-500 text-white rounded"
//             onClick={() => alert("Proceed to Checkout")}
//           >
//             Proceed to Checkout
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CartDetails;



"use client";
import { useCart } from "@/app/context";
import Image from "next/image";
import { useRouter } from "next/navigation";

const CartDetails = () => {
  const { cart, del } = useCart();
  const router = useRouter();

  return (
    <div className="w-full">
      {/* Main Image Section */}
      <div className="relative flex justify-center bg-white py-10">
        <Image
          src="/shopmainpic.png"
          alt="shopmainpic"
          width={1440}
          height={316}
          className="cursor-pointer"
        />

        <div
          className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
          font-bold text-4xl text-black"
        >
          <Image
            src="/Meubel House_Logos-05.png"
            alt="MEUELLOGO"
            width={77}
            height={77}
          />
          <h2 className="absolute top-1/4 mt-16 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-4xl text-black">
            CART
          </h2>
        </div>

        <div className="flex absolute top-1/4 mt-20 justify-center items-center gap-6">
          <div className="text-xs text-gray-800">
            <p>Home</p>
          </div>
          <div>
            <Image src="/tinyrightarrow.png" alt="rightarrow" width={16} height={16} />
          </div>

          <div>
            <p className="text-xs text-gray-800">Shop</p>
          </div>

          <div>
            <Image src="/tinyrightarrow.png" alt="rightarrow" width={16} height={16} />
          </div>

          <div>
            <p className="text-xs text-gray-800">Cart</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
        <p>Total Items: {cart.length}</p>

        <ul className="space-y-4">
          {cart.length > 0 ? (
            cart.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-between border-b pb-4"
              >
                <div className="flex items-center space-x-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={80}
                    height={80}
                    className="rounded"
                  />
                  <div>
                    <h2 className="text-xl font-semibold">{item.name}</h2>
                    <p className="text-gray-600">${item.price}</p>
                  </div>
                </div>
                <button
                  onClick={() => del(item.id)}
                  className="px-4 py-2 bg-[#B88E2F] text-white rounded"
                >
                  Remove
                </button>
              </li>
            ))
          ) : (
            <p>No items in the cart.</p>
          )}
        </ul>

        {/* ✅ Action Buttons */}
        <div className="flex space-x-4 mt-6">
          <button
            className="px-6 py-3 bg-[#B88E2F] text-white rounded"
            onClick={() => router.push("/")}
          >
            Shop More
          </button>

          <button
            className="px-6 py-3 bg-[#B88E2F] text-white rounded"
            onClick={() => router.push("/product/[id]/checkoutpage")}
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartDetails;



















