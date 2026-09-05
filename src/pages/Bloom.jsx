import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Home as HomeIcon,
  Palette,
  Package,
  Sparkles,
  CheckCircle,
  X,
  ChevronLeft,
  ChevronRight,
  Eye
} from 'lucide-react';
import { BloomInteriorsLogo, BloomMark } from '../components/Logos';

import bloomHeroImg from '../assets/images/bloom_hero.png';
import beforeAfterImg from '../assets/images/before_after.png';
import livingRoomImg from '../assets/images/living_room.png';

import '../styles/bloom.css';

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

const INTERIOR_SERVICES = [
  {
    icon: <HomeIcon size={24} />,
    title: 'Residential Interior Design',
    desc: 'Bespoke full-home transformations: open-plan living rooms, serene master suites, and bespoke kitchens customized for daily comfort and elegance.',
    features: ['Custom spatial planning & 3D flow layout', 'Material, textile & color curation', 'Architectural lighting plans'],
  },
  {
    icon: <Sparkles size={24} />,
    title: 'Commercial & Retail Spaces',
    desc: 'Elevated interiors for boutique retail stores, beauty studios, executive offices, and hospitality venues that impress customers and amplify brand equity.',
    features: ['Custom joinery & product display design', 'Customer experience zoning', 'Durable, high-traffic luxury finishes'],
  },
  {
    icon: <Palette size={24} />,
    title: 'Space Planning & Styling',
    desc: 'Expert optimization of every square foot. We bring harmony, natural light, and refined aesthetic balance to challenging or compact floor plans.',
    features: ['Furniture placement blueprints', 'Tactile moodboards & sample boards', 'Art curation & atmospheric accessories'],
  },
  {
    icon: <Package size={24} />,
    title: 'Turnkey Procurement & Execution',
    desc: 'End-to-end project management. We source custom furniture, supervise skilled artisans, manage timelines, and deliver a pristine final reveal.',
    features: ['Vendor coordination & contractor oversight', 'Bespoke furniture fabrication', 'White-glove styling & installation'],
  },
];

const BLOOM_PROJECTS = [
  {
    id: 'bungalow',
    title: '4-Bedroom Bungalow Interior',
    subtitle: 'Scratch to Finish',
    desc: 'Turnkey interior design taking a newly constructed 4-bedroom bungalow from bare concrete to a warm, luxurious modern family sanctuary.',
    imageCount: 10,
    folder: 'bungalow',
    heroImg: '/images/portfolio/bungalow/img_1.png',
  },
  {
    id: 'flat',
    title: '2-Bedroom Flat Redesign',
    subtitle: 'Living Room & Master Bedroom',
    desc: 'A complete spatial refresh maximizing natural light, soft textured furnishings, and clean contemporary lines for relaxed luxury living.',
    imageCount: 10,
    folder: 'flat',
    heroImg: '/images/portfolio/flat/img_1.png',
  },
  {
    id: 'hairstore',
    title: 'Hair Store Renovation',
    subtitle: 'Commercial Renovation & Furnishing',
    desc: 'Full retail renovation featuring custom backlit display shelves, luxury styling stations, and a modern welcoming client lounge.',
    imageCount: 5,
    folder: 'hairstore',
    heroImg: '/images/portfolio/hairstore/img_1.png',
  },
  {
    id: 'studio',
    title: 'Studio Apartment Optimization',
    subtitle: 'Space Maximization',
    desc: 'Clever multi-functional layout for a compact studio featuring modular furniture, custom room dividers, and integrated storage.',
    imageCount: 5,
    folder: 'studio',
    heroImg: '/images/portfolio/studio/img_1.png',
  },
];

const FIVE_STEP_PROCESS = [
  { step: '01', title: 'Consultation & Discovery', desc: 'We assess your space, understand your lifestyle or commercial requirements, and define the project budget and aesthetic goals.' },
  { step: '02', title: 'Concept & Moodboard', desc: 'We develop spatial layout options, tactile material samples, lighting strategies, and cohesive color palettes for your approval.' },
  { step: '03', title: 'Design Development', desc: 'Detailed floor plans, custom carpentry drawings, and comprehensive furniture procurement schedules are prepared.' },
  { step: '04', title: 'Procurement & Execution', desc: 'We manage vendor fabrication, material delivery, contractor milestones, and site installations with meticulous precision.' },
  { step: '05', title: 'Styling & Final Reveal', desc: 'The finishing touch: artwork hanging, decorative styling, ambient lighting adjustment, and welcoming you into your dream space.' },
];

