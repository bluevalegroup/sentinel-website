import type { Metadata } from 'next';
import { CaseStudyPage } from '@/components/CaseStudyPage';

export const metadata: Metadata = {
  title: 'Field Dossier: Autonomous Border & Perimeter Incursion Tracking | Sentinel',
  description:
    'Case study: How a sovereign defense unit deployed Sentinel across 42km of unstructured border perimeter to achieve sub-second intruder intercept alerts with 94% false positive reduction.',
  keywords: [
    'border surveillance case study',
    'perimeter intrusion AI results',
    'tactical CCTV AI deployment',
    'air-gapped border defense AI',
    'false alarm reduction CCTV',
  ],
  alternates: {
    canonical: 'https://sentinel.bluevalegrp.com/case-studies/perimeter-defense',
  },
  openGraph: {
    title: 'Case Study: 42km Autonomous Border Defense | Sentinel Vision AI',
    description:
      '94% reduction in nuisance alarms. Sub-second intruder intercept alerts across long-range unstructured terrain.',
    url: 'https://sentinel.bluevalegrp.com/case-studies/perimeter-defense',
  },
};

export default function PerimeterDefenseCaseStudyRoute() {
  return (
    <CaseStudyPage
      badgeLabel="BORDER & HOMELAND DEFENSE"
      caseTitle="Securing 42km of Hostile Border Perimeter with Sub-Second Threat Intercepts"
      caseSubtitle="How a frontline border security unit eliminated nuisance alarms and deployed autonomous cross-camera tracking across long-range optical and thermal cameras with zero external network connectivity."
      executiveSummary="A frontline defense force responsible for a 42km remote international boundary suffered severe operator fatigue from legacy motion sensors triggering 200+ false alarms per shift due to blowing tumbleweeds, wild animals, and sandstorms. In under 48 hours, Sentinel was deployed onto local tactical edge servers connected to 84 existing optical and thermal cameras. Sentinel eliminated 94% of false alarms, automated PTZ slew-to-cue tracking, and provided patrol units with live breadcrumb trails for intercepted incursions in under 800 milliseconds."
      clientProfile={{
        industry: 'Homeland Security & National Border Defense',
        scale: '84 Optical / Thermal Stream Feeds across 42km',
        geography: 'Arid, desert frontier with extreme temperature swings',
        previousSetup: 'Legacy VMS motion detection with microwave fence sensors',
      }}
      metrics={[
        { num: '94%', label: 'False Alarm Reduction' },
        { num: '< 800ms', label: 'Breach Alert Latency' },
        { num: '42km', label: 'Continuous Perimeter Secured' },
        { num: '$0', label: 'Camera Hardware Replaced' },
      ]}
      challenge={{
        title: 'Nuisance Alarms Crippling Rapid Response Readiness',
        paragraphs: [
          'The operational challenge centered on sensor noise and operator cognitive exhaustion. Traditional pixel-motion algorithms treated shifting shadows and dust storms with identical urgency as human infiltration teams, causing control room operators to miss real breaches or disable siren triggers entirely.',
          'Furthermore, because the outposts operated across bandwidth-starved tactical microwave relays, streaming raw multi-camera video back to a central headquarters was technically unfeasible and presented severe cybersecurity vulnerabilities.',
        ],
        listItems: [
          'Over 200 false alarm triggers per 8-hour shift',
          'Operators took up to 8 minutes to visually locate targets across isolated feeds',
          'Zero public internet allowed under national defense security directives',
        ],
      }}
      deployment={{
        title: 'Containerized Edge Deployment on Tactical COTS Servers',
        paragraphs: [
          'Sentinel was deployed on three ruggedized 2U edge appliances stationed at regional relay towers, completely disconnected from the public internet. The software ingested raw RTSP feeds from a mixed fleet of existing Axis optical cameras and uncooled FLIR thermal cameras.',
          'Sentinel’s spatial-temporal neural networks were calibrated to distinguish human locomotion, crawling postures, and vehicle dust plumes from environmental brush motion. Once calibrated, Sentinel automated PTZ crosshairs to track intruders as they moved between non-overlapping sector boundaries.',
        ],
        listItems: [
          'Turnkey on-site installation completed in under 48 hours',
          'Deep spatial-temporal Re-ID across non-overlapping desert gaps',
          'Autonomous Cursor-on-Target (CoT) dispatch to field patrol tablets',
        ],
      }}
      results={{
        title: 'Sub-Second Intercept Dispatch and Complete Operational Dominance',
        paragraphs: [
          'Within 14 days of activation, Sentinel intercepted 100% of simulated and live perimeter incursions. False alarms dropped from over 200 per shift to fewer than 5, restoring complete operator trust in the alert system.',
          'Patrol teams reported an average intercept time reduction of 62%, as dispatchers no longer had to verbally describe intruder locations; Sentinel automatically transmitted live spatial breadcrumbs directly to mobile tactical consoles.',
        ],
        listItems: [
          '94% reduction in false alarms within the first week of deployment',
          'Zero missed incursions across 60 days of continuous evaluation',
          'Immediate enterprise rollout approved across remaining perimeter sectors',
        ],
      }}
    />
  );
}
