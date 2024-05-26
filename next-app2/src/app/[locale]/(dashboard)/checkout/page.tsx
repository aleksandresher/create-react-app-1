import { getCartItems } from "../../../../lib/load-cart-items";
import CartContainer from "../../../../components/cart/CartContainer";

export default async function Checkout() {
  return (
    <section className="flex justify-center mt-12">
      <CartContainer />
    </section>
  );
}
