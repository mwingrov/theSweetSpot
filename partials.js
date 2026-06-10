// Shared header + footer injected to avoid duplication. Loaded as a regular <script> before script.js.
const NAV_HTML = `
<nav class="nav">
  <div class="nav-inner">
    <a href="index.html" class="logo"><span>🥐</span> The Sweet Spot Bakery</a>
    <button class="hamburger" aria-label="Menu">☰</button>
    <ul class="nav-links">
      <li><a href="index.html">Home</a></li>
      <li><a href="menu.html">Menu</a></li>
      <li><a href="about.html">About</a></li>
      <li><a href="payment.html">Payment</a></li>
      <li><a href="contact.html">Contact</a></li>
      <li><a class="btn btn-primary" data-wa="Hi! I'd like to place an order.">Order Now</a></li>
    </ul>
  </div>
</nav>`;

const FOOTER_HTML = `
<footer>
  <div class="container">
    <div class="foot-grid">
      <div>
        <div class="logo" style="color:#fff;margin-bottom:.75rem"><span>🥐</span> The Sweet Spot</div>
        <p style="font-size:.95rem;color:rgba(245,230,211,.85)">Freshly baked happiness, made with love every day.</p>
        <div class="socials">
          <a href="#" aria-label="Instagram">📷</a>
          <a href="#" aria-label="Facebook">📘</a>
          <a href="#" aria-label="TikTok">🎵</a>
        </div>
      </div>
      <div>
        <h4>Explore</h4>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="menu.html">Menu</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="payment.html">Payment</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </div>
      <div>
        <h4>Contact</h4>
        <ul>
          <li>📞 +27 73 884 5264</li>
          <li>✉️ jjbeukes@thesweetspot.co.za</li>
          <li>📍 123 Bakery Lane, Klawer</li>
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
    <div class="copy">© <span id="yr"></span> The Sweet Spot Bakery. All rights reserved.</div>
  </div>
</footer>
<a class="fab fab-wa" data-wa="Hi! I'd like to place an order." aria-label="WhatsApp">💬</a>
<button class="fab fab-top" aria-label="Back to top">↑</button>
`;

document.addEventListener('DOMContentLoaded', () => {
  const navMount = document.querySelector('#nav-mount');
  const footMount = document.querySelector('#footer-mount');
  if(navMount) navMount.outerHTML = NAV_HTML;
  if(footMount) footMount.outerHTML = FOOTER_HTML;
  const yr = document.querySelector('#yr');
  if(yr) yr.textContent = new Date().getFullYear();
});
