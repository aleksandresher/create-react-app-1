export default function CartSkeleton() {
  return (
    <section className="w-[400px] flex flex-col gap-2">
      <h1 className=" font-bold">Shopping cart</h1>
      <p>You have item in your cart</p>
      <div className="flex flex-col gap-3">
        <div className="flex h-[60px] animate-pulse  justify-between border bg-gray-400 rounded-lg p-3">
          <h2></h2>
          <span className="flex items-center gap-2">
            <div></div>
            <p>{}</p>
            <div></div>
          </span>

          <p></p>
          <button></button>
        </div>
        <div className="flex h-[60px] animate-pulse  justify-between border bg-gray-400 rounded-lg p-3">
          <h2></h2>
          <span className="flex items-center gap-2">
            <div></div>
            <p>{}</p>
            <div></div>
          </span>

          <p></p>
          <button></button>
        </div>
      </div>
    </section>
  );
}
