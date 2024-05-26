import Image from "next/image";
interface ItemProps {
  quantity: number;
  price: number;
  title: string;
  product_id: number;
}

interface CartContainerProps {
  item: ItemProps[];
}
export default function CartContainer({ item }: CartContainerProps) {
  return (
    <section className="w-[400px]">
      <h1>Shopping cart</h1>
      <p>You have {item.length} item in your cart</p>
      <div className="flex flex-col gap-3">
        {item?.map((cartItem) => (
          <div
            key={cartItem.product_id}
            className="flex  justify-between border border-gray-400 rounded-lg p-3"
          >
            <h2>{cartItem.title}</h2>
            <span className="flex items-center gap-2">
              <button className="bg-[#c9b8c933] p-1 h-[20px] flex justify-center items-center">
                -
              </button>
              <p>{cartItem.quantity}</p>
              <button>+</button>
            </span>

            <p>${cartItem.price}</p>
            <button>
              <Image
                src="/icons8-delete.svg"
                width={30}
                height={30}
                alt="delete icon"
              />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
