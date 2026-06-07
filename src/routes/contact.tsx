import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { WHATSAPP_NUMBER, waLink } from "@/lib/bakery";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — The Sweet Spot" },
      {
        name: "description",
        content: "Get in touch with The Sweet Spot via phone, WhatsApp or email.",
      },
      { property: "og:title", content: "Contact — The Sweet Spot" },
      {
        property: "og:description",
        content: "We'd love to hear from you — phone, WhatsApp or email us today.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi! My name is ${form.name}. ${form.message}`;
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener",
    );
    setForm({ name: "", email: "", phone: "", message: "" });
    alert("Thanks! Opening WhatsApp to send your message.");
  };

  return (
    <section>
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Contact</span>
          <h2>We'd love to hear from you</h2>
          <p>Send us a message and we'll get back to you the same day.</p>
        </div>

        <div className="contact-grid">
          <form className="reveal" onSubmit={onSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                id="name"
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                id="phone"
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>

          <div className="contact-info reveal">
            <h3>Get in touch</h3>
            <p>📞 <strong>+27 73 884 5264</strong></p>
            <p>✉️ <strong>hello@sweetcrumb.co.za</strong></p>
            <p>📍 <strong>123 Bakery Lane, Your City</strong></p>
            <div style={{ marginTop: "1rem" }}>
              <a
                className="btn btn-primary"
                href={waLink("Hi! I have a question.")}
                target="_blank"
                rel="noopener"
              >
                Chat on WhatsApp
              </a>
            </div>
            <div className="map-embed">🗺️ Google Maps embed placeholder</div>
          </div>
        </div>
      </div>
    </section>
  );
}
