import BlogPostCard from "./BlogCard";
export default function Blog({ recipes, locale }) {
  return (
    <div className="grid grid-cols-3 gap-3 p-12 gap-y-8 bg-[#efefef]">
      {recipes?.map((item) => {
        return (
          <BlogPostCard
            key={item.id}
            id={item.id}
            name={item.name}
            description={item.description}
            image={item.image}
            pubdate={item.publishing_date}
            locale={locale}
          />
        );
      })}
    </div>
  );
}
