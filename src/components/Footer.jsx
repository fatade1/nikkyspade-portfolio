import { Link } from 'react-router-dom';
import { Share2, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import '../styles/footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          {/* Brand */}
          <div className="footer__brand">
            <Link to="/" className="footer__logo">Nikkyspade</Link>
            <p className="footer__tagline">Building brands online and transforming spaces beautifully.</p>
            <div className="footer__socials">
              <a href="https://instagram.com/nikkyspade" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="Instagram">
                <Share2 size={18} />
              </a>
              <a href="mailto:Nikkyspade@gmail.com" className="footer__social-link" aria-label="Email">
                <Mail size={18} />
              </a>
              <a href="https://wa.me/2348132605102" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="WhatsApp">
                <Phone size={18} />
              </a>
            </div>
          </div>

          {/* Brands */}
          <div className="footer__col">
            <h4 className="footer__col-title">My Brands</h4>
            <ul className="footer__links">
              <li><Link to="/nikkytales" className="footer__link">NikkyTales <ArrowUpRight size={12} /></Link></li>
              <li><Link to="/bloom-interiors" className="footer__link">The Bloom Interiors <ArrowUpRight size={12} /></Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="footer__col">
            <h4 className="footer__col-title">Explore</h4>
            <ul className="footer__links">
              <li><Link to="/" className="footer__link">Home</Link></li>
              <li><Link to="/about" className="footer__link">About</Link></li>
              <li><Link to="/portfolio" className="footer__link">Portfolio</Link></li>
              <li><Link to="/contact" className="footer__link">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer__col">
            <h4 className="footer__col-title">Get in Touch</h4>
            <ul className="footer__links">
              <li>
                <a href="mailto:Nikkyspade@gmail.com" className="footer__link footer__contact-item" title="Digital">
                  <Mail size={14} /> Nikkyspade@gmail.com
                </a>
              </li>
              <li>
                <a href="mailto:Thebloomhomeandinterior@gmail.com" className="footer__link footer__contact-item" title="Interiors" style={{ wordBreak: 'break-all' }}>
                  <Mail size={14} /> Thebloomhomeandinterior@gmail.com
                </a>
              </li>
              <li>
                <a href="https://wa.me/2348132605102" className="footer__link footer__contact-item">
                  <Phone size={14} /> WhatsApp
                </a>
              </li>
              <li className="footer__contact-item footer__location">
                <MapPin size={14} /> Nigeria
              </li>
            </ul>
            <Link to="/contact" className="btn btn-primary footer__cta">Book a Consultation</Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer__bottom">
          <p>&copy; {year} Nikkyspade. All rights reserved.</p>
          <p>Crafted with elegance ✦</p>
        </div>
      </div>
    </footer>
  );
}
