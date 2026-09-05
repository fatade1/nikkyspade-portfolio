import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import { DigitalGenieLogo, BloomMark } from './Logos';
import '../styles/footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          {/* Brand Info */}
          <div className="footer__brand-col">
            <Link to="/" className="footer__logo">
              <DigitalGenieLogo size={36} showSubtitle={true} light={true} />
            </Link>
            <p className="footer__tagline">
              One creative house. Two distinct disciplines: Digital strategy, marketing, and growth alongside luxury interior design transformations.
            </p>

            <div className="footer__endorsement">
              <div className="footer__endorsement-badge">
                <BloomMark size={22} color="#FFFFFF" />
                <span>Interior Division: <strong>Bloom Interiors</strong></span>
              </div>
            </div>
          </div>

          {/* Explore */}
          <div className="footer__col">
            <h4 className="footer__col-title">Explore</h4>
            <ul className="footer__links">
              <li><Link to="/" className="footer__link">Home</Link></li>
              <li><Link to="/digital" className="footer__link">Digital Growth</Link></li>
              <li><Link to="/bloom" className="footer__link">Bloom Interiors</Link></li>
              <li><Link to="/work" className="footer__link">Selected Work</Link></li>
              <li><Link to="/about" className="footer__link">About Us</Link></li>
              <li><Link to="/contact" className="footer__link">Contact</Link></li>
            </ul>
          </div>

          {/* Digital Services */}
          <div className="footer__col">
            <h4 className="footer__col-title">Digital Genie</h4>
            <ul className="footer__links">
              <li><Link to="/digital" className="footer__link">Digital Strategy <ArrowUpRight size={12} /></Link></li>
              <li><Link to="/digital" className="footer__link">Social Media Management <ArrowUpRight size={12} /></Link></li>
              <li><Link to="/digital" className="footer__link">Content Strategy <ArrowUpRight size={12} /></Link></li>
              <li><Link to="/digital" className="footer__link">Meta Ads Campaigns <ArrowUpRight size={12} /></Link></li>
              <li><Link to="/digital" className="footer__link">Virtual Growth Support <ArrowUpRight size={12} /></Link></li>
            </ul>
          </div>

          {/* Bloom Interiors */}
          <div className="footer__col">
            <h4 className="footer__col-title">Bloom Interiors</h4>
            <ul className="footer__links">
              <li><Link to="/bloom" className="footer__link">Residential Interiors <ArrowUpRight size={12} /></Link></li>
              <li><Link to="/bloom" className="footer__link">Commercial Spaces <ArrowUpRight size={12} /></Link></li>
              <li><Link to="/bloom" className="footer__link">Space Planning & Layout <ArrowUpRight size={12} /></Link></li>
              <li><Link to="/bloom" className="footer__link">Furniture Sourcing <ArrowUpRight size={12} /></Link></li>
              <li><Link to="/bloom" className="footer__link">Interior Consultation <ArrowUpRight size={12} /></Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer__col">
            <h4 className="footer__col-title">Connect</h4>
            <ul className="footer__links">
              <li>
                <a href="mailto:thedigitalgenieng@gmail.com" className="footer__link footer__contact-item" title="Digital Genie">
                  <Mail size={14} /> thedigitalgenieng@gmail.com
                </a>
              </li>
              <li>
                <a href="mailto:Thebloomhomeandinterior@gmail.com" className="footer__link footer__contact-item" title="Bloom Interiors" style={{ wordBreak: 'break-all' }}>
                  <Mail size={14} /> Thebloomhomeandinterior@gmail.com
                </a>
              </li>
              <li>
                <a href="https://wa.me/2348132605102" target="_blank" rel="noopener noreferrer" className="footer__link footer__contact-item">
                  <Phone size={14} /> WhatsApp Direct
                </a>
              </li>
              <li className="footer__contact-item footer__location">
                <MapPin size={14} /> Remote & On-Site
              </li>
            </ul>

            <Link to="/contact" className="btn btn-primary footer__cta" id="footer-cta-btn">
              Book a Consultation
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer__bottom">
          <p>&copy; {year} The Digital Genie. All rights reserved.</p>
          <div className="footer__bottom-links">
            <span>One Creative House. Two Distinct Disciplines.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
