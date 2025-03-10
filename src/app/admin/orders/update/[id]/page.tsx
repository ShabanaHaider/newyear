"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import axios from "axios";

type Order = {
  _id: string;
  orderStatus: string;
  paymentStatus: string;
  totalAmount: number;
  orderDate: string;
};

const UpdateOrderPage = () => {
  const { id } = useParams();
  const router = useRouter();
  const [order, setOrder] = useState<Order | null>(null);
  const [orderStatus, setOrderStatus] = useState("");
  const [paymentStatus, setPaymentStatus] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchOrder = async () => {
      try {
        const response = await axios.get(`/api/orders`);
        const foundOrder = response.data.orders.find((o: Order) => o._id === id);
        if (foundOrder) {
          setOrder(foundOrder);
          setOrderStatus(foundOrder.orderStatus);
          setPaymentStatus(foundOrder.paymentStatus);
        } else {
          setError("Order not found.");
        }
      } catch (err) {
        setError("Failed to fetch order.");
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
  }, [id]);

  const handleUpdate = async () => {
    try {
      await axios.put("/api/orders", { 
        orderId: id, 
        orderStatus, 
        paymentStatus 
      });
      alert("Order updated successfully!");
      router.push("/admin/orders");
    } catch (err) {
      setError("Failed to update order.");
    }
  };

  if (loading) return <p>Loading order details...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Update Order</h1>

      {order && (
        <div className="border p-4 rounded-md shadow">
          <p><strong>Order ID:</strong> {order._id}</p>
          <p><strong>Total Amount:</strong> ${order.totalAmount}</p>
          <p><strong>Order Date:</strong> {new Date(order.orderDate).toLocaleDateString()}</p>

          <label className="block mt-4">
            <span className="text-gray-700">Order Status</span>
            <select 
              value={orderStatus} 
              onChange={(e) => setOrderStatus(e.target.value)}
              className="block w-full mt-1 p-2 border rounded"
            >
              <option value="Pending">Pending</option>
              <option value="Processing">Processing</option>
              <option value="Shipped">Shipped</option>
              <option value="Delivered">Delivered</option>
              <option value="Cancelled">Cancelled</option>
            </select>
          </label>

          <label className="block mt-4">
            <span className="text-gray-700">Payment Status</span>
            <select 
              value={paymentStatus} 
              onChange={(e) => setPaymentStatus(e.target.value)}
              className="block w-full mt-1 p-2 border rounded"
            >
              <option value="Pending">Pending</option>
              <option value="Paid">Paid</option>
              <option value="Refunded">Refunded</option>
            </select>
          </label>

          <button 
            onClick={handleUpdate} 
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Save Changes
          </button>
        </div>
      )}
    </div>
  );
};

export default UpdateOrderPage;
