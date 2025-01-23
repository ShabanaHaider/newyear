

// const DynamicBook = async (props: any) => {
//   console.log(props);
//   const url = await fetch(`https://jsonplaceholder.typicode.com/comments/${props.params.id}`);
//   console.log(props.params.id)
//   const response = await url.json();
//   console.log("Single Book", response);

//   return (
//       <h1 className="text-5xl">
//           Dynammic Route <br />      
            
            
//              {response.id}<br /> <br />
//              {response.productName}<br /> <br />
//              {response.slug.current}<br /> <br />
//             {response.price}<br /> <br />
//             {response.fullPrice}<br /> <br />
//             {response.image}<br /> <br />
//             {response.color}
//            {response.quantity}
          
          
//       </h1>
//   );
// };

// export default DynamicBook

// import { client } from "@/sanity/lib/client";
// import { urlFor } from "@/sanity/lib/image";
// import { notFound } from "next/navigation"; // For handling invalid slugs

// // DynamicBook component for displaying product details
// const DynamicBook = async ({ params }: { params: { id: string } }) => {
//   console.log("Dynamic Route Params:", params);

//   // Fetch the specific product from Sanity using the id (not slug)
//   const product = await client.fetch(
//     `*[_type == "product" && _id == $id][0] {
//       _id,
//       productId,
//       productName,
//       productDescription,
//       slug,
//       price,
//       fullPrice,
//       image { asset->{_id, url} },
//       color,
//       tags,
//       quantity,
//       productDimension
//     }`,
//     { id: params.id }
//   );

//   console.log("Fetched Product:", product);
//   // If the product is not found, show a 404 page
//   if (!product) {
//     notFound();
//   }

//   // Render the product details
//   return (
//     <main className="container mx-auto p-4">
//       <div className="product-detail bg-white shadow-lg rounded-lg p-6">
//         <h1 className="text-5xl font-bold mb-6">{product.productName}</h1>

//         <p className="text-lg mb-2">
//           <strong>Product Description:</strong> {product.productDescription}
//         </p>

//         {/* Display product image */}
//         {product.image && (
//           <img
//             src={urlFor(product.image).width(250).url()}
//             alt={product.productName}
//             className="w-full h-auto rounded-lg mb-4"
//           />
//         )}

//         {/* Product Details */}
//         <p className="text-lg mb-2">
//           <strong>Product Id:</strong> {product.productId}
//         </p>

//         <p className="text-lg mb-2">
//           <strong>Slug:</strong> {product.slug.current}
//         </p>
//         <p className="text-lg mb-2">
//           <strong>Price:</strong> ${product.price}
//         </p>
//         <p className="text-lg mb-2 line-through">
//           <strong>Full Price:</strong> ${product.fullPrice}
//         </p>

//         <p className="text-lg mb-2">
//           <strong>Color:</strong> {product.color}
//         </p>

//         <p className="text-lg mb-2">
//           <strong>Tags:</strong> {product.tags}
//         </p>

//         {/* Render product dimensions */}
//         <div className="text-sm text-gray-500">
//           {product.productDimension && product.productDimension.length > 0 ? (
//             <div>
//               <h3 className="text-gray-800 font-semibold">Dimensions:</h3>
//               {product.productDimension.map((dimension: any, index: number) => (
//                 <div key={index}>
//                   <p>Width: {dimension.width} inches</p>
//                   <p>Height: {dimension.height} inches</p>
//                   <p>Depth: {dimension.length} inches</p>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <p>No dimensions available.</p>
//           )}
//         </div>

//         <p className="text-lg mb-2">
//           <strong>Quantity:</strong> {product.quantity} in stock
//         </p>
//       </div>
//     </main>
//   );
// };

// export default DynamicBook;



"use client"; // Mark this file as a client component

import { useContext } from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { notFound } from "next/navigation"; // For handling invalid slugs
import Shop from "@/app/shop"; // Import the Shop component
import CartProvider from "@/app/cartProvider"; // Import CartProvider
import { CartContext } from "@/app/context";

const DynamicBook = async ({ params }: { params: { id: string } }) => {
  console.log("Dynamic Route Params:", params);

  // Fetch the specific product from Sanity using the id
  const product = await client.fetch(
    `*[_type == "product" && _id == $id][0] {
      _id,
      productId,
      productName,
      productDescription,
      slug,
      price,
      fullPrice,
      image { asset->{_id, url} },
      color,
      tags,
      quantity,
      productDimension
    }`,
    { id: params.id }
  );

  console.log("Fetched Product:", product);

  // If the product is not found, show a 404 page
  if (!product) {
    notFound();
  }

  // Render the product details
  return (
    <CartProvider>
      <main className="container mx-auto p-4">
        <div className="product-detail bg-white shadow-lg rounded-lg p-6">
          <h1 className="text-5xl font-bold mb-6">{product.productName}</h1>

          <p className="text-lg mb-2">
            <strong>Product Description:</strong> {product.productDescription}
          </p>

          {/* Display product image */}
          {product.image && (
            <img
              src={urlFor(product.image).width(250).url()}
              alt={product.productName}
              className="w-full h-auto rounded-lg mb-4"
            />
          )}

          {/* Product Details */}
          <p className="text-lg mb-2">
            <strong>Product Id:</strong> {product.productId}
          </p>

          <p className="text-lg mb-2">
            <strong>Slug:</strong> {product.slug.current}
          </p>
          <p className="text-lg mb-2">
            <strong>Price:</strong> ${product.price}
          </p>
          <p className="text-lg mb-2 line-through">
            <strong>Full Price:</strong> ${product.fullPrice}
          </p>

          <p className="text-lg mb-2">
            <strong>Color:</strong> {product.color}
          </p>

          <p className="text-lg mb-2">
            <strong>Tags:</strong> {product.tags}
          </p>

          {/* Render product dimensions */}
          <div className="text-sm text-gray-500">
            {product.productDimension && product.productDimension.length > 0 ? (
              <div>
                <h3 className="text-gray-800 font-semibold">Dimensions:</h3>
                {product.productDimension.map((dimension: any, index: number) => (
                  <div key={index}>
                    <p>Width: {dimension.width} inches</p>
                    <p>Height: {dimension.height} inches</p>
                    <p>Depth: {dimension.length} inches</p>
                  </div>
                ))}
              </div>
            ) : (
              <p>No dimensions available.</p>
            )}
          </div>

          <p className="text-lg mb-2">
            <strong>Quantity:</strong> {product.quantity} in stock
          </p>
        </div>

        {/* Shop Component */}
        <section className="mt-10">
          <Shop />
        </section>
      </main>
    </CartProvider>
  );
};

export default DynamicBook;
