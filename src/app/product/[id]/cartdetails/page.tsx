
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
//                   className="px-4 py-2 bg-[#B88E2F] text-white rounded"
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
//             className="px-6 py-3 bg-[#B88E2F] text-white rounded"
//             onClick={() => router.push("/product/[id]/checkoutpage")}
//           >
//             Proceed to Checkout
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CartDetails;


// page redirected to shop page insted of home page

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
  onClick={() => router.push("/product")} // ✅ Fixed route
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




















