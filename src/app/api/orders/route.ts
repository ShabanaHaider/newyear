// import { NextResponse } from 'next/server';
// import { client } from '@/lib/sanity'; // Ensure your sanity client is set up correctly
// import { v4 as uuidv4 } from 'uuid';

// export async function GET() {
//   try {
//     // Fetch all orders from Sanity
//     const orders = await client.fetch('*[_type == "order"]');
//     return NextResponse.json({ success: true, orders });
//   } catch (error) {
//     console.error('Error fetching orders:', error);
//     return NextResponse.json({ success: false, error: 'Failed to fetch orders' }, { status: 500 });
//   }
// }

// export async function POST(req: Request) {
//   try {
//     const body = await req.json();

//     // Create a unique orderId for the new order
//     const orderId = uuidv4(); 

//     const newOrder = {
//       _type: 'order',
//       orderId,
//       productId: body.productId,
//       customerId: body.customerId,
//       quantitySold: body.quantitySold,
//       price: body.price,
//       salesTax: body.salesTax,
//       priceafterTax: body.priceafterTax,
//       paymentStatus: body.paymentStatus,
//       productDescription: body.productDescription,
//       customerName: body.customerName,
//       shippingAddress: body.shippingAddress,
//       orderDate: new Date().toISOString(),
//     };

//     // Save the new order in Sanity
//     const createdOrder = await client.create(newOrder);

//     return NextResponse.json({ success: true, order: createdOrder });
//   } catch (error) {
//     console.error('Error creating order:', error);
//     return NextResponse.json({ success: false, error: 'Failed to create order' }, { status: 500 });
//   }
// }



// adjusted code for multiple products

// import { NextResponse } from 'next/server';
// import { client } from '@/lib/sanity'; // Ensure your sanity client is set up correctly
// import { v4 as uuidv4 } from 'uuid';

// export async function GET() {
//   try {
//     // Fetch all orders from Sanity
//     const orders = await client.fetch('*[_type == "order"]');
//     return NextResponse.json({ success: true, orders });
//   } catch (error) {
//     console.error('Error fetching orders:', error);
//     return NextResponse.json({ success: false, error: 'Failed to fetch orders' }, { status: 500 });
//   }
// }

// export async function POST(req: Request) {
//   try {
//     const body = await req.json();

//     // Create a unique orderId for the new order
//     const orderId = uuidv4();

//     const newOrder = {
//       _type: 'order',
//       orderId,
//       productId: body.productId,
//       customerId: body.customerId,
//       quantitySold: body.quantitySold,
//       price: body.price,
//       salesTax: body.salesTax,
//       priceafterTax: body.priceafterTax,
//       paymentStatus: body.paymentStatus,
//       productDescription: body.productDescription, // We will handle this for backward compatibility
//       customerName: body.customerName,
//       shippingAddress: body.shippingAddress,
//       orderDate: new Date().toISOString(),
//       orderStatus: body.orderStatus || ["pending"], // Default to 'pending' status
//       paymentMethod: body.paymentMethod || [], // Handle payment method if provided
//       transactionId: body.transactionId,
//       totalAmount: body.totalAmount, // Added totalAmount
//       productDetails: body.productDetails, // Add the array of product details
//     };

//     // Save the new order in Sanity
//     const createdOrder = await client.create(newOrder);

//     return NextResponse.json({ success: true, order: createdOrder });
//   } catch (error) {
//     console.error('Error creating order:', error);
//     return NextResponse.json({ success: false, error: 'Failed to create order' }, { status: 500 });
//   }
// }

// updated
// import { NextResponse } from "next/server";
// import { client } from "@/lib/sanity";
// import { v4 as uuidv4 } from "uuid";

// export async function GET() {
//   try {
//     const orders = await client.fetch("*[_type == 'order']");
//     return NextResponse.json({ success: true, orders });
//   } catch (error) {
//     console.error("Error fetching orders:", error);
//     return NextResponse.json({ success: false, error: "Failed to fetch orders" }, { status: 500 });
//   }
// }

