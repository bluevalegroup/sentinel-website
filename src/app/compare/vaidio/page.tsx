import type { Metadata } from 'next';
import { ComparisonPage } from '@/components/ComparisonPage';

export const metadata: Metadata = {
  title: 'Vaidio AI Alternative | Real-Time Sovereign Edge Vision AI vs IronYun Vaidio',
  description:
    'Looking for a Vaidio AI alternative? Sentinel delivers unified multi-camera spatial tracking, true zero-trust air-gapped deployment, and transparent pricing without fragmented per-analytics licensing fees.',
  keywords: [
    'Vaidio alternative',
    'Vaidio AI competitors',
    'IronYun Vaidio alternative',
    'Vaidio pricing alternative',
    'enterprise video analytics platform',
    'multi-camera re-identification',
    'air-gapped vision AI',
    'video intelligence software',
  ],
  alternates: {
    canonical: 'https://sentinel.bluevalegrp.com/compare/vaidio',
  },
  openGraph: {
    title: 'Sentinel vs Vaidio AI: Unified Sovereign Edge Vision AI Alternative',
    description:
      'Compare Sentinel vs IronYun Vaidio. Unified multi-camera spatial tracking with zero cloud dependency and no fragmented per-function licensing.',
    url: 'https://sentinel.bluevalegrp.com/compare/vaidio',
  },
};

export default function VaidioComparisonRoute() {
  return (
    <ComparisonPage
      competitorName="Vaidio (IronYun)"
      competitorTagline="Multi-Engine Video Analytics Platform"
      heroTitle="The Unified Real-Time Alternative to Vaidio AI"
      heroSubtitle="Vaidio offers dozens of fragmented analytic modules with complex per-feature licensing and heavy multi-server footprints. Sentinel delivers unified end-to-end multi-camera tracking and sub-second anomaly detection in a single, air-gapped runtime."
      heroHighlight="Eliminate modular licensing traps and fragmented pipelines. Get enterprise cross-camera persistent intelligence out of the box."
      matrix={[
        {
          feature: 'Tracking & Re-ID Architecture',
          sentinel: 'Unified deep spatial-temporal feature embedding across overlapping & non-overlapping cameras',
          competitor: 'Separate modular pipelines (face, LPR, intruder, cross-camera search) requiring multiple engine licenses',
        },
        {
          feature: 'Licensing Simplicity',
          sentinel: 'All-inclusive per-stream or site licensing — full capabilities included without nickel-and-diming',
          competitor: 'Fragmented à la carte licensing per analytic module (30+ separate add-on licenses)',
        },
        {
          feature: 'Air-Gap & Sovereign Security',
          sentinel: '100% air-gapped, zero telemetry, sovereign containerized runtime for defence and critical infrastructure',
          competitor: 'Supports on-premise, but often requires recurring license validation and complex multi-server infrastructure',
        },
        {
          feature: 'Inference Density & Compute Efficiency',
          sentinel: 'TensorRT-optimized unified neural graph; high stream density per COTS GPU server',
          competitor: 'High compute overhead when running multiple concurrent analytics engines on the same camera channel',
        },
        {
          feature: 'Camera & VMS Compatibility',
          sentinel: 'Pure hardware & VMS agnostic (RTSP, ONVIF, Milestone, Genetec, Hanwha, Network Optix)',
          competitor: 'Requires complex VMS plugin configurations and multi-tier server middleware',
        },
        {
          feature: 'Time to Alert',
          sentinel: '< 800ms alert dispatch directly to SOC tactical dashboards and mobile command centers',
          competitor: 'Variable multi-second latency depending on how many modular engines are chained together',
        },
      ]}
      keyDifferences={[
        {
          number: '01',
          title: 'Unified Neural Architecture vs. Fragmented Analytics Modules',
          sentinelApproach:
            'Sentinel is engineered around a unified foundation vision model. Object detection, attribute extraction, multi-camera re-identification, and trajectory analysis execute simultaneously in a single forward pass, dramatically reducing latency and GPU load.',
          competitorApproach:
            'Vaidio packages 30+ separate point solutions (e.g. LPR, intrusion detection, smoke detection, facial recognition). Chaining multiple analytics per camera multiplies licensing fees and multiplies GPU resource consumption.',
        },
        {
          number: '02',
          title: 'Predictable TCO vs. Modular Licensing Gating',
          sentinelApproach:
            'All core intelligence capabilities — real-time tracking, cross-camera trajectory mapping, forensic search, and threat alerts — are included standard. You never have to pay extra when you want to track a suspect across cameras.',
          competitorApproach:
            'Vaidio’s modular pricing often leads to surprise budget expansions. Turning on additional capabilities or expanding from intrusion to appearance search requires purchasing new license packs for each camera channel.',
        },
        {
          number: '03',
          title: 'Tactical Edge & Sovereign Air-Gap Readiness',
          sentinelApproach:
            'Designed for defence, border security, ports, and critical infrastructure, Sentinel runs fully air-gapped on ruggedized edge boxes or sovereign datacenter clusters without internet handshakes or external license telemetry.',
          competitorApproach:
            'While Vaidio supports on-premise installations, its multi-tiered architecture and licensing management systems add operational friction in zero-trust, classified, or remote forward-deployed nodes.',
        },
      ]}
      faqs={[
        {
          question: 'Can Sentinel replace our Vaidio installation on existing servers?',
          answer:
            'Yes. If you currently run Vaidio on NVIDIA GPU-equipped servers (such as Dell PowerEdge, HPE ProLiant, or Supermicro), Sentinel can deploy on that exact hardware via Docker or Kubernetes in under 48 hours.',
        },
        {
          question: 'Do we need to buy separate licenses for multi-camera tracking vs loitering?',
          answer:
            'No. Sentinel includes full multi-camera persistent re-identification, perimeter intrusion detection, anomalous path tracking, and forensic search in a single straightforward per-camera or per-node license.',
        },
        {
          question: 'Can Sentinel integrate into our existing VMS alongside Milestone or Genetec?',
          answer:
            'Yes. Sentinel operates alongside Milestone XProtect, Genetec Security Center, or any ONVIF/RTSP VMS, forwarding real-time metadata, bookmarks, and automated PTZ triggers directly into your SOC consoles.',
        },
        {
          question: 'How does Sentinel achieve higher stream density per GPU than Vaidio?',
          answer:
            'Instead of stacking multiple independent neural networks for detection, tracking, and attributes, Sentinel uses a consolidated backbone optimized with TensorRT FP16/INT8 precision, handling 2–3x more concurrent 1080p/4K feeds on identical GPU hardware.',
        },
      ]}
    />
  );
}
