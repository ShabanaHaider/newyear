import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from 'lucide-react';
import Link from "next/link";

const MobileNavbar = () => {
  return (
    <div>
      <Sheet>
        {/* Add cursor-pointer to the SheetTrigger */}
        <SheetTrigger className="cursor-pointer">
          <Menu />
        </SheetTrigger>
        <SheetContent>               
        
          <SheetHeader>   

            <SheetDescription className="bg-slate-600 text-bold text-1xl gap-1 p-4">
              <div className="flex flex-row items-center justify-left gap-1 text-white">
                <Link href="/" passHref>
                  <h2 className="cursor-pointer font-semibold">Home</h2>
                </Link>
                <Link href="/shop" passHref>
                  <h2 className="cursor-pointer font-semibold">Shop</h2>
                </Link>
                <Link href="/blog" passHref>
                  <h2 className="cursor-pointer font-semibold">Blog</h2>
                </Link>
                <Link href="/contact" passHref>
                  <h2 className="cursor-pointer font-semibold">Contact</h2>
                </Link>
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};


export default MobileNavbar;


