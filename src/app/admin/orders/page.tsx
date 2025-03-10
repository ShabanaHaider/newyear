// /app/admin/orders/page.tsx this is the component where your are 
//  calling the /api/orders endpoint to fetch orders.

// "use client";
// import React, { useEffect, useState } from "react";

// const AdminOrdersPage = () => {
//   const [orders, setOrders] = useState<any[]>([]); // Update type for orders
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchOrders();
//   }, []);

//   const fetchOrders = async () => {
//     try {
//       const response = await fetch("/api/orders");
//       const data = await response.json();

//       if (data.success) {
//         setOrders(data.orders);
//       } else {
//         alert("Failed to fetch orders.");
//       }
//     } catch (error) {
//       console.error("Error fetching orders:", error);
//       alert("Error fetching orders.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="container mx-auto p-6">
//       <h1 className="text-2xl font-bold mb-6">Admin Orders</h1>

//       {loading ? (
//         <p>Loading orders...</p>
//       ) : orders.length === 0 ? (
//         <p>No orders found.</p>
//       ) : (
//         <table className="w-full border-collapse border border-gray-300">
//           <thead>
//             <tr className="bg-gray-100">
//               <th className="border p-2">Order ID</th>
//               <th className="border p-2">Customer</th>
//               <th className="border p-2">Product</th>
//               <th className="border p-2">Quantity</th>
//               <th className="border p-2">Total Price</th>
//               <th className="border p-2">Payment Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {orders.map((order) => (
//               <tr key={order._id} className="text-center">
//                 <td className="border p-2">{order.orderId}</td>
//                 <td className="border p-2">{order.customerName}</td>
//                 <td className="border p-2">{order.productDescription}</td>
//                 <td className="border p-2">{order.quantitySold}</td>
//                 <td className="border p-2">${order.priceafterTax?.toFixed(2)}</td> {/* Handling missing data */}
//                 <td className="border p-2">{order.paymentStatus}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default AdminOrdersPage;


// adjusted code for multiple orders



// "use client";
// import React, { useEffect, useState } from "react";

// const AdminOrdersPage = () => {
//   const [orders, setOrders] = useState<any[]>([]); // Update type for orders
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchOrders();
//   }, []);

//   const fetchOrders = async () => {
//     try {
//       const response = await fetch("/api/orders");
//       const data = await response.json();

//       if (data.success) {
//         setOrders(data.orders);
//       } else {
//         alert("Failed to fetch orders.");
//       }
//     } catch (error) {
//       console.error("Error fetching orders:", error);
//       alert("Error fetching orders.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="container mx-auto p-6">
//       <h1 className="text-2xl font-bold mb-6">Admin Orders</h1>

//       {loading ? (
//         <p>Loading orders...</p>
//       ) : orders.length === 0 ? (
//         <p>No orders found.</p>
//       ) : (
//         <table className="w-full border-collapse border border-gray-300">
//           <thead>
//             <tr className="bg-gray-100">
//               <th className="border p-2">Order ID</th>
//               <th className="border p-2">Customer</th>
//               <th className="border p-2">Product</th>
//               <th className="border p-2">Quantity</th>
//               <th className="border p-2">Total Price</th>
//               <th className="border p-2">Payment Status</th>
//               <th className="border p-2">Order Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {orders.map((order) => (
//               <tr key={order._id} className="text-center">
//                 <td className="border p-2">{order.orderId}</td>
//                 <td className="border p-2">{order.customerName}</td>
//                 <td className="border p-2">
//                   {order.productDetails.map((product: any, index: number) => (
//                     <div key={index}>
//                       {product.productName} (x{product.quantitySold})
//                     </div>
//                   ))}
//                 </td>
//                 <td className="border p-2">
//                   {order.productDetails.reduce(
//                     (total: number, product: any) => total + product.quantitySold,
//                     0
//                   )}
//                 </td>
//                 <td className="border p-2">${order.totalAmount?.toFixed(2)}</td>
//                 <td className="border p-2">{order.paymentStatus}</td>
//                 <td className="border p-2">
//                   {order.orderStatus?.join(", ")}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default AdminOrdersPage;


// updated Admin Order page




// "use client";
// import React, { useEffect, useState } from "react";

// // Define the Order type
// type Order = {
//   _id: string;
//   customerId: string;
//   totalAmount: number;
//   paymentStatus: string;
//   orderStatus: string;
// };

