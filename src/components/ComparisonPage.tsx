'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { CountrySelector } from './CountrySelector';

export interface ComparisonMatrixItem {
  feature: string;
  sentinel: string;
  competitor: string;
}

export interface KeyDifferenceItem {
  number: string;
  title: string;
  sentinelApproach: string;
  competitorApproach: string;
}

export interface ComparisonFAQ {
  question: string;
  answer: string;
}

export interface ComparisonPageProps {
  competitorName: string;
  competitorTagline: string;
  heroTitle: string;
  heroSubtitle: string;
  heroHighlight: string;
  matrix: ComparisonMatrixItem[];
  keyDifferences: KeyDifferenceItem[];
  faqs: ComparisonFAQ[];
}

export function ComparisonPage({
  competitorName,
  competitorTagline,
  heroTitle,
  heroSubtitle,
  heroHighlight,
  matrix,
  keyDifferences,
  faqs,
}: ComparisonPageProps) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    orgName: '',
    country: '',
    envType: '',
    cameraCount: '',
    requirements: '',
  });

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          source: `Comparison Page — Sentinel vs ${competitorName}`,
        }),
      });

      if (!res.ok) {
        throw new Error('Failed to send request. Please try again.');
      }

      setIsSubmitted(true);
    } catch (err: unknown) {
      setSubmitError(err instanceof Error ? err.message : 'An error occurred.');
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
    <div className="compare-page-wrapper">
      {/* HEADER */}
      <header className="site-header">
        <div className="container header-container">
          <Link href="/" className="brand-logo" aria-label="Sentinel Home">
            <img
              src="/assets/sentinel-logo.png"
              alt="Sentinel Logo"
              className="brand-logo-img"
            />
          </Link>

          <nav className="site-nav" aria-label="Comparison Navigation">
            <ul className="nav-links">
              <li>
                <Link href="/#capabilities" className="nav-link">
                  Capabilities
                </Link>
              </li>
              <li>
                <Link href="/#deployment" className="nav-link">
                  Deployment
                </Link>
              </li>
              <li>
                <Link href="/#environments" className="nav-link">
                  Environments
                </Link>
              </li>
            </ul>
          </nav>

          <div className="header-actions">
            <button
              className="btn btn-primary header-demo-btn"
              onClick={() => setIsModalOpen(true)}
            >
              Request a Demo
            </button>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="compare-main">
        {/* HERO SECTION */}
        <section className="compare-hero-section">
          <div className="container">
            <div className="compare-hero-badge mono">
              <span>PLATFORM COMPARISON</span>
              <span className="badge-divider">//</span>
              <span>SENTINEL VS {competitorName.toUpperCase()}</span>
            </div>

            <h1 className="compare-hero-title">{heroTitle}</h1>
            <p className="compare-hero-subtitle">{heroSubtitle}</p>

            <div className="compare-hero-callout">
              <span className="callout-label mono">THE CORE ADVANTAGE</span>
              <p className="callout-text">{heroHighlight}</p>
            </div>

            <div className="compare-cta-row">
              <button
                className="btn btn-primary btn-lg"
                onClick={() => setIsModalOpen(true)}
              >
                Schedule an On-Premise Evaluation
              </button>
              <Link href="/#platform" className="btn btn-secondary btn-lg">
                View Sentinel Live Demo
              </Link>
            </div>
          </div>
        </section>

        {/* COMPARISON MATRIX SECTION */}
        <section className="compare-matrix-section">
          <div className="container">
            <div className="compare-section-header">
              <span className="section-label mono">01 // DIRECT CAPABILITY BREAKDOWN</span>
              <h2 className="compare-section-title">
                Sentinel vs {competitorName} at a Glance
              </h2>
              <p className="compare-section-desc">
                Architectural comparison for defense, homeland security, and mission-critical enterprise teams.
              </p>
            </div>

            <div className="matrix-table-card">
              <div className="matrix-table-wrapper">
                <table className="matrix-table">
                  <thead>
                    <tr>
                      <th className="th-feature">Capability</th>
                      <th className="th-sentinel">
                        <span className="brand-pill sentinel-pill">SENTINEL</span>
                      </th>
                      <th className="th-competitor">
                        <span className="brand-pill competitor-pill">{competitorName.toUpperCase()}</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {matrix.map((row, index) => (
                      <tr key={index} className="matrix-row">
                        <td className="td-feature font-medium">{row.feature}</td>
                        <td className="td-sentinel">
                          <span className="sentinel-badge">✓</span>
                          <span>{row.sentinel}</span>
                        </td>
                        <td className="td-competitor">
                          <span className="competitor-badge">✕</span>
                          <span>{row.competitor}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* KEY ARCHITECTURAL DIFFERENCES */}
        <section className="compare-diff-section">
          <div className="container">
            <div className="compare-section-header">
              <span className="section-label mono">02 // ARCHITECTURAL ADVANTAGE</span>
              <h2 className="compare-section-title">
                Why Operators Are Migrating from {competitorName} to Sentinel
              </h2>
            </div>

            <div className="diff-grid">
              {keyDifferences.map((diff, index) => (
                <div className="diff-card" key={index}>
                  <div className="diff-card-header">
                    <span className="diff-card-num mono">{diff.number}</span>
                    <h3 className="diff-card-title">{diff.title}</h3>
                  </div>

                  <div className="diff-contrast-block">
                    <div className="contrast-side sentinel-side">
                      <span className="contrast-label mono">SENTINEL</span>
                      <p className="contrast-body">{diff.sentinelApproach}</p>
                    </div>
                    <div className="contrast-side competitor-side">
                      <span className="contrast-label mono">{competitorName.toUpperCase()}</span>
                      <p className="contrast-body">{diff.competitorApproach}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="compare-faq-section">
          <div className="container">
            <div className="compare-section-header">
              <span className="section-label mono">03 // FREQUENTLY ASKED QUESTIONS</span>
              <h2 className="compare-section-title">
                Frequently Asked Questions: Sentinel vs {competitorName}
              </h2>
            </div>

            <div className="compare-faq-list">
              {faqs.map((faq, index) => (
                <div className="compare-faq-item" key={index}>
                  <h3 className="compare-faq-q">{faq.question}</h3>
                  <p className="compare-faq-a">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BOTTOM CTA BANNER */}
        <section className="compare-bottom-cta">
          <div className="container">
            <div className="compare-cta-card">
              <h2 className="compare-cta-title">
                Ready to evaluate Sentinel on your camera streams?
              </h2>
              <p className="compare-cta-desc">
                Deploy Sentinel on a 30-day sovereign on-premise pilot. Connect up to 50 existing RTSP feeds with zero hardware lock-in.
              </p>
              <button
                className="btn btn-primary btn-lg"
                onClick={() => setIsModalOpen(true)}
              >
                Request 30-Day Evaluation
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
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

            <div className="footer-links-col">
              <span className="footer-tag-label">Comparisons</span>
              <div className="footer-col-links">
                <Link href="/compare/briefcam" className="footer-link-subtle">
                  Sentinel vs BriefCam
                </Link>
                <Link href="/compare/verkada" className="footer-link-subtle">
                  Sentinel vs Verkada
                </Link>
                <Link href="/compare/avigilon" className="footer-link-subtle">
                  Sentinel vs Avigilon
                </Link>
              </div>
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

      {/* MODAL OVERLAY */}
      {isModalOpen && (
        <div
          className="modal-backdrop"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
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
                  <h2 className="modal-title">Contact Sentinel</h2>
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
                          <option value="Defence / Military Installation">
                            Defence / Military Installation
                          </option>
                          <option value="Critical Infrastructure / Energy">
                            Critical Infrastructure / Energy
                          </option>
                          <option value="Industrial Facilities / Yards">
                            Industrial Facilities / Yards
                          </option>
                          <option value="Government / Public Facilities">
                            Government / Public Facilities
                          </option>
                          <option value="Enterprise / Commercial Security">
                            Enterprise / Commercial Security
                          </option>
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
                          <option value="50–200 Camera Streams">
                            50–200 Camera Streams
                          </option>
                          <option value="200–1,000 Camera Streams">
                            200–1,000 Camera Streams
                          </option>
                          <option value="1,000+ Camera Streams">
                            1,000+ Camera Streams
                          </option>
                          <option value="Evaluating New Infrastructure">
                            Evaluating New Infrastructure
                          </option>
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
                      {isSubmitting ? 'SENDING MESSAGE...' : 'SEND MESSAGE'}
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
