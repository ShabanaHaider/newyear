// "use client";
// import React, { useContext } from "react";
// import { CartContext } from "./context";

// const Cart = () => {
//   const { cart, del } = useContext(CartContext);

//   return (
//     <div className="ml-10">
//       <h1 className="text-left ml-10 mb-4">Cart</h1>
//       <p>Total Products: {cart.length}</p> {/* Display total products */}
//       <ol>
//         {cart.length > 0 ? (
//           cart.map((val, i) => (
//             <li key={i}>
//               <span className="mr-5">{val.id}</span> {val.name}
//               <button
//                 className="ml-5 px-10 py-4 bg-blue-500 text-white rounded"
//                 onClick={() => del(val.id)}
                
//               >
//                 Delete from Cart
//               </button>
//             </li>
//           ))
//         ) : (
//           <p>No items in the cart</p>
//         )}
//       </ol>
//     </div>
//   );
// };

// export default Cart;


"use client";
import React, { useContext } from "react";
import { CartContext } from "./context"; // Ensure the correct path to your context file

const Cart = ({ productName }: { productName: string }) => {
  const { cart, del } = useContext(CartContext);

  return (
    <div className="ml-10">
      <h1 className="text-left font-bold text-2xl ml-10 mb-4">Cart</h1>
      {/* Display total number of products */}
      <p className="text-lg">Total Products:</p><p className="text-lg font-bold">{productName} {cart.length}</p>  


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
                className="px-6 py-4 bg-red-500 text-white rounded"                
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


