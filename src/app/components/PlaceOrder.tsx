// 'use client'
// import { useState, useEffect, Suspense } from 'react'
// import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js'
// import convertToSubCurrency from '../../lib/ConvertToSubCurrency';

// const PlaceOrder = ({ amount }: { amount: number }) => {
//     console.log(window.location.host)

//     const myhost = window.location.host
//     let URL = '';

//     if (myhost === 'localhost:3000') {
//         URL = 'http://localhost:3000'
//     }
//     else {
//         URL = 'https://stripe-payment-one-nu.vercel.app';
//     }

//     const stripe = useStripe()
//     const elements = useElements()

//     const [errorMessage, setError] = useState<string>()
//     const [clientSecret, setClientSecret] = useState('')
//     const [loading, setLoading] = useState(false)


//     // as the payment method changes it is necessary to generate a new client secret.
//     useEffect(() => {
//         fetch('api/payment-intent', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({ amount: convertToSubCurrency(amount) })
//         })

//             .then(res => res.json())
//             .then(data => setClientSecret(data.clientSecret))
//     }, [amount])

//     const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault()
//         setLoading(true)

//         // Error handling
//         if (!stripe || !elements) {
//             return
//         }

//         const { error: submitErrors } = await elements.submit()
//         if (submitErrors) {
//             setError(submitErrors.message)
//             setLoading(false)
//             return
//         }

//         const { error } = await stripe.confirmPayment({
//             elements,
//             clientSecret,
//             confirmParams: {
//                 return_url: `${URL}/payment-success?amount=${amount}`
//             }
//         })

//         if (error) {
//             setError(error.message)
//         }
//         else {
//             setError('')
//             setLoading(false)
//         }
//     }

//     return (
//         <form onSubmit={handleSubmit} className='p-8'>
//             {clientSecret && <PaymentElement />}
//             <button className='w-full bg-black text-white py-2 mt-5'>Pay Now</button>
//         </form>
//     )
// }

// export default PlaceOrder


// adjusted payment element inside the code


// "use client";
// import { useState, useEffect, Suspense } from "react";
// import { useStripe, useElements, PaymentElement } from "@stripe/react-stripe-js";
// import convertToSubCurrency from "../../lib/ConvertToSubCurrency";

// const PlaceOrder = ({ amount }: { amount: number }) => {
//     console.log(window.location.host);

//     const myhost = window.location.host;
//     let URL = "";

//     if (myhost === "localhost:3000") {
//         URL = "http://localhost:3000";
//     } else {
//         URL = "https://stripe-payment-one-nu.vercel.app";
//     }

//     const stripe = useStripe();
//     const elements = useElements();

//     const [errorMessage, setError] = useState<string | null>(null);
//     const [clientSecret, setClientSecret] = useState("");
//     const [loading, setLoading] = useState(false);
//     const [isPaymentReady, setIsPaymentReady] = useState(false);

//     // Fetch client secret when amount changes
//     useEffect(() => {
//         fetch("/api/payment-intent", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify({ amount: convertToSubCurrency(amount) }),
//         })
//             .then((res) => res.json())
//             .then((data) => {
//                 setClientSecret(data.clientSecret);
//                 setIsPaymentReady(true);
//             })
//             .catch((err) => {
//                 setError("Failed to initialize payment. Please try again.");
//                 console.error("Error fetching payment intent:", err);
//             });
//     }, [amount]);

//     const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         setLoading(true);

//         if (!stripe || !elements) {
//             setError("Stripe has not loaded properly. Please refresh and try again.");
//             setLoading(false);
//             return;
//         }

//         if (!clientSecret) {
//             setError("Payment initialization failed. Please try again.");
//             setLoading(false);
//             return;
//         }

//         const { error: submitErrors } = await elements.submit();
//         if (submitErrors) {
//             setError(submitErrors.message || "An error occurred while submitting.");
//             setLoading(false);
//             return;
//         }

//         const { error } = await stripe.confirmPayment({
//             elements,
//             clientSecret,
//             confirmParams: {
//                 return_url: `${URL}/payment-success?amount=${amount}`,
//             },
//         });

//         if (error) {
//             setError(error.message || "Payment failed. Please try again.");
//         } else {
//             setError(null);
//         }

//         setLoading(false);
//     };

//     return (
//         <form onSubmit={handleSubmit} className="p-8">
//             {errorMessage && <p className="text-red-500 text-sm mb-4">{errorMessage}</p>}
            
//             {isPaymentReady ? (
//                 <>
//                     <PaymentElement />
//                     <button 
//                         className="w-full bg-black text-white py-2 mt-5 disabled:opacity-50"
//                         disabled={loading}
//                     >
//                         {loading ? "Processing..." : "Pay Now"}
//                     </button>
//                 </>
//             ) : (
//                 <p className="text-gray-500 text-center">Loading payment options...</p>
//             )}
//         </form>
//     );
// };

// export default PlaceOrder;



// adjusted on feb 16

