import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  TrendingUp,
  Share2,
  Sparkles,
  BarChart2,
  Home as HomeIcon,
  Palette,
  Package,
  Layers,
  CheckCircle,
  ArrowUpRight
} from 'lucide-react';
import { DigitalGenieMark, BloomMark } from '../components/Logos';

// Project Images
import bloomHeroImg from '../assets/images/bloom_hero.png';
import nikkytalesHeroImg from '../assets/images/nikkytales_hero.png';
import metaAdsImg from '../assets/images/meta_ads_screenshot.png';
import pageRecoveryImg from '../assets/images/page_recovery_screenshot.png';
import brandConsultationImg from '../assets/images/brand_consultation_screenshot.png';

// Reviews Images
import reviewChat1 from '../assets/images/review_chat_1.jpg';
import reviewChat2 from '../assets/images/review_chat_2.jpg';
import reviewChat3 from '../assets/images/review_chat_3.jpg';
import reviewChat4 from '../assets/images/review_chat_4.jpg';

import '../styles/home.css';

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

const DIGITAL_PILLARS = [
  {
    icon: <BarChart2 size={24} />,
    title: 'Digital Strategy',
    desc: 'Bespoke marketing architecture, brand positioning, and structured growth roadmaps that turn vision into measurable market traction.',
  },
  {
    icon: <Share2 size={24} />,
    title: 'Content & Social',
    desc: 'High-converting storytelling, authority-building content calendars, and active community management that transforms audiences into buyers.',
  },
  {
    icon: <TrendingUp size={24} />,
    title: 'Paid Growth',
    desc: 'Precision Meta Ads (Instagram & Facebook) funnels engineered for profitable acquisition, retargeting, and scalable revenue returns.',
  },
  {
    icon: <Layers size={24} />,
    title: 'Digital Support',
    desc: 'Virtual business assistance and operational execution to free founders up to scale without digital bottlenecks.',
  },
];

const BLOOM_HIGHLIGHTS = [
  {
    icon: <HomeIcon size={24} />,
    title: 'Residential & Commercial Design',
    desc: 'End-to-end spatial transformations: full homes, living rooms, boutique stores, and executive offices tailored to living and working.',
  },
  {
    icon: <Palette size={24} />,
    title: 'Space Planning & Styling',
    desc: 'Mastery over spatial balance, custom lighting, tactile materials, and organic palettes to maximize light, flow, and emotion.',
  },
  {
    icon: <Package size={24} />,
    title: 'Sourcing & Project Execution',
    desc: 'Turnkey procurement, bespoke furniture fabrication, and on-site oversight from conceptual sketch to the final reveal.',
  },
];

const WORK_ITEMS = [
  {
    id: 'meta-ads',
    division: 'digital',
    tag: 'Meta Ads & Scaling',
    title: 'E-Commerce Growth & ROAS Scaling',
    desc: 'Engineered a conversion-focused paid acquisition funnel generating a 3.8x Return on Ad Spend and +140% monthly revenue growth.',
    img: metaAdsImg,
    metric: '3.8x ROAS / +140% Revenue',
    link: '/digital',
  },
  {
    id: 'bungalow',
    division: 'interior',
    tag: 'Scratch to Finish',
    title: '4-Bedroom Bungalow Interior',
    desc: 'Complete turnkey transformation for a modern bungalow featuring bespoke carpentry, atmospheric layered lighting, and custom furnishings.',
    img: '/images/portfolio/bungalow/img_1.png',
    metric: 'Full Home Transformation',
    link: '/bloom',
  },
  {
    id: 'page-recovery',
    division: 'digital',
    tag: 'Page Recovery',
    title: 'Instagram Asset Recovery & Reach Rebound',
    desc: 'Direct security and Meta recovery for a disabled primary business account, followed by a 14-day re-engagement campaign restoring 90% reach.',
    img: pageRecoveryImg,
    metric: '100% Recovered / +90% Reach',
    link: '/digital',
  },
  {
    id: 'flat',
    division: 'interior',
    tag: 'Living & Bedroom',
    title: '2-Bedroom Contemporary Flat',
    desc: 'Comprehensive redesign and space optimization of living room and master suite creating a serene, light-filled modern sanctuary.',
    img: '/images/portfolio/flat/img_1.png',
    metric: 'Living & Master Suite',
    link: '/bloom',
  },
  {
    id: 'consultation',
    division: 'digital',
    tag: 'Brand Consultation',
    title: 'High-Ticket Brand & Content Strategy',
    desc: 'Strategic overhaul of brand messaging and organic/paid content pillars, boosting qualified inbound lead quality by 65%.',
    img: brandConsultationImg,
    metric: '+65% Lead Quality',
    link: '/digital',
  },
  {
    id: 'hairstore',
    division: 'interior',
    tag: 'Commercial Renovation',
    title: 'Boutique Hair Store Renovation',
    desc: 'Retail transformation complete with custom display joinery, luxury styling stations, and ambient lighting to elevate in-store client experience.',
    img: '/images/portfolio/hairstore/img_1.png',
    metric: 'Full Commercial Overhaul',
    link: '/bloom',
  },
];

