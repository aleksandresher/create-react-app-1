export default function Card({ name, description, image }) {
  return (
    <div className="flex flex-col items-center ">
      <img
        src={process.env.PUBLIC_URL + image}
        alt={name}
        className="w-[250px]"
      />
      <h1>{name}</h1>
      <span className="w-[200px] text-center">{description}</span>
    </div>
  );
}
