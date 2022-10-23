import useProducts from "../../hooks/useProducts";
import Product from "./Product";
import './Product.css'

const Products = () => {
  const [products] = useProducts();
  return (
    <section className="my-12 sm:min-w-max lg:px-12 ">
      <div className="text-center">
        <h2 className="mb-5 text-4xl text-info">Our Products</h2>
        <hr />
      </div>

      <div className="grid grid-cols-1 gap-10 mt-5 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
        {products.slice(0, 3).map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </div>
    </section>
  );
};

export default Products;
