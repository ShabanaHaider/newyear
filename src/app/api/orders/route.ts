// /app/api/orders/route.ts
import { NextResponse } from "next/server";
import { client } from "@/lib/sanity"; // Update this import to match your folder structure
import { v4 as uuidv4 } from "uuid";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const orderId = uuidv4(); // Generate unique order ID

    const newOrder = {
      _type: "order",
      orderId,
      productId: body.productId,
      customerId: body.customerId,
      quantitySold: body.quantitySold,
      price: body.price,
      salesTax: body.salesTax,
      priceafterTax: body.priceafterTax,
      paymentStatus: body.paymentStatus,
      productDescription: body.productDescription,
      customerName: body.customerName,
      shippingAddress: {
        houseAddress: body.shippingAddress.houseAddress,
        area: body.shippingAddress.area,
        city: body.shippingAddress.city,
      },
      orderDate: new Date().toISOString(),
    };

    const createdOrder = await client.create(newOrder);

    return NextResponse.json({ success: true, order: createdOrder });
  } catch (error) {
    console.error("Error creating order:", error);
    return NextResponse.json({ success: false, error: "Failed to create order" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const orders = await client.fetch(`*[_type == "order"]`);
    return NextResponse.json({ success: true, orders });
  } catch (error) {
    console.error("Error fetching orders:", error);
    return NextResponse.json({ success: false, error: "Failed to fetch orders" }, { status: 500 });
  }
}
