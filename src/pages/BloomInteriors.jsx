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
      { name: 'Residential Interior Design', desc: 'Full home design transformations — living rooms, bedrooms, kitchens, and entire residences tailored to your lifestyle.' },
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
      { name: 'Styling & Decor', desc: 'The finishing touch — thoughtful styling with art, plants, cushions, and decor that brings the space to life.' },
      { name: 'Project Management', desc: 'End-to-end execution from concept to reveal. We handle timelines, vendors, and logistics so you don\'t have to.' },
    ],
  },
];

const PROJECTS = [
  {
    img: livingRoomImg,
    title: 'Modern Living Room Transformation',
    type: 'Residential Design',
    challenge: 'The space felt crowded, poorly lit, and lacked cohesion. Furniture placement did not maximise space.',
    what: ['Redesigned layout for better space flow', 'Introduced a neutral color palette (cream, brown tones)', 'Upgraded lighting for warmth and ambience', 'Selected modern, functional furniture pieces', 'Styled the space with minimal decor'],
    result: 'Brighter, more spacious feel. Clean, modern aesthetic. Improved functionality and visual appeal.',
    metric: 'Full Transformation',
  },
  {
    img: bedroomImg,
    title: 'Bedroom Styling & Comfort Upgrade',
    type: 'Interior Styling',
    challenge: 'The bedroom lacked personality and felt plain, with no clear design direction.',
    what: ['Introduced a warm, calming color palette', 'Added soft furnishings (curtains, rugs, cushions)', 'Selected complementary decor pieces', 'Improved lighting setup for a cozy feel'],
    result: 'More inviting and relaxing space. Visually cohesive design. A personalised bedroom experience.',
    metric: 'Elevated Comfort',
  },
  {
    img: officeImg,
    title: 'Workspace Design & Optimization',
    type: 'Commercial Design',
    challenge: 'The office was cluttered and not optimised for productivity or comfort.',
    what: ['Reorganised layout for better workflow', 'Selected functional furniture', 'Introduced clean, minimal design elements', 'Improved lighting and workspace comfort'],
    result: 'More productive environment. Cleaner, organised layout. Professional and modern look.',
    metric: 'Optimised Workspace',
  },
];

const TESTIMONIALS = [
  { text: 'The Bloom Interiors gave me the home I always dreamed of. Every detail was handled with such care — the colours, the lighting, the furniture choices. Absolutely stunning.', name: 'Chidi B.', role: 'Homeowner, Abuja', init: 'C' },
  { text: "I never thought my office could look this good. Nikkyspade transformed a plain workspace into something I'm genuinely proud to bring clients into.", name: 'Tunde M.', role: 'Business Owner, Lagos', init: 'T' },
];

export default function BloomInteriors() {
  useScrollFade();

  return (
    <main>
      {/* HERO */}
      <section className="bloom-hero" id="bloom-hero">
        <div className="bloom-hero__image-wrap">
          <img src={bloomHeroImg} alt="The Bloom Interiors — Interior Design" className="bloom-hero__image" />
          <div className="bloom-hero__overlay" />
        </div>
        <div className="container bloom-hero__content">
          <span className="section-label" style={{ background: 'rgba(212,187,172,0.2)', color: 'var(--sand)' }}>Interior Design</span>
          <h1 className="bloom-hero__title fade-in">Spaces that feel as<br />beautiful as they <em>look.</em></h1>
          <p className="bloom-hero__sub fade-in">Residential and commercial interior design — crafted with warmth, intention, and an eye for timeless elegance.</p>
          <div className="bloom-hero__btns fade-in">
            <Link to="/contact" className="btn btn-light" id="bloom-consult-btn">Book a Design Consultation <ArrowRight size={16} /></Link>
            <a href="#bloom-projects" className="btn btn-outline-light" id="bloom-portfolio-btn">View Projects</a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bloom-services section" id="bloom-services">
        <div className="container">
          <div className="section-header--center fade-in">
            <span className="section-label">Our Services</span>
            <h2>Design services for every space</h2>
            <p>From concept to completion — The Bloom Interiors offers a full suite of design services for residential and commercial clients.</p>
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

      {/* PROJECTS */}
      <section className="bloom-projects section section--sand" id="bloom-projects">
        <div className="container">
          <div className="section-header--center fade-in">
            <span className="section-label">Portfolio</span>
            <h2>Spaces we've transformed</h2>
            <p>A collection of residential and commercial projects — each one crafted with attention, warmth, and precision.</p>
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
        </div>
      </section>

      {/* BEFORE & AFTER */}
      <section className="bloom-ba section" id="bloom-before-after">
        <div className="container">
          <div className="bloom-ba__inner">
            <div className="bloom-ba__content fade-in-left">
              <span className="section-label">Transformations</span>
              <h2>See the difference The Bloom Interiors makes</h2>
              <div className="divider" />
              <p>Every project begins with a space that has potential — and ends with a space that has purpose. Our before & after transformations speak louder than words.</p>
              <p style={{ marginTop: '16px' }}>From cluttered rooms to curated interiors — we handle every detail of the transformation journey.</p>
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

      {/* TESTIMONIALS */}
      <section className="section section--cream-light" id="bloom-testimonials">
        <div className="container">
          <div className="section-header--center fade-in">
            <span className="section-label">Client Stories</span>
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
          <p className="fade-in" style={{ color: 'var(--sand)', maxWidth: '520px', margin: '20px auto 40px' }}>Let's create a space you absolutely love — beautiful, intentional, and perfectly you.</p>
          <Link to="/contact" className="btn btn-light" id="bloom-cta-btn">Book a Design Consultation <ArrowRight size={16} /></Link>
        </div>
      </section>
    </main>
  );
}
