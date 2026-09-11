import type { Metadata } from 'next';
import { ComparisonPage } from '@/components/ComparisonPage';

export const metadata: Metadata = {
  title: 'Conntour Alternative | Enterprise Multi-Camera Vision AI vs Conntour',
  description:
    'Looking for a Conntour alternative? Sentinel provides sovereign enterprise vision AI with persistent multi-camera re-identification, air-gapped defence-grade security, and scale for 1,000+ camera streams.',
  keywords: [
    'Conntour alternative',
    'Conntour competitors',
    'natural language video search alternative',
    'enterprise CCTV AI software',
    'multi-camera tracking software',
    'air-gapped video analytics',
    'defence CCTV AI',
    'perimeter intelligence vision AI',
  ],
  alternates: {
    canonical: 'https://sentinel.bluevalegrp.com/compare/conntour',
  },
  openGraph: {
    title: 'Sentinel vs Conntour: Sovereign Enterprise Vision AI Alternative',
    description:
      'Compare Sentinel vs Conntour. Scale beyond single-camera natural language search to full-campus multi-camera persistent re-ID with 100% air-gapped data sovereignty.',
    url: 'https://sentinel.bluevalegrp.com/compare/conntour',
  },
};

export default function ConntourComparisonRoute() {
  return (
    <ComparisonPage
      competitorName="Conntour"
      competitorTagline="Natural Language Search & Smart Video Assistant"
      heroTitle="The Sovereign Enterprise Alternative to Conntour"
      heroSubtitle="While Conntour focuses on natural language search across camera clips, Sentinel is built for mission-critical enterprise environments requiring live multi-camera spatial tracking, tactical C2 integration, and 100% air-gapped defence readiness."
      heroHighlight="Scale beyond isolated camera search. Achieve global campus spatial intelligence across thousands of simultaneous feeds."
      matrix={[
        {
          feature: 'Tracking Scope',
          sentinel: 'Global campus persistent multi-camera re-ID across complex indoor & outdoor environments',
          competitor: 'Primarily localized camera clip search and per-camera event triggers',
        },
        {
          feature: 'Enterprise Scale',
          sentinel: 'Built for 500 to 5,000+ concurrent 4K camera streams across multi-site infrastructures',
          competitor: 'Optimized primarily for smaller commercial deployments and mid-tier camera counts',
        },
        {
          feature: 'Air-Gapped & Sovereign Defence',
          sentinel: '100% air-gapped runtime with zero internet dependency, ITAR/CJIS compliance, and NATO/defence pedigree',
          competitor: 'Cloud-first or hybrid cloud architecture with potential external connectivity requirements',
        },
        {
          feature: 'Hardware & Camera Independence',
          sentinel: 'Hardware-agnostic: Ingests RTSP/ONVIF streams from any legacy or modern IP camera system',
          competitor: 'Dependent on specific VMS or cloud ingestion bridges',
        },
        {
          feature: 'Alert & Reaction Speed',
          sentinel: 'Sub-second (< 800ms) live trajectory anomaly and perimeter breach alert dispatch',
          competitor: 'Index-and-query model oriented around ad-hoc forensic querying and prompt search',
        },
        {
          feature: 'SOC / C2 Command Integration',
          sentinel: 'Native webhook, MQTT, and RTSP restreaming into Milestone, Genetec, and tactical C2 consoles',
          competitor: 'Standalone web application interface with limited legacy SOC physical security integrations',
        },
      ]}
      keyDifferences={[
        {
          number: '01',
          title: 'Persistent Multi-Camera Spatial Re-ID vs. Single-Camera Search',
          sentinelApproach:
            'Sentinel treats your entire camera network as a single unified neural sensor. When a subject of interest triggers an alert, Sentinel tracks them across dozens of non-overlapping cameras, providing security operators with a continuous real-time timeline and breadcrumb trail.',
          competitorApproach:
            'Natural language search tools like Conntour are built to answer queries like "find the person in the red jacket" on individual recorded segments. They lack the spatial graph coordination needed to actively intercept a target traversing a complex perimeter or military base.',
        },
        {
          number: '02',
          title: 'Mission-Critical Air-Gap vs. Hybrid Cloud Dependencies',
          sentinelApproach:
            'Sentinel is engineered for defence installations, nuclear plants, airports, and correctional facilities where zero packets may leave the local perimeter. All model weights, inference pipelines, and indexing engines run entirely inside your firewall.',
          competitorApproach:
            'Modern search-based vision startups frequently rely on cloud foundation models or hybrid backends for embedding generation and natural language processing, making them unsuitable for classified or high-security environments.',
        },
        {
          number: '03',
          title: 'Designed for High-Volume SOC Operations',
          sentinelApproach:
            'Instead of requiring operators to manually type queries into a search bar, Sentinel uses autonomous rules and behavioral heuristics to surface high-priority perimeter breaches and anomalies instantly, reducing operator fatigue by 95%.',
          competitorApproach:
            'Chat-driven search interfaces place the burden on human operators to prompt and investigate after an incident has already occurred or during manual review.',
        },
      ]}
      faqs={[
        {
          question: 'Does Sentinel support natural language search like Conntour?',
          answer:
            'Yes. Sentinel includes semantic attribute filtering and visual similarity search, but pairs it with automatic live cross-camera spatial tracking so operators do not have to manually query feeds during an active security event.',
        },
        {
          question: 'Can Sentinel run on our existing on-premise hardware without internet access?',
          answer:
            'Yes. Sentinel requires zero cloud connectivity. It runs on local NVIDIA-powered edge workstations, 1U/2U rack servers, or tactical edge appliances completely disconnected from the public internet.',
        },
        {
          question: 'How does Sentinel scale to 1,000+ camera streams?',
          answer:
            'Sentinel uses a distributed edge-node architecture. Multiple edge inference appliances process feeds in parallel and synchronize metadata over a low-bandwidth local messaging bus, allowing virtually unlimited horizontal scaling.',
        },
        {
          question: 'Can we pilot Sentinel on our site before committing?',
          answer:
            'Yes. We offer turnkey 30-day proof-of-concept deployments on 20 to 100 of your existing camera streams, typically installed and operational within 48 hours.',
        },
      ]}
    />
  );
}
