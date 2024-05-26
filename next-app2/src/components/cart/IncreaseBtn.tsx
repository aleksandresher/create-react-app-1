"use client";
import { useQueryClient } from "@tanstack/react-query";
import { queryClient } from "../../app/providers/ReactQueryProvider";
export default function IncreaseButton({ productId }: { productId: number }) {
  const queryClient = useQueryClient();
  const handleClick = async (productId: number) => {
    try {
      const response = await fetch("/api/cart/increase", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productId }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      queryClient.invalidateQueries({ queryKey: ["cart"] });
      return data;
    } catch (error) {
      console.error("Error increasing quantity:", error);
    }
  };

  return (
    <button
      onClick={() => handleClick(productId)}
      className="bg-[#8b878b33] p-2 h-[20px] flex justify-center items-center rounded-md"
    >
      +
    </button>
  );
}
