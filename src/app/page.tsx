'use client';

import React, { useState } from 'react';

interface EnvironmentItem {
  id: string;
  title: string;
  description: string;
  image: string;
}

const environmentsData: EnvironmentItem[] = [
  {
    id: '01',
    title: 'Border & Perimeter Security',
    description:
      'Persistent monitoring across large, unstructured terrain with minimal human oversight.',
    image: '/assets/env-border.jpg',
  },
  {
    id: '02',
    title: 'Critical Infrastructure',
    description:
      'Airports, power facilities, ports, and transit hubs requiring continuous situational awareness.',
    image: '/assets/env-infrastructure.jpg',
  },
  {
    id: '03',
    title: 'Urban Command & Control',
    description:
      'City-scale camera networks supporting coordinated response and real-time intelligence.',
    image: '/assets/env-urban.jpg',
  },
  {
    id: '04',
    title: 'Industrial & Manufacturing Sites',
    description:
      'High-risk facilities where intrusion, safety, and operational anomalies must be detected early.',
    image: '/assets/env-industrial.jpg',
  },
  {
    id: '05',
    title: 'Defense & Tactical Installations',
    description:
      'Secure deployments operating in disconnected or air-gapped environments.',
    image: '/assets/env-defense.jpg',
  },
  {
    id: '06',
    title: 'Logistics, Ports & Transport Corridors',
    description:
      'Continuous monitoring across large, high-throughput environments with complex movement patterns.',
    image: '/assets/env-logistics.jpg',
  },
];

