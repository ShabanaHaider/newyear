// Feb 20 2025
// import { NextResponse } from "next/server";
// import { client } from "@/sanity/lib/client";

// // ✅ GET: Retrieve all customers
// export async function GET() {
//   try {
//     const customers = await client.fetch(`
//       *[_type == "customer"] {
//         _id,
//         customerName,
//         customerEmail,
//         customerMobileNumber,
//         customerAddress,
//         paymentMethod,
//         "orders": *[_type == "order" && references(^._id)]{ _id, orderStatus }
//       } | order(_createdAt desc)
//     `);

//     return NextResponse.json({ success: true, customers }, { status: 200 });
//   } catch (error) {
//     return NextResponse.json({ success: false, message: "Error fetching customers", error }, { status: 500 });
//   }
// }

// // ✅ POST: Create a new customer
// export async function POST(req: Request) {
//   try {
//     const data = await req.json();
//     const { customerName, customerEmail, customerAddress, customerMobileNumber, paymentMethod } = data;

//     if (!customerName || !customerEmail || !customerMobileNumber || !customerAddress) {
//       return NextResponse.json({ success: false, message: "Missing required fields" }, { status: 400 });
//     }

//     // ✅ Step 1: Create Customer in Sanity
//     const customerResponse = await client.create({
//       _type: "customer",
//       customerName,
//       customerEmail,
//       customerAddress,
//       customerMobileNumber,
//       paymentMethod,
//     });

//     // ✅ Step 2: Create Order in Sanity & Link Customer
//     const orderResponse = await client.create({
//       _type: "order",
//       customerId: { _type: "reference", _ref: customerResponse._id },
//       orderStatus: "pending",
//     });

//     return NextResponse.json({ success: true, customer: customerResponse, order: orderResponse }, { status: 201 });
//   } catch (error) {
//     return NextResponse.json({ success: false, message: "Error creating customer", error }, { status: 500 });
//   }
// }


// after adding console.log


// import { NextResponse } from "next/server";
// import { client } from "@/sanity/lib/client";

// // ✅ GET: Retrieve all customers
// export async function GET() {
//   try {
//     const customers = await client.fetch(`
//       *[_type == "customer"] {
//         _id,
//         customerName,
//         customerEmail,
//         customerMobileNumber,
//         customerAddress,
//         paymentMethod,
//         "orders": *[_type == "order" && references(^._id)]{ _id, orderStatus }
//       } | order(_createdAt desc)
//     `);    


//     return NextResponse.json({ success: true, customers }, { status: 200 });
//   } catch (error) {
//     return NextResponse.json({ success: false, message: "Error fetching customers", error }, { status: 500 });
//   }
// }

// export async function POST(req: Request) {
//   try {
//     const data = await req.json();
//     console.log("Received Data:", data); // ✅ Log received data
    

//     const { customerName, customerEmail, customerAddress, customerMobileNumber, paymentMethod } = data;

//     if (!customerName || !customerEmail || !customerMobileNumber || !customerAddress) {
//       return NextResponse.json({ success: false, message: "Missing required fields" }, { status: 400 });
//     }


//     // ✅ Step 1: Create Customer in Sanity
//     const customerResponse = await client.create({
//       _type: "customer",
//       customerName,
//       customerEmail,
//       customerAddress,
//       customerMobileNumber,
//       paymentMethod,
//     });

//     console.log("Customer Created:", customerResponse); // ✅ Log customer creation response

//     // ✅ Step 2: Create Order in Sanity & Link Customer
//     const orderResponse = await client.create({
//       _type: "order",
//       customerId: { _type: "reference", _ref: customerResponse._id },
//       orderStatus: "pending",
//     });

//     console.log("Order Created:", orderResponse); // ✅ Log order creation response

//     return NextResponse.json({ success: true, customer: customerResponse, order: orderResponse }, { status: 201 });
//   } catch (error) {
//     console.error("Error in POST request:", error); // ✅ Log error if any
//     return NextResponse.json({ success: false, message: "Error creating customer", error }, { status: 500 });
//   }
// } 


// import { NextResponse } from "next/server";
// import { client } from "@/sanity/lib/client";

// export async function GET() {
//   console.log(`[${new Date().toISOString()}] ⏳ Fetching customers...`);
//   const startTime = Date.now();

//   try {
//     const customers = await client.fetch(`
//       *[_type == "customer"] {
      
//         _id,
//         customerName,
//         customerEmail,
//         customerMobileNumber,
//         customerAddress,
//         paymentMethod,
//         "orders": *[_type == "order" && references(^._id)]{ _id, orderStatus }
//       } | order(_createdAt desc)
//     `);

//     const endTime = Date.now();
//     console.log(`[${new Date().toISOString()}] ✅ Customers fetched successfully in ${endTime - startTime}ms.`);

//     return NextResponse.json({ success: true, customers }, { status: 200 });
//   } catch (error) {
//     console.error(`[${new Date().toISOString()}] ❌ Error fetching customers:`, error);

//     return NextResponse.json(
//       {
//         success: false,
//         message: "Error fetching customers",
//         error: error instanceof Error ? error.message : String(error),
//       },
//       { status: 500 }
//     );
//   }
// }

