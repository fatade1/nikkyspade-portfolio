import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Heart,
  Target,
  Zap,
  CheckCircle,
  TrendingUp,
  Home as HomeIcon,
  Sparkles
} from 'lucide-react';
import { DigitalGenieMark, BloomMark } from '../components/Logos';

import aboutImg from '../assets/images/about_portrait.png';
import bloomHeroImg from '../assets/images/bloom_hero.png';
import nikkytalesHeroImg from '../assets/images/nikkytales_hero.png';

import '../styles/about.css';

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

const VALUES = [
  {
    icon: <Heart size={22} />,
    title: 'Intentional Experience',
    desc: 'Whether designing a high-converting digital acquisition funnel or styling a residential living room, every detail is engineered with clear purpose.',
  },
  {
    icon: <Target size={22} />,
    title: 'Measurable Impact',
    desc: 'We combine aesthetic beauty with hard commercial outcomes: profitable advertising ROAS, audience authority, and functional spatial flow.',
  },
  {
    icon: <Zap size={22} />,
    title: 'Client-First Excellence',
    desc: 'Your brand vision or personal sanctuary is our foundation. We listen deeply, plan meticulously, and execute without compromise.',
  },
];

const TIMELINE = [
  {
    year: '2021',
    title: 'Digital Agency Inception',
    desc: 'Began building bespoke content strategies and digital growth funnels for emerging brands and high-ticket service founders.',
  },
  {
    year: '2022',
    title: 'Scaling Paid Media & Portfolio',
    desc: 'Scaled to 30+ brands, delivering 3.8x+ ROAS Meta ad campaigns and high-retention social media management frameworks.',
  },
  {
    year: '2023',
    title: 'Bloom Interiors Founded',
    desc: 'Launched Bloom Interiors as a dedicated spatial design practice, transforming residential homes, retail stores, and commercial suites.',
  },
  {
    year: '2026',
    title: 'The Digital Genie Creative House',
    desc: 'Unified both practices under The Digital Genie: a multi-disciplinary creative growth house uniting digital authority with physical luxury.',
  },
];

