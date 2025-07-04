function Contact() {
  return (
    <div className="contact-section">
      <h2>Contact Us</h2>
      <p>Have a question or want to reach out? We’d love to hear from you!</p>

      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea rows="4" placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>

      <div className="opening-hours">
        <h3>Opening Hours</h3>
        <p>Monday – Friday: 9 AM – 6 PM</p>
        <p>Saturday: 10 AM – 4 PM</p>
        <p>Sunday: Closed</p>
      </div>
    </div>
  );
}

export default Contact;
