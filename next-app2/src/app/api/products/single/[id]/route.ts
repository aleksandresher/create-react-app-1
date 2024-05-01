// import { NextApiRequest, NextApiResponse } from "next";
// import { NextRequest } from "next/server";
// export const GET = async (
//   response: NextApiResponse,
//   { params }: { params: { id: string } }
// ) => {
//   console.log(params);
//   const { id } = params;
//   try {
//     const res = await fetch(`https://dummyjson.com/products/${id}`);
//     const data = await res.json();
//     return new Response(JSON.stringify(data), { status: 200 });
//   } catch (error) {
//     console.error(error);
//     return response
//       .status(500)
//       .json({ error: "failed to fetch single product" });
//   }
// };
