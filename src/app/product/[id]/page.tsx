

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



// import Cart from "@/app/cart/page";
// import { client } from "@/sanity/lib/client";
// import { urlFor } from "@/sanity/lib/image";
// import { notFound } from "next/navigation";
// import Shop from "@/app/shop";
// import Image from "next/image";

// const DynamicBook = async ({ params }: { params: { id: string } }) => {
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

//   if (!product) {
//     notFound();
//   }

//   const productImage = product.image ? urlFor(product.image).width(400).url() : "";

//   return (
    
//       <main className="container mx-auto p-6">
//         {/* Breadcrumb Navigation */}
//         <div className="flex w-full h-auto py-10 justify-center bg-[#f9f1e7]">
//           <div className="flex justify-start items-center gap-4">
//             <p className="text-xs text-gray-500">Home</p>
//             <Image src="/tinyrightarrow.png" alt="rightarrow" width={16} height={16} />
//             <p className="text-xs text-gray-500">Shop</p>
//             <Image src="/tinyrightarrow.png" alt="rightarrow" width={16} height={16} />
//             <Image src="/verticleline.png" alt="stick" width={10} height={20} />
//             <p className="text-sm font-bold text-black">{product.productName}</p>
//           </div>
//         </div>

//         {/* Product Details Section */}
//         <div className="product-detail bg-white shadow-lg rounded-lg p-6">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {/* Product Image & Info */}
//             <div>
//               {product.image && (
//                 <Image 
//                   src={productImage} 
//                   alt={product.productName} 
//                   width={350} 
//                   height={300} 
//                   className="rounded-lg mb-6" 
//                 />
//               )}
//               <h1 className="text-4xl font-bold mb-4 text-gray-800">{product.productName}</h1>
//               <p className="text-lg mb-4 text-gray-700">
//                 <strong>Description:</strong> {product.productDescription}
//               </p>
//               <p className="text-xl font-semibold text-green-600">${product.price}</p>
//               <p className="line-through text-gray-500">${product.fullPrice}</p>


              
//                      <p className="mb-2">
//                        <strong>Product Id:</strong> {product.productId}
//                     </p>
//                     <p className="mb-2">
//                      <strong>Slug:</strong> {product.slug.current}
//                     </p>
//                    <p className="mb-2">
//                       <strong>Price:</strong> Pkr{product.price}
//                     </p>
//                      <p className="mb-2 line-through text-gray-500">
//                        <strong>Full Price:</strong> Pkr{product.fullPrice}
//                     </p>
//                    <p className="mb-2">
//                      <strong>Color:</strong> {product.color}
//                     </p>
//                     <p className="mb-2">
//                       <strong>Tags:</strong> {product.tags.join(", ")}
//                     </p>
//                     <p className="mb-2">
//                       <strong>Quantity:</strong> {product.quantity} in stock
//                     </p>                   

//             </div>

//             {/* Shop Component */}
//             <div>
//               <Shop 
//                 productName={product.productName} 
//                 productImage={productImage}
//                 productId={product.productId}
//                 productPrice={product.price} 
//               />
//             </div>

//             {/* Cart Component */}
//             <div>
//               <Cart /> 
//             </div>
//           </div>
//         </div>
//       </main>
    
//   );
// };

// export default DynamicBook;




// import Cart from "@/app/cart/page";
// import { client } from "@/sanity/lib/client";
// import { urlFor } from "@/sanity/lib/image";
// import { notFound } from "next/navigation";
// import Shop from "@/app/shop";
// import Image from "next/image";

// const DynamicBook = async ({ params }: { params: { id: string } }) => {
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

//   if (!product) {
//     notFound();
//   }

//   const productImage = product.image ? urlFor(product.image).width(400).url() : "";

//   return (
    
//       <main className="container mx-auto p-6">
//         {/* Breadcrumb Navigation */}
//         <div className="flex w-full h-auto py-10 justify-center bg-[#f9f1e7]">
//           <div className="flex justify-start items-center gap-4">
//             <p className="text-xs text-gray-500">Home</p>
//             <Image src="/tinyrightarrow.png" alt="rightarrow" width={16} height={16} />
//             <p className="text-xs text-gray-500">Shop</p>
//             <Image src="/tinyrightarrow.png" alt="rightarrow" width={16} height={16} />
//             <Image src="/verticleline.png" alt="stick" width={10} height={20} />
//             <p className="text-sm font-bold text-black">{product.productName}</p>
//           </div>
//         </div>

