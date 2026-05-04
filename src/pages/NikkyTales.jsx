import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Share2, Layout, BarChart2, Star, CheckCircle } from 'lucide-react';
import nikkytalesHeroImg from '../assets/images/nikkytales_hero.png';
import dashboardImg from '../assets/images/digital_dashboard.png';
import contentMockupImg from '../assets/images/content_mockup.png';
import brandGrowthImg from '../assets/images/brand_growth.png';
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
      { name: 'Social Media Management', desc: 'Full account management — strategy, posting, engagement, community building, and monthly reporting.' },
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
      { name: 'Caption Ghostwriting', desc: 'Engagement-driven captions crafted in your brand voice — storytelling that resonates and converts.' },
      { name: 'Content Strategy Consulting', desc: 'Comprehensive content audits and strategic direction for brands that want to level up their messaging.' },
      { name: 'Reels & Video Strategy', desc: 'Video content strategy and scripting to maximise reach and engagement on Instagram and TikTok.' },
    ],
  },
];

const PROJECTS = [
  {
    img: brandGrowthImg,
    title: 'Personal Brand Growth for a Business Coach',
    type: 'Brand Growth',
    challenge: 'Inconsistent posting, low engagement, and no clear content direction.',
    what: ['Developed a content strategy focused on authority + storytelling', 'Created a 30-day content calendar', 'Optimised bio, highlights, and page structure', 'Introduced Reels + educational content mix', 'Implemented engagement-driven captions (ghostwriting)'],
    result: '+120% increase in engagement. Stronger brand positioning. Increased inquiries from ideal clients.',
    metric: '+120% Engagement',
  },
  {
    img: dashboardImg,
    title: 'Social Media & Ads Campaign for Product Launch',
    type: 'Product Launch',
    challenge: 'Launching a new beauty product with low visibility and no structured campaign plan.',
    what: ['Built a 2-week launch strategy', 'Created pre-launch, launch, and post-launch content', 'Ran Meta Ads targeting niche audience', 'Designed storytelling-driven campaign messaging'],
    result: 'Successful product launch with high engagement and improved audience targeting.',
    metric: 'Successful Launch',
  },
  {
    img: contentMockupImg,
    title: 'Monthly Social Media Management for SME',
    type: 'SMM Retainer',
    challenge: 'Inconsistent posting, low engagement, and no content structure for a service business.',
    what: ['Managed full social media account', 'Created weekly content plan', 'Designed engaging captions and storytelling content', 'Tracked analytics and adjusted strategy'],
    result: 'Consistent brand presence, increased audience interaction, and a more professional page.',
    metric: 'Consistent Growth',
  },
];

const METRICS = [
  { num: '120%', label: 'Average Engagement Growth' },
  { num: '50+', label: 'Clients Served' },
  { num: '3x', label: 'Average Reach Increase' },
  { num: '99%', label: 'Client Satisfaction Rate' },
];

const TESTIMONIALS = [
  { text: 'NikkyTales completely shifted my online presence. I went from barely posting to having a recognised brand that people actually talk about.', name: 'Amaka O.', role: 'Business Coach', init: 'A' },
  { text: 'I had the best product launch I could imagine — all thanks to the strategy and content NikkyTales put together. Worth every penny.', name: 'Funmi A.', role: 'Beauty Brand Founder', init: 'F' },
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
          <span className="section-label" style={{ background: 'rgba(152,117,91,0.2)', color: 'var(--sand)' }}>Digital Marketing</span>
          <h1 className="nt-hero__title fade-in">Strategic digital marketing<br />that <em>actually</em> grows your brand.</h1>
          <p className="nt-hero__sub fade-in">Content strategy, social media management, and paid advertising — designed to build authority, grow your audience, and drive real results.</p>
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
            <span className="section-label">What I Offer</span>
            <h2>Services tailored for growth</h2>
            <p>Whether you're a small business owner, coach, or personal brand — NikkyTales has a service that fits where you are and where you're going.</p>
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
            <span className="section-label">Case Studies</span>
            <h2>Work that speaks for itself</h2>
            <p>Real client projects with real results — here's how NikkyTales delivers.</p>
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
            <span className="section-label">Client Feedback</span>
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
