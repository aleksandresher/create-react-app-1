import Image from "next/image";
export default function Card({ title, image, price }) {
  return (
    <div className="grid grid-cols-1 items-center shadow-lg py-5 gap-2 ">
      <span className="flex justify-center">
        {" "}
        <Image
          src={image}
          alt={title}
          width={300}
          height={300}
          className="w-[250px] h-[250px] rounded-lg"
        />
      </span>

      <span className="flex flex-col items-center">
        <h1>{title}</h1>
        <div className="flex gap-2 items-center h-[40px] mt-2">
          <p>Price:</p>
          <p className="text-green-600">{price}$</p>
        </div>
      </span>

      <div className="flex justify-center">
        <button className="bg-[#faedcd] p-3 rounded-md w-1/2">
          Add to cart
        </button>
      </div>
    </div>
  );
}
