import BlogPostCard from "./BlogCard";

interface Recipe {
  id: number;
  name: string;
  description: string;
  image: string;
  publishing_date: string;
}

interface BlogListProps {
  recipes: Recipe[];
  locale: string;
}
export default function Blog({ recipes, locale }: BlogListProps) {
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
