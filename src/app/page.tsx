'use client';

import React, { useState, useEffect } from 'react';

interface ScenarioBox {
  top: string;
  left: string;
  width: string;
  height: string;
  label: string;
  confidence: string;
  coords: string;
}

interface ScenarioMatch {
  id: string;
  time: string;
  conf: string;
  type: string;
  summary: string;
  telemetry: string[];
}

interface ScenarioData {
  cameraTag: string;
  imageSrc: string;
  timeWindow: string;
  matchCount: string;
  queryEcho: string;
  targetClass: string;
  timeFilter: string;
  boxes: ScenarioBox[];
  matches: ScenarioMatch[];
}

const SCENARIOS: Record<string, ScenarioData> = {
  vehicles: {
    cameraTag: 'CCTV-PERIMETER-07 // PERIMETER GATE 1',
    imageSrc: '/assets/cam_perimeter_night.jpg',
    timeWindow: 'TIME WINDOW: 22:00:00 - 00:00:00 UTC',
    matchCount: '3 MATCHES',
    queryEcho: '“Vehicles entering facility 22:00 - 00:00”',
    targetClass: 'VEHICLE / INGRESS EVENT',
    timeFilter: '10:00 PM - 12:00 AM',
    boxes: [
      {
        top: '27%',
        left: '24%',
        width: '12%',
        height: '11%',
        label: 'V-409 [VEHICLE: TRUCK]',
        confidence: '99.1%',
        coords: 'X:242 Y:270',
      },
      {
        top: '32%',
        left: '48%',
        width: '14%',
        height: '24%',
        label: 'STATION-01 [GATE CONTROL BOOTH]',
        confidence: '100%',
        coords: 'SECURED // OPERATOR PRESENT',
      },
    ],
    matches: [
      {
        id: 'EVT-8842',
        time: '23:48:15',
        conf: '99.1%',
        type: 'VEHICLE INGRESS',
        summary:
          'Black utility truck approached gate barrier. Authorized badge scan registered at guard booth.',
        telemetry: ['SPEED: 14 KM/H', 'PLATE: REG-7XYZ89', 'SECTOR: NORTH'],
      },
      {
        id: 'EVT-8790',
        time: '22:52:40',
        conf: '98.4%',
        type: 'GATE BARRIER CYCLE',
        summary:
          'Perimeter sliding gate cycle initiated and cleared. Access protocol verified.',
        telemetry: ['DURATION: 42s', 'ACTION: REMOTE RELEASE', 'PORTAL: G-1'],
      },
      {
        id: 'EVT-8711',
        time: '22:14:02',
        conf: '97.9%',
        type: 'PATROL TRANSIT',
        summary:
          'Scheduled security patrol vehicle recorded traversing outer perimeter road heading eastbound.',
        telemetry: ['SPEED: 22 KM/H', 'CLASSIFICATION: PATROL', 'SECTOR: PERIMETER'],
      },
    ],
  },

  person: {
    cameraTag: 'CCTV-NORTH-04 // FACILITY NORTH ENTRANCE',
    imageSrc: '/assets/cam_entrance_day.jpg',
    timeWindow: 'TIME WINDOW: 14:15:00 - 14:45:00 UTC',
    matchCount: '2 MATCHES',
    queryEcho: '“Person wearing red/dark jacket near north entrance”',
    targetClass: 'PERSON / APPAREL ATTRIBUTE',
    timeFilter: '14:15:00 - 14:45:00 UTC',
    boxes: [
      {
        top: '48%',
        left: '60%',
        width: '9%',
        height: '31%',
        label: 'TARGET: P-112 [PERSON]',
        confidence: '96.8%',
        coords: 'X:602 Y:481 // WALKING S-W',
      },
      {
        top: '50%',
        left: '67%',
        width: '9%',
        height: '27%',
        label: 'TARGET: P-113 [PERSON: GREEN JACKET]',
        confidence: '94.2%',
        coords: 'X:675 Y:502 // ESCORT',
      },
      {
        top: '50%',
        left: '21%',
        width: '26%',
        height: '24%',
        label: 'ACCESS PORTAL: TURNSTILES',
        confidence: '100%',
        coords: 'STATUS: ACTIVE MONITORING',
      },
    ],
    matches: [
      {
        id: 'EVT-9104',
        time: '14:32:15',
        conf: '96.8%',
        type: 'PERSON DETECTION',
        summary:
          'Target person matching jacket description traversing North Entrance courtyard towards primary turnstiles.',
        telemetry: [
          'UPPER APPAREL: DARK JACKET',
          'DIRECTION: SOUTH-WEST',
          'ASSOCIATE: P-113',
        ],
      },
      {
        id: 'EVT-9098',
        time: '14:31:02',
        conf: '95.4%',
        type: 'PATH TRAJECTORY',
        summary:
          'Target entered camera field of view from eastern access staircase. No restricted zone breach.',
        telemetry: ['VELOCITY: 1.2 M/S', 'ZONE: COURTYARD', 'TRACK ID: TRK-981'],
      },
    ],
  },

  gate3: {
    cameraTag: 'CCTV-GATE-03 // ACCESS CONTROL POINT',
    imageSrc: '/assets/cam_perimeter_night.jpg',
    timeWindow: 'TIME WINDOW: 14:15:00 - 15:30:00 UTC',
    matchCount: '3 CHRONOLOGICAL EVENTS',
    queryEcho: '“Events around Gate 3 after 2:15 PM”',
    targetClass: 'TIMELINE INVESTIGATION / INCIDENT AUDIT',
    timeFilter: 'After 14:15:00 UTC',
    boxes: [
      {
        top: '30%',
        left: '20%',
        width: '60%',
        height: '38%',
        label: 'ZONE: GATE 3 RESTRICTED APERTURE',
        confidence: '99.5%',
        coords: 'PERIMETER FENCE & SLIDER',
      },
    ],
    matches: [
      {
        id: 'EVT-7301',
        time: '14:16:04',
        conf: '99.5%',
        type: 'BARRIER STATE CHANGE',
        summary:
          'Gate 3 motorized sliding barrier opened following biometric verification at terminal.',
        telemetry: ['DURATION: 38s', 'TRIGGER: BIOMETRIC', 'STATUS: CLEARED'],
      },
      {
        id: 'EVT-7308',
        time: '14:19:22',
        conf: '98.2%',
        type: 'TRANSIT SEQUENCE',
        summary:
          'Authorized logistics van traversed Gate 3 threshold into secondary yard. Driver verified.',
        telemetry: ['PLATE: LOG-4402', 'CLEARANCE: LEVEL 2', 'SPEED: 9 KM/H'],
      },
      {
        id: 'EVT-7315',
        time: '14:24:45',
        conf: '100%',
        type: 'PERIMETER RESTORATION',
        summary:
          'Gate 3 secured. Perimeter interlocking sensors re-engaged without anomaly.',
        telemetry: ['STATUS: SEALED', 'INTERLOCK: ACTIVE', 'OPERATOR: CONFIRMED'],
      },
    ],
  },
};

