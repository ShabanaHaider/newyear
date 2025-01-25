"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface Product {
  _id: string;
  productName: string;
  productId: string;
}

function SearchBar({ products }: { products: Product[] }) {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    // Handle empty search term
    if (!searchTerm.trim()) {
      router.push("/product"); // Redirect to all products page
      return;
    }

    // Find matching product
    const matchingProduct = products?.find((product) =>
      product.productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.productId.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (matchingProduct) {
      router.push(`/product/${matchingProduct._id}`); // Redirect to product page
    } else {
      alert("Product not found"); // Show an alert for no match
    }
  };

  const filteredProducts = products?.filter(
    (product) =>
      product.productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.productId.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="relative">
      <form onSubmit={handleSearch} className="flex items-center gap-2">
        <input
          type="text"
          placeholder="Search by product name or ID..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2 border rounded-md"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Search
        </button>
      </form>

      {/* Dropdown for suggestions */}
      {searchTerm.trim() && filteredProducts?.length > 0 && (
        <ul className="absolute bg-white border mt-2 w-full rounded-md shadow-lg z-10">
          {filteredProducts.map((product) => (
            <li
              key={product._id}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => router.push(`/product/${product._id}`)}
            >
              <span className="font-bold">{product.productName}</span> -{" "}
              <span className="text-gray-500">{product.productId}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchBar;



