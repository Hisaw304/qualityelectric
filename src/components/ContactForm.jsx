// src/components/ContactForm.jsx
import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // For now, just show success message
    setSuccess(true);

    // Clear form after submission
    setFormData({ name: "", email: "", phone: "", message: "" });

    // TODO: connect backend logic here
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--dark-navy)] text-center mb-8">
          Contact Us
        </h2>
        <p className="text-gray-700 text-center mb-12">
          Have questions or want a quote? Fill out the form and we will get back
          to you shortly.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-[var(--off-white)] p-8 rounded-lg shadow-lg max-w-2xl mx-auto flex flex-col gap-6"
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--yellow)]"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--yellow)]"
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Your Phone"
            className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--yellow)]"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows={5}
            required
            className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--yellow)]"
          />

          <button
            type="submit"
            className="bg-[var(--yellow)] text-[var(--dark-navy)] font-semibold px-6 py-3 rounded-lg shadow hover:opacity-90 transition"
          >
            Send Message
          </button>

          {success && (
            <p className="text-green-600 font-medium mt-4 text-center">
              Your message has been sent successfully!
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
