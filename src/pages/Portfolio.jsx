import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Home as HomeIcon, ArrowRight } from 'lucide-react';
import livingRoomImg from '../assets/images/living_room.png';
import bedroomImg from '../assets/images/bedroom_styling.png';
import officeImg from '../assets/images/office_space.png';
import dashboardImg from '../assets/images/digital_dashboard.png';
import contentMockupImg from '../assets/images/content_mockup.png';
import brandGrowthImg from '../assets/images/brand_growth.png';
import '../styles/portfolio.css';

function useScrollFade(deps = []) {
  useEffect(() => {
    const els = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right');
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } }),
      { threshold: 0.08 }
    );
    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, deps);
}

const ALL_PROJECTS = [
  {
    id: 1,
    cat: 'digital',
    catLabel: 'Digital Marketing',
    img: brandGrowthImg,
    title: 'Personal Brand Growth for a Business Coach',
    desc: 'Content strategy & social media management that achieved +120% engagement and consistent brand authority.',
    result: '+120% Engagement',
    approach: ['Content Strategy', 'Audience Research', 'Campaign Strategy'],
  },
  {
    id: 2,
    cat: 'interior',
    catLabel: 'Interior Design',
    img: livingRoomImg,
    title: 'Modern Living Room Transformation',
    desc: 'Residential redesign with neutral palette, upgraded lighting, and carefully sourced furniture for a bright, spacious feel.',
    result: 'Full Transformation',
    approach: ['Space Planning', 'Styling Direction', 'Furnishing'],
  },
  {
    id: 3,
    cat: 'digital',
    catLabel: 'Digital Marketing',
    img: dashboardImg,
    title: 'Product Launch Campaign — Beauty Brand',
    desc: 'A full 2-week Meta Ads campaign with pre/launch/post content strategy that drove a high-impact product debut.',
    result: 'High-Impact Launch',
    approach: ['Campaign Strategy', 'Meta Ads', 'Content Strategy'],
  },
  {
    id: 4,
    cat: 'interior',
    catLabel: 'Interior Styling',
    img: bedroomImg,
    title: 'Bedroom Styling & Comfort Upgrade',
    desc: 'Warm, calming bedroom redesign with soft furnishings, complementary decor, and improved lighting for an elevated retreat.',
    result: 'Elevated Comfort',
    approach: ['Space Planning', 'Styling Direction', 'Furnishing'],
  },
  {
    id: 5,
    cat: 'digital',
    catLabel: 'Social Media Management',
    img: contentMockupImg,
    title: 'Monthly SMM for Service-Based SME',
    desc: 'Full-service social media management — weekly content plans, analytics tracking, and storytelling-driven engagement.',
    result: 'Consistent Growth',
    approach: ['Content Strategy', 'Audience Research', 'Analytics'],
  },
  {
    id: 6,
    cat: 'interior',
    catLabel: 'Commercial Design',
    img: officeImg,
    title: 'Workspace Design & Optimization',
    desc: 'Commercial office redesign focused on workflow, productivity, and a clean modern aesthetic that impresses clients.',
    result: 'Optimised Workspace',
    approach: ['Space Planning', 'Furniture Sourcing', 'Styling Direction'],
  },
];

const FILTERS = [
  { key: 'all', label: 'All Projects' },
  { key: 'digital', label: 'Digital Projects' },
  { key: 'interior', label: 'Interior Projects' },
];

export default function Portfolio() {
  const [active, setActive] = useState('all');
  useScrollFade([active]);

  const filtered = active === 'all' ? ALL_PROJECTS : ALL_PROJECTS.filter(p => p.cat === active);

  return (
    <main>
      {/* HERO */}
      <section className="pf-hero" id="portfolio-hero">
        <div className="container">
          <div className="pf-hero__content fade-in">
            <span className="section-label">My Portfolio</span>
            <h1>Work that tells a story<br />and delivers <em>results.</em></h1>
            <p>Six projects across digital marketing and interior design — each one a testament to strategy, creativity, and craft.</p>
          </div>
        </div>
      </section>

      {/* FILTERS + GRID */}
      <section className="pf-main section" id="portfolio-main">
        <div className="container">
          {/* Filters */}
          <div className="pf-filters fade-in" role="tablist" aria-label="Portfolio filters">
            {FILTERS.map(f => (
              <button
                key={f.key}
                className={`pf-filter${active === f.key ? ' active' : ''}`}
                onClick={() => setActive(f.key)}
                role="tab"
                aria-selected={active === f.key}
                id={`portfolio-filter-${f.key}`}
              >
                {f.label}
                <span className="pf-filter__count">
                  {f.key === 'all' ? ALL_PROJECTS.length : ALL_PROJECTS.filter(p => p.cat === f.key).length}
                </span>
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="pf-grid" key={active}>
            {filtered.map((proj, i) => (
              <div className="pf-card fade-in" key={proj.id} style={{ transitionDelay: `${i * 0.07}s` }}>
                <div className="pf-card__img-wrap">
                  <img src={proj.img} alt={proj.title} className="pf-card__img" loading="lazy" />
                  <div className="pf-card__overlay">
                    <div className="pf-card__approach">
                      {proj.approach.map(a => <span key={a} className="pf-card__approach-tag">{a}</span>)}
                    </div>
                  </div>
                </div>
                <div className="pf-card__body">
                  <span className={`badge ${proj.cat === 'digital' ? 'badge--digital' : ''}`}>
                    {proj.catLabel}
                  </span>
                  <h3 className="pf-card__title">{proj.title}</h3>
                  <p className="pf-card__desc">{proj.desc}</p>
                  <div className="pf-card__footer">
                    <div className="pf-card__result">
                      {proj.cat === 'digital' ? <TrendingUp size={13} /> : <HomeIcon size={13} />}
                      {proj.result}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="home-cta" id="portfolio-cta">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="fade-in" style={{ color: 'var(--cream)' }}>Want results like these?</h2>
          <p className="fade-in" style={{ color: 'var(--sand)', maxWidth: '520px', margin: '20px auto 40px' }}>Let's talk about your project — whether digital, interior, or both.</p>
          <Link to="/contact" className="btn btn-light" id="portfolio-cta-btn">Start a Project <ArrowRight size={16} /></Link>
        </div>
      </section>
    </main>
  );
}
