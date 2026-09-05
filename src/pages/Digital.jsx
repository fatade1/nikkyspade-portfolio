import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  TrendingUp,
  Share2,
  BarChart2,
  Layers,
  CheckCircle,
  Zap,
  Target,
  Users,
  ShieldCheck,
  Award
} from 'lucide-react';
import { DigitalGenieMark } from '../components/Logos';

import nikkytalesHeroImg from '../assets/images/nikkytales_hero.png';
import metaAdsImg from '../assets/images/meta_ads_screenshot.png';
import pageRecoveryImg from '../assets/images/page_recovery_screenshot.png';
import brandConsultationImg from '../assets/images/brand_consultation_screenshot.png';

import '../styles/digital.css';

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

const SERVICE_CATEGORIES = [
  {
    id: 'strategy',
    icon: <BarChart2 size={24} />,
    category: 'Digital Strategy',
    desc: 'Structured market analysis and strategic roadmaps to position your brand for sustainable revenue and authority.',
    services: [
      { name: 'Digital Growth Strategy', desc: 'Holistic cross-platform blueprint aligned with your commercial business goals.' },
      { name: 'Marketing Consulting', desc: '1-on-1 strategic advisory to diagnose bottlenecks and unlock acquisition channels.' },
      { name: 'Brand Strategy & Positioning', desc: 'Refining your value proposition to attract high-ticket, premium clientele.' },
      { name: 'Competitor & Market Research', desc: 'Data-backed insights to discover untapped market demand and opportunities.' },
    ],
  },
  {
    id: 'content',
    icon: <Share2 size={24} />,
    category: 'Content & Social',
    desc: 'Storytelling-driven content ecosystems that turn casual scrollers into engaged communities and active buyers.',
    services: [
      { name: 'Social Media Management', desc: 'End-to-end management: content creation, scheduling, copywriting, and engagement.' },
      { name: 'Content Strategy & Planning', desc: '30-day structured content calendars designed to establish undeniable niche authority.' },
      { name: 'UGC & Video Storytelling', desc: 'Short-form video scripts and creative direction for high-engagement Reels and TikToks.' },
      { name: 'Caption Ghostwriting', desc: 'High-converting brand storytelling written in your unique, authentic executive voice.' },
    ],
  },
  {
    id: 'paid-growth',
    icon: <TrendingUp size={24} />,
    category: 'Paid Growth',
    desc: 'Data-driven Meta advertising campaigns engineered for maximum return on ad spend and qualified lead generation.',
    services: [
      { name: 'Meta Ads Campaigns (IG/FB)', desc: 'High-performance conversion funnels targeting ready-to-buy customer segments.' },
      { name: 'Campaign Strategy & Funnel Design', desc: 'Architecting top-of-funnel awareness through bottom-of-funnel retargeting.' },
      { name: 'Lead Generation & Conversions', desc: 'Optimized ad creative and lead magnets to fill your sales pipeline consistently.' },
      { name: 'Creative A/B Testing & Scaling', desc: 'Scientific testing of copy, angles, and creatives to scale profitable ad spend.' },
    ],
  },
  {
    id: 'support',
    icon: <Layers size={24} />,
    category: 'Digital Support',
    desc: 'Operational digital support and virtual execution so you can focus on core leadership and high-level growth.',
    services: [
      { name: 'Virtual Business Assistance', desc: 'Digital admin, email triage, calendar coordination, and workflow execution.' },
      { name: 'Digital Asset Organization', desc: 'Streamlining customer records, drive structures, and operational tooling.' },
      { name: 'Customer & Community Support', desc: 'Responsive community engagement, direct messaging management, and inbox triage.' },
      { name: 'Account Recovery Assistance', desc: 'Specialized support navigating Meta policy, account security, and asset restoration.' },
    ],
  },
];

