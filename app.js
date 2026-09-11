/**
 * SENTINEL — AI VIDEO INTELLIGENCE PLATFORM
 * Operational Interface Logic & Simulation Engine
 * Developed by Bluevale Defence
 */

document.addEventListener('DOMContentLoaded', () => {
  initLiveClock();
  initExperienceSimulator();
  initDemoModal();
  initSmoothScroll();
});

/* ==========================================================================
   01. LIVE HUD CLOCK & TELEMETRY
   ========================================================================== */
function initLiveClock() {
  const hudTimeEl = document.getElementById('hudLiveTime');

  function updateClock() {
    const now = new Date();
    const utcString = now.toISOString().replace('T', ' ').slice(0, 19) + ' UTC';
    if (hudTimeEl) {
      hudTimeEl.textContent = utcString;
    }
  }

  updateClock();
  setInterval(updateClock, 1000);
}

/* ==========================================================================
   02. INTERACTIVE EXPERIENCE SIMULATOR (Ask. Find. Investigate.)
   ========================================================================== */
const SCENARIO_DATA = {
  vehicles: {
    cameraTag: 'CCTV-PERIMETER-07 // PERIMETER GATE 1',
    imageSrc: 'assets/cam_perimeter_night.jpg',
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
        coords: 'X:242 Y:270'
      },
      {
        top: '32%',
        left: '48%',
        width: '14%',
        height: '24%',
        label: 'STATION-01 [GATE CONTROL BOOTH]',
        confidence: '100%',
        coords: 'SECURED // OPERATOR PRESENT'
      }
    ],
    matches: [
      {
        id: 'EVT-8842',
        time: '23:48:15',
        conf: '99.1%',
        type: 'VEHICLE INGRESS',
        summary: 'Black utility truck approached gate barrier. Authorized badge scan registered at guard booth.',
        telemetry: ['SPEED: 14 KM/H', 'PLATE: REG-7XYZ89', 'SECTOR: NORTH']
      },
      {
        id: 'EVT-8790',
        time: '22:52:40',
        conf: '98.4%',
        type: 'GATE BARRIER CYCLE',
        summary: 'Perimeter sliding gate cycle initiated and cleared. Access protocol verified.',
        telemetry: ['DURATION: 42s', 'ACTION: REMOTE RELEASE', 'PORTAL: G-1']
      },
      {
        id: 'EVT-8711',
        time: '22:14:02',
        conf: '97.9%',
        type: 'PATROL TRANSIT',
        summary: 'Scheduled security patrol vehicle recorded traversing outer perimeter road heading eastbound.',
        telemetry: ['SPEED: 22 KM/H', 'CLASSIFICATION: PATROL', 'SECTOR: PERIMETER']
      }
    ]
  },

  person: {
    cameraTag: 'CCTV-NORTH-04 // FACILITY NORTH ENTRANCE',
    imageSrc: 'assets/cam_entrance_day.jpg',
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
        coords: 'X:602 Y:481 // WALKING S-W'
      },
      {
        top: '50%',
        left: '67%',
        width: '9%',
        height: '27%',
        label: 'TARGET: P-113 [PERSON: GREEN JACKET]',
        confidence: '94.2%',
        coords: 'X:675 Y:502 // ESCORT'
      },
      {
        top: '50%',
        left: '21%',
        width: '26%',
        height: '24%',
        label: 'ACCESS PORTAL: TURNSTILES',
        confidence: '100%',
        coords: 'STATUS: ACTIVE MONITORING'
      }
    ],
    matches: [
      {
        id: 'EVT-9104',
        time: '14:32:15',
        conf: '96.8%',
        type: 'PERSON DETECTION',
        summary: 'Target person matching jacket description traversing North Entrance courtyard towards primary turnstiles.',
        telemetry: ['UPPER APPAREL: DARK JACKET', 'DIRECTION: SOUTH-WEST', 'ASSOCIATE: P-113']
      },
      {
        id: 'EVT-9098',
        time: '14:31:02',
        conf: '95.4%',
        type: 'PATH TRAJECTORY',
        summary: 'Target entered camera field of view from eastern access staircase. No restricted zone breach.',
        telemetry: ['VELOCITY: 1.2 M/S', 'ZONE: COURTYARD', 'TRACK ID: TRK-981']
      }
    ]
  },

  gate3: {
    cameraTag: 'CCTV-GATE-03 // ACCESS CONTROL POINT',
    imageSrc: 'assets/cam_perimeter_night.jpg',
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
        coords: 'PERIMETER FENCE & SLIDER'
      }
    ],
    matches: [
      {
        id: 'EVT-7301',
        time: '14:16:04',
        conf: '99.5%',
        type: 'BARRIER STATE CHANGE',
        summary: 'Gate 3 motorized sliding barrier opened following biometric verification at terminal.',
        telemetry: ['DURATION: 38s', 'TRIGGER: BIOMETRIC', 'STATUS: CLEARED']
      },
      {
        id: 'EVT-7308',
        time: '14:19:22',
        conf: '98.2%',
        type: 'TRANSIT SEQUENCE',
        summary: 'Authorized logistics van traversed Gate 3 threshold into secondary yard. Driver verified.',
        telemetry: ['PLATE: LOG-4402', 'CLEARANCE: LEVEL 2', 'SPEED: 9 KM/H']
      },
      {
        id: 'EVT-7315',
        time: '14:24:45',
        conf: '100%',
        type: 'PERIMETER RESTORATION',
        summary: 'Gate 3 secured. Perimeter interlocking sensors re-engaged without anomaly.',
        telemetry: ['STATUS: SEALED', 'INTERLOCK: ACTIVE', 'OPERATOR: CONFIRMED']
      }
    ]
  }
};

