// "use client";
// import React from "react";
// import { useRouter } from "next/navigation";

// const CheckoutPage: React.FC = () => {
//   const router = useRouter();

//   const handleCheckout = () => {
//     alert("Proceeding to payment...");
//     // Redirect to payment gateway or confirmation page
//     router.push("/payment");
//   };

//   return (
//     <div className="container mx-auto p-6">
//       <h1 className="text-2xl font-bold mb-4">Checkout</h1>
//       <p className="text-lg mb-6">Review your cart and proceed to payment.</p>
//       <button
//         className="px-6 py-4 bg-[#B88E2F] text-white rounded"
//         onClick={handleCheckout}
//       >
//         Place order
//       </button>
//     </div>
//   );
// };

// export default CheckoutPage;





// "use client";
// import React from "react";
// import FormValidation from "../../../components/FormValidation";



// import { useRouter } from "next/navigation";
// import Image from "next/image";
// import { useCart } from "@/app/context"; // ✅ Added to access cart details

// const CheckoutPage: React.FC = () => {
//   const router = useRouter();
//   const { cart } = useCart(); // ✅ Get cart items from context

//   const handleCheckout = () => {
//     alert("Proceeding to payment...");
//     router.push("/payment");
//   };

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
//             CHECKOUT
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

//           <div>
//             <Image src="/tinyrightarrow.png" alt="rightarrow" width={16} height={16} />
//           </div>

//           <div>
//             <p className="text-xs text-gray-800">Checkout</p>
//           </div>
//         </div>
//       </div>


//       <FormValidation />

//       {/* ✅ Checkout Content */}
//       <div className="container mx-auto p-6">
//         <h1 className="text-2xl font-bold mb-4">Checkout</h1>
//         <p className="text-lg mb-6">Review your cart and proceed to payment.</p>

//         {/* ✅ Cart Details */}
//         <div className="border p-4 rounded-md shadow-sm bg-gray-50">
//           <h2 className="text-xl font-semibold mb-4">Cart Summary</h2>
//           {cart.length > 0 ? (
//             <ul className="space-y-2">
//               {cart.map((item) => (
//                 <li key={item.id} className="flex justify-between border-b pb-2">
//                   <span className="font-medium">{item.name}</span>
//                   <span>${item.price}</span>
//                 </li>
//               ))}
//             </ul>
//           ) : (
//             <p className="text-gray-600">Your cart is empty.</p>
//           )}

//           {/* ✅ Total Price Calculation */}
//           <div className="mt-4 font-bold text-lg">
//             Total: $
//             {cart.reduce((acc, item) => acc + item.price, 0).toFixed(2)}
//           </div>
//         </div>

//         <button
//           className="px-6 py-4 bg-[#B88E2F] text-white rounded mt-6 w-full"
//           onClick={handleCheckout}
//         >
//           Place Order
//         </button>
//       </div>

//       <div className="bg-[#fdf6e4] py-6 px-4 md:px-16 lg:px-32">
//       <div className="flex justify-between items-center gap-4 text-center border border-dashed border-gray-400 py-4 px-6">
//         {/* High Quality */}
//         <div className="flex flex-col items-center">
//           <span className="text-3xl">🏆</span>
//           <p className="font-semibold text-lg">High Quality</p>
//           <p className="text-sm text-gray-500">crafted from top materials</p>
//         </div>

//         {/* Warranty Protection */}
//         <div className="flex flex-col items-center">
//           <span className="text-3xl">✅</span>
//           <p className="font-semibold text-lg">Warranty Protection</p>
//           <p className="text-sm text-gray-500">Over 2 years</p>
//         </div>

//         {/* Free Shipping */}
//         <div className="flex flex-col items-center">
//           <span className="text-3xl">📦</span>
//           <p className="font-semibold text-lg">Free Shipping</p>
//           <p className="text-sm text-gray-500">Order over 150 $</p>
//         </div>

//         {/* 24/7 Support */}
//         <div className="flex flex-col items-center">
//           <span className="text-3xl">🎧</span>
//           <p className="font-semibold text-lg">24 / 7 Support</p>
//           <p className="text-sm text-gray-500">Dedicated support</p>
//         </div>
//       </div>

//       </div>


//     </div>
//   );
// };

// export default CheckoutPage;