// export async function POST(req: Request) {
//   try {
//     const body = await req.json();
//     const orderId = uuidv4();
//     const newOrder = {
//       _type: "order",
//       orderId,
//       customerId: body.customerId,
//       shippingAddress: body.shippingAddress,
//       orderDate: new Date().toISOString(),
//       orderStatus: body.orderStatus || ["pending"],
//       paymentStatus: body.paymentStatus,
//       totalAmount: body.totalAmount,
//       productDetails: body.productDetails,
//     };
//     const createdOrder = await client.create(newOrder);
//     return NextResponse.json({ success: true, order: createdOrder });
//   } catch (error) {
//     console.error("Error creating order:", error);
//     return NextResponse.json({ success: false, error: "Failed to create order" }, { status: 500 });
//   }
// }

// export async function PUT(req: Request) {
//   try {
//     const { orderId, orderStatus } = await req.json();
//     const updatedOrder = await client.patch(orderId).set({ orderStatus: [orderStatus] }).commit();
//     return NextResponse.json({ success: true, order: updatedOrder });
//   } catch (error) {
//     console.error("Error updating order status:", error);
//     return NextResponse.json({ success: false, error: "Failed to update order status" }, { status: 500 });
//   }
// } 


// motivated

// import { NextResponse } from "next/server";
// import { client } from "@/lib/sanity";
// import { v4 as uuidv4 } from "uuid";
// import { NextRequest } from "next/server";
// export async function GET() {
//   try {
//     const orders = await client.fetch(`*[_type == 'order']{ 
//       _id, orderStatus, orderDate, paymentStatus, totalAmount, 
//       customer->{customerName, customerEmail, customerMobileNumber}, 
//       shippingAddress, productDetails
//     }`);
//     return NextResponse.json({ success: true, orders });
//   } catch (error) {
//     console.error("Error fetching orders:", error);
//     return NextResponse.json({ success: false, error: "Failed to fetch orders" }, { status: 500 });
//   }
// }


// export async function POST(req: NextRequest) {
//   try {
//     const body = await req.json();
//     console.log("Received Order Data:", body); // Debugging

//     if (!body.orderId) {
//       return NextResponse.json({ success: false, error: "Missing orderId" }, { status: 400 });
//     }

//     const newOrder = {
//       _type: "order",
//       _id: body.orderId, // Use the same orderId as in PlaceOrder.tsx
//       ...body,
//       orderDate: new Date().toISOString(),
//     };

//     const createdOrder = await client.create(newOrder);
//     return NextResponse.json({ success: true, order: createdOrder });
//   } catch (error) {
//     console.error("Error creating order:", error);
//     return NextResponse.json({ success: false, error: "Failed to create order" }, { status: 500 });
//   }
// }


// export async function PUT(req: NextRequest) {
//   try {
//     const { orderId, ...updates } = await req.json();
//     if (!orderId) {
//       return NextResponse.json({ success: false, error: "Missing orderId" }, { status: 400 });
//     }

//     const updatedOrder = await client
//       .patch(orderId)
//       .set(updates)
//       .commit();

//     return NextResponse.json({ success: true, order: updatedOrder });
//   } catch (error) {
//     console.error("Error updating order:", error);
//     return NextResponse.json({ success: false, error: "Failed to update order" }, { status: 500 });
//   }
// }

// refined late night to show customer info with order infor


// Friday

// import { NextResponse } from "next/server";
// import { client } from "@/lib/sanity";
// import { NextRequest } from "next/server";

// export async function GET() {
//   try {
//     const orders = await client.fetch(
//       `*[_type == 'order'] | order(orderDate desc) {
//         _id, 
//         orderStatus, 
//         orderDate, 
//         paymentStatus, 
//         totalAmount, 
//         customer->{
//           customerId,
//           customerName, 
//           customerEmail, 
//           customerMobileNumber,
//           customerAddress {
//             houseAddress, 
//             area, 
//             city
//           }
//         }, 
//         shippingAddress, 
//         productDetails
//       }`
//     );

//     return NextResponse.json({ success: true, orders });
//   } catch (error) {
//     console.error("Error fetching orders:", error);
//     return NextResponse.json(
//       { success: false, error: "Failed to fetch orders" },
//       { status: 500 }
//     );
//   }
// }

// export async function POST(req: NextRequest) {
//   try {
//     const body = await req.json();
//     console.log("Received Order Data:", body);

