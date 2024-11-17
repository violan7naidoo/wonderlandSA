"use client";

import { Button } from "../../components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag } from "lucide-react";
import { useShoppingCart } from "use-shopping-cart";
import { client, urlFor } from "../lib/sanity";
import Image from "next/image";

const links = [
  { name: "Home", href: "/" },
  { name: "Occupational", href: "/Occupational" },
  { name: "Toys", href: "/Toys" },
  { name: "Products", href: "/Products" },
];

async function getData() {
  const query = "*[_type == 'heroImage'][0]";

  const data = await client.fetch(query);

  return data;
}

export default async function Navbar() {
  const pathname = usePathname();
  const { handleCartClick } = useShoppingCart();
  const data = await getData();

  return (
    <header className="mb-8 border-b">
      <div className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
        <Link href="/">
          {/* <h1 className="text-2xl md:text-4xl font-bold">
            Sensory<span className="text-primary">Wonderland</span>
          </h1> */}
        </Link>

        <nav className="hidden gap-12 lg:flex 2xl:ml-16">
          {/* {links.map((link, idx) => (
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
          ))} */}
          <h1 className="text-2xl md:text-4xl font-bold">
            Wonderland<span className="text-primary">SA</span>
          </h1>

          <Image
            src={urlFor(data.image1).url()}
            alt="Great Photo"
            className="h-full w-full object-cover object-center rounded"
            priority
            width={50}
            height={50}
          />
        </nav>

        <div className="flex divide-x border-r sm:border-l">
          <Button
            variant={"outline"}
            onClick={() => handleCartClick()}
            className="flex flex-col gap-y-1.5 h-12 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-none"
          >
            <ShoppingBag />
            <span className="hidden text-xs font-semibold text-gray-500 sm:block">
              Cart
            </span>
          </Button>
        </div>
      </div>
    </header>
  );
}