// adjusted
// "use client";
// import React from "react";
// import FormValidation from "../../../components/FormValidation";
// import { useRouter } from "next/navigation";
// import Image from "next/image";
// import { useCart } from "@/app/context"; // ✅ Added to access cart details
// import { cn } from "@/lib/utils";

// const CheckoutPage: React.FC = () => {
//   const router = useRouter();
//   const { cart } = useCart(); // ✅ Get cart items from context

//   const handleCheckout = () => {
//     alert("Proceeding to payment...");
//     router.push("/stripepayment");
//   };

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

//         <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-4xl text-black">
//           <Image
//             src="/Meubel House_Logos-05.png"
//             alt="MEUELLOGO"
//             width={77}
//             height={77}
//           />
//           <h2 className="absolute top-1/4 mt-16 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-4xl text-black">
//             CHECKOUT
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

//           <div>
//             <Image src="/tinyrightarrow.png" alt="rightarrow" width={16} height={16} />
//           </div>

//           <div>
//             <p className="text-xs text-gray-800">Checkout</p>
//           </div>
//         </div>
//       </div>

//       <FormValidation />

//       {/* ✅ Checkout Content */}
//       <div className="container mx-auto p-6">
//         <h1 className="text-2xl font-bold mb-4">Checkout</h1>
//         <p className="text-lg mb-6">Review your cart and proceed to payment.</p>

//         {/* ✅ Cart Details */}
//         <div className="border p-4 rounded-md shadow-sm bg-gray-50">
//           <h2 className="text-xl font-semibold mb-4">Cart Summary</h2>
//           {cart.length > 0 ? (
//             <ul className="space-y-2">
//               {cart.map((item) => (
//                 <li key={item.id} className="flex justify-between border-b pb-2">
//                   <span className="font-medium">{item.name}</span>
//                   <span>${item.price}</span>
//                 </li>
//               ))}
//             </ul>
//           ) : (
//             <p className="text-gray-600">Your cart is empty.</p>
//           )}

//           {/* ✅ Total Price Calculation */}
//           <div className="mt-4 font-bold text-lg">
//             Total: ${cart.reduce((acc, item) => acc + item.price, 0).toFixed(2)}
//           </div>
//         </div>

//         {/* Button with cn usage for dynamic styling */}
//         <button
//           className={cn("px-6 py-4 bg-[#B88E2F] text-white rounded mt-6 w-full", 
//             cart.length === 0 && "opacity-50 cursor-not-allowed")}
//           onClick={handleCheckout}
//           disabled={cart.length === 0} // Disable if cart is empty
//         >
//           Place Order
//         </button>
//       </div>

//       <div className="bg-[#fdf6e4] py-6 px-4 md:px-16 lg:px-32">
//         <div className="flex justify-between items-center gap-4 text-center border border-dashed border-gray-400 py-4 px-6">
//           {/* High Quality */}
//           <div className="flex flex-col items-center">
//             <span className="text-3xl">🏆</span>
//             <p className="font-semibold text-lg">High Quality</p>
//             <p className="text-sm text-gray-500">crafted from top materials</p>
//           </div>

//           {/* Warranty Protection */}
//           <div className="flex flex-col items-center">
//             <span className="text-3xl">✅</span>
//             <p className="font-semibold text-lg">Warranty Protection</p>
//             <p className="text-sm text-gray-500">Over 2 years</p>
//           </div>

//           {/* Free Shipping */}
//           <div className="flex flex-col items-center">
//             <span className="text-3xl">📦</span>
//             <p className="font-semibold text-lg">Free Shipping</p>
//             <p className="text-sm text-gray-500">Order over 150 $</p>
//           </div>

//           {/* 24/7 Support */}
//           <div className="flex flex-col items-center">
//             <span className="text-3xl">🎧</span>
//             <p className="font-semibold text-lg">24 / 7 Support</p>
//             <p className="text-sm text-gray-500">Dedicated support</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CheckoutPage;



// final page , this page is getting dynamic price of 
// product but not adding product price if more than one product

// "use client";

// import { useSearchParams } from "next/navigation";
// import { useRouter } from "next/navigation";

// const CheckoutPage = () => {
//   const searchParams = useSearchParams();
//   const router = useRouter();
//   const productPrice = searchParams.get("productPrice");

//   if (!productPrice) {
//     return <p>Error: Product price is missing.</p>;
//   }

