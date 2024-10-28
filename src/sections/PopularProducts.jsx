import { products } from "../constants";

const PopularProducts = () => {
  return (
    <section
      id="products"
      className="max-container
    max-sm:mt-12"
    >
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">
          Our Popular Products
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Exercitationem expedita deserunt dolorum impedit cum. Amet adipisci
          maiores nisi obcaecati sapiente voluptatem dolor maxime voluptate
        </p>
      </div>
    </section>
  );
};

export default PopularProducts;
