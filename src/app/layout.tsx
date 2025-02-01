
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MobileNavbar from "./components/MobileNavbar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* Navbar for large screens  */}
        <div className="hidden md:block lg:block">
          <Navbar />
        </div>

        {/* MobileNavbar for smaller screens  */}
        <div className="lg:hidden">
          <MobileNavbar />
        </div>

        {children}
        {/* Uncomment the Footer if you want it to appear */}
        <Footer /> 
      </body>
    </html>
  );
}




