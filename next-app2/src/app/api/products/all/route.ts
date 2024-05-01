import { NextApiResponse } from "next";
export const GET = async (response: NextApiResponse) => {
  try {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    console.error(error);
    return response.status(500).json({ error: "Failed to fetch  products" });
  }
};
