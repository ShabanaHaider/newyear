"use client";
import React, { useState } from "react";

const CreateOrderPage = () => {
  const [orderData, setOrderData] = useState({
    productId: "",
    customerId: "",
    quantitySold: 1,
    price: 0,
    salesTax: 0,
    priceafterTax: 0,
    paymentStatus: "pending",
    productDescription: "",
    customerName: "",
    shippingAddress: { houseAddress: "", area: "", city: "" },
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setOrderData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Call the API to post the order
    await createOrder(orderData);
  };

  // Function to post order data to API
  const createOrder = async (orderData: any) => {
    try {
      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });
      const data = await response.json();
      if (data.success) {
        alert('Order created successfully!');
        // Optionally, reset form here if successful
        setOrderData({
          productId: "",
          customerId: "",
          quantitySold: 1,
          price: 0,
          salesTax: 0,
          priceafterTax: 0,
          paymentStatus: "pending",
          productDescription: "",
          customerName: "",
          shippingAddress: { houseAddress: "", area: "", city: "" },
        });
      } else {
        alert('Failed to create order.');
      }
    } catch (error) {
      console.error('Error creating order:', error);
      alert('Error creating order.');
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Create New Order</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2">Product ID</label>
          <input
            type="text"
            name="productId"
            value={orderData.productId}
            onChange={handleInputChange}
            className="border p-2 w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Customer ID</label>
          <input
            type="text"
            name="customerId"
            value={orderData.customerId}
            onChange={handleInputChange}
            className="border p-2 w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Quantity Sold</label>
          <input
            type="number"
            name="quantitySold"
            value={orderData.quantitySold}
            onChange={handleInputChange}
            className="border p-2 w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Price</label>
          <input
            type="number"
            name="price"
            value={orderData.price}
            onChange={handleInputChange}
            className="border p-2 w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Sales Tax</label>
          <input
            type="number"
            name="salesTax"
            value={orderData.salesTax}
            onChange={handleInputChange}
            className="border p-2 w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Product Description</label>
          <textarea
            name="productDescription"
            value={orderData.productDescription}
            onChange={handleInputChange}
            className="border p-2 w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Customer Name</label>
          <input
            type="text"
            name="customerName"
            value={orderData.customerName}
            onChange={handleInputChange}
            className="border p-2 w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Shipping Address</label>
          <input
            type="text"
            name="shippingAddress.houseAddress"
            value={orderData.shippingAddress.houseAddress}
            onChange={handleInputChange}
            placeholder="House Address"
            className="border p-2 w-full"
            required
          />
          <input
            type="text"
            name="shippingAddress.area"
            value={orderData.shippingAddress.area}
            onChange={handleInputChange}
            placeholder="Area"
            className="border p-2 w-full mt-2"
            required
          />
          <input
            type="text"
            name="shippingAddress.city"
            value={orderData.shippingAddress.city}
            onChange={handleInputChange}
            placeholder="City"
            className="border p-2 w-full mt-2"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded"
        >
          Create Order
        </button>
      </form>
    </div>
  );
};

export default CreateOrderPage;
