export async function getCartItems() {
  try {
    const response = await fetch("http://localhost:3000/api/cart-all", {
      cache: "no-cache",
    });
    const { cartItems } = await response.json();
    console.log(cartItems);
    return cartItems;
  } catch (error) {
    console.error("Error fetching cart items:", error);
    return [];
  }
}
