import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Phone,
  Mail,
  MessageCircle,
  MapPin,
  ArrowRight,
  Send,
  CheckCircle,
  TrendingUp,
  Home as HomeIcon
} from 'lucide-react';
import { DigitalGenieMark, BloomMark } from '../components/Logos';
import '../styles/contact.css';

function useScrollFade() {
  useEffect(() => {
    const els = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

const SERVICE_OPTIONS = [
  'Digital Strategy & Consulting',
  'Content & Social Media Management',
  'Meta Ads Campaigns (Paid Growth)',
  'Virtual / Digital Business Support',
  'Residential Interior Design',
  'Commercial / Retail Space Design',
  'Interior Styling & Consultation',
  'Both Digital & Interior Services',
  'Other Inquiry',
];

export default function Contact() {
  useScrollFade();
  const [searchParams] = useSearchParams();
  const initialService = searchParams.get('service') || '';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: initialService === 'digital'
      ? 'Digital Strategy & Consulting'
      : initialService === 'interior'
      ? 'Residential Interior Design'
      : initialService || '',
    timeline: '',
    details: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact-page">
      {/* ====== HERO ====== */}
      <section className="contact-hero" id="contact-hero">
        <div className="container">
          <div className="contact-hero__grid">
            <div className="contact-hero__info fade-in-left">
              <span className="tag">Get In Touch</span>
              <h1>Let's bring your vision into reality.</h1>
              <p>
                Whether you want to scale your brand's digital revenue or transform your physical living/work space, we're ready to partner with you.
              </p>

              {/* Direct Channels */}
              <div className="contact-channels">
                <a
                  href="mailto:thedigitalgenieng@gmail.com"
                  className="contact-channel-card"
                  id="contact-email-digital"
                >
                  <div className="contact-channel-card__icon contact-channel-card__icon--digital">
                    <DigitalGenieMark size={20} />
                  </div>
                  <div>
                    <span className="contact-channel-card__lbl">Digital Growth Division</span>
                    <strong className="contact-channel-card__val">thedigitalgenieng@gmail.com</strong>
                  </div>
                </a>

                <a
                  href="mailto:Thebloomhomeandinterior@gmail.com"
                  className="contact-channel-card"
                  id="contact-email-bloom"
                >
                  <div className="contact-channel-card__icon contact-channel-card__icon--bloom">
                    <BloomMark size={20} color="#98755B" />
                  </div>
                  <div>
                    <span className="contact-channel-card__lbl">Bloom Interiors Division</span>
                    <strong className="contact-channel-card__val">Thebloomhomeandinterior@gmail.com</strong>
                  </div>
                </a>

                <a
                  href="https://wa.me/2348132605102"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-channel-card"
                  id="contact-whatsapp"
                >
                  <div className="contact-channel-card__icon contact-channel-card__icon--wa">
                    <MessageCircle size={20} />
                  </div>
                  <div>
                    <span className="contact-channel-card__lbl">Direct WhatsApp Chat</span>
                    <strong className="contact-channel-card__val">+234 813 260 5102</strong>
                  </div>
                </a>

                <div className="contact-channel-card">
                  <div className="contact-channel-card__icon">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <span className="contact-channel-card__lbl">Availability & Location</span>
                    <strong className="contact-channel-card__val">Nigeria (Remote & On-Site Projects)</strong>
                  </div>
                </div>
              </div>

              {/* Instant WhatsApp Button */}
              <a
                href="https://wa.me/2348132605102?text=Hello%20The%20Digital%20Genie%2C%20I%20would%20like%20to%20inquire%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-green contact-wa-btn"
                id="contact-instant-wa-btn"
              >
                <MessageCircle size={18} />
                Instant Chat on WhatsApp <ArrowRight size={15} />
              </a>
            </div>

            {/* ====== INTAKE FORM ====== */}
            <div className="contact-form-card fade-in-right">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="contact-form__header">
                    <h3>Start Your Project</h3>
                    <p>Fill out the details below and we will respond within 24 hours.</p>
                  </div>

                  {/* Service Selector */}
                  <div className="form-group">
                    <label htmlFor="service">What can we help you with? *</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                    >
                      <option value="" disabled>Select your required service...</option>
                      {SERVICE_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Your Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="e.g. Sarah Jenkins"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="e.g. sarah@company.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phone">Phone / WhatsApp Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="+234..."
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="timeline">Desired Timeline</label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                      >
                        <option value="">Select timeframe...</option>
                        <option value="Immediate (This month)">Immediate (This month)</option>
                        <option value="1 - 3 Months">1 - 3 Months</option>
                        <option value="3+ Months / Exploring">3+ Months / Exploring</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="details">Project Goals & Brief Details *</label>
                    <textarea
                      id="details"
                      name="details"
                      rows={4}
                      placeholder="Tell us about your brand, current targets, or your interior space..."
                      value={formData.details}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <button type="submit" className="btn btn-digital btn-submit" id="contact-submit-btn">
                    <Send size={16} /> Submit Inquiry
                  </button>
                </form>
              ) : (
                <div className="contact-form__success">
                  <div className="contact-form__success-icon">
                    <CheckCircle size={44} className="text-dg-green" />
                  </div>
                  <h3>Inquiry Received!</h3>
                  <p>
                    Thank you for reaching out, <strong>{formData.name}</strong>. Our team will review your project brief and get in touch within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', service: '', timeline: '', details: '' });
                    }}
                    className="btn btn-outline"
                    style={{ marginTop: '20px' }}
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