// const AdminOrdersPage = () => {
//   const [orders, setOrders] = useState<Order[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [statusUpdating, setStatusUpdating] = useState(false);

//   useEffect(() => {
//     fetchOrders();
//   }, []);

//   const fetchOrders = async () => {
//     setLoading(true);
//     try {
//       const response = await fetch("/api/orders");
//       if (!response.ok) throw new Error("Failed to fetch orders");

//       const data = await response.json();
//       if (data.success) {
//         setOrders(data.orders);
//       } else {
//         console.error("API Error:", data.message);
//       }
//     } catch (error) {
//       console.error("Error fetching orders:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const updateOrderStatus = async (orderId: string, newStatus: string) => {
//     setStatusUpdating(true);
//     try {
//       const response = await fetch(`/api/orders/${orderId}`, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ orderStatus: newStatus }),
//       });

//       const data = await response.json();
//       if (!data.success) throw new Error(data.message || "Failed to update order status");

//       fetchOrders(); // Refresh orders after updating
//     } catch (error) {
//       console.error("Error updating order status:", error);
//     } finally {
//       setStatusUpdating(false);
//     }
//   };

//   return (
//     <div className="container mx-auto p-6">
//       <h1 className="text-2xl font-bold mb-6">Admin Orders</h1>
//       {loading ? (
//         <p>Loading orders...</p>
//       ) : orders.length === 0 ? (
//         <p>No orders found.</p>
//       ) : (
//         <table className="w-full border-collapse border border-gray-300">
//           <thead>
//             <tr className="bg-gray-100">
//               <th className="border p-2">Order ID</th>
//               <th className="border p-2">Customer</th>
//               <th className="border p-2">Total Price</th>
//               <th className="border p-2">Payment Status</th>
//               <th className="border p-2">Order Status</th>
//               <th className="border p-2">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {orders.map((order) => (
//               <tr key={order._id} className="text-center">
//                 <td className="border p-2">{order._id}</td>
//                 <td className="border p-2">{order.customerId || "Unknown"}</td>
//                 <td className="border p-2">${order.totalAmount.toFixed(2)}</td>
//                 <td className="border p-2">{order.paymentStatus || "Pending"}</td>
//                 <td className="border p-2">{order.orderStatus || "Processing"}</td>
//                 <td className="border p-2">
//                   <button
//                     className="bg-blue-500 text-white px-2 py-1 rounded"
//                     onClick={() => updateOrderStatus(order._id, "processing")}
//                     disabled={statusUpdating}
//                   >
//                     Mark as Processing
//                   </button>
//                   <button
//                     className="bg-green-500 text-white px-2 py-1 ml-2 rounded"
//                     onClick={() => updateOrderStatus(order._id, "shipped")}
//                     disabled={statusUpdating}
//                   >
//                     Mark as Shipped
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default AdminOrdersPage;


// "use client";

// import { useEffect, useState } from "react";
// import { client } from "@/sanity/lib/client";

// interface Customer {
//     customerId: string;
//     customerName: string;
//     customerEmail: string;
//     customerAddress?: {
//         houseAddress?: string;
//         area?: string;
//         city?: string;
//     };
//     customerMobileNumber: string;
// }

// interface Order {
//     _id: string;
//     orderStatus: string;
//     customer: Customer | null;
// }

// export default function AdminOrders() {
//     const [orders, setOrders] = useState<Order[]>([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState<string | null>(null);

//     useEffect(() => {
//         const fetchOrders = async () => {
//             try {
//                 const query = `*[_type == "order"]{
//                     _id,
//                     orderStatus,
//                     customer->{ 
//                         customerId, 
//                         customerName, 
//                         customerEmail, 
//                         customerAddress, 
//                         customerMobileNumber 
//                     }
//                 }`;
//                 const data: Order[] = await client.fetch(query);
//                 setOrders(data);
//             } catch (err) {
//                 setError("Failed to fetch orders.");
//                 console.error(err);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchOrders();
//     }, []);

//     if (loading) return <p>Loading orders...</p>;
//     if (error) return <p className="text-red-500">{error}</p>;

