export default function Card({ name, description, image, price }) {
  return (
    <div className="grid grid-cols-1  justify-center shadow-lg p-2 gap-2 w-4/5 ">
      <img src={process.env.PUBLIC_URL + image} alt={name} className="" />
      <span className="flex flex-col items-center">
        <h1>{name}</h1>
        <p className="w-[200px] text-center">{description}</p>
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