export default function Bloom() {
  useScrollFade();
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
      const job = BLOOM_PROJECTS[prev.jobIndex];
      const newIndex = prev.imgIndex === 1 ? job.imageCount : prev.imgIndex - 1;
      return { ...prev, imgIndex: newIndex };
    });
  }

  function nextImage() {
    setLightbox((prev) => {
      const job = BLOOM_PROJECTS[prev.jobIndex];
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

  const activeJob = BLOOM_PROJECTS[lightbox.jobIndex];

  return (
    <div className="bloom-page" data-theme="bloom">
      {/* ====== HERO ====== */}
      <section className="bl-hero" id="bloom-hero">
        <div className="container">
          <div className="bl-hero__grid">
            <div className="bl-hero__content fade-in-left">
              <div className="bl-hero__logo-wrap">
                <BloomInteriorsLogo size={42} showSubtitle={true} color="#442913" />
              </div>

              <h1 className="bl-hero__title font-editorial">
                Spaces should feel like <em>you.</em>
              </h1>

              <p className="bl-hero__sub">
                Bloom Interiors creates warm, intentional residential sanctuaries and refined commercial environments designed around how people live, breathe, and gather.
              </p>

              <div className="bl-hero__actions">
                <Link to="/contact?service=interior" className="btn btn-bloom" id="bloom-hero-cta">
                  Book an Interior Consultation <ArrowRight size={16} />
                </Link>
                <a href="#bloom-projects" className="btn btn-outline-bloom">
                  View Selected Projects
                </a>
              </div>
            </div>

            <div className="bl-hero__img-frame fade-in-right">
              <img src={bloomHeroImg} alt="Bloom Interiors Luxury Space" className="bl-hero__img" />
              <div className="bl-hero__accent-card">
                <BloomMark size={28} color="#98755B" />
                <div>
                  <strong>Turnkey Interior Design</strong>
                  <span>From Concept to Final Reveal</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== PHILOSOPHY / ABOUT BLOOM ====== */}
      <section className="bl-about section" id="bloom-about">
        <div className="container">
          <div className="bl-about__inner">
            <div className="bl-about__image-grid fade-in-left">
              <img src={livingRoomImg} alt="Living room styling" className="bl-about__img bl-about__img--1" />
              <img src={beforeAfterImg} alt="Interior transformation" className="bl-about__img bl-about__img--2" />
            </div>

            <div className="bl-about__text fade-in-right">
              <span className="tag tag--bloom">Design Philosophy</span>
              <h2 className="font-editorial">Rooted in warmth, function & effortless luxury</h2>
              <p>
                We believe interior design extends beyond aesthetic styling: it is the art of curating your daily atmosphere.
              </p>
              <p>
                Every home and commercial project begins with listening deeply to your story, understanding the practical flow of your life, and layering organic textures, balanced lighting, and bespoke furnishings into a space that feels deeply personal and undeniably sophisticated.
              </p>

              <div className="bl-about__stats">
                <div>
                  <span className="bl-stat-num">100%</span>
                  <span className="bl-stat-lbl">Customized Spaces</span>
                </div>
                <div>
                  <span className="bl-stat-num">4+</span>
                  <span className="bl-stat-lbl">Featured Transformations</span>
                </div>
                <div>
                  <span className="bl-stat-num">0</span>
                  <span className="bl-stat-lbl">Design Headaches</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== SERVICES ====== */}
      <section className="bl-services section section--sand" id="bloom-services">
        <div className="container">
          <div className="section-header--center fade-in">
            <span className="tag tag--bloom">Our Capabilities</span>
            <h2 className="font-editorial">Interior services tailored to your space</h2>
            <p>From complete residential builds to high-impact boutique styling, we handle every detail.</p>
          </div>

          <div className="grid-2 bl-services__grid">
            {INTERIOR_SERVICES.map((serv, idx) => (
              <div className="bl-service-card fade-in" key={serv.title} style={{ transitionDelay: `${idx * 0.1}s` }}>
                <div className="bl-service-card__icon">{serv.icon}</div>
                <h3 className="font-editorial">{serv.title}</h3>
                <p>{serv.desc}</p>
                <ul className="bl-service-card__list">
                  {serv.features.map((f) => (
                    <li key={f}><CheckCircle size={15} /> {f}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== BEFORE & AFTER SHOWCASE ====== */}
      <section className="bl-transformation section" id="before-after">
        <div className="container">
          <div className="bl-transformation__card fade-in">
            <div className="bl-transformation__content">
              <span className="tag tag--bloom">Real Spatial Impact</span>
              <h2 className="font-editorial">See the difference Bloom Interiors makes</h2>
              <p>
                Witness how thoughtful lighting, custom joinery, and warm organic materials transform an ordinary room into an extraordinary living experience.
              </p>
              <Link to="/work" className="btn btn-bloom" style={{ marginTop: '16px' }}>
                View All Case Photos <ArrowRight size={16} />
              </Link>
            </div>
            <div className="bl-transformation__img-wrap">
              <img src={beforeAfterImg} alt="Before and after transformation" className="bl-transformation__img" />
            </div>
          </div>
        </div>
      </section>

      {/* ====== 5-STEP DESIGN PROCESS ====== */}
      <section className="bl-process section section--sand" id="bloom-process">
        <div className="container">
          <div className="section-header--center fade-in">
            <span className="tag tag--bloom">Our Workflow</span>
            <h2 className="font-editorial">The 5-step journey to your dream space</h2>
            <p>A seamless, structured process that ensures zero stress and extraordinary execution.</p>
          </div>

          <div className="bl-process__timeline">
            {FIVE_STEP_PROCESS.map((st, idx) => (
              <div className="bl-process-step fade-in" key={st.step} style={{ transitionDelay: `${idx * 0.1}s` }}>
                <div className="bl-process-step__number">{st.step}</div>
                <div className="bl-process-step__card">
                  <h4 className="font-editorial">{st.title}</h4>
                  <p>{st.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== SELECTED PROJECTS GALLERY ====== */}
      <section className="bl-projects section" id="bloom-projects">
        <div className="container">
          <div className="section-header--center fade-in">
            <span className="tag tag--bloom">Completed Works</span>
            <h2 className="font-editorial">Selected interior projects</h2>
            <p>Click on any project to open the interactive photo gallery.</p>
          </div>

          <div className="grid-2 bl-projects__grid">
            {BLOOM_PROJECTS.map((proj, idx) => (
              <div className="bl-project-card fade-in" key={proj.id} style={{ transitionDelay: `${idx * 0.1}s` }}>
                <div className="bl-project-card__img-wrap" onClick={() => openLightbox(idx, 1)}>
                  <img src={proj.heroImg} alt={proj.title} className="bl-project-card__img" />
                  <div className="bl-project-card__overlay">
                    <span className="btn btn-bloom btn-sm">
                      <Eye size={15} /> View All {proj.imageCount} Photos
                    </span>
                  </div>
                </div>
                <div className="bl-project-card__body">
                  <span className="tag tag--bloom">{proj.subtitle}</span>
                  <h3 className="font-editorial">{proj.title}</h3>
                  <p>{proj.desc}</p>
                  <button
                    onClick={() => openLightbox(idx, 1)}
                    className="bl-project-card__gallery-btn"
                  >
                    Open Project Gallery ({proj.imageCount} Photos) <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== FINAL BLOOM CTA ====== */}
      <section className="bl-cta section section--dark" id="bloom-final-cta">
        <div className="container">
          <div className="bl-cta__inner fade-in">
            <BloomMark size={36} color="#C2A68C" />
            <h2 className="font-editorial" style={{ margin: '20px 0 16px', color: '#FFFFFF' }}>
              Ready to transform your home or commercial space?
            </h2>
            <p style={{ color: '#D4BBAC', maxWidth: '640px', margin: '0 auto 36px', fontSize: '1.1rem' }}>
              Book an interior design consultation today and let's bring warmth, beauty, and function to your environment.
            </p>
            <Link to="/contact?service=interior" className="btn btn-bloom" id="bloom-bottom-cta">
              Book an Interior Consultation <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ====== INTERACTIVE LIGHTBOX MODAL ====== */}
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