//     return (
//         <div className="p-6">
//             <h1 className="text-2xl font-bold mb-4">Admin Orders</h1>
//             {orders.length === 0 ? (
//                 <p>No orders found.</p>
//             ) : (
//                 <div className="space-y-4">
//                     {orders.map((order) => (
//                         <div key={order._id} className="border p-4 rounded-md shadow">
//                             <p><strong>Order ID:</strong> {order._id}</p>
//                             <p><strong>Status:</strong> {order.orderStatus}</p>
//                             {order.customer ? (
//                                 <>
//                                     <p><strong>Customer:</strong> {order.customer.customerName || "Unknown"}</p>
//                                     <p><strong>Email:</strong> {order.customer.customerEmail || "N/A"}</p>
//                                     <p><strong>Phone:</strong> {order.customer.customerMobileNumber || "N/A"}</p>
//                                     {order.customer.customerAddress && (
//                                         <p>
//                                             <strong>Address:</strong>{" "}
//                                             {order.customer.customerAddress.houseAddress}, 
//                                             {order.customer.customerAddress.area}, 
//                                             {order.customer.customerAddress.city}
//                                         </p>
//                                     )}
//                                 </>
//                             ) : (
//                                 <p className="text-gray-500">No customer details available.</p>
//                             )}
//                         </div>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// }   



// motivated 

// import { useEffect, useState } from "react";
// import { client } from "@/sanity/lib/client";

// export default function AdminOrders() {
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [selectedOrder, setSelectedOrder] = useState(null);
//   const [updatedStatus, setUpdatedStatus] = useState("");

//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const data = await client.fetch(`*[_type == "order"]{ 
//           _id, orderStatus, paymentStatus, totalAmount, 
//           customer->{customerName, customerEmail, customerMobileNumber}, 
//           shippingAddress, productDetails
//         }`);
//         setOrders(data);
//       } catch (err) {
//         setError("Failed to fetch orders.");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchOrders();
//   }, []);

//   const updateOrderStatus = async (orderId) => {
//     try {
//       const res = await fetch("/api/orders", {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ orderId, orderStatus: updatedStatus })
//       });
//       if (res.ok) {
//         const updatedOrder = await res.json();
//         setOrders(orders.map(o => o._id === orderId ? updatedOrder.order : o));
//       }
//     } catch (error) {
//       console.error("Error updating order status:", error);
//     }
//   };

//   if (loading) return <p>Loading orders...</p>;
//   if (error) return <p className="text-red-500">{error}</p>;

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">Admin Orders</h1>
//       {orders.map((order) => (
//         <div key={order._id} className="border p-4 rounded-md shadow">
//           <p><strong>Order ID:</strong> {order._id}</p>
//           <p><strong>Status:</strong> {order.orderStatus}</p>
//           <p><strong>Payment:</strong> {order.paymentStatus}</p>
//           <p><strong>Total:</strong> ${order.totalAmount}</p>
//           <p><strong>Customer:</strong> {order.customer?.customerName || "Unknown"}</p>
//           <button onClick={() => setSelectedOrder(order)} className="text-blue-500 underline">Update</button>
//         </div>
//       ))}
//       {selectedOrder && (
//         <div className="p-4 border mt-4">
//           <h2>Update Order</h2>
//           <select value={updatedStatus} onChange={(e) => setUpdatedStatus(e.target.value)}>
//             <option value="pending">Pending</option>
//             <option value="processing">Processing</option>
//             <option value="shipped">Shipped</option>
//             <option value="delivered">Delivered</option>
//             <option value="cancelled">Cancelled</option>
//           </select>
//           <button onClick={() => updateOrderStatus(selectedOrder._id)} className="ml-2 bg-blue-500 text-white px-4 py-2 rounded">Save</button>
//         </div>
//       )}
//     </div>
//   );
// }



// motivated 2  

// "use client";

// import { useEffect, useState } from "react";
// import axios from "axios";

// type Customer = {
//   name: string;
//   email: string;
// };

// type Order = {
//   _id: string;
//   orderStatus: string;
//   paymentStatus: string;
//   totalAmount: number;
//   customer: Customer;
// };

// const AdminOrdersPage = () => {
//   const [orders, setOrders] = useState<Order[]>([]);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const response = await axios.get("/api/orders");
//         setOrders(response.data);
//       } catch (error) {
//         setError("Failed to fetch orders.");
//       }
//     };

//     fetchOrders();
//   }, []);

//   const handleOrderAction = (order: Order) => {
//     console.log("Order ID:", order._id);
//     console.log("Order Status:", order.orderStatus);
//   };

