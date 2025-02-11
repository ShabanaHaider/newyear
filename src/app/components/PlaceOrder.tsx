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


"use client";
import { useState, useEffect, Suspense } from "react";
import { useStripe, useElements, PaymentElement } from "@stripe/react-stripe-js";
import convertToSubCurrency from "../../lib/ConvertToSubCurrency";

const PlaceOrder = ({ amount }: { amount: number }) => {
    console.log(window.location.host);

    const myhost = window.location.host;
    let URL = "";

    if (myhost === "localhost:3000") {
        URL = "http://localhost:3000";
    } else {
        URL = "https://stripe-payment-one-nu.vercel.app";
    }

    const stripe = useStripe();
    const elements = useElements();

    const [errorMessage, setError] = useState<string | null>(null);
    const [clientSecret, setClientSecret] = useState("");
    const [loading, setLoading] = useState(false);
    const [isPaymentReady, setIsPaymentReady] = useState(false);

    // Fetch client secret when amount changes
    useEffect(() => {
        fetch("/api/payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ amount: convertToSubCurrency(amount) }),
        })
            .then((res) => res.json())
            .then((data) => {
                setClientSecret(data.clientSecret);
                setIsPaymentReady(true);
            })
            .catch((err) => {
                setError("Failed to initialize payment. Please try again.");
                console.error("Error fetching payment intent:", err);
            });
    }, [amount]);

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

        const { error: submitErrors } = await elements.submit();
        if (submitErrors) {
            setError(submitErrors.message || "An error occurred while submitting.");
            setLoading(false);
            return;
        }

        const { error } = await stripe.confirmPayment({
            elements,
            clientSecret,
            confirmParams: {
                return_url: `${URL}/payment-success?amount=${amount}`,
            },
        });

        if (error) {
            setError(error.message || "Payment failed. Please try again.");
        } else {
            setError(null);
        }

        setLoading(false);
    };

    return (
        <form onSubmit={handleSubmit} className="p-8">
            {errorMessage && <p className="text-red-500 text-sm mb-4">{errorMessage}</p>}
            
            {isPaymentReady ? (
                <>
                    <PaymentElement />
                    <button 
                        className="w-full bg-black text-white py-2 mt-5 disabled:opacity-50"
                        disabled={loading}
                    >
                        {loading ? "Processing..." : "Pay Now"}
                    </button>
                </>
            ) : (
                <p className="text-gray-500 text-center">Loading payment options...</p>
            )}
        </form>
    );
};

export default PlaceOrder;
