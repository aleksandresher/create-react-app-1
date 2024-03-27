import { NavLink } from "react-router-dom";

export default function BlogPostCard({ id, title, description, pubdate }) {
  return (
    <div className="flex flex-col items-center justify-between gap-3 p-6 rounded-md bg-[#fff]">
      <h1 className="font-bold text-center">{title}</h1>
      <p className="text-center">{description}</p>
      <img src="./assets/blog.png" alt={title} className="w-[300px]" />
      <time>{pubdate}</time>
      <NavLink className="font-medium self-bottom" to={`/blog/${id}`}>
        <button>Read more</button>
      </NavLink>
    </div>
  );
}
