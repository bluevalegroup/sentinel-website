import type { Metadata } from 'next';
import { SolutionPage } from '@/components/SolutionPage';

export const metadata: Metadata = {
  title: 'Airport & Seaport Video Intelligence AI | Sentinel',
  description:
    'Multi-camera passenger re-identification, perimeter waterside protection, and terminal flow intelligence across 500+ to 2,000+ camera streams.',
  keywords: [
    'airport video analytics',
    'passenger cross camera tracking',
    'seaport container terminal AI',
    'maritime perimeter surveillance AI',
    'airport baggage loitering detection',
    'multi camera re-identification software',
  ],
  alternates: {
    canonical: 'https://sentinel.bluevalegrp.com/solutions/airports-ports',
  },
  openGraph: {
    title: 'Airport & Maritime Terminal Video Intelligence | Sentinel',
    description:
      'Persistent multi-camera tracking across high-density transit terminals and maritime perimeters.',
    url: 'https://sentinel.bluevalegrp.com/solutions/airports-ports',
  },
};

export default function AirportsPortsSolutionRoute() {
  return (
    <SolutionPage
      badgeLabel="TRANSPORTATION & MARITIME HUBS"
      solutionTitle="Multi-Camera Passenger & Terminal Spatial Tracking"
      solutionSubtitle="International airports and commercial shipping ports feature thousands of cameras spread across vast terminals, concourses, and waterside berths. Sentinel links disconnected video streams into a unified real-time spatial intelligence grid."
      targetQueryHighlight="Re-identify and map the continuous journey of persons of interest across hundreds of non-overlapping camera feeds in seconds."
      challenges={[
        {
          title: 'Extreme Visual Density & Occlusion',
          desc: 'Concourses and baggage claim zones experience dense crowd flows with frequent occlusions, where basic single-camera tracking algorithms lose target identities immediately.',
        },
        {
          title: 'Hours Lost on Manual Forensic Playback',
          desc: 'When a security breach or lost child occurs, security teams spend hours manually scrubbing through footage across 20+ separate cameras to re-construct a passenger’s path.',
        },
        {
          title: 'Waterside & Airside Perimeter Breaches',
          desc: 'Ports and runways have expansive perimeters where unauthorized vessels or trespassers can cross into restricted flight zones without early alert triggers.',
        },
      ]}
      capabilities={[
        {
          number: '01',
          title: 'Deep Feature Re-Identification',
          desc: 'Extracts deep visual semantic embeddings that maintain persistent target identities across concourses, customs halls, gates, and parking garages.',
          metric: '99.2% RE-ID PERSISTENCE',
        },
        {
          number: '02',
          title: 'Instant Chronological Breadcrumb Trail',
          desc: 'Operators click on an individual to instantly generate a visual map showing their exact route and arrival times across all cameras in the facility.',
          metric: '< 15 SECONDS TO MAP JOURNEY',
        },
        {
          number: '03',
          title: 'Vast Stream Scalability (1,000+ Feeds)',
          desc: 'Distributed edge architecture ingests thousands of simultaneous 1080p and 4K RTSP streams across multiple concourses with high GPU efficiency.',
          metric: 'SCALES TO 2,000+ CAMERAS',
        },
      ]}
      specs={[
        { label: 'Ingestion Scale', value: 'Tested across 1,000+ simultaneous RTSP/ONVIF feeds' },
        { label: 'Re-ID Capabilities', value: 'Appearance attributes, trajectory vectors, time-space graph matching' },
        { label: 'Integration Support', value: 'Milestone XProtect, Genetec Security Center, custom airport AODB' },
        { label: 'Deployment Options', value: 'Centralized airport datacenter or distributed terminal edge nodes' },
      ]}
      faqs={[
        {
          question: 'Does Sentinel store personally identifiable facial data (PII)?',
          answer:
            'No. Sentinel operates on anonymized visual appearance embeddings (clothing, silhouette, spatial trajectory) ensuring complete compliance with GDPR and international airport passenger privacy mandates.',
        },
        {
          question: 'How does Sentinel handle passengers changing lighting zones?',
          answer:
            'Our neural metric learning models are trained to normalize color temperature and illumination shifts between bright outdoor aprons and dim indoor baggage corridors.',
        },
        {
          question: 'Can Sentinel detect unattended baggage in public concourses?',
          answer:
            'Yes. Sentinel tracks spatial owner-object associations and automatically triggers alerts when luggage is abandoned beyond a defined time threshold.',
        },
      ]}
    />
  );
}
