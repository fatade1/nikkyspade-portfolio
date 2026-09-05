import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Eye,
  CheckCircle,
  X,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  Home as HomeIcon,
  Sparkles
} from 'lucide-react';

import metaAdsImg from '../assets/images/meta_ads_screenshot.png';
import pageRecoveryImg from '../assets/images/page_recovery_screenshot.png';
import brandConsultationImg from '../assets/images/brand_consultation_screenshot.png';

import '../styles/work.css';

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
      { threshold: 0.08 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

const DIGITAL_WORKS = [
  {
    id: 'meta-ads',
    division: 'digital',
    tag: 'Meta Ads & Scaling',
    title: 'E-Commerce Growth & ROAS Scaling',
    subtitle: 'Paid Acquisition Campaign',
    desc: 'Engineered a conversion-focused paid acquisition funnel generating a 3.8x Return on Ad Spend and +140% monthly revenue growth for a growing boutique lifestyle brand.',
    img: metaAdsImg,
    metric: '3.8x ROAS / +140% Revenue',
    deliverables: ['Full-Funnel Meta Ads', 'High-CTR Video Creatives', 'A/B Tested Audiences', 'Weekly Performance Reporting'],
    link: '/digital',
  },
  {
    id: 'page-recovery',
    division: 'digital',
    tag: 'Account Recovery',
    title: 'Instagram Asset Recovery & Re-engagement',
    subtitle: 'Security & Community Revival',
    desc: 'Escalated security recovery directly via Meta channels for a disabled primary business account, followed by a 14-day re-engagement storytelling campaign restoring 90% reach.',
    img: pageRecoveryImg,
    metric: '100% Recovered / +90% Reach',
    deliverables: ['Meta Channel Escalation', 'Security Hardening', '14-Day Comeback Content', 'Lead Pipeline Revival'],
    link: '/digital',
  },
  {
    id: 'consultation',
    division: 'digital',
    tag: 'Marketing Consulting',
    title: 'High-Ticket Brand & Content Strategy',
    subtitle: 'Positioning & Messaging Overhaul',
    desc: 'Strategic overhaul of brand messaging and organic/paid content pillars, boosting qualified inbound lead quality by 65% and organic engagement by 45%.',
    img: brandConsultationImg,
    metric: '+65% Lead Quality',
    deliverables: ['Brand Value Proposition', 'Content Pillar Framework', 'Ad Creative SOPs', 'Internal Team Training'],
    link: '/digital',
  },
];

const INTERIOR_WORKS = [
  {
    id: 'bungalow',
    division: 'interior',
    tag: 'Residential Design',
    title: '4-Bedroom Bungalow Interior',
    subtitle: 'Scratch to Finish (10 Photos)',
    desc: 'Turnkey interior design and styling for a modern 4-bedroom bungalow. Space planning, bespoke media joinery, atmospheric lighting, and organic warm palette furnishings.',
    imageCount: 10,
    folder: 'bungalow',
    heroImg: '/images/portfolio/bungalow/img_1.png',
    metric: 'Full Home Transformation',
  },
  {
    id: 'flat',
    division: 'interior',
    tag: 'Residential Redesign',
    title: '2-Bedroom Flat Redesign',
    subtitle: 'Living Room & Master Bedroom (10 Photos)',
    desc: 'Comprehensive redesign maximizing natural light, contemporary neutral tones, soft textures, and smart spatial zoning for serene modern living.',
    imageCount: 10,
    folder: 'flat',
    heroImg: '/images/portfolio/flat/img_1.png',
    metric: 'Living & Master Suite',
  },
  {
    id: 'hairstore',
    division: 'interior',
    tag: 'Commercial Space',
    title: 'Boutique Hair Store Renovation',
    subtitle: 'Renovation & Furnishing (5 Photos)',
    desc: 'Full retail renovation featuring customized product display shelves, luxury styling stations, atmospheric task lighting, and customer lounge.',
    imageCount: 5,
    folder: 'hairstore',
    heroImg: '/images/portfolio/hairstore/img_1.png',
    metric: 'Commercial Retail Overhaul',
  },
  {
    id: 'studio',
    division: 'interior',
    tag: 'Space Maximization',
    title: 'Studio Apartment Optimization',
    subtitle: 'Compact Space Layout (5 Photos)',
    desc: 'Clever multi-functional layout for a studio apartment featuring modular furniture, custom room dividers, and integrated storage to double perceived space.',
    imageCount: 5,
    folder: 'studio',
    heroImg: '/images/portfolio/studio/img_1.png',
    metric: 'Space Maximization',
  },
];

export default function Work() {
  useScrollFade();
  const [filter, setFilter] = useState('ALL');
  const [lightbox, setLightbox] = useState({ isOpen: false, jobIndex: 0, imgIndex: 1 });

  useEffect(() => {
    document.body.style.overflow = lightbox.isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [lightbox.isOpen]);

  function openLightbox(jobIndex, imgIndex = 1) {
    setLightbox({ isOpen: true, jobIndex, imgIndex });
  }

  function closeLightbox() {
    setLightbox((prev) => ({ ...prev, isOpen: false }));
  }

  function prevImage() {
    setLightbox((prev) => {
      const job = INTERIOR_WORKS[prev.jobIndex];
      const newIndex = prev.imgIndex === 1 ? job.imageCount : prev.imgIndex - 1;
      return { ...prev, imgIndex: newIndex };
    });
  }

  function nextImage() {
    setLightbox((prev) => {
      const job = INTERIOR_WORKS[prev.jobIndex];
      const newIndex = prev.imgIndex === job.imageCount ? 1 : prev.imgIndex + 1;
      return { ...prev, imgIndex: newIndex };
    });
  }

  useEffect(() => {
    if (!lightbox.isOpen) return;
    const handleKey = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightbox.isOpen]);

  const activeJob = INTERIOR_WORKS[lightbox.jobIndex];

  return (
    <div className="work-page">
      {/* ====== HERO ====== */}
      <section className="work-hero" id="work-hero">
        <div className="container">
          <div className="work-hero__content fade-in">
            <span className="tag">Unified Portfolio</span>
            <h1>Our work across digital & physical spaces</h1>
            <p>
              Explore our case studies in digital marketing, paid advertising, and high-converting strategy alongside our interior transformations and project galleries.
            </p>

            {/* Filter Tabs */}
            <div className="work-hero__filter-tabs">
              <button
                className={`work-hero__tab${filter === 'ALL' ? ' active' : ''}`}
                onClick={() => setFilter('ALL')}
              >
                All Projects
              </button>
              <button
                className={`work-hero__tab work-hero__tab--digital${filter === 'DIGITAL' ? ' active' : ''}`}
                onClick={() => setFilter('DIGITAL')}
              >
                <TrendingUp size={15} /> The Digital Genie (Digital)
              </button>
              <button
                className={`work-hero__tab work-hero__tab--bloom${filter === 'INTERIORS' ? ' active' : ''}`}
                onClick={() => setFilter('INTERIORS')}
              >
                <HomeIcon size={15} /> Bloom Interiors (Spaces)
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ====== DIGITAL SECTION ====== */}
      {(filter === 'ALL' || filter === 'DIGITAL') && (
        <section className="work-section section" id="work-digital">
          <div className="container">
            <div className="work-section__header fade-in">
              <div>
                <span className="tag tag--digital">The Digital Genie</span>
                <h2>Digital growth & marketing case studies</h2>
              </div>
              <Link to="/digital" className="btn btn-outline-digital btn-sm">
                Explore Digital Division <ArrowRight size={14} />
              </Link>
            </div>

            <div className="work-digital__grid">
              {DIGITAL_WORKS.map((d, idx) => (
                <div className="work-digital-card fade-in" key={d.id} style={{ transitionDelay: `${idx * 0.1}s` }}>
                  <div className="work-digital-card__img-wrap">
                    <img src={d.img} alt={d.title} className="work-digital-card__img" />
                    <span className="work-digital-card__badge">{d.tag}</span>
                  </div>
                  <div className="work-digital-card__body">
                    <span className="work-digital-card__metric">{d.metric}</span>
                    <h3>{d.title}</h3>
                    <p>{d.desc}</p>
                    <div className="work-digital-card__delivs">
                      <strong>Key Deliverables:</strong>
                      <ul>
                        {d.deliverables.map((item) => (
                          <li key={item}><CheckCircle size={13} className="text-dg-blue" /> {item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ====== INTERIORS SECTION ====== */}
      {(filter === 'ALL' || filter === 'INTERIORS') && (
        <section className="work-section section section--sand" id="work-interiors">
          <div className="container">
            <div className="work-section__header fade-in">
              <div>
                <span className="tag tag--bloom">Bloom Interiors</span>
                <h2 className="font-editorial">Interior design & spatial transformations</h2>
              </div>
              <Link to="/bloom" className="btn btn-outline-bloom btn-sm">
                Explore Bloom Interiors <ArrowRight size={14} />
              </Link>
            </div>

            <div className="grid-2 work-interior__grid">
              {INTERIOR_WORKS.map((job, idx) => (
                <div className="work-interior-card fade-in" key={job.id} style={{ transitionDelay: `${idx * 0.1}s` }}>
                  <div className="work-interior-card__img-wrap" onClick={() => openLightbox(idx, 1)}>
                    <img src={job.heroImg} alt={job.title} className="work-interior-card__img" />
                    <div className="work-interior-card__overlay">
                      <span className="btn btn-bloom btn-sm">
                        <Eye size={15} /> View Gallery ({job.imageCount} Photos)
                      </span>
                    </div>
                    <span className="work-interior-card__badge">{job.tag}</span>
                  </div>
                  <div className="work-interior-card__body">
                    <span className="work-interior-card__metric">{job.metric}</span>
                    <h3 className="font-editorial">{job.title}</h3>
                    <p>{job.desc}</p>
                    <button
                      onClick={() => openLightbox(idx, 1)}
                      className="work-interior-card__btn"
                    >
                      <Sparkles size={14} /> View All {job.imageCount} Project Photos <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ====== CTA ====== */}
      <section className="work-cta section section--dark" id="work-final-cta">
        <div className="container">
          <div className="work-cta__inner fade-in">
            <h2>Ready to start your project?</h2>
            <p>Whether it is scaling your digital revenue or transforming your physical space, we are ready.</p>
            <div className="work-cta__actions">
              <Link to="/contact?service=digital" className="btn btn-digital">
                Inquire Digital Growth <ArrowRight size={16} />
              </Link>
              <Link to="/contact?service=interior" className="btn btn-outline-white">
                Inquire Interior Design <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ====== LIGHTBOX MODAL ====== */}
      {lightbox.isOpen && activeJob && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox} aria-label="Close modal">
              <X size={24} />
            </button>

            <div className="lightbox-image-container">
              <img
                src={`/images/portfolio/${activeJob.folder}/img_${lightbox.imgIndex}.png`}
                alt={`${activeJob.title} - Photo ${lightbox.imgIndex}`}
                className="lightbox-image"
              />
            </div>

            <button className="lightbox-nav lightbox-prev" onClick={prevImage} aria-label="Previous image">
              <ChevronLeft size={28} />
            </button>
            <button className="lightbox-nav lightbox-next" onClick={nextImage} aria-label="Next image">
              <ChevronRight size={28} />
            </button>

            <div className="lightbox-caption">
              <div>
                <h4>{activeJob.title}</h4>
                <p>{activeJob.subtitle}</p>
              </div>
              <div className="lightbox-counter">
                {lightbox.imgIndex} / {activeJob.imageCount}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
