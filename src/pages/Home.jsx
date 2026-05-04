import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Home as HomeIcon, Share2, Layout, Sparkles, CheckCircle, Star } from 'lucide-react';
import heroImg from '../assets/images/hero_portrait.png';
import aboutImg from '../assets/images/about_portrait.png';
import bloomHeroImg from '../assets/images/bloom_hero.png';
import nikkytalesHeroImg from '../assets/images/nikkytales_hero.png';
import livingRoomImg from '../assets/images/living_room.png';
import dashboardImg from '../assets/images/digital_dashboard.png';
import brandGrowthImg from '../assets/images/brand_growth.png';
import '../styles/home.css';

/* Intersection Observer hook for scroll animation */
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
      { threshold: 0.12 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

const DIGITAL_SERVICES = [
  { icon: <Share2 size={22} />, title: 'Social Media Management', desc: 'Strategy, content calendars, engagement growth, and community management across platforms.' },
  { icon: <TrendingUp size={22} />, title: 'Paid Advertising', desc: 'Targeted Meta Ads campaigns that drive real results — awareness, leads, and conversions.' },
  { icon: <Layout size={22} />, title: 'Content Strategy', desc: 'Storytelling-driven content that builds authority, grows audiences, and converts.' },
];

const INTERIOR_SERVICES = [
  { icon: <HomeIcon size={22} />, title: 'Residential Design', desc: 'Transforming living rooms, bedrooms, and entire homes into beautiful, functional spaces.' },
  { icon: <Sparkles size={22} />, title: 'Space Planning & Styling', desc: 'Thoughtful layout and styling that maximises every inch while staying aesthetically cohesive.' },
  { icon: <CheckCircle size={22} />, title: 'Furnishing & Execution', desc: 'Sourcing, procurement, and hands-on execution from concept to final reveal.' },
];

const PORTFOLIO_ITEMS = [
  { img: brandGrowthImg, cat: 'Digital Marketing', title: 'Personal Brand Growth', desc: 'Content strategy & social media management for a business coach.', result: '+120% Engagement' },
  { img: livingRoomImg, cat: 'Interior Design', title: 'Living Room Transformation', desc: 'Modern redesign with neutral palette, upgraded lighting and furniture.', result: 'Full Transformation' },
  { img: dashboardImg, cat: 'Digital Marketing', title: 'Product Launch Campaign', desc: 'Built a full 2-week Meta Ads campaign for a beauty brand launch.', result: 'High-Impact Launch' },
];

const TESTIMONIALS = [
  { text: 'NikkyTales completely transformed how I show up online. My engagement tripled in just 6 weeks and I started getting real inquiries from dream clients.', name: 'Amaka O.', role: 'Business Coach', init: 'A' },
  { text: 'The Bloom Interiors gave me the living room I always dreamed of. Every detail was handled with such care and elegance — totally exceeded expectations.', name: 'Chidi B.', role: 'Homeowner', init: 'C' },
  { text: 'She understands brands deeply. My product launch was a massive success thanks to her strategy and the incredible content she created.', name: 'Funmi A.', role: 'Beauty Brand Founder', init: 'F' },
];

export default function Home() {
  useScrollFade();

  return (
    <main>
      {/* ====== HERO ====== */}
      <section className="hero" id="home-hero">
        <div className="hero__content">
          <div className="hero__eyebrow">
            <span className="hero__eyebrow-dot">Creative Entrepreneur</span>
            <span>✦</span>
            <span>Digital · Interiors</span>
          </div>

          <h1 className="hero__title">
            Building brands online and{' '}
            <em>transforming spaces</em>{' '}
            beautifully.
          </h1>

          <p className="hero__sub">
            I'm Nikkyspade — helping brands grow digitally while creating beautiful, functional spaces that inspire and delight.
          </p>

          <div className="hero__ctas">
            <Link to="/nikkytales" className="btn btn-primary" id="hero-digital-cta">
              Explore Digital Services <ArrowRight size={16} />
            </Link>
            <Link to="/bloom-interiors" className="btn btn-outline" id="hero-interior-cta">
              Explore Interior Services
            </Link>
          </div>

          <div className="hero__stats">
            <div>
              <div className="hero__stat-num">50+</div>
              <div className="hero__stat-label">Clients Served</div>
            </div>
            <div>
              <div className="hero__stat-num">2</div>
              <div className="hero__stat-label">Expert Brands</div>
            </div>
            <div>
              <div className="hero__stat-num">99%</div>
              <div className="hero__stat-label">Satisfaction Rate</div>
            </div>
          </div>
        </div>

        <div className="hero__visual">
          <img src={heroImg} alt="Nikkyspade — Creative Entrepreneur" className="hero__image" />
          <div className="hero__image-overlay" />
        </div>

        <div className="hero__scroll-hint">
          <span>Scroll</span>
          <div className="hero__scroll-line" />
        </div>
      </section>

      {/* ====== INTRO ====== */}
      <section className="intro section" id="home-intro">
        <div className="container">
          <div className="intro__inner">
            <div className="intro__text fade-in-left">
              <span className="section-label">About Nikkyspade</span>
              <h2>Where digital strategy meets design excellence</h2>
              <div className="divider" />
              <p>
                I'm a multi-disciplinary creative entrepreneur with a passion for two things: growing powerful brands online and transforming physical spaces into breathtaking environments.
              </p>
              <p>
                Through <strong>NikkyTales</strong>, I help businesses and personal brands achieve measurable growth through strategic social media management and paid advertising. Through <strong>The Bloom Interiors</strong>, I craft residential and commercial spaces that are as functional as they are beautiful.
              </p>
              <div className="intro__features">
                {['Content Strategy', 'Meta Ads', 'Interior Design', 'Space Planning', 'Brand Growth', 'Project Execution'].map(f => (
                  <div className="intro__feature" key={f}>
                    <div className="intro__feature-icon"><CheckCircle size={15} /></div>
                    {f}
                  </div>
                ))}
              </div>
              <Link to="/about" className="btn btn-outline" style={{ marginTop: '36px' }} id="home-about-link">
                Learn My Story <ArrowRight size={16} />
              </Link>
            </div>

            <div className="intro__image-wrap fade-in-right">
              <img src={aboutImg} alt="Nikkyspade in her workspace" className="intro__image-main" />
              <img src={livingRoomImg} alt="Bloom Interiors work" className="intro__image-accent" />
              <div className="intro__badge-card">
                <div className="intro__badge-card-num">3+</div>
                <div className="intro__badge-card-label">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== BRAND SPLIT ====== */}
      <section className="brands section" id="home-brands">
        <div className="container">
          <div className="section-header--center fade-in">
            <span className="section-label">My Brands</span>
            <h2>Two brands. One vision.</h2>
            <p>Each brand serves a distinct purpose — but both share the same commitment to excellence, creativity, and real results.</p>
          </div>

          <div className="brands__grid">
            <Link to="/nikkytales" className="brand-card fade-in-left" id="brand-nikkytales-card">
              <img src={nikkytalesHeroImg} alt="NikkyTales Digital Marketing" className="brand-card__image" />
              <div className="brand-card__overlay" />
              <div className="brand-card__content">
                <div className="brand-card__pill">Digital Marketing</div>
                <h3 className="brand-card__title">NikkyTales</h3>
                <p className="brand-card__desc">Strategic social media management, paid advertising, and content creation that grows your brand and drives real results.</p>
                <div className="brand-card__link">
                  Explore NikkyTales
                  <div className="brand-card__link-arrow"><ArrowRight size={14} /></div>
                </div>
              </div>
            </Link>

            <Link to="/bloom-interiors" className="brand-card fade-in-right" id="brand-bloom-card">
              <img src={bloomHeroImg} alt="The Bloom Interiors" className="brand-card__image" />
              <div className="brand-card__overlay" />
              <div className="brand-card__content">
                <div className="brand-card__pill">Interior Design</div>
                <h3 className="brand-card__title">The Bloom Interiors</h3>
                <p className="brand-card__desc">Transforming residential and commercial spaces into beautiful, functional environments that reflect your personality and purpose.</p>
                <div className="brand-card__link">
                  Explore Bloom Interiors
                  <div className="brand-card__link-arrow"><ArrowRight size={14} /></div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ====== SERVICES PREVIEW ====== */}
      <section className="services-preview section" id="home-services">
        <div className="container">
          <div className="section-header fade-in" style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end', flexWrap:'wrap', gap:'16px' }}>
            <div>
              <span className="section-label">What I Do</span>
              <h2>Services that make an impact</h2>
            </div>
            <Link to="/portfolio" className="btn btn-outline" id="home-view-all-btn">View All Work</Link>
          </div>

          <div style={{ marginBottom: '12px' }}>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', color: 'var(--light-brown)', marginBottom: '20px', letterSpacing: '0.05em' }}>NikkyTales — Digital</h3>
            <div className="services-grid fade-in">
              {DIGITAL_SERVICES.map(s => (
                <div className="service-card" key={s.title}>
                  <div className="service-card__icon">{s.icon}</div>
                  <h3 className="service-card__title">{s.title}</h3>
                  <p className="service-card__desc">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginTop: '48px' }}>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', color: 'var(--light-brown)', marginBottom: '20px', letterSpacing: '0.05em' }}>The Bloom Interiors</h3>
            <div className="services-grid fade-in">
              {INTERIOR_SERVICES.map(s => (
                <div className="service-card" key={s.title}>
                  <div className="service-card__icon">{s.icon}</div>
                  <h3 className="service-card__title">{s.title}</h3>
                  <p className="service-card__desc">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ====== PORTFOLIO PREVIEW ====== */}
      <section className="portfolio-preview section section--sand" id="home-portfolio">
        <div className="container">
          <div className="section-header--center fade-in">
            <span className="section-label">Selected Work</span>
            <h2>Projects I'm proud of</h2>
            <p>A glimpse into the digital campaigns and interior transformations I've delivered for clients.</p>
          </div>

          <div className="portfolio-preview__scroll">
            {PORTFOLIO_ITEMS.map((item, i) => (
              <div className={`portfolio-card fade-in`} key={item.title} style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="portfolio-card__img-wrap">
                  <img src={item.img} alt={item.title} className="portfolio-card__img" loading="lazy" />
                </div>
                <div className="portfolio-card__body">
                  <div className="portfolio-card__cat">{item.cat}</div>
                  <h3 className="portfolio-card__title">{item.title}</h3>
                  <p className="portfolio-card__desc">{item.desc}</p>
                  {item.result && <div className="portfolio-card__result"><TrendingUp size={13} />{item.result}</div>}
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <Link to="/portfolio" className="btn btn-primary" id="home-portfolio-cta">View Full Portfolio <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      {/* ====== TESTIMONIALS ====== */}
      <section className="testimonials-preview section" id="home-testimonials">
        <div className="container">
          <div className="section-header--center fade-in">
            <span className="section-label">Client Love</span>
            <h2>What my clients say</h2>
            <p>Real words from real people who trusted me with their brands and spaces.</p>
          </div>

          <div className="testimonials-grid">
            {TESTIMONIALS.map((t, i) => (
              <div className="testimonial-card fade-in" key={t.name} style={{ transitionDelay: `${i * 0.12}s` }}>
                <div className="testimonial-card__stars">
                  {[...Array(5)].map((_, k) => <Star key={k} size={14} fill="currentColor" />)}
                </div>
                <div className="testimonial-card__quote">"</div>
                <p className="testimonial-card__text">{t.text}</p>
                <div className="testimonial-card__author">
                  <div className="testimonial-card__avatar">{t.init}</div>
                  <div>
                    <div className="testimonial-card__author-name">{t.name}</div>
                    <div className="testimonial-card__author-role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== CTA ====== */}
      <section className="home-cta" id="home-cta-section">
        <div className="container">
          <span className="section-label" style={{ background: 'rgba(152,117,91,0.2)', color: 'var(--sand)' }}>Ready to Begin?</span>
          <h2 className="fade-in">Let's create something extraordinary together</h2>
          <p className="fade-in">Whether you want to grow your brand online or transform your space — I'm here to make it happen beautifully.</p>
          <div className="home-cta__btns fade-in">
            <Link to="/contact" className="btn btn-light" id="home-cta-contact">Book a Consultation</Link>
            <Link to="/portfolio" className="btn btn-outline-light" id="home-cta-portfolio">View My Work</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
