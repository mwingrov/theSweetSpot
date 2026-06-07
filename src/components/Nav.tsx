import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { waLink } from "@/lib/bakery";

const links = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/about", label: "About" },
  { to: "/payment", label: "Payment" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link to="/" className="logo" onClick={() => setOpen(false)}>
          <span>🥐</span> The Sweet Spot
        </Link>
        <button className="hamburger" aria-label="Menu" onClick={() => setOpen((o) => !o)}>
          ☰
        </button>
        <ul className={`nav-links${open ? " open" : ""}`}>
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                activeOptions={{ exact: true }}
                activeProps={{ className: "active" }}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              className="btn btn-primary"
              href={waLink()}
              target="_blank"
              rel="noopener"
              onClick={() => setOpen(false)}
            >
              Order Now
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
