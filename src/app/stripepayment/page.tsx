// insert as an app
// "use client";

// import convertToSubCurrency from "@/lib/ConvertToSubCurrency";
// import PlaceOrder from "@/app/components/PlaceOrder";
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";

// if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
//   throw new Error("NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is not defined");
// }

// const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

// const StripePaymentPage = () => {
//   const amount = 49.99; // You may replace this with a dynamic value based on the cart

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen p-6">
//       <h1 className="text-4xl font-bold text-center mb-6">
//         Payment Request: ${amount}
//       </h1>

//       <Elements
//         stripe={stripePromise}
//         options={{
//           mode: "payment",
//           amount: convertToSubCurrency(amount),
//           currency: "usd",
//         }}
//       >
//         <PlaceOrder amount={amount} />
//       </Elements>
//     </div>
//   );
// };

// export default StripePaymentPage;


// code after integration of clerkjs


// "use client";

// import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
// import convertToSubCurrency from "@/lib/ConvertToSubCurrency";
// import PlaceOrder from "@/app/components/PlaceOrder";
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";

// if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
//   throw new Error("NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is not defined");
// }

// const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

// const StripePaymentPage = () => {
//   const amount = 49.99; // You may replace this with a dynamic value based on the cart

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen p-6">
//       {/* ✅ If user is not signed in, show Sign In button */}
//       <SignedOut>
//         <div className="flex flex-col items-center">
//           <h1 className="text-2xl font-bold mb-4">Sign In to Continue</h1>
//           <SignInButton>
//             <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all">
//               Sign In
//             </button>
//           </SignInButton>
//         </div>
//       </SignedOut>

//       {/* ✅ If user is signed in, show the Stripe payment form */}
//       <SignedIn>
//         <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg">
//           <div className="flex justify-between items-center mb-4">
//             <h1 className="text-2xl font-bold">Payment Request: ${amount}</h1>
//             {/* Show user profile button */}
//             <UserButton 
//               appearance={{ 
//                 elements: { userButtonTrigger: "px-4 py-2 bg-blue-500 text-white font-medium rounded hover:bg-blue-600 transition" } 
//               }} 
//             />
//           </div>

//           <Elements
//             stripe={stripePromise}
//             options={{
//               mode: "payment",
//               amount: convertToSubCurrency(amount),
//               currency: "usd",
//             }}
//           >
//             <PlaceOrder amount={amount} />
//           </Elements>
//         </div>
//       </SignedIn>
//     </div>
//   );
// };

// export default StripePaymentPage;



// final page

// "use client";

// import { useSearchParams } from "next/navigation";
// import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
// import convertToSubCurrency from "@/lib/ConvertToSubCurrency";
// import PlaceOrder from "@/app/components/PlaceOrder";
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";

// if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
//   throw new Error("NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is not defined");
// }

// const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

// const StripePaymentPage = () => {
//   const searchParams = useSearchParams();
//   const productPrice = searchParams.get("productPrice");

//   if (!productPrice) {
//     return <p>Error: Product price is missing.</p>;
//   }

//   const totalAmount = parseFloat(productPrice); // Convert price to number

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen p-6">
//       <SignedOut>
//         <div className="flex flex-col items-center">
//           <h1 className="text-2xl font-bold mb-4">Sign In to Continue</h1>
//           <SignInButton>
//             <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700">
//               Sign In
//             </button>
//           </SignInButton>
//         </div>
//       </SignedOut>

//       <SignedIn>
//         <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg">
//           <div className="flex justify-between items-center mb-4">
//             <h1 className="text-2xl font-bold">Payment Request: ${totalAmount}</h1>
//             <UserButton />
//           </div>

//           <Elements
//             stripe={stripePromise}
//             options={{
//               mode: "payment",
//               amount: convertToSubCurrency(totalAmount),
//               currency: "usd",
//             }}
//           >
//             <PlaceOrder amount={totalAmount} />
//           </Elements>
//         </div>
//       </SignedIn>
//     </div>
//   );
// };

// export default StripePaymentPage;


// usesearch param error

import { Suspense } from "react";
import StripePaymentComponent from "./StripePaymentComponent" // Import the client component

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <StripePaymentComponent />
    </Suspense>
  );
}






