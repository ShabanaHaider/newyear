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





"use client";
import React from "react";
import FormValidation from "../../../components/FormValidation";



import { useRouter } from "next/navigation";
import Image from "next/image";
import { useCart } from "@/app/context"; // ✅ Added to access cart details

const CheckoutPage: React.FC = () => {
  const router = useRouter();
  const { cart } = useCart(); // ✅ Get cart items from context

  const handleCheckout = () => {
    alert("Proceeding to payment...");
    router.push("/payment");
  };

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
            CHECKOUT
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

          <div>
            <Image src="/tinyrightarrow.png" alt="rightarrow" width={16} height={16} />
          </div>

          <div>
            <p className="text-xs text-gray-800">Checkout</p>
          </div>
        </div>
      </div>


      <FormValidation />

      {/* ✅ Checkout Content */}
      <div className="container mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">Checkout</h1>
        <p className="text-lg mb-6">Review your cart and proceed to payment.</p>

        {/* ✅ Cart Details */}
        <div className="border p-4 rounded-md shadow-sm bg-gray-50">
          <h2 className="text-xl font-semibold mb-4">Cart Summary</h2>
          {cart.length > 0 ? (
            <ul className="space-y-2">
              {cart.map((item) => (
                <li key={item.id} className="flex justify-between border-b pb-2">
                  <span className="font-medium">{item.name}</span>
                  <span>${item.price}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600">Your cart is empty.</p>
          )}

          {/* ✅ Total Price Calculation */}
          <div className="mt-4 font-bold text-lg">
            Total: $
            {cart.reduce((acc, item) => acc + item.price, 0).toFixed(2)}
          </div>
        </div>

        <button
          className="px-6 py-4 bg-[#B88E2F] text-white rounded mt-6 w-full"
          onClick={handleCheckout}
        >
          Place Order
        </button>
      </div>






      <div className="bg-[#fdf6e4] py-6 px-4 md:px-16 lg:px-32">
      <div className="flex justify-between items-center gap-4 text-center border border-dashed border-gray-400 py-4 px-6">
        {/* High Quality */}
        <div className="flex flex-col items-center">
          <span className="text-3xl">🏆</span>
          <p className="font-semibold text-lg">High Quality</p>
          <p className="text-sm text-gray-500">crafted from top materials</p>
        </div>

        {/* Warranty Protection */}
        <div className="flex flex-col items-center">
          <span className="text-3xl">✅</span>
          <p className="font-semibold text-lg">Warranty Protection</p>
          <p className="text-sm text-gray-500">Over 2 years</p>
        </div>

        {/* Free Shipping */}
        <div className="flex flex-col items-center">
          <span className="text-3xl">📦</span>
          <p className="font-semibold text-lg">Free Shipping</p>
          <p className="text-sm text-gray-500">Order over 150 $</p>
        </div>

        {/* 24/7 Support */}
        <div className="flex flex-col items-center">
          <span className="text-3xl">🎧</span>
          <p className="font-semibold text-lg">24 / 7 Support</p>
          <p className="text-sm text-gray-500">Dedicated support</p>
        </div>
      </div>

      </div>


    </div>
  );
};

export default CheckoutPage;






















    
  











