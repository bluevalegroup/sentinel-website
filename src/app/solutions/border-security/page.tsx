import type { Metadata } from 'next';
import { SolutionPage } from '@/components/SolutionPage';

export const metadata: Metadata = {
  title: 'Border & Perimeter Security Vision AI | Sentinel',
  description:
    'Autonomous perimeter intrusion detection and multi-camera spatial tracking for long-range borders, high-security fences, and unstructured terrain. 100% on-premise air-gapped edge AI.',
  keywords: [
    'border surveillance AI',
    'perimeter intrusion detection software',
    'CCTV AI border security',
    'tactical perimeter surveillance',
    'thermal and optical video analytics',
    'air-gapped border security AI',
    'long range perimeter protection',
  ],
  alternates: {
    canonical: 'https://sentinel.bluevalegrp.com/solutions/border-security',
  },
  openGraph: {
    title: 'Autonomous Border & Perimeter Security | Sentinel Vision AI',
    description:
      'Eliminate 90%+ of nuisance alarms. Sub-second intruder intercept alerts across long-range unstructured perimeters.',
    url: 'https://sentinel.bluevalegrp.com/solutions/border-security',
  },
};

export default function BorderSecuritySolutionRoute() {
  return (
    <SolutionPage
      badgeLabel="BORDER & PERIMETER DEFENSE"
      solutionTitle="Autonomous Perimeter Intrusion Detection & Spatial Tracking"
      solutionSubtitle="Securing vast, unstructured terrain requires continuous vigilance without operator fatigue. Sentinel transforms existing optical and thermal cameras into an autonomous tripwire and continuous tracking mesh."
      targetQueryHighlight="Detect, classify, and track hostile incursions across tens of kilometers of fence line in under 800 milliseconds — with zero reliance on cloud connections."
      challenges={[
        {
          title: 'Extreme False Alarm Fatigue',
          desc: 'Windblown foliage, shifting sand, animals, and weather generate hundreds of false triggers daily in legacy motion systems, blinding operators to real breach attempts.',
        },
        {
          title: 'Vast Spatial Blindspots',
          desc: 'Perimeters span tens of kilometers. Human sentries cannot continuously monitor dozens of disparate camera monitors simultaneously without missing fleeting intruder crossings.',
        },
        {
          title: 'Bandwidth & Connectivity Constraints',
          desc: 'Remote border outposts frequently operate in bandwidth-starved or contested electronic environments where streaming raw video to a remote cloud is impossible.',
        },
      ]}
      capabilities={[
        {
          number: '01',
          title: 'Deep Metric Neural Classification',
          desc: 'Sentinel filters out environmental noise, birds, shadows, and vegetation in real time. It isolates humans, crawling targets, light vehicles, and maritime craft with near-zero false alarms.',
          metric: '94% REDUCTION IN FALSE ALARMS',
        },
        {
          number: '02',
          title: 'Multi-Camera Non-Overlapping Re-ID',
          desc: 'When an intruder crosses Sector 3 and moves inland toward Sector 7, Sentinel maintains a continuous spatial breadcrumb trail across non-overlapping camera fields of view.',
          metric: '< 800MS DISPATCH LATENCY',
        },
        {
          number: '03',
          title: '100% Air-Gapped Tactical Ruggedization',
          desc: 'Runs locally on ruggedized edge boxes deployed in forward outposts or solar-powered perimeter trailers without a single byte of internet telemetry.',
          metric: 'ZERO INTERNET DEPENDENCY',
        },
      ]}
      specs={[
        { label: 'Video Protocols', value: 'RTSP, ONVIF Profile S/G/T, H.264, H.265' },
        { label: 'Sensor Compatibility', value: 'Long-range optical, cooled/uncooled thermal, PTZ auto-tracking' },
        { label: 'Alert Dispatch', value: 'Webhooks, MQTT, Milestone/Genetec alarms, tactical C2 feeds' },
        { label: 'Deployment Model', value: '100% on-premise edge appliances or ruggedized tactical compute' },
      ]}
      faqs={[
        {
          question: 'Can Sentinel ingest thermal and infrared camera feeds?',
          answer:
            'Yes. Sentinel is trained on multi-spectral imagery, including standard optical 1080p/4K feeds and long-wave infrared (LWIR) thermal sensors.',
        },
        {
          question: 'How does Sentinel handle extreme weather conditions?',
          answer:
            'Our spatial-temporal neural network evaluates motion trajectory vectors over multi-frame sequences, allowing it to distinguish human locomotion through rain, snow, fog, and dust storms.',
        },
        {
          question: 'Can Sentinel automatically slew PTZ cameras to follow targets?',
          answer:
            'Yes. Sentinel calculates real-time geospatial coordinate offsets and dispatches PTZ command instructions to lock onto and track intruders across sectors.',
        },
      ]}
    />
  );
}
