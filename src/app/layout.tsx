
// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "./globals.css";
// import MobileNavbar from "./components/MobileNavbar";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body>
//         {/* Navbar for large screens  */}
//         <div className="hidden md:block lg:block">
//           <Navbar />
//         </div>

//         {/* MobileNavbar for smaller screens  */}
//         <div className="lg:hidden">
//           <MobileNavbar />
//         </div>

//         {children}
//         {/* Uncomment the Footer if you want it to appear */}
//         <Footer /> 
//       </body>
//     </html>
//   );
// }


// today

// "use client";  // Required because CartProvider uses React hooks
// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "./globals.css";
// import MobileNavbar from "./components/MobileNavbar";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import CartProvider from "./context/cartProvider";  // Import CartProvider

// import { CartProvider } from './context/cartProvider'; 

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body>
//         <CartProvider>  {/* ✅ Wrapping everything inside CartProvider */}

//           {/* Navbar for large screens */}
//           <div className="hidden md:block lg:block">
//             <Navbar />
//           </div>

//           {/* MobileNavbar for smaller screens */}
//           <div className="lg:hidden">
//             <MobileNavbar />
//           </div>

//           {children}

//           {/* Footer */}
//           <Footer /> 

//         </CartProvider>
//       </body>
//     </html>
//   );
// }


// "use client";

// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "./globals.css";
// import MobileNavbar from "./components/MobileNavbar";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import { CartProvider } from "@/app/context";

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <CartProvider>
//       <html lang="en">
//         <body>
//           {/* Navbar for large screens */}
//           <div className="hidden md:block lg:block">
//             <Navbar />
//           </div>

//           {/* MobileNavbar for smaller screens */}
//           <div className="lg:hidden">
//             <MobileNavbar />
//           </div>

//           {children}

//           {/* Footer */}
//           <Footer />
//         </body>
//       </html>
//     </CartProvider>
//   );
// }


import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs"
import Navbar from "./components/Navbar";
import MobileNavbar from "./components/MobileNavbar";
import Footer from "./components/Footer";
import { CartProvider } from "./context"; // ✅ Import CartProvider

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body>
        <CartProvider> {/* ✅ Wrap entire app */}
          <div className="hidden md:block lg:block">
            <Navbar />
          </div>
          <div className="lg:hidden">
            <MobileNavbar />
          </div>
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}







