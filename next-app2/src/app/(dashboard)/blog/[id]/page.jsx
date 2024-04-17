import SingleBlog from "@/components/blogs/SingleBlog";

async function getBlog({ id }) {
  const res = await fetch(`https://dummyjson.com/recipes/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch recipe");
  }
  return res.json();
}

export default async function SingleBlogWrapper({ params }) {
  const { id } = params;
  const recipe = await getBlog({ id });
  return (
    <section className="flex justify-center mt-9">
      <SingleBlog recipe={recipe} />
    </section>
  );
}
