import { NavLink } from "react-router-dom";

export default function BlogPostCard({ id, title, description, pubdate }) {
  return (
    <div className="flex flex-col items-center justify-between gap-3 p-6 rounded-md bg-[#fff]">
      <h1 className="font-bold text-center h-[40px]">{title}</h1>
      <p className="text-center">{description}</p>
      <img src="./assets/blog.png" alt={title} className="w-[300px]" />
      <time className="underline underline-offset-2 ">{pubdate}</time>
      <NavLink className="font-medium self-bottom" to={`/blog/${id}`}>
        <button className="hover:text-green-600">Read more</button>
      </NavLink>
    </div>
  );
}
