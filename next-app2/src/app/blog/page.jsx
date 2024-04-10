import BlogList from "@/components/BlogList";

async function getRecipes() {
  const res = await fetch("https://dummyjson.com/recipes");

  if (!res.ok) {
    throw new Error("Failed to fetch recipes");
  }
  return res.json();
}

export default async function Home() {
  const recipes = await getRecipes();

  return (
    <div className="flex justify-center items-center bg-[#f7f8fa] py-12">
      <BlogList recipes={recipes.recipes} />
    </div>
  );
}
