

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

import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { notFound } from "next/navigation";
import Shop from "@/app/shop";
import Cart from "@/app/cart";
import Image from "next/image";

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

  return (
    
      <main className="container mx-auto p-6">
        {/* Breadcrumb Navigation */}
        <div className="flex w-full h-auto py-10 justify-center bg-[#f9f1e7]">
          <div className="flex justify-start items-center gap-4">
            <p className="text-xs text-gray-500">Home</p>
            <Image src="/tinyrightarrow.png" alt="rightarrow" width={16} height={16} />
            <p className="text-xs text-gray-500">Shop</p>
            <Image src="/tinyrightarrow.png" alt="rightarrow" width={16} height={16} />
            <Image src="/verticleline.png" alt="stick" width={10} height={20} />
            <p className="text-sm font-bold text-black">{product.productName}</p>
          </div>
        </div>

        {/* Product Details Section */}
        <div className="product-detail bg-white shadow-lg rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Product Image & Info */}
            <div>
              {product.image && (
                <Image 
                  src={productImage} 
                  alt={product.productName} 
                  width={350} 
                  height={300} 
                  className="rounded-lg mb-6" 
                />
              )}
              <h1 className="text-4xl font-bold mb-4 text-gray-800">{product.productName}</h1>
              <p className="text-lg mb-4 text-gray-700">
                <strong>Description:</strong> {product.productDescription}
              </p>
              <p className="text-xl font-semibold text-green-600">${product.price}</p>
              <p className="line-through text-gray-500">${product.fullPrice}</p>


              
                     <p className="mb-2">
                       <strong>Product Id:</strong> {product.productId}
                    </p>
                    <p className="mb-2">
                     <strong>Slug:</strong> {product.slug.current}
                    </p>
                   <p className="mb-2">
                      <strong>Price:</strong> ${product.price}
                    </p>
                     <p className="mb-2 line-through text-gray-500">
                       <strong>Full Price:</strong> ${product.fullPrice}
                    </p>
                   <p className="mb-2">
                     <strong>Color:</strong> {product.color}
                    </p>
                    <p className="mb-2">
                      <strong>Tags:</strong> {product.tags.join(", ")}
                    </p>
                    <p className="mb-2">
                      <strong>Quantity:</strong> {product.quantity} in stock
                    </p>                   

            </div>

            {/* Shop Component */}
            <div>
              <Shop 
                productName={product.productName} 
                productImage={productImage}
                productId={product.productId}
                productPrice={product.price} 
              />
            </div>

            {/* Cart Component */}
            <div>
              <Cart /> 
            </div>
          </div>
        </div>
      </main>
    
  );
};

export default DynamicBook;