//   return (
//     <div>
//       <h1>Admin Orders</h1>
//       {error && <p>{error}</p>}
//       <ul>
//         {orders.map((order) => (
//           <li key={order._id}>
//             <p>Order ID: {order._id}</p>
//             <p>Status: {order.orderStatus}</p>
//             <p>Payment: {order.paymentStatus}</p>
//             <p>Total: ${order.totalAmount}</p>
//             <p>Customer: {order.customer.name} ({order.customer.email})</p>
//             <button onClick={() => handleOrderAction(order)}>Update Order</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default AdminOrdersPage;


// code for debugging purpose  


// "use client";

// import { useEffect, useState } from "react";
// import axios from "axios";

// // ✅ Define `Order` type before using it
// type Customer = {
//   name: string;
//   email: string;
// };

// type Order = {
//   _id: string;
//   orderStatus: string;
//   paymentStatus: string;
//   totalAmount: number;
//   customer: Customer;
// };

// const AdminOrdersPage = () => {
//   const [orders, setOrders] = useState<Order[]>([]);  // ✅ Now TypeScript recognizes `Order`
//   const [error, setError] = useState<string | null>(null);

  
//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const response = await axios.get("/api/orders");
//         console.log("API Response:", response.data); // Debugging
//         if (response.data.success) {
//           setOrders(response.data.orders); // ✅ Fix: Extract `orders` correctly
//         } else {
//           setOrders([]); // If no orders found, set an empty array
//         }
//       } catch (error) {
//         console.error("Error fetching orders:", error);
//         setError("Failed to fetch orders.");
//       }
//     };
  
//     fetchOrders();
//   }, []);



//   return (
//     <div>
//       <h1>Admin Orders</h1>
//       {error && <p>{error}</p>}
//       <ul>
//         {orders.map((order) => (
//           <li key={order._id}>
//             <p>Order ID: {order._id}</p>
//             <p>Status: {order.orderStatus}</p>
//             <p>Payment: {order.paymentStatus}</p>
//             <p>Total: ${order.totalAmount}</p>



//             {/* <p>Customer: {order.customer.name} ({order.customer.email})</p> */}
//             Customer: {order.customer?.name || "Unknown"} ({order.customer?.email || "No email"})




//             <button onClick={() => console.log("Update Order", order)}>Update Order</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default AdminOrdersPage;


// refined late night


// "use client";

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import axios from "axios";

// type Customer = {
//   customerId: string;
//   customerName: string;
//   customerEmail: string;
//   customerMobileNumber: string;
//   customerAddress?: {
//     houseAddress?: string;
//     area?: string;
//     city?: string;
//   };
// };

// type Order = {
//   _id: string;
//   orderStatus: string;
//   paymentStatus: string;
//   totalAmount: number;
//   orderDate: string;
//   customer: Customer | null;
// };

// const AdminOrdersPage = () => {
//   const [orders, setOrders] = useState<Order[]>([]);
//   const [error, setError] = useState<string | null>(null);
//   const router = useRouter();

//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const response = await axios.get("/api/orders");
//         console.log("API Response:", response.data);
//         if (response.data.success) {
//           setOrders(response.data.orders);
//         } else {
//           setOrders([]);
//         }
//       } catch (error) {
//         console.error("Error fetching orders:", error);
//         setError("Failed to fetch orders.");
//       }
//     };

//     fetchOrders();
//   }, []);

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">Admin Orders</h1>
//       {error && <p className="text-red-500">{error}</p>}
      
//       {orders.length === 0 ? (
//         <p>No orders found.</p>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {orders.map((order) => (
//             <div key={order._id} className="border p-4 rounded-md shadow">
//               <p><strong>Order ID:</strong> {order._id}</p>
//               <p><strong>Status:</strong> {order.orderStatus}</p>
//               <p><strong>Payment:</strong> {order.paymentStatus}</p>
//               <p><strong>Total:</strong> ${order.totalAmount}</p>
//               <p><strong>Order Date:</strong> {new Date(order.orderDate).toLocaleDateString()}</p>

//               {order.customer ? (
//                 <>
//                   <p><strong>Customer:</strong> {order.customer.customerName || "Unknown"}</p>
//                   <p><strong>Email:</strong> {order.customer.customerEmail || "N/A"}</p>
//                   <p><strong>Phone:</strong> {order.customer.customerMobileNumber || "N/A"}</p>
//                   {order.customer.customerAddress && (
//                     <p>
//                       <strong>Address:</strong>{" "}
//                       {order.customer.customerAddress.houseAddress}, 
//                       {order.customer.customerAddress.area}, 
//                       {order.customer.customerAddress.city}
//                     </p>
//                   )}
//                 </>
//               ) : (
//                 <p className="text-gray-500">No customer details available.</p>
//               )}

