import { blogPosts } from "../blogData";
import BlogPostCard from "../components/BlogCard";

export default function Blog() {
  return (
    <div className="grid grid-cols-2 gap-3">
      {blogPosts.map((item, idx) => {
        return (
          <BlogPostCard
            key={idx}
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
