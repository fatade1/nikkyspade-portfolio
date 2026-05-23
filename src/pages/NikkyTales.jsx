import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Share2, Layout, BarChart2, Star, CheckCircle } from 'lucide-react';
import nikkytalesHeroImg from '../assets/images/nikkytales_hero.png';
import metaAdsImg from '../assets/images/meta_ads_screenshot.png';
import pageRecoveryImg from '../assets/images/page_recovery_screenshot.png';
import brandConsultationImg from '../assets/images/brand_consultation_screenshot.png';
import '../styles/nikkytales.css';

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
    cat: 'Social Media & Growth',
    icon: <Share2 size={20} />,
    services: [
      { name: 'Social Media Management', desc: 'Full account management: strategy, posting, engagement, community building, and monthly reporting.' },
      { name: 'Content Calendar Creation', desc: 'Structured 30-day content plans that eliminate guesswork and keep your brand consistently visible.' },
      { name: 'Bio & Profile Optimization', desc: "First impressions matter. We optimise your profile highlights, bio, and page structure for maximum impact." },
    ],
  },
  {
    cat: 'Advertising & Marketing',
    icon: <BarChart2 size={20} />,
    services: [
      { name: 'Meta Ads Campaigns', desc: 'Targeted Facebook & Instagram ads that reach your ideal client and convert them into paying customers.' },
      { name: 'Product Launch Strategy', desc: 'Pre-launch, launch, and post-launch campaigns that generate buzz and drive sales from day one.' },
      { name: 'Audience Research & Targeting', desc: 'Detailed audience analysis to ensure your message lands in front of the right people.' },
    ],
  },
  {
    cat: 'Content & Communication',
    icon: <Layout size={20} />,
    services: [
      { name: 'Caption Ghostwriting', desc: 'Engagement-driven captions crafted in your brand voice: storytelling that resonates and converts.' },
      { name: 'Content Strategy Consulting', desc: 'Comprehensive content audits and strategic direction for brands that want to level up their messaging.' },
      { name: 'Reels & Video Strategy', desc: 'Video content strategy and scripting to maximise reach and engagement on Instagram and TikTok.' },
    ],
  },
];

const PROJECTS = [
  {
    img: metaAdsImg,
    title: 'E-Commerce Meta Ads Campaign & Scaling',
    type: 'Meta Ads',
    challenge: 'Low visibility and high acquisition costs for a growing boutique brand. We needed to establish a sustainable acquisition channel and scale sales.',
    what: ['Built a comprehensive conversion funnel starting from cold audience targeting', 'Created high-performing video ad creatives', 'Optimised product landing page copy and retargeting ads', 'Executed structured A/B tests on audiences and creatives'],
    result: 'Achieved a 3.8x Return on Ad Spend (ROAS), scaled monthly revenue by 140%, and significantly lowered customer acquisition cost.',
    metric: '3.8x ROAS / +140% Revenue',
  },
  {
    img: pageRecoveryImg,
    title: 'Instagram Page Recovery & Re-engagement',
    type: 'Page Recovery',
    challenge: 'A prominent service brand had their primary Instagram account disabled, losing access to thousands of followers and their primary lead source.',
    what: ['Handled security audit and recovery process directly through Meta support channels', 'Designed a 14-day "welcome back" re-engagement content campaign', 'Restored algorithmic reach and regained lost trust with interactive storytelling'],
    result: 'Successfully recovered the page within 5 days, restored 90% of active reach in the first week, and generated 15+ high-quality inbound inquiries.',
    metric: '100% Recovery / 90% Reach Restored',
  },
  {
    img: brandConsultationImg,
    title: 'Brand Content & Ad Optimization Consultation',
    type: 'Brand Consultation',
    challenge: 'An established lifestyle brand had a high budget but flatlined growth, with content and ads that did not align with their premium price point.',
    what: ['Conducted a thorough audit of organic content and paid ad accounts', 'Restructured content pillar framework to focus on high-ticket authority and storytelling', 'Trained their internal team on creative execution and ad optimization'],
    result: 'Refined brand positioning to attract high-value clients, increasing lead quality by 65% and growing organic reach by 45% within 30 days of implementation.',
    metric: '+65% Lead Quality / +45% Reach',
  },
];

const METRICS = [
  { num: '140%', label: 'Average Sales Growth' },
  { num: '50+', label: 'Clients Served' },
  { num: '3.8x', label: 'Average Ad ROAS' },
  { num: '99%', label: 'Client Satisfaction Rate' },
];