function initExperienceSimulator() {
  const presetButtons = document.querySelectorAll('.preset-query-btn');
  const simCameraTag = document.getElementById('simCameraTag');
  const simFeedImage = document.getElementById('simFeedImage');
  const simBoundingLayer = document.getElementById('simBoundingLayer');
  const simTimeDisplay = document.getElementById('simTimeDisplay');
  const simMatchCount = document.getElementById('simMatchCount');
  const simQueryEcho = document.getElementById('simQueryEcho');
  const simTargetClass = document.getElementById('simTargetClass');
  const simTimeFilter = document.getElementById('simTimeFilter');
  const simMatchesList = document.getElementById('simMatchesList');

  if (!presetButtons.length || !simFeedImage) return;

  function loadScenario(scenarioKey) {
    const data = SCENARIO_DATA[scenarioKey];
    if (!data) return;

    // Update active tab states
    presetButtons.forEach(btn => {
      const isSelected = btn.dataset.scenario === scenarioKey;
      btn.classList.toggle('active', isSelected);
      btn.setAttribute('aria-selected', isSelected ? 'true' : 'false');
    });

    // Update Header & Camera Feed
    simCameraTag.textContent = data.cameraTag;
    simTimeDisplay.textContent = data.timeWindow;

    // Fade image transition
    simFeedImage.style.opacity = '0.3';
    setTimeout(() => {
      simFeedImage.src = data.imageSrc;
      simFeedImage.style.opacity = '1';
    }, 120);

    // Render Bounding Boxes
    simBoundingLayer.innerHTML = '';
    data.boxes.forEach(b => {
      const boxEl = document.createElement('div');
      boxEl.className = 'target-bbox';
      boxEl.style.top = b.top;
      boxEl.style.left = b.left;
      boxEl.style.width = b.width;
      boxEl.style.height = b.height;

      boxEl.innerHTML = `
        <div class="target-tag">
          <span>${b.label}</span>
          <span class="target-tag-confidence">${b.confidence}</span>
        </div>
        <div class="target-coords-sub">${b.coords}</div>
      `;
      simBoundingLayer.appendChild(boxEl);
    });

    // Update Analysis Breakdown
    simMatchCount.textContent = data.matchCount;
    simQueryEcho.textContent = data.queryEcho;
    simTargetClass.textContent = data.targetClass;
    simTimeFilter.textContent = data.timeFilter;

    // Render Match Cards
    simMatchesList.innerHTML = '';
    data.matches.forEach(m => {
      const card = document.createElement('div');
      card.className = 'match-card';
      card.innerHTML = `
        <div class="match-top">
          <span class="match-id">${m.id} // ${m.type}</span>
          <span class="match-conf">${m.conf}</span>
        </div>
        <p class="match-summary">${m.summary}</p>
        <div class="match-telemetry">
          <span>TIME: ${m.time}</span>
          ${m.telemetry.map(t => `<span>${t}</span>`).join('')}
        </div>
      `;
      simMatchesList.appendChild(card);
    });
  }

  // Bind click events on query preset buttons
  presetButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const scenario = btn.dataset.scenario;
      loadScenario(scenario);
    });
  });

  // Initial scenario load
  loadScenario('vehicles');
}

/* ==========================================================================
   03. REQUEST A DEMO MODAL DIALOG
   ========================================================================== */
function initDemoModal() {
  const dialog = document.getElementById('demoDialog');
  const openTriggers = document.querySelectorAll('.open-demo-trigger');
  const closeBtn = document.getElementById('closeModalBtn');
  const demoForm = document.getElementById('demoForm');
  const successState = document.getElementById('formSuccessState');
  const successDismissBtn = document.getElementById('successDismissBtn');

  if (!dialog) return;

  function openModal(e) {
    if (e) e.preventDefault();
    demoForm.style.display = 'block';
    successState.style.display = 'none';
    dialog.showModal();
  }

  function closeModal() {
    dialog.close();
  }

  openTriggers.forEach(btn => {
    btn.addEventListener('click', openModal);
  });

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (successDismissBtn) successDismissBtn.addEventListener('click', closeModal);

  // Light dismiss: Close on outside backdrop click
  dialog.addEventListener('click', (event) => {
    const rect = dialog.getBoundingClientRect();
    const isInDialog = (
      rect.top <= event.clientY &&
      event.clientY <= rect.top + rect.height &&
      rect.left <= event.clientX &&
      event.clientX <= rect.left + rect.width
    );
    if (!isInDialog) {
      closeModal();
    }
  });

  // Form submission handler
  if (demoForm) {
    demoForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = demoForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;

      submitBtn.disabled = true;
      submitBtn.innerHTML = 'TRANSMITTING BRIEFING REQUEST...';

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        demoForm.style.display = 'none';
        demoForm.reset();
        successState.style.display = 'block';
      }, 700);
    });
  }
}

/* ==========================================================================
   04. SMOOTH SCROLL SPY & NAVIGATION
   ========================================================================== */
function initSmoothScroll() {
  const navLinks = document.querySelectorAll('.nav-link[href^="#"]');

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          e.preventDefault();
          targetEl.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
}
