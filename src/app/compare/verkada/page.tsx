import type { Metadata } from 'next';
import { ComparisonPage } from '@/components/ComparisonPage';

export const metadata: Metadata = {
  title: 'Verkada Alternative | Sovereign On-Premise AI vs Cloud Lock-In',
  description:
    'Looking for an enterprise Verkada alternative? Sentinel delivers advanced multi-camera intelligence with zero cloud dependency, 100% on-premise sovereign data ownership, and compatibility with any RTSP camera.',
  keywords: [
    'Verkada alternative',
    'Verkada competitors',
    'Verkada on premise alternative',
    'Verkada air gapped alternative',
    'enterprise CCTV vision AI',
    'no cloud lock in security cameras',
    'sovereign video surveillance',
    'NDAA compliant edge AI',
  ],
  alternates: {
    canonical: 'https://sentinel.bluevalegrp.com/compare/verkada',
  },
  openGraph: {
    title: 'Sentinel vs Verkada: Sovereign On-Premise Vision AI Alternative',
    description:
      'True zero-cloud sovereignty. Keep your cameras, own your data, and deploy enterprise multi-camera AI without cloud subscription lock-in.',
    url: 'https://sentinel.bluevalegrp.com/compare/verkada',
  },
};

export default function VerkadaComparisonRoute() {
  return (
    <ComparisonPage
      competitorName="Verkada"
      competitorTagline="Proprietary Cloud-Managed Camera Ecosystem"
      heroTitle="The Sovereign On-Premise Alternative to Verkada"
      heroSubtitle="Verkada enforces expensive proprietary hardware and mandatory cloud subscription lock-in. Sentinel empowers enterprises, defence, and critical infrastructure with sovereign edge AI on any camera."
      heroHighlight="True zero-cloud sovereignty. Keep your cameras, own your data, and deploy anywhere from military bases to commercial campuses."
      matrix={[
        {
          feature: 'Cloud Dependency',
          sentinel: 'Zero cloud required — 100% air-gapped, on-premise, or private sovereign cloud',
          competitor: 'Mandatory cloud connection — cameras brick or become unusable if cloud license lapses',
        },
        {
          feature: 'Hardware Compatibility',
          sentinel: 'Open architecture: Works with any existing RTSP/ONVIF camera (Axis, Hanwha, Bosch, etc.)',
          competitor: 'Closed proprietary hardware: You must purchase expensive Verkada-branded cameras',
        },
        {
          feature: 'Data Privacy & Compliance',
          sentinel: 'Zero external video transmission; complies with ITAR, CJIS, GDPR, NDAA, and defence standards',
          competitor: 'Continuous video and telemetry streaming to third-party commercial cloud servers',
        },
        {
          feature: 'Total Cost of Ownership (5-Yr)',
          sentinel: 'Predictable software licensing; leverage existing cameras, network, and COTS servers',
          competitor: 'Extremely high upfront hardware costs plus mandatory annual cloud software fees per camera',
        },
        {
          feature: 'Multi-Camera Cross-Tracking',
          sentinel: 'Graph-based persistent multi-camera re-ID across non-overlapping indoor and outdoor views',
          competitor: 'Basic single-camera facial & license plate recognition tied to proprietary cloud database',
        },
        {
          feature: 'Edge Inference Performance',
          sentinel: 'High-throughput TensorRT edge acceleration on local dedicated GPU appliances',
          competitor: 'Constrained on-camera edge compute supplemented by latency-prone cloud processing',
        },
      ]}
      keyDifferences={[
        {
          number: '01',
          title: 'Total Data Sovereignty vs. Cloud Security Risks',
          sentinelApproach:
            'Sentinel guarantees that video feeds and metadata never leave your local physical network. Engineered for defence bases, airports, critical infrastructure, and government facilities, Sentinel operates 100% air-gapped with zero telemetry egress.',
          competitorApproach:
            'Verkada requires an active uplink to AWS cloud infrastructure. Organizations with strict data residency, classified operations, or compliance mandates (CJIS, ITAR) cannot accept third-party cloud streaming risks.',
        },
        {
          number: '02',
          title: 'Open Hardware Agility vs. Proprietary Hardware Lock-In',
          sentinelApproach:
            'Sentinel is pure intelligence software. Connect your existing Axis, Hanwha, Bosch, Dahua, Hikvision, or Pelco cameras immediately over standard RTSP/ONVIF protocols. No camera replacements needed.',
          competitorApproach:
            'Verkada locks you into their proprietary cameras. If you decide to cancel their cloud subscription or switch platforms, the cameras stop functioning and your hardware investment is lost.',
        },
        {
          number: '03',
          title: 'Uncompromised Enterprise TCO',
          sentinelApproach:
            'Sentinel utilizes standard commercial off-the-shelf (COTS) edge servers (Dell, HPE, Supermicro) powered by NVIDIA GPUs. You scale capacity dynamically and maintain full asset ownership without forced refresh cycles.',
          competitorApproach:
            'Verkada bundles hardware markups with multi-year mandatory cloud SaaS licenses that escalate exponentially across hundreds or thousands of camera feeds over a 5-year replacement horizon.',
        },
      ]}
      faqs={[
        {
          question: 'Can I use Sentinel with my existing camera installations?',
          answer:
            'Yes. Sentinel connects to any camera supporting ONVIF or RTSP protocols. You do not need to rip and replace a single camera or rewire your facility.',
        },
        {
          question: 'What happens if our internet connection goes down?',
          answer:
            'Sentinel runs entirely locally at the edge. Even during a complete internet blackout, cyber attack, or perimeter severance, real-time tracking, alerts, and forensic indexing continue uninterrupted.',
        },
        {
          question: 'How does pricing compare to Verkada?',
          answer:
            'Verkada charges high upfront hardware prices plus mandatory recurring cloud licenses per camera. Sentinel saves organizations up to 60% over a 3-5 year TCO cycle because you leverage existing cameras and open compute.',
        },
        {
          question: 'Is Sentinel compliant with NDAA and government standards?',
          answer:
            'Yes. Sentinel runs on certified sovereign compute (including TAA/NDAA compliant servers and edge modules) with zero telemetry sent to foreign or commercial cloud servers.',
        },
      ]}
    />
  );
}