//               <button 
//                 onClick={() => router.push(`/admin/orders/update/${order._id}`)}
//                 className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
//               >
//                 Update Order
//               </button>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default AdminOrdersPage;


// Saturday


// "use client";

// import { useEffect, useState } from "react";
// import axios from "axios";
// import Link from "next/link";

// type Customer = {
//   customerName: string;
//   customerEmail: string;
//   customerMobileNumber: string;
// };

// type Order = {
//   _id: string;
//   orderStatus: string;
//   paymentStatus: string;
//   totalAmount: number;
//   orderDate: string;
//   customer?: Customer | null;
// };

// const AdminOrdersPage = () => {
//   const [orders, setOrders] = useState<Order[]>([]);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const response = await axios.get("/api/orders");
//         if (response.data.success) {
//           setOrders(response.data.orders);
//         } else {
//           setOrders([]);
//         }
//       } catch (error) {
//         console.error("Error fetching orders:", error);
//         setError("Failed to fetch orders.");
//       }
//     };

//     fetchOrders();
//   }, []);

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">Admin Orders</h1>
//       {error && <p className="text-red-500">{error}</p>}

//       {orders.length === 0 ? (
//         <p>No orders found.</p>
//       ) : (
//         <div className="space-y-4">
//           {orders.map((order) => (
//             <div key={order._id} className="border p-4 rounded-md shadow">
//               <p><strong>Order ID:</strong> {order._id}</p>
//               <p><strong>Status:</strong> {order.orderStatus}</p>
//               <p><strong>Payment:</strong> {order.paymentStatus}</p>
//               <p><strong>Total:</strong> ${order.totalAmount || "N/A"}</p>
//               <p><strong>Order Date:</strong> {new Date(order.orderDate).toLocaleDateString()}</p>

//               {order.customer ? (
//                 <>
//                   <p><strong>Customer:</strong> {order.customer.customerName || "Unknown"}</p>
//                   <p><strong>Email:</strong> {order.customer.customerEmail || "N/A"}</p>
//                   <p><strong>Phone:</strong> {order.customer.customerMobileNumber || "N/A"}</p>
//                 </>
//               ) : (
//                 <p className="text-gray-500">No customer details available.</p>
//               )}

//               <Link href={`/admin/orders/update/${order._id}`}>
//                 <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
//                   Update Order
//                 </button>
//               </Link>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default AdminOrdersPage;

// details of order and customer not showing in admin dashboard fix2 


// "use client";

// import { useEffect, useState } from "react";
// import axios from "axios";

// type Customer = {
//   _id: string; 
//   customerName: string;
//   customerEmail: string;
//   customerMobileNumber: string;
// };

// type Order = {
//   _id: string;
//   orderStatus: string;
//   paymentStatus: string;
//   totalAmount: number;

//   shippingAddress: {
//     houseAddress: string;
//     area: string;
//     city: string;
//   };
  
//   productDetails: string;
//   paymentMethod: string;
//   quantitySold: number;
//   salesTax: number;
//   priceafterTax: number;
//   customer: Customer;
// };

// const AdminOrdersPage = () => {
//   const [orders, setOrders] = useState<Order[]>([]);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const response = await axios.get("/api/orders");
//         console.log("API Response:", response.data); // Debugging

//         if (response.data.success) {
//           setOrders(response.data.orders);
//         } else {
//           setOrders([]);
//         }
//       } catch (error) {
//         console.error("Error fetching orders:", error);
//         setError("Failed to fetch orders.");
//       }
//     };

//     fetchOrders();
//   }, []);

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">Admin Orders</h1>
//       {error && <p className="text-red-500">{error}</p>}

