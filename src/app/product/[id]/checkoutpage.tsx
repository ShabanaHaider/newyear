
// latest

"use client";
import React from "react";
import { useRouter } from "next/navigation";

const CheckoutPage: React.FC = () => {
  const router = useRouter();

  const handleCheckout = () => {
    alert("Proceeding to payment...");
    // Redirect to payment gateway or confirmation page
    router.push("/payment");
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <p className="text-lg mb-6">Review your cart and proceed to payment.</p>
      <button
        className="px-6 py-4 bg-[#B88E2F] text-white rounded"
        onClick={handleCheckout}
      >
        Proceed to Payment
      </button>
    </div>
  );
};

export default CheckoutPage;