//     if (!body.orderId) {
//       return NextResponse.json(
//         { success: false, error: "Missing orderId" },
//         { status: 400 }
//       );
//     }

//     const newOrder = {
//       _type: "order",
//       _id: body.orderId, 
//       ...body,
//       orderDate: new Date().toISOString(),
//     };

//     const createdOrder = await client.create(newOrder);
//     return NextResponse.json({ success: true, order: createdOrder });
//   } catch (error) {
//     console.error("Error creating order:", error);
//     return NextResponse.json(
//       { success: false, error: "Failed to create order" },
//       { status: 500 }
//     );
//   }
// }

// export async function PUT(req: NextRequest) {
//   try {
//     const { orderId, ...updates } = await req.json();
//     if (!orderId) {
//       return NextResponse.json(
//         { success: false, error: "Missing orderId" },
//         { status: 400 }
//       );
//     }

//     const updatedOrder = await client.patch(orderId).set(updates).commit();

//     return NextResponse.json({ success: true, order: updatedOrder });
//   } catch (error) {
//     console.error("Error updating order:", error);
//     return NextResponse.json(
//       { success: false, error: "Failed to update order" },
//       { status: 500 }
//     );
//   }
// }


// Saturday

// import { NextResponse } from "next/server";
// import { client } from "@/lib/sanity";
// import { NextRequest } from "next/server";



// export async function GET() {
//   try {
    

//     const orders = await client.fetch(`*[_type == 'order']{
//       _id, 
//       orderStatus, 
//       orderDate, 
//       paymentStatus, 
//       totalAmount, 
//       "customer": customer->{_id, customerName, customerEmail, customerMobileNumber}, 
//       shippingAddress, 
//       "productDetails": productDetails[]->{
//         _id, productName, price
//       }
//     }`);

//     return NextResponse.json({ success: true, orders });
//   } catch (error) {
//     console.error("Error fetching orders:", error);
//     return NextResponse.json({ success: false, error: "Failed to fetch orders" }, { status: 500 });
//   }
// }




// export async function POST(req: NextRequest) { 
//   try {
//     const body = await req.json();
//     console.log("Received Order Data:", body); // Debugging

//     if (!body.orderId || !body.customer?._ref) {  // ✅ Check customer._ref instead of customerId
//       return NextResponse.json({ success: false, error: "Missing orderId or customer reference" }, { status: 400 });
//     }

//     const newOrder = {
//       _type: "order",
//       _id: body.orderId,
//       orderStatus: body.orderStatus || "Pending",
//       paymentStatus: body.paymentStatus || "Pending",
//       totalAmount: body.totalAmount || 0,  
//       customer: body.customer,  // ✅ Use the correct reference format
//       orderDate: new Date().toISOString(),
//       shippingAddress: body.shippingAddress || null,
//       productDetails: body.productDetails || [],
//     };

//     const createdOrder = await client.create(newOrder);
//     return NextResponse.json({ success: true, order: createdOrder });
//   } catch (error) {
//     console.error("Error creating order:", error);
//     return NextResponse.json({ success: false, error: "Failed to create order" }, { status: 500 });
//   }
// }


// export async function PUT(req: NextRequest) {
//   try {
//     const { orderId, ...updates } = await req.json();
//     if (!orderId) {
//       return NextResponse.json(
//         { success: false, error: "Missing orderId" },
//         { status: 400 }
//       );
//     }

//     const updatedOrder = await client.patch(orderId).set(updates).commit();

//     return NextResponse.json({ success: true, order: updatedOrder });
//   } catch (error) {
//     console.error("Error updating order:", error);
//     return NextResponse.json(
//       { success: false, error: "Failed to update order" },
//       { status: 500 }
//     );
//   }
// } 


// to exapnd get in order to solve issues



// import { NextResponse } from "next/server";
// import { client } from "@/lib/sanity";
// import { NextRequest } from "next/server";



// export async function GET() {
//   try {
    

//     const orders = await client.fetch(`*[_type == 'order']{
//       _id, 
//       orderStatus, 
//       orderDate, 
//       paymentStatus, 
//       totalAmount, 
//       "customer": customer->{_id, customerName, customerEmail, customerMobileNumber}, 
//       shippingAddress, 
//       "productDetails": productDetails[]->{
//         _id, productName, price
//       }
//     }`);

