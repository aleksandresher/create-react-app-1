export default function SingleBlogSkeleton() {
  return (
    <section className="w-10/12 grid grid-cols-3 px-10 ">
      <span className="flex flex-col gap-3 items-center">
        <h1 className="text-xl font-bold"></h1>
      </span>
      <ul className="flex flex-col gap-3 items-center pt-5 max-w-[300px]">
        <h2 className="font-bold"></h2>
        <div className="flex flex-col gap-2 items-center "></div>
      </ul>
      <ul className="flex flex-col items-start gap-3 pt-5">
        <h2 className="font-bold"></h2>
        <div className="flex flex-col gap-2 items-star"></div>
      </ul>
      <div className="flex flex-col items-center gap-2 pt-3">
        <span></span>
        <span></span>
        <span> </span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </section>
  );
}