//   const totalAmount = parseFloat(productPrice); // Convert price to number

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen p-6">
//       <h1 className="text-2xl font-bold mb-4">Checkout Page</h1>
//       <p className="text-lg">Total Amount: ${totalAmount}</p>

//       {/* ✅ Now this button passes price to stripepayment page */}
//       <button
//         className="mt-4 px-6 py-3 bg-[#B88E2F] text-white rounded"
//         onClick={() =>
//           router.push(`/stripepayment?productPrice=${totalAmount}`)
//         }
//       >
//         Proceed to Payment
//       </button>
//     </div>
//   );
// };

// export default CheckoutPage;


// final 2

"use client";

import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import FormValidation from "@/app/components/FormValidation";
import { useCart } from "@/app/context"; // ✅ Get cart data from context
import { cn } from "@/lib/utils";

const CheckoutPage: React.FC = () => {
  const router = useRouter();
  const { cart } = useCart(); // ✅ Get cart items from context

  // ✅ Calculate total price of all items
  const totalAmount = cart.reduce((acc, item) => acc + item.price, 0).toFixed(2);

  const handleCheckout = () => {
    if (cart.length === 0) return;
    router.push(`/stripepayment?productPrice=${totalAmount}`);
  };

  return (
    <div className="w-full">
      {/* ✅ Main Image Section */}
      <div className="relative flex justify-center bg-white py-10">
        <Image src="/shopmainpic.png" alt="shopmainpic" width={1440} height={316} className="cursor-pointer" />
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-4xl text-black">
          <Image src="/Meubel House_Logos-05.png" alt="MEUELLOGO" width={77} height={77} />
          <h2 className="absolute top-1/4 mt-16 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-4xl text-black">
            CHECKOUT
          </h2>
        </div>

        {/* ✅ Breadcrumb Navigation */}
        <div className="flex absolute top-1/4 mt-20 justify-center items-center gap-6">
          {["Home", "Shop", "Cart", "Checkout"].map((label, index) => (
            <React.Fragment key={index}>
              {index > 0 && <Image src="/tinyrightarrow.png" alt="rightarrow" width={16} height={16} />}
              <p className="text-xs text-gray-800">{label}</p>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* ✅ Form Validation */}
      <FormValidation />

      {/* ✅ Checkout Content */}
      <div className="container mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">Checkout</h1>
        <p className="text-lg mb-6">Review your cart and proceed to payment.</p>

        {/* ✅ Cart Summary */}
        <div className="border p-4 rounded-md shadow-sm bg-gray-50">
          <h2 className="text-xl font-semibold mb-4">Cart Summary</h2>
          {cart.length > 0 ? (
            <ul className="space-y-2">
              {cart.map((item) => (
                <li key={item.id} className="flex justify-between border-b pb-2">
                  <span className="font-medium">{item.name}</span>
                  <span>${item.price.toFixed(2)}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600">Your cart is empty.</p>
          )}

          {/* ✅ Total Price Calculation */}
          <div className="mt-4 font-bold text-lg">Total: ${totalAmount}</div>
        </div>

        {/* ✅ Checkout Button */}
        <button
          className={cn("px-6 py-4 bg-[#B88E2F] text-white rounded mt-6 w-full", cart.length === 0 && "opacity-50 cursor-not-allowed")}
          onClick={handleCheckout}
          disabled={cart.length === 0}
        >
          Proceed to Payment
        </button>
      </div>

      {/* ✅ Additional Info Section */}
      <div className="bg-[#fdf6e4] py-6 px-4 md:px-16 lg:px-32">
        <div className="flex justify-between items-center gap-4 text-center border border-dashed border-gray-400 py-4 px-6">
          {[
            { icon: "🏆", title: "High Quality", desc: "crafted from top materials" },
            { icon: "✅", title: "Warranty Protection", desc: "Over 2 years" },
            { icon: "📦", title: "Free Shipping", desc: "Order over $150" },
            { icon: "🎧", title: "24/7 Support", desc: "Dedicated support" }
          ].map(({ icon, title, desc }, index) => (
            <div key={index} className="flex flex-col items-center">
              <span className="text-3xl">{icon}</span>
              <p className="font-semibold text-lg">{title}</p>
              <p className="text-sm text-gray-500">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;

























    
  