//     return NextResponse.json({ success: true, orders });
//   } catch (error) {
//     console.error("Error fetching orders:", error);
//     return NextResponse.json({ success: false, error: "Failed to fetch orders" }, { status: 500 });
//   }
// }


// export async function GET(req: NextRequest) {
//   try {
//     const orders = await client.fetch(`
//       *[_type == "order"] {
//         _id,
//         orderStatus,
//         paymentStatus,
//         totalAmount,
//         paymentMethod,
//         quantitySold,
//         salesTax,
//         priceafterTax,
//         orderDate,
//         shippingAddress,
//         productDetails[]->{_id, productName, price},  // ✅ Expanding Product Details
//         customer->{_id, customerName, customerEmail, customerMobileNumber}  // ✅ Expanding Customer Details
//       }
//     `); // ✅ Corrected syntax (closed template literal)

//     return NextResponse.json({ success: true, orders });
//   } catch (error) {
//     console.error("Error fetching orders:", error);
//     return NextResponse.json({ success: false, error: "Failed to fetch orders" }, { status: 500 });
//   }
// }


// export async function POST(req: NextRequest) { 
//   try {
//     const body = await req.json();
//     console.log("Received Order Data:", body); // Debugging

//     if (!body.orderId || !body.customer?._ref) {  // ✅ Check customer._ref instead of customerId
//       return NextResponse.json({ success: false, error: "Missing orderId or customer reference" }, { status: 400 });
//     }

//     const newOrder = {
//       _type: "order",
//       _id: body.orderId,
//       orderStatus: body.orderStatus || "Pending",
//       paymentStatus: body.paymentStatus || "Pending",
//       totalAmount: body.totalAmount || 0,  
//       customer: body.customer,  // ✅ Use the correct reference format
//       orderDate: new Date().toISOString(),
//       shippingAddress: body.shippingAddress || null,
//       productDetails: body.productDetails || [],
//     };

//     const createdOrder = await client.create(newOrder);
//     return NextResponse.json({ success: true, order: createdOrder });
//   } catch (error) {
//     console.error("Error creating order:", error);
//     return NextResponse.json({ success: false, error: "Failed to create order" }, { status: 500 });
//   }
// }


// export async function PUT(req: NextRequest) {
//   try {
//     const { orderId, ...updates } = await req.json();
//     if (!orderId) {
//       return NextResponse.json(
//         { success: false, error: "Missing orderId" },
//         { status: 400 }
//       );
//     }

//     const updatedOrder = await client.patch(orderId).set(updates).commit();

//     return NextResponse.json({ success: true, order: updatedOrder });
//   } catch (error) {
//     console.error("Error updating order:", error);
//     return NextResponse.json(
//       { success: false, error: "Failed to update order" },
//       { status: 500 }
//     );
//   }
// }


// somehow working

// import { NextResponse } from "next/server";
// import { client } from "@/lib/sanity";
// import { NextRequest } from "next/server";

// export async function GET(req: NextRequest) {
//   try {
//     const orders = await client.fetch(`
//       *[_type == "order"] {
//         _id,
//         orderStatus,
//         paymentStatus,
//         totalAmount,
//         paymentMethod,
//         quantitySold,
//         salesTax,
//         priceafterTax,
//         orderDate,
//         shippingAddress,
//         productDetails[]->{
//           _id, 
//           productName, 
//           price
//         },  // ✅ Expand product details

//         customer->{
//           _id,
//           customerName,
//           customerEmail,
//           customerMobileNumber
//         }  // ✅ Expand customer details
//       }
//     `); 

//     return NextResponse.json({ success: true, orders });
//   } catch (error) {
//     console.error("Error fetching orders:", error);
//     return NextResponse.json({ success: false, error: "Failed to fetch orders" }, { status: 500 });
//   }
// }

// export async function POST(req: NextRequest) {
//   try {
//     const body = await req.json();
//     console.log("Received Order Data:", body); // Debugging

//     if (!body.customer?._ref) {  // ✅ Ensure customer reference exists
//       return NextResponse.json({ success: false, error: "Missing customer reference" }, { status: 400 });
//     }

