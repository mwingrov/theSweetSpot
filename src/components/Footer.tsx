import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="foot-grid">
          <div>
            <div className="logo" style={{ color: "#fff", marginBottom: ".75rem" }}>
              <span>🥐</span> The Sweet Spot
            </div>
            <p style={{ fontSize: ".95rem", color: "rgba(245,230,211,.85)" }}>
              Freshly baked happiness, made with love every day.
            </p>
            <div className="socials">
              <a href="#" aria-label="Instagram">📷</a>
              <a href="#" aria-label="Facebook">📘</a>
              <a href="#" aria-label="TikTok">🎵</a>
            </div>
          </div>
          <div>
            <h4>Explore</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/menu">Menu</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/payment">Payment</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li>📞 +27 73 884 5264</li>
              <li>✉️ hello@sweetcrumb.co.za</li>
              <li>📍 123 Bakery Lane, Your City</li>
            </ul>
          </div>
          <div>
            <h4>Hours</h4>
            <ul>
              <li>Mon – Fri: 6:30am – 6pm</li>
              <li>Saturday: 7am – 4pm</li>
              <li>Sunday: 8am – 1pm</li>
            </ul>
          </div>
        </div>
        <div className="copy">© {new Date().getFullYear()} The Sweet Spot. All rights reserved.</div>
      </div>
    </footer>
  );
}
