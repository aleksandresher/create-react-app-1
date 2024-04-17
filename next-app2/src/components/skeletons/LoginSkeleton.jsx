export default function LoginSkeleton() {
  return (
    <section className="flex justify-center bg-[#d4dfee] p-12">
      <div className="flex flex-col gap-6 rounded-[10px] w-[400px]">
        <div className="flex flex-col gap-1 w-full">
          <div className="h-10 bg-gray-300 animate-pulse rounded-sm"></div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="h-10 bg-gray-300 animate-pulse rounded-sm"></div>
        </div>
        <button className="bg-gray-300 p-2 rounded-md row-span-4 animate-pulse hover:bg-gray-400"></button>
      </div>
    </section>
  );
}
