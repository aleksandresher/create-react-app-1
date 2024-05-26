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
    <div>
      {item?.map((cartItem) => (
        <div key={cartItem.product_id}>
          <p>Price: {cartItem.price}</p>
          <p>Title: {cartItem.title}</p>
          <p>Quantity: {cartItem.quantity}</p>
        </div>
      ))}
    </div>
  );
}
