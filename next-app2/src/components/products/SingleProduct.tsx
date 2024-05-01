import Image from "next/image";

export interface ProductProps {
  product: {
    id: string;
    images: string[];
    title: string;
    description: string;
    price: number;
  };
}

export default function SingleProduct({ product }: ProductProps) {
  console.log(product);
  return (
    <div className="flex flex-col shadow-2xl p-8 max-w-[500px] m-h-[500px]">
      <Image
        src={product?.images?.[2]}
        // alt={product.title}
        width={600}
        height={600}
        alt={product.title}
        className="w-[500px] rounded-[20px] max-w-[400px]"
      />
      <span className="flex flex-col gap-3 items-center">
        <h1 className="font-bold text-xl">{product.title}</h1>
        <h1 className="font-medium">{product.description}</h1>
        <div className="flex gap-2 items-center h-[40px] mt-2">
          <p className="font-medium text-xl">Price:</p>
          <p className="text-green-600 text-xl">{product.price}$</p>
        </div>
      </span>
    </div>
  );
}
