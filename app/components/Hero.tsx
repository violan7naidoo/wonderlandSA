"use client";

import Image from "next/image";
import { client, urlFor } from "../lib/sanity";
import Link from "next/link";

async function getData() {
  const query = "*[_type == 'heroImage'][0]";

  const data = await client.fetch(query);

  return data;
}

console.log("hello");

export default async function Hero() {
  const data = await getData();
  return (
    <section className="mx-auto max-w-2xl px-4 sm:pb-6 lg:max-w-7xl lg:px-8">
      <div className="flex h-screen w-screen items-center justify-center">
        <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg h-full w-full">
          <Image
            src={urlFor(data.image2).url()}
            alt="Great Photo"
            className="h-full w-full object-cover object-center"
            width={1920}
            height={1080}
            priority
          />
        </div>
      </div>

      <div className="flex flex-col items-center justify-between gap-8 md:flex-row mb-25">
        <div className="flex h-12 w-full divide-x overflow-hidden rounded-lg border">
          <Link
            href="/Occupational"
            className="flex w-1/3 items-center justify-center text-black-500 transition duration-100 hover:bg-blue-100 active:bg-gray-200"
          >
            Occupational
          </Link>
          <Link
            href="/Toys"
            className="flex w-1/3 items-center justify-center text-black-500 transition duration-100 hover:bg-blue-100 active:bg-gray-200"
          >
            Toys
          </Link>
          <Link
            href="/Products"
            className="flex w-1/3 items-center justify-center text-black-500 transition duration-100 hover:bg-blue-100 active:bg-gray-200"
          >
            Products
          </Link>
        </div>
      </div>
    </section>
  );
}
