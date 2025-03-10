// import { Code } from "lucide-react";
// import { NextRequest, NextResponse } from "next/server";

// const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
// export async function POST(request: NextRequest) {
//     try {
//         const { amount } = await request.json();

//         const paymentIntent = await stripe.paymentIntents.create({
//             amount: amount,
//             currency: 'usd',
//             automatic_payment_methods: { enabled: true },
//             // automatic_payment_methods: ['card_present'], 
//         })

//         return NextResponse.json({ clientSecret: paymentIntent.client_secret })

//     }
//     catch (err: unknown) {
//         if (err instanceof Error) {
//             return NextResponse.json({
//                 status: 500,
//                 body: { error: err.message }
//             })
//         }
//     }
// }


// updated Code



import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export async function POST(request: NextRequest) {
    try {
        const { amount } = await request.json();

        if (!amount || isNaN(amount)) {
            return NextResponse.json(
                { error: "Invalid amount provided" },
                { status: 400 }
            );
        }

        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount,
            currency: "usd",
            automatic_payment_methods: { enabled: true },
        });

        return NextResponse.json({ clientSecret: paymentIntent.client_secret });
    } catch (err: unknown) {
        if (err instanceof Error) {
            console.error("Stripe Payment Intent Error:", err);
            return NextResponse.json(
                { error: err.message },
                { status: 500 }
            );
        }
        return NextResponse.json(
            { error: "An unknown error occurred" },
            { status: 500 }
        );
    }
}


