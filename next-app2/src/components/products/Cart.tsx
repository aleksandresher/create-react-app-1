"use client";
import Link from "next/link";

export default function Cart({ locale }: { locale: string }) {
  return (
    <Link href={`${locale}/checkout`}>
      {" "}
      <div>
        <p>Cart</p>
      </div>
    </Link>
  );
}
