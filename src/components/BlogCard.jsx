export default function BlogPostCard({ title, description, image, pubdate }) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <img src={image} alt={title} />
      <time>{pubdate}</time>
      <p>See more</p>
    </div>
  );
}