// "use client";
// import { useState, useEffect, Suspense } from "react";
// import { useStripe, useElements, PaymentElement } from "@stripe/react-stripe-js";
// import convertToSubCurrency from "../../lib/ConvertToSubCurrency";

// interface PlaceOrderProps {
//     amount: number;
//     orderId?: string; // Added orderId prop
// }

// const PlaceOrder = ({ amount, orderId }: PlaceOrderProps) => {
//     console.log("Order ID:", orderId); // Debugging

//     const myhost = window.location.host;
//     let URL = "";

//     if (myhost === "localhost:3000") {
//         URL = "http://localhost:3000";
//     } else {
//         URL = "https://stripe-payment-one-nu.vercel.app";
//     }

//     const stripe = useStripe();
//     const elements = useElements();

//     const [errorMessage, setError] = useState<string | null>(null);
//     const [clientSecret, setClientSecret] = useState("");
//     const [loading, setLoading] = useState(false);
//     const [isPaymentReady, setIsPaymentReady] = useState(false);

//     // Fetch client secret when amount changes
//     useEffect(() => {
//         fetch("/api/payment-intent", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify({ amount: convertToSubCurrency(amount) }),
//         })
//             .then((res) => res.json())
//             .then((data) => {
//                 setClientSecret(data.clientSecret);
//                 setIsPaymentReady(true);
//             })
//             .catch((err) => {
//                 setError("Failed to initialize payment. Please try again.");
//                 console.error("Error fetching payment intent:", err);
//             });
//     }, [amount]);

//     const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         setLoading(true);

//         if (!stripe || !elements) {
//             setError("Stripe has not loaded properly. Please refresh and try again.");
//             setLoading(false);
//             return;
//         }

//         if (!clientSecret) {
//             setError("Payment initialization failed. Please try again.");
//             setLoading(false);
//             return;
//         }

//         const { error: submitErrors } = await elements.submit();
//         if (submitErrors) {
//             setError(submitErrors.message || "An error occurred while submitting.");
//             setLoading(false);
//             return;
//         }

//         const { error } = await stripe.confirmPayment({
//             elements,
//             clientSecret,
//             confirmParams: {
//                 return_url: `${URL}/payment-success?amount=${amount}&orderId=${orderId || ""}`, // Include orderId in return URL
//             },
//         });

//         if (error) {
//             setError(error.message || "Payment failed. Please try again.");
//         } else {
//             setError(null);
//         }

//         setLoading(false);
//     };

//     return (
//         <form onSubmit={handleSubmit} className="p-8">
//             {errorMessage && <p className="text-red-500 text-sm mb-4">{errorMessage}</p>}
            
//             {isPaymentReady ? (
//                 <>
//                     <PaymentElement />
//                     {orderId && <p className="text-gray-600 text-sm mt-2">Order ID: {orderId}</p>} {/* Show Order ID */}
//                     <button 
//                         className="w-full bg-black text-white py-2 mt-5 disabled:opacity-50"
//                         disabled={loading}
//                     >
//                         {loading ? "Processing..." : "Pay Now"}
//                     </button>
//                 </>
//             ) : (
//                 <p className="text-gray-500 text-center">Loading payment options...</p>
//             )}
//         </form>
//     );
// };

// export default PlaceOrder;





// "use client";
// import { useState, useEffect } from "react";
// import { useStripe, useElements, PaymentElement } from "@stripe/react-stripe-js";
// import { useRouter } from "next/navigation";
// import convertToSubCurrency from "../../lib/ConvertToSubCurrency";

// interface PlaceOrderProps {
//     amount: number;
//     orderId?: string;
// }

// const PlaceOrder = ({ amount, orderId }: PlaceOrderProps) => {
//     console.log("Order ID in PlaceOrder:", orderId); // Debugging

//     const stripe = useStripe();
//     const elements = useElements();
//     const router = useRouter();

//     const [errorMessage, setError] = useState<string | null>(null);
//     const [clientSecret, setClientSecret] = useState("");
//     const [loading, setLoading] = useState(false);
//     const [isPaymentReady, setIsPaymentReady] = useState(false);

//     // Fetch the client secret from API
//     useEffect(() => {
//         fetch(`${window.location.origin}/api/payment-intent`, {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({ amount: convertToSubCurrency(amount) }),
//         })
//             .then((res) => res.json())
//             .then((data) => {
//                 if (data.clientSecret) {
//                     setClientSecret(data.clientSecret);
//                     setIsPaymentReady(true);
//                 } else {
//                     setError("Failed to get payment intent. Please try again.");
//                 }
//             })
//             .catch((err) => {
//                 setError("Failed to initialize payment. Please try again.");
//                 console.error("Error fetching payment intent:", err);
//             });
//     }, [amount]);

//     const handlePaymentSuccess = () => {
//         router.push("/admin/orders"); // Redirect to orders page after successful payment
//     };

//     const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         setLoading(true);

//         if (!stripe || !elements) {
//             setError("Stripe has not loaded properly. Please refresh and try again.");
//             setLoading(false);
//             return;
//         }

