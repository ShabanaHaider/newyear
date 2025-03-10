

// ensure posted in sanity-not posting customer data in sanity but stripePayment working well

// 'use client';

// import React from 'react';
// import { useForm } from 'react-hook-form';
// import { useRouter } from 'next/navigation';
// import { client } from '@/sanity/lib/client';

// const FormValidation = () => {
//   const { register, handleSubmit, formState: { errors } } = useForm({
//     defaultValues: {
//       customerName: '',
//       customerEmail: '',
//       customerAddress: {
//         houseAddress: '',
//         area: '',
//         city: '',
//       },
//       customerMobileNumber: '',
//       paymentMethod: '',
//     },
//   });

//   const router = useRouter();

//   const CustomSubmit = async (data: any) => {
//     console.log('Form Data:', data);

//     try {
//       // ✅ Step 1: Create Customer in Sanity
//       const customerResponse = await client.create({
//         _type: 'customer',
//         customerName: data.customerName,
//         customerEmail: data.customerEmail,
//         customerAddress: data.customerAddress,
//         customerMobileNumber: data.customerMobileNumber,
//         paymentMethod: data.paymentMethod,
//       });

//       console.log('Sanity Customer Response:', customerResponse);

//       if (!customerResponse?._id) {
//         throw new Error('Customer creation failed in Sanity');
//       }

//       // ✅ Step 2: Create Order in Sanity with Reference to Customer
//       const orderResponse = await client.create({
//         _type: 'order',
//         customer: { _type: 'reference', _ref: customerResponse._id },
//         orderStatus: 'pending',
//       });

//       console.log('Sanity Order Response:', orderResponse);

//       if (!orderResponse?._id) {
//         throw new Error('Order creation failed in Sanity');
//       }

//       // ✅ Step 3: Redirect to Stripe Payment with orderId
//       router.push(`/stripepayment?orderId=${orderResponse._id}`);

//     } catch (error) {
//       console.error('Error posting data to Sanity:', error);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center ml-36 px-6 py-4 w-[1440px] bg-[#dbb763]">
//       <form onSubmit={handleSubmit(CustomSubmit)} className="bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-sm">
//         <h2 className="text-2xl font-semibold text-white mb-4 text-center">Billing Information</h2>

//         {/* Customer Name */}
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
//           <input
//             {...register('customerName', { required: true })}
//             type="text"
//             className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             placeholder="Enter your name"
//           />
//           {errors.customerName && <p className="text-red-600 font-bold">Name is Required</p>}
//         </div>

//         {/* Customer Email */}
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
//           <input
//             {...register('customerEmail', { required: true })}
//             type="email"
//             className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             placeholder="Enter your email"
//           />
//           {errors.customerEmail && <p className="text-red-600 font-bold">Email is Required</p>}
//         </div>

//         {/* Billing Address */}
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-300 mb-2">Billing Address</label>
//           <input
//             {...register('customerAddress.houseAddress', { required: true })}
//             type="text"
//             className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             placeholder="Enter House Address"
//           />
//           {errors.customerAddress?.houseAddress && <p className="text-red-600 font-bold">House Address is Required</p>}

//           <input
//             {...register('customerAddress.area', { required: true })}
//             type="text"
//             className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             placeholder="Enter Area"
//           />
//           {errors.customerAddress?.area && <p className="text-red-600 font-bold">Area is Required</p>}

//           <input
//             {...register('customerAddress.city', { required: true })}
//             type="text"
//             className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             placeholder="Enter City"
//           />
//           {errors.customerAddress?.city && <p className="text-red-600 font-bold">City is Required</p>}
//         </div>

//         {/* Mobile Number */}
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-300 mb-2">Mobile Number</label>
//           <input
//             {...register('customerMobileNumber', { required: true })}
//             type="text"
//             className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             placeholder="Enter your Mobile Number"
//           />
//           {errors.customerMobileNumber && <p className="text-red-600 font-bold">Mobile Number is Required</p>}
//         </div>

