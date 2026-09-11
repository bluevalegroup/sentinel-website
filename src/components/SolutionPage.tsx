'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { CountrySelector } from './CountrySelector';

export interface ChallengeItem {
  title: string;
  desc: string;
}

export interface CapabilityItem {
  number: string;
  title: string;
  desc: string;
  metric: string;
}

export interface ArchSpecItem {
  label: string;
  value: string;
}

export interface SolutionFAQ {
  question: string;
  answer: string;
}

export interface SolutionPageProps {
  badgeLabel: string;
  solutionTitle: string;
  solutionSubtitle: string;
  targetQueryHighlight: string;
  challenges: ChallengeItem[];
  capabilities: CapabilityItem[];
  specs: ArchSpecItem[];
  faqs: SolutionFAQ[];
}

export function SolutionPage({
  badgeLabel,
  solutionTitle,
  solutionSubtitle,
  targetQueryHighlight,
  challenges,
  capabilities,
  specs,
  faqs,
}: SolutionPageProps) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    orgName: '',
    country: '',
    envType: solutionTitle,
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
          source: `Solution Page — ${solutionTitle}`,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to submit demonstration request');
      }

      setIsSubmitted(true);
    } catch (err: unknown) {
      const errorMsg =
        err instanceof Error ? err.message : 'An unexpected error occurred';
      setSubmitError(errorMsg);
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
    <div className="solution-page-wrapper">
      {/* HEADER */}
      <header className="compare-header">
        <div className="container header-container">
          <Link href="/" className="brand-logo" aria-label="Sentinel Homepage">
            <img
              src="/assets/sentinel-logo.png"
              alt="Sentinel"
              className="brand-logo-img"
            />
          </Link>

          <div className="header-actions">
            <button
              className="btn btn-primary header-demo-btn"
              onClick={() => setIsModalOpen(true)}
            >
              Request Briefing
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="solution-hero-section">
        <div className="container">
          <div className="compare-hero-badge mono">
            <span>MISSION SOLUTION</span>
            <span className="badge-divider">//</span>
            <span>{badgeLabel.toUpperCase()}</span>
          </div>

          <h1 className="solution-hero-title">{solutionTitle}</h1>
          <p className="solution-hero-subtitle">{solutionSubtitle}</p>

          <div className="compare-hero-callout">
            <span className="callout-label mono">OPERATIONAL DOCTRINE</span>
            <p className="callout-text">{targetQueryHighlight}</p>
          </div>

          <div className="compare-cta-row">
            <button
              className="btn btn-primary btn-lg"
              onClick={() => setIsModalOpen(true)}
            >
              Request Operational Briefing
            </button>
            <Link href="/pilot" className="btn btn-secondary btn-lg">
              Explore 48-Hour Pilot
            </Link>
          </div>
        </div>
      </section>

      {/* OPERATIONAL CHALLENGES */}
      <section className="solution-challenges-section">
        <div className="container">
          <div className="compare-section-header">
            <span className="section-label mono">01 // THE SURVEILLANCE GAP</span>
            <h2 className="compare-section-title">Critical Operational Challenges</h2>
          </div>

          <div className="solution-challenges-grid">
            {challenges.map((ch, idx) => (
              <div className="challenge-card" key={idx}>
                <div className="challenge-index mono">0{idx + 1}</div>
                <h3 className="challenge-title">{ch.title}</h3>
                <p className="challenge-desc">{ch.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SENTINEL CAPABILITIES */}
      <section className="solution-capabilities-section">
        <div className="container">
          <div className="compare-section-header">
            <span className="section-label mono">02 // ARCHITECTURAL ADVANTAGE</span>
            <h2 className="compare-section-title">Engineered for Sovereign Edge Superiority</h2>
          </div>

          <div className="solution-capabilities-grid">
            {capabilities.map((cap, idx) => (
              <div className="solution-cap-card" key={idx}>
                <div className="cap-metric-tag mono">{cap.metric}</div>
                <h3 className="cap-title">{cap.title}</h3>
                <p className="cap-desc">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ARCHITECTURE & SPECS */}
      <section className="solution-specs-section">
        <div className="container">
          <div className="compare-section-header">
            <span className="section-label mono">03 // DEPLOYMENT DOSSIER</span>
            <h2 className="compare-section-title">Technical Specifications</h2>
          </div>

          <div className="solution-specs-grid">
            {specs.map((item, idx) => (
              <div className="solution-spec-box" key={idx}>
                <span className="spec-label mono">{item.label}</span>
                <span className="spec-value">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNICAL FAQS */}
      <section className="compare-faq-section">
        <div className="container">
          <div className="compare-section-header">
            <span className="section-label mono">04 // FREQUENTLY ASKED QUESTIONS</span>
            <h2 className="compare-section-title">Technical & Procurement Inquiries</h2>
          </div>

          <div className="compare-faq-list">
            {faqs.map((faq, idx) => (
              <div className="compare-faq-item" key={idx}>
                <h3 className="compare-faq-q">{faq.question}</h3>
                <p className="compare-faq-a">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="compare-bottom-cta">
        <div className="container">
          <div className="compare-cta-card">
            <h2 className="compare-cta-title">
              Ready to deploy Sentinel on your facility?
            </h2>
            <p className="compare-cta-desc">
              Schedule a technical briefing with our deployment engineers or launch an on-premise 48-hour pilot.
            </p>
            <div className="compare-cta-row" style={{ justifyContent: 'center' }}>
              <button
                className="btn btn-primary btn-lg"
                onClick={() => setIsModalOpen(true)}
              >
                Request Technical Briefing
              </button>
              <Link href="/pilot" className="btn btn-secondary btn-lg">
                View 48-Hour Pilot Terms
              </Link>
            </div>
          </div>
        </div>
      </section>

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

      {/* MODAL */}
      {isModalOpen && (
        <div className="modal-backdrop" onClick={closeModal}>
          <div
            className="modal-container"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <button
              type="button"
              className="modal-close-icon"
              onClick={closeModal}
              aria-label="Close dialog"
            >
              &times;
            </button>

            {!isSubmitted ? (
              <>
                <div className="modal-header">
                  <h2 className="modal-title">Request Technical Briefing</h2>
                  <p className="modal-instruction">
                    Provide your facility requirements below. Our engineers will prepare a technical dossier tailored to your operational environment.
                  </p>
                </div>

                <div className="modal-body">
                  {submitError && (
                    <div className="form-error-alert" role="alert">
                      {submitError}
                    </div>
                  )}

                  <form onSubmit={handleFormSubmit} className="demo-form">
                    <div className="form-grid">
                      <div className="form-group">
                        <label htmlFor="modalFullName" className="form-label">
                          NAME <span className="required-asterisk">*</span>
                        </label>
                        <input
                          type="text"
                          id="modalFullName"
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
                        <label htmlFor="modalWorkEmail" className="form-label">
                          EMAIL <span className="required-asterisk">*</span>
                        </label>
                        <input
                          type="email"
                          id="modalWorkEmail"
                          className="form-input"
                          placeholder="name@agency.com"
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
                        <label htmlFor="modalOrgName" className="form-label">
                          ORGANIZATION <span className="required-asterisk">*</span>
                        </label>
                        <input
                          type="text"
                          id="modalOrgName"
                          className="form-input"
                          placeholder="Organization name"
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
                        <label htmlFor="modalCountry" className="form-label">
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

                      <div className="form-group form-group-full">
                        <label htmlFor="modalCameraCount" className="form-label">
                          ESTIMATED CAMERA SCALE <span className="required-asterisk">*</span>
                        </label>
                        <select
                          id="modalCameraCount"
                          className="form-select"
                          required
                          value={formData.cameraCount}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              cameraCount: e.target.value,
                            }))
                          }
                        >
                          <option value="">Select camera scale</option>
                          <option value="10–50 Camera Streams">10–50 Camera Streams</option>
                          <option value="50–200 Camera Streams">50–200 Camera Streams</option>
                          <option value="200–1,000 Camera Streams">200–1,000 Camera Streams</option>
                          <option value="1,000+ Camera Streams">1,000+ Camera Streams</option>
                        </select>
                      </div>

                      <div className="form-group form-group-full">
                        <label htmlFor="modalRequirements" className="form-label">
                          OPERATIONAL DETAILS
                        </label>
                        <textarea
                          id="modalRequirements"
                          className="form-textarea"
                          rows={3}
                          placeholder="Tell us about your security site and key objectives..."
                          value={formData.requirements}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              requirements: e.target.value,
                            }))
                          }
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="btn btn-primary form-submit-btn"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'TRANSMITTING...' : 'REQUEST BRIEFING'}
                    </button>
                  </form>
                </div>
              </>
            ) : (
              <div className="form-success-state">
                <h2 className="modal-title" style={{ marginBottom: '0.85rem' }}>
                  Briefing Request Transmitted
                </h2>
                <p className="modal-instruction" style={{ maxWidth: '440px', lineHeight: 1.6 }}>
                  Thank you. Our deployment engineering team has received your briefing request and will reach out with technical dossier specifications shortly.
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