//       {orders.length === 0 ? (
//         <p>No orders found.</p>
//       ) : (
//         <div className="space-y-4">
//           {orders.map((order) => (
//             <div key={order._id} className="border p-4 rounded-md shadow bg-white">
//               <p><strong>Order ID:</strong> {order._id}</p>
//               <p><strong>Status:</strong> {order.orderStatus}</p>
//               <p><strong>Payment Status:</strong> {order.paymentStatus}</p>
//               <p><strong>Total Amount:</strong> ${order.totalAmount}</p>
//               <p><strong>Payment Method:</strong> {order.paymentMethod}</p>
//               <p><strong>Quantity Sold:</strong> {order.quantitySold}</p>
//               <p><strong>Sales Tax:</strong> ${order.salesTax}</p>
//               <p><strong>Price After Tax:</strong> ${order.priceafterTax}</p>
//               {/* <p><strong>Shipping Address:</strong> {order.shippingAddress}</p> */}

              
//               {/* <p><strong>Shipping Address:</strong> {`${order.shippingAddress.houseAddress}, ${order.shippingAddress.area}, ${order.shippingAddress.city}`}</p> */}

//               <p><strong>Shipping Address:</strong> 
//   {order.shippingAddress
//     ? `${order.shippingAddress.houseAddress}, ${order.shippingAddress.area}, ${order.shippingAddress.city}`
//     : "No shipping address provided"}
// </p>


//               {/* <p><strong>Product Details:</strong> {order.productDetails}</p> */}
//               <p><strong>Products:</strong></p>


// {Array.isArray(order.productDetails) && order.productDetails.length > 0 ? (
//   order.productDetails
//     .filter((product: any) => product !== null) // ✅ Ignore null values
//     .map((product: any) => (
//       <p key={product?._id ?? Math.random()}>
//         <strong>{product?.productName ?? "Unknown Product"}</strong> - ${product?.price ?? "N/A"}
//       </p>
//     ))
// ) : (
//   <p>No products in this order</p>
// )}


// <p><strong>Customer:</strong></p>

// {order.customer ? (
//   <>
//     <p><strong>Name:</strong> {order.customer.customerName || "N/A"}</p>
//     <p><strong>Email:</strong> {order.customer.customerEmail || "N/A"}</p>
//     <p><strong>Mobile:</strong> {order.customer.customerMobileNumber || "N/A"}</p>
//   </>
// ) : (
//   <p>No customer details available</p>
// )}
             
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default AdminOrdersPage;


// impossible 

// "use client";

// import { useEffect, useState } from "react";
// import axios from "axios";

// type Customer = {
//   _id: string; 
//   customerName: string;
//   customerEmail: string;
//   customerMobileNumber: string;
// };

// type Product = {
//   _id: string;
//   productName: string;
//   price: number;
// };

// type Order = {
//   _id: string;
//   orderStatus: string;
//   paymentStatus: string;
//   totalAmount: number;
//   shippingAddress?: {
//     houseAddress?: string;
//     area?: string;
//     city?: string;
//   };
//   productDetails: Product[];
//   paymentMethod: string;
//   quantitySold: number;
//   salesTax: number;
//   priceafterTax: number;
//   customer?: Customer;
// };

// const AdminOrdersPage = () => {
//   const [orders, setOrders] = useState<Order[]>([]);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const response = await axios.get("/api/orders");
//         console.log("API Response:", response.data); // Debugging

//         if (response.data.success) {
//           setOrders(response.data.orders);
//         } else {
//           setOrders([]);
//         }
//       } catch (error) {
//         console.error("Error fetching orders:", error);
//         setError("Failed to fetch orders.");
//       }
//     };

//     fetchOrders();
//   }, []);

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">Admin Orders</h1>
//       {error && <p className="text-red-500">{error}</p>}

//       {orders.length === 0 ? (
//         <p>No orders found.</p>
//       ) : (
//         <div className="space-y-4">
//           {orders.map((order) => (
//             <div key={order._id} className="border p-4 rounded-md shadow bg-white">
//               <p><strong>Order ID:</strong> {order._id}</p>
//               <p><strong>Status:</strong> {order.orderStatus}</p>
//               <p><strong>Payment Status:</strong> {order.paymentStatus}</p>
//               <p><strong>Total Amount:</strong> ${order.totalAmount}</p>
//               <p><strong>Payment Method:</strong> {order.paymentMethod}</p>
//               <p><strong>Quantity Sold:</strong> {order.quantitySold}</p>
//               <p><strong>Sales Tax:</strong> ${order.salesTax}</p>
//               <p><strong>Price After Tax:</strong> ${order.priceafterTax}</p>

