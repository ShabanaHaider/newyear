

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

import { useContext } from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { notFound } from "next/navigation";
import Shop from "@/app/shop";
import CartProvider from "@/app/cartProvider";
import Cart from "@/app/cart";
import Image from "next/image";

const DynamicBook = async ({ params }: { params: { id: string } }) => {
  console.log("Dynamic Route Params:", params);

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

  if (!product) {
    notFound();
  }

  const productImage = product.image ? urlFor(product.image).width(400).url() : "";

  return (
    <CartProvider>
      <main className="container mx-auto p-6">
        {/* Breadcrumb Section */}
        <div className="flex w-full h-auto py-10 justify-center bg-[#f9f1e7]">
          <div className="flex justify-start items-center gap-6">
            <div className="text-xs text-gray-500">
              <p>Home</p>
            </div>
            <div>
              <Image src="/tinyrightarrow.png" alt="rightarrow" width={16} height={16} />
            </div>
            <div>
              <p className="text-xs text-gray-500">Shop</p>
            </div>
            <div>
              <Image src="/tinyrightarrow.png" alt="rightarrow" width={16} height={16} />
            </div>
            <div>
              <Image src="/verticleline.png" alt="stick" width={10} height={20} />
            </div>
            <div>
              <p className="text-normal text-black font-bold">
                {product.productName}
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto p-6">
          <div className="product-detail bg-white shadow-lg rounded-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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

                <div>
                  <h1 className="text-4xl font-bold mb-4 text-gray-800">
                    {product.productName}
                  </h1>
                  <p className="text-lg mb-6 w-[350px] text-gray-700">
                    <strong>Product Description:</strong> {product.productDescription}
                  </p>
                  <div className="text-lg text-gray-700">
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
                </div>
              </div>

              <div className="mt-4">
                <Shop 
                  productName={product.productName} 
                  productImage={productImage}
                  productId={product.productId}
                  productPrice={product.price} 
                />
              </div>
            </div>
          </div>
        </div>

        <section className="mt-12">
          <Cart />
        </section>
      </main>
    </CartProvider>
  );
};

export default DynamicBook;






