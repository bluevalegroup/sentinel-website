'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { CountrySelector } from '@/components/CountrySelector';

export function PilotPageClient() {
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          source: '48-Hour Pilot Application Page',
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to submit pilot request');
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

  return (
    <div className="pilot-page-wrapper">
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
            <a
              href="#apply"
              className="btn btn-primary header-demo-btn"
            >
              Apply for Pilot
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="pilot-hero-section">
        <div className="container">
          <div className="compare-hero-badge mono">
            <span>TURNKEY EVALUATION PROGRAM</span>
            <span className="badge-divider">//</span>
            <span>48-HOUR ON-PREMISE PILOT</span>
          </div>

          <h1 className="pilot-hero-title">
            Deploy Sentinel in 48 Hours. <br />
            Keep Your Cameras. Own Your Data.
          </h1>

          <p className="pilot-hero-subtitle">
            Evaluate real-time multi-camera spatial tracking across 10 to 50 existing RTSP feeds on a structured 30-day proof-of-concept. Zero hardware replacements, zero network disruption, and 100% air-gapped data sovereignty.
          </p>

          <div className="pilot-metrics-row">
            <div className="pilot-metric-pill">
              <span className="metric-num">48h</span>
              <span className="metric-label">Deployment Turnaround</span>
            </div>
            <div className="pilot-metric-pill">
              <span className="metric-num">0</span>
              <span className="metric-label">Camera Replacements</span>
            </div>
            <div className="pilot-metric-pill">
              <span className="metric-num">100%</span>
              <span className="metric-label">Air-Gapped Sovereignty</span>
            </div>
            <div className="pilot-metric-pill">
              <span className="metric-num">&lt; 800ms</span>
              <span className="metric-label">Real-Time Alert Latency</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3-PHASE DEPLOYMENT TIMELINE */}
      <section className="pilot-timeline-section">
        <div className="container">
          <div className="compare-section-header text-center">
            <span className="section-label mono">THE EVALUATION FRAMEWORK</span>
            <h2 className="compare-section-title">How the 30-Day Pilot Works</h2>
            <p className="compare-section-desc" style={{ maxWidth: '620px', margin: '0 auto' }}>
              We remove every procurement obstacle so your security team can validate performance on live operations without bureaucratic friction.
            </p>
          </div>

          <div className="pilot-steps-grid">
            <div className="pilot-step-card">
              <div className="step-badge mono">PHASE 01 // HOURS 0–24</div>
              <h3 className="step-title">Stream Ingestion & Topology Mapping</h3>
              <p className="step-desc">
                Provide read-only RTSP or ONVIF credentials for 10 to 50 existing cameras. Sentinel automatically maps camera fields of view, blind spots, and transit zones without modifying your camera network.
              </p>
              <ul className="step-checklist">
                <li>Zero camera firmware modifications</li>
                <li>Operates alongside your existing VMS</li>
                <li>Air-gapped edge appliance or container deployment</li>
              </ul>
            </div>

            <div className="pilot-step-card">
              <div className="step-badge mono">PHASE 02 // HOURS 24–48</div>
              <h3 className="step-title">Neural Calibration & Alert Rules</h3>
              <p className="step-desc">
                Our engineers calibrate deep spatial-temporal embeddings for your specific site conditions (illumination, weather, occlusion). We configure custom trigger zones, loitering parameters, and perimeter tripwires.
              </p>
              <ul className="step-checklist">
                <li>Cross-camera persistent re-ID verification</li>
                <li>Webhook, SMS & SOC console integration</li>
                <li>Fine-tuning to eliminate 90%+ of false alarms</li>
              </ul>
            </div>

            <div className="pilot-step-card">
              <div className="step-badge mono">PHASE 03 // DAYS 3–30</div>
              <h3 className="step-title">Operational Validation & Audit</h3>
              <p className="step-desc">
                Your SOC operators evaluate live alert dispatch, investigate historical tracks, and test search capabilities. At Day 30, we deliver a comprehensive Operational Performance & ROI Audit report.
              </p>
              <ul className="step-checklist">
                <li>Operator usability & response speed benchmarking</li>
                <li>Detailed breach intercept analytics report</li>
                <li>Straightforward path to full campus rollout</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PILOT SPECIFICATIONS & HARDWARE */}
      <section className="pilot-specs-section">
        <div className="container">
          <div className="pilot-specs-box">
            <div className="specs-col">
              <span className="section-label mono">DEPLOYMENT SPECIFICATIONS</span>
              <h3 className="specs-title">Hardware Deployment Options</h3>
              <p className="specs-desc">
                Sentinel runs on standard commercial off-the-shelf (COTS) compute. You have full freedom to deploy on your own infrastructure or evaluate with our turnkey hardware.
              </p>

              <div className="specs-items-stack">
                <div className="spec-row-item">
                  <span className="spec-term">Option A: Turnkey Edge Appliance</span>
                  <p className="spec-def">
                    We ship a pre-configured 2U edge server (NVIDIA GPU-accelerated) directly to your facility. Plug into your local camera switch and begin streaming within minutes.
                  </p>
                </div>

                <div className="spec-row-item">
                  <span className="spec-term">Option B: Bring-Your-Own Compute (BYOC)</span>
                  <p className="spec-def">
                    Deploy Sentinel as containerized Docker / Kubernetes pods onto your existing on-premise Dell, HPE, or Supermicro GPU servers.
                  </p>
                </div>

                <div className="spec-row-item">
                  <span className="spec-term">Cyber & Air-Gap Compliance</span>
                  <p className="spec-def">
                    Zero internet connection required. Zero telemetry egress. 100% compliant with NDAA Section 889, ITAR, and CJIS requirements.
                  </p>
                </div>
              </div>
            </div>

            {/* APPLICATION FORM INLINE */}
            <div className="pilot-form-col" id="apply">
              <div className="pilot-form-card">
                <div className="form-card-header">
                  <h3 className="form-card-title">Apply for a 30-Day Evaluation</h3>
                  <p className="form-card-desc">
                    Tell us about your security site. Our engineering team will review your requirements and coordinate your evaluation setup.
                  </p>
                </div>

                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="pilot-contact-form">
                    {submitError && (
                      <div className="form-error-alert" role="alert">
                        {submitError}
                      </div>
                    )}

                    <div className="form-group">
                      <label htmlFor="fullName" className="form-label">
                        FULL NAME <span className="required-asterisk">*</span>
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        className="form-input"
                        placeholder="Commander / Director Name"
                        required
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData((prev) => ({ ...prev, fullName: e.target.value }))
                        }
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="workEmail" className="form-label">
                        OFFICIAL WORK EMAIL <span className="required-asterisk">*</span>
                      </label>
                      <input
                        type="email"
                        id="workEmail"
                        className="form-input"
                        placeholder="name@agency-or-company.com"
                        required
                        value={formData.workEmail}
                        onChange={(e) =>
                          setFormData((prev) => ({ ...prev, workEmail: e.target.value }))
                        }
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="orgName" className="form-label">
                        ORGANIZATION / FACILITY <span className="required-asterisk">*</span>
                      </label>
                      <input
                        type="text"
                        id="orgName"
                        className="form-input"
                        placeholder="Agency, Military Unit, or Enterprise"
                        required
                        value={formData.orgName}
                        onChange={(e) =>
                          setFormData((prev) => ({ ...prev, orgName: e.target.value }))
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
                          setFormData((prev) => ({ ...prev, country: c }))
                        }
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="envType" className="form-label">
                        PRIMARY ENVIRONMENT <span className="required-asterisk">*</span>
                      </label>
                      <select
                        id="envType"
                        className="form-select"
                        required
                        value={formData.envType}
                        onChange={(e) =>
                          setFormData((prev) => ({ ...prev, envType: e.target.value }))
                        }
                      >
                        <option value="">Select operational environment</option>
                        <option value="Border & Perimeter Defense">Border & Perimeter Defense</option>
                        <option value="Critical Infrastructure (Energy / Nuclear / Water)">Critical Infrastructure (Energy / Nuclear / Water)</option>
                        <option value="Airport, Seaport & Transit Terminal">Airport, Seaport & Transit Terminal</option>
                        <option value="Military Base & Forward Operating Facility">Military Base & Forward Operating Facility</option>
                        <option value="Industrial & Corporate Campus">Industrial & Corporate Campus</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="cameraCount" className="form-label">
                        PILOT CAMERA SCALE <span className="required-asterisk">*</span>
                      </label>
                      <select
                        id="cameraCount"
                        className="form-select"
                        required
                        value={formData.cameraCount}
                        onChange={(e) =>
                          setFormData((prev) => ({ ...prev, cameraCount: e.target.value }))
                        }
                      >
                        <option value="">Select pilot camera volume</option>
                        <option value="10–25 Camera Streams (Rapid Pilot)">10–25 Camera Streams (Rapid Pilot)</option>
                        <option value="25–50 Camera Streams (Full Sector Evaluation)">25–50 Camera Streams (Full Sector Evaluation)</option>
                        <option value="50–100 Camera Streams (Multi-Site Evaluation)">50–100 Camera Streams (Multi-Site Evaluation)</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="requirements" className="form-label">
                        EVALUATION OBJECTIVES
                      </label>
                      <textarea
                        id="requirements"
                        className="form-textarea"
                        rows={3}
                        placeholder="Specific security objectives (e.g., perimeter breach alerts, loitering detection, cross-camera trajectory mapping across terminal)..."
                        value={formData.requirements}
                        onChange={(e) =>
                          setFormData((prev) => ({ ...prev, requirements: e.target.value }))
                        }
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn btn-primary btn-lg"
                      style={{ width: '100%', marginTop: '1rem' }}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'SUBMITTING APPLICATION...' : 'SUBMIT PILOT APPLICATION'}
                    </button>
                  </form>
                ) : (
                  <div className="form-success-state" style={{ padding: '3rem 1.5rem', textAlign: 'center' }}>
                    <h3 className="modal-title" style={{ marginBottom: '1rem' }}>
                      Pilot Application Received
                    </h3>
                    <p className="modal-instruction" style={{ maxWidth: '420px', margin: '0 auto', lineHeight: 1.6 }}>
                      Thank you. Our deployment engineering team has received your pilot application and will contact you within 24 business hours to coordinate hardware and stream ingestion details.
                    </p>
                  </div>
                )}
              </div>
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
    </div>
  );
}
