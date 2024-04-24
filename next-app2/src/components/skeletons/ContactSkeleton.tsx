export default function ContactSkeleton() {
  return (
    <section className="w-full flex-grow flex p-10">
      <div className="flex justify-center items-center">
        <span className="flex flex-col w-1/2 gap-3">
          <div className="w-4/5 h-8 bg-gray-300 animate-pulse"></div>
          <div className="w-full h-4 bg-gray-300 animate-pulse"></div>
          <div className="w-3/4 h-4 bg-gray-300 animate-pulse"></div>
          <div className="w-2/3 h-4 bg-gray-300 animate-pulse"></div>
        </span>
      </div>
      <div className="flex flex-col w-1/2">
        <form className="grid grid-cols-2 grid-rows-5 gap-5 gap-y-2 ">
          <span className="flex flex-col gap-1">
            <div className="w-full h-10 bg-gray-300 animate-pulse"></div>
          </span>
          <span className="flex flex-col gap-1 ">
            <div className="w-full h-10 bg-gray-300 animate-pulse"></div>
          </span>
          <span className="flex flex-col gap-1 ">
            <div className="w-full h-10 bg-gray-300 animate-pulse"></div>
          </span>
          <span className="flex flex-col gap-1 ">
            <div className="w-full h-10 bg-gray-300 animate-pulse"></div>
          </span>
          <span className="flex flex-col gap-1 col-span-2 ">
            <div className="w-full h-10 bg-gray-300 animate-pulse"></div>
          </span>
          <span className="flex flex-col gap-1 col-span-2 ">
            <div className="w-full h-32 bg-gray-300 animate-pulse"></div>
          </span>
          <button className="col-span-2 place-self-start bg-gray-300 mt-6 p-3 rounded-lg animate-pulse"></button>
        </form>
      </div>
    </section>
  );
}
