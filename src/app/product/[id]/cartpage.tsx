// latest

// "use client";
// import React, { useContext } from "react";
// import { useRouter } from "next/navigation";
// import { CartContext } from "@/app/context";


// const CartPage: React.FC = () => {
//   const { cart, add, del } = useContext(CartContext);
//   const router = useRouter();

//   return (
//     <div className="container mx-auto p-6">
//       <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
//       <p className="text-lg">Total Products: <span className="font-bold">{cart.length}</span></p>

//       <ol className="mt-4">
//         {cart.length > 0 ? (
//           cart.map((val) => (
//             <li key={val.id} className="flex items-center mb-2 border-b pb-2 border-gray-200">
//               <img src={val.image} alt={val.name} className="w-16 h-16 mr-4" />
//               <span className="flex-1 text-gray-800">{val.name}</span>
//               <button
//                 className="px-6 py-2 bg-red-500 text-white rounded"
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

//       <div className="mt-6 flex gap-4">
//         <button
//           className="px-6 py-2 bg-blue-500 text-white rounded"
//           onClick={() => router.push("/shop")}
//         >
//           Shop More
//         </button>

//         <button
//           className="px-6 py-2 bg-green-500 text-white rounded"
//           onClick={() => router.push("/checkoutpage")}
//         >
//           Proceed to Checkout
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CartPage;





// latest2
// "use client";
// import React, { useContext, useEffect, useState } from "react";
// import { useParams, useRouter } from "next/navigation";
// import { CartContext } from "@/app/context";

// const CartPage: React.FC = () => {
//   const { cart, add, del } = useContext(CartContext);
//   const router = useRouter();
//   const params = useParams();
//   const [productId, setProductId] = useState<number | null>(null);

//   useEffect(() => {
//     if (params?.id) {
//       setProductId(Number(params.id)); // Convert ID from string to number
//     }
//   }, [params]);

//   if (!productId) {
//     return <p>Loading...</p>; // Prevent blank screen while fetching ID
//   }

//   return (
//     <div className="container mx-auto p-6">
//       <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
//       <p className="text-lg">Total Products: <span className="font-bold">{cart.length}</span></p>

//       <ol className="mt-4">
//         {cart.length > 0 ? (
//           cart.map((val) => (
//             <li key={val.id} className="flex items-center mb-2 border-b pb-2 border-gray-200">
//               <img src={val.image} alt={val.name} className="w-16 h-16 mr-4" />
//               <span className="flex-1 text-gray-800">{val.name}</span>
//               <button
//                 className="px-6 py-2 bg-red-500 text-white rounded"
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

//       <div className="mt-6 flex gap-4">
//         <button
//           className="px-6 py-2 bg-blue-500 text-white rounded"
//           onClick={() => router.push("/shop")}
//         >
//           Shop More
//         </button>

//         <button
//           className="px-6 py-2 bg-green-500 text-white rounded"
//           onClick={() => router.push("/checkoutpage")}
//         >
//           Proceed to Checkout
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CartPage;

// midnight


// app/product/[id]/cartpage.tsx
// "use client";
// import React, { useContext } from "react";
// import { CartContext } from "@/app/context";
// import { useRouter } from "next/navigation";

// const CartPage = ({ params }: { params: { id: string } }) => {
//   const { cart, del } = useContext(CartContext);
//   const router = useRouter();

//   return (
//     <div className="ml-10">
//       <h1 className="text-left font-bold text-2xl ml-10 mb-4">Cart Page</h1>
//       <p className="text-lg">
//         Total Products: <span className="font-bold">{cart.length}</span>
//       </p>
//       <ol className="mt-4">
//         {cart.length > 0 ? (
//           cart.map((val) => (
//             <li
//               key={val.id}
//               className="flex items-center mb-2 border-b pb-2 border-gray-200"
//             >
//               <img src={val.image} alt={val.name} className="w-16 h-16 mr-4" />
//               <span className="flex-1 text-gray-800">{val.name}</span>
//               <button
//                 className="px-6 py-4 bg-[#B88E2F] text-white rounded"
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
//       <div className="mt-6">
//         <button
//           className="px-6 py-4 bg-[#B88E2F] text-white rounded"
//           onClick={() => router.push(`/checkout/${params.id}`)}
//         >
//           Checkout
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CartPage;


// corrected

// "use client";
// import React, { useContext } from "react";
// import { CartContext } from "@/app/context";
// import { useRouter } from "next/navigation";

// const CartPage = ({ params }: { params: { id: string } }) => {
//   const { cart, del } = useContext(CartContext);
//   const router = useRouter();

//   return (
//     <div className="ml-10">
//       <h1 className="text-left font-bold text-2xl ml-10 mb-4">Cart Page</h1>
//       <p className="text-lg">
//         Total Products: <span className="font-bold">{cart.length}</span>
//       </p>
//       <ol className="mt-4">
//         {cart.length > 0 ? (
//           cart.map((val) => (
//             <li
//               key={val.id}
//               className="flex items-center mb-2 border-b pb-2 border-gray-200"
//             >
//               <img src={val.image} alt={val.name} className="w-16 h-16 mr-4" />
//               <span className="flex-1 text-gray-800">{val.name}</span>
//               <button
//                 className="px-6 py-4 bg-[#B88E2F] text-white rounded"
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
//       <div className="mt-6">
//         <button
//           className="px-6 py-4 bg-[#B88E2F] text-white rounded"
//           onClick={() => router.push(`/checkout/${params.id}`)}
//         >
//           Checkout
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CartPage;


// improved


// "use client";
// import React, { useContext } from "react";
// import { CartContext } from "@/app/context"; // Ensure correct path
// import Image from "next/image";

// const CartPage = () => {
//   const { cart, del } = useContext(CartContext); // Ensure this destructuring is correct

//   return (
//     <div>
//       <h1>Cart Page</h1>
//       <ul>
//         {cart.map((item) => (
//           <li key={item.id}>
//             {item.name} - <button onClick={() => del(item.id)}>Remove</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default CartPage;


// improved image


"use client";
import React, { useContext } from "react";
import { CartContext } from "@/app/context";
import Image from "next/image";

const CartPage = () => {
  const { cart, del } = useContext(CartContext);

  return (
    <div>
      <h1>Cart Page</h1>
      <ul>
        {cart.map((item) => (
          <li key={item.id} className="flex items-center mb-4">
            {/* Add image display */}
            <Image
              src={item.image}
              alt={item.name}
              width={80} // Specify width
              height={80} // Specify height
              className="mr-4 rounded"
            />
            <span className="flex-1">{item.name}</span>
            <button
              className="px-4 py-2 bg-red-500 text-white rounded"
              onClick={() => del(item.id)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartPage;