const REVIEWS = [
  { img: reviewChat1, alt: 'Client Review 1' },
  { img: reviewChat2, alt: 'Client Review 2' },
  { img: reviewChat3, alt: 'Client Review 3' },
  { img: reviewChat4, alt: 'Client Review 4' },
];

export default function Home() {
  useScrollFade();
  const [filter, setFilter] = useState('ALL');

  const filteredWork = WORK_ITEMS.filter((item) => {
    if (filter === 'DIGITAL') return item.division === 'digital';
    if (filter === 'INTERIORS') return item.division === 'interior';
    return true;
  });

  return (
    <main>
      {/* ====== SECTION 1: HERO ====== */}
      <section className="home-hero" id="home-hero">
        <div className="container">
          <div className="home-hero__inner">
            <div className="home-hero__content fade-in">
              <div className="home-hero__badge">
                <DigitalGenieMark size={20} />
                <span>Creative Growth & Design House</span>
              </div>

              <h1 className="home-hero__title">
                We turn ideas into <em>growth</em> and spaces into <em>experiences.</em>
              </h1>

              <p className="home-hero__subtitle">
                The Digital Genie is a unified creative house operating across high-impact digital strategy and luxury interior transformations through Bloom Interiors.
              </p>

              <div className="home-hero__actions">
                <Link to="/digital" className="btn btn-digital" id="hero-explore-digital-btn">
                  Explore Digital <ArrowRight size={16} />
                </Link>
                <Link to="/bloom" className="btn btn-outline-bloom" id="hero-explore-bloom-btn">
                  Explore Bloom Interiors <ArrowRight size={16} />
                </Link>
              </div>

              <div className="home-hero__stats">
                <div className="home-hero__stat-item">
                  <span className="home-hero__stat-num">50+</span>
                  <span className="home-hero__stat-lbl">Businesses & Spaces Scaled</span>
                </div>
                <div className="home-hero__stat-divider" />
                <div className="home-hero__stat-item">
                  <span className="home-hero__stat-num">3.8x</span>
                  <span className="home-hero__stat-lbl">Average Digital ROAS</span>
                </div>
                <div className="home-hero__stat-divider" />
                <div className="home-hero__stat-item">
                  <span className="home-hero__stat-num">100%</span>
                  <span className="home-hero__stat-lbl">Turnkey Execution</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== SECTION 2: TWO DISCIPLINES, ONE CREATIVE HOUSE ====== */}
      <section className="home-disciplines section" id="two-disciplines">
        <div className="container">
          <div className="section-header--center fade-in">
            <span className="tag">Dual Brand Architecture</span>
            <h2>Two disciplines. One creative house.</h2>
            <p>
              Rather than scattering your growth and environment across disconnected agencies, we provide unified excellence across digital visibility and physical atmosphere.
            </p>
          </div>

          <div className="home-disciplines__grid">
            {/* CARD 1: DIGITAL GENIE */}
            <div className="discipline-card discipline-card--digital fade-in-left">
              <div className="discipline-card__header">
                <div className="discipline-card__badge discipline-card__badge--digital">
                  <DigitalGenieMark size={24} />
                  <span>Digital Division</span>
                </div>
                <h3>The Digital Genie</h3>
                <p>
                  Digital strategy, marketing, content systems, and paid advertising solutions engineered to make businesses significantly more visible, authoritative, and profitable.
                </p>
              </div>

              <div className="discipline-card__img-wrap">
                <img
                  src={nikkytalesHeroImg}
                  alt="The Digital Genie Strategy"
                  className="discipline-card__img"
                />
                <div className="discipline-card__overlay discipline-card__overlay--digital" />
              </div>

              <div className="discipline-card__footer">
                <ul className="discipline-card__list">
                  <li><CheckCircle size={15} /> Digital & Growth Strategy</li>
                  <li><CheckCircle size={15} /> Content & Social Media Management</li>
                  <li><CheckCircle size={15} /> Targeted Meta Ads (Instagram/FB)</li>
                </ul>
                <Link to="/digital" className="btn btn-digital" id="card-digital-btn">
                  Explore Digital Division <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* CARD 2: BLOOM INTERIORS */}
            <div className="discipline-card discipline-card--bloom fade-in-right">
              <div className="discipline-card__header">
                <div className="discipline-card__badge discipline-card__badge--bloom">
                  <BloomMark size={24} color="#98755B" />
                  <span>Interior Division</span>
                </div>
                <h3>Bloom Interiors</h3>
                <p>
                  Thoughtfully designed residential and commercial spaces crafted around how people live, feel, work, and experience their physical environment.
                </p>
              </div>

              <div className="discipline-card__img-wrap">
                <img
                  src={bloomHeroImg}
                  alt="Bloom Interiors Design"
                  className="discipline-card__img"
                />
                <div className="discipline-card__overlay discipline-card__overlay--bloom" />
              </div>

              <div className="discipline-card__footer">
                <ul className="discipline-card__list">
                  <li><CheckCircle size={15} /> Residential & Commercial Design</li>
                  <li><CheckCircle size={15} /> Space Planning & Layout Optimization</li>
                  <li><CheckCircle size={15} /> Sourcing, Procurement & Execution</li>
                </ul>
                <Link to="/bloom" className="btn btn-bloom" id="card-bloom-btn">
                  Explore Interior Division <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== SECTION 3: DIGITAL GENIE FEATURE ====== */}
      <section className="home-digital-feature section section--slate" id="digital-feature">
        <div className="container">
          <div className="home-feature-header fade-in">
            <div>
              <span className="tag tag--digital">The Digital Genie</span>
              <h2>Digital growth, strategy & visibility</h2>
              <p>
                Structured marketing pillars that eliminate guesswork and build sustainable customer acquisition engines.
              </p>
            </div>
            <Link to="/digital" className="btn btn-outline-digital" id="feature-digital-all-btn">
              Explore All Digital Services <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid-4 home-pillars-grid">
            {DIGITAL_PILLARS.map((p, idx) => (
              <div className="pillar-card fade-in" key={p.title} style={{ transitionDelay: `${idx * 0.08}s` }}>
                <div className="pillar-card__icon pillar-card__icon--digital">{p.icon}</div>
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== SECTION 4: BLOOM FEATURE ====== */}
      <section className="home-bloom-feature section section--sand" id="bloom-feature">
        <div className="container">
          <div className="home-feature-header fade-in">
            <div>
              <span className="tag tag--bloom">Bloom Interiors</span>
              <h2>Spaces should feel like you.</h2>
              <p>
                Elevating homes and commercial environments with warm aesthetics, functional spatial zoning, and effortless luxury.
              </p>
            </div>
            <Link to="/bloom" className="btn btn-outline-bloom" id="feature-bloom-all-btn">
              Explore Bloom Interiors <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid-3 home-bloom-grid">
            {BLOOM_HIGHLIGHTS.map((h, idx) => (
              <div className="bloom-feature-card fade-in" key={h.title} style={{ transitionDelay: `${idx * 0.1}s` }}>
                <div className="bloom-feature-card__icon">{h.icon}</div>
                <h4>{h.title}</h4>
                <p>{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== SECTION 5: SELECTED WORK (UNIFIED PORTFOLIO) ====== */}
      <section className="home-work section" id="selected-work">
        <div className="container">
          <div className="section-header--center fade-in">
            <span className="tag">Unified Portfolio</span>
            <h2>Selected work & transformations</h2>
            <p>Explore case studies from our digital campaigns and interior design transformations.</p>

            {/* Filter Controls */}
            <div className="home-work__filters">
              {['ALL', 'DIGITAL', 'INTERIORS'].map((f) => (
                <button
                  key={f}
                  className={`home-work__filter-btn${filter === f ? ' active' : ''}`}
                  onClick={() => setFilter(f)}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div className="grid-3 home-work__grid">
            {filteredWork.map((item, idx) => (
              <div className="work-preview-card fade-in" key={item.id} style={{ transitionDelay: `${idx * 0.08}s` }}>
                <div className="work-preview-card__img-wrap">
                  <img src={item.img} alt={item.title} className="work-preview-card__img" />
                  <span className={`work-preview-card__badge work-preview-card__badge--${item.division}`}>
                    {item.tag}
                  </span>
                </div>
                <div className="work-preview-card__body">
                  <span className="work-preview-card__metric">{item.metric}</span>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                  <Link to={item.link} className="work-preview-card__link">
                    View Division Work <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="home-work__cta-wrap fade-in">
            <Link to="/work" className="btn btn-outline" id="view-full-work-btn">
              View Complete Portfolio & Gallery <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ====== SECTION 6: CLIENT REVIEWS MARQUEE ====== */}
      <section className="home-reviews section section--white" id="client-reviews">
        <div className="container">
          <div className="section-header--center fade-in">
            <span className="tag tag--green">Verified Client Love</span>
            <h2>What our clients say</h2>
            <p>Real feedback from business owners and homeowners we've had the pleasure of partnering with.</p>
          </div>
        </div>

        {/* Continuous Horizontal Scrolling Marquee */}
        <div className="reviews-marquee-container fade-in">
          <div className="reviews-marquee-track">
            {/* Set 1 */}
            {REVIEWS.map((r, i) => (
              <div className="reviews-marquee-card" key={`rev-1-${i}`}>
                <img src={r.img} alt={r.alt} className="reviews-marquee-img" loading="lazy" />
              </div>
            ))}
            {/* Set 2 (Duplicate for continuous loop) */}
            {REVIEWS.map((r, i) => (
              <div className="reviews-marquee-card" key={`rev-2-${i}`}>
                <img src={r.img} alt={r.alt} className="reviews-marquee-img" loading="lazy" />
              </div>
            ))}
            {/* Set 3 (Buffer) */}
            {REVIEWS.map((r, i) => (
              <div className="reviews-marquee-card" key={`rev-3-${i}`}>
                <img src={r.img} alt={r.alt} className="reviews-marquee-img" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== SECTION 7: ABOUT THE UMBRELLA ====== */}
      <section className="home-about section section--slate" id="umbrella-about">
        <div className="container">
          <div className="home-about__inner">
            <div className="home-about__content fade-in-left">
              <span className="tag">Creative Ecosystem</span>
              <h2>One vision bridging digital growth & physical design</h2>
              <p>
                In today's interconnected world, how a brand appears online and how an environment feels in person are two sides of the same coin: **Intentional Experience**.
              </p>
              <p>
                The Digital Genie serves as the umbrella growth house, combining analytical marketing rigor with refined spatial aesthetics to deliver holistic impact for businesses, spaces, and lifestyle founders.
              </p>
              <Link to="/about" className="btn btn-outline" style={{ marginTop: '16px' }} id="home-about-link-btn">
                Read Our Story & Approach <ArrowRight size={16} />
              </Link>
            </div>

            <div className="home-about__cards fade-in-right">
              <div className="home-about__card">
                <Sparkles size={24} className="text-dg-blue" />
                <h4>Strategic Clarity</h4>
                <p>Every digital campaign and interior layout starts with deep diagnosis and purpose.</p>
              </div>
              <div className="home-about__card">
                <Palette size={24} className="text-bloom" />
                <h4>Refined Aesthetics</h4>
                <p>Visually arresting design that converts audiences and elevates daily living.</p>
              </div>
              <div className="home-about__card">
                <CheckCircle size={24} className="text-dg-green" />
                <h4>Turnkey Execution</h4>
                <p>From initial blueprint to campaign launch or final furniture styling, we manage it all.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== SECTION 8: FINAL DUAL CTA ====== */}
      <section className="home-cta section section--dark" id="home-final-cta">
        <div className="container">
          <div className="home-cta__inner fade-in">
            <span className="tag" style={{ background: 'rgba(255,255,255,0.1)', color: '#FFFFFF', borderColor: 'rgba(255,255,255,0.2)' }}>
              Let's Collaborate
            </span>
            <h2>Have an idea? Let's bring it to life.</h2>
            <p>Choose your pathway to get started with our digital growth team or interior design consultants.</p>

            <div className="home-cta__actions">
              <Link to="/contact?service=digital" className="btn btn-digital" id="cta-digital-growth-btn">
                I Need Digital Growth <ArrowRight size={16} />
              </Link>
              <Link to="/contact?service=interior" className="btn btn-outline-white" id="cta-interior-design-btn">
                I Need Interior Design <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