//         if (!clientSecret) {
//             setError("Payment initialization failed. Please try again.");
//             setLoading(false);
//             return;
//         }  
    
//     const handlePaymentSuccess = async () => {
//   if (!orderId) {
//     console.error("No orderId available");
//     return;
//   }

//   try {
//     const response = await fetch("/api/orders", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         orderId,
//         totalAmount: amount,
//         orderStatus: "Pending",
//         paymentStatus: "Paid",
//       }),
//     });

//     const data = await response.json();
//     console.log("Order Created:", data);

//     if (data.success) {
//       router.push("/admin/orders"); // Redirect to orders page after successful order creation
//     } else {
//       console.error("Order creation failed:", data.error);
//     }
//   } catch (error) {
//     console.error("Error creating order:", error);
//   }
// };
//         // Submit elements before confirming payment (as required by Stripe)
//         const { error: submitErrors } = await elements.submit();
//         if (submitErrors) {
//             setError(submitErrors.message || "An error occurred while submitting.");
//             setLoading(false);
//             return;
//         }

//         // Confirm payment with Stripe
//         const result = await stripe.confirmPayment({
//             elements,
//             clientSecret,
//             confirmParams: {
//                 return_url: `${window.location.origin}/payment-success?amount=${amount}&orderId=${orderId || ""}`,
//             },
//         });

//         if ("paymentIntent" in result && result.paymentIntent && typeof result.paymentIntent === "object" && "status" in result.paymentIntent) {
//             if (result.paymentIntent.status === "succeeded") {
//                 setError(null);
//                 handlePaymentSuccess();
//             }
//         } else if ("error" in result && result.error) {
//             setError(result.error.message || "Payment failed. Please try again.");
//         }

//         setLoading(false); // Reset loading state
//     }; // ✅ **Fixed missing closing brace here**

//     return (
//         <form onSubmit={handleSubmit} className="p-8">
//             {errorMessage && <p className="text-red-500 text-sm mb-4">{errorMessage}</p>}
            
//             {isPaymentReady ? (
//                 <>
//                     <PaymentElement />
//                     {orderId && (
//                         <p className="text-gray-600 text-sm mt-2">🔹 Order ID: <strong>{orderId}</strong></p>
//                     )}
//                     <button 
//                         className="w-full bg-black text-white py-2 mt-5 disabled:opacity-50"
//                         disabled={loading}
//                     >
//                         {loading ? "Processing..." : "Pay Now"}
//                     </button>
//                 </>
//             ) : (
//                 <p className="text-gray-500 text-center">Loading payment options...</p>
//             )}
//         </form>
//     );
// };

// export default PlaceOrder;    

// trying to streamline order 

// "use client";

// import { useState, useEffect } from "react";
// import { useStripe, useElements, PaymentElement } from "@stripe/react-stripe-js";
// import { useRouter } from "next/navigation";
// import axios from "axios";
// import convertToSubCurrency from "../../lib/ConvertToSubCurrency";

// interface PlaceOrderProps {
//     amount: number;
//     orderId?: string;
// }

// const PlaceOrder = ({ amount, orderId }: PlaceOrderProps) => {
//     console.log("Order ID in PlaceOrder:", orderId); // Debugging

//     const stripe = useStripe();
//     const elements = useElements();
//     const router = useRouter();

//     const [errorMessage, setError] = useState<string | null>(null);
//     const [clientSecret, setClientSecret] = useState("");
//     const [loading, setLoading] = useState(false);
//     const [isPaymentReady, setIsPaymentReady] = useState(false);

//     // ✅ Fetch client secret from API
//     useEffect(() => {
//         fetch(`${window.location.origin}/api/payment-intent`, {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({ amount: convertToSubCurrency(amount) }),
//         })
//             .then((res) => res.json())
//             .then((data) => {
//                 if (data.clientSecret) {
//                     setClientSecret(data.clientSecret);
//                     setIsPaymentReady(true);
//                 } else {
//                     setError("Failed to get payment intent. Please try again.");
//                 }
//             })
//             .catch((err) => {
//                 setError("Failed to initialize payment. Please try again.");
//                 console.error("Error fetching payment intent:", err);
//             });
//     }, [amount]);

//     // ✅ Create order in Sanity after successful payment
//     const createOrder = async () => {
//         try {
//             const response = await axios.post("/api/orders", {
//                 orderId,
//                 amount,
//                 paymentStatus: "Paid",
//                 orderStatus: "Processing",
//             });

//             if (response.data.success) {
//                 console.log("Order created successfully:", response.data.order);
//                 router.push("/admin/orders"); // Redirect to admin orders page
//             } else {
//                 setError("Failed to create order.");
//             }
//         } catch (error) {
//             console.error("Error creating order:", error);
//             setError("Error processing order. Please contact support.");
//         }
//     };

//     // ✅ Type Guard to check if result contains paymentIntent
//     function hasPaymentIntent(result: any): result is { paymentIntent: { status: string } } {
//         return result && result.paymentIntent && typeof result.paymentIntent.status === "string";
//     }

