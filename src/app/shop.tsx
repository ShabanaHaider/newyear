// "use client"
// import React , {useContext}from 'react';
// import { CartContext } from './context';


// const Shop = () => {
//     const obj = useContext(CartContext)
//     console.log(obj)
//     const arr=[
//         {name:"Tops",id:1},
//         // {name:"Pants",id:2},
//         // {name:"T-shirts",id:3},
//     ]
//   return (
//     <div className="ml-10">        
//         <h1 className="text-left ml-10 mb-4">Shopping</h1>
//         <ol>
//             {arr.map((val, i) =>{
//                 return(
//                     <li key={i}>
//                    <span className="mr-5">{val.id}</span> {val.name}<span className="ml-5" 
//                    onClick={()=>obj.add({name:val.name,id:val.id})}>add to cart</span>
//                     </li>
//                 )
//              }) }
//         </ol>

//     </div>
//   )
// }
// export default Shop


// "use client"
// import React, { useContext } from 'react';
// import { CartContext } from './context';

// const Shop = () => {
//     const obj = useContext(CartContext);
//     console.log(obj);
//     const arr = [
//         { name: "productName", id: 1 },  

             
//     ];

//     return (
//         <div className="ml-10">
//             <h1 className="text-left text-2xl ml-10 mb-4">Buy Now</h1>
//             <ol>
//                 {arr.map((val, i) => {
//                     return (
//                         <li key={i}>
//                             <span className="mr-5">{val.id}</span> {val.name}
//                             <button 
//                                 className="ml-5 px-6 py-4 bg-blue-500 text-white rounded"
//                                 onClick={() => obj.add({ name: val.name, id: val.id })}
//                             >
//                                 Add to Cart
//                             </button>
//                         </li>
//                     );
//                 })}
//             </ol>
//         </div>
//     );
// };

// export default Shop;


// "use client";

// import React, { useContext } from "react";
// import { CartContext } from "./context";


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
//               onClick={() => obj.add({ name: val.name, id: val.id })}            >
//               Add to Cart
//             </button>
//           </li>
//         ))}
//       </ol>
//     </div>
//   );
// };

// export default Shop;




"use client";

import React, { useContext } from "react";
import { CartContext } from "./context";
import Link from "next/link";


const Shop = ({ productName }: { productName: string }) => {
  const obj = useContext(CartContext);
  console.log(obj);

  // Dynamically populate the array with productName and ID
  const arr = [
    { name: productName, id: 1 },  // Use the productName dynamically
  ];

  return (
    <div className="ml-10">
      <h1 className="text-left font-bold text-2xl ml-10 mb-4">Buy Now</h1>
      <ol>
        {arr.map((val, i) => (
          <li key={i}>
            <span className="mr-5">{val.id}</span> {val.name}
            <button
              className="ml-5 px-6 py-4 bg-[#B88E2F]     text-white rounded"
              onClick={() => obj.add({ name: val.name, id: val.id })}     >


              Add to Cart
             
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Shop;




// latest code but with errors
// "use client";

// import React, { useContext } from "react";
// import { CartContext } from "./context";
// import { useRouter } from "next/navigation";

// const Shop = ({ productName }: { productName: string }) => {
//   const router = useRouter();
//   const { add } = useContext(CartContext);

//   // Dynamically populate the array with productName and ID
//   const products = [
//     { name: productName, id: 1 }, // Example product
//   ];

//   const handleAddToCart = (product: { name: string; id: number }) => {
//     // Add the product to the cart context
//     add(product);

//     // Redirect to addtocartpage with product ID and Name
//     router.push(`/product/${product.id}/addtocartpage?productName=${encodeURIComponent(product.name)}`);
//   };

//   return (
//     <div className="ml-10">
//       <h1 className="text-left font-bold text-2xl ml-10 mb-4">Buy Now</h1>
//       <ol>
//         {products.map((product, i) => (
//           <li key={i}>
//             <span className="mr-5">{product.id}</span> {product.name}
//             <button
//               className="ml-5 px-6 py-4 bg-[#B88E2F] text-white rounded"
//               onClick={() => handleAddToCart(product)}
//             >
//               Add to Cart
//             </button>
//           </li>
//         ))}
//       </ol>
//     </div>
//   );
// };

// export default Shop;







