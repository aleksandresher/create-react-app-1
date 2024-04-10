import Image from "next/image";

export default function SingleBlog({ recipe }) {
  return (
    <section className="w-10/12 grid grid-cols-3 px-10 ">
      <span className="flex flex-col gap-3 items-center">
        <h1 className="text-xl font-bold">{recipe.name}</h1>
        <Image
          src={recipe.image}
          width={300}
          height={300}
          alt={recipe.name}
          className="w-[300px] h-[300px] rounded-2xl"
        />
      </span>

      <ul className="flex flex-col gap-3 items-center pt-5 max-w-[300px]">
        <h2 className="font-bold">Ingredients</h2>
        <div className="flex flex-col gap-2 items-center ">
          {recipe?.ingredients.map((item) => {
            return <li>{item}</li>;
          })}
        </div>
      </ul>
      <ul className="flex flex-col items-start gap-3 pt-5">
        <h2 className="font-bold">Instructions</h2>
        <div className="flex flex-col gap-2 items-star">
          {recipe?.instructions.map((item, index) => {
            return (
              <li>
                {index + 1}. {item}
              </li>
            );
          })}
        </div>
      </ul>
      <div className="flex flex-col items-center gap-2 pt-3">
        {" "}
        <span>Preperation Time: {recipe.prepTimeMinutes} minutes</span>
        <span>Cooking Time: {recipe.cookTimeMinutes} minutes</span>
        <span>Serving: {recipe.servings} </span>
        <span>Difficulty: {recipe.difficulty}</span>
        <span>Calories: {recipe.caloriesPerServing} Per serving</span>
        <span>{recipe.MealType}</span>
      </div>
    </section>
  );
}
