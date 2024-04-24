import Link from "next/link";
import Image from "next/image";
// import { useTranslations } from "next-intl";

interface BlogProps {
  id: number;
  name: string;
  description: string;
  pubdate: string;
  image: string;
  locale: string;
}

export default function BlogPostCard({
  id,
  name,
  description,
  pubdate,
  image,
  locale,
}: BlogProps) {
  // const t = useTranslations("Index");

  return (
    <div className="flex flex-col items-center justify-between gap-3 p-6 rounded-md bg-[#fff]">
      <h1 className="font-bold text-center h-[40px]">{name}</h1>
      <p className="text-center">{description}</p>
      <Image
        src={image}
        alt={name}
        className="w-[300px]"
        width={300}
        height={300}
      />
      <time className="underline underline-offset-2 ">{pubdate}</time>
      <Link className="font-medium self-bottom" href={`/${locale}/blog/${id}`}>
        <button className="hover:text-green-600">Read more</button>
      </Link>
    </div>
  );
}
