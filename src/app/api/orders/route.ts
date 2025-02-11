import { NextResponse } from 'next/server';
import { client } from '@/lib/sanity'; // Ensure your sanity client is set up correctly
import { v4 as uuidv4 } from 'uuid';

export async function GET() {
  try {
    // Fetch all orders from Sanity
    const orders = await client.fetch('*[_type == "order"]');
    return NextResponse.json({ success: true, orders });
  } catch (error) {
    console.error('Error fetching orders:', error);
    return NextResponse.json({ success: false, error: 'Failed to fetch orders' }, { status: 500 });
  }
}




// export default async function Home() {
//   const response: Product[] = await client.fetch(
//     `*[_type == "product"] {
//       _id, 
//       productName, 
//       productId,
//       productDescription,
//       productDimension, 
//       slug, 
//       price, 
//       fullPrice, 
//       image { asset->{_id, url} }, 
//       tags,
//       color,  
//       category,
//       quantity 
//     }`, 
//     { cache: "no-store" } as any
//   );


export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Create a unique orderId for the new order
    const orderId = uuidv4(); 

    const newOrder = {
      _type: 'order',
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
      shippingAddress: body.shippingAddress,
      orderDate: new Date().toISOString(),
    };

    // Save the new order in Sanity
    const createdOrder = await client.create(newOrder);

    return NextResponse.json({ success: true, order: createdOrder });
  } catch (error) {
    console.error('Error creating order:', error);
    return NextResponse.json({ success: false, error: 'Failed to create order' }, { status: 500 });
  }
}
