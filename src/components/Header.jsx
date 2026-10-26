import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#approach", label: "Approach" },
];

export default function Header({ name }) {
  const [open, setOpen] = useState(false);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <header className="site-header">
      <nav className="nav container" aria-label="Main navigation">
        <a className="brand" href="#home" onClick={closeMenu} aria-label={`${name}, home`}>
          {name.toLowerCase()}<span>.dev</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
        <div id="primary-navigation" className={`nav-links ${open ? "is-open" : ""}`}>
          {links.map((link) => (
            <a href={link.href} key={link.href} onClick={closeMenu}>{link.label}</a>
          ))}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>
            Contact <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
      </nav>
    </header>
  );
}