//               <p><strong>Shipping Address:</strong> 
//                 {order.shippingAddress
//                   ? `${order.shippingAddress.houseAddress || "N/A"}, ${order.shippingAddress.area || "N/A"}, ${order.shippingAddress.city || "N/A"}`
//                   : "No shipping address provided"}
//               </p>

//               <p><strong>Products:</strong></p>
//               {Array.isArray(order.productDetails) && order.productDetails.length > 0 ? (
//                 order.productDetails.map((product) => (
//                   product ? (  
//                     <p key={product._id}>
//                       <strong>{product.productName || "Unnamed Product"}</strong> - ${product.price || 0}
//                     </p>
//                   ) : (
//                     <p key={Math.random()}>Invalid product data</p> 
//                   )
//                 ))
//               ) : (
//                 <p>No products in this order</p>
//               )}

//               <p><strong>Customer:</strong></p>
//               {order.customer ? (
//                 <>
//                   <p><strong>Name:</strong> {order.customer.customerName || "N/A"}</p>
//                   <p><strong>Email:</strong> {order.customer.customerEmail || "N/A"}</p>
//                   <p><strong>Mobile:</strong> {order.customer.customerMobileNumber || "N/A"}</p>
//                 </>
//               ) : (
//                 <p>No customer details available</p>
//               )}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default AdminOrdersPage;   


// tuesday work


"use client";

import { useEffect, useState } from "react";
import axios from "axios";

type Customer = {
  _id: string; 
  customerName: string;
  customerEmail: string;
  customerMobileNumber: string;
};

type Product = {
  _id: string;
  productName: string;
  price: number;
};

type Order = {
  _id: string;
  orderStatus: string;
  paymentStatus: string;
  totalAmount: number;
  shippingAddress?: {
    houseAddress?: string;
    area?: string;
    city?: string;
  };
  productDetails: Product[];
  paymentMethod: string;
  quantitySold: number;
  salesTax: number;
  priceafterTax: number;
  // customer?: Customer; // ✅ Change from customerId to customer
  customer: Customer | null; // ✅ Ensure it's either Customer or null
};


const AdminOrdersPage = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get("/api/orders");
        console.log("API Response:", response.data); // Check if customer is populated correctly
        if (response.data.success) {
          setOrders(response.data.orders);
        } else {
          setOrders([]);
        }
      } catch (error) {
        console.error("Error fetching orders:", error);
        setError("Failed to fetch orders.");
      }
    };
  
    fetchOrders();
  }, []);
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Orders</h1>
      {error && <p className="text-red-500">{error}</p>}

      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => (
            <div key={order._id} className="border p-4 rounded-md shadow bg-white">
                       
              <p><strong>Order ID:</strong> {order._id}</p>
              <p><strong>Status:</strong> {order.orderStatus}</p>
              <p><strong>Payment Status:</strong> {order.paymentStatus}</p>
              <p><strong>Total Amount:</strong> ${order.totalAmount}</p>
              <p><strong>Payment Method:</strong> {order.paymentMethod}</p>
              <p><strong>Quantity Sold:</strong> {order.quantitySold}</p>
              <p><strong>Sales Tax:</strong> ${order.salesTax}</p>
              <p><strong>Price After Tax:</strong> ${order.priceafterTax}</p>

              <p><strong>Shipping Address:</strong> 
                {order.shippingAddress
                  ? `${order.shippingAddress.houseAddress || "N/A"}, ${order.shippingAddress.area || "N/A"}, ${order.shippingAddress.city || "N/A"}`
                  : "No shipping address provided"}
              </p>

              <p><strong>Products:</strong></p>
              {Array.isArray(order.productDetails) && order.productDetails.length > 0 ? (
                order.productDetails.map((product) => (
                  product ? (  
                    <p key={product._id}>
                      <strong>{product.productName || "Unnamed Product"}</strong> - ${product.price || 0}
                    </p>
                  ) : (
                    <p key={Math.random()}>Invalid product data</p> 
                  )
                ))
              ) : (
                <p>No products in this order</p>
              )}

              <p><strong>Customer:</strong></p>
              {order.customer ? (
                <>
                 
<p><strong>Name:</strong> {order.customer.customerName || "N/A"}</p>
                 <p><strong>Email:</strong> {order.customer.customerEmail || "N/A"}</p>
                  <p><strong>Mobile:</strong> {order.customer.customerMobileNumber || "N/A"}</p>

                </>
              ) : (
                <p>No customer details available</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminOrdersPage;





