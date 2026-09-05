import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { DigitalGenieLogo } from './Logos';
import '../styles/navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isDigital = location.pathname.startsWith('/digital');
  const isBloom = location.pathname.startsWith('/bloom');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
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
      <header className={`navbar${scrolled ? ' scrolled' : ''}${isDigital ? ' navbar--digital' : ''}${isBloom ? ' navbar--bloom' : ''}`}>
        <div className="navbar__container">
          {/* Logo */}
          <Link to="/" className="navbar__logo" onClick={close} aria-label="The Digital Genie Home">
            <DigitalGenieLogo size={36} showSubtitle={true} />
          </Link>

          {/* Desktop Links */}
          <nav className="navbar__nav">
            <ul className="navbar__links">
              <li>
                <NavLink
                  to="/digital"
                  className={({ isActive }) => `navbar__link navbar__link--digital${isActive ? ' active' : ''}`}
                >
                  Digital
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/bloom"
                  className={({ isActive }) => `navbar__link navbar__link--bloom${isActive ? ' active' : ''}`}
                >
                  Bloom Interiors
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/work"
                  className={({ isActive }) => `navbar__link${isActive ? ' active' : ''}`}
                >
                  Work
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) => `navbar__link${isActive ? ' active' : ''}`}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) => `navbar__link${isActive ? ' active' : ''}`}
                >
                  Contact
                </NavLink>
              </li>
            </ul>

            {/* Primary CTA */}
            <Link
              to="/contact"
              className={`btn navbar__cta ${isBloom ? 'btn-bloom' : 'btn-digital'}`}
              id="nav-cta-btn"
            >
              Let's Work Together <ArrowRight size={15} />
            </Link>
          </nav>

          {/* Mobile Hamburger */}
          <button
            className={`navbar__hamburger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            id="navbar-hamburger-btn"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div className={`navbar__mobile${menuOpen ? ' open' : ''}`}>
        <div className="navbar__mobile-header">
          <Link to="/" onClick={close}>
            <DigitalGenieLogo size={32} showSubtitle={false} />
          </Link>
        </div>

        <nav className="navbar__mobile-nav">
          <NavLink to="/" end className="navbar__mobile-link" onClick={close}>Home</NavLink>
          <NavLink to="/digital" className="navbar__mobile-link navbar__mobile-link--digital" onClick={close}>
            Digital
            <span className="navbar__mobile-badge">Growth & Strategy</span>
          </NavLink>
          <NavLink to="/bloom" className="navbar__mobile-link navbar__mobile-link--bloom" onClick={close}>
            Bloom Interiors
            <span className="navbar__mobile-badge">Interior Design</span>
          </NavLink>
          <NavLink to="/work" className="navbar__mobile-link" onClick={close}>Work</NavLink>
          <NavLink to="/about" className="navbar__mobile-link" onClick={close}>About</NavLink>
          <NavLink to="/contact" className="navbar__mobile-link" onClick={close}>Contact</NavLink>
        </nav>

        <div className="navbar__mobile-footer">
          <Link
            to="/contact"
            className="btn btn-digital navbar__mobile-cta"
            onClick={close}
          >
            Let's Work Together <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </>
  );
}
