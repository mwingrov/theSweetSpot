import { createFileRoute, Link } from "@tanstack/react-router";
import { waLink } from "../lib/bakery";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Sweet Spot — Freshly Baked Happiness Every Day" },
      {
        name: "description",
        content:
          "Artisan breads, cakes, pastries, biscuits and drinks baked fresh daily. Order via WhatsApp, phone or email.",
      },
      { property: "og:title", content: "The Sweet Spot" },
      {
        property: "og:description",
        content: "Freshly baked happiness every day — breads, cakes, pastries and more.",
      },
      {
        property: "og:image",
        content:
          "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1200&q=80",
      },
    ],
  }),
  component: () => <Home />, // Attaches the local Home component to the route
});

const categories = [
  { id: "bread", title: "Bread & Savory", desc: "Loaves, rolls, pies and sandwiches.", img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80" },
  { id: "cakes", title: "Cakes & Muffins", desc: "Birthday cakes, cupcakes and muffins.", img: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=600&q=80" },
  { id: "pastries", title: "Pastries", desc: "Croissants, donuts and Danish pastries.", img: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&q=80" },
  { id: "biscuits", title: "Biscuits & Treats", desc: "Cookies, rusks, tarts and shortbread.", img: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=600&q=80" },
  { id: "drinks", title: "Drinks", desc: "Coffee, tea, milkshakes and juices.", img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80" },
  { id: "specialty", title: "Specialty Treats", desc: "Chocolate chip, oatmeal, tarts and more.", img: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&q=80" },
];

const testimonials = [
  { stars: "★★★★★", text: '"The croissants are unreal — flaky, buttery, and always fresh."', who: "— Lerato M." },
  { stars: "★★★★★", text: '"Best birthday cake we\'ve ever ordered. Beautiful and delicious."', who: "— The Naidoo Family" },
  { stars: "★★★★★", text: '"My morning coffee and a warm muffin — the perfect start."', who: "— Sipho K." },
];

const galleryImages = [
  "https://images.unsplash.com/photo-1568254183919-78a4f43a2877?w=500&q=80",
  "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=500&q=80",
  "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=500&q=80",
  "https://images.unsplash.com/photo-1464195244916-405fa0a82545?w=500&q=80",
];

// Changed from 'export function Home' to a local standard function
function Home() {
  return (
    <>
      <header className="hero">
        <div className="container hero-grid">
          <div className="reveal">
            <span className="eyebrow">Baked fresh daily</span>
            <h1>Freshly Baked Happiness Every Day</h1>
            <p className="lead">
              Delicious breads, cakes, pastries, treats and drinks made fresh for our community.
            </p>
            <div className="btn-group">
              <Link to="/menu" className="btn btn-primary">View Menu</Link>
              <a
                className="btn btn-outline"
                href={waLink("Hi! I'd like to place an order.")}
                target="_blank"
                rel="noopener"
              >
                Order Now
              </a>
            </div>
          </div>
          <div className="reveal">
            <img
              src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=900&q=80"
              alt="Assorted fresh bakery items"
            />
          </div>
        </div>
      </header>

      <section>
        <div className="container">
          <div className="section-head reveal">
            <h2>Explore Our Bakery</h2>
            <p>Six delicious categories, each made with care and quality ingredients.</p>
          </div>
          <div className="grid grid-3">
            {categories.map((c) => (
              <Link key={c.id} to="/menu" hash={c.id} className="card reveal">
                <img src={c.img} alt={c.title} />
                <div className="card-body">
                  <h3>{c.title}</h3>
                  <p>{c.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="testimonials">
        <div className="container">
          <div className="section-head reveal">
            <h2>Loved by our community</h2>
            <p>Real words from happy customers.</p>
          </div>
          <div className="grid grid-3">
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial reveal">
                <div className="stars">{t.stars}</div>
                <p>{t.text}</p>
                <div className="who">{t.who}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-head reveal">
            <h2>From Our Oven</h2>
            <p>A peek inside the bakery.</p>
          </div>
          <div className="gallery">
            {galleryImages.map((src) => (
              <img key={src} className="reveal" src={src} alt="" />
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <Newsletter />
        </div>
      </section>
    </>
  );
}

function Newsletter() {
  return (
    <div className="newsletter reveal">
      <h2>Join our newsletter</h2>
      <p>Weekly specials, new flavours, and early access to seasonal cakes.</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          (e.currentTarget as HTMLFormElement).reset();
          alert("Thanks for subscribing! 🥐");
        }}
      >
        <input type="email" placeholder="your@email.com" required />
        <button className="btn" type="submit">Subscribe</button>
      </form>
    </div>
  );
}
