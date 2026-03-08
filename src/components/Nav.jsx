import { useEffect, useState } from "react";

const links = [
  { label: "Venue", href: "#details" },
  { label: "RSVP", href: "#rsvp" },
  { label: "Gift", href: "#gift" },
];

export default function Nav() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`site-nav${visible ? " site-nav--visible" : ""}`}
      aria-label="Page navigation"
    >
      <div className="site-nav-inner">
        {links.map((link) => (
          <a key={link.href} href={link.href} className="site-nav-link">
            {link.label}
          </a>
        ))}
        <a href="#top" className="site-nav-link site-nav-top" aria-label="Back to top">
          ↑
        </a>
      </div>
    </nav>
  );
}
