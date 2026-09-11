'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { CountrySelector } from './CountrySelector';

export interface ClientProfile {
  industry: string;
  scale: string;
  geography: string;
  previousSetup: string;
}

export interface KeyMetric {
  num: string;
  label: string;
}

export interface ContentSection {
  title: string;
  paragraphs: string[];
  listItems?: string[];
}

export interface CaseStudyPageProps {
  badgeLabel: string;
  caseTitle: string;
  caseSubtitle: string;
  executiveSummary: string;
  clientProfile: ClientProfile;
  metrics: KeyMetric[];
  challenge: ContentSection;
  deployment: ContentSection;
  results: ContentSection;
}

export function CaseStudyPage({
  badgeLabel,
  caseTitle,
  caseSubtitle,
  executiveSummary,
  clientProfile,
  metrics,
  challenge,
  deployment,
  results,
}: CaseStudyPageProps) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    orgName: '',
    country: '',
    envType: caseTitle,
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
          source: `Case Study — ${caseTitle}`,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to submit inquiry');
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
    <div className="case-study-wrapper">
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
              Request Dossier
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="case-hero-section">
        <div className="container">
          <div className="compare-hero-badge mono">
            <span>FIELD DOSSIER</span>
            <span className="badge-divider">//</span>
            <span>{badgeLabel.toUpperCase()}</span>
          </div>

          <h1 className="case-hero-title">{caseTitle}</h1>
          <p className="case-hero-subtitle">{caseSubtitle}</p>

          <div className="case-metrics-grid">
            {metrics.map((m, idx) => (
              <div className="case-metric-card" key={idx}>
                <span className="case-metric-val">{m.num}</span>
                <span className="case-metric-lbl">{m.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOSSIER BODY & PROFILE */}
      <section className="case-body-section">
        <div className="container">
          <div className="case-layout-grid">
            {/* Main Narrative Column */}
            <div className="case-narrative-col">
              {/* Executive Summary Callout */}
              <div className="case-summary-box">
                <span className="summary-tag mono">EXECUTIVE DEPLOYMENT BRIEF</span>
                <p className="summary-text">{executiveSummary}</p>
              </div>

              {/* Challenge */}
              <div className="case-story-block">
                <span className="story-step-num mono">01 // THE CHALLENGE</span>
                <h2 className="story-title">{challenge.title}</h2>
                {challenge.paragraphs.map((p, i) => (
                  <p className="story-p" key={i}>
                    {p}
                  </p>
                ))}
                {challenge.listItems && (
                  <ul className="story-list">
                    {challenge.listItems.map((li, i) => (
                      <li key={i}>{li}</li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Deployment */}
              <div className="case-story-block">
                <span className="story-step-num mono">02 // THE SENTINEL ARCHITECTURE</span>
                <h2 className="story-title">{deployment.title}</h2>
                {deployment.paragraphs.map((p, i) => (
                  <p className="story-p" key={i}>
                    {p}
                  </p>
                ))}
                {deployment.listItems && (
                  <ul className="story-list">
                    {deployment.listItems.map((li, i) => (
                      <li key={i}>{li}</li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Results */}
              <div className="case-story-block">
                <span className="story-step-num mono">03 // OPERATIONAL IMPACT</span>
                <h2 className="story-title">{results.title}</h2>
                {results.paragraphs.map((p, i) => (
                  <p className="story-p" key={i}>
                    {p}
                  </p>
                ))}
                {results.listItems && (
                  <ul className="story-list impact-list">
                    {results.listItems.map((li, i) => (
                      <li key={i}>{li}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            {/* Sidebar Profile Column */}
            <aside className="case-sidebar-col">
              <div className="case-profile-card">
                <h3 className="profile-heading mono">DEPLOYMENT PROFILE</h3>

                <div className="profile-row">
                  <span className="profile-label">Industry</span>
                  <span className="profile-value">{clientProfile.industry}</span>
                </div>

                <div className="profile-row">
                  <span className="profile-label">Camera Scale</span>
                  <span className="profile-value">{clientProfile.scale}</span>
                </div>

                <div className="profile-row">
                  <span className="profile-label">Environment</span>
                  <span className="profile-value">{clientProfile.geography}</span>
                </div>

                <div className="profile-row">
                  <span className="profile-label">Previous Setup</span>
                  <span className="profile-value">{clientProfile.previousSetup}</span>
                </div>

                <div className="profile-cta-box">
                  <span className="profile-cta-note">
                    Evaluate similar capabilities on your facility:
                  </span>
                  <Link href="/pilot" className="btn btn-primary" style={{ width: '100%', textAlign: 'center' }}>
                    48-Hour Pilot Program
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="compare-bottom-cta">
        <div className="container">
          <div className="compare-cta-card">
            <h2 className="compare-cta-title">
              Ready to replicate these operational results?
            </h2>
            <p className="compare-cta-desc">
              Deploy a 30-day proof-of-concept on 10 to 50 of your existing camera streams in under 48 hours.
            </p>
            <div className="compare-cta-row" style={{ justifyContent: 'center' }}>
              <button
                className="btn btn-primary btn-lg"
                onClick={() => setIsModalOpen(true)}
              >
                Request Full Technical Dossier
              </button>
              <Link href="/pilot" className="btn btn-secondary btn-lg">
                View 48-Hour Pilot
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
            className="demo-modal-content"
            style={{ backgroundColor: '#ffffff', color: '#0a0a0a' }}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <button
              type="button"
              className="modal-close-btn"
              onClick={closeModal}
              aria-label="Close dialog"
            >
              ✕
            </button>

            {!isSubmitted ? (
              <>
                <div className="modal-header-centered">
                  <h2 className="modal-title">Request Technical Dossier</h2>
                  <p className="modal-instruction">
                    Receive the full engineering architecture and operational metrics for this deployment.
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
                        <label htmlFor="caseFullName" className="form-label">
                          NAME <span className="required-asterisk">*</span>
                        </label>
                        <input
                          type="text"
                          id="caseFullName"
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
                        <label htmlFor="caseWorkEmail" className="form-label">
                          WORK EMAIL <span className="required-asterisk">*</span>
                        </label>
                        <input
                          type="email"
                          id="caseWorkEmail"
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
                        <label htmlFor="caseOrgName" className="form-label">
                          ORGANIZATION <span className="required-asterisk">*</span>
                        </label>
                        <input
                          type="text"
                          id="caseOrgName"
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
                        <label htmlFor="caseCountry" className="form-label">
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
                    </div>

                    <button
                      type="submit"
                      className="btn btn-primary form-submit-btn"
                      disabled={isSubmitting}
                      style={{ marginTop: '1.25rem' }}
                    >
                      {isSubmitting ? 'SENDING...' : 'REQUEST DOSSIER'}
                    </button>
                  </form>
                </div>
              </>
            ) : (
              <div className="form-success-state">
                <h2 className="modal-title" style={{ marginBottom: '0.85rem' }}>
                  Dossier Request Received
                </h2>
                <p className="modal-instruction" style={{ maxWidth: '440px', lineHeight: 1.6 }}>
                  Thank you. Our deployment engineering team will review your request and send the technical dossier to your official email shortly.
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
