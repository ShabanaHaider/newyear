// import Image from "next/image";
// import Link from "next/link";
// import React from 'react';

// export default function Navbar() {
//   return (
//     <div className="w-full h-[100px] bg-white flex">
//       <div className="flex bg-white items-center w-[1286px] mx-auto">
//         {/* Logo */}
//         <Image 
//           src="/Frame168.png" 
//           alt="Logo" 
//           width={185} 
//           height={41} 
//           className="mr-6"
//         />

//         {/* Navigation Links */}
//         <div className="flex gap-[56px] pl-[20px] ml-[100px] text-lg">


//         <Link href="/"passHref><h2 className="cursor-pointer font-bold">Home</h2></Link> 


//           <Link href="/product"><h2 className="cusor-pointer font-bold">Shop</h2></Link>   


//           <Link href="/blog"passHref><h2 className="cursor-pointer font-bold">Blog</h2></Link>
//           <Link href="/contact"passHref><h2 className="cursor-pointer font-bold">Contact</h2></Link>        
          
//         </div>

//         {/* Vector Icons */}
//         <div className="flex ml-auto gap-[40px]">
          


//           <div className="w-[28px] h-[28px]">
//           <Link href="/logindetails">
//             <img src="/Vector (2).png" alt="Person" /></Link>
//           </div>  

//            <div className="cursor pointer w-[28px] h-[28px]">
//             {/* <Link href="/category/[id]/page"> */}
//             <img src="/Vector (3).png" alt="Search Bar" />
//             {/* </Link> */}
//           </div>          



//           <div className="w-[28px] h-[28px]">
//           <Link href="/shop/singleproductpage">
//             <img src="/Vector (4).png" alt="Wishlist" /></Link>
//           </div>   

//           <div className="cursor-pointer w-[28px] h-[28px]">
//           <Link href="/carddetails">

//             <img src="/Vector (5).png" alt="Cart" /> </Link>          </div> 


//         </div>
//       </div>
//     </div>
//   );
// }

// import Image from "next/image";
// import Link from "next/link";
// import React from "react";

// export default function Navbar() {
//   return (
//     <div className="w-full h-[100px] bg-white flex">
//       <div className="flex bg-white items-center w-[1286px] mx-auto">
//         {/* Logo */}
//         <Image
//           src="/Frame168.png"
//           alt="Logo"
//           width={185}
//           height={41}
//           className="mr-6"
//         />

//         {/* Navigation Links */}
//         <div className="flex gap-[56px] pl-[20px] ml-[100px] text-lg">
//           <Link href="/" passHref>
//             <h2 className="cursor-pointer font-bold">Home</h2>
//           </Link>
//           <Link href="/product">
//             <h2 className="cursor-pointer font-bold">Shop</h2>
//           </Link>
//           <Link href="/blog" passHref>
//             <h2 className="cursor-pointer font-bold">Blog</h2>
//           </Link>
//           <Link href="/contact" passHref>
//             <h2 className="cursor-pointer font-bold">Contact</h2>
//           </Link>
//         </div>

//         {/* Vector Icons */}
//         <div className="flex ml-auto gap-[40px]">
//           <div className="w-[28px] h-[28px]">
//             <Link href="/logindetails">
//               <img src="/Vector (2).png" alt="Person" />
//             </Link>
//           </div>
//           <div className="cursor-pointer w-[28px] h-[28px]">
//             <img src="/Vector (3).png" alt="Search Bar" />
//           </div>
//           <div className="w-[28px] h-[28px]">
//             <Link href="/shop/singleproductpage">
//               <img src="/Vector (4).png" alt="Wishlist" />
//             </Link>
//           </div>

//           {/* Cart Icon */}
//           <div className="cursor-pointer w-[28px] h-[28px]">
//             <Link href="app/cart/page">
//               <img src="/Vector (5).png" alt="Cart" />
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { useContext } from "react";
// import { CartContext } from "@/app/context";

// export default function Navbar() {
//   const router = useRouter();
//   const { cart } = useContext(CartContext);

//   // Debugging to ensure cart data is available
//   console.log("Cart:", cart);

//   const handleCartClick = () => {
//     if (cart && cart.length > 0) {
//       const firstCartItem = cart[0]; // Get the first item in the cart
//       const productName = firstCartItem?.productName || "Unknown Product";
//       const productId = firstCartItem?.id || "unknown";