export default function About() {
  useScrollFade();

  return (
    <div className="about-page">
      {/* ====== HERO ====== */}
      <section className="about-hero" id="about-hero">
        <div className="container">
          <div className="about-hero__inner">
            <div className="about-hero__content fade-in-left">
              <span className="tag">About The Creative House</span>
              <h1>One creative house. Two distinct disciplines.</h1>
              <p>
                The Digital Genie represents a modern creative business model: uniting high-impact digital marketing strategy with tactile, luxury interior transformations.
              </p>
              <div className="about-hero__actions">
                <Link to="/digital" className="btn btn-digital">
                  Explore Digital Division <ArrowRight size={15} />
                </Link>
                <Link to="/bloom" className="btn btn-outline-bloom">
                  Explore Bloom Interiors
                </Link>
              </div>
            </div>

            <div className="about-hero__img-wrap fade-in-right">
              <img src={aboutImg} alt="The Digital Genie Founder" className="about-hero__img" />
              <div className="about-hero__badge">
                <DigitalGenieMark size={24} />
                <div>
                  <strong>Creative Growth House</strong>
                  <span>Digital Strategy & Interior Design</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== STORY ====== */}
      <section className="about-story section" id="about-story">
        <div className="container">
          <div className="about-story__inner">
            <div className="about-story__text fade-in-left">
              <span className="tag tag--green">Our Philosophy</span>
              <h2>Why digital growth & spatial design coexist</h2>
              <p>
                In the modern landscape, how your business appears on a screen and how an environment feels when you step inside are fundamentally connected. Both demand the exact same core craft: **Understanding human emotion, crafting intentional perception, and executing with uncompromising precision.**
              </p>
              <p>
                Rather than treating digital marketing and physical interiors as disconnected worlds, The Digital Genie approaches both through the lens of immersive experience design.
              </p>
              <p>
                Our digital team engineers visibility, high-ROI paid acquisition, and brand authority. Meanwhile, Bloom Interiors crafts physical sanctuaries, boutique retail spaces, and executive environments that inspire and delight.
              </p>
            </div>

            <div className="about-story__cards fade-in-right">
              <div className="about-story__card">
                <TrendingUp size={24} className="text-dg-blue" />
                <h4>The Digital Discipline</h4>
                <p>Data-backed marketing funnels, Meta advertising, and content systems that drive scalable revenue.</p>
              </div>
              <div className="about-story__card">
                <HomeIcon size={24} className="text-bloom" />
                <h4>The Interior Discipline</h4>
                <p>Architectural spatial layouts, organic texture layering, and turnkey procurement for living and working.</p>
              </div>
              <div className="about-story__card">
                <Sparkles size={24} className="text-dg-green" />
                <h4>The Unified Synergy</h4>
                <p>Cohesive brand leadership ensuring seamless execution whether in the digital market or the physical room.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== TWO DISCIPLINES COMPARISON ====== */}
      <section className="about-disciplines section section--slate" id="about-disciplines">
        <div className="container">
          <div className="section-header--center fade-in">
            <span className="tag">Disciplines Overview</span>
            <h2>Two specialized divisions under one roof</h2>
            <p>Each discipline operates with its own distinct methodology, tools, and dedicated design language.</p>
          </div>

          <div className="grid-2 about-disciplines__grid">
            {/* DIGITAL */}
            <div className="about-disc-card about-disc-card--digital fade-in-left">
              <div className="about-disc-card__img-wrap">
                <img src={nikkytalesHeroImg} alt="Digital Marketing" className="about-disc-card__img" />
              </div>
              <div className="about-disc-card__body">
                <div className="about-disc-card__tag">
                  <DigitalGenieMark size={20} />
                  <span>Digital Division</span>
                </div>
                <h3>The Digital Genie</h3>
                <p>
                  Your brand's strategic growth engine: Meta advertising, content strategy, ghostwriting, and virtual support that convert audiences into loyal clients.
                </p>
                <ul className="about-disc-card__list">
                  {['Digital & Growth Strategy', 'Social Media Management', 'Meta Ads Campaigns', 'Content Ghostwriting', 'Digital Support'].map((item) => (
                    <li key={item}><CheckCircle size={14} className="text-dg-blue" /> {item}</li>
                  ))}
                </ul>
                <Link to="/digital" className="btn btn-digital" style={{ marginTop: '20px' }}>
                  Explore Digital <ArrowRight size={15} />
                </Link>
              </div>
            </div>

            {/* BLOOM */}
            <div className="about-disc-card about-disc-card--bloom fade-in-right">
              <div className="about-disc-card__img-wrap">
                <img src={bloomHeroImg} alt="Interior Design" className="about-disc-card__img" />
              </div>
              <div className="about-disc-card__body">
                <div className="about-disc-card__tag">
                  <BloomMark size={20} color="#98755B" />
                  <span>Interior Division</span>
                </div>
                <h3 className="font-editorial">Bloom Interiors</h3>
                <p>
                  Creating beautiful, intentional spaces for residential and commercial clients. Every project begins with your story and ends with a space that feels like home.
                </p>
                <ul className="about-disc-card__list">
                  {['Residential & Commercial Design', 'Space Planning & Layout', 'Furniture Sourcing', 'Styling & Decor', 'Turnkey Project Execution'].map((item) => (
                    <li key={item}><CheckCircle size={14} className="text-bloom" /> {item}</li>
                  ))}
                </ul>
                <Link to="/bloom" className="btn btn-bloom" style={{ marginTop: '20px' }}>
                  Explore Bloom Interiors <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== CORE VALUES ====== */}
      <section className="about-values section" id="about-values">
        <div className="container">
          <div className="section-header--center fade-in">
            <span className="tag">Guiding Principles</span>
            <h2>Our core values</h2>
            <p>The shared commitments that guide every digital campaign and spatial transformation.</p>
          </div>

          <div className="grid-3 about-values__grid">
            {VALUES.map((v, idx) => (
              <div className="about-value-card fade-in" key={v.title} style={{ transitionDelay: `${idx * 0.1}s` }}>
                <div className="about-value-card__icon">{v.icon}</div>
                <h4>{v.title}</h4>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== TIMELINE ====== */}
      <section className="about-timeline section section--slate" id="about-timeline">
        <div className="container">
          <div className="section-header--center fade-in">
            <span className="tag">Our Journey</span>
            <h2>Milestones that shaped our house</h2>
          </div>

          <div className="about-timeline__track">
            {TIMELINE.map((item, idx) => (
              <div className="about-timeline__item fade-in" key={item.year} style={{ transitionDelay: `${idx * 0.1}s` }}>
                <div className="about-timeline__year">{item.year}</div>
                <div className="about-timeline__dot" />
                <div className="about-timeline__content">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== CTA ====== */}
      <section className="about-cta section section--dark" id="about-final-cta">
        <div className="container">
          <div className="about-cta__inner fade-in">
            <h2>Ready to work with our creative house?</h2>
            <p>Let's collaborate on scaling your brand's digital presence or curating your dream space.</p>
            <div className="about-cta__actions">
              <Link to="/contact?service=digital" className="btn btn-digital">
                Inquire Digital Growth <ArrowRight size={15} />
              </Link>
              <Link to="/contact?service=interior" className="btn btn-outline-white">
                Inquire Interior Design <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