//     // ✅ Handle Payment Submission
//     const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         setLoading(true);

//         if (!stripe || !elements) {
//             setError("Stripe has not loaded properly. Please refresh and try again.");
//             setLoading(false);
//             return;
//         }

//         if (!clientSecret) {
//             setError("Payment initialization failed. Please try again.");
//             setLoading(false);
//             return;
//         }

//         // Submit elements before confirming payment
//         const { error: submitErrors } = await elements.submit();
//         if (submitErrors) {
//             setError(submitErrors.message || "An error occurred while submitting.");
//             setLoading(false);
//             return;
//         }

//         // Confirm payment with Stripe
//         const result = await stripe.confirmPayment({
//             elements,
//             clientSecret,
//             confirmParams: {
//                 return_url: `${window.location.origin}/payment-success?amount=${amount}&orderId=${orderId || ""}`,
//             },
//         });

//         // ✅ FIX: Use Type Guard to safely check paymentIntent
//         if (hasPaymentIntent(result) && result.paymentIntent.status === "succeeded") {
//             setError(null);
//             await createOrder(); // Call function to save order in Sanity
//         } else {
//             setError(result.error?.message || "Payment failed. Please try again.");
//         }

//         setLoading(false);
//     };

//     return (
//         <form onSubmit={handleSubmit} className="p-8">
//             {errorMessage && <p className="text-red-500 text-sm mb-4">{errorMessage}</p>}
            
//             {isPaymentReady ? (
//                 <>
//                     <PaymentElement />
//                     {orderId && (
//                         <p className="text-gray-600 text-sm mt-2">
//                             🔹 Order ID: <strong>{orderId}</strong>
//                         </p>
//                     )}
//                     <button 
//                         className="w-full bg-black text-white py-2 mt-5 disabled:opacity-50"
//                         disabled={loading}
//                     >
//                         {loading ? "Processing..." : "Pay Now"}
//                     </button>
//                 </>
//             ) : (
//                 <p className="text-gray-500 text-center">Loading payment options...</p>
//             )}
//         </form>
//     );
// };

// export default PlaceOrder;


// sunday morning


// "use client";

// import { useState, useEffect } from "react";
// import { useStripe, useElements, PaymentElement } from "@stripe/react-stripe-js";
// import { useRouter } from "next/navigation";
// import axios from "axios";
// import convertToSubCurrency from "../../lib/ConvertToSubCurrency";
// import { useUser } from "@clerk/nextjs";

// interface PlaceOrderProps {
//     amount: number;
//     orderId?: string;
// }

// const PlaceOrder = ({ amount, orderId }: PlaceOrderProps) => {
//     console.log("Order ID in PlaceOrder:", orderId); // Debugging

//     const stripe = useStripe();
//     const elements = useElements();
//     const router = useRouter();
//     const { user } = useUser();
// const customerId = user?.id;  // Fetch logged-in user's ID

//     const [errorMessage, setError] = useState<string | null>(null);
//     const [clientSecret, setClientSecret] = useState("");
//     const [loading, setLoading] = useState(false);
//     const [isPaymentReady, setIsPaymentReady] = useState(false);

//     // ✅ Fetch client secret from API
//     useEffect(() => {
//         fetch(`${window.location.origin}/api/payment-intent`, {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({ amount: convertToSubCurrency(amount) }),
//         })
//             .then((res) => res.json())
//             .then((data) => {
//                 if (data.clientSecret) {
//                     setClientSecret(data.clientSecret);
//                     setIsPaymentReady(true);
//                 } else {
//                     setError("Failed to get payment intent. Please try again.");
//                 }
//             })
//             .catch((err) => {
//                 setError("Failed to initialize payment. Please try again.");
//                 console.error("Error fetching payment intent:", err);
//             });
//     }, [amount]);

//     // ✅ Create order in Sanity after successful payment
//     const createOrder = async () => {
//         try {
//             const response = await axios.post("/api/orders", {
//                 orderId,
//                 amount,
//                 paymentStatus: "Paid",
//                 orderStatus: "Processing",
//                 customer: { _ref: customerId, _type: "reference" },  // ✅ Use Clerk ID as Customer Reference
//             });

//             if (response.data.success) {
//                 console.log("Order created successfully:", response.data.order);
//                 router.push("/admin/orders"); // Redirect to admin orders page
//             } else {
//                 setError("Failed to create order.");
//             }
//         } catch (error) {
//             console.error("Error creating order:", error);
//             setError("Error processing order. Please contact support.");
//         }
//     };

//     // ✅ Type Guard to check if result contains paymentIntent
//     function hasPaymentIntent(result: any): result is { paymentIntent: { status: string } } {
//         return result && result.paymentIntent && typeof result.paymentIntent.status === "string";
//     }

//     // ✅ Handle Payment Submission
//     const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         setLoading(true);

//         if (!stripe || !elements) {
//             setError("Stripe has not loaded properly. Please refresh and try again.");
//             setLoading(false);
//             return;
//         }

//         if (!clientSecret) {
//             setError("Payment initialization failed. Please try again.");
//             setLoading(false);
//             return;
//         }