const DIGITAL_PROJECTS = [
  {
    title: 'E-Commerce Meta Ads Scaling',
    category: 'Paid Advertising',
    metric: '3.8x ROAS / +140% Monthly Revenue',
    challenge: 'A boutique lifestyle brand was struggling with rising customer acquisition costs and stagnant organic sales.',
    solution: 'Engineered a full-funnel Meta advertising campaign featuring dynamic retargeting, custom audience modeling, and high-converting video creatives.',
    deliverables: ['Custom conversion funnel architecture', 'A/B tested high-CTR ad creatives', 'Audience segmentation & lookalikes', 'Weekly performance dashboard'],
    img: metaAdsImg,
  },
  {
    title: 'Instagram Asset Recovery & Growth',
    category: 'Security & Recovery',
    metric: '100% Recovered / +90% Reach Restored',
    challenge: 'A prominent service business had their primary Instagram account mistakenly disabled, losing thousands of potential client touchpoints.',
    solution: 'Coordinated formal Meta channel escalations to safely recover the asset within 5 days, followed by a 14-day re-engagement storytelling campaign.',
    deliverables: ['Account security verification', 'Meta policy compliance audit', '14-day comeback content strategy', 'Inbound lead revival funnel'],
    img: pageRecoveryImg,
  },
  {
    title: 'Brand Strategy & Ad Consultation',
    category: 'Marketing Consulting',
    metric: '+65% Lead Quality / +45% Organic Reach',
    challenge: 'An established consulting brand had healthy ad spend but low-quality inbound leads that did not match their premium pricing.',
    solution: 'Conducted an exhaustive content and paid audit, repositioned their core offer messaging, and trained their internal team on creative angle testing.',
    deliverables: ['Comprehensive brand positioning audit', 'High-ticket authority messaging framework', 'Paid creative guidelines', 'Internal team SOPs'],
    img: brandConsultationImg,
  },
];

const GROWTH_PROCESS = [
  { step: '01', title: 'Audit & Diagnosis', desc: 'We examine your current digital assets, ad metrics, content performance, and market positioning to locate highest-leverage growth levers.' },
  { step: '02', title: 'Strategic Blueprint', desc: 'We architect a bespoke growth strategy encompassing content pillars, conversion funnels, and paid campaign roadmaps tailored to your targets.' },
  { step: '03', title: 'Execution & Launch', desc: 'We craft high-converting copy, design compelling creative assets, configure audience targeting, and launch campaigns seamlessly.' },
  { step: '04', title: 'Optimization & Scale', desc: 'Through continuous data analysis, A/B testing, and creative iteration, we optimize conversion rates and scale profitable channels.' },
];

