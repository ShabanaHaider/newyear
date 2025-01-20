

// import { client } from "@/sanity/lib/client";
// import { urlFor } from "@/sanity/lib/image";
// import Link from "next/link";
// import { notFound } from "next/navigation";

// export const fetchCache = "no-store"; // Disable caching globally for this page

// interface CategoryPageProps {
//   params: {
//     id: string; // Dynamic route parameter
//   };
// }

// export default async function CategoryPage({ params }: CategoryPageProps) {
//   const { id: categorySlug } = params;

//   // Fetch products based on the category with no cache
//   const products = await client.fetch(
//     `*[_type == "product" && category == $categorySlug] {
//       _id,
//       productName,
//       slug,
//       price,
//       image { asset->{url} }
//     }`,
//     { categorySlug },
//     { cache: "no-store" } // Ensure fresh data is fetched
//   );

//   // Handle no products found
//   if (!products || products.length === 0) {
//     notFound();
//   }

//   return (
//     <main className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold capitalize">{categorySlug} Products</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {products.map((product: any) => (
//           <div
//             key={product._id}
//             className="product-card bg-white shadow-lg rounded-lg p-4"
//           >
//             <Link href={`/product/${product._id}`}>
//               <img
//                 src={urlFor(product.image).width(350).url()}
//                 alt={product.productName}
//                 className="w-full h-auto rounded-lg mb-4"
//               />
//               <h2 className="text-xl font-semibold">{product.productName}</h2>
//               <p className="text-lg font-bold">Price: ${product.price}</p>
//             </Link>
//           </div>
//         ))}
//       </div>
//     </main>
//   );
// }



import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export const fetchCache = "no-store"; // Disable caching globally for this page

interface CategoryPageProps {
  params: {
    id: string; // Dynamic route parameter
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { id: categorySlug } = params;

  // Fetch products based on the category with no cache
  const products = await client.fetch(
    `*[_type == "product" && category == $categorySlug] {
      _id,
      productName,
      slug,
      price,
      image { asset->{url} }
    }`,
    { categorySlug },
    { cache: "no-store" } // Ensure fresh data is fetched
  );

  // Handle no products found
  if (!products || products.length === 0) {
    notFound();
  }

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-bold capitalize">{categorySlug} Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product: any) => (
          <div
            key={product._id}
            className="product-card bg-white shadow-lg rounded-lg p-4"
          >
            <Link href={`/product/${product._id}`}>
              <img
                src={urlFor(product.image).width(350).url()}
                alt={product.productName}
                className="w-full h-auto rounded-lg mb-4"
              />
              <h2 className="text-xl font-semibold">{product.productName}</h2>
              <p className="text-lg font-bold">Price: ${product.price}</p>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}




   


  