import { useEffect, useState } from "react";
import { waLink } from "@/lib/bakery";

export function FloatingButtons() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <>
      <a className="fab fab-wa" href={waLink()} target="_blank" rel="noopener" aria-label="WhatsApp">
        💬
      </a>
      <button
        className={`fab fab-top${show ? " show" : ""}`}
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        ↑
      </button>
    </>
  );
}
