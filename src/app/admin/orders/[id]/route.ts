// import { NextResponse } from "next/server";
// import { client } from "@/sanity/lib/client";

// export async function PUT(req: Request, { params }: { params: { id: string } }) {
//   try {
//     const { orderStatus } = await req.json();
//     await client.patch(params.id).set({ orderStatus }).commit();
//     return NextResponse.json({ success: true, message: "Order updated successfully" });
//   } catch (error) {
//     return NextResponse.json({ success: false, message: "Failed to update order", error: error.message }, { status: 500 });
//   }
// }



// import { NextResponse } from "next/server";
// import { client } from "@/sanity/lib/client";

// export async function PUT(req: Request, { params }: { params: { id: string } }) {
//   try {
//     const { orderStatus } = await req.json();
//     await client.patch(params.id).set({ orderStatus }).commit();
//     return NextResponse.json({ success: true, message: "Order updated successfully" });
//   } catch (error: unknown) {
//     let errorMessage = "An unknown error occurred";

//     if (error instanceof Error) {
//       errorMessage = error.message;
//     }

//     return NextResponse.json(
//       { success: false, message: "Failed to update order", error: errorMessage },
//       { status: 500 }
//     );
//   }
// }

