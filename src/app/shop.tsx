
                           
// "use client";

// import React, { useContext } from "react";
// import { CartContext } from "./context";
// import Link from "next/link";


// const Shop = ({ productName }: { productName: string }) => {
//   const obj = useContext(CartContext);
//   console.log(obj);

//   // Dynamically populate the array with productName and ID
//   const arr = [
//     { name: productName, id: 1 },  // Use the productName dynamically
//   ];

//   return (
//     <div className="ml-10">
//       <h1 className="text-left font-bold text-2xl ml-10 mb-4">Buy Now</h1>
//       <ol>
//         {arr.map((val, i) => (
//           <li key={i}>
//             <span className="mr-5">{val.id}</span> {val.name}
//             <button
//               className="ml-5 px-6 py-4 bg-[#B88E2F]     text-white rounded"
//               onClick={() => obj.add({ name: val.name, id: val.id })}     >


//               Add to Cart
             
//             </button>
//           </li>
//         ))}
//       </ol>
//     </div>
//   );
// };

// export default Shop; 


// jan 30
// "use client";
// import React, { useContext } from "react";
// import { CartContext } from "./context";

// interface ShopProps {
//   productName: string;
//   productImage: string;
// }

// const Shop: React.FC<ShopProps> = ({ productName, productImage }) => {
//   const obj = useContext(CartContext);

//   return (
//     <div className="ml-10">
//       <h1 className="text-left font-bold text-2xl ml-10 mb-4">Buy Now</h1>
//       <button
//         className="px-6 py-4 bg-[#B88E2F] text-white rounded"
//         onClick={() => obj.add({ name: productName, id: Date.now(), image: productImage })}
//       >
//         Add to Cart
//       </button>
//     </div>
//   );
// };

// export default Shop;


// 30 jan
// "use client";
// import React, { useContext } from "react";
// import { CartContext } from "./context";

// interface ShopProps {
//   productName: string;
//   productImage: string;
// }

// const Shop: React.FC<ShopProps> = ({ productName, productImage }) => {
//   const obj = useContext(CartContext);

//   return (
//     <div className="ml-10">
//       <h1 className="text-left font-bold text-2xl ml-10 mb-4">Buy Now</h1>
//       <button
//         className="px-6 py-4 bg-[#B88E2F] text-white rounded"
//         onClick={() => obj.add({ name: productName, id: Date.now(), image: productImage })}
//       >
//         Add to Cart
//       </button>
//     </div>
//   );
// };

// export default Shop;


// corrected

"use client";
import React, { useContext } from "react";
import { CartContext } from "./context";

interface ShopProps {
  productName: string;
  productImage: string;
}

const Shop: React.FC<ShopProps> = ({ productName, productImage, }) => {
  const { add } = useContext(CartContext); // Ensure `add` is accessed properly

  return (
    <div className="ml-10">
      <h1 className="text-left font-bold text-2xl ml-10 mb-4">Buy Now</h1>
      <button
        className="px-6 py-4 bg-[#B88E2F] text-white rounded"
        onClick={() => add({ name: productName, id: Date.now(), image: productImage })}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Shop;