//     if (!body.productDetails || body.productDetails.length === 0) { 
//       return NextResponse.json({ success: false, error: "No products in order" }, { status: 400 });
//     }

//         const newOrder = {
//       _type: "order",
//       _id: body.orderId,
//       orderStatus: body.orderStatus || "Pending",
//       paymentStatus: body.paymentStatus || "Pending",
//       totalAmount: body.totalAmount || 0,
//       customer: { _type: "reference", _ref: body.customer._ref }, // ✅ Store customer as reference
//       orderDate: new Date().toISOString(),
//       shippingAddress: body.shippingAddress || null,
//       productDetails: body.productDetails.map((product: any) => ({
//         _key: product._id,  // ✅ Assign a unique key for each product
//         _type: "reference",
//         _ref: product._id,   // ✅ Store product as a reference
//       })),
//     };

//     const createdOrder = await client.create(newOrder);
//     return NextResponse.json({ success: true, order: createdOrder });
//   } catch (error) {
//     console.error("Error creating order:", error);
//     return NextResponse.json({ success: false, error: "Failed to create order" }, { status: 500 });
//   }
// }


// export async function PUT(req: NextRequest) {
//   try {
//     const { orderId, ...updates } = await req.json();
//     if (!orderId) {
//       return NextResponse.json(
//         { success: false, error: "Missing orderId" },
//         { status: 400 }
//       );
//     }

//     const updatedOrder = await client.patch(orderId).set(updates).commit();

//     return NextResponse.json({ success: true, order: updatedOrder });
//   } catch (error) {
//     console.error("Error updating order:", error);
//     return NextResponse.json(
//       { success: false, error: "Failed to update order" },
//       { status: 500 }
//     );
//   }
// }

// impossible 

// import { NextResponse } from "next/server";
// import { client } from "@/lib/sanity";
// import { NextRequest } from "next/server";

// export async function GET(req: NextRequest) {
//   try {
//     const orders = await client.fetch(`
//       *[_type == "order"] {
//          _id,
//        orderStatus,
//        paymentStatus,
//         totalAmount,
//         paymentMethod,
//       quantitySold,
//       salesTax,
//        priceafterTax,
//        orderDate,
//       shippingAddress,
        
//         // ✅ Ensure product details are correctly fetched
//        productDetails[]->{
//            _id, 
//            productName, 
//           price
//          },

//         // ✅ Ensure customer details are correctly fetched
//         customer->{
//            _id,
//            customerName,
//            customerEmail,
//            customerMobileNumber
//          }  
//        }   

// `);

//     return NextResponse.json({ success: true, orders });
//   } catch (error) {
//     console.error("Error fetching orders:", error);
//     return NextResponse.json({ success: false, error: "Failed to fetch orders" }, { status: 500 });
//   }
// }

// export async function POST(req: NextRequest) {
//   try {
//     const body = await req.json();
//     console.log("Received Order Data:", body); // Debugging

//     if (!body.customer?._ref) {  
//       return NextResponse.json({ success: false, error: "Missing customer reference" }, { status: 400 });
//     }

//     if (!body.productDetails || body.productDetails.length === 0) { 
//       return NextResponse.json({ success: false, error: "No products in order" }, { status: 400 });
//     }

//     const newOrder = {
//       _type: "order",
//       _id: body.orderId,
//       orderStatus: body.orderStatus || "Pending",
//       paymentStatus: body.paymentStatus || "Pending",
//       totalAmount: body.totalAmount || 0,
//       customer: { _type: "reference", _ref: body.customer._ref }, // ✅ Store customer as reference
//       orderDate: new Date().toISOString(),
//       shippingAddress: body.shippingAddress || null,
//       productDetails: body.productDetails.map((product: any) => ({
//         _key: product._id,  
//         _type: "reference",
//         _ref: product._id,   
//       })),
//     };

//     const createdOrder = await client.create(newOrder);
//     return NextResponse.json({ success: true, order: createdOrder });
//   } catch (error) {
//     console.error("Error creating order:", error);
//     return NextResponse.json({ success: false, error: "Failed to create order" }, { status: 500 });
//   }
// }

// export async function PUT(req: NextRequest) {
//   try {
//     const { orderId, ...updates } = await req.json();
//     if (!orderId) {
//       return NextResponse.json({ success: false, error: "Missing orderId" }, { status: 400 });
//     }