//         {/* Payment Method */}
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-300 mb-2">Payment Method</label>
//           <select
//             {...register('paymentMethod', { required: true })}
//             className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           >
//             <option value="">Select Payment Method</option>
//             <option value="creditCard">Credit Card</option>
//             <option value="paypal">PayPal</option>
//             <option value="bankTransfer">Bank Transfer</option>
//             <option value="cashOnDelivery">Cash on Delivery</option>
//           </select>
//           {errors.paymentMethod && <p className="text-red-600 font-bold">Payment Method is Required</p>}
//         </div>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           className="w-full bg-white text-black py-2 px-4 rounded-md hover:bg-blue-500 transition-colors"
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default FormValidation;


// ensure it is submitting data into api/customer-new version- some problems

// 'use client';

// import React from 'react';
// import { useForm } from 'react-hook-form';
// import { useRouter } from 'next/navigation';

// const FormValidation = () => {
//   const { register, handleSubmit, formState: { errors } } = useForm({
//     defaultValues: {
//       customerName: '',
//       customerEmail: '',
//       customerAddress: {
//         houseAddress: '',
//         area: '',
//         city: '',
//       },
//       customerMobileNumber: '',
//       paymentMethod: '',
//     },
//   });

//   const router = useRouter();

//   const CustomSubmit = async (data: any) => {
//     console.log('Form Data:', data);

//     try {
//       const response = await fetch('/api/customers', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//       });

//       const result = await response.json();

//       if (!response.ok) {
//         throw new Error(result.message || 'Failed to save customer');
//       }

//       console.log('API Response:', result);
//       router.push(`/stripepayment?orderId=${result.orderId}`);
//     } catch (error) {
//       console.error('Error posting data:', error);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center ml-36 px-6 py-4 w-[1440px] bg-[#dbb763]">
//       <form onSubmit={handleSubmit(CustomSubmit)} className="bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-sm">
//         <h2 className="text-2xl font-semibold text-white mb-4 text-center">Billing Information</h2>

//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
//           <input {...register('customerName', { required: true })} type="text" className="w-full px-3 py-2 bg-gray-700 text-white rounded-md" placeholder="Enter your name" />
//           {errors.customerName && <p className="text-red-600 font-bold">Name is Required</p>}
//         </div>

//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
//           <input {...register('customerEmail', { required: true })} type="email" className="w-full px-3 py-2 bg-gray-700 text-white rounded-md" placeholder="Enter your email" />
//           {errors.customerEmail && <p className="text-red-600 font-bold">Email is Required</p>}
//         </div>

//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-300 mb-2">Billing Address</label>
//           <input {...register('customerAddress.houseAddress', { required: true })} type="text" className="w-full px-3 py-2 bg-gray-700 text-white rounded-md" placeholder="Enter House Address" />
//           {errors.customerAddress?.houseAddress && <p className="text-red-600 font-bold">House Address is Required</p>}

//           <input {...register('customerAddress.area', { required: true })} type="text" className="w-full px-3 py-2 bg-gray-700 text-white rounded-md" placeholder="Enter Area" />
//           {errors.customerAddress?.area && <p className="text-red-600 font-bold">Area is Required</p>}

//           <input {...register('customerAddress.city', { required: true })} type="text" className="w-full px-3 py-2 bg-gray-700 text-white rounded-md" placeholder="Enter City" />
//           {errors.customerAddress?.city && <p className="text-red-600 font-bold">City is Required</p>}
//         </div>

//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-300 mb-2">Mobile Number</label>
//           <input {...register('customerMobileNumber', { required: true })} type="text" className="w-full px-3 py-2 bg-gray-700 text-white rounded-md" placeholder="Enter your Mobile Number" />
//           {errors.customerMobileNumber && <p className="text-red-600 font-bold">Mobile Number is Required</p>}
//         </div>

//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-300 mb-2">Payment Method</label>
//           <select {...register('paymentMethod', { required: true })} className="w-full px-3 py-2 bg-gray-700 text-white rounded-md">
//             <option value="">Select Payment Method</option>
//             <option value="creditCard">Credit Card</option>
//             <option value="paypal">PayPal</option>
//             <option value="bankTransfer">Bank Transfer</option>
//             <option value="cashOnDelivery">Cash on Delivery</option>
//           </select>
//           {errors.paymentMethod && <p className="text-red-600 font-bold">Payment Method is Required</p>}
//         </div>

