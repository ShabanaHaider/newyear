

// import Link from "next/link";
// import { client } from "@/sanity/lib/client";
// import { urlFor } from "@/sanity/lib/image";

// export default async function Home() {
//   // Fetch data from Sanity
//   const response = await client.fetch(
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
//     }`,{},{cache: "no-store"}
//   );


  
//   // Log the response for debugging
//   console.log("Fetched Products:", response);

//   // Check if response is empty or not as expected
//   if (!response || response.length === 0) {
//     return (
//       <main className="container mx-auto p-4">
//         <h1>No products found</h1>
//       </main>
//     );
//   }

//   return (
//     <main className="container mx-auto p-4">
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {/* Render fetched products */}
//         {response.map((product: any) => (
//           <div key={product._id} className="product-card bg-white shadow-lg rounded-lg p-4">
//             <Link href={`/product/${product._id}`}>
//               <div>
//                 <img
//                   src={urlFor(product.image).width(350).url()}
//                   alt={product.productName}
//                   className="w-full h-auto rounded-lg mb-4"
//                 />
//                 <h2 className="text-xl font-semibold text-gray-800 mb-2">{product.productName}</h2>
//                 <p className="text-gray-600">Product Description: {product.productDescription}</p>
//                 <p className="text-gray-600">Product ID: {product.productId}</p>
//                 <p className="text-lg font-bold text-gray-800">Price: ${product.price}</p>
//                 <p className="text-sm text-gray-500 line-through">Full Price: ${product.fullPrice}</p>
//                 <p className="text-sm text-gray-500">Color: {product.color}</p>
//                 <p className="text-sm text-gray-500">Tags: {product.tags?.join(", ")}</p>
//                 <p className="text-sm text-gray-500">Category: {product.category}</p>
//               </div>
//             </Link>

//             {/* Render product dimensions */}
//             <div className="text-sm text-gray-500 mt-4">
//               {product.productDimension && product.productDimension.length > 0 ? (
//                 <div>
//                   <h3 className="text-gray-800 font-semibold">Dimensions:</h3>
//                   {product.productDimension.map((dimension: any, index: number) => (
//                     <div key={index}>
//                       <p>Width: {dimension.width} inches</p>
//                       <p>Height: {dimension.height} inches</p>
//                       <p>Depth: {dimension.length} inches</p>
//                     </div>
//                   ))}
//                 </div>
//               ) : (
//                 <p>No dimensions available.</p>
//               )}
//             </div>

//             <p className="text-sm text-gray-500">Quantity: {product.quantity} in stock</p>

//             {/* Link to category */}
//             {product.category && (
//               <Link href={`/category/${product.category}`} className="text-blue-500 underline mt-4 block">
//                 Explore more in {product.category}
//               </Link>
//             )}
//           </div>
//         ))}
//       </div>
//     </main>
//   );
// }

import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

export default async function Home() {
  // Fetch data from Sanity
  const response = await client.fetch(
    `*[_type == "product"] {
      _id, 
      productName, 
      productId,
      productDescription,
      productDimension, 
      slug, 
      price, 
      fullPrice, 
      image { asset->{_id, url} }, 
      tags,
      color,  
      category,
      quantity 
    }`,{},{cache: "no-store"}
  );


  
  // Log the response for debugging
  console.log("Fetched Products:", response);

  // Check if response is empty or not as expected
  if (!response || response.length === 0) {
    return (
      <main className="container mx-auto p-4">
        <h1>No products found</h1>
      </main>
    );
  }

  return (
    <main className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Render fetched products */}
        {response.map((product: any) => (
          <div key={product._id} className="product-card bg-white shadow-lg rounded-lg p-4">
            <Link href={`/product/${product._id}`}>
              <div>
                <img
                  src={urlFor(product.image).width(350).url()}
                  alt={product.productName}
                  className="w-full h-auto rounded-lg mb-4"
                />
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{product.productName}</h2>
                <p className="text-gray-600">Product Description: {product.productDescription}</p>
                <p className="text-gray-600">Product ID: {product.productId}</p>
                <p className="text-lg font-bold text-gray-800">Price: ${product.price}</p>
                <p className="text-sm text-gray-500 line-through">Full Price: ${product.fullPrice}</p>
                <p className="text-sm text-gray-500">Color: {product.color}</p>
                <p className="text-sm text-gray-500">Tags: {product.tags?.join(", ")}</p>
                <p className="text-sm text-gray-500">Category: {product.category}</p>
              </div>
            </Link>

            {/* Render product dimensions */}
            <div className="text-sm text-gray-500 mt-4">
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

            <p className="text-sm text-gray-500">Quantity: {product.quantity} in stock</p>

            {/* Link to category */}
            {product.category && (
              <Link href={`/category/${product.category}`} className="text-blue-500 underline mt-4 block">
                Explore more in {product.category}
              </Link>
            )}

            {/* Link to tags */}
           {product.tags && (
              <Link href={`/tags/${product.tags}`} className="text-blue-500 underline mt-4 block">
                <img src="/Vector (3).png" alt="Search Bar" />
                Explore more in {product.tags}
              </Link>
            )} 


          </div>
        ))}
      </div>
    </main>
  );
}


