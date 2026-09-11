import type { Metadata } from 'next';
import { ComparisonPage } from '@/components/ComparisonPage';

export const metadata: Metadata = {
  title: 'Avigilon Alternative | Hardware-Agnostic Video AI vs Motorola Ecosystem',
  description:
    'Looking for an Avigilon alternative? Sentinel delivers state-of-the-art multi-camera vision AI without proprietary NVRs, rigid channel licensing, or Motorola Solutions ecosystem lock-in.',
  keywords: [
    'Avigilon alternative',
    'Avigilon competitors',
    'Avigilon Appearance Search alternative',
    'Motorola Solutions video security alternative',
    'open video analytics software',
    'enterprise VMS AI',
    'multi camera re-identification software',
    'Avigilon Control Center replacement',
  ],
  alternates: {
    canonical: 'https://sentinel.bluevalegrp.com/compare/avigilon',
  },
  openGraph: {
    title: 'Sentinel vs Avigilon: Open Hardware-Agnostic Video AI Alternative',
    description:
      'Upgrade your security infrastructure with next-gen multi-camera re-identification without proprietary NVRs or channel licensing tiers.',
    url: 'https://sentinel.bluevalegrp.com/compare/avigilon',
  },
};

export default function AvigilonComparisonRoute() {
  return (
    <ComparisonPage
      competitorName="Avigilon"
      competitorTagline="Motorola Solutions Proprietary NVR & VMS Ecosystem"
      heroTitle="The Open-Hardware Vision AI Alternative to Avigilon"
      heroSubtitle="Avigilon locks enterprises into proprietary NVR appliances and rigid channel licensing tiers. Sentinel delivers state-of-the-art vision AI across any camera, any VMS, and any modern GPU server."
      heroHighlight="Upgrade your security infrastructure with next-gen multi-camera re-identification without being trapped in the Motorola hardware ecosystem."
      matrix={[
        {
          feature: 'Hardware Freedom',
          sentinel: 'Open COTS compute (Dell, HPE, Supermicro, NVIDIA Jetson/RTX/A-Series) and any IP camera',
          competitor: 'Tightly coupled to proprietary Avigilon NVR appliances and specialized AI appliances',
        },
        {
          feature: 'Cross-Camera Re-ID',
          sentinel: 'Deep spatial-temporal feature embedding across overlapping & non-overlapping fields of view',
          competitor: 'Avigilon Appearance Search (often restricted to proprietary Avigilon cameras and high-tier licensing)',
        },
        {
          feature: 'VMS Neutrality',
          sentinel: 'Integrates directly with Milestone, Genetec, Network Optix, or operates as a standalone AI layer',
          competitor: 'Requires Avigilon Control Center (ACC) / Unity Video ecosystem for full functionality',
        },
        {
          feature: 'Deployment Flexibility',
          sentinel: 'Containerized (Docker/K8s) edge deployment, 100% air-gapped or private cloud',
          competitor: 'Heavy appliance-based installation with complex proprietary firmware management',
        },
        {
          feature: 'Model Upgradability',
          sentinel: 'Rapid continuous over-the-air or local offline model weight updates with modern foundation vision AI',
          competitor: 'Slow annual firmware release cycles tied to appliance hardware constraints',
        },
        {
          feature: 'Licensing Transparency',
          sentinel: 'Simple, transparent per-stream or site licensing with no hidden channel upgrade fees',
          competitor: 'Multi-tiered licenses (Core, Standard, Enterprise) + separate Appearance Search add-on fees',
        },
      ]}
      keyDifferences={[
        {
          number: '01',
          title: 'True Vendor Independence vs. Ecosystem Captivity',
          sentinelApproach:
            'Sentinel acts as an open, high-performance neural intelligence layer. It connects to any existing video stream via standard RTSP/ONVIF and streams detections to your existing security consoles, web interfaces, or SIEM tools.',
          competitorApproach:
            'Avigilon incentivizes full adoption of the Motorola Solutions stack: Avigilon cameras, Avigilon NVRs, and Avigilon Unity/ACC software. Adding third-party cameras often degrades analytic capabilities or triggers penalty licensing.',
        },
        {
          number: '02',
          title: 'Next-Gen Neural Feature Embeddings vs. Legacy Histograms',
          sentinelApproach:
            'Sentinel employs deep spatial-temporal metric learning models that extract high-dimensional semantic embeddings. Targets are re-identified reliably across extreme perspective shifts, lighting variances, and partial occlusions across an entire campus.',
          competitorApproach:
            'Legacy appearance search algorithms struggle with illumination changes, low-resolution streams, and similar clothing colors, resulting in operator fatigue from excessive false candidates.',
        },
        {
          number: '03',
          title: 'Agile Edge & Tactical Deployment',
          sentinelApproach:
            'Deploy Sentinel on a compact ruggedized edge box inside a mobile tactical unit, a local workstation, or an enterprise server cluster. Scale up or down effortlessly with zero vendor hardware gating.',
          competitorApproach:
            'Expanding analytic capacity requires purchasing specialized Avigilon AI Appliance (AIA) hardware with long lead times and high capital expense.',
        },
      ]}
      faqs={[
        {
          question: 'Can Sentinel work alongside our current Avigilon Control Center (ACC) setup?',
          answer:
            'Yes. Sentinel can ingest camera streams via RTSP alongside ACC without interrupting your existing video recording, operator stations, or archiving workflows.',
        },
        {
          question: "How does Sentinel's appearance search compare to Avigilon Appearance Search?",
          answer:
            "Sentinel's multi-camera tracking uses state-of-the-art deep feature embeddings that maintain identity persistence across wider gaps, occlusions, and varying lighting conditions with significantly higher precision and fewer false matches.",
        },
        {
          question: 'Do we need to buy specialized appliances from Sentinel?',
          answer:
            'No. Sentinel runs on standard enterprise hardware from Dell, HP, Supermicro, or NVIDIA certified edge systems. You choose your preferred hardware vendor and retain full control over your infrastructure.',
        },
        {
          question: 'How fast can we run an evaluation?',
          answer:
            'We can set up a live proof-of-concept on 10 to 50 of your existing RTSP feeds within 48 hours without any physical alterations or downtime to your existing site.',
        },
      ]}
    />
  );
}
