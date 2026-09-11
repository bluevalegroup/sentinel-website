'use client';

import React, { useState, useEffect } from 'react';
import { CountrySelector } from '@/components/CountrySelector';
import {
  WireframePlanes,
  WireframeContour,
  WireframeCapsule,
} from '@/components/WireframeGraphics';

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

interface PillarItem {
  id: string;
  title: string;
  description: string;
  graphic: 'planes' | 'contour' | 'capsule';
}

const pillarsData: PillarItem[] = [
  {
    id: 'awareness',
    title: 'Active Awareness',
    description:
      'Continuously analyze camera feeds to detect people, vehicles, objects and events across your environment.',
    graphic: 'planes',
  },
  {
    id: 'search',
    title: 'Semantic Search',
    description:
      'Describe a person, vehicle or event in natural language and find relevant footage across your camera network.',
    graphic: 'contour',
  },
  {
    id: 'shield',
    title: 'Sovereign Deployment',
    description:
      'Deploy Sentinel in isolated or air-gapped environments, keeping sensitive video and intelligence within your infrastructure.',
    graphic: 'capsule',
  },
];

const SEARCH_COMMANDS = [
  'a person passing a bag to another person',
  'a person in a red jacket',
  'someone carrying a backpack',
  'two people walking together',
  'a white delivery van',
];

