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

// "use client";
// import React, { useContext } from "react";
// import { useRouter } from "next/navigation"; // ✅ Added useRouter
// import { CartContext } from "../context"; // ✅ Adjusted path
// import Image from "next/image";

// const Cart: React.FC = () => {
//   const context = useContext(CartContext);
//   const router = useRouter(); // ✅ Added router

//   if (!context) {
//     return <p>Cart context is not available.</p>;
//   }

//   const { cart, del } = context;

//   return (
//     <div className="ml-10">
//       <h1 className="text-2xl font-semibold mb-4">CART</h1>
//       <p>
//         Total Products: <strong>{cart.length}</strong>
//       </p>

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
//               <span className="mr-4">${item.price}</span>
//               <button
//                  className="px-2 py-2 bg-[#B88E2F] text-white rounded mr-72"                
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

//       {/* ✅ Added Shop More & Checkout Buttons */}
//       <div className="flex space-x-4 mt-6">
//         <button
//           className="px-6 py-3 bg-[#B88E2F] text-white rounded"
//           onClick={() => router.push("/")}
//         >
//           Shop More
//         </button>

//         <button
//           className="px-6 py-3 bg-[#B88E2F] text-white rounded"
//           onClick={() => router.push("/product/[id]/checkoutpage")}
//         >
//           Proceed to Checkout
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Cart;


// replace hardcoded price with the dynamic Price

// "use client";

// import React, { useContext } from "react";
// import { useRouter } from "next/navigation";
// import { CartContext } from "../context";
// import Image from "next/image";

// const Cart: React.FC = () => {
//   const context = useContext(CartContext);
//   const router = useRouter();

//   if (!context) {
//     return <p>Cart context is not available.</p>;
//   }

//   const { cart, del } = context;

//   return (
//     <div className="ml-10">
//       <h1 className="text-2xl font-semibold mb-4">CART</h1>
//       <p>
//         Total Products: <strong>{cart.length}</strong>
//       </p>

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
//               <span className="mr-4">${item.price}</span>
//               <button
//                 className="px-2 py-2 bg-[#B88E2F] text-white rounded mr-72"
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

//       <div className="flex space-x-4 mt-6">
//         <button
//           className="px-6 py-3 bg-[#B88E2F] text-white rounded"
//           onClick={() => router.push("/")}
//         >
//           Shop More
//         </button>

//         {/* ✅ Pass productPrice to CheckoutPage & StripePaymentPage */}
//         {cart.length > 0 && (
//           <>
//             <button
//               className="px-6 py-3 bg-[#B88E2F] text-white rounded"
//               onClick={() =>
//                 router.push(`/product/${cart[0].id}/checkoutpage?productPrice=${cart[0].price}`)
//               }
//             >
//               Proceed to Checkout
//             </button>

//             <button
//               className="px-6 py-3 bg-[#B88E2F] text-white rounded"
//               onClick={() =>
//                 router.push(`/stripepayment?productPrice=${cart[0].price}`)
//               }
//             >
//               Proceed to Payment
//             </button>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Cart;


// passing product details to both checkoutpage and stripepayment in the same way



// "use client";

// import React, { useContext } from "react";
// import { useRouter } from "next/navigation";
// import { CartContext } from "../context";
// import Image from "next/image";

// const Cart: React.FC = () => {
//   const context = useContext(CartContext);
//   const router = useRouter();

//   if (!context) {
//     return <p>Cart context is not available.</p>;
//   }

//   const { cart, del } = context;

//   return (
//     <div className="ml-10">
//       <h1 className="text-2xl font-semibold mb-4">CART</h1>
//       <p>
//         Total Products: <strong>{cart.length}</strong>
//       </p>

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
//               <span className="mr-4">${item.price}</span>
//               <button
//                 className="px-2 py-2 bg-[#B88E2F] text-white rounded mr-72"
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

//       <div className="flex space-x-4 mt-6">
//         <button
//           className="px-6 py-3 bg-[#B88E2F] text-white rounded"
//           onClick={() => router.push("/")}
//         >
//           Shop More
//         </button>

//         {/* ✅ Pass product details to both CheckoutPage & StripePaymentPage */}
//         {cart.length > 0 && (
//           <>
//             <button
//               className="px-6 py-3 bg-[#B88E2F] text-white rounded"
//               onClick={() =>
//                 router.push(`/product/${cart[0].id}/checkoutpage?productPrice=${cart[0].price}`)
//               }
//             >
//               Proceed to Checkout
//             </button>

//             <button
//               className="px-6 py-3 bg-[#B88E2F] text-white rounded"
//               onClick={() =>
//                 router.push(`/stripepayment?productId=${cart[0].id}&productPrice=${cart[0].price}`)
//               }
//             >
//               Proceed to Payment
//             </button>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Cart;


// finalpage

"use client";

import React, { useContext } from "react";
import { useRouter } from "next/navigation";
import { CartContext } from "../context";
import Image from "next/image";

const Cart: React.FC = () => {
  const context = useContext(CartContext);
  const router = useRouter();

  if (!context) {
    return <p>Cart context is not available.</p>;
  }

  const { cart, del } = context;

  return (
    <div className="ml-10">
      <h1 className="text-2xl font-semibold mb-4">CART</h1>
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
              <span className="mr-4">${item.price}</span>
              <button
                className="px-2 py-2 bg-[#B88E2F] text-white rounded mr-72"
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

      {/* ✅ Shop More & Checkout Buttons */}
      <div className="flex space-x-4 mt-6">
        
<button
  className="px-6 py-3 bg-[#B88E2F] text-white rounded"
  onClick={() => router.push("/product")} // ✅ Fixed route
>
  Shop More
</button>

        {/* ✅ Navigate to CHECKOUT PAGE, passing price */}
        {cart.length > 0 && (
          <button
            className="px-6 py-3 bg-[#B88E2F] text-white rounded"
            onClick={() =>
              router.push(`/product/[id]/checkoutpage?productPrice=${cart[0]?.price}`)
            }
          >
            Proceed to Checkout
          </button>
        )}
      </div>
    </div>
  );
};

export default Cart;


