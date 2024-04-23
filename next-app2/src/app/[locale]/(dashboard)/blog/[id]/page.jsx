import SingleBlog from "../../../../../components/blogs/SingleBlog";

export async function generateStaticParams() {
  const locales = ["en", "ka"];
  const blogs = await fetch("https://dummyjson.com/recipes").then((res) =>
    res.json()
  );

  return blogs?.recipes?.map((blog) => ({
    id: blog.id.toString(),
  }));

  // const localeParams = locales.map((locale) => ({ locale }));

  // return [...blogParams, ...localeParams];
}

export default function Page({ params }) {
  const { id } = params;
  console.log(params);
  // const recipe = getBlog({ id });
  return (
    <section className="flex justify-center mt-9">
      <SingleBlog />
    </section>
  );
}
