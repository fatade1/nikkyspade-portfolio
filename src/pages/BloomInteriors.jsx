import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Home, Palette, Package, Star, CheckCircle } from 'lucide-react';
import bloomHeroImg from '../assets/images/bloom_hero.png';
import livingRoomImg from '../assets/images/living_room.png';
import bedroomImg from '../assets/images/bedroom_styling.png';
import officeImg from '../assets/images/office_space.png';
import beforeAfterImg from '../assets/images/before_after.png';
import '../styles/bloom.css';

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

const SERVICE_GROUPS = [
  {
    cat: 'Interior Design',
    icon: <Home size={20} />,
    services: [
      { name: 'Residential Interior Design', desc: 'Full home design transformations: living rooms, bedrooms, kitchens, and entire residences tailored to your lifestyle.' },
      { name: 'Commercial Interior Design', desc: 'Office spaces, studios, and retail environments designed for functionality, productivity, and brand alignment.' },
      { name: 'Design Consultation', desc: 'A discovery session to define your vision, assess the space, and create a clear design direction for your project.' },
    ],
  },
  {
    cat: 'Planning & Styling',
    icon: <Palette size={20} />,
    services: [
      { name: 'Space Planning & Layout', desc: 'Strategic furniture placement and flow design that maximises every inch of your space beautifully.' },
      { name: 'Colour & Material Selection', desc: 'Curated colour palettes and material finishes that bring cohesion, warmth, and elegance to your space.' },
      { name: 'Lighting Design', desc: 'Layered lighting plans that create atmosphere, warmth, and functionality in every room.' },
    ],
  },
  {
    cat: 'Furnishing & Execution',
    icon: <Package size={20} />,
    services: [
      { name: 'Furniture Sourcing & Procurement', desc: 'We source and procure furniture, art, and accessories that perfectly match your design vision and budget.' },
      { name: 'Styling & Decor', desc: 'The finishing touch: thoughtful styling with art, plants, cushions, and decor that brings the space to life.' },
      { name: 'Project Management', desc: 'End-to-end execution from concept to reveal. We handle timelines, vendors, and logistics so you don\'t have to.' },
    ],
  },
];

const PROJECTS = [
  {
    img: '/images/portfolio/bungalow/img_1.png',
    title: '4-Bedroom Bungalow Interior',
    type: 'Scratch to Finish',
    challenge: 'A newly built 4-bedroom bungalow that was completely bare, requiring full layout planning, custom carpentry, and furnishing from scratch.',
    what: ['Handled detailed spatial planning', 'Designed custom media consoles and kitchen cabinetry', 'Selected a warm neutral palette', 'Curated all furniture and decor', 'Installed layered, atmospheric lighting'],
    result: 'A fully cohesive, luxury residential sanctuary tailored to the family\'s lifestyle.',
    metric: 'Full Transformation',
  },
  {
    img: '/images/portfolio/flat/img_1.png',
    title: '2-Bedroom Flat Redesign',
    type: 'Living Room & Master Bed',
    challenge: 'The flat felt dark, cluttered, and lacked functional zoning in the main living space and master bedroom.',
    what: ['Optimised layout for flow and natural light', 'Introduced clean lines and soft textures', 'Updated the lighting setup', 'Curated bespoke, modern furniture'],
    result: 'An elegant, spacious living room and a calming, retreat-like master bedroom.',
    metric: 'Living Room & Master Bed',
  },
  {
    img: '/images/portfolio/hairstore/img_1.png',
    title: 'Hair Store Renovation',
    type: 'Renovation & Furnishing',
    challenge: 'A plain commercial space that needed to be transformed into a high-end boutique hair store, requiring structural layout changes and elegant client styling areas.',
    what: ['Designed custom high-capacity product display shelves', 'Renovated flooring and custom wall finishes', 'Sourced and installed luxury styling and washing stations', 'Curated premium client lounge seating and decorative lighting'],
    result: 'A sophisticated, high-end retail experience that elevates the brand value and delights shoppers.',
    metric: 'Hair Store Design',
  },
  {
    img: '/images/portfolio/studio/img_1.png',
    title: 'Studio Apartment Optimization',
    type: 'Space Maximization',
    challenge: 'A compact studio apartment requiring distinct living, sleeping, and working zones without feeling cramped.',
    what: ['Implemented multi-functional modular furniture', 'Designed smart custom storage dividers', 'Applied a bright colour scheme with strategic mirrors'],
    result: 'A highly efficient, stylish, and airy small-space home that feels twice its actual size.',
    metric: 'Studio Design',
  },
];

const TESTIMONIALS = [
  { text: 'The Bloom Interiors gave me the home I always dreamed of. Every detail was handled with such care: the colours, the lighting, and the furniture choices. Absolutely stunning.', name: 'Chidi B.', role: 'Homeowner, Abuja', init: 'C' },
  { text: "I never thought my office could look this good. Nikkyspade transformed a plain workspace into something I'm genuinely proud to bring clients into.", name: 'Tunde M.', role: 'Business Owner, Lagos', init: 'T' },
];