export default function SentinelHome() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [activeEnvIndex, setActiveEnvIndex] = useState<number>(0);

  // Form submission state
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    orgName: '',
    country: '',
    envType: '',
    cameraCount: '',
    requirements: '',
  });
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Typewriter animation state for hero natural language search
  const [currentText, setCurrentText] = useState<string>('');
  const [commandIndex, setCommandIndex] = useState<number>(0);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  useEffect(() => {
    const fullText = SEARCH_COMMANDS[commandIndex];
    let timer: NodeJS.Timeout;

    if (!isDeleting) {
      if (currentText.length < fullText.length) {
        timer = setTimeout(() => {
          setCurrentText(fullText.slice(0, currentText.length + 1));
        }, 65);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2400);
      }
    } else {
      if (currentText.length > 0) {
        timer = setTimeout(() => {
          setCurrentText(fullText.slice(0, currentText.length - 1));
        }, 30);
      } else {
        setIsDeleting(false);
        setCommandIndex((prev) => (prev + 1) % SEARCH_COMMANDS.length);
      }
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, commandIndex]);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok || data.error) {
        throw new Error(data.error || 'Failed to transmit demo briefing request.');
      }

      setIsSubmitted(true);
    } catch (err: unknown) {
      console.error('Demo briefing submission failed:', err);
      setSubmitError(
        err instanceof Error ? err.message : 'Transmission error. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsSubmitted(false);
    setSubmitError(null);
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
                <a href="#capabilities" className="nav-link">
                  Capabilities
                </a>
              </li>
              <li>
                <a href="#deployment" className="nav-link">
                  Deployment
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
          <ul className="mobile-nav-list">
            <li>
              <a 
                href="#capabilities" 
                className="mobile-nav-link"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="mobile-link-text">Capabilities</span>
              </a>
            </li>
            <li>
              <a 
                href="#deployment" 
                className="mobile-nav-link"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="mobile-link-text">Deployment</span>
              </a>
            </li>
            <li>
              <a 
                href="#environments" 
                className="mobile-nav-link"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="mobile-link-text">Environments</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* MAIN CONTENT AREA */}
      <main id="mainContent" style={{ flex: 1 }}>
        {/* ===================================================================
             01 — HERO SECTION (Platform Dashboard Background)
             =================================================================== */}
        <section className="hero-section" id="platform" aria-label="Platform Hero">
          <div className="container">
            <div className="hero-content">
              <h1 className="hero-title">
                <span className="hero-line">Your cameras see everything.</span>
                <span className="hero-line">Sentinel finds what matters.</span>
              </h1>
              <p className="hero-description">
                Search, understand and investigate video across your camera network{' '}
                <br className="desc-br" />
                using natural language.
              </p>

              {/* Natural Language Search Input Demonstration */}
              <div className="hero-search-bar" aria-label="Natural Language Video Search Demo">
                <span className="hero-search-text">
                  {currentText}
                  <span className="hero-search-cursor">|</span>
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
             CORE CAPABILITIES / PILLARS SECTION (Built for the mission)
             3 Clean Minimalist Architectural Cards on Light Cream Canvas, 100% Sora
             =================================================================== */}
        <section
          className="pillars-section"
          id="capabilities"
          aria-label="Core Capabilities"
        >
          <div className="container">
            <div className="pillars-header">
              <h2 className="pillars-main-title">Built for the mission</h2>
              <p className="pillars-main-subtitle">
                Sentinel is designed for the environments where visibility, speed and control matter most.
              </p>
            </div>

            <div className="pillars-grid">
              {pillarsData.map((pillar) => (
                <div className="pillar-card" key={pillar.id}>
                  <div className="pillar-graphic-box" aria-hidden="true">
                    {pillar.graphic === 'planes' && <WireframePlanes />}
                    {pillar.graphic === 'contour' && <WireframeContour />}
                    {pillar.graphic === 'capsule' && <WireframeCapsule />}
                  </div>

                  <h3 className="pillar-title">{pillar.title}</h3>
                  <p className="pillar-desc">{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===================================================================
             DEMANDING ENVIRONMENTS SECTION (Deployment Specs)
             =================================================================== */}
        <section
          className="architecture-section"
          id="deployment"
          aria-label="Built for Demanding Environments"
        >
          <div className="container">
            <div className="architecture-card">
              {/* Left Column: Dossier Header, Description & Stacks */}
              <div className="architecture-main">
                <h2 className="architecture-title">
                  Built for demanding environments
                </h2>

                <p className="architecture-desc">
                  Sentinel is designed for deployment across complex security environments, from individual sites to distributed camera networks. Its architecture supports local and private deployments while keeping video intelligence within the environment where it is needed.
                </p>

                <div className="architecture-stacks-grid">
                  {/* AI Model Stack */}
                  <div className="architecture-stack-col stack-ai">
                    <h3 className="architecture-stack-heading">
                      <span className="stack-heading-indicator" />
                      <span>AI MODEL STACK</span>
                    </h3>
                    <ul className="architecture-stack-list">
                      <li>
                        <span className="stack-bullet" />
                        <span>Vision-Language Models</span>
                      </li>
                      <li>
                        <span className="stack-bullet" />
                        <span>Temporal Video Understanding</span>
                      </li>
                      <li>
                        <span className="stack-bullet" />
                        <span>Semantic Video Search</span>
                      </li>
                    </ul>
                  </div>

                  {/* Security */}
                  <div className="architecture-stack-col stack-security">
                    <h3 className="architecture-stack-heading">
                      <span className="stack-heading-indicator" />
                      <span>SECURITY</span>
                    </h3>
                    <ul className="architecture-stack-list">
                      <li>
                        <span className="stack-bullet" />
                        <span>Encrypted Data</span>
                      </li>
                      <li>
                        <span className="stack-bullet" />
                        <span>Secure Access Controls</span>
                      </li>
                      <li>
                        <span className="stack-bullet" />
                        <span>Isolated Deployment Options</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Right Column: Internal Deployment Specs Dossier Card */}
              <div className="architecture-dossier-wrapper">
                <div className="architecture-dossier-card">
                  <div className="dossier-card-header">
                    <div className="dossier-icon-box" aria-hidden="true">
                      <svg
                        width="17"
                        height="17"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="2" y="4" width="20" height="6" rx="2" />
                        <rect x="2" y="14" width="20" height="6" rx="2" />
                        <line x1="6" y1="7" x2="6.01" y2="7" />
                        <line x1="6" y1="17" x2="6.01" y2="17" />
                      </svg>
                    </div>
                    <h3 className="dossier-card-title">Deployment Options</h3>
                  </div>

                  <div className="dossier-specs-list">
                    <div className="dossier-spec-row">
                      <span className="dossier-spec-label">INFERENCE</span>
                      <span className="dossier-spec-value">Edge / Private Infrastructure</span>
                    </div>

                    <div className="dossier-spec-row">
                      <span className="dossier-spec-label">NETWORK</span>
                      <span className="dossier-spec-value">Connected or Isolated</span>
                    </div>

                    <div className="dossier-spec-row">
                      <span className="dossier-spec-label">DEPLOYMENT</span>
                      <span className="dossier-spec-value">Single Site / Multi-Site</span>
                    </div>

                    <div className="dossier-spec-row">
                      <span className="dossier-spec-label">VIDEO DATA</span>
                      <span className="dossier-spec-value">On-Premise / Private Environment</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BUILT FOR REAL-WORLD ENVIRONMENTS SECTION */}
        <section
          className="environments-section"
          id="environments"
          aria-label="Built for real-world environments"
        >
          <div className="container">
            <div className="environments-header">
              <h2 className="environments-title">
                Built for real-world environments
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

            {/* Interactive Navigation Controls (Arrows Only) */}
            <div className="environments-nav-controls">
              <button
                type="button"
                className="env-arrow-btn"
                onClick={() =>
                  setActiveEnvIndex(
                    (prev) => (prev - 1 + environmentsData.length) % environmentsData.length
                  )
                }
                aria-label="Previous environment"
                title="Previous environment"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>

              <button
                type="button"
                className="env-arrow-btn"
                onClick={() =>
                  setActiveEnvIndex((prev) => (prev + 1) % environmentsData.length)
                }
                aria-label="Next environment"
                title="Next environment"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
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
                  Tell us about your security environment, camera infrastructure or video intelligence requirements. We’ll get back to you to arrange a conversation.
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
            <button
              className="modal-close-btn"
              onClick={closeModal}
              aria-label="Close dialog"
            >
              ✕
            </button>

            {!isSubmitted ? (
              <>
                <div className="modal-header-centered">
                  <h2 className="modal-title" id="modalTitle">
                    Contact Sentinel
                  </h2>
                  <p className="modal-instruction">
                    Reach out to discuss your security environment and see Sentinel in action.
                  </p>
                </div>

                <div className="modal-body">
                  <form onSubmit={handleFormSubmit} className="demo-form">
                    {submitError && (
                      <div
                        style={{
                          background: '#fef2f2',
                          border: '1px solid #fecaca',
                          color: '#b91c1c',
                          padding: '0.75rem 1rem',
                          borderRadius: '10px',
                          fontSize: '0.85rem',
                          marginBottom: '1.25rem',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                        }}
                      >
                        <span style={{ fontSize: '1rem' }}>⚠</span>
                        <span>{submitError}</span>
                      </div>
                    )}

                    <div className="form-grid">
                      <div className="form-group">
                        <label htmlFor="fullName" className="form-label">
                          FULL NAME <span className="required-asterisk">*</span>
                        </label>
                        <input
                          type="text"
                          id="fullName"
                          className="form-input"
                          placeholder="Your name"
                          required
                          value={formData.fullName}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              fullName: e.target.value,
                            }))
                          }
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="workEmail" className="form-label">
                          EMAIL <span className="required-asterisk">*</span>
                        </label>
                        <input
                          type="email"
                          id="workEmail"
                          className="form-input"
                          placeholder="name@company.com"
                          required
                          value={formData.workEmail}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              workEmail: e.target.value,
                            }))
                          }
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="orgName" className="form-label">
                          COMPANY <span className="required-asterisk">*</span>
                        </label>
                        <input
                          type="text"
                          id="orgName"
                          className="form-input"
                          placeholder="Company name"
                          required
                          value={formData.orgName}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              orgName: e.target.value,
                            }))
                          }
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="country" className="form-label">
                          COUNTRY <span className="required-asterisk">*</span>
                        </label>
                        <CountrySelector
                          value={formData.country}
                          onChange={(c) =>
                            setFormData((prev) => ({
                              ...prev,
                              country: c,
                            }))
                          }
                          required
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="envType" className="form-label">
                          PRIMARY ENVIRONMENT
                        </label>
                        <select
                          id="envType"
                          className="form-select"
                          value={formData.envType}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              envType: e.target.value,
                            }))
                          }
                        >
                          <option value="">Select environment</option>
                          <option value="Defence / Military Installation">Defence / Military Installation</option>
                          <option value="Critical Infrastructure / Energy">Critical Infrastructure / Energy</option>
                          <option value="Industrial Facilities / Yards">Industrial Facilities / Yards</option>
                          <option value="Government / Public Facilities">Government / Public Facilities</option>
                          <option value="Enterprise / Commercial Security">Enterprise / Commercial Security</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label htmlFor="cameraCount" className="form-label">
                          CAMERA INFRASTRUCTURE SCALE
                        </label>
                        <select
                          id="cameraCount"
                          className="form-select"
                          value={formData.cameraCount}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              cameraCount: e.target.value,
                            }))
                          }
                        >
                          <option value="">Select camera scale</option>
                          <option value="50–200 Camera Streams">50–200 Camera Streams</option>
                          <option value="200–1,000 Camera Streams">200–1,000 Camera Streams</option>
                          <option value="1,000+ Camera Streams">1,000+ Camera Streams</option>
                          <option value="Evaluating New Infrastructure">Evaluating New Infrastructure</option>
                        </select>
                      </div>

                      <div className="form-group form-group-full">
                        <label htmlFor="requirements" className="form-label">
                          MESSAGE
                        </label>
                        <textarea
                          id="requirements"
                          className="form-textarea"
                          rows={3}
                          placeholder="Tell us about your security environment and what you'd like to see in a demonstration."
                          value={formData.requirements}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              requirements: e.target.value,
                            }))
                          }
                        ></textarea>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="btn btn-primary form-submit-btn"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        'SENDING MESSAGE...'
                      ) : (
                        'SEND MESSAGE'
                      )}
                    </button>
                  </form>
                </div>
              </>
            ) : (
              <div className="form-success-state">
                <h2 className="modal-title" style={{ marginBottom: '0.85rem' }}>
                  Message Received
                </h2>
                <p className="modal-instruction" style={{ maxWidth: '440px', lineHeight: 1.6 }}>
                  Thank you for reaching out. We’ve received your enquiry and our team will review it and get back to you shortly.
                </p>
                <button
                  type="button"
                  className="modal-btn-close"
                  onClick={closeModal}
                  style={{ marginTop: '2rem' }}
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