const TESTIMONIALS = [
  { text: 'NikkyTales completely shifted my online presence. I went from barely posting to having a recognised brand that people actually talk about.', name: 'Amaka O.', role: 'Business Coach', init: 'A' },
  { text: 'I had the best product launch I could imagine, all thanks to the strategy and content NikkyTales put together. Worth every penny.', name: 'Funmi A.', role: 'Beauty Brand Founder', init: 'F' },
];

export default function NikkyTales() {
  useScrollFade();

  return (
    <main>
      {/* HERO */}
      <section className="nt-hero" id="nt-hero">
        <div className="nt-hero__image-wrap">
          <img src={nikkytalesHeroImg} alt="NikkyTales Digital Marketing" className="nt-hero__image" />
          <div className="nt-hero__overlay" />
        </div>
        <div className="container nt-hero__content">
          <h1 className="nt-hero__title fade-in">Strategic digital marketing<br />that <em>actually</em> grows your brand.</h1>
          <p className="nt-hero__sub fade-in">Content strategy, social media management, and paid advertising, designed to build authority, grow your audience, and drive real results.</p>
          <div className="nt-hero__btns fade-in">
            <Link to="/contact" className="btn btn-light" id="nt-book-btn">Book a Strategy Call <ArrowRight size={16} /></Link>
            <a href="#nt-projects" className="btn btn-outline-light" id="nt-portfolio-btn">View Case Studies</a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="nt-services section" id="nt-services">
        <div className="container">
          <div className="section-header--center fade-in">
            <h2>Services tailored for growth</h2>
            <p>Whether you're a small business owner, coach, or personal brand, NikkyTales has a service that fits where you are and where you're going.</p>
          </div>

          {SERVICE_GROUPS.map((group, gi) => (
            <div key={group.cat} className="nt-service-group fade-in" style={{ transitionDelay: `${gi * 0.1}s` }}>
              <div className="nt-service-group__header">
                <div className="nt-service-group__icon">{group.icon}</div>
                <h3 className="nt-service-group__title">{group.cat}</h3>
              </div>
              <div className="nt-service-group__grid">
                {group.services.map(s => (
                  <div className="nt-service-item" key={s.name}>
                    <CheckCircle size={16} className="nt-service-item__check" />
                    <div>
                      <h4 className="nt-service-item__name">{s.name}</h4>
                      <p className="nt-service-item__desc">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="nt-projects section section--sand" id="nt-projects">
        <div className="container">
          <div className="section-header--center fade-in">
            <h2>Work that speaks for itself</h2>
            <p>Real client projects with real results: here's how NikkyTales delivers.</p>
          </div>

          <div className="nt-projects__grid">
            {PROJECTS.map((proj, i) => (
              <div className="nt-project-card fade-in" key={proj.title} style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="nt-project-card__img-wrap">
                  <img src={proj.img} alt={proj.title} className="nt-project-card__img" loading="lazy" />
                  <div className="nt-project-card__badge">{proj.type}</div>
                </div>
                <div className="nt-project-card__body">
                  <h3 className="nt-project-card__title">{proj.title}</h3>
                  <div className="nt-project-card__section">
                    <div className="nt-project-card__label">The Challenge</div>
                    <p>{proj.challenge}</p>
                  </div>
                  <div className="nt-project-card__section">
                    <div className="nt-project-card__label">What We Did</div>
                    <ul className="nt-project-card__list">
                      {proj.what.map(w => <li key={w}><CheckCircle size={13} />{w}</li>)}
                    </ul>
                  </div>
                  <div className="nt-project-card__result">
                    <TrendingUp size={14} />
                    <span>{proj.metric}</span>
                  </div>
                  <p className="nt-project-card__result-text">{proj.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* METRICS */}
      <section className="nt-metrics section" id="nt-metrics">
        <div className="container">
          <div className="nt-metrics__grid">
            {METRICS.map((m, i) => (
              <div className="nt-metric fade-in" key={m.label} style={{ transitionDelay: `${i * 0.08}s` }}>
                <div className="nt-metric__num">{m.num}</div>
                <div className="nt-metric__label">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="nt-testimonials section section--cream-light" id="nt-testimonials">
        <div className="container">
          <div className="section-header--center fade-in">
            <h2>What digital clients are saying</h2>
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
      <section className="home-cta" id="nt-cta">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="fade-in" style={{ color: 'var(--cream)' }}>Ready to grow your brand?</h2>
          <p className="fade-in" style={{ color: 'var(--sand)', maxWidth: '520px', margin: '20px auto 40px' }}>Let's build a digital strategy that puts your brand in front of the right people and turns followers into clients.</p>
          <Link to="/contact" className="btn btn-light" id="nt-cta-btn">Start With a Strategy Call <ArrowRight size={16} /></Link>
        </div>
      </section>
    </main>
  );
}
