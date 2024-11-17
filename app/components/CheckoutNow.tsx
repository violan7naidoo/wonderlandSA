"use client";

import { Button } from "../../components/ui/button";
import { useShoppingCart } from "use-shopping-cart";
import { urlFor } from "../lib/sanity";
import { ProductCart } from "./AddToBag";

export default function CheckoutNow({
  currency,
  description,
  image,
  name,
  price,
  price_id,
}: ProductCart) {
  const { checkoutSingleItem } = useShoppingCart();

  function buyNow(priceId: string) {
    checkoutSingleItem(priceId);
  }

  const product = {
    name: name,
    description: description,
    price: price,
    currency: currency,
    image: urlFor(image).url(),
    price_id: price_id,
  };
  return (
    <form action="https://www.payfast.co.za/eng/process" method="post">
      <input type="hidden" name="merchant_id" value="18284730" />
      <input type="hidden" name="merchant_key" value="ucnrpq3aui4wb" />
      {/* Dynamically populate amount and item_name based on cart */}
      <input type="hidden" name="amount" value={price} />
      <input type="hidden" name="item_name" value="Items" />
      {/* Add any additional fields as needed */}
      <input
        type="hidden"
        name="return_url"
        value="https://sensory-wonderland.vercel.app/stripe/success"
      />
      <input
        type="hidden"
        name="cancel_url"
        value="https://sensory-wonderland.vercel.app/stripe/error"
      />
      <input
        type="hidden"
        name="notify_url"
        value="https://www.example.com/notify"
      />
      <button
        type="submit"
        className="w-full bg-primary text-white font-semibold py-2 px-4 rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary-light"
      >
        Checkout Now with Payfast
      </button>
    </form>
  );
}
