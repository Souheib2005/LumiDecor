import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Confirmation from "./pages/Confirmation";
import Contact from "./pages/Contact";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen text-gray-900">
      {/* === Logo and Branding === */}
      <header className="py-6 bg-white bg-opacity-90 shadow-md">
        <div className="logo-container">
          <img src="/lumidecor-logo.png" alt="LumiDécor Logo" />
          <h1>LumiDécor</h1>
        </div>

        {/* === Navigation Bar === */}
        <nav className="navbar">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>

      {/* === Routes === */}
      <main className="px-4 py-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