export default function SentinelHome() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [activeEnvIndex, setActiveEnvIndex] = useState<number>(0);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsSubmitted(false);
  };

  return (
    <div className="site-wrapper">
      {/* SITE HEADER */}
      <header className="site-header">
        <div className="container header-container">
          <a href="#" className="brand-wrapper" aria-label="Sentinel Homepage">
            <img
              src="/assets/sentinel-logo.png"
              alt="Sentinel"
              className="brand-logo-img"
            />
          </a>

          <nav aria-label="Main Navigation">
            <ul className="nav-links">
              <li>
                <a href="#platform" className="nav-link">
                  Platform
                </a>
              </li>
              <li>
                <a href="#capabilities" className="nav-link">
                  Capabilities
                </a>
              </li>
              <li>
                <a href="#experience" className="nav-link">
                  Experience
                </a>
              </li>
              <li>
                <a href="#environments" className="nav-link">
                  Environments
                </a>
              </li>
            </ul>
          </nav>

          <div className="header-actions">
            <button
              className="btn btn-primary header-demo-btn"
              onClick={() => setIsModalOpen(true)}
              id="headerDemoBtn"
            >
              Request a Demo
            </button>

            <button
              className={`mobile-menu-toggle ${isMobileMenuOpen ? 'open' : ''}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="toggle-bar"></span>
              <span className="toggle-bar"></span>
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE NAVIGATION DRAWER */}
      <div 
        className={`mobile-nav-drawer ${isMobileMenuOpen ? 'open' : ''}`} 
        aria-hidden={!isMobileMenuOpen}
      >
        <div className="mobile-nav-content">
          <div className="mobile-nav-meta">
            <span className="tactical-tag">SENTINEL NAVIGATION</span>
            <span className="mono mobile-nav-badge">ONLINE</span>
          </div>

          <ul className="mobile-nav-list">
            <li>
              <a 
                href="#platform" 
                className="mobile-nav-link"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="mobile-link-num">01</span>
                <span className="mobile-link-text">Platform</span>
              </a>
            </li>
            <li>
              <a 
                href="#capabilities" 
                className="mobile-nav-link"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="mobile-link-num">02</span>
                <span className="mobile-link-text">Capabilities</span>
              </a>
            </li>
            <li>
              <a 
                href="#experience" 
                className="mobile-nav-link"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="mobile-link-num">03</span>
                <span className="mobile-link-text">Experience</span>
              </a>
            </li>
            <li>
              <a 
                href="#environments" 
                className="mobile-nav-link"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="mobile-link-num">04</span>
                <span className="mobile-link-text">Environments</span>
              </a>
            </li>
          </ul>

          <div className="mobile-nav-footer">
            <button
              className="btn btn-primary mobile-cta-btn"
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsModalOpen(true);
              }}
            >
              Request a Demo
            </button>

            <div className="mobile-telemetry-meta mono">
              <span>LATENCY: 12ms</span>
              <span>//</span>
              <span>SOVEREIGN ARCHITECTURE</span>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT AREA */}
      <main id="mainContent" style={{ flex: 1 }}>
        {/* BUILT FOR REAL-WORLD ENVIRONMENTS SECTION */}
        <section
          className="environments-section"
          id="environments"
          aria-label="Built for Real-World Environments"
        >
          <div className="container">
            <div className="environments-header">
              <h2 className="environments-title">
                Built for Real-World Environments
              </h2>
              <p className="environments-subtitle">
                Sentinel is deployed in environments where decisions are time-critical, conditions are imperfect, and failure has consequences.
              </p>
            </div>

            <div className="environments-accordion">
              {environmentsData.map((item, index) => {
                const isActive = index === activeEnvIndex;
                return (
                  <div
                    key={item.id}
                    className={`accordion-panel ${isActive ? 'active' : ''}`}
                    onClick={() => setActiveEnvIndex(index)}
                    onMouseEnter={() => setActiveEnvIndex(index)}
                    role="tab"
                    aria-selected={isActive}
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        setActiveEnvIndex(index);
                      }
                    }}
                  >
                    {/* Background photo */}
                    <img
                      src={item.image}
                      alt={item.title}
                      className="accordion-panel-img"
                      loading={index < 2 ? 'eager' : 'lazy'}
                    />
                    <div className="accordion-panel-gradient" />

                    {/* Collapsed title (visible when collapsed) */}
                    <div className="accordion-collapsed-meta">
                      <span className="accordion-collapsed-title">{item.title}</span>
                    </div>

                    {/* Expanded content overlay (visible when active) */}
                    <div className="accordion-expanded-content">
                      <div className="accordion-expanded-bottom">
                        <h3 className="accordion-title">{item.title}</h3>
                        <p className="accordion-desc">{item.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="cta-banner-section" aria-label="Call to Action">
          <div className="container">
            <div className="cta-banner-card">
              {/* Tactical dithered topo background layer */}
              <div className="cta-banner-bg-layer" />
              <div className="cta-banner-halftone-overlay" />

              {/* Corner reticle marker from reference */}
              <div className="cta-banner-corner-reticle" aria-hidden="true">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M0 0H12V12" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
                </svg>
              </div>

              <div className="cta-banner-inner">
                <h2 className="cta-banner-heading">
                  See Sentinel in action
                </h2>

                <p className="cta-banner-subtext">
                  Tell us about your security environment, camera infrastructure or video intelligence requirements. Our team will get back to you to arrange a conversation.
                </p>

                <div className="cta-banner-action">
                  <button
                    className="btn btn-primary cta-banner-btn"
                    onClick={() => setIsModalOpen(true)}
                    id="ctaContactBtn"
                  >
                    Request a Demo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* SITE FOOTER */}
      <footer className="site-footer">
        <div className="container">
          <div className="footer-top-row">
            <div className="footer-brand-block">
              <img
                src="/assets/sentinel-logo.png"
                alt="Sentinel"
                className="brand-logo-img"
              />
              <p className="footer-desc">
                AI Video Intelligence for environments where visibility matters.
              </p>
            </div>

            <div className="footer-meta-stack">
              <div className="footer-meta-line">
                <span className="footer-tag-label">Contact</span>
                <a
                  href="mailto:sentinel@bluevalegrp.com"
                  className="footer-link-val"
                >
                  sentinel@bluevalegrp.com
                </a>
              </div>

              <div className="footer-meta-line">
                <span className="footer-tag-label">Developed by</span>
                <a
                  href="https://www.bluevalegrp.com/defence"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link-val"
                >
                  Bluevale Defence
                </a>
              </div>
            </div>
          </div>

          <div className="footer-bottom-row">
            <span className="footer-copyright">
              &copy; 2026 Bluevale Defence. All rights reserved.
            </span>
          </div>
        </div>
      </footer>

      {/* REQUEST A DEMO MODAL OVERLAY */}
      {isModalOpen && (
        <div
          className="modal-backdrop"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modalTitle"
        >
          <div
            className="demo-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <span className="modal-title" id="modalTitle">
                Sentinel Briefing // Request a Demo
              </span>
              <button
                className="modal-close-btn"
                onClick={closeModal}
                aria-label="Close dialog"
              >
                ✕
              </button>
            </div>

            <div className="modal-body">
              {!isSubmitted ? (
                <>
                  <p className="modal-instruction">
                    Tell us about your security environment, camera infrastructure or video intelligence requirements. Our technical team will get back to you to arrange a demonstration.
                  </p>

                  <form onSubmit={handleFormSubmit}>
                    <div className="form-group">
                      <label htmlFor="fullName" className="form-label">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        className="form-input"
                        placeholder="Operator or Director Name"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="workEmail" className="form-label">
                        Work / Agency Email *
                      </label>
                      <input
                        type="email"
                        id="workEmail"
                        className="form-input"
                        placeholder="name@organization.gov or .com"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="orgName" className="form-label">
                        Organization / Agency *
                      </label>
                      <input
                        type="text"
                        id="orgName"
                        className="form-input"
                        placeholder="e.g. Defence Agency, Port Authority, Facility Ops"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="cameraCount" className="form-label">
                        Camera Infrastructure Scale
                      </label>
                      <select id="cameraCount" className="form-select">
                        <option value="50-200">50 - 200 Camera Streams</option>
                        <option value="200-1000">200 - 1,000 Camera Streams</option>
                        <option value="1000+">
                          1,000+ Enterprise / Multi-Site Streams
                        </option>
                        <option value="eval">Evaluating New Infrastructure Setup</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="envType" className="form-label">
                        Primary Environment
                      </label>
                      <select id="envType" className="form-select">
                        <option value="defence">Defence / Military Installation</option>
                        <option value="infrastructure">
                          Critical Infrastructure / Energy
                        </option>
                        <option value="industrial">Industrial Facilities &amp; Yards</option>
                        <option value="government">
                          Government / Municipal Facilities
                        </option>
                        <option value="commercial">Enterprise / Commercial Security</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="requirements" className="form-label">
                        Intelligence Requirements / Notes
                      </label>
                      <textarea
                        id="requirements"
                        className="form-textarea"
                        placeholder="Describe your current challenge (e.g. incident search times, anomaly monitoring, perimeter access)..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="btn btn-primary form-submit-btn"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        'TRANSMITTING BRIEFING REQUEST...'
                      ) : (
                        'Submit Demo Request'
                      )}
                    </button>
                  </form>
                </>
              ) : (
                <div className="form-success-state">
                  <div className="success-icon">✓</div>
                  <h3 className="success-title">Request Transmitted</h3>
                  <p className="success-desc">
                    Your inquiry has been routed to the Bluevale Defence systems team. We will review your infrastructure requirements and contact you within 24 hours.
                  </p>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={closeModal}
                    style={{ marginTop: '1.5rem' }}
                  >
                    Close Window
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
