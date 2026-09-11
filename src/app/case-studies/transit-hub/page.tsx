import type { Metadata } from 'next';
import { CaseStudyPage } from '@/components/CaseStudyPage';

export const metadata: Metadata = {
  title: 'Field Dossier: Cross-Camera Passenger Tracking Across 650 Feeds | Sentinel',
  description:
    'Case study: How a major international airport terminal deployed Sentinel to reconstruct passenger journeys across 650 cameras in under 15 seconds without storing PII.',
  keywords: [
    'airport video analytics case study',
    'passenger re-identification results',
    'airport security CCTV AI',
    'lost child tracking video AI',
    'terminal flow intelligence case study',
  ],
  alternates: {
    canonical: 'https://sentinel.bluevalegrp.com/case-studies/transit-hub',
  },
  openGraph: {
    title: 'Case Study: Airport Multi-Camera Re-ID Across 650 Feeds | Sentinel',
    description:
      'Tracing critical terminal security incidents in < 15 seconds across 650 disconnected camera feeds.',
    url: 'https://sentinel.bluevalegrp.com/case-studies/transit-hub',
  },
};

export default function TransitHubCaseStudyRoute() {
  return (
    <CaseStudyPage
      badgeLabel="COMMERCIAL AVIATION & TRANSIT"
      caseTitle="Tracing Critical Security Incidents in < 15 Seconds Across 650 Airport Feeds"
      caseSubtitle="How a tier-1 international airport modernized terminal security operations with unified multi-camera spatial tracking across 650 legacy IP cameras without ripping out existing infrastructure."
      executiveSummary="Handling 32 million passengers annually, an international airport terminal struggled with long investigation delays when tracking lost minors or unauthorized passengers slipping into restricted zones. Security teams historically required up to 45 minutes of manual video playback across isolated camera feeds to reconstruct a route. Sentinel was connected to 650 existing RTSP streams. Using anonymized deep feature embeddings, Sentinel reduced journey reconstruction time to under 15 seconds while remaining 100% compliant with passenger privacy regulations."
      clientProfile={{
        industry: 'International Aviation & Airport Terminal Security',
        scale: '650 Camera Feeds Across 2 Terminals & Concourse Bridges',
        geography: 'Tier-1 International Transit Hub (32M+ Annual Passengers)',
        previousSetup: 'Milestone XProtect VMS with manual operator playback',
      }}
      metrics={[
        { num: '< 15s', label: 'Journey Mapping Time' },
        { num: '650', label: 'Legacy Cameras Integrated' },
        { num: '3.2 hrs', label: 'Saved per Investigation' },
        { num: '0 PII', label: 'Facial Biometrics Stored' },
      ]}
      challenge={{
        title: 'Fragmented Camera Feeds Blind to Passenger Mobility',
        paragraphs: [
          'Airport security operators faced a fragmented surveillance wall: 650 cameras installed over 15 years by different contractors (Hanwha, Axis, Bosch). When an incident occurred—such as a passenger walking through an open exit door in reverse—operators had to manually guess which camera the subject would appear on next.',
          'In crowded terminals, target identity was lost within seconds due to severe crowd occlusions and lighting shifts between glass atriums and baggage corridors.',
        ],
        listItems: [
          'Average incident trace took 45 to 60 minutes of manual scrubbing',
          'Ripping out 650 cameras was quoted at $3.2M with 18 months of disruption',
          'Strict EU GDPR and passenger biometric regulations prohibited facial recognition databases',
        ],
      }}
      deployment={{
        title: 'Non-Invasive RTSP Ingestion with Anonymized Embeddings',
        paragraphs: [
          'Sentinel was deployed inside the airport’s private datacenter across two GPU edge clusters. The software ingested RTSP feeds directly from the existing Milestone VMS without any changes to network topology or camera hardware.',
          'Instead of facial recognition, Sentinel generated anonymized spatial-temporal embeddings based on silhouette, clothing color histograms, and movement trajectories, completely bypassing PII privacy concerns.',
        ],
        listItems: [
          'Direct integration into Milestone XProtect Smart Client via webhooks',
          'Persistent multi-camera re-ID across non-overlapping terminal gates',
          'Real-time unattended baggage anomaly triggers',
        ],
      }}
      results={{
        title: 'Instant Chronological Route Generation and Rapid Incident Resolution',
        paragraphs: [
          'During live pilot operations, an alert was triggered when an unauthorized passenger slipped past a TSA exit door. Operators clicked on the initial detection and Sentinel mapped the subject’s exact multi-camera timeline across Gate 12, the duty-free lounge, and the lower transit tunnel in 12 seconds.',
          'Ground security intercepted the individual before they reached boarding gates, avoiding a full terminal evacuation that would have cost airlines an estimated $1.8M in flight delays.',
        ],
        listItems: [
          'Incident journey reconstruction time reduced from 45 minutes to 12 seconds',
          'Saved an estimated $1.8M by preventing a full terminal security dump',
          'Immediate contract expansion to cover cargo bays and perimeter fencing',
        ],
      }}
    />
  );
}
