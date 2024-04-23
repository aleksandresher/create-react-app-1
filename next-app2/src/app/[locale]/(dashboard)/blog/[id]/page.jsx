import SingleBlog from "../../../../../components/blogs/SingleBlog";

const locales = ["en", "ka"];

export async function generateStaticParams() {
  const blogs = await fetch("https://dummyjson.com/recipes").then((res) =>
    res.json()
  );

  const blogParams = blogs?.recipes?.map((blog) => ({
    id: blog.id.toString(),
  }));

  const localeParams = locales.map((locale) => ({ locale }));

  return [...blogParams, ...localeParams];
}

async function getBlog({ id }) {
  const res = await fetch(`https://dummyjson.com/recipes/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch recipe");
  }
  return res.json();
}

export default async function SingleBlogWrapper({ params }) {
  const { id, locale } = params;
  const recipe = await getBlog({ id });
  return (
    <section className="flex justify-center mt-9">
      <SingleBlog recipe={recipe} locale={locale} />
    </section>
  );
}