//         <button type="submit" className="w-full bg-white text-black py-2 px-4 rounded-md hover:bg-blue-500 transition-colors">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default FormValidation;



// merged version 

"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

const FormValidation = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      customerName: "",
      customerEmail: "",
      customerAddress: {
        houseAddress: "",
        area: "",
        city: "",
      },
      customerMobileNumber: "",
      paymentMethod: "",
    },
  });

  const router = useRouter();

  const CustomSubmit = async (data: any) => {
    console.log("Form Data:", data);

    try {
      // ✅ Step 1: Send Customer Data to API
      const response = await fetch("/api/customers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to save customer");
      }

      console.log("API Response:", result);

      // ✅ Step 2: Ensure the Order ID and Price are Passed Correctly to Stripe
      if (!result.orderId || !result.totalAmount) {
        throw new Error("Missing orderId or totalAmount for Stripe Payment");
      }

      // ✅ Step 3: Redirect to Stripe Payment with Order Details
      router.push(`/stripepayment?orderId=${result.orderId}&amount=${result.totalAmount}`);
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  return (
    <div className="flex items-center justify-center ml-36 px-6 py-4 w-[1440px] bg-[#dbb763]">
      <form
        onSubmit={handleSubmit(CustomSubmit)}
        className="bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-semibold text-white mb-4 text-center">
          Billing Information
        </h2>

        {/* Customer Name */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Name
          </label>
          <input
            {...register("customerName", { required: true })}
            type="text"
            className="w-full px-3 py-2 bg-gray-700 text-white rounded-md"
            placeholder="Enter your name"
          />
          {errors.customerName && (
            <p className="text-red-600 font-bold">Name is Required</p>
          )}
        </div>

        {/* Customer Email */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Email
          </label>
          <input
            {...register("customerEmail", { required: true })}
            type="email"
            className="w-full px-3 py-2 bg-gray-700 text-white rounded-md"
            placeholder="Enter your email"
          />
          {errors.customerEmail && (
            <p className="text-red-600 font-bold">Email is Required</p>
          )}
        </div>

        {/* Billing Address */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Billing Address
          </label>
          <input
            {...register("customerAddress.houseAddress", { required: true })}
            type="text"
            className="w-full px-3 py-2 bg-gray-700 text-white rounded-md"
            placeholder="Enter House Address"
          />
          {errors.customerAddress?.houseAddress && (
            <p className="text-red-600 font-bold">House Address is Required</p>
          )}

          <input
            {...register("customerAddress.area", { required: true })}
            type="text"
            className="w-full px-3 py-2 bg-gray-700 text-white rounded-md"
            placeholder="Enter Area"
          />
          {errors.customerAddress?.area && (
            <p className="text-red-600 font-bold">Area is Required</p>
          )}

          <input
            {...register("customerAddress.city", { required: true })}
            type="text"
            className="w-full px-3 py-2 bg-gray-700 text-white rounded-md"
            placeholder="Enter City"
          />
          {errors.customerAddress?.city && (
            <p className="text-red-600 font-bold">City is Required</p>
          )}
        </div>

        {/* Mobile Number */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Mobile Number
          </label>
          <input
            {...register("customerMobileNumber", { required: true })}
            type="text"
            className="w-full px-3 py-2 bg-gray-700 text-white rounded-md"
            placeholder="Enter your Mobile Number"
          />
          {errors.customerMobileNumber && (
            <p className="text-red-600 font-bold">Mobile Number is Required</p>
          )}
        </div>

        {/* Payment Method */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Payment Method
          </label>
          <select
            {...register("paymentMethod", { required: true })}
            className="w-full px-3 py-2 bg-gray-700 text-white rounded-md"
          >
            <option value="">Select Payment Method</option>
            <option value="creditCard">Credit Card</option>
            <option value="paypal">PayPal</option>
            <option value="bankTransfer">Bank Transfer</option>
            <option value="cashOnDelivery">Cash on Delivery</option>
          </select>
          {errors.paymentMethod && (
            <p className="text-red-600 font-bold">Payment Method is Required</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-white text-black py-2 px-4 rounded-md hover:bg-blue-500 transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormValidation;






