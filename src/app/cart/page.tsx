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



// feb 6

// "use client";
// import React, { useContext } from "react";
// import { CartContext } from "../context"; // Adjusted path
// import Image from "next/image";

// const Cart: React.FC = () => {
//   const context = useContext(CartContext);

//   if (!context) {
//     return <p>Cart context is not available.</p>;
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


// feb 6 two buttons added
"use client";
import React, { useContext } from "react";
import { useRouter } from "next/navigation"; // ✅ Added useRouter
import { CartContext } from "../context"; // ✅ Adjusted path
import Image from "next/image";

const Cart: React.FC = () => {
  const context = useContext(CartContext);
  const router = useRouter(); // ✅ Added router

  if (!context) {
    return <p>Cart context is not available.</p>;
  }

  const { cart, del } = context;

  return (
    <div className="ml-10">
      <h1 className="text-2xl mb-4">Cart</h1>
      <p>
        Total Products: <strong>{cart.length}</strong>
      </p>

      <ol className="mt-4">
        {cart.length > 0 ? (
          cart.map((item) => (
            <li key={item.id} className="flex items-center mb-2 border-b pb-2">
              <Image
                src={item.image}
                alt={item.name}
                width={64}
                height={64}
                className="mr-4"
              />
              <span className="flex-1">{item.name}</span>
              <span>${item.price}</span>
              <button
                className="px-4 py-2 bg-[#B88E2F] text-white rounded ml-4"
                onClick={() => del(item.id)}
              >
                Delete
              </button>
            </li>
          ))
        ) : (
          <p>No items in the cart.</p>
        )}
      </ol>

      {/* ✅ Added Shop More & Checkout Buttons */}
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
  );
};

export default Cart;








