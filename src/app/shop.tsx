
                           
"use client";
import React, { useContext } from "react";
import { CartContext } from "./context";
import { useRouter } from "next/navigation"; // Import router

interface ShopProps {
  productName: string;
  productImage: string;
  productId: string;
  productPrice: number;
}

const Shop: React.FC<ShopProps> = ({ productName, productImage, productId, productPrice }) => {
  const { add } = useContext(CartContext);
  const router = useRouter();

  const handleAddToCart = () => {
    add({ id: productId, name: productName, image: productImage, price: productPrice });
    router.push("/cart");  // Redirect to cart page
  };

  return (
    <div className="ml-10">
      <button className="px-6 py-4 bg-[#B88E2F] text-white rounded">
        <h1>Buy Now</h1>
      </button>
      <button
        className="px-6 py-4 ml-4 bg-[#B88E2F] text-white rounded"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Shop;




