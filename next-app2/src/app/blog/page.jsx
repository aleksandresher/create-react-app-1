import { blogPosts } from "@/blogData";
import BlogPostCard from "@/components/BlogCard";

export default function Blog() {
  return (
    <div className="grid grid-cols-3 gap-3 p-12 gap-y-8 bg-[#efefef]">
      {blogPosts.map((item) => {
        return (
          <BlogPostCard
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            image={item.image}
            pubdate={item.publishing_date}
          />
        );
      })}
    </div>
  );
}
