import { useState } from "react";
import { Link } from "react-router-dom";
import "./Confirmation.css";

function Confirmation() {
  const [satisfaction, setSatisfaction] = useState("");
  const [thoughts, setThoughts] = useState("");
  const [suggestions, setSuggestions] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!satisfaction && !thoughts && !suggestions) {
      alert("Please fill out at least one feedback field.");
      return;
    }

    console.log("Feedback submitted:", {
      satisfaction,
      thoughts,
      suggestions,
    });

    setSubmitted(true);
    setSatisfaction("");
    setThoughts("");
    setSuggestions("");
  };

  return (
    <div className="confirmation-container">
      <img
        src="https://cdn-icons-png.flaticon.com/512/190/190411.png"
        alt="Success"
        className="confirmation-check"
      />

      <h2 className="confirmation-title">Thank you for your order!</h2>
      <p className="confirmation-message">
        We appreciate your purchase. Your lights will be packed with care and shipped soon.
      </p>

      <Link to="/products" className="continue-shopping">
        Continue Shopping
      </Link>

      <form className="feedback-box" onSubmit={handleSubmit}>
        <h3 className="feedback-title">We value your feedback!</h3>

        <div className="feedback-group">
          <label htmlFor="satisfaction">How satisfied are you with your experience?</label>
          <select
            id="satisfaction"
            value={satisfaction}
            onChange={(e) => setSatisfaction(e.target.value)}
          >
            <option value="">Select an option</option>
            <option value="5">Very satisfied</option>
            <option value="4">Satisfied</option>
            <option value="3">Neutral</option>
            <option value="2">Dissatisfied</option>
            <option value="1">Very dissatisfied</option>
          </select>
        </div>

        <div className="feedback-group">
          <label htmlFor="thoughts">Your thoughts...</label>
          <textarea
            id="thoughts"
            rows="3"
            placeholder="Tell us more..."
            value={thoughts}
            onChange={(e) => setThoughts(e.target.value)}
          ></textarea>
        </div>

        <div className="feedback-group">
          <label htmlFor="suggestions">Any suggestions or comments?</label>
          <textarea
            id="suggestions"
            rows="2"
            placeholder="Share your ideas..."
            value={suggestions}
            onChange={(e) => setSuggestions(e.target.value)}
          ></textarea>
        </div>

        <button type="submit" className="submit-feedback">Submit Feedback</button>
      </form>

      {submitted && (
        <div className="feedback-thankyou">
          🎉 Thank you for your feedback!
        </div>
      )}
    </div>
  );
}

export default Confirmation;
