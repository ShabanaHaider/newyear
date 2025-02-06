
                           
// "use client";
// import React, { useContext } from "react";
// import { CartContext } from "./context";
// import { useRouter } from "next/navigation"; // Import router

// interface ShopProps {
//   productName: string;
//   productImage: string;
//   productId: string;
//   productPrice: number;
// }

// const Shop: React.FC<ShopProps> = ({ productName, productImage, productId, productPrice }) => {
//   const { add } = useContext(CartContext);
//   const router = useRouter();

//   const handleAddToCart = () => {
//     add({ id: productId, name: productName, image: productImage, price: productPrice });
//     router.push("/cart");  // Redirect to cart page
//   };

//   return (
//     <div className="ml-10">
//       <button className="px-6 py-4 bg-[#B88E2F] text-white rounded">
//         <h1>Buy Now</h1>
//       </button>
//       <button
//         className="px-6 py-4 ml-4 bg-[#B88E2F] text-white rounded"
//         onClick={handleAddToCart}
//       >
//         Add to Cart
//       </button>
//     </div>
//   );
// };

// export default Shop;


// today

// "use client";
// import React, { useContext } from "react";
// import { CartContext } from "./context";
// import { useRouter } from "next/navigation";

// interface ShopProps {
//   productName: string;
//   productImage: string;
//   productId: string;
//   productPrice: number;
// }

// const Shop: React.FC<ShopProps> = ({ productName, productImage, productId, productPrice }) => {
//   const { add } = useContext(CartContext);
//   const router = useRouter();

//   const handleAddToCart = () => {
//     add({ id: productId, name: productName, image: productImage, price: productPrice });
//     router.push(`/product/${productId}/cartdetails`);  // Navigate to cartdetails
//   };

//   return (
//     <div className="ml-10">
//       <button className="px-6 py-4 bg-[#B88E2F] text-white rounded">Buy Now</button>
//       <button
//         className="px-6 py-4 ml-4 bg-[#B88E2F] text-white rounded"
//         onClick={handleAddToCart}
//       >
//         Add to Cart
//       </button>
//     </div>
//   );
// };

// export default Shop;





// adjusted asyncrhonous function

// "use client";
// import React, { useContext } from "react";
// import { CartContext } from "./context";
// import { useRouter } from "next/navigation";

// interface ShopProps {
//   productName: string;
//   productImage: string;
//   productId: string;
//   productPrice: number;
// }

// const Shop: React.FC<ShopProps> = ({ productName, productImage, productId, productPrice }) => {
//   const { add } = useContext(CartContext);
//   const router = useRouter();

//   const handleAddToCart = async () => {
//     await add({ id: productId, name: productName, image: productImage, price: productPrice }); // Ensure item is added
//     router.push(`/product/${productId}/cartdetails`);  // Navigate after adding to cart
//   };

//   return (
//     <div className="ml-10">
//       <button className="px-6 py-4 bg-[#B88E2F] text-white rounded">Buy Now</button>
//       <button
//         className="px-6 py-4 ml-4 bg-[#B88E2F] text-white rounded"
//         onClick={handleAddToCart}
//       >
//         Add to Cart
//       </button>
//     </div>
//   );
// };

// export default Shop;


// updated


// "use client";
// import React from "react";
// import { useCart } from "./context"; // Unified Hook
// import { useRouter } from "next/navigation";

// interface ShopProps {
//   productName: string;
//   productImage: string;
//   productId: string;
//   productPrice: number;
// }

// const Shop: React.FC<ShopProps> = ({ productName, productImage, productId, productPrice }) => {
//   const { add } = useCart();
//   const router = useRouter();

//   const handleAddToCart = () => {
//     add({ id: productId, name: productName, image: productImage, price: productPrice });
//     router.push(`/product/${productId}/cartdetails`);
//   };

//   return (
//     <button
//       className="px-6 py-4 bg-[#B88E2F] text-white rounded"
//       onClick={handleAddToCart}
//     >
//       Add to Cart
//     </button>
//   );
// };

// export default Shop;

// "use client";
// import React from "react";
// import { useCart } from "./context";
// import { useRouter } from "next/navigation";

// interface ShopProps {
//   productName: string;
//   productImage: string;
//   productId: string;
//   productPrice: number;
// }

// const Shop: React.FC<ShopProps> = ({ productName, productImage, productId, productPrice }) => {
//   const { add } = useCart();
//   const router = useRouter();

//   const handleAddToCart = () => {
//     add({ id: productId, name: productName, image: productImage, price: productPrice });
//     router.push(`/product/${productId}/cartdetails`);
//   };

//   return (
//     <div className="ml-10">
//       <button className="px-6 py-4 bg-[#B88E2F] text-white rounded">Buy Now</button>
//       <button
//         className="px-6 py-4 ml-4 bg-[#B88E2F] text-white rounded"
//         onClick={handleAddToCart}
//       >
//         Add to Cart
//       </button>
//     </div>
//   );
// };

// export default Shop;



"use client";
import React from "react";
import { useCart } from "./context";
import { useRouter } from "next/navigation";

interface ShopProps {
  productName: string;
  productImage: string;
  productId: string;
  productPrice: number;
}

const Shop: React.FC<ShopProps> = ({ productName, productImage, productId, productPrice }) => {
  const { add } = useCart();
  const router = useRouter();

  const handleAddToCart = () => {
    add({ id: productId, name: productName, image: productImage, price: productPrice });
    router.push(`/product/${productId}/cartdetails`);
  };

  const handleBuyNow = () => {
    add({ id: productId, name: productName, image: productImage, price: productPrice }); // ✅ Ensure it's added to cart
    router.push(`/product/${productId}/checkoutpage`); // ✅ Redirect to checkout page
  };

  return (
    <div className="ml-10">
      <button
        className="px-6 py-4 bg-[#B88E2F] text-white rounded"
        onClick={handleBuyNow} // ✅ Buy Now functionality
      >
        Buy Now
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


