import type { Metadata } from 'next';
import { SolutionPage } from '@/components/SolutionPage';

export const metadata: Metadata = {
  title: 'Critical Infrastructure Video AI | Sentinel',
  description:
    'Sovereign, air-gapped video analytics for energy substations, nuclear facilities, water utilities, and oil & gas terminals. Strict NERC CIP & zero-trust compliance.',
  keywords: [
    'critical infrastructure video analytics',
    'substation security AI',
    'NERC CIP video surveillance',
    'air-gapped utility security software',
    'nuclear facility CCTV AI',
    'sovereign perimeter intrusion AI',
  ],
  alternates: {
    canonical: 'https://sentinel.bluevalegrp.com/solutions/critical-infrastructure',
  },
  openGraph: {
    title: 'Critical Infrastructure Surveillance AI | Sentinel',
    description:
      'Zero-trust, air-gapped video intelligence for substations, energy grids, and high-security utility assets.',
    url: 'https://sentinel.bluevalegrp.com/solutions/critical-infrastructure',
  },
};

export default function CriticalInfrastructureSolutionRoute() {
  return (
    <SolutionPage
      badgeLabel="CRITICAL INFRASTRUCTURE PROTECTION"
      solutionTitle="Zero-Trust Perimeter Intelligence for Utilities & Energy Grids"
      solutionSubtitle="Electrical substations, water treatment plants, and nuclear generation facilities require impenetrable physical security with strict cyber compliance. Sentinel delivers autonomous threat detection with zero cloud exposure."
      targetQueryHighlight="Comply with NERC CIP and critical asset mandates while stopping sabotage, vandalism, and unauthorized perimeter incursions in real time."
      challenges={[
        {
          title: 'Unmanned Remote Asset Exposure',
          desc: 'High-voltage substations and pipeline valves are often geographically isolated and unmanned, leaving them vulnerable to coordinated sabotage and copper theft.',
        },
        {
          title: 'Strict Cyber Air-Gap Mandates',
          desc: 'Government regulations prohibit cloud-connected IoT cameras or third-party SaaS streaming from critical energy assets, disqualifying standard cloud security vendors.',
        },
        {
          title: 'Delayed Emergency Response Time',
          desc: 'When an alarm sounds at an unmanned substation 45 minutes outside the city, security operators must verify whether it is a squirrel or an intruder before dispatching law enforcement.',
        },
      ]}
      capabilities={[
        {
          number: '01',
          title: 'NERC CIP & ITAR Certified Air-Gap',
          desc: 'Sentinel deploys entirely inside your operational technology (OT) network behind unidirectional security gateways with zero external internet handshakes.',
          metric: '100% OT NETWORK ISOLATION',
        },
        {
          number: '02',
          title: 'Sub-Second Visual Verification',
          desc: 'Instant visual verification clips dispatch to central SOC dispatchers within 800ms of a perimeter fence touch or loitering vehicle, preventing unauthorized substation breaches.',
          metric: '< 800MS OPERATOR DISPATCH',
        },
        {
          number: '03',
          title: 'Universal IP Camera Retrofit',
          desc: 'Upgrades legacy analog and IP cameras already installed at your remote sites. Connect over existing SCADA and RTSP networks with zero hardware replacement.',
          metric: '$0 CAMERA REPLACEMENT',
        },
      ]}
      specs={[
        { label: 'Cyber Standards', value: 'NERC CIP-014 compliant, NDAA Section 889 compliant' },
        { label: 'Network Architecture', value: 'Air-gapped local edge nodes, local Syslog & SIEM integration' },
        { label: 'Alert Protocols', value: 'Relay I/O triggers, SNMP traps, SCADA telemetry, encrypted webhooks' },
        { label: 'Hardware Profile', value: '1U/2U server or DIN-rail industrial edge compute' },
      ]}
      faqs={[
        {
          question: 'Does Sentinel send telemetry or error reports back to the cloud?',
          answer:
            'No. Sentinel operates with 100% telemetry silence. No outbound ports are required, satisfying NERC CIP electronic security perimeter requirements.',
        },
        {
          question: 'Can Sentinel trigger physical deterrence sirens and strobe lights?',
          answer:
            'Yes. Sentinel can trigger IP relay outputs and sound sirens, flash high-intensity LED strobes, or activate recorded voice warning messages the moment an intruder crosses a boundary line.',
        },
        {
          question: 'Can Sentinel run on low-bandwidth satellite or cellular links?',
          answer:
            'Yes. Because all video inference happens locally at the substation edge, Sentinel only transmits lightweight metadata and thumbnail alerts over your SCADA network, consuming negligible bandwidth.',
        },
      ]}
    />
  );
}