//       router.push(`/product/${productId}/addtocartpage?productName=${encodeURIComponent(productName)}`);
//     } else {
//       router.push("/product/addtocartpage?productName=Cart%20Empty");
//     }
//   };

//   return (
//     <div className="w-full h-[100px] bg-white flex">
//       <div className="flex bg-white items-center w-[1286px] mx-auto">
//         {/* Logo */}
//         <Image
//           src="/Frame168.png"
//           alt="Logo"
//           width={185}
//           height={41}
//           className="mr-6"
//         />

//         {/* Navigation Links */}
//         <div className="flex gap-[56px] pl-[20px] ml-[100px] text-lg">
//           <Link href="/" passHref>
//             <h2 className="cursor-pointer font-bold">Home</h2>
//           </Link>
//           <Link href="/product" passHref>
//             <h2 className="cursor-pointer font-bold">Shop</h2>
//           </Link>
//           <Link href="/blog" passHref>
//             <h2 className="cursor-pointer font-bold">Blog</h2>
//           </Link>
//           <Link href="/contact" passHref>
//             <h2 className="cursor-pointer font-bold">Contact</h2>
//           </Link>
//         </div>

//         {/* Icons */}
//         <div className="flex ml-auto gap-[40px]">
//           {/* Login Icon */}
//           <div className="w-[28px] h-[28px]">
//             <Link href="/logindetails">
//               <img src="/Vector (2).png" alt="Login" />
//             </Link>
//           </div>

//           {/* Search Bar Icon */}
//           <div
//             className="cursor-pointer w-[28px] h-[28px]"
//             onClick={() => router.push("/product")}
//           >
//             <img src="/Vector (3).png" alt="Search Bar" />
//           </div>

//           {/* Wishlist Icon */}
//           <div className="w-[28px] h-[28px]">
//             <Link href="/shop/singleproductpage">
//               <img src="/Vector (4).png" alt="Wishlist" />
//             </Link>
//           </div>

//           {/* Cart Icon */}
//           <div
//             className="cursor-pointer w-[28px] h-[28px] relative"
//             onClick={handleCartClick}
//           >
//             <img src="/Vector (5).png" alt="Cart" />
//             {cart && cart.length > 0 && (
//               <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">
//                 {cart.length}
//               </span>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar() {
const router = useRouter();

  return (
    <div className="w-full h-[100px] bg-white flex">
      <div className="flex bg-white items-center w-[1286px] mx-auto">
        {/* Logo */}
        <Image
          src="/Frame168.png"
          alt="Logo"
          width={185}
          height={41}
          className="mr-6"
        />

        {/* Navigation Links */}
        <div className="flex gap-[56px] pl-[20px] ml-[100px] text-lg">
          <Link href="/" passHref>
            <h2 className="cursor-pointer font-bold">Home</h2>
          </Link>
          <Link href="/product">
            <h2 className="cursor-pointer font-bold">Shop</h2>
          </Link>
          <Link href="/blog" passHref>
            <h2 className="cursor-pointer font-bold">Blog</h2>
          </Link>
          <Link href="/contact" passHref>
            <h2 className="cursor-pointer font-bold">Contact</h2>
          </Link>
        </div>

        {/* Vector Icons */}
        <div className="flex ml-auto gap-[40px]">
          <div className="w-[28px] h-[28px]">
            <Link href="/logindetails">
              <img src="/Vector (2).png" alt="Person" />
            </Link>
          </div>


          <div
            className="cursor-pointer w-[28px] h-[28px]"
            onClick={() => router.push("/product")}
          >
            <img src="/Vector (3).png" alt="Search Bar" />
          </div>

          
          <div className="w-[28px] h-[28px]">
            <Link href="/shop/singleproductpage">
              <img src="/Vector (4).png" alt="Wishlist" />
            </Link>
          </div>

          {/* Cart Icon */}
          <div className="cursor-pointer w-[28px] h-[28px]">
            {/* <Link href="/product/[id]/addtocartpage">   */}        
 
            
              <img src="/Vector (5).png" alt="Cart" /> 
            {/* </Link>   */}
          </div>
        </div>
      </div>
    </div>
  );
}                              