//         // Submit elements before confirming payment
//         const { error: submitErrors } = await elements.submit();
//         if (submitErrors) {
//             setError(submitErrors.message || "An error occurred while submitting.");
//             setLoading(false);
//             return;
//         }

//         // Confirm payment with Stripe
//         const result = await stripe.confirmPayment({
//             elements,
//             clientSecret,
//             confirmParams: {
//                 return_url: `${window.location.origin}/payment-success?amount=${amount}&orderId=${orderId || ""}`,
//             },
//         });

//         // ✅ FIX: Use Type Guard to safely check paymentIntent
//         if (hasPaymentIntent(result) && result.paymentIntent.status === "succeeded") {
//             setError(null);
//             await createOrder(); // Call function to save order in Sanity
//         } else {
//             setError(result.error?.message || "Payment failed. Please try again.");
//         }

//         setLoading(false);
//     };

//     return (
//         <form onSubmit={handleSubmit} className="p-8">
//             {errorMessage && <p className="text-red-500 text-sm mb-4">{errorMessage}</p>}
            
//             {isPaymentReady ? (
//                 <>
//                     <PaymentElement />
//                     {orderId && (
//                         <p className="text-gray-600 text-sm mt-2">
//                             🔹 Order ID: <strong>{orderId}</strong>
//                         </p>
//                     )}
//                     <button 
//                         className="w-full bg-black text-white py-2 mt-5 disabled:opacity-50"
//                         disabled={loading}
//                     >
//                         {loading ? "Processing..." : "Pay Now"}
//                     </button>
//                 </>
//             ) : (
//                 <p className="text-gray-500 text-center">Loading payment options...</p>
//             )}
//         </form>
//     );
// };

// export default PlaceOrder;

// sunday morning 2

// "use client";

// import { useState, useEffect } from "react";
// import { useStripe, useElements, PaymentElement } from "@stripe/react-stripe-js";
// import { useRouter } from "next/navigation";
// import axios from "axios";
// import convertToSubCurrency from "../../lib/ConvertToSubCurrency";
// import { useUser } from "@clerk/nextjs";
// import { useCart } from "@/app/context"; // ✅ Correctly import the Cart Context
// import { CartItem } from "@/app/context"; // ✅ Import CartItem type

// interface PlaceOrderProps {
//     amount: number;
//     orderId?: string;
// }

// const PlaceOrder = ({ amount, orderId }: PlaceOrderProps) => {
//     console.log("Order ID in PlaceOrder:", orderId); // Debugging

//     const stripe = useStripe();
//     const elements = useElements();
//     const router = useRouter();
//     const { user } = useUser();
//     const { cart } = useCart(); // ✅ Use `cart` instead of `cartItems`

//     const customerId = user?.id;  // Fetch logged-in user's ID

//     const [errorMessage, setError] = useState<string | null>(null);
//     const [clientSecret, setClientSecret] = useState("");
//     const [loading, setLoading] = useState(false);
//     const [isPaymentReady, setIsPaymentReady] = useState(false);

//     // ✅ Fetch client secret from API
//     useEffect(() => {
//         fetch(`${window.location.origin}/api/payment-intent`, {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({ amount: convertToSubCurrency(amount) }),
//         })
//             .then((res) => res.json())
//             .then((data) => {
//                 if (data.clientSecret) {
//                     setClientSecret(data.clientSecret);
//                     setIsPaymentReady(true);
//                 } else {
//                     setError("Failed to get payment intent. Please try again.");
//                 }
//             })
//             .catch((err) => {
//                 setError("Failed to initialize payment. Please try again.");
//                 console.error("Error fetching payment intent:", err);
//             });
//     }, [amount]);

//     // ✅ Create order in Sanity after successful payment
//     const createOrder = async () => {
//         try {
//             if (!cart || cart.length === 0) {
//                 setError("Cart is empty. Cannot create an order.");
//                 return;
//             }

//             // ✅ Extract product details from cart
//             const productDetails = cart.map((item: CartItem) => ({
//                 productId: item.id, // ✅ Sanity Product ID
//                 name: item.name,
//                 quantitySold: 1, // 🔹 You don't have `quantity` in `CartItem`, adjust as needed
//                 price: item.price,
//             }));

//             const response = await axios.post("/api/orders", {
//                 orderId,
//                 totalAmount: amount,
//                 paymentStatus: "Paid",
//                 orderStatus: "Processing",
//                 customer: { _ref: customerId, _type: "reference" }, // ✅ Customer Reference
//                 productDetails, // ✅ Pass actual product data
//             });

//             if (response.data.success) {
//                 console.log("Order created successfully:", response.data.order);
//                 router.push("/admin/orders"); // Redirect to admin orders page
//             } else {
//                 setError("Failed to create order.");
//             }
//         } catch (error) {
//             console.error("Error creating order:", error);
//             setError("Error processing order. Please contact support.");
//         }
//     };

