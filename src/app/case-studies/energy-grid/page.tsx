import type { Metadata } from 'next';
import { CaseStudyPage } from '@/components/CaseStudyPage';

export const metadata: Metadata = {
  title: 'Field Dossier: 100% Air-Gapped Substation Security AI | Sentinel',
  description:
    'Case study: How an energy utility deployed Sentinel across 14 high-voltage electrical substations with 100% air-gapped data sovereignty and NERC CIP compliance.',
  keywords: [
    'substation physical security case study',
    'air-gapped video analytics utility',
    'NERC CIP video security AI',
    'energy grid perimeter protection results',
    'utility copper theft surveillance AI',
  ],
  alternates: {
    canonical: 'https://sentinel.bluevalegrp.com/case-studies/energy-grid',
  },
  openGraph: {
    title: 'Case Study: 14 Air-Gapped Electrical Substations | Sentinel Vision AI',
    description:
      'Zero packets egressed. 100% compliance with NERC CIP cyber mandates across remote unmanned substations.',
    url: 'https://sentinel.bluevalegrp.com/case-studies/energy-grid',
  },
};

export default function EnergyGridCaseStudyRoute() {
  return (
    <CaseStudyPage
      badgeLabel="CRITICAL UTILITIES & ENERGY"
      caseTitle="100% Air-Gapped Perimeter Intelligence Across 14 Electrical Substations"
      caseSubtitle="How a regional power utility stopped recurring copper theft and equipment vandalism across unmanned substations with zero external cloud connectivity."
      executiveSummary="Managing 14 remote, unmanned high-voltage electrical substations, a major energy utility suffered $420,000 in damages from copper theft and perimeter fence breaches within a single calendar year. Strict NERC CIP regulatory mandates banned cloud-connected video systems, while remote cellular bandwidth limits prevented streaming raw video back to headquarters. Sentinel deployed onto compact 1U industrial edge appliances at each substation. The system runs 100% disconnected from the internet, transmitting sub-second verified alerts and activating on-site acoustic deterrents automatically."
      clientProfile={{
        industry: 'Energy Transmission & High-Voltage Electric Utility',
        scale: '14 Substations with 56 Outdoor Optical & Thermal Cameras',
        geography: 'Rural & suburban power transmission corridors',
        previousSetup: 'PIR beam sensors with legacy analog DVRs',
      }}
      metrics={[
        { num: '100%', label: 'Air-Gapped Isolation' },
        { num: '88%', label: 'Theft Incidents Prevented' },
        { num: '$420K', label: 'Annual Losses Avoided' },
        { num: '0 bps', label: 'Cloud Bandwidth Consumed' },
      ]}
      challenge={{
        title: 'Vulnerable Unmanned Assets Bound by Strict Cyber Mandates',
        paragraphs: [
          'High-voltage transformer substations represent critical national infrastructure vulnerable to physical sabotage and metal theft. Because the sites are unmanned, thieves routinely breached fences at night, stripping grounded copper cables and causing catastrophic power outages.',
          'The utility’s chief information security officer (CISO) strictly barred any cloud-based physical security solutions due to NERC CIP-014 compliance rules, which mandate that no electronic surveillance hardware may have foreign cloud telemetry connections.',
        ],
        listItems: [
          'Frequent copper wire theft causing substation outages and safety hazards',
          'NERC CIP-014 audit penalties for unauthorized external cloud streams',
          'Low-bandwidth SCADA network incapable of streaming full-motion video',
        ],
      }}
      deployment={{
        title: 'Autonomous Local Edge Inference with SCADA Relay Triggers',
        paragraphs: [
          'Sentinel was installed on 1U ruggedized edge servers inside the hardened relay house of each of the 14 substations. The systems ingested camera feeds locally over an isolated, physical OT network switch.',
          'When Sentinel’s neural network detects a human crossing the outer perimeter fence, it immediately initiates a dual response: it trips a local physical relay output to activate bright perimeter LED floodlights and warning sirens, while sending an encrypted 15KB event thumbnail packet over the SCADA network to central dispatch.',
        ],
        listItems: [
          '100% local TensorRT inference running behind the physical firewall',
          'Autonomous deterrence via dry contact relay outputs to sirens and strobes',
          'Zero continuous streaming bandwidth required over SCADA links',
        ],
      }}
      results={{
        title: 'Zero Substation Incursions and Full Cyber Audit Compliance',
        paragraphs: [
          'In the 12 months following Sentinel’s deployment, the utility experienced zero successful theft incidents across all 14 substations. In three attempted intrusion events, Sentinel’s automatic acoustic warnings and floodlights caused intruders to flee before touching high-voltage equipment.',
          'The utility successfully passed its annual federal NERC CIP physical and cyber security audit with zero non-compliance findings, confirming complete electronic isolation.',
        ],
        listItems: [
          'Prevented an estimated $420,000 in annual physical replacement and repair costs',
          '100% audit pass rate for NERC CIP-014 electronic perimeter compliance',
          'Approved for multi-year standardization across an additional 32 substations',
        ],
      }}
    />
  );
}
