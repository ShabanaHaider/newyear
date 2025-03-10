"use client";

import { useEffect, useState } from "react";


interface Customer {
  _id: string;
  customerName: string;
  customerEmail: string;
  customerMobileNumber: string;
  paymentMethod:string;
  customerAddress: {
    houseAddress: string;
    area: string;
    city: string;
  };
}

export default function AdminCustomerList() {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchCustomers() {
      try {
        const response = await fetch("/api/customers");
        const data = await response.json();
        if (data.success) {
          setCustomers(data.customers);
        } else {
          setError(data.message);
        }
      } catch (err) {
        setError("Failed to fetch customers");
      } finally {
        setLoading(false);
      }
    }
    fetchCustomers();
  }, []);

  if (loading) return <p>Loading customers...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="overflow-x-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Customers List</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
          <th className="border p-2">Customer Id</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Phone</th>
            <th className="border p-2">Payment Method</th>
            <th className="border p-2">Address</th>
            


          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer._id} className="hover:bg-gray-100">
              <td className="border p-2">{customer._id}</td>
              <td className="border p-2">{customer.customerName}</td>
              <td className="border p-2">{customer.customerEmail}</td>
              <td className="border p-2">{customer.customerMobileNumber}</td>
              <td className="border p-2">{customer.paymentMethod}</td>
              <td className="border p-2">
                {customer.customerAddress.houseAddress}, {customer.customerAddress.area}, {customer.customerAddress.city}
                
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

