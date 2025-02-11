// /app/admin/orders/page.tsx this is the component where your are 
//  calling the /api/orders endpoint to fetch orders.

"use client";
import React, { useEffect, useState } from "react";

const AdminOrdersPage = () => {
  const [orders, setOrders] = useState<any[]>([]); // Update type for orders
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await fetch("/api/orders");
      const data = await response.json();

      if (data.success) {
        setOrders(data.orders);
      } else {
        alert("Failed to fetch orders.");
      }
    } catch (error) {
      console.error("Error fetching orders:", error);
      alert("Error fetching orders.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Admin Orders</h1>

      {loading ? (
        <p>Loading orders...</p>
      ) : orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">Order ID</th>
              <th className="border p-2">Customer</th>
              <th className="border p-2">Product</th>
              <th className="border p-2">Quantity</th>
              <th className="border p-2">Total Price</th>
              <th className="border p-2">Payment Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id} className="text-center">
                <td className="border p-2">{order.orderId}</td>
                <td className="border p-2">{order.customerName}</td>
                <td className="border p-2">{order.productDescription}</td>
                <td className="border p-2">{order.quantitySold}</td>
                <td className="border p-2">${order.priceafterTax?.toFixed(2)}</td> {/* Handling missing data */}
                <td className="border p-2">{order.paymentStatus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminOrdersPage;



// component method by sir ali jawwad

// "use client"
// import React, { useState } from 'react'
// import { useRouter } from 'next/navigation'


// const UserForm = () => {
//     const router = useRouter()
//     // The value which is reflected in usestate will be refected in input 
//     // field i,e if we write Sara Khan in usestate it will reflect in input fied
//     const [name, setName] = useState('')
//     console.log(name)

//     const handleSubmit = async (e: any) => {
//         e.preventDefault()

//         const url = await fetch('/api/hello', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({ name })
//         })
//         await url.json()
//         router.refresh()
//     }

//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <input
//                     value={name}
//                     onChange={(e: any) => setName(e.target.value)}
//                     className="bg-slate-600 text-white"
//                     type="text"
//                     placeholder="Enter Product" />
//                 <button type="submit" >Submit</button>
//             </form>
//         </div>
//     )
// }

// export default UserForm





// page.tsx file

// import UserForm from "./components/UserForm";

// export default async function Home() {

//   const url = await fetch('http://localhost:3000/api/hello', {
//     cache: 'no-store'
//   })
//   const res = await url.json()
//   console.log(res)

//   return (
//     <div>
//       <UserForm />

//       {
//         res.map((product: any) => (
//           <h1>{product.name}</h1>
//         ))
//       }
//     </div>
//   );
// }
