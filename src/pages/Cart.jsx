import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCart);
  }, []);

  const removeFromCart = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const getTotal = () => {
    return cartItems.reduce((sum, item) => sum + item.price, 0).toFixed(2);
  };

  return (
    <div className="cart-container">
      <div className="cart-box">
        <h1 className="cart-title">Your Cart</h1>

        {cartItems.length === 0 ? (
          <>
            <p className="cart-empty">Your cart is empty.</p>
            <Link to="/products" className="continue-shopping">
              Continue Shopping
            </Link>
          </>
        ) : (
          <>
            <div className="cart-items">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} className="cart-image" />
                  <div className="cart-info">
                    <h3>{item.name}</h3>
                    <p>${item.price.toFixed(2)}</p>
                  </div>
                  <button
                    className="remove-btn"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <h3>Total: ${getTotal()}</h3>
              <Link to="/checkout" className="checkout-btn">
                Go to Checkout
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;
