import React, { useState } from "react";
import "../styles/Contact.css";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("https://portfolio-backend-8e0f.onrender.com/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("❌ Failed to send message. Try again.");
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      setStatus("⚠️ Server error. Please try later.");
    }
  };

  return (
    <section id="contact">
      <h2>Contact Me ✉️</h2>
      <p>For more details, feel free to reach out!</p>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input 
            type="text" 
            name="name" 
            placeholder="Enter your name"
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input 
            type="email" 
            name="email" 
            placeholder="Enter your email"
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
        </div>

        <div className="form-group">
          <label>Message:</label>
          <textarea 
            name="message" 
            placeholder="Write your message here..."
            value={formData.message} 
            onChange={handleChange} 
            rows="5" 
            required 
          />
        </div>

        <button type="submit" className="submit-btn">Send Message</button>
      </form>

      {status && <p>{status}</p>}
    </section>
  );
}

export default Contact;
