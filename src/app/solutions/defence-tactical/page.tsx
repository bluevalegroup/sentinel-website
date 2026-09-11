import type { Metadata } from 'next';
import { SolutionPage } from '@/components/SolutionPage';

export const metadata: Metadata = {
  title: 'Military Base & Tactical C2 Video AI | Sentinel',
  description:
    'Tactical edge computer vision for forward operating bases, military perimeters, and mobile command vehicles. Ruggedized, air-gapped, and ITAR-ready.',
  keywords: [
    'military base security AI',
    'tactical edge video intelligence',
    'forward operating base surveillance AI',
    'military C2 computer vision',
    'air-gapped defence video analytics',
    'ITAR compliant video surveillance',
    'tactical perimeter defense software',
  ],
  alternates: {
    canonical: 'https://sentinel.bluevalegrp.com/solutions/defence-tactical',
  },
  openGraph: {
    title: 'Tactical C2 & Military Base Surveillance AI | Sentinel',
    description:
      'Air-gapped, ruggedized edge vision AI for forward operating locations and military installations.',
    url: 'https://sentinel.bluevalegrp.com/solutions/defence-tactical',
  },
};

export default function DefenceTacticalSolutionRoute() {
  return (
    <SolutionPage
      badgeLabel="DEFENCE & TACTICAL OPERATIONS"
      solutionTitle="Ruggedized Edge Video Intelligence for Defence & Tactical C2"
      solutionSubtitle="Operating in forward deployed bases, tactical operations centers (TOCs), and electronic warfare environments requires intelligence systems with absolute data autonomy. Sentinel delivers high-velocity computer vision on ruggedized edge hardware."
      targetQueryHighlight="Empower base defense operators with autonomous optical/thermal sector tripwires, multi-camera vehicle tracking, and zero external network exposure."
      challenges={[
        {
          title: 'Contested & Degraded Communications',
          desc: 'Military operating bases frequently experience electronic jamming or limited satellite bandwidth, rendering cloud-dependent software completely inoperable.',
        },
        {
          title: 'Asymmetric Infiltration Threats',
          desc: 'Adversaries exploit dead angles, night shadows, and adverse terrain to approach ammunition dumps, airfields, and perimeter wire.',
        },
        {
          title: 'Disparate Sensor Ingestion',
          desc: 'Forward bases deploy a chaotic mix of legacy analog cameras, tactical mast cameras, mobile drone feeds, and pan-tilt units that do not share a common intelligence layer.',
        },
      ]}
      capabilities={[
        {
          number: '01',
          title: 'Autonomous Forward Edge Runtime',
          desc: 'Sentinel runs on compact, MIL-STD ruggedized edge appliances or vehicle-mounted compute boxes. All tensor inference executes locally with zero uplink requirements.',
          metric: '100% AIR-GAPPED & EW-RESILIENT',
        },
        {
          number: '02',
          title: 'Multi-Sensor Sensor Fusion Ready',
          desc: 'Ingests standard optical feeds, long-range thermal sensors, and PTZ mast feeds, harmonizing them into a single coherent tactical common operating picture (COP).',
          metric: 'FUSES OPTICAL & THERMAL',
        },
        {
          number: '03',
          title: 'Sub-Second Tactical Alerting',
          desc: 'Fires instant target detection vectors directly into ATAK, tactical radio meshes, and base defense command and control (C2) consoles in under 800 milliseconds.',
          metric: '< 800MS TARGET DETECTION',
        },
      ]}
      specs={[
        { label: 'Form Factors', value: 'Ruggedized 1U/2U server, NVIDIA Jetson edge, vehicle-mount appliances' },
        { label: 'Security & Compliance', value: 'ITAR-ready, zero telemetry, full data sovereignty behind NATO-grade firewalls' },
        { label: 'C2 Interfaces', value: 'ATAK / CoT plugins, REST API, MQTT, encrypted RTSP video restreaming' },
        { label: 'Sensor Support', value: 'Fixed optical, thermal LWIR/MWIR, PTZ, aerial tethered surveillance feeds' },
      ]}
      faqs={[
        {
          question: 'Can Sentinel be deployed inside mobile tactical command vehicles?',
          answer:
            'Yes. Sentinel is optimized for compact, low-power NVIDIA Jetson Orin and compact industrial edge GPU boxes that operate reliably on vehicle DC power in rugged environments.',
        },
        {
          question: 'Does Sentinel integrate with ATAK (Android Tactical Assault Kit)?',
          answer:
            'Yes. Sentinel can dispatch Cursor-on-Target (CoT) XML messages over local tactical IP radios directly into ATAK and WinTAK mapping systems.',
        },
        {
          question: 'Is Sentinel compliant with ITAR and defence procurement guidelines?',
          answer:
            'Yes. Developed by Bluevale Defence, Sentinel adheres strictly to sovereign defence standards, with zero third-party cloud data exposure or proprietary hardware lock-in.',
        },
      ]}
    />
  );
}
