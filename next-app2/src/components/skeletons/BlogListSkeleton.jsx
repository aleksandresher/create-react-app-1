export default function BlogListSkeleton() {
  return (
    <div className="grid grid-cols-3 gap-3 p-12 gap-y-8 bg-[#efefef]">
      {[...Array(6)].map((_, index) => (
        <div key={index} className="animate-pulse">
          <div className="flex flex-col items-center justify-between gap-3 p-6 rounded-md bg-[#fff]">
            <h1 className="font-bold text-center h-[40px]"></h1>
            <p className="text-center"></p>
            <div className="w-[300px] h-[300px] bg-gray-300"></div>{" "}
            <time className="underline underline-offset-2"></time>
            <a className="font-medium self-bottom">
              <button className="hover:text-green-600"></button>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