//     // ✅ Type Guard to check if result contains paymentIntent
//     function hasPaymentIntent(result: any): result is { paymentIntent: { status: string } } {
//         return result && result.paymentIntent && typeof result.paymentIntent.status === "string";
//     }

//     // ✅ Handle Payment Submission
//     const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         setLoading(true);

//         if (!stripe || !elements) {
//             setError("Stripe has not loaded properly. Please refresh and try again.");
//             setLoading(false);
//             return;
//         }

//         if (!clientSecret) {
//             setError("Payment initialization failed. Please try again.");
//             setLoading(false);
//             return;
//         }

//         // Submit elements before confirming payment
//         const { error: submitErrors } = await elements.submit();
//         if (submitErrors) {
//             setError(submitErrors.message || "An error occurred while submitting.");
//             setLoading(false);
//             return;
//         }

//         // Confirm payment with Stripe
//         const result = await stripe.confirmPayment({
//             elements,
//             clientSecret,
//             confirmParams: {
//                 return_url: `${window.location.origin}/payment-success?amount=${amount}&orderId=${orderId || ""}`,
//             },
//         });

//         // ✅ FIX: Use Type Guard to safely check paymentIntent
//         if (hasPaymentIntent(result) && result.paymentIntent.status === "succeeded") {
//             setError(null);
//             await createOrder(); // Call function to save order in Sanity
//         } else {
//             setError(result.error?.message || "Payment failed. Please try again.");
//         }

//         setLoading(false);
//     };

//     return (
//         <form onSubmit={handleSubmit} className="p-8">
//             {errorMessage && <p className="text-red-500 text-sm mb-4">{errorMessage}</p>}
            
//             {isPaymentReady ? (
//                 <>
//                     <PaymentElement />
//                     {orderId && (
//                         <p className="text-gray-600 text-sm mt-2">
//                             🔹 Order ID: <strong>{orderId}</strong>
//                         </p>
//                     )}
//                     <button 
//                         className="w-full bg-black text-white py-2 mt-5 disabled:opacity-50"
//                         disabled={loading}
//                     >
//                         {loading ? "Processing..." : "Pay Now"}
//                     </button>
//                 </>
//             ) : (
//                 <p className="text-gray-500 text-center">Loading payment options...</p>
//             )}
//         </form>
//     );
// };

// export default PlaceOrder;



//ensuring  ui features displayed and  added in UI

// "use client";

// import { useState, useEffect } from "react";
// import { useStripe, useElements, PaymentElement } from "@stripe/react-stripe-js";
// import { useRouter } from "next/navigation";
// import axios from "axios";
// import convertToSubCurrency from "../../lib/ConvertToSubCurrency";
// import { useUser } from "@clerk/nextjs";
// import { useCart } from "../context"; // ✅ Import Cart Context

// interface PlaceOrderProps {
//     amount: number;
//     orderId?: string;
// }

// const PlaceOrder = ({ amount, orderId }: PlaceOrderProps) => {
//     console.log("Order ID in PlaceOrder:", orderId); // Debugging

//     const stripe = useStripe();
//     const elements = useElements();
//     const router = useRouter();
//     const { user } = useUser();
//     const { cart } = useCart(); // ✅ Get cart items from Context API

//     const customerId = user?.id;  // Fetch logged-in user's ID

//     const [errorMessage, setError] = useState<string | null>(null);
//     const [clientSecret, setClientSecret] = useState("");
//     const [loading, setLoading] = useState(false);
//     const [isPaymentReady, setIsPaymentReady] = useState(false);

//     // ✅ Log cart contents for debugging
//     useEffect(() => {
//         console.log("Cart contents in PlaceOrder.tsx:", cart);
//     }, [cart]);

//     // ✅ Fetch client secret from API
//     useEffect(() => {
//         fetch(`${window.location.origin}/api/payment-intent`, {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({ amount: convertToSubCurrency(amount) }),
//         })
//             .then((res) => res.json())
//             .then((data) => {
//                 if (data.clientSecret) {
//                     setClientSecret(data.clientSecret);
//                     setIsPaymentReady(true);
//                 } else {
//                     setError("Failed to get payment intent. Please try again.");
//                 }
//             })
//             .catch((err) => {
//                 setError("Failed to initialize payment. Please try again.");
//                 console.error("Error fetching payment intent:", err);
//             });
//     }, [amount]);

//     // ✅ Create order in Sanity after successful payment
//     const createOrder = async () => {
//         try {
//             if (!cart || cart.length === 0) {
//                 setError("Cart is empty. Cannot create an order.");
//                 return;
//             }

//             // ✅ Extract product details from cart
//             const productDetails = cart.map((item) => ({
//                 productId: item.id, // ✅ Sanity Product ID
//                 name: item.name,
//                 quantitySold: 1, // Assuming 1 for now, add quantity in `context.tsx` if needed
//                 price: item.price,
//             }));

//             const response = await axios.post("/api/orders", {
//                 orderId,
//                 totalAmount: amount,
//                 paymentStatus: "Paid",
//                 orderStatus: "Processing",
//                 customer: { _ref: customerId, _type: "reference" }, // ✅ Customer Reference
//                 productDetails, // ✅ Pass actual product data
//             });

