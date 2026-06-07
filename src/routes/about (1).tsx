import { createFileRoute } from "@tanstack/react-router";
import { waLink } from "@/lib/bakery";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — The Sweet Spot" },
      {
        name: "description",
        content:
          "Our story, our values, and why our community trusts us with their daily bakes.",
      },
      { property: "og:title", content: "About — The Sweet Spot" },
      {
        property: "og:description",
        content: "Baking with care since day one — meet The Sweet Spot.",
      },
      {
        property: "og:image",
        content:
          "https://images.unsplash.com/photo-1568254183919-78a4f43a2877?w=1200&q=80",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section>
        <div className="container about-grid">
          <div className="reveal">
            <span className="eyebrow">Our Story</span>
            <h2>Baking with care since day one</h2>
            <p>
              At our bakery, every loaf, pastry and cake is crafted with care using quality
              ingredients. We believe great baking brings people together and creates memorable
              moments.
            </p>
            <p>
              What started as a small family kitchen is now a neighbourhood favourite — and we
              still bake every item the same way: by hand, in small batches, with love.
            </p>
          </div>
          <div className="reveal">
            <img
              src="https://images.unsplash.com/photo-1568254183919-78a4f43a2877?w=900&q=80"
              alt="Inside the bakery"
            />
          </div>
        </div>
      </section>

      <section className="testimonials">
        <div className="container">
          <div className="section-head reveal">
            <h2>Why Choose Us</h2>
            <p>A few reasons our customers keep coming back.</p>
          </div>
          <div className="about-grid">
            <div className="reveal">
              <img
                src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=900&q=80"
                alt="Fresh bread"
              />
            </div>
            <ul className="feature-list reveal">
              <li><strong>Freshly baked daily</strong> — out of the oven every morning.</li>
              <li><strong>Affordable pricing</strong> — quality treats for every budget.</li>
              <li><strong>Custom birthday cakes</strong> — designed around your story.</li>
              <li><strong>Friendly local service</strong> — we know our regulars by name.</li>
              <li><strong>Quality ingredients</strong> — real butter, real eggs, no shortcuts.</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="newsletter reveal">
            <h2>Order a custom cake</h2>
            <p>Chat with us on WhatsApp to design your perfect celebration cake.</p>
            <div style={{ marginTop: "1.5rem" }}>
              <a
                className="btn"
                href={waLink("Hi! I'd like to order a custom cake.")}
                target="_blank"
                rel="noopener"
              >
                Message us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
