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

// export async function generateStaticParams() {
//   const locales = ["en", "ka"];

// return blogs?.recipes?.map((blog) => ({
//   id: blog.id.toString(),
// }));

// const localeParams = locales.map((locale) => ({ locale }));

// return [...blogParams, ...localeParams];
// }

interface PageProps {
  params: {
    id: string;
  };
}

export default async function Page({ params }: PageProps) {
  const post = await getPost(params.id);

  // const { id } = params;
  // const recipe = getBlog({ id });
  return (
    <section className="flex justify-center mt-9">
      <SingleBlog post={post} />
    </section>
  );
}
