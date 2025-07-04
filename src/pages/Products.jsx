import products from "../data/products";
import ProductCard from "../components/ProductCard";

const Products = () => {
  return (
 <div className="products-page">
  <h1 className="text-3xl font-bold text-center my-6 text-white">Our Products</h1>
  <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
    {products.map((product) => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
</div>

  );
};

export default Products;
