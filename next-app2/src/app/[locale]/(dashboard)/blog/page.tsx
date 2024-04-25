import BlogList from "../../../../components/blogs/BlogList";

interface ParamsProp {
  locale: string;
}

interface BlogHomeProps {
  params: ParamsProp;
}

async function getRecipes() {
  const res = await fetch("https://dummyjson.com/recipes");

  if (!res.ok) {
    throw new Error("Failed to fetch recipes");
  }
  return res.json();
}

export default async function Home({ params }: BlogHomeProps) {
  const { locale } = params;
  const recipes = await getRecipes();

  return (
    <div className="flex justify-center items-center bg-[#f7f8fa] py-12 dark:bg-black">
      <BlogList recipes={recipes.recipes} locale={locale} />
    </div>
  );
}
