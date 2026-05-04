import { useEffect, useState } from 'react';
import { Phone, Mail, MessageCircle, MapPin, ArrowRight, Send } from 'lucide-react';
import '../styles/contact.css';

function useScrollFade() {
  useEffect(() => {
    const els = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right');
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } }),
      { threshold: 0.1 }
    );
    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

const SERVICES = [
  'Social Media Management',
  'Content Strategy & Ghostwriting',
  'Meta Ads Campaign',
  'Product Launch Strategy',
  'Residential Interior Design',
  'Commercial Interior Design',
  'Space Planning & Styling',
  'Furniture Sourcing',
  'Both Digital & Interior Services',
  'Other / Not Sure Yet',
];

export default function Contact() {
  useScrollFade();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', details: '' });

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    // In production: integrate with Formspree or similar
    setSubmitted(true);
  };

  return (
    <main>
      {/* HERO */}
      <section className="contact-hero" id="contact-hero">
        <div className="container">
          <div className="contact-hero__inner">
            <div className="contact-hero__content fade-in-left">
              <span className="section-label">Get In Touch</span>
              <h1>Let's create something exceptional together.</h1>
              <div className="divider" />
              <p>Whether you're ready to grow your brand online, transform your space, or just have a few questions — I'd love to connect. Fill in the form or reach out directly.</p>

              <div className="contact-info">
                <a href="mailto:Nikkyspade@gmail.com" className="contact-info__item" id="contact-email-link-digital">
                  <div className="contact-info__icon contact-info__icon--email"><Mail size={18} /></div>
                  <div>
                    <div className="contact-info__label">Email (Digital)</div>
                    <div className="contact-info__val" style={{ wordBreak: 'break-all' }}>Nikkyspade@gmail.com</div>
                  </div>
                </a>
                <a href="mailto:Thebloomhomeandinterior@gmail.com" className="contact-info__item" id="contact-email-link-interior">
                  <div className="contact-info__icon contact-info__icon--email"><Mail size={18} /></div>
                  <div>
                    <div className="contact-info__label">Email (Interiors)</div>
                    <div className="contact-info__val" style={{ wordBreak: 'break-all' }}>Thebloomhomeandinterior@gmail.com</div>
                  </div>
                </a>
                <a href="https://wa.me/2348132605102" target="_blank" rel="noopener noreferrer" className="contact-info__item" id="contact-whatsapp-link">
                  <div className="contact-info__icon contact-info__icon--whatsapp"><MessageCircle size={18} /></div>
                  <div>
                    <div className="contact-info__label">WhatsApp</div>
                    <div className="contact-info__val">Chat with me directly</div>
                  </div>
                </a>
                <div className="contact-info__item">
                  <div className="contact-info__icon"><MapPin size={18} /></div>
                  <div>
                    <div className="contact-info__label">Location</div>
                    <div className="contact-info__val">Nigeria (Remote & On-site)</div>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/2348132605102?text=Hi%20Nikkyspade%2C%20I%27d%20love%20to%20book%20a%20consultation%21"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary contact-wa-btn"
                id="contact-whatsapp-cta"
              >
                <MessageCircle size={17} />
                Chat on WhatsApp <ArrowRight size={15} />
              </a>
            </div>

            {/* FORM */}
            <div className="contact-form-wrap fade-in-right">
              {!submitted ? (
                <form className="contact-form" onSubmit={handleSubmit} id="contact-form">
                  <h3 className="contact-form__title">Send a Message</h3>
                  <p className="contact-form__sub">I typically respond within 24–48 hours.</p>

                  <div className="contact-form__row">
                    <div className="contact-form__field">
                      <label htmlFor="contact-name" className="contact-form__label">Full Name *</label>
                      <input
                        type="text"
                        id="contact-name"
                        name="name"
                        className="contact-form__input"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="contact-form__field">
                      <label htmlFor="contact-email" className="contact-form__label">Email Address *</label>
                      <input
                        type="email"
                        id="contact-email"
                        name="email"
                        className="contact-form__input"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="contact-form__field">
                    <label htmlFor="contact-phone" className="contact-form__label">Phone / WhatsApp Number</label>
                    <input
                      type="tel"
                      id="contact-phone"
                      name="phone"
                      className="contact-form__input"
                      placeholder="+234..."
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="contact-form__field">
                    <label htmlFor="contact-service" className="contact-form__label">Service Needed *</label>
                    <select
                      id="contact-service"
                      name="service"
                      className="contact-form__input contact-form__select"
                      value={formData.service}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a service...</option>
                      {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>

                  <div className="contact-form__field">
                    <label htmlFor="contact-details" className="contact-form__label">Project Details *</label>
                    <textarea
                      id="contact-details"
                      name="details"
                      className="contact-form__input contact-form__textarea"
                      placeholder="Tell me about your project, goals, timeline, budget — anything that helps me understand what you need..."
                      rows={5}
                      value={formData.details}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <button type="submit" className="btn btn-primary contact-form__submit" id="contact-submit-btn">
                    <Send size={16} /> Send Message
                  </button>
                </form>
              ) : (
                <div className="contact-success" id="contact-success">
                  <div className="contact-success__icon">✦</div>
                  <h3>Message received!</h3>
                  <p>Thank you for reaching out. I'll get back to you within 24–48 hours. Looking forward to connecting!</p>
                  <a
                    href="https://wa.me/2348132605102"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    style={{ marginTop: '24px' }}
                  >
                    <MessageCircle size={16} /> Continue on WhatsApp
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ / NOTE */}
      <section className="contact-note section section--sand" id="contact-process">
        <div className="container">
          <div className="contact-note__inner">
            <div className="fade-in">
              <span className="section-label">What Happens Next?</span>
              <h2>A simple, seamless process</h2>
            </div>
            <div className="contact-note__steps">
              {[
                { num: '01', title: 'You Reach Out', desc: 'Fill in the form or message me on WhatsApp with your project details and goals.' },
                { num: '02', title: 'Discovery Call', desc: "We hop on a quick call to understand your vision, timeline, and expectations." },
                { num: '03', title: 'Custom Proposal', desc: 'I send you a tailored proposal with scope, timeline, and pricing for your review.' },
                { num: '04', title: 'We Get Started', desc: "Once you're happy, we sign off and dive in — building your brand or transforming your space." },
              ].map((step, i) => (
                <div className="contact-step fade-in" key={step.num} style={{ transitionDelay: `${i * 0.1}s` }}>
                  <div className="contact-step__num">{step.num}</div>
                  <div>
                    <h4 className="contact-step__title">{step.title}</h4>
                    <p className="contact-step__desc">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