// export async function POST(req: Request) {
//   console.log(`[${new Date().toISOString()}] ⏳ Received POST request for new customer.`);
  
//   try {
//     const data = await req.json();
//     console.log(`[${new Date().toISOString()}] 📩 Received Data:`, data);

//     const { customerName, customerEmail, customerAddress, customerMobileNumber, paymentMethod } = data;

//     if (!customerName || !customerEmail || !customerMobileNumber || !customerAddress) {
//       console.warn(`[${new Date().toISOString()}] ⚠️ Missing required fields.`);
//       return NextResponse.json({ success: false, message: "Missing required fields" }, { status: 400 });
//     }

//     // ✅ Step 1: Create Customer in Sanity
//     console.log(`[${new Date().toISOString()}] ⏳ Creating customer in Sanity...`);
//     const customerStartTime = Date.now();

//     const customerResponse = await client.create({
//       _type: "customer",
//       customerName,
//       customerEmail,
//       customerAddress,
//       customerMobileNumber,
//       paymentMethod,
//     });

//     const customerEndTime = Date.now();
//     console.log(`[${new Date().toISOString()}] ✅ Customer Created in ${customerEndTime - customerStartTime}ms:`, customerResponse);

//     // ✅ Step 2: Create Order in Sanity & Link Customer
//     console.log(`[${new Date().toISOString()}] ⏳ Creating linked order for customer...`);
//     const orderStartTime = Date.now();

//     const orderResponse = await client.create({
//       _type: "order",
//       customerId: { _type: "reference", _ref: customerResponse._id },
//       orderStatus: "pending",
//     });

//     const orderEndTime = Date.now();
//     console.log(`[${new Date().toISOString()}] ✅ Order Created in ${orderEndTime - orderStartTime}ms:`, orderResponse);

//     return NextResponse.json({ success: true, customer: customerResponse, order: orderResponse }, { status: 201 });
//   } catch (error) {
//     console.error(`[${new Date().toISOString()}] ❌ Error in POST request:`, error);

//     return NextResponse.json(
//       {
//         success: false,
//         message: "Error creating customer",
//         error: error instanceof Error ? error.message : String(error),
//       },
//       { status: 500 }
//     );
//   }
// }


// tuesday work


import { NextResponse } from "next/server";
import { client } from "@/sanity/lib/client";

export async function GET() {
  console.log(`[${new Date().toISOString()}] ⏳ Fetching customers...`);
  const startTime = Date.now();

  try {
    const customers = await client.fetch(`
      *[_type == "customer"] | order(_createdAt desc) {
        _id,
        customerName,
        customerEmail,
        customerMobileNumber,
        customerAddress,
        paymentMethod,
        "orders": *[_type == "order" && references(^._id)] | order(_createdAt desc)[0..19] {
          _id, 
          orderStatus 
        }
      }
    `);

    const endTime = Date.now();
    console.log(`[${new Date().toISOString()}] ✅ Customers fetched successfully in ${endTime - startTime}ms.`);

    return NextResponse.json({ success: true, customers }, { status: 200 });
  } catch (error) {
    console.error(`[${new Date().toISOString()}] ❌ Error fetching customers:`, error);

    return NextResponse.json(
      {
        success: false,
        message: "Error fetching customers",
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
} 


export async function POST(req: Request) {
  console.log(`[${new Date().toISOString()}] ⏳ Received POST request for new customer.`);
  
  try {
    const data = await req.json();
    console.log(`[${new Date().toISOString()}] 📩 Received Data:`, data);

    const { customerName, customerEmail, customerAddress, customerMobileNumber, paymentMethod } = data;

    if (!customerName || !customerEmail || !customerMobileNumber || !customerAddress) {
      console.warn(`[${new Date().toISOString()}] ⚠️ Missing required fields.`);
      return NextResponse.json({ success: false, message: "Missing required fields" }, { status: 400 });
    }

    // ✅ Step 1: Create Customer in Sanity
    console.log(`[${new Date().toISOString()}] ⏳ Creating customer in Sanity...`);
    const customerStartTime = Date.now();

    const customerResponse = await client.create({
      _type: "customer",
      customerName,
      customerEmail,
      customerAddress,
      customerMobileNumber,
      paymentMethod,
    });

    const customerEndTime = Date.now();
    console.log(`[${new Date().toISOString()}] ✅ Customer Created in ${customerEndTime - customerStartTime}ms:`, customerResponse);

    // ✅ Step 2: Create Order in Sanity & Link Customer
    console.log(`[${new Date().toISOString()}] ⏳ Creating linked order for customer...`);
    const orderStartTime = Date.now();

    const orderResponse = await client.create({
      _type: "order",
      customerId: { _type: "reference", _ref: customerResponse._id },
      orderStatus: "pending",
    });

    const orderEndTime = Date.now();
    console.log(`[${new Date().toISOString()}] ✅ Order Created in ${orderEndTime - orderStartTime}ms:`, orderResponse);

    return NextResponse.json({ success: true, customer: customerResponse, order: orderResponse }, { status: 201 });
  } catch (error) {
    console.error(`[${new Date().toISOString()}] ❌ Error in POST request:`, error);

    return NextResponse.json(
      {
        success: false,
        message: "Error creating customer",
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}


