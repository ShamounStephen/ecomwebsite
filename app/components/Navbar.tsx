"use client";

import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useShoppingCart } from "use-shopping-cart";

const links = [
  { name: "Home", href: "/" },
  { name: "Men", href: "/Men" },
  { name: "Women", href: "/Women" },
  { name: "Teens", href: "/Teens" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { handleCartClick, cartCount } = useShoppingCart();
  return (
    <header className="w-screen overflow-hidden  shadow h-[70px] flex  sticky top-0 z-50 border-b backdrop-filter backdrop-blur-lg bg-opacity-30 bg-white px-4 md:px-0 ">
      <div className="w-[90%] md:w-[80%] 2xl:max-w-[1280px]  flex justify-between items-center mx-auto ">
        <Link href="/">
          <h1 className="text-2xl md:text-3xl font-semibold ">
            Flip<span className="text-primary">Commerce</span>
          </h1>
        </Link>

        <nav className={`flex justify-between items-center gap-4 `}>
          {links.map((link, idx) => (
            <div key={idx}>
              {pathname === link.href ? (
                <Link
                  className="text-lg font-semibold text-primary"
                  href={link.href}
                >
                  {link.name}
                </Link>
              ) : (
                <Link
                  href={link.href}
                  className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-primary"
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </nav>
        <div className="flex divide-x border-r sm:border-l">
          <Button
            variant={"outline"}
            onClick={() => handleCartClick()}
            className="flex flex-col justify-center items-center h-[60px] w-[70px] md:h-[60px] md:w-[70px] relative md:pt-3"
          >
            <ShoppingBag />
            <span className="text-xs text-primary hidden md:block">Cart</span>
            {cartCount !== undefined && cartCount > 0 && (
              <div className="w-5 h-5 flex justify-center items-center rounded-full border-primary border-[3px] absolute top-[4px] right-[8px] md:right-[6px] md:top-[3px] text-xs antialiased">
                {cartCount}
              </div>
            )}
          </Button>
        </div>
      </div>
    </header>
  );
}
