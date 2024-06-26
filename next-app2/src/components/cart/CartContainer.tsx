"use client";
import Image from "next/image";
import IncreaseButton from "./IncreaseBtn";
import DecreaseButton from "./DecreaseBtn";
import DeleteButton from "./DeleteBtn";
import { useQuery } from "@tanstack/react-query";
import { getCartItems } from "../../lib/load-cart-items";
import CartSkeleton from "../skeletons/CartSkeleton";
interface ItemProps {
  quantity: number;
  price: number;
  title: string;
  product_id: number;
}

export default function CartContainer() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["cart"],
    queryFn: () => getCartItems(),
  });

  if (isLoading) {
    return <CartSkeleton />;
  }
  return (
    <section className="w-[400px] flex flex-col gap-2">
      <h1 className=" font-bold">Shopping cart</h1>
      <p>You have {data?.length} item in your cart</p>
      <div className="flex flex-col gap-3">
        {data?.map((cartItem: ItemProps) => (
          <div
            key={cartItem.product_id}
            className="grid grid-cols-4 items-center border border-gray-400 rounded-lg p-3"
          >
            <h2>{cartItem.title}</h2>
            <span className="flex items-center gap-2 justify-center">
              <DecreaseButton
                productId={cartItem.product_id}
                quantity={cartItem.quantity}
              />
              <p>{cartItem.quantity}</p>
              <IncreaseButton productId={cartItem.product_id} />
            </span>

            <span className="flex justify-center">
              ${cartItem.price * cartItem.quantity}
            </span>
            <DeleteButton product_id={cartItem.product_id} />
          </div>
        ))}
      </div>
    </section>
  );
}
