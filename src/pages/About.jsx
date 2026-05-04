import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Target, Zap, CheckCircle } from 'lucide-react';
import aboutImg from '../assets/images/about_portrait.png';
import heroImg from '../assets/images/hero_portrait.png';
import bloomHeroImg from '../assets/images/bloom_hero.png';
import nikkytalesHeroImg from '../assets/images/nikkytales_hero.png';
import '../styles/about.css';

function useScrollFade() {
  useEffect(() => {
    const els = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right');
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } }),
      { threshold: 0.12 }
    );
    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

const VALUES = [
  { icon: <Heart size={22} />, title: 'Intentional Creativity', desc: 'Every decision — whether a content caption or furniture selection — is made with purpose and care.' },
  { icon: <Target size={22} />, title: 'Results-Driven', desc: 'Beautiful work that also delivers measurable outcomes: growth, conversions, and transformations.' },
  { icon: <Zap size={22} />, title: 'Client-First Always', desc: 'Your vision is the foundation. I listen deeply, then elevate it beyond what you imagined.' },
];

const TIMELINE = [
  { year: '2021', title: 'NikkyTales Founded', desc: 'Started with a passion for storytelling and social media — helping small businesses find their voice online.' },
  { year: '2022', title: 'First 20 Clients', desc: 'Grew NikkyTales to serve 20+ clients across industries, delivering consistent brand growth results.' },
  { year: '2023', title: 'The Bloom Interiors Launches', desc: 'Merged a lifelong love for beautiful spaces into a full interior design and styling service.' },
  { year: '2024', title: 'Dual Brand Excellence', desc: 'Now operating two premium service brands with a growing portfolio of happy clients and stunning transformations.' },
];

