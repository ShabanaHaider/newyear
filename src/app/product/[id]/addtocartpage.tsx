


// import Image from "next/image";
//     import Link from "next/link";

//     export default function Shop() {
//       return (
//         <div className="w-full">
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

//             </div>

            
//           </div>
    
//           {/* Main Content Section */}
//           <div className="flex w-full h-auto bg-white px-8 py-16">
//             {/* Left Section (Bar and Image) */}
//             <div className="w-[817px]">
//               {/* Horizontal Bar */}



//               <div className="flex pl-[300px] gap-16 items-center h-[55px] bg-[#f9f1e7]  font-bold text-black">
//                 <p>Product</p>
//                 <p>Price</p>
//                 <p>Quantity</p>
//                 <p>Subtotal</p>
//               </div>

//               </div>
//               </div>
//               </div>


//               )
//               }

// "use client";

// import React, { useContext } from "react";
// import { useParams } from "next/navigation"; // For getting product ID from URL
// import { CartContext } from "@/app/context";
// import Navbar from "@/app/components/Navbar";


// function AddToCartPage() {
//     const { cart } = useContext(CartContext); // Get cart from context
//     const { id } = useParams(); // Get the product ID from the URL

//     return (
//         <div className="ml-10">
//             <h1 className="text-left font-bold text-2xl ml-10 mb-4">Cart Details</h1>
//             <p className="text-lg font-bold mb-2">Product ID: {id}</p>
//             <p className="text-lg">Total Products: {cart.length}</p>

//             <ol className="mt-4">
//                 {cart.length > 0 ? (
//                     cart.map((item, index) => (
//                         <li
//                             key={index}
//                             className="flex items-center mb-2 border-b pb-2 border-gray-200"
//                         >
//                             <span className="mr-5 text-gray-700 font-medium">{item.id}</span>
//                             <span className="flex-1 text-gray-800">{item.name}</span>
//                         </li>
//                     ))
//                 ) : (
//                     <p className="text-gray-600 mt-4">No items in the cart</p>
//                 )}
//             </ol>
//         </div>
//     );
// }

// export default AddToCartPage;





"use client";

import React, { useContext } from "react";
import { useParams, useSearchParams } from "next/navigation"; // For getting product ID and query parameters
import { CartContext } from "@/app/context";

function AddToCartPage() {
  const { id } = useParams(); // Get product ID from the dynamic route
  const searchParams = useSearchParams(); // Get query parameters
  const { cart } = useContext(CartContext);

  // Extract productName from query parameters
  const productName = searchParams.get("productName") || "Unknown Product";

  return (
    <div className="ml-10">
      <h1 className="text-left font-bold text-2xl ml-10 mb-4">Cart Details</h1>
      <p className="text-lg font-bold mb-2">Product ID: {id}</p>
      <p className="text-lg font-bold mb-2">Product Name: {productName}</p>
      <p className="text-lg">Total Products in Cart: {cart.length}</p>

      <ol className="mt-4">
        {cart.length > 0 ? (
          cart.map((item, index) => (
            <li
              key={index}
              className="flex items-center mb-2 border-b pb-2 border-gray-200"
            >
              <span className="mr-5 text-gray-700 font-medium">{item.id}</span>
              <span className="flex-1 text-gray-800">{item.name}</span>
            </li>
          ))
        ) : (
          <p className="text-gray-600 mt-4">No items in the cart</p>
        )}
      </ol>
    </div>
  );
}

export default AddToCartPage;