//             if (response.data.success) {
//                 console.log("Order created successfully:", response.data.order);
//                 router.push("/admin/orders"); // Redirect to admin orders page
//             } else {
//                 setError("Failed to create order.");
//             }
//         } catch (error) {
//             console.error("Error creating order:", error);
//             setError("Error processing order. Please contact support.");
//         }
//     };

//     // ✅ Type Guard to check if result contains paymentIntent
//     function hasPaymentIntent(result: any): result is { paymentIntent: { status: string } } {
//         return result && result.paymentIntent && typeof result.paymentIntent.status === "string";
//     }

//     // ✅ Handle Payment Submission
//     const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         setLoading(true);

//         if (!stripe || !elements) {
//             setError("Stripe has not loaded properly. Please refresh and try again.");
//             setLoading(false);
//             return;
//         }

//         if (!clientSecret) {
//             setError("Payment initialization failed. Please try again.");
//             setLoading(false);
//             return;
//         }

//         // Submit elements before confirming payment
//         const { error: submitErrors } = await elements.submit();
//         if (submitErrors) {
//             setError(submitErrors.message || "An error occurred while submitting.");
//             setLoading(false);
//             return;
//         }

//         // Confirm payment with Stripe
//         const result = await stripe.confirmPayment({
//             elements,
//             clientSecret,
//             confirmParams: {
//                 return_url: `${window.location.origin}/payment-success?amount=${amount}&orderId=${orderId || ""}`,
//             },
//         });

//         // ✅ FIX: Use Type Guard to safely check paymentIntent
//         if (hasPaymentIntent(result) && result.paymentIntent.status === "succeeded") {
//             setError(null);
//             await createOrder(); // Call function to save order in Sanity
//         } else {
//             setError(result.error?.message || "Payment failed. Please try again.");
//         }

//         setLoading(false);
//     };

//     return (
//         <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
//             <h2 className="text-xl font-bold mb-4">Review Your Order</h2>

//             {/* ✅ Order Summary UI */}
//             <div className="border p-4 rounded-md shadow-md mb-4">
//                 <h3 className="text-lg font-semibold mb-2">Order Summary</h3>

//                 {cart.length > 0 ? (
//                     <ul className="space-y-2">
//                         {cart.map((item) => (
//                             <li key={item.id} className="flex justify-between items-center border-b pb-2">
//                                 <div className="flex items-center space-x-3">
//                                     <img src={item.image} alt={item.name} className="w-12 h-12 rounded-md" />
//                                     <span className="font-medium">{item.name}</span>
//                                 </div>
//                                 <span className="font-semibold">Rs {item.price}</span>
//                             </li>
//                         ))}
//                     </ul>
//                 ) : (
//                     <p className="text-gray-500">Your cart is empty.</p>
//                 )}
//             </div>

//             {/* ✅ Show total amount */}
//             <p className="text-lg font-semibold mb-4">Total Amount: Rs {amount}</p>

//             {/* ✅ Payment Form */}
//             <form onSubmit={handleSubmit} className="space-y-4">
//                 {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}

//                 {isPaymentReady ? (
//                     <>
//                         <PaymentElement />
//                         {orderId && (
//                             <p className="text-gray-600 text-sm mt-2">
//                                 🔹 Order ID: <strong>{orderId}</strong>
//                             </p>
//                         )}
//                         <button 
//                             className="w-full bg-black text-white py-2 mt-4 rounded-md disabled:opacity-50"
//                             disabled={loading}
//                         >
//                             {loading ? "Processing..." : "Pay Now"}
//                         </button>
//                     </>
//                 ) : (
//                     <p className="text-gray-500 text-center">Loading payment options...</p>
//                 )}
//             </form>
//         </div>
//     );
// };

// export default PlaceOrder;



// Tuesday work



"use client";

import { useState, useEffect } from "react";
import { useStripe, useElements, PaymentElement } from "@stripe/react-stripe-js";
import { useRouter } from "next/navigation";
import axios from "axios";
import convertToSubCurrency from "../../lib/ConvertToSubCurrency";
import { useUser } from "@clerk/nextjs";
import { useCart } from "../context"; // ✅ Import Cart Context

interface PlaceOrderProps {
    amount: number;
    orderId?: string;
}

