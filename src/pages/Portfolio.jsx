import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { X, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import '../styles/portfolio.css';

function useScrollFade() {
  useEffect(() => {
    const els = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right');
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } }),
      { threshold: 0.08 }
    );
    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

const INTERIOR_JOBS = [
  {
    id: 'bungalow',
    title: '4-Bedroom Bungalow Interior',
    subtitle: 'Scratch to Finish',
    desc: 'A complete interior styling and execution for a spacious 4-bedroom bungalow. We took this home from bare construction to a fully finished, cohesive sanctuary. Our team handled space planning, designed custom carpentry, selected a warm organic color palette, and curated premium furnishings to create a warm, luxurious modern home.',
    imageCount: 10,
    folder: 'bungalow',
  },
  {
    id: 'flat',
    title: '2-Bedroom Flat Redesign',
    subtitle: 'Living Room & Master Bedroom',
    desc: 'A focused redesign of the main living space and master bedroom. We revamped the layout to maximize flow and natural light, introduced a serene neutral color palette, selected contemporary furniture, and added soft textures and lighting to create an intimate, elegant retreat.',
    imageCount: 10,
    folder: 'flat',
  },
  {
    id: 'hairstore',
    title: 'Hair Store Renovation',
    subtitle: 'Renovation & Furnishing',
    desc: 'A full commercial renovation and furnishing project for a boutique hair store. We transformed the retail outlet by designing customized product display shelves, installing a premium styling station, setting up atmospheric task lighting, and curating elegant seating to elevate the customer experience.',
    imageCount: 5,
    folder: 'hairstore',
  },
  {
    id: 'studio',
    title: 'Studio Apartment Optimization',
    subtitle: 'Space Maximization',
    desc: 'Space-maximizing design for a compact studio apartment. We designed multi-functional zones for living, sleeping, and working, using smart custom storage, modular furniture, and a bright color scheme to make the space feel open, airy, and highly functional.',
    imageCount: 5,
    folder: 'studio',
  },
];

export default function Portfolio() {
  useScrollFade();
  const [lightbox, setLightbox] = useState({ isOpen: false, jobIndex: 0, imgIndex: 1 });

  // Handle body overflow when lightbox is open
  useEffect(() => {
    if (lightbox.isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [lightbox.isOpen]);

  // Functions declared as standard hoisted functions to satisfy ESLint
  function openLightbox(jobIndex, imgIndex) {
    setLightbox({ isOpen: true, jobIndex, imgIndex });
  }

  function closeLightbox() {
    setLightbox(prev => ({ ...prev, isOpen: false }));
  }

  function prevImage() {
    setLightbox((prev) => {
      const job = INTERIOR_JOBS[prev.jobIndex];
      const newImgIndex = prev.imgIndex === 1 ? job.imageCount : prev.imgIndex - 1;
      return { ...prev, imgIndex: newImgIndex };
    });
  }

  function nextImage() {
    setLightbox((prev) => {
      const job = INTERIOR_JOBS[prev.jobIndex];
      const newImgIndex = prev.imgIndex === job.imageCount ? 1 : prev.imgIndex + 1;
      return { ...prev, imgIndex: newImgIndex };
    });
  }

  // Handle keyboard navigation for lightbox
  useEffect(() => {
    if (!lightbox.isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightbox.isOpen]);

  return (
    <main style={{ background: 'var(--cream)' }}>
      {/* HERO */}
      <section className="pf-hero" id="portfolio-hero">
        <div className="container">
          <div className="pf-hero__content fade-in">
            <h1>Work that tells a story<br />and delivers <em>results.</em></h1>
            <p>A gallery of residential and commercial spaces we have revamped, elevated, and designed with purpose.</p>
          </div>
        </div>
      </section>

      {/* PORTFOLIO GALLERIES */}
      <section className="pf-main section" id="portfolio-main" style={{ padding: '60px 0 100px' }}>
        <div className="container">
          <div className="pf-jobs-list">
            {INTERIOR_JOBS.map((job, jobIndex) => (
              <div className="pf-job-section fade-in" key={job.id} id={`job-${job.id}`}>
                <div className="pf-job-header">
                  <div className="pf-job-meta">
                    <span className="pf-job-badge">{job.subtitle}</span>
                    <h2 className="pf-job-title">{job.title}</h2>
                  </div>
                  <p className="pf-job-desc">{job.desc}</p>
                </div>

                <div className="pf-gallery-grid">
                  {[...Array(job.imageCount)].map((_, idx) => {
                    const imgNum = idx + 1;
                    const imgUrl = `/images/portfolio/${job.folder}/img_${imgNum}.png`;
                    return (
                      <div
                        className="pf-gallery-item"
                        key={imgNum}
                        onClick={() => openLightbox(jobIndex, imgNum)}
                      >
                        <img
                          src={imgUrl}
                          alt={`${job.title} - View ${imgNum}`}
                          className="pf-gallery-img"
                          loading="lazy"
                        />
                        <div className="pf-gallery-overlay">
                          <span>View Image</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      {lightbox.isOpen && (
        <div className="pf-lightbox" onClick={closeLightbox}>
          <button className="pf-lightbox__close" onClick={closeLightbox} aria-label="Close Lightbox">
            <X size={24} />
          </button>
          
          <button 
            className="pf-lightbox__arrow pf-lightbox__arrow--prev" 
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            aria-label="Previous Image"
          >
            <ChevronLeft size={30} />
          </button>

          <div className="pf-lightbox__content" onClick={(e) => e.stopPropagation()}>
            <img
              src={`/images/portfolio/${INTERIOR_JOBS[lightbox.jobIndex].folder}/img_${lightbox.imgIndex}.png`}
              alt={`${INTERIOR_JOBS[lightbox.jobIndex].title} - ${lightbox.imgIndex}`}
              className="pf-lightbox__img"
            />
            <div className="pf-lightbox__caption">
              <h3>{INTERIOR_JOBS[lightbox.jobIndex].title}</h3>
              <p>Image {lightbox.imgIndex} of {INTERIOR_JOBS[lightbox.jobIndex].imageCount}</p>
            </div>
          </div>

          <button 
            className="pf-lightbox__arrow pf-lightbox__arrow--next" 
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            aria-label="Next Image"
          >
            <ChevronRight size={30} />
          </button>
        </div>
      )}

      {/* CTA */}
      <section className="home-cta" id="portfolio-cta">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="fade-in" style={{ color: 'var(--cream)' }}>Want results like these?</h2>
          <p className="fade-in" style={{ color: 'var(--sand)', maxWidth: '520px', margin: '20px auto 40px' }}>Let's talk about your space, and how we can elevate it together.</p>
          <Link to="/contact" className="btn btn-light" id="portfolio-cta-btn">Start a Project <ArrowRight size={16} /></Link>
        </div>
      </section>
    </main>
  );
}
