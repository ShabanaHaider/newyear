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