export default function Digital() {
  useScrollFade();

  return (
    <div className="digital-page" data-theme="digital">
      {/* ====== HERO ====== */}
      <section className="dg-hero" id="digital-hero">
        <div className="container">
          <div className="dg-hero__grid">
            <div className="dg-hero__content fade-in-left">
              <div className="dg-hero__tag">
                <DigitalGenieMark size={20} />
                <span>The Digital Genie · Digital Growth Division</span>
              </div>

              <h1>
                Strategic digital growth designed to make your brand <em>visible</em> and <em>valuable.</em>
              </h1>

              <p className="dg-hero__sub">
                We build predictable marketing engines through data-driven digital strategy, storytelling content systems, and high-ROI Meta advertising funnels.
              </p>

              <div className="dg-hero__actions">
                <Link to="/contact?service=digital" className="btn btn-digital" id="dg-hero-cta">
                  Let's Work Together <ArrowRight size={16} />
                </Link>
                <a href="#digital-services" className="btn btn-outline-digital">
                  Explore Services
                </a>
              </div>

              <div className="dg-hero__badges">
                <div className="dg-hero__badge-item">
                  <ShieldCheck size={18} className="text-dg-blue" />
                  <span>Data-Backed Methodologies</span>
                </div>
                <div className="dg-hero__badge-item">
                  <Target size={18} className="text-dg-green" />
                  <span>Conversion-Focused Funnels</span>
                </div>
                <div className="dg-hero__badge-item">
                  <Award size={18} className="text-dg-blue" />
                  <span>Turnkey Execution</span>
                </div>
              </div>
            </div>

            <div className="dg-hero__image-wrap fade-in-right">
              <img src={nikkytalesHeroImg} alt="The Digital Genie Team" className="dg-hero__image" />
              <div className="dg-hero__floating-card">
                <div className="dg-hero__floating-num">3.8x</div>
                <div className="dg-hero__floating-lbl">Avg. Meta Ads Return on Ad Spend</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== SERVICES GRID ====== */}
      <section className="dg-services section" id="digital-services">
        <div className="container">
          <div className="section-header--center fade-in">
            <span className="tag tag--digital">Core Service Pillars</span>
            <h2>Complete digital solutions for scaling brands</h2>
            <p>
              Four specialized capabilities designed to cover every stage of your customer acquisition, brand presence, and digital operations.
            </p>
          </div>

          <div className="dg-services__grid">
            {SERVICE_CATEGORIES.map((cat, idx) => (
              <div className="dg-service-card fade-in" key={cat.id} style={{ transitionDelay: `${idx * 0.1}s` }}>
                <div className="dg-service-card__header">
                  <div className="dg-service-card__icon">{cat.icon}</div>
                  <h3>{cat.category}</h3>
                  <p>{cat.desc}</p>
                </div>

                <div className="dg-service-card__items">
                  {cat.services.map((s) => (
                    <div className="dg-service-item" key={s.name}>
                      <div className="dg-service-item__title">
                        <CheckCircle size={15} className="text-dg-blue" />
                        <strong>{s.name}</strong>
                      </div>
                      <p>{s.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="dg-service-card__footer">
                  <Link to={`/contact?service=${encodeURIComponent(cat.category)}`} className="btn btn-outline-digital" style={{ width: '100%' }}>
                    Enquire About {cat.category} <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== CASE STUDIES ====== */}
      <section className="dg-cases section section--slate" id="digital-cases">
        <div className="container">
          <div className="section-header--center fade-in">
            <span className="tag tag--digital">Proven Results</span>
            <h2>Featured digital case studies</h2>
            <p>Real-world growth stories from Meta ads scaling to high-impact brand repositioning.</p>
          </div>

          <div className="dg-cases__list">
            {DIGITAL_PROJECTS.map((proj, idx) => (
              <div className="dg-case-card fade-in" key={proj.title} style={{ transitionDelay: `${idx * 0.1}s` }}>
                <div className="dg-case-card__img-wrap">
                  <img src={proj.img} alt={proj.title} className="dg-case-card__img" />
                </div>
                <div className="dg-case-card__content">
                  <div className="dg-case-card__top">
                    <span className="tag tag--digital">{proj.category}</span>
                    <span className="dg-case-card__metric">{proj.metric}</span>
                  </div>
                  <h3>{proj.title}</h3>
                  <div className="dg-case-card__section">
                    <strong>Challenge:</strong>
                    <p>{proj.challenge}</p>
                  </div>
                  <div className="dg-case-card__section">
                    <strong>Strategic Solution:</strong>
                    <p>{proj.solution}</p>
                  </div>
                  <div className="dg-case-card__deliverables">
                    <strong>Key Execution Deliverables:</strong>
                    <ul>
                      {proj.deliverables.map((d) => (
                        <li key={d}><CheckCircle size={14} className="text-dg-green" /> {d}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== 4-STEP GROWTH PROCESS ====== */}
      <section className="dg-process section" id="digital-process">
        <div className="container">
          <div className="section-header--center fade-in">
            <span className="tag tag--green">Our Methodology</span>
            <h2>How we drive sustainable growth</h2>
            <p>A systematic 4-step framework engineered to minimize risk and maximize marketing ROI.</p>
          </div>

          <div className="grid-4 dg-process__grid">
            {GROWTH_PROCESS.map((p, idx) => (
              <div className="dg-process-card fade-in" key={p.step} style={{ transitionDelay: `${idx * 0.1}s` }}>
                <div className="dg-process-card__step">{p.step}</div>
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== FINAL DIGITAL CTA ====== */}
      <section className="dg-cta section section--dark" id="digital-final-cta">
        <div className="container">
          <div className="dg-cta__inner fade-in">
            <span className="tag" style={{ background: 'rgba(37,99,235,0.2)', color: '#60A5FA', borderColor: 'rgba(37,99,235,0.4)' }}>
              Ready To Scale?
            </span>
            <h2>Let's build your brand's digital growth engine.</h2>
            <p>
              Whether you need strategic marketing consulting, high-converting Meta ads, or comprehensive content management, we're ready to partner with you.
            </p>
            <Link to="/contact?service=digital" className="btn btn-digital" id="dg-bottom-cta">
              Book a Strategy Consultation <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
