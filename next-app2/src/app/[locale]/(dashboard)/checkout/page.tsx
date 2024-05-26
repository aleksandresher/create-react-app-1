import { getCartItems } from "../../../../lib/load-cart-items";
import CartContainer from "../../../../components/cart/CartContainer";

export default async function Checkout() {
  const cartItems = await getCartItems();

  return (
    <>
      <CartContainer item={cartItems} />
    </>
  );
}
