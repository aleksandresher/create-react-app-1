import Card from "./Card";

export default function ProductList({ products }) {
  console.log(products);
  return (
    <section className="w-11/12 grid grid-cols-4 gap-7">
      {products?.map((item) => {
        return (
          <Card
            key={item.id}
            title={item.title}
            image={item.images[0]}
            price={item.price}
          />
        );
      })}
    </section>
  );
}
