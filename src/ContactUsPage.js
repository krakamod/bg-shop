import React from 'react';

function ContactUsPage() {
  return (
    <div className="contact-us-page">
      <header className="header">
        <div className="header-logo">
          <img src="logo.png" alt="Shop Logo" />
          <h1>Contact Us</h1>
        </div>
        <p className="header-tagline">We'd love to hear from you!</p>
      </header>
      <main>
        <section className="contact-form">
          <h2>Contact Form</h2>
          <form>
            <div>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div>
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" required></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        </section>
        <section className="contact-details">
          <h2>Contact Details</h2>
          <p>Email: support@boardgamesshop.com</p>
          <p>Phone: 123-456-7890</p>
          <p>Address: 123 Board Game St, Game City, GC 12345</p>
          <p>Business Hours: Mon-Fri 9am-6pm</p>
        </section>
        <section className="social-media-links">
          <h2>Follow Us</h2>
          <a href="https://facebook.com">Facebook</a>
          <a href="https://twitter.com">Twitter</a>
          <a href="https://instagram.com">Instagram</a>
        </section>
        <section className="faq">
          <h2>Frequently Asked Questions</h2>
          <div>
            <h3>What is your return policy?</h3>
            <p>We accept returns within 30 days of purchase.</p>
          </div>
          <div>
            <h3>Do you offer international shipping?</h3>
            <p>Yes, we ship to most countries worldwide.</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default ContactUsPage;
