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
              <a href="#" aria-label="Instagram"><svg fill="#000000" height="20" width="20" version="1.1" id="Layer_1"
              xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="-271 273 256 256" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M-64.5,273h-157c-27.3,0-49.5,22.2-49.5,49.5v52.3v104.8c0,27.3,22.2,49.5,49.5,49.5h157c27.3,0,49.5-22.2,49.5-49.5V374.7 v-52.3C-15.1,295.2-37.3,273-64.5,273z M-50.3,302.5h5.7v5.6v37.8l-43.3,0.1l-0.1-43.4L-50.3,302.5z M-179.6,374.7 c8.2-11.3,21.5-18.8,36.5-18.8s28.3,7.4,36.5,18.8c5.4,7.4,8.5,16.5,8.5,26.3c0,24.8-20.2,45.1-45.1,45.1s-44.9-20.3-44.9-45.1 C-188.1,391.2-184.9,382.1-179.6,374.7z M-40,479.5C-40,493-51,504-64.5,504h-157c-13.5,0-24.5-11-24.5-24.5V374.7h38.2 c-3.3,8.1-5.2,17-5.2,26.3c0,38.6,31.4,70,70,70c38.6,0,70-31.4,70-70c0-9.3-1.9-18.2-5.2-26.3H-40V479.5z"></path> </g></svg></a>
              <a href="#" aria-label="Facebook"><svg fill="#000000" height="20" width="20" version="1.1" id="Layer_1"
              xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="-337 273 123.5 256" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M-260.9,327.8c0-10.3,9.2-14,19.5-14c10.3,0,21.3,3.2,21.3,3.2l6.6-39.2c0,0-14-4.8-47.4-4.8c-20.5,0-32.4,7.8-41.1,19.3 c-8.2,10.9-8.5,28.4-8.5,39.7v25.7H-337V396h26.5v133h49.6V396h39.3l2.9-38.3h-42.2V327.8z"></path> </g></svg></a>
              <a href="#" aria-label="TikTok">
                <svg xmlns="http://w3.org" width="20" height="20" viewBox="0 0 24 24" fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round">
                        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                        </svg>
                      </a>
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
        <div className="copy">© {new Date().getFullYear()} The Sweet Spot. All rights reserved.</div>
      </div>
    </footer>
  );
}
