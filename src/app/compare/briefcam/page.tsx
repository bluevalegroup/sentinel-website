import type { Metadata } from 'next';
import { ComparisonPage } from '@/components/ComparisonPage';

export const metadata: Metadata = {
  title: 'BriefCam Alternative | Real-Time Edge Vision AI vs Video Synopsis',
  description:
    'Looking for a BriefCam alternative? Sentinel replaces slow post-event video synopsis with real-time multi-camera tracking, 100% on-premise air-gapped deployment, and zero cloud dependency.',
  keywords: [
    'BriefCam alternative',
    'BriefCam competitors',
    'video synopsis alternative',
    'real time video analytics',
    'on premise video AI',
    'post event investigation replacement',
    'Milestone video analytics alternative',
    'Genetec vision AI plugin',
  ],
  alternates: {
    canonical: 'https://sentinel.bluevalegrp.com/compare/briefcam',
  },
  openGraph: {
    title: 'Sentinel vs BriefCam: Real-Time Edge Vision AI Alternative',
    description:
      'Shift from reactive post-event video synopsis to live sub-second edge intelligence. 100% air-gapped on any RTSP camera.',
    url: 'https://sentinel.bluevalegrp.com/compare/briefcam',
  },
};

export default function BriefcamComparisonRoute() {
  return (
    <ComparisonPage
      competitorName="BriefCam"
      competitorTagline="Legacy Video Synopsis & Post-Event Forensic Tool"
      heroTitle="The Modern Real-Time Alternative to BriefCam"
      heroSubtitle="BriefCam was engineered for reviewing yesterday's footage with time-sliced video synopsis. Sentinel is built for live multi-camera spatial tracking, tactical threat detection, and sovereign air-gapped operations."
      heroHighlight="Shift from reactive forensic playback to proactive sub-second edge intelligence across thousands of legacy cameras."
      matrix={[
        {
          feature: 'Processing Architecture',
          sentinel: 'Sub-second real-time streaming inference at the edge or local datacenter',
          competitor: 'Post-event batch processing & video synopsis extraction',
        },
        {
          feature: 'Tracking Capability',
          sentinel: 'Multi-camera persistent re-identification across wide non-overlapping views',
          competitor: 'Single-camera synopsis overlays with limited cross-feed trajectory stitching',
        },
        {
          feature: 'Deployment & Air-Gap',
          sentinel: '100% air-gapped, zero external egress, fully sovereign edge server or tactical appliance',
          competitor: 'Complex multi-tier server clusters requiring intensive compute for synopsis pre-rendering',
        },
        {
          feature: 'Camera & VMS Compatibility',
          sentinel: '100% hardware-agnostic (RTSP, ONVIF, Milestone, Genetec, Hanwha, Axis, Dahua, Hikvision)',
          competitor: 'VMS plugin dependent with high license fees per channel and complex integration',
        },
        {
          feature: 'Alert Latency',
          sentinel: '< 800ms alert dispatch upon perimeter breach, loitering, or anomalous trajectory',
          competitor: 'Minutes to hours (synopsis generation requires pre-recording and heavy export)',
        },
        {
          feature: 'Pricing Model',
          sentinel: 'Transparent per-node / per-camera pricing with no proprietary server markups',
          competitor: 'Heavily gated tier licensing, mandatory maintenance contracts, and expensive hardware sizing',
        },
      ]}
      keyDifferences={[
        {
          number: '01',
          title: 'Live Tactical Intervention vs. Post-Mortem Forensics',
          sentinelApproach:
            'Sentinel performs real-time continuous tensor inference directly on live RTSP feeds. Security operations centers (SOCs) receive actionable perimeter alerts, directional vehicle tracking, and persistent re-ID alerts in under 800 milliseconds — stopping threats before escalation.',
          competitorApproach:
            'BriefCam relies fundamentally on video synopsis: footage must first be ingested, indexed, and flattened into an artificial composite playback. It tells you who walked by hours ago, but cannot intercept an active intruder crossing a secure perimeter now.',
        },
        {
          number: '02',
          title: 'Lightweight COTS Compute vs. Massive Transcoding Farms',
          sentinelApproach:
            'Sentinel uses optimized TensorRT deep learning runtimes tailored for commercial off-the-shelf (COTS) NVIDIA RTX, A-Series, and Jetson edge appliances. A single 2U edge server can ingest dozens of 4K streams with negligible thermal and power footprint.',
          competitorApproach:
            'Generating video synopsis requires immense CPU/GPU horsepower to separate background models from moving objects and cache hours of multi-layered video frames, leading to massive datacenter footprints and soaring infrastructure costs.',
        },
        {
          number: '03',
          title: 'Global Campus Re-ID vs. Isolated Camera Slices',
          sentinelApproach:
            'Sentinel builds a unified spatial-temporal graph across all cameras in your facility. If a target of interest enters via Gate 4, moves through the warehouse, and exits near the loading bay, Sentinel maps the continuous route across non-overlapping views automatically.',
          competitorApproach:
            'BriefCam is primarily an isolated camera or localized cluster investigation tool. Cross-camera tracking requires manual operator correlation, query tagging, and stitching across separate synopsis sessions.',
        },
      ]}
      faqs={[
        {
          question: 'Can Sentinel replace our existing BriefCam deployment without replacing cameras?',
          answer:
            'Yes. Sentinel ingests standard RTSP and ONVIF streams directly from your existing cameras or VMS (Milestone XProtect, Genetec Security Center, Network Optix, etc.). You keep 100% of your existing camera hardware and network topology.',
        },
        {
          question: 'Why is Sentinel faster than BriefCam video synopsis?',
          answer:
            'BriefCam requires video to be fully written, indexed, and processed before you can generate a synopsis view. Sentinel performs streaming inference directly on live video packets as they arrive, triggering alerts in less than 800 milliseconds.',
        },
        {
          question: 'Does Sentinel run in air-gapped or classified defence facilities?',
          answer:
            'Absolutely. Sentinel is engineered from the ground up for zero-trust, 100% on-premise, and air-gapped environments with zero outbound network calls, telemetry, or cloud dependencies.',
        },
        {
          question: 'How difficult is migration from BriefCam to Sentinel?',
          answer:
            'A standard 50–200 camera pilot can be deployed in under 48 hours using containerized runtimes on standard COTS servers or tactical edge hardware.',
        },
      ]}
    />
  );
}