export default function About() {
  useScrollFade();

  return (
    <main>
      {/* HERO */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero__inner">
            <div className="about-hero__content fade-in-left">
              <span className="section-label">About Me</span>
              <h1>Creative, strategic, and deeply passionate about excellence.</h1>
              <div className="divider" />
              <p>I'm Nikkyspade — a multi-disciplinary creative entrepreneur who bridges the worlds of digital marketing and interior design. I build brands and I build spaces. Both with intention. Both with love.</p>
              <div className="about-hero__btns">
                <Link to="/contact" className="btn btn-primary" id="about-contact-btn">Work With Me <ArrowRight size={16} /></Link>
                <Link to="/portfolio" className="btn btn-outline" id="about-portfolio-btn">View My Work</Link>
              </div>
            </div>
            <div className="about-hero__image-wrap fade-in-right">
              <img src={aboutImg} alt="Nikkyspade — Creative Entrepreneur" className="about-hero__image" />
              <div className="about-hero__image-badge">
                <span className="about-hero__badge-num">50+</span>
                <span className="about-hero__badge-label">Happy Clients</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="about-story section section--cream-light" id="about-story">
        <div className="container">
          <div className="about-story__inner">
            <div className="fade-in-left">
              <span className="section-label">My Story</span>
              <h2>Born from passion. Built on purpose.</h2>
              <div className="divider" />
              <p style={{ marginBottom: '16px' }}>From a very early age, I was drawn to two things: the power of stories to connect people, and the way a beautifully arranged space could completely change how someone felt.</p>
              <p style={{ marginBottom: '16px' }}>I started NikkyTales because I saw so many brilliant businesses struggling to communicate their value online. I knew I could help — and I did. Through strategic content, storytelling-driven social media, and targeted paid advertising, I began helping brands grow in ways they didn't think were possible.</p>
              <p>The Bloom Interiors came next — a natural extension of my eye for aesthetics. Transforming a cluttered room into a beautiful, functional space that someone falls in love with? There's nothing quite like it. Both brands now serve one unified mission: helping people live and work in excellence.</p>
            </div>
            <div className="about-story__img-grid fade-in-right">
              <img src={heroImg} alt="Nikkyspade creative workspace" className="about-story__img about-story__img--main" />
              <img src={bloomHeroImg} alt="Interior design work" className="about-story__img about-story__img--accent" />
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="about-values section" id="about-values">
        <div className="container">
          <div className="section-header--center fade-in">
            <span className="section-label">My Approach</span>
            <h2>What drives everything I do</h2>
          </div>
          <div className="grid-3">
            {VALUES.map((v, i) => (
              <div className="about-value-card fade-in" key={v.title} style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="about-value-card__icon">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DUAL EXPERTISE */}
      <section className="about-dual section section--sand" id="about-dual">
        <div className="container">
          <div className="section-header--center fade-in">
            <span className="section-label">Dual Expertise</span>
            <h2>Two brands. One creative vision.</h2>
            <p>Rather than choosing between digital strategy and design — I mastered both. Each informs the other, making my work richer and more impactful.</p>
          </div>
          <div className="about-dual__grid">
            <div className="about-dual__card fade-in-left" id="about-nikkytales-card">
              <div className="about-dual__card-img-wrap">
                <img src={nikkytalesHeroImg} alt="NikkyTales Digital Marketing" className="about-dual__card-img" />
              </div>
              <div className="about-dual__card-content">
                <span className="badge badge--digital">Digital Marketing</span>
                <h3>NikkyTales</h3>
                <p>Your brand's digital home — social media management, paid ads, content strategy, and ghostwriting that converts audiences into loyal communities and paying clients.</p>
                <ul className="about-dual__list">
                  {['Content Strategy', 'Social Media Management', 'Meta Ads Campaigns', 'Caption Ghostwriting', 'Analytics & Reporting'].map(item => (
                    <li key={item}><CheckCircle size={14} /> {item}</li>
                  ))}
                </ul>
                <Link to="/nikkytales" className="btn btn-primary" style={{ marginTop: '24px' }} id="about-nikkytales-btn">Explore NikkyTales <ArrowRight size={15} /></Link>
              </div>
            </div>

            <div className="about-dual__card fade-in-right" id="about-bloom-card">
              <div className="about-dual__card-img-wrap">
                <img src={bloomHeroImg} alt="The Bloom Interiors" className="about-dual__card-img" />
              </div>
              <div className="about-dual__card-content">
                <span className="badge">Interior Design</span>
                <h3>The Bloom Interiors</h3>
                <p>Creating beautiful, intentional spaces for residential and commercial clients. Every project begins with your story and ends with a space that truly feels like home.</p>
                <ul className="about-dual__list">
                  {['Residential & Commercial Design', 'Space Planning & Layout', 'Furniture Sourcing', 'Styling & Decor', 'Project Management'].map(item => (
                    <li key={item}><CheckCircle size={14} /> {item}</li>
                  ))}
                </ul>
                <Link to="/bloom-interiors" className="btn btn-primary" style={{ marginTop: '24px' }} id="about-bloom-btn">Explore Bloom Interiors <ArrowRight size={15} /></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="about-timeline section section--cream-light" id="about-timeline">
        <div className="container">
          <div className="section-header--center fade-in">
            <span className="section-label">The Journey</span>
            <h2>Milestones that shaped me</h2>
          </div>
          <div className="about-timeline__track">
            {TIMELINE.map((item, i) => (
              <div className={`about-timeline__item fade-in`} key={item.year} style={{ transitionDelay: `${i * 0.12}s` }}>
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

      {/* CTA */}
      <section className="home-cta" id="about-cta">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ color: 'var(--cream)' }} className="fade-in">Ready to work together?</h2>
          <p style={{ color: 'var(--sand)', maxWidth: '520px', margin: '20px auto 40px' }} className="fade-in">Let's talk about your goals — whether it's growing your brand or designing your dream space.</p>
          <Link to="/contact" className="btn btn-light" id="about-cta-btn">Book a Free Consultation <ArrowRight size={16} /></Link>
        </div>
      </section>
    </main>
  );
}
