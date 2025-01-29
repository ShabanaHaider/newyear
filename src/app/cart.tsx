
"use client";

import React, { useContext } from "react";
import { CartContext } from "./context"; // Ensure the correct path to your context file

interface CartProps {
  productName: string; // Define the prop type for productName
}

const Cart: React.FC<CartProps> = ({ productName }) => {
  const { cart, del } = useContext(CartContext); // Access cart and delete function from context

  return (
    <div className="ml-10">
      <h1 className="text-left font-bold text-2xl ml-10 mb-4">Cart</h1>
      {/* Display total number of products */}
      <p className="text-lg">
        Total Products: <span className="font-bold">{cart.length}</span>
      </p>
      <p className="text-lg">
        Product Name: <span className="font-bold">{productName}</span>
      </p>

      <ol className="mt-4">
        {cart.length > 0 ? (
          cart.map((val, i) => (
            <li
              key={i}
              className="flex items-center mb-2 border-b pb-2 border-gray-200"
            >
              <span className="mr-5 text-gray-700 font-medium">{val.id}</span>
              <span className="flex-1 text-gray-800">{val.name}</span>

              <button
                className="px-6 py-4 bg-[#B88E2F] text-white rounded"
                onClick={() => del(val.id)} // Pass the ID to the delete function
              >
                Delete from Cart
              </button>
            </li>
          ))
        ) : (
          <p className="text-gray-600 mt-4">No items in the cart</p>
        )}
      </ol>
    </div>
  );
};

export default Cart;





// "use client";

// import React, { useContext } from "react";
// import { CartContext } from "./context"; // Ensure the correct path to your context file

// interface CartProps {
//   productName: string; // Define the prop type for productName
// }

// const Cart: React.FC<CartProps> = ({ productName }) => {
//   const { cart, del } = useContext(CartContext); // Access cart and delete function from context

//   return (
//     <div className="ml-10">
//       <h1 className="text-left font-bold text-2xl ml-10 mb-4">Cart</h1>
//       {/* Display total number of products */}
//       <p className="text-lg">
//         Total Products: <span className="font-bold">{cart.length}</span>
//       </p>
//       <p className="text-lg">
//         Product Name: <span className="font-bold">{productName}</span>
//       </p>

//       <ol className="mt-4">
//         {cart.length > 0 ? (
//           cart.map((val, i) => (
//             <li
//               key={i}
//               className="flex items-center mb-2 border-b pb-2 border-gray-200"
//             >
//               <span className="mr-5 text-gray-700 font-medium">{val.id}</span>
//               <span className="flex-1 text-gray-800">{val.name}</span>

//               <button
//                 className="px-6 py-4 bg-[#B88E2F] text-white rounded"
//                 onClick={() => del(val.id)} // Pass the ID to the delete function
//               >
//                 Delete from Cart
//               </button>
//             </li>
//           ))
//         ) : (
//           <p className="text-gray-600 mt-4">No items in the cart</p>
//         )}
//       </ol>
//     </div>
//   );
// };

// export default Cart;
  


