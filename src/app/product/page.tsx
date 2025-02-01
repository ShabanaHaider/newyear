

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

//             {/* Link to tags */}
//            {product.tags && (
//               <Link href={`/tags/${product.tags}`} className="text-blue-500 underline mt-4 block">
//                 <img src="/Vector (3).png" alt="Search Bar" />
//                 Explore more in {product.tags}
//               </Link>
//             )} 


//           </div>
//         ))}
//       </div>
//     </main>
//   );
// }

// import Link from "next/link";
// import { client } from "@/sanity/lib/client";
// import { urlFor } from "@/sanity/lib/image";
// import Image from "next/image";

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
//       {/* Static Image Section */}
//       <div className="w-full">
//         {/* Main Image Section */}
//         <div className="relative flex justify-center bg-white py-10">
//           <Image
//             src="/shopmainpic.png"
//             alt="shopmainpic"
//             width={1440}
//             height={316}
//             className="cursor-pointer"
//           />
//           <div className="absolute top-1/4 mt-16 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-4xl text-black">
//             <Image
//               src="/Meubel House_Logos-05.png"
//               alt="MEUELLOGO"
//               width={77}
//               height={77}
//             />
//             <h2 className="absolute top-1/4 mt-16 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-4xl text-black">
//               SHOP
//             </h2>
//           </div>
//           <div className="flex absolute top-1/4 mt-48 justify-center items-center gap-6">
//             <div className="text-xs text-gray-800">
//               <p>Home</p>
//             </div>
//             <div>
//               <Image src="/tinyrightarrow.png" alt="rightarrow" width={10} height={10} />
//             </div>
//             <div>
//               <p className="text-xs text-gray-800">Shop</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Render fetched products */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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

//             {/* Link to tags */}
//             {product.tags && (
//               <Link href={`/tags/${product.tags}`} className="text-blue-500 underline mt-4 block">
//                 <img src="/Vector (3).png" alt="Search Bar" />
//                 Explore more in {product.tags}
//               </Link>
//             )}
//           </div>
//         ))}
//       </div>
//     </main>
//   );
// }

// import Link from "next/link";
// import { client } from "@/sanity/lib/client";
// import { urlFor } from "@/sanity/lib/image";
// import Image from "next/image";

// import SearchBar from "../components/SearchBar"
// // import SearchBar from "@/components/SearchBar"

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
//     }`, 
//     // { cache: "no-store" }
//   );

//   return (
//     <main className="container mx-auto p-4">
//       {/* Include the SearchBar */}
//       <div className="mb-6">
//         <SearchBar products={response} />
//       </div>

//       {/* Render fetched products */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
//                 <p className="text-lg font-bold text-gray-800">Price: ${product.price}</p>
//               </div>
//             </Link>
//           </div>
//         ))}
//       </div>
//     </main>
//   );
// }

// import Link from "next/link";
// import { client } from "@/sanity/lib/client";
// import { urlFor } from "@/sanity/lib/image";
// import Image from "next/image";

// import SearchBar from "../components/SearchBar";

// // Define the Product type to match the response from Sanity
// interface Product {
//   _id: string;
//   productName: string;
//   productId: string;
//   productDescription: string;
//   productDimension: string[];
//   slug: string;
//   price: number;
//   fullPrice: number;
//   image: { asset: { _id: string; url: string } };  
//    tags: string[];
//   color: string;
//   category: string;
//   quantity: number;
// }

// export default async function Home() {
//   // Fetch data from Sanity and type it as an array of Product objects
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
//     { cache: "no-store" }
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
//       {/* Static Image Section */}
//       <div className="w-full">
//         {/* Main Image Section */}
//         <div className="relative flex justify-center bg-white py-10">
//           <Image
//             src="/shopmainpic.png"
//             alt="shopmainpic"
//             width={1440}
//             height={316}
//             className="cursor-pointer"
//           />
//           <div className="absolute top-1/4 mt-16 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-4xl text-black">
//             <Image
//               src="/Meubel House_Logos-05.png"
//               alt="MEUELLOGO"
//               width={77}
//               height={77}
//             />
//             <h2 className="absolute top-1/4 mt-16 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-4xl text-black">
//               SHOP
//             </h2>
//           </div>
//           <div className="flex absolute top-1/4 mt-48 justify-center items-center gap-6">
//             <div className="text-xs text-gray-800">
//               <p>Home</p>
//             </div>
//             <div>
//               <Image src="/tinyrightarrow.png" alt="rightarrow" width={10} height={10} />
//             </div>
//             <div>
//               <p className="text-xs text-gray-800">Shop</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Include the SearchBar */}
//       <div className="mb-6">
//         <SearchBar products={response} />
//       </div>

//       {/* Render fetched products */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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

//             {/* Link to tags */}
//             {product.tags && (
//               <Link href={`/tags/${product.tags}`} className="text-blue-500 underline mt-4 block">
//                 <img src="/Vector (3).png" alt="Search Bar" />
//                 Explore more in {product.tags}
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
import Image from "next/image";
import SearchBar from "../components/SearchBar";

// Define the Product type to match the response from Sanity
interface Product {
  _id: string;
  productName: string;
  productId: string;
  productDescription: string;
  productDimension: { width: number; height: number; length: number }[]; // Updated dimension structure
  slug: string;
  price: number;
  fullPrice: number;
  image: { asset: { _id: string; url: string } };
  tags: string[];
  color: string;
  category: string;
  quantity: number;
}

export default async function Home() {
  // Fetch data from Sanity and type it as an array of Product objects
  const response: Product[] = await client.fetch(
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
    }`, 
    { cache: "no-store" } as any // Cast as any to avoid type error
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
      {/* Static Image Section */}
      <div className="w-full">
        {/* Main Image Section */}
        <div className="relative flex justify-center bg-white py-10">
          <Image
            src="/shopmainpic.png"
            alt="shopmainpic"
            width={1440}
            height={316}
            className="cursor-pointer"
          />
          <div className="absolute top-1/4 mt-16 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-4xl text-black">
            <Image
              src="/Meubel House_Logos-05.png"
              alt="MEUELLOGO"
              width={77}
              height={77}
            />
            <h2 className="absolute top-1/4 mt-16 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-4xl text-black">
              SHOP
            </h2>
          </div>
          <div className="flex absolute top-1/4 mt-48 justify-center items-center gap-6">
            <div className="text-xs text-gray-800">
              <p>Home</p>
            </div>
            <div>
              <Image src="/tinyrightarrow.png" alt="rightarrow" width={10} height={10} />
            </div>
            <div>
              <p className="text-xs text-gray-800">Shop</p>
            </div>
          </div>
        </div>
      </div>

      {/* Include the SearchBar */}
      <div className="mb-6">
        <SearchBar products={response} />
      </div>

      {/* Render fetched products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {response.map((product: Product) => (
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
                  {product.productDimension.map((dimension, index) => (
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
