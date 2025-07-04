import { Link } from "react-router-dom";
import "./ProductCard.css";

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="image-container">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-info">
        <h2>{product.name}</h2>
        <p className="description">{product.description}</p>
        <div className="bottom-row">
          <Link to={`/product/${product.id}`} className="view-button">
            View
          </Link>
          <span className="price">${product.price.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