const PlaceOrder = ({ amount, orderId }: PlaceOrderProps) => {
    console.log("Order ID in PlaceOrder:", orderId); // Debugging

    const stripe = useStripe();
    const elements = useElements();
    const router = useRouter();
    const { user } = useUser();
    const { cart } = useCart(); // ✅ Get cart items from Context API

    const customerId = user?.id;  // Fetch logged-in user's ID

    const [errorMessage, setError] = useState<string | null>(null);
    const [clientSecret, setClientSecret] = useState("");
    const [loading, setLoading] = useState(false);
    const [isPaymentReady, setIsPaymentReady] = useState(false);

    // ✅ Log cart contents for debugging
    useEffect(() => {
        console.log("Cart contents in PlaceOrder.tsx:", cart);
    }, [cart]);

    // ✅ Fetch client secret from API
    useEffect(() => {
        fetch(`${window.location.origin}/api/payment-intent`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ amount: convertToSubCurrency(amount) }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.clientSecret) {
                    setClientSecret(data.clientSecret);
                    setIsPaymentReady(true);
                } else {
                    setError("Failed to get payment intent. Please try again.");
                }
            })
            .catch((err) => {
                setError("Failed to initialize payment. Please try again.");
                console.error("Error fetching payment intent:", err);
            });
    }, [amount]);

    // ✅ Create order in Sanity after successful payment

    const createOrder = async () => {
        try {
            if (!cart || cart.length === 0) {
                setError("Cart is empty. Cannot create an order.");
                return;
            }
    
            // ✅ Fetch correct customer reference from Sanity
            const { data } = await axios.get(`/api/customers?email=${user?.primaryEmailAddress?.emailAddress}`);
            const customerRef = data.customers[0]?._id;  // ✅ Use correct Sanity _id
    
            if (!customerRef) {
                setError("Customer not found. Please complete your profile.");
                return;
            }
    
            // ✅ Extract product details from cart
            


            const productDetails = cart.map((item) => ({
                productId: item.id, // ✅ Ensure this matches Sanity _id
                name: item.name,
                quantitySold: item.quantity ?? 1, // ✅ Use quantity from CartItem
                price: item.price,
            }));
            









    
            const response = await axios.post("/api/orders", {
                totalAmount: amount,
                paymentStatus: "Paid",
                orderStatus: "Processing",
                customer: { _ref: customerRef, _type: "reference" }, // ✅ Correct customer reference
                productDetails, // ✅ Correct product details format
            });
    
            if (response.data.success) {
                console.log("Order created successfully:", response.data.order);
                router.push("/admin/orders"); // Redirect to admin orders page
            } else {
                setError("Failed to create order.");
            }
        } catch (error) {
            console.error("Error creating order:", error);
            setError("Error processing order. Please contact support.");
        }
    };
 
    



    
    // ✅ Type Guard to check if result contains paymentIntent
    function hasPaymentIntent(result: any): result is { paymentIntent: { status: string } } {
        return result && result.paymentIntent && typeof result.paymentIntent.status === "string";
    }

    // ✅ Handle Payment Submission
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        if (!stripe || !elements) {
            setError("Stripe has not loaded properly. Please refresh and try again.");
            setLoading(false);
            return;
        }

        if (!clientSecret) {
            setError("Payment initialization failed. Please try again.");
            setLoading(false);
            return;
        }

        // Submit elements before confirming payment
        const { error: submitErrors } = await elements.submit();
        if (submitErrors) {
            setError(submitErrors.message || "An error occurred while submitting.");
            setLoading(false);
            return;
        }

        // Confirm payment with Stripe
        const result = await stripe.confirmPayment({
            elements,
            clientSecret,
            confirmParams: {
                return_url: `${window.location.origin}/payment-success?amount=${amount}&orderId=${orderId || ""}`,
            },
        });

        // ✅ FIX: Use Type Guard to safely check paymentIntent
        if (hasPaymentIntent(result) && result.paymentIntent.status === "succeeded") {
            setError(null);
            await createOrder(); // Call function to save order in Sanity
        } else {
            setError(result.error?.message || "Payment failed. Please try again.");
        }

        setLoading(false);
    };

    return (
        <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Review Your Order</h2>

            {/* ✅ Order Summary UI */}
            <div className="border p-4 rounded-md shadow-md mb-4">
                <h3 className="text-lg font-semibold mb-2">Order Summary</h3>

                {cart.length > 0 ? (
                    <ul className="space-y-2">
                        {cart.map((item) => (
                            <li key={item.id} className="flex justify-between items-center border-b pb-2">
                                <div className="flex items-center space-x-3">
                                    <img src={item.image} alt={item.name} className="w-12 h-12 rounded-md" />
                                    <span className="font-medium">{item.name}</span>
                                </div>
                                <span className="font-semibold">Rs {item.price}</span>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-gray-500">Your cart is empty.</p>
                )}
            </div>

            {/* ✅ Show total amount */}
            <p className="text-lg font-semibold mb-4">Total Amount: Rs {amount}</p>

            {/* ✅ Payment Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
                {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}

                {isPaymentReady ? (
                    <>
                        <PaymentElement />
                        {orderId && (
                            <p className="text-gray-600 text-sm mt-2">
                                🔹 Order ID: <strong>{orderId}</strong>
                            </p>
                        )}
                        <button 
                            className="w-full bg-black text-white py-2 mt-4 rounded-md disabled:opacity-50"
                            disabled={loading}
                        >
                            {loading ? "Processing..." : "Pay Now"}
                        </button>
                    </>
                ) : (
                    <p className="text-gray-500 text-center">Loading payment options...</p>
                )}
            </form>
        </div>
    );
};

export default PlaceOrder;



