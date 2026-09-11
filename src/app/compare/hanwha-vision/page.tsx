import type { Metadata } from 'next';
import { ComparisonPage } from '@/components/ComparisonPage';

export const metadata: Metadata = {
  title: 'Hanwha Vision Blaze Alternative | Open-Platform Multi-Camera Vision AI',
  description:
    'Comparing Sentinel vs Hanwha Vision (Blaze & Wisenet WAVE). Deploy server-grade multi-camera re-identification across any camera brand without camera hardware lock-in or on-camera edge compute limits.',
  keywords: [
    'Hanwha Vision alternative',
    'Hanwha Blaze alternative',
    'Wisenet WAVE alternative',
    'Hanwha camera AI alternative',
    'open platform video analytics',
    'multi-camera tracking software',
    'edge vision AI for CCTV',
    'hardware agnostic security AI',
  ],
  alternates: {
    canonical: 'https://sentinel.bluevalegrp.com/compare/hanwha-vision',
  },
  openGraph: {
    title: 'Sentinel vs Hanwha Vision Blaze: Open Platform Vision AI Alternative',
    description:
      'Compare Sentinel vs Hanwha Vision Blaze. True multi-camera re-identification across any IP camera brand without edge-chip constraints.',
    url: 'https://sentinel.bluevalegrp.com/compare/hanwha-vision',
  },
};

export default function HanwhaVisionComparisonRoute() {
  return (
    <ComparisonPage
      competitorName="Hanwha Vision (Blaze / WAVE)"
      competitorTagline="Camera-Centric AI & Proprietary NVR Ecosystem"
      heroTitle="The Open Hardware-Agnostic Alternative to Hanwha Vision Blaze"
      heroSubtitle="Hanwha Vision ties cutting-edge analytics to their proprietary camera hardware and Wisenet WAVE ecosystem. Sentinel delivers high-accuracy multi-camera tracking and trajectory intelligence across any camera brand you already own."
      heroHighlight="Break free from camera-bound compute limits. Run enterprise-grade foundation vision models across your entire mixed camera fleet."
      matrix={[
        {
          feature: 'Camera Independence',
          sentinel: '100% agnostic: Works with Hanwha, Axis, Bosch, Pelco, Dahua, Hikvision, or generic ONVIF',
          competitor: 'Advanced AI and Blaze analytics require specific Hanwha Vision camera series or WAVE appliances',
        },
        {
          feature: 'Compute Power & Model Depth',
          sentinel: 'Server-grade GPU deep learning backbones with high-dimensional feature embeddings',
          competitor: 'Constrained by low-wattage on-camera SoCs with limited neural capacity and coarse classifications',
        },
        {
          feature: 'Cross-Camera Spatial Tracking',
          sentinel: 'Native multi-camera persistent re-ID tracking subjects across non-overlapping campus cameras',
          competitor: 'Primarily single-camera edge detections; limited cross-camera spatial correlation without add-on servers',
        },
        {
          feature: 'Deployment Flexibility',
          sentinel: 'Containerized edge server, tactical ruggedized node, or sovereign datacenter (100% air-gapped)',
          competitor: 'Tied to Hanwha appliance firmware ecosystems and Wisenet NVR management structures',
        },
        {
          feature: 'Continuous AI Updates',
          sentinel: 'Instant model weight updates and retrainable custom classifiers without camera firmware re-flashing',
          competitor: 'Updates dependent on camera firmware release cycles and hardware SoC obsolescence',
        },
        {
          feature: 'Integration & VMS Neutrality',
          sentinel: 'Works natively with Milestone, Genetec, Network Optix, Hanwha WAVE, or custom C2 platforms',
          competitor: 'Optimized primarily for Hanwha Wisenet WAVE with reduced capabilities on third-party VMS platforms',
        },
      ]}
      keyDifferences={[
        {
          number: '01',
          title: 'Server-Grade Deep Learning vs. Constrained On-Camera Chips',
          sentinelApproach:
            'Sentinel offloads heavy video inference to dedicated edge GPU servers (NVIDIA RTX / A-Series). This unlocks full-scale deep metric learning models that accurately distinguish targets through rain, shadows, low lighting, and perspective distortion with near-zero false alarms.',
          competitorApproach:
            'Hanwha Blaze and on-camera analytics run on low-power embedded camera chipsets. Due to tight thermal and power limits, on-camera models must compromise on network depth, leading to frequent misclassifications during poor weather or crowded scenes.',
        },
        {
          number: '02',
          title: 'Global Multi-Camera Intelligence vs. Single-Lens Silos',
          sentinelApproach:
            'A security threat rarely stays in front of one camera. Sentinel correlates feature embeddings across your entire camera topology, building a unified spatial journey of individuals and vehicles across the facility in real time.',
          competitorApproach:
            'On-camera analytics operate in silos: Camera A detects an intruder, but has no innate awareness when that same intruder reappears 30 seconds later on Camera B. Operators must manually trace paths across separate camera logs.',
        },
        {
          number: '03',
          title: 'Preserve Your Existing Multi-Vendor Camera Investments',
          sentinelApproach:
            'You do not need to replace your existing cameras with new Hanwha units to get world-class AI. Sentinel transforms any existing RTSP/ONVIF camera stream into a state-of-the-art intelligent sensor overnight.',
          competitorApproach:
            'Adopting Hanwha’s latest AI vision features typically requires a capital expenditure cycle to purchase new Hanwha AI-series cameras, driving up project budgets significantly.',
        },
      ]}
      faqs={[
        {
          question: 'Can Sentinel ingest feeds from our existing Hanwha cameras?',
          answer:
            'Yes! Sentinel works exceptionally well with existing Hanwha cameras, ingesting standard RTSP or ONVIF streams and elevating them with multi-camera tracking that goes beyond on-camera firmware capabilities.',
        },
        {
          question: 'Do we need to replace our Wisenet WAVE VMS to use Sentinel?',
          answer:
            'No. Sentinel operates harmoniously with Hanwha WAVE, Milestone, Genetec, or any standard VMS, pushing real-time metadata, bookmarks, and automated PTZ coordinates directly into your existing video feeds.',
        },
        {
          question: 'What is the advantage of server-side GPU AI over camera-edge AI?',
          answer:
            'Edge GPU servers can run neural networks that are orders of magnitude larger and more sophisticated than camera chipsets. This yields much higher re-identification accuracy, deeper attribute extraction, and zero performance loss during heavy scene activity.',
        },
        {
          question: 'Is Sentinel 100% compliant with NDAA regulations?',
          answer:
            'Yes. Sentinel software deploys on NDAA-compliant and TAA-compliant server hardware with zero outbound dependencies, making it suitable for US federal, defence, and critical national infrastructure installations.',
        },
      ]}
    />
  );
}
