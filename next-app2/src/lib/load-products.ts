export async function getProducts() {
  try {
    const response = await fetch("http://localhost:3000/api/get-products");
    const { products } = await response.json();
    console.log("products", products);
    return products.rows;
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
}