export default function SentinelHome() {
  const [activeScenario, setActiveScenario] = useState<string>('vehicles');
  const [liveTime, setLiveTime] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setLiveTime(now.toISOString().replace('T', ' ').slice(0, 19) + ' UTC');
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const currentScenario = SCENARIOS[activeScenario] || SCENARIOS.vehicles;

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
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
            <span className="brand-badge">By Bluevale Defence</span>
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
              <li>
                <a href="#bluevale" className="nav-link">
                  Bluevale Defence
                </a>
              </li>
            </ul>
          </nav>

          <div className="header-actions">
            <div className="system-status-indicator" title="System Operational">
              <span className="pulse-dot"></span>
              <span>SYSTEM ONLINE // FEED ACTIVE</span>
            </div>
            <button
              className="btn btn-primary btn-sm"
              onClick={() => setIsModalOpen(true)}
              id="headerDemoBtn"
            >
              Request Demo <span className="btn-arrow">→</span>
            </button>
          </div>
        </div>
      </header>

      <main id="mainContent">
        {/* ===================================================================
             01 & 03 — HERO SECTION (Actual Sentinel UI Experience)
             =================================================================== */}
        <section className="hero-section" id="platform">
          <div className="container">
            <div className="hero-meta">
              <span className="tactical-tag">
                DEFENCE &amp; CRITICAL INFRASTRUCTURE INTELLIGENCE
              </span>
              <span className="hero-coords">
                37°46&apos;30.2&quot;N 122°25&apos;08.4&quot;W // LATENCY: 12ms // STREAMS: 12/12
              </span>
            </div>

            <div className="hero-content">
              <div className="hero-title-group">
                <h1 className="hero-title">SENTINEL</h1>
                <div className="hero-subtitle">AI Video Intelligence</div>
              </div>
              <p className="hero-description">
                Search, understand and investigate security footage using natural language.
              </p>
              <div className="hero-actions">
                <button
                  className="btn btn-primary"
                  onClick={() => setIsModalOpen(true)}
                  id="heroDemoBtn"
                >
                  Request a Demo <span className="btn-arrow">→</span>
                </button>
                <a href="#experience" className="btn btn-secondary">
                  Explore Platform Experience <span className="btn-arrow">↓</span>
                </a>
              </div>
            </div>

            {/* HERO PRODUCT UI VIEWPORT */}
            <div className="hero-interface-wrapper" id="heroInterface">
              <div className="console-topbar">
                <div className="console-title-wrap">
                  <div className="console-window-dots">
                    <div className="console-dot"></div>
                    <div className="console-dot"></div>
                    <div className="console-dot"></div>
                  </div>
                  <span className="console-title">
                    SENTINEL CONSOLE // SECTOR 07: PERIMETER GATE 1
                  </span>
                </div>
                <div className="console-telemetry">
                  <div className="telemetry-item">
                    <span className="telemetry-label">INDEX STATUS:</span>
                    <span className="telemetry-val">SYNCHRONIZED</span>
                  </div>
                  <div className="telemetry-item">
                    <span className="telemetry-label">INFERENCE:</span>
                    <span className="telemetry-val">60 FPS EDGE</span>
                  </div>
                </div>
              </div>

              {/* Natural Language Query Bar */}
              <div className="console-query-bar">
                <span className="query-input-icon">&gt;_</span>
                <input
                  type="text"
                  className="query-input-field"
                  value="Show vehicles passing North Gate barrier between 22:00 and midnight"
                  readOnly
                  aria-label="Active Sentinel Query"
                />
                <span className="query-shortcut-tag">
                  NATURAL LANGUAGE QUERY // ACTIVE
                </span>
              </div>

              {/* Video Stream + Forensic Sidebar */}
              <div className="console-viewport-grid">
                <div className="video-stream-container">
                  <img
                    src="/assets/cam_perimeter_night.jpg"
                    alt="Sentinel Live Camera Feed - Perimeter Gate 1"
                    className="surveillance-frame"
                  />

                  {/* HUD Overlay */}
                  <div className="hud-overlay">
                    <div className="hud-top">
                      <div className="hud-cam-id">
                        CAM 07 // PERIMETER GATE 1 (NORTH)
                      </div>
                      <div className="hud-timestamp">
                        {liveTime || '2026-09-11 23:48:15 UTC'}
                      </div>
                    </div>
                    <div className="hud-center-crosshair"></div>
                  </div>

                  {/* Bounding Box Overlays */}
                  <div className="bounding-box-layer">
                    <div
                      className="target-bbox"
                      style={{ top: '27%', left: '24%', width: '10%', height: '9%' }}
                    >
                      <div className="target-tag">
                        <span>V-409 [VEHICLE: TRUCK]</span>
                        <span className="target-tag-confidence">99.1%</span>
                      </div>
                      <div className="target-coords-sub">X:242 Y:270</div>
                    </div>

                    <div
                      className="target-bbox"
                      style={{ top: '31%', left: '47%', width: '14%', height: '23%' }}
                    >
                      <div className="target-tag">
                        <span>STATION-01 [GATE CONTROL BOOTH]</span>
                        <span className="target-tag-confidence">100%</span>
                      </div>
                      <div className="target-coords-sub">
                        SECURED // OPERATOR PRESENT
                      </div>
                    </div>
                  </div>

                  {/* Timeline Scrubber */}
                  <div className="console-timeline-bar">
                    <div className="timeline-track" title="Video Timeline Scrubber">
                      <div className="timeline-progress"></div>
                      <div
                        className="timeline-event-marker"
                        style={{ left: '15%' }}
                        title="Vehicle Detected 22:14:02"
                      ></div>
                      <div
                        className="timeline-event-marker"
                        style={{ left: '38%' }}
                        title="Gate Barrier Lift 22:52:40"
                      ></div>
                      <div
                        className="timeline-event-marker"
                        style={{ left: '72%' }}
                        title="Vehicle Ingress 23:48:15"
                      ></div>
                    </div>
                    <div className="timeline-meta">
                      <span>TIMELINE RANGE: 22:00:00 - 00:00:00 UTC</span>
                      <span>3 RELEVANT SEQUENCES IDENTIFIED</span>
                    </div>
                  </div>
                </div>

                {/* Right Telemetry Feed */}
                <div className="console-sidebar">
                  <div className="sidebar-header">
                    <span>FORENSIC LOG</span>
                    <span className="sidebar-badge">3 RESULTS</span>
                  </div>
                  <ul className="detected-events-list">
                    <li className="event-log-item active">
                      <div className="event-log-top">
                        <span className="event-type-badge">VEHICLE TRANSIT</span>
                        <span className="event-timestamp">23:48:15</span>
                      </div>
                      <p className="event-desc">
                        Black utility truck approached gate barrier. Authorized badge scan registered.
                      </p>
                      <div className="event-metadata-row">
                        <span>SPEED: 14 KM/H</span>
                        <span>CONF: 99.1%</span>
                      </div>
                    </li>
                    <li className="event-log-item">
                      <div className="event-log-top">
                        <span className="event-type-badge">GATE BARRIER</span>
                        <span className="event-timestamp">22:52:40</span>
                      </div>
                      <p className="event-desc">
                        Perimeter gate barrier cycle initiated. Security protocol cleared.
                      </p>
                      <div className="event-metadata-row">
                        <span>DURATION: 42s</span>
                        <span>CONF: 98.4%</span>
                      </div>
                    </li>
                    <li className="event-log-item">
                      <div className="event-log-top">
                        <span className="event-type-badge">PATROL TRANSIT</span>
                        <span className="event-timestamp">22:14:02</span>
                      </div>
                      <p className="event-desc">
                        Scheduled perimeter security patrol vehicle recorded heading eastbound.
                      </p>
                      <div className="event-metadata-row">
                        <span>SPEED: 22 KM/H</span>
                        <span>CONF: 97.9%</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
             02 & 04 — THE PROBLEM & CORE POSITIONING
             =================================================================== */}
        <section className="problem-section" id="problem">
          <div className="container">
            <div className="section-label-bar">
              <span className="section-num">02 // 04</span>
              <span className="tactical-tag">THE PROBLEM &amp; CORE POSITIONING</span>
            </div>

            <div className="problem-grid">
              <div className="problem-text-column">
                <h2 className="problem-lead-heading">
                  Every camera records.
                  <span>Few systems can explain.</span>
                </h2>
                <p className="problem-body-text">
                  Modern security environments generate enormous amounts of video. Security teams operate across increasingly complex environments with cameras generating vast amounts of video every day.
                </p>
                <p className="problem-body-text">
                  The challenge isn&apos;t having cameras. It&apos;s finding what matters. Finding a specific person, vehicle, event or sequence can require hours of manual review across disconnected streams.
                </p>
                <p className="problem-punchline">
                  When an incident happens, operators shouldn&apos;t have to spend hours manually searching through footage to understand what happened. Sentinel turns video into searchable intelligence.
                </p>
              </div>

              {/* Matrix Comparison */}
              <div className="matrix-container">
                <div className="matrix-header">Operational Paradigm Comparison</div>

                <div className="matrix-column legacy">
                  <div className="matrix-col-title legacy-title">
                    <span>Legacy Video Systems</span>
                    <span className="mono">[OBSOLETE]</span>
                  </div>
                  <ul className="matrix-list">
                    <li className="matrix-item">
                      <span className="matrix-icon-cross">✕</span>
                      <span>
                        Operators manually fast-forward through hundreds of hours of raw footage.
                      </span>
                    </li>
                    <li className="matrix-item">
                      <span className="matrix-icon-cross">✕</span>
                      <span>
                        Keywords limited to rigid camera channel IDs and unreliable timestamps.
                      </span>
                    </li>
                    <li className="matrix-item">
                      <span className="matrix-icon-cross">✕</span>
                      <span>
                        Zero cross-camera object re-identification; context lost across sector boundaries.
                      </span>
                    </li>
                    <li className="matrix-item">
                      <span className="matrix-icon-cross">✕</span>
                      <span>
                        Critical incidents discovered hours or days after perimeter breaches occur.
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="matrix-column">
                  <div className="matrix-col-title sentinel-title">
                    <span>Sentinel Video Intelligence</span>
                    <span className="mono">[ACTIVE]</span>
                  </div>
                  <ul className="matrix-list">
                    <li className="matrix-item sentinel-item">
                      <span className="matrix-icon-check">✓</span>
                      <span>
                        Natural language search queries index and isolate footage in sub-second time.
                      </span>
                    </li>
                    <li className="matrix-item sentinel-item">
                      <span className="matrix-icon-check">✓</span>
                      <span>
                        Deep scene understanding extracts clothing, vehicle models, gestures, and access events.
                      </span>
                    </li>
                    <li className="matrix-item sentinel-item">
                      <span className="matrix-icon-check">✓</span>
                      <span>
                        Automated multi-camera trajectory synthesis and cross-facility target tracking.
                      </span>
                    </li>
                    <li className="matrix-item sentinel-item">
                      <span className="matrix-icon-check">✓</span>
                      <span>
                        Immediate anomaly detection continuously surfacing uncharacteristic behavior in real time.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
             05 — CORE CAPABILITIES
             =================================================================== */}
        <section className="capabilities-section" id="capabilities">
          <div className="container">
            <div className="section-label-bar">
              <span className="section-num">05</span>
              <span className="tactical-tag">CORE CAPABILITIES</span>
            </div>

            <div className="section-header-wrap">
              <h2 className="section-title">From video to intelligence</h2>
              <p className="section-subtitle">
                Continuous machine perception transforming passive sensor feeds into operational clarity.
              </p>
            </div>

            <div className="capabilities-grid">
              {/* Search */}
              <div className="capability-card">
                <div className="cap-top">
                  <span className="cap-index">CAP // 01</span>
                  <div className="cap-icon-box">[S]</div>
                </div>
                <div>
                  <h3 className="cap-heading">Search</h3>
                  <p className="cap-text">
                    Search across camera footage using natural language. Query arbitrary descriptive criteria without manual tag dependencies.
                  </p>
                </div>
                <div className="cap-specs">
                  <div className="cap-specs-item">
                    QUERY: <span>Natural Language Semantics</span>
                  </div>
                  <div className="cap-specs-item">
                    INDEX: <span>Multi-Modal Video Embeddings</span>
                  </div>
                </div>
              </div>

              {/* Understand */}
              <div className="capability-card">
                <div className="cap-top">
                  <span className="cap-index">CAP // 02</span>
                  <div className="cap-icon-box">[U]</div>
                </div>
                <div>
                  <h3 className="cap-heading">Understand</h3>
                  <p className="cap-text">
                    Identify people, vehicles, objects and events within recorded video with granular classification and spatial context.
                  </p>
                </div>
                <div className="cap-specs">
                  <div className="cap-specs-item">
                    DETECTION: <span>Multi-Class Object Parsing</span>
                  </div>
                  <div className="cap-specs-item">
                    ATTRIBUTES: <span>Color, Type, Velocity, Direction</span>
                  </div>
                </div>
              </div>

              {/* Investigate */}
              <div className="capability-card">
                <div className="cap-top">
                  <span className="cap-index">CAP // 03</span>
                  <div className="cap-icon-box">[I]</div>
                </div>
                <div>
                  <h3 className="cap-heading">Investigate</h3>
                  <p className="cap-text">
                    Move from a question to the footage that matters and understand what happened with reconstructed incident timelines.
                  </p>
                </div>
                <div className="cap-specs">
                  <div className="cap-specs-item">
                    SYNTHESIS: <span>Multi-Camera Timeline Assembly</span>
                  </div>
                  <div className="cap-specs-item">
                    EVIDENCE: <span>Forensic Event Audit Trail</span>
                  </div>
                </div>
              </div>

              {/* Monitor */}
              <div className="capability-card">
                <div className="cap-top">
                  <span className="cap-index">CAP // 04</span>
                  <div className="cap-icon-box">[M]</div>
                </div>
                <div>
                  <h3 className="cap-heading">Monitor</h3>
                  <p className="cap-text">
                    Continuously analyze live camera feeds and surface events that require attention in real time before escalations occur.
                  </p>
                </div>
                <div className="cap-specs">
                  <div className="cap-specs-item">
                    ANALYSIS: <span>24/7 Continuous Inference</span>
                  </div>
                  <div className="cap-specs-item">
                    ALERTING: <span>Real-Time Anomaly Prioritization</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
             06 — THE EXPERIENCE (Ask. Find. Investigate.)
             =================================================================== */}
        <section className="experience-section" id="experience">
          <div className="container">
            <div className="section-label-bar">
              <span className="section-num">06</span>
              <span className="tactical-tag">THE OPERATIONAL EXPERIENCE</span>
            </div>

            <div className="experience-intro">
              <h2 className="experience-heading">Ask. Find. Investigate.</h2>
              <p className="experience-desc">
                Instead of manually reviewing footage, operators can ask Sentinel questions in natural language. The system surfaces relevant footage so operators can investigate faster.
              </p>
            </div>

            {/* The 3 Scenario Presets from the Brief */}
            <div className="query-presets-container">
              <div className="presets-label">
                <span>SELECT AN OPERATOR QUERY SCENARIO:</span>
              </div>
              <div className="query-presets-grid" role="tablist">
                {/* Preset 1 */}
                <button
                  className={`preset-query-btn ${
                    activeScenario === 'vehicles' ? 'active' : ''
                  }`}
                  onClick={() => setActiveScenario('vehicles')}
                  role="tab"
                  aria-selected={activeScenario === 'vehicles'}
                >
                  <div className="preset-meta">
                    <span>SCENARIO 01 // PERIMETER ACCESS</span>
                    <span>CAM-07</span>
                  </div>
                  <div className="preset-query-text">
                    “Show me every vehicle that entered the facility between 10 PM and midnight.”
                  </div>
                </button>

                {/* Preset 2 */}
                <button
                  className={`preset-query-btn ${
                    activeScenario === 'person' ? 'active' : ''
                  }`}
                  onClick={() => setActiveScenario('person')}
                  role="tab"
                  aria-selected={activeScenario === 'person'}
                >
                  <div className="preset-meta">
                    <span>SCENARIO 02 // PERSON IDENTIFICATION</span>
                    <span>CCTV-NORTH-04</span>
                  </div>
                  <div className="preset-query-text">
                    “Find the person wearing a red jacket near the north entrance.”
                  </div>
                </button>

                {/* Preset 3 */}
                <button
                  className={`preset-query-btn ${
                    activeScenario === 'gate3' ? 'active' : ''
                  }`}
                  onClick={() => setActiveScenario('gate3')}
                  role="tab"
                  aria-selected={activeScenario === 'gate3'}
                >
                  <div className="preset-meta">
                    <span>SCENARIO 03 // SEQUENCE INVESTIGATION</span>
                    <span>CAM-07 / GATE 3</span>
                  </div>
                  <div className="preset-query-text">
                    “What happened around Gate 3 after 2:15 PM?”
                  </div>
                </button>
              </div>
            </div>

            {/* Interactive Sentinel Simulator */}
            <div className="interactive-simulator" id="experienceSimulator">
              <div className="sim-header">
                <div className="sim-status">
                  <span className="pulse-dot"></span>
                  <span>{currentScenario.cameraTag}</span>
                </div>
                <div className="sim-timecode mono">
                  {currentScenario.timeWindow}
                </div>
              </div>

              <div className="sim-main-grid">
                <div className="sim-feed-area">
                  <img
                    src={currentScenario.imageSrc}
                    alt="Surveillance Feed Viewport"
                    className="sim-camera-image"
                  />

                  {/* Bounding Boxes */}
                  <div className="bounding-box-layer">
                    {currentScenario.boxes.map((b, idx) => (
                      <div
                        key={idx}
                        className="target-bbox"
                        style={{
                          top: b.top,
                          left: b.left,
                          width: b.width,
                          height: b.height,
                        }}
                      >
                        <div className="target-tag">
                          <span>{b.label}</span>
                          <span className="target-tag-confidence">
                            {b.confidence}
                          </span>
                        </div>
                        <div className="target-coords-sub">{b.coords}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Results Analysis Panel */}
                <div className="sim-results-panel">
                  <div className="sim-panel-title">
                    <span>INVESTIGATION BREAKDOWN</span>
                    <span className="mono">{currentScenario.matchCount}</span>
                  </div>

                  <div className="sim-query-breakdown">
                    <div className="breakdown-row">
                      <span className="breakdown-label">SEARCH QUERY:</span>
                      <span className="breakdown-value">
                        {currentScenario.queryEcho}
                      </span>
                    </div>
                    <div className="breakdown-row">
                      <span className="breakdown-label">TARGET CLASS:</span>
                      <span className="breakdown-value">
                        {currentScenario.targetClass}
                      </span>
                    </div>
                    <div className="breakdown-row">
                      <span className="breakdown-label">TIME FILTER:</span>
                      <span className="breakdown-value">
                        {currentScenario.timeFilter}
                      </span>
                    </div>
                  </div>

                  <div className="sim-matches-list">
                    {currentScenario.matches.map((m) => (
                      <div key={m.id} className="match-card">
                        <div className="match-top">
                          <span className="match-id">
                            {m.id} // {m.type}
                          </span>
                          <span className="match-conf">{m.conf}</span>
                        </div>
                        <p className="match-summary">{m.summary}</p>
                        <div className="match-telemetry">
                          <span>TIME: {m.time}</span>
                          {m.telemetry.map((t, tidx) => (
                            <span key={tidx}>{t}</span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
             07 — CORE STATEMENT (High-Impact Hero Monument)
             =================================================================== */}
        <section className="core-statement-section">
          <div className="container">
            <div className="statement-tag">
              <span className="tactical-tag">FOUNDATIONAL PRINCIPLE</span>
            </div>

            <div className="statement-quote-wrap">
              <blockquote className="statement-quote">
                Security footage shouldn&apos;t be something you watch.
                <span className="quote-accent">
                  It should be something you can search.
                </span>
              </blockquote>
              <div className="statement-annotation">
                // SENTINEL VIDEO INTELLIGENCE ARCHITECTURE
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
             08 — BUILT FOR CRITICAL ENVIRONMENTS
             =================================================================== */}
        <section className="environments-section" id="environments">
          <div className="container">
            <div className="section-label-bar">
              <span className="section-num">08</span>
              <span className="tactical-tag">BUILT FOR CRITICAL ENVIRONMENTS</span>
            </div>

            <div className="section-header-wrap">
              <h2 className="section-title">
                Built for environments where visibility matters
              </h2>
              <p className="section-subtitle">
                Sentinel is designed for organizations operating in environments where security, situational awareness and rapid investigation are critical.
              </p>
            </div>

            <div className="environments-grid">
              {/* Sector 1: Defence */}
              <div className="env-card">
                <div>
                  <div className="env-code">SECTOR // 01</div>
                  <h3 className="env-title">Defence</h3>
                  <p className="env-desc">
                    Forward operating installations, perimeter perimeters, tactical checkpoints and operational commands requiring rapid forensic comprehension.
                  </p>
                </div>
                <div className="env-footer">MISSION-GRADE RELIABILITY</div>
              </div>

              {/* Sector 2: Security */}
              <div className="env-card">
                <div>
                  <div className="env-code">SECTOR // 02</div>
                  <h3 className="env-title">Security</h3>
                  <p className="env-desc">
                    Security operations centers (SOCs) monitoring dense urban installations, high-asset properties, and enterprise campuses.
                  </p>
                </div>
                <div className="env-footer">CONTINUOUS ANOMALY ALERTING</div>
              </div>

              {/* Sector 3: Critical Infrastructure */}
              <div className="env-card">
                <div>
                  <div className="env-code">SECTOR // 03</div>
                  <h3 className="env-title">Critical Infrastructure</h3>
                  <p className="env-desc">
                    Power generation facilities, regional energy distribution grids, water reservoirs, and telecommunication relay hubs.
                  </p>
                </div>
                <div className="env-footer">RESTRICTED ZONE INTEGRITY</div>
              </div>

              {/* Sector 4: Industrial Facilities */}
              <div className="env-card">
                <div>
                  <div className="env-code">SECTOR // 04</div>
                  <h3 className="env-title">Industrial Facilities</h3>
                  <p className="env-desc">
                    Chemical manufacturing, hazardous processing plants, port facilities, and large-scale manufacturing yards.
                  </p>
                </div>
                <div className="env-footer">SAFETY &amp; INGRESS AUDITING</div>
              </div>

              {/* Sector 5: Government */}
              <div className="env-card">
                <div>
                  <div className="env-code">SECTOR // 05</div>
                  <h3 className="env-title">Government</h3>
                  <p className="env-desc">
                    Federal compounds, municipal civic infrastructure, administrative complexes, and sensitive access facilities.
                  </p>
                </div>
                <div className="env-footer">SOVEREIGN COMPLIANCE READY</div>
              </div>

              {/* Sector 6: Large-Scale Operations */}
              <div className="env-card">
                <div>
                  <div className="env-code">SECTOR // 06</div>
                  <h3 className="env-title">Large-Scale Operations</h3>
                  <p className="env-desc">
                    International cargo terminals, intermodal transport logistics, rail networks, and multi-acre storage hubs.
                  </p>
                </div>
                <div className="env-footer">MULTI-CAMERA RE-IDENTIFICATION</div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
             09 — BLUEVALE DEFENCE
             =================================================================== */}
        <section className="bluevale-section" id="bluevale">
          <div className="container">
            <div className="section-label-bar">
              <span className="section-num">09</span>
              <span className="tactical-tag">ORGANIZATIONAL HERITAGE</span>
            </div>

            <div className="bluevale-wrapper">
              <div className="bluevale-content">
                <h2 className="bluevale-title">Developed by Bluevale Defence</h2>
                <p className="bluevale-text">
                  Sentinel is the first product developed by Bluevale Defence, focused on AI-powered video intelligence for defence, security and critical environments.
                </p>
                <p className="bluevale-text">
                  We engineer mission-critical autonomy, edge neural inference, and precision forensic capabilities for operators who cannot afford perceptual latency or blind spots.
                </p>
                <div className="bluevale-link-wrap">
                  <button
                    className="btn btn-secondary"
                    onClick={() => setIsModalOpen(true)}
                  >
                    Explore Bluevale Defence <span className="btn-arrow">→</span>
                  </button>
                </div>
              </div>

              <div className="bluevale-specs-card">
                <div className="specs-title">
                  SYSTEM ARCHITECTURE SPECIFICATIONS
                </div>
                <ul className="specs-list">
                  <li className="specs-item">
                    <span className="specs-label">PLATFORM:</span>
                    <span className="specs-val">Sentinel v1.4 Video Intelligence</span>
                  </li>
                  <li className="specs-item">
                    <span className="specs-label">DEPLOYMENT:</span>
                    <span className="specs-val">Air-Gapped / On-Premise / Hybrid Edge</span>
                  </li>
                  <li className="specs-item">
                    <span className="specs-label">CAMERA COMPATIBILITY:</span>
                    <span className="specs-val">RTSP, ONVIF, H.264/H.265 Standard VMS</span>
                  </li>
                  <li className="specs-item">
                    <span className="specs-label">INFERENCE LATENCY:</span>
                    <span className="specs-val">&lt; 25ms Frame Analysis</span>
                  </li>
                  <li className="specs-item">
                    <span className="specs-label">QUERY RESOLUTION:</span>
                    <span className="specs-val">Natural Language Semantic Retrieval</span>
                  </li>
                  <li className="specs-item">
                    <span className="specs-label">DATA INTEGRITY:</span>
                    <span className="specs-val">Immutable Cryptographic Audit Trail</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
             10 — DEMO CTA SECTION
             =================================================================== */}
        <section className="demo-cta-section" id="demo">
          <div className="container">
            <div className="demo-cta-card">
              <div className="tactical-tag" style={{ marginBottom: '1.5rem' }}>
                ENGAGEMENT BRIEFING
              </div>
              <h2 className="demo-cta-title">See Sentinel in action</h2>
              <p className="demo-cta-text">
                Tell us about your security environment, camera infrastructure or video intelligence requirements. Our team will get back to you to arrange a conversation.
              </p>
              <div className="demo-cta-btn-wrap">
                <button
                  className="btn btn-primary"
                  onClick={() => setIsModalOpen(true)}
                  id="ctaDemoBtn"
                >
                  Request a Demo <span className="btn-arrow">→</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* SITE FOOTER */}
      <footer className="site-footer">
        <div className="container">
          <div className="footer-main-grid">
            <div className="footer-brand-wrap">
              <img
                src="/assets/sentinel-logo.png"
                alt="Sentinel"
                className="brand-logo-img"
              />
              <p className="footer-desc">
                AI Video Intelligence Platform engineered for defence, security, and critical infrastructure environments.
              </p>
            </div>

            <div>
              <div className="footer-col-title">Platform</div>
              <ul className="footer-link-list">
                <li>
                  <a href="#platform" className="footer-link">
                    Video Intelligence
                  </a>
                </li>
                <li>
                  <a href="#capabilities" className="footer-link">
                    Core Capabilities
                  </a>
                </li>
                <li>
                  <a href="#experience" className="footer-link">
                    Query Console
                  </a>
                </li>
                <li>
                  <a href="#environments" className="footer-link">
                    Critical Environments
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <div className="footer-col-title">Capabilities</div>
              <ul className="footer-link-list">
                <li>
                  <a href="#capabilities" className="footer-link">
                    Natural Language Search
                  </a>
                </li>
                <li>
                  <a href="#capabilities" className="footer-link">
                    Scene Understanding
                  </a>
                </li>
                <li>
                  <a href="#capabilities" className="footer-link">
                    Incident Investigation
                  </a>
                </li>
                <li>
                  <a href="#capabilities" className="footer-link">
                    Continuous Monitoring
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <div className="footer-col-title">Organization</div>
              <ul className="footer-link-list">
                <li>
                  <a href="#bluevale" className="footer-link">
                    Bluevale Defence
                  </a>
                </li>
                <li>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="footer-link"
                    style={{
                      background: 'none',
                      border: 'none',
                      padding: 0,
                      cursor: 'pointer',
                      textAlign: 'left',
                    }}
                  >
                    Briefing Request
                  </button>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Security Disclosures
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Deployment Architecture
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom-bar">
            <div>
              &copy; 2026 Bluevale Defence. All rights reserved. Sentinel is a registered trademark.
            </div>
            <div className="footer-status-pill">
              <span className="pulse-dot"></span>
              <span>SYSTEM ENCLAVE: SECURE // AIR-GAP COMPLIANT</span>
            </div>
          </div>
        </div>
      </footer>

      {/* ===================================================================
           REQUEST A DEMO MODAL OVERLAY
           =================================================================== */}
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
                        <>
                          Submit Demo Request <span className="btn-arrow">→</span>
                        </>
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
