import SingleBlog from "../../../../../components/blogs/SingleBlog";

interface Recipe {
  id: number;
}

export const generateStaticParams = async () => {
  const res = await fetch("https://dummyjson.com/recipes");
  const data = await res.json();

  return data.recipes.map((recipe: Recipe) => ({
    id: recipe.id.toString(),
  }));
};

const getPost = async (id: string) => {
  const res = await fetch(`https://dummyjson.com/recipes/${id}`);
  const data = await res.json();
  return data;
};

interface PageProps {
  params: {
    id: string;
  };
}

export default async function Page({ params }: PageProps) {
  const post = await getPost(params.id);

  return (
    <section className="flex justify-center mt-9">
      <SingleBlog post={post} />
    </section>
  );
}
