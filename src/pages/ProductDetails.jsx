import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProductDetail.css';

const products = [
  {
    id: 1,
    name: "Aurora Glow Lamp",
    description: "An elegant multicolor lamp that creates a dreamy aura.",
    price: 34.99,
    image: "/aurora-glow.jpg",
    color: "Multicolor",
    power: "USB",
    type: "Lamp"
  },
  {
    id: 2,
    name: "Cozy Night Light",
    description: "A warm white night light perfect for bedrooms and late-night ambiance.",
    price: 19.99,
    image: "/cozy-night-light.jpg",
    color: "Warm White",
    power: "USB",
    type: "Lamp"
  },
  {
    id: 3,
    name: "LED Strip Vibe",
    description: "Colorful LED strip lights to decorate walls, desks or behind your screen.",
    price: 24.99,
    image: "/led-strip-vibe.jpg",
    color: "RGB",
    power: "Plug-in",
    type: "LED Strip"
  },
  {
    id: 4,
    name: "Amber Aura Light",
    description: "Soothing amber tones to create a relaxing mood in your space.",
    price: 29.99,
    image: "/amber-aura.jpg",
    color: "Amber",
    power: "USB",
    type: "Mood Light"
  },
  {
    id: 5,
    name: "Modern Blue Lamp",
    description: "A sleek and stylish blue lamp that adds a modern touch to your space.",
    price: 39.99,
    image: "/modern-blue-lamp.jpg",
    color: "Blue",
    power: "Plug-in",
    type: "Desk Lamp"
  },
  {
    id: 6,
    name: "USB LED Strip",
    description: "Portable USB-powered LED strip for flexible decorative use on the go.",
    price: 14.99,
    image: "/usb-led-strip.jpg",
    color: "RGB",
    power: "USB",
    type: "LED Strip"
  }
];

function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const navigate = useNavigate();
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({ ...product, quantity: 1 });
    localStorage.setItem("cart", JSON.stringify(cart));

    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      navigate('/cart');
    }, 1000);
  };

  if (!product) return <h2>Product not found</h2>;

  return (
    <div className="product-detail">
      {/* Go Back Button */}
      <button className="go-back" onClick={() => navigate(-1)}>← Go Back</button>

      <img src={product.image} alt={product.name} className="product-image" />
      <h1 className="product-title">{product.name}</h1>
      <p className="product-description">{product.description}</p>

      <ul className="product-specs">
        <li><strong>Color:</strong> {product.color}</li>
        <li><strong>Power Source:</strong> {product.power}</li>
        <li><strong>Type:</strong> {product.type}</li>
      </ul>

      <p className="product-price">${product.price.toFixed(2)}</p>

      <button className="add-to-cart" onClick={handleAddToCart}>
        🛒 Add to Cart
      </button>

      {added && <p className="added-message">✔️ Added! Redirecting…</p>}
    </div>
  );
}

export default ProductDetail;
