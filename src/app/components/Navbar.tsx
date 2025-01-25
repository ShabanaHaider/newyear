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
            <Link href="app/cart/page">
              {/* <img src="/Vector (5).png" alt="Cart" /> */}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
