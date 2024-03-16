export default function Card({ name, description, image }) {
  return (
    <div className="grid grid-cols-1  justify-center shadow-lg p-2 gap-2 w-4/5 ">
      <img src={process.env.PUBLIC_URL + image} alt={name} className="" />
      <span className="flex flex-col items-center">
        <h1>{name}</h1>
        <p className="w-[200px] text-center">{description}</p>
      </span>

      <div className="flex justify-center">
        <button className="bg-[#edede9] p-3 rounded-md w-1/2">
          Add to cart
        </button>
      </div>
    </div>
  );
}
