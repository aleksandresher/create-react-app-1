"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function SingleBlog({ params }) {
  const { id } = params;
  const [recipe, setRecipe] = useState(null);

  async function getBlog({ id }) {
    const res = await fetch(`https://dummyjson.com/recipes/${id}`);

    if (!res.ok) {
      throw new Error("Failed to fetch recipe");
    }
    return res.json();
  }

  useEffect(() => {
    async function fetchRecipe() {
      try {
        const recipeData = await getBlog(id);
        setRecipe(recipeData);
      } catch (error) {
        console.error("Error fetching recipe:", error);
      }
    }

    fetchRecipe();
  }, [id]);

  return (
    <section className="w-10/12 grid grid-cols-3 px-10 ">
      {recipe && (
        <>
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
          )
        </>
      )}
    </section>
  );
}
