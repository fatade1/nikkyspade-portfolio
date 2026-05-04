import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import '../styles/navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        {/* Logo */}
        <Link to="/" className="navbar__logo" onClick={close}>
          <span className="navbar__logo-name">Nikkyspade</span>
          <span className="navbar__logo-tagline">Creative Entrepreneur</span>
        </Link>

        {/* Desktop Links */}
        <ul className="navbar__links">
          <li><NavLink to="/" end className={({ isActive }) => `navbar__link${isActive ? ' active' : ''}`}>Home</NavLink></li>
          <li><NavLink to="/about" className={({ isActive }) => `navbar__link${isActive ? ' active' : ''}`}>About</NavLink></li>          {/* Brands Dropdown */}
          <li className="navbar__dropdown">
            <span className="navbar__link navbar__dropdown-trigger">
              My Brands <ChevronDown size={14} />
            </span>
            <div className="navbar__dropdown-menu">
              <Link to="/nikkytales" className="navbar__dropdown-item">
                NikkyTales
                <span>Digital Marketing</span>
              </Link>
              <Link to="/bloom-interiors" className="navbar__dropdown-item">
                The Bloom Interiors
                <span>Interior Design</span>
              </Link>
            </div>
          </li>

          <li><NavLink to="/portfolio" className={({ isActive }) => `navbar__link${isActive ? ' active' : ''}`}>Portfolio</NavLink></li>
          <li>
            <NavLink to="/contact" className="navbar__link navbar__cta">Book a Consultation</NavLink>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          className={`navbar__hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          id="navbar-hamburger-btn"
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`navbar__mobile${menuOpen ? ' open' : ''}`}>
        <NavLink to="/" end className="navbar__mobile-link" onClick={close}>Home</NavLink>
        <NavLink to="/about" className="navbar__mobile-link" onClick={close}>About</NavLink>
        <NavLink to="/nikkytales" className="navbar__mobile-link" onClick={close}>NikkyTales</NavLink>
        <NavLink to="/bloom-interiors" className="navbar__mobile-link" onClick={close}>Bloom Interiors</NavLink>
        <NavLink to="/portfolio" className="navbar__mobile-link" onClick={close}>Portfolio</NavLink>
        <Link to="/contact" className="btn btn-primary navbar__mobile-cta" onClick={close}>Book a Consultation</Link>
      </div>
    </>
  );
}