//         {/* Product Details Section */}
//         <div className="product-detail bg-white shadow-lg rounded-lg p-6">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {/* Product Image & Info */}
//             <div>
//               {product.image && (
//                 <Image 
//                   src={productImage} 
//                   alt={product.productName} 
//                   width={350} 
//                   height={300} 
//                   className="rounded-lg mb-6" 
//                 />
//               )}
//               <h1 className="text-4xl font-bold mb-4 text-gray-800">{product.productName}</h1>
//               <p className="text-lg mb-4 text-gray-700">
//                 <strong>Description:</strong> {product.productDescription}
//               </p>
//               <p className="text-xl font-semibold text-green-600">${product.price}</p>
//               <p className="line-through text-gray-500">${product.fullPrice}</p>


              
//                      <p className="mb-2">
//                        <strong>Product Id:</strong> {product.productId}
//                     </p>
//                     <p className="mb-2">
//                      <strong>Slug:</strong> {product.slug.current}
//                     </p>
//                    <p className="mb-2">
//                       <strong>Price:</strong> Pkr{product.price}
//                     </p>
//                      <p className="mb-2 line-through text-gray-500">
//                        <strong>Full Price:</strong> Pkr{product.fullPrice}
//                     </p>
//                    <p className="mb-2">
//                      <strong>Color:</strong> {product.color}
//                     </p>
//                     <p className="mb-2">
//                       <strong>Tags:</strong> {product.tags.join(", ")}
//                     </p>
//                     <p className="mb-2">
//                       <strong>Quantity:</strong> {product.quantity} in stock
//                     </p>                   

//             </div>

//             {/* Shop Component */}
//             <div>
//               <Shop 
//                 productName={product.productName} 
//                 productImage={productImage}
//                 productId={product.productId}
//                 productPrice={product.price} 
//               />
//             </div>

//             {/* Cart Component */}
//             <div>
//               <Cart /> 
//             </div>
//           </div>
//         </div>
//       </main>
    
//   );
// };

// export default DynamicBook;


// productDimension added

// import Cart from "@/app/cart/page";
// import { client } from "@/sanity/lib/client";
// import { urlFor } from "@/sanity/lib/image";
// import { notFound } from "next/navigation";
// import Shop from "@/app/shop";
// import Image from "next/image";

// // Define Type for product dimensions
// type ProductDimension = {
//   width?: number;
//   height?: number;
//   length?: number;
// };

// const DynamicBook = async ({ params }: { params: { id: string } }) => {
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

//   if (!product) {
//     notFound();
//   }

//   const productImage = product.image ? urlFor(product.image).width(400).url() : "";

//   // Ensure productDimension is always an array
//   const dimensions: ProductDimension[] = Array.isArray(product.productDimension) 
//     ? product.productDimension 
//     : [];

//   return (
//     <main className="container mx-auto p-6">
//       {/* Breadcrumb Navigation */}
//       <div className="flex w-full h-auto py-10 justify-center bg-[#f9f1e7]">
//         <div className="flex justify-start items-center gap-4">
//           <p className="text-xs text-gray-500">Home</p>
//           <Image src="/tinyrightarrow.png" alt="rightarrow" width={16} height={16} />
//           <p className="text-xs text-gray-500">Shop</p>
//           <Image src="/tinyrightarrow.png" alt="rightarrow" width={16} height={16} />
//           <Image src="/verticleline.png" alt="stick" width={10} height={20} />
//           <p className="text-sm font-bold text-black">{product.productName}</p>
//         </div>
//       </div>

//       {/* Product Details Section */}
//       <div className="product-detail bg-white shadow-lg rounded-lg p-6">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {/* Product Image & Info */}
//           <div>
//             {product.image && (
//               <Image 
//                 src={productImage} 
//                 alt={product.productName} 
//                 width={350} 
//                 height={300} 
//                 className="rounded-lg mb-6" 
//               />
//             )}
//             <h1 className="text-4xl font-bold mb-4 text-gray-800">{product.productName}</h1>
//             <p className="text-lg mb-4 text-gray-700">
//               <strong>Description:</strong> {product.productDescription}
//             </p>
//             <p className="text-xl font-semibold text-green-600">${product.price}</p>
//             <p className="line-through text-gray-500">${product.fullPrice}</p>

//             <p className="mb-2"><strong>Product Id:</strong> {product.productId}</p>
//             <p className="mb-2"><strong>Slug:</strong> {product.slug.current}</p>
//             <p className="mb-2"><strong>Price:</strong> Pkr{product.price}</p>
//             <p className="mb-2 line-through text-gray-500"><strong>Full Price:</strong> Pkr{product.fullPrice}</p>
//             <p className="mb-2"><strong>Color:</strong> {product.color}</p>
//             <p className="mb-2"><strong>Tags:</strong> {product.tags.join(", ")}</p>
//             <p className="mb-2"><strong>Quantity:</strong> {product.quantity} in stock</p>