export default function BloomInteriors() {
  useScrollFade();

  return (
    <main>
      {/* HERO */}
      <section className="bloom-hero" id="bloom-hero">
        <div className="bloom-hero__image-wrap">
          <img src={bloomHeroImg} alt="The Bloom Interiors: Interior Design" className="bloom-hero__image" />
          <div className="bloom-hero__overlay" />
        </div>
        <div className="container bloom-hero__content">
          <h1 className="bloom-hero__title fade-in">Spaces that feel as<br />beautiful as they <em>look.</em></h1>
          <p className="bloom-hero__sub fade-in">Residential and commercial interior design, crafted with warmth, intention, and an eye for timeless elegance.</p>
          <div className="bloom-hero__btns fade-in">
            <Link to="/contact" className="btn btn-light" id="bloom-consult-btn">Book a Design Consultation <ArrowRight size={16} /></Link>
            <a href="#bloom-before-after" className="btn btn-outline-light" id="bloom-portfolio-btn">View Transformations</a>
          </div>
        </div>
      </section>

      {/* BEFORE & AFTER */}
      <section className="bloom-ba section" id="bloom-before-after">
        <div className="container">
          <div className="bloom-ba__inner">
            <div className="bloom-ba__content fade-in-left">
              <h2>See the difference The Bloom Interiors makes</h2>
              <div className="divider" />
              <p>Every project begins with a space that has potential, and ends with a space that has purpose. Our before & after transformations speak louder than words.</p>
              <p style={{ marginTop: '16px' }}>From cluttered rooms to curated interiors, we handle every detail of the transformation journey.</p>
              <Link to="/contact" className="btn btn-primary" style={{ marginTop: '32px' }} id="bloom-ba-cta">Start Your Transformation <ArrowRight size={16} /></Link>
            </div>
            <div className="bloom-ba__image-wrap fade-in-right">
              <img src={beforeAfterImg} alt="Before and after interior transformation" className="bloom-ba__image" />
              <div className="bloom-ba__label bloom-ba__label--before">Before</div>
              <div className="bloom-ba__label bloom-ba__label--after">After</div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="bloom-projects section section--sand" id="bloom-projects">
        <div className="container">
          <div className="section-header--center fade-in">
            <h2>Spaces we've transformed</h2>
            <p>A collection of residential and commercial projects, each one crafted with attention, warmth, and precision.</p>
          </div>

          <div className="bloom-projects__grid">
            {PROJECTS.map((proj, i) => (
              <div className="bloom-project-card fade-in" key={proj.title} style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="bloom-project-card__img-wrap">
                  <img src={proj.img} alt={proj.title} className="bloom-project-card__img" loading="lazy" />
                  <div className="bloom-project-card__type">{proj.type}</div>
                </div>
                <div className="bloom-project-card__body">
                  <h3 className="bloom-project-card__title">{proj.title}</h3>
                  <div className="bloom-project-card__section">
                    <div className="bloom-project-card__label">The Challenge</div>
                    <p>{proj.challenge}</p>
                  </div>
                  <div className="bloom-project-card__section">
                    <div className="bloom-project-card__label">What We Did</div>
                    <ul className="bloom-project-card__list">
                      {proj.what.map(w => <li key={w}><CheckCircle size={13} />{w}</li>)}
                    </ul>
                  </div>
                  <div className="bloom-project-card__result-tag">
                    <Home size={13} />{proj.metric}
                  </div>
                  <p className="bloom-project-card__result-text">{proj.result}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '48px' }} className="fade-in">
            <Link to="/portfolio" className="btn btn-primary" id="bloom-view-gallery-btn">
              View Full Gallery <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bloom-services section" id="bloom-services">
        <div className="container">
          <div className="section-header--center fade-in">
            <h2>Design services for every space</h2>
            <p>From concept to completion, The Bloom Interiors offers a full suite of design services for residential and commercial clients.</p>
          </div>

          {SERVICE_GROUPS.map((group, gi) => (
            <div key={group.cat} className="bloom-service-group fade-in" style={{ transitionDelay: `${gi * 0.1}s` }}>
              <div className="bloom-service-group__header">
                <div className="bloom-service-group__icon">{group.icon}</div>
                <h3 className="bloom-service-group__title">{group.cat}</h3>
              </div>
              <div className="bloom-service-group__grid">
                {group.services.map(s => (
                  <div className="bloom-service-item" key={s.name}>
                    <CheckCircle size={16} className="bloom-service-item__check" />
                    <div>
                      <h4 className="bloom-service-item__name">{s.name}</h4>
                      <p className="bloom-service-item__desc">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section section--cream-light" id="bloom-testimonials">
        <div className="container">
          <div className="section-header--center fade-in">
            <h2>What our interior clients say</h2>
          </div>
          <div className="grid-2">
            {TESTIMONIALS.map((t, i) => (
              <div className="testimonial-card fade-in" key={t.name} style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="testimonial-card__stars">{[...Array(5)].map((_,k) => <Star key={k} size={14} fill="currentColor" />)}</div>
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

      {/* CTA */}
      <section className="home-cta" id="bloom-cta">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="fade-in" style={{ color: 'var(--cream)' }}>Ready to transform your space?</h2>
          <p className="fade-in" style={{ color: 'var(--sand)', maxWidth: '520px', margin: '20px auto 40px' }}>Let's create a space you absolutely love: beautiful, intentional, and perfectly you.</p>
          <Link to="/contact" className="btn btn-light" id="bloom-cta-btn">Book a Design Consultation <ArrowRight size={16} /></Link>
        </div>
      </section>
    </main>
  );
}
