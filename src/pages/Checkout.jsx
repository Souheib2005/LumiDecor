import React, { useState } from 'react';
import './Checkout.css';
import { useNavigate } from 'react-router-dom';

function Checkout() {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
    phone: '',
  });

  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.address || !formData.email) {
      setSuccessMessage('Please fill in all required fields.');
      return;
    }

    // Simulate payment success
    setSuccessMessage('✅ Payment successful! Redirecting to confirmation page...');

    // Clear cart
    localStorage.removeItem('cart');

    // Redirect after short delay
    setTimeout(() => {
      navigate('/confirmation');
    }, 2500);
  };

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>

      <form className="checkout-form" onSubmit={handleSubmit}>
        <label>
          Full Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Address:
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Phone (optional):
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Place Order and Pay</button>
      </form>

      {successMessage && (
        <div className="checkout-success">{successMessage}</div>
      )}
    </div>
  );
}

export default Checkout;