//             {/* Product Dimensions Section */}
//             {dimensions.length > 0 && (
//               <div className="mt-4 p-4 bg-gray-100 rounded-lg">
//                 <h3 className="text-lg font-semibold mb-2">Product Dimensions</h3>
//                 {dimensions.map((dimension: ProductDimension, index: number) => (
//                   <div key={index} className="text-gray-700 border-b pb-2 mb-2 last:border-b-0">
//                     <p><strong>Width:</strong> {dimension.width ?? "N/A"} cm</p>
//                     <p><strong>Height:</strong> {dimension.height ?? "N/A"} cm</p>
//                     <p><strong>Length:</strong> {dimension.length ?? "N/A"} cm</p>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>

//           {/* Shop Component */}
//           <div>
//             <Shop 
//               productName={product.productName} 
//               productImage={productImage}
//               productId={product.productId}
//               productPrice={product.price} 
//             />
//           </div>

//           {/* Cart Component */}
//           <div>
//             <Cart /> 
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default DynamicBook;




// adjusted

import Cart from "@/app/cart/page";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { notFound } from "next/navigation";
import Shop from "@/app/shop";
import Image from "next/image";

// Define Type for product dimensions
type ProductDimension = {
  width?: number;
  height?: number;
  length?: number;
};

const DynamicBook = async ({ params }: { params: { id: string } }) => {
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

  if (!product) {
    notFound();
  }

  const productImage = product.image ? urlFor(product.image).width(400).url() : "";

  // Ensure productDimension is always an array
  const dimensions: ProductDimension[] = Array.isArray(product.productDimension) 
    ? product.productDimension 
    : [];

  return (
    <main className="container mx-auto p-6">
      {/* Breadcrumb Navigation */}
      <div className="flex w-full h-auto py-10 justify-center bg-[#f9f1e7]">
        <div className="flex justify-start items-center gap-4">
          <p className="text-xs text-gray-500">Home</p>
          <Image src="/tinyrightarrow.png" alt="rightarrow" width={16} height={16} />
          <p className="text-xs text-gray-500">Shop</p>
          <Image src="/tinyrightarrow.png" alt="rightarrow" width={16} height={16} />
          <Image src="/verticleline.png" alt="stick" width={2} height={2} />
          <p className="text-sm font-bold text-black">{product.productName}</p>
        </div>
      </div>

      {/* Product Details Section */}
      <div className="product-detail bg-white shadow-lg rounded-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="flex justify-center">
            {product.image && (
              <Image 
                src={productImage} 
                alt={product.productName} 
                width={400} 
                height={350} 
                className="rounded-lg" 
              />
            )}
          </div>

          {/* Product Details */}
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-bold mb-4 text-gray-800">{product.productName}</h1>
            <p className="text-lg mb-4 text-gray-700">
              <strong>Description:</strong> {product.productDescription}
            </p>
            <p className="text-xl font-semibold text-green-600">${product.price}</p>
            <p className="line-through text-gray-500">${product.fullPrice}</p>

            <div className="mt-4 space-y-2">
              <p><strong>Product Id:</strong> {product.productId}</p>
              <p><strong>Slug:</strong> {product.slug.current}</p>
              <p><strong>Price:</strong> $ {product.price}</p>
              <p className="line-through text-gray-500"><strong>Full Price:</strong> $ {product.fullPrice}</p>
              <p><strong>Color:</strong> {product.color}</p>
              <p><strong>Tags:</strong> {product.tags.join(", ")}</p>
              <p><strong>Quantity:</strong> {product.quantity} in stock</p>
            </div>

            {/* Product Dimensions Section */}
            {dimensions.length > 0 && (
              <div className="mt-4 p-4 bg-gray-100 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Product Dimensions</h3>
                {dimensions.map((dimension: ProductDimension, index: number) => (
                  <div key={index} className="text-gray-700 border-b pb-2 mb-2 last:border-b-0">
                    <p><strong>Width:</strong> {dimension.width ?? "N/A"} cm</p>
                    <p><strong>Height:</strong> {dimension.height ?? "N/A"} cm</p>
                    <p><strong>Length:</strong> {dimension.length ?? "N/A"} cm</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Shop and Cart Section */}
        <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <Shop 
            productName={product.productName} 
            productImage={productImage}
            productId={product.productId}
            productPrice={product.price} 
          />
          <Cart /> 
        </div>
      </div>
    </main>
  );
};

export default DynamicBook;