//     const updatedOrder = await client.patch(orderId).set(updates).commit();
//     return NextResponse.json({ success: true, order: updatedOrder });
//   } catch (error) {
//     console.error("Error updating order:", error);
//     return NextResponse.json({ success: false, error: "Failed to update order" }, { status: 500 });
//   }
// }



// Tuesday work 


import { NextResponse } from "next/server";
// import { client } from "@/lib/sanity";
import { NextRequest } from "next/server";

import { client } from "@/sanity/lib/client";



export async function GET() {
  try {
    const orders = await client.fetch(
     

      `*[_type == "order"] | order(_createdAt desc)[0..20] {
        _id,
        orderStatus,
        paymentStatus,
        totalAmount,
        paymentMethod,
        quantitySold,
        salesTax,
        priceafterTax,
        shippingAddress,
        productDetails[]->{
          _id, productName, price
        },
        customer->{
          _id, customerName, customerEmail, customerMobileNumber
        }
      }`
    );

    console.log("Fetched Orders from Sanity:", orders); // ✅ Debug log

    return NextResponse.json({ success: true, orders });
  } catch (error) {
    console.error("Error fetching orders:", error);
    return NextResponse.json({ success: false, message: "Failed to fetch orders" }, { status: 500 });
  }
} 



// export async function POST(req: Request) {
//   try {
//     const body = await req.json();
//     const { productDetails, customer, orderStatus, totalAmount } = body;

//     // Ensure totalAmount is included
//     if (!productDetails || !customer || !orderStatus || totalAmount === undefined) {
//       return NextResponse.json({ success: false, message: "Missing required fields" }, { status: 400 });
//     }

//     const newOrder = {
//       _type: "order",
//       productDetails,
//       customer,
//       orderStatus,
//       totalAmount, // Ensure this field is saved
//     };

//     const createdOrder = await client.create(newOrder);

//     return NextResponse.json({ success: true, order: createdOrder }, { status: 201 });
//   } catch (error) {
//     return NextResponse.json({ success: false, message: "Server Error" }, { status: 500 });
//   }
// }


export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log("Received Order Data:", body); // ✅ Debugging log

    // ✅ Validate Customer Reference
    if (!body.customer?._ref) {  
      return NextResponse.json({ success: false, error: "Missing customer reference" }, { status: 400 });
    }

    // ✅ Validate Product Details
    if (!body.productDetails || body.productDetails.length === 0) { 
      return NextResponse.json({ success: false, error: "No products in order" }, { status: 400 });
    }

    // ✅ Construct New Order Object
    const newOrder = {
      _type: "order",
      orderStatus: body.orderStatus || "Pending",
      paymentStatus: body.paymentStatus || "Pending",
      totalAmount: body.totalAmount || 0,
      // customer: { _type: "reference", _ref: body.customer._ref }, // ✅ Correct customer reference
      customer: {"_ref": "customerId" },
      
      orderDate: new Date().toISOString(),
      shippingAddress: body.shippingAddress || null,
      productDetails: body.productDetails.map((product: any) => ({
        _key: product.productId,  // ✅ Unique key for array items
        product: { _ref: product.productId, _type: "reference" },  // ✅ Correct product reference
        name: product.name,  // ✅ Store additional fields
        quantitySold: product.quantitySold || 1,
        price: product.price || 0,
      })),
    };

    // ✅ Save Order in Sanity
    const createdOrder = await client.create(newOrder);
    
    return NextResponse.json({ success: true, order: createdOrder }, { status: 201 });
  } catch (error) {
    console.error("Error creating order:", error);
    return NextResponse.json({ success: false, error: "Failed to create order" }, { status: 500 });
  }
}
export async function PUT(req: NextRequest) {
  try {
    const { orderId, ...updates } = await req.json();
    if (!orderId) {
      return NextResponse.json({ success: false, error: "Missing orderId" }, { status: 400 });
    }

    const updatedOrder = await client.patch(orderId).set(updates).commit();
    return NextResponse.json({ success: true, order: updatedOrder });
  } catch (error) {
    console.error("Error updating order:", error);
    return NextResponse.json({ success: false, error: "Failed to update order" }, { status: 500 });
  }
}





