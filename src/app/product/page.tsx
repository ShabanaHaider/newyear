
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import SearchBar from "../components/SearchBar";

interface Product {
  _id: string;
  productName: string;
  productId: string;
  productDescription: string;
  productDimension: { width: number; height: number; length: number }[];
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
    { cache: "no-store" } as any
  );

  if (!response || response.length === 0) {
    return (
      <main className="container mx-auto p-4">
        <h1>No products found</h1>
      </main>
    );
  }

  return (
    <main className="container mx-auto p-4">
      <div className="w-full">
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

      <div className="mb-6">
        <SearchBar products={response} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {response.map((product: Product) => (
          <div key={product._id} className="product-card bg-white shadow-lg rounded-lg p-4">
            <Link href={`/product/${product._id}`}>
              <div>
                <Image
                  src={urlFor(product.image).width(350).url()}
                  alt={product.productName}
                  width={350}
                  height={300}
                  className="w-full h-auto rounded-lg mb-4"
                />
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{product.productName}</h2>
                <p className="text-gray-600">Product Description: {product.productDescription}</p>
                <p className="text-gray-600">Product ID: {product.productId}</p>
                <p className="text-lg font-bold text-gray-800">Price: Pkr{product.price}</p>
                <p className="text-sm text-gray-500 line-through">Full Price: Pkr{product.fullPrice}</p>
                <p className="text-sm text-gray-500">Color: {product.color}</p>
                <p className="text-sm text-gray-500">Tags: {product.tags?.join(", ")}</p>
                <p className="text-sm text-gray-500">Category: {product.category}</p>
              </div>
            </Link>

            <div className="text-sm text-gray-500 mt-4">
              {product.productDimension && product.productDimension.length > 0 ? (
                <div>
                  <h3 className="text-gray-800 font-semibold">Dimensions:</h3>
                  {product.productDimension.map((dimension, index) => (
                    <div key={index}>
                      <p>Width: {dimension.width} inches</p>
                      <p>Height: {dimension.height} inches</p>
                      <p>Length: {dimension.length} inches</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p>No dimensions available.</p>
              )}
            </div>

            <p className="text-sm text-gray-500">Quantity: {product.quantity} in stock</p>

            {product.category && (
              <Link href={`/category/${product.category}`} className="text-blue-500 underline mt-4 block">
                Explore more in {product.category}
              </Link>
            )}

            {product.tags && (
              <Link href={`/tags/${product.tags}`} className="text-blue-500 underline mt-4 block">
                <Image src="/Vector (3).png" alt="Search Bar" width={20} height={20} />
                Explore more in {product.tags}
              </Link>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
