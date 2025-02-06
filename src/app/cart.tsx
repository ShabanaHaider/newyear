

// improved

// "use client";
// import React, { useContext } from "react";
// import { CartContext } from "./context";
// import Image from "next/image";

// const Cart: React.FC = () => {
//   const { cart, del } = useContext(CartContext);

//   return (
//     <div className="ml-10">
//       <h1 className="text-left font-bold text-2xl ml-10 mb-4">Cart</h1>
//       <p className="text-lg">
//         Total Products: <span className="font-bold">{cart.length}</span>
//       </p>
//       <ol className="mt-4">
//         {cart.length > 0 ? (
//           cart.map((val) => (
//             <li key={val.id} className="flex items-center mb-2 border-b pb-2 border-gray-200">


//               <Image src={val.image} alt={val.name} className="w-16 h-16 mr-4" />
//               <span className="flex-1 text-gray-800">{val.name}</span>
//               <span className="text-gray-600">${val.price}</span> {/* Show price */}
//               <button
//                 className="px-6 py-4 bg-[#B88E2F] text-white rounded ml-4"
//                 onClick={() => del(val.id)}
//               >
//                 Delete from Cart
//               </button>
//             </li>
//           ))
//         ) : (
//           <p className="text-gray-600 mt-4">No items in the cart</p>
//         )}
//       </ol>
//     </div>
//   );
// };

// export default Cart;


// improved image

// "use client";
// import React, { useContext } from "react";
// import { CartContext } from "./context";
// import Image from "next/image";

// const Cart: React.FC = () => {
//   const { cart, del } = useContext(CartContext);

//   return (
//     <div className="ml-10">
//       <h1 className="text-left font-bold text-2xl ml-10 mb-4">Cart</h1>
//       <p className="text-lg">
//         Total Products: <span className="font-bold">{cart.length}</span>
//       </p>
//       <ol className="mt-4">
//         {cart.length > 0 ? (
//           cart.map((val) => (
//             <li key={val.id} className="flex items-center mb-2 border-b pb-2 border-gray-200">
//               <Image 
//                 src={val.image} 
//                 alt={val.name} 
//                 width={64}  // Added width
//                 height={64} // Added height
//                 className="w-16 h-16 mr-4" 
//               />
//               <span className="flex-1 text-gray-800">{val.name}</span>
//               <span className="text-gray-600">${val.price}</span> {/* Show price */}
//               <button
//                 className="px-6 py-4 bg-[#B88E2F] text-white rounded ml-4"
//                 onClick={() => del(val.id)}
//               >
//                 Delete from Cart
//               </button>
//             </li>
//           ))
//         ) : (
//           <p className="text-gray-600 mt-4">No items in the cart</p>
//         )}
//       </ol>
//     </div>
//   );
// };

// export default Cart;


// today

// "use client";
// import React, { useContext } from "react";
// import { CartContext } from "./context";
// import Image from "next/image";

// const Cart: React.FC = () => {
//   const { cart, del } = useContext(CartContext);

//   return (
//     <div className="ml-10">
//       <h1 className="font-bold text-2xl mb-4">Cart</h1>
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
//           <p>No items in the cart.</p>
//         )}
//       </ol>
//     </div>
//   );
// };

// export default Cart;


// today2

// "use client";
// import React, { useContext } from "react";
// import { CartContext } from "./context";
// import Image from "next/image";

// interface CartProps {
//   productName?: string;
//   productImage?: string;
//   productId?: string;
//   productPrice?: number;
// }

// const Cart: React.FC<CartProps> = ({ productName, productImage, productId, productPrice }) => {
//   const { cart, del } = useContext(CartContext);

//   return (
//     <div className="ml-10">
//       <h1 className="font-bold text-2xl mb-4">Cart</h1>
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
//           // Fallback to props if cart is empty
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



// cart.tsx
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
