import type { Metadata } from 'next';
import { PilotPageClient } from '@/components/PilotPageClient';

export const metadata: Metadata = {
  title: '48-Hour Sovereign Evaluation Pilot | Sentinel Vision AI',
  description:
    'Deploy Sentinel on a 30-day proof-of-concept in 48 hours. Ingest 10 to 50 existing RTSP feeds with zero camera replacement, 100% air-gapped data sovereignty, and zero cloud lock-in.',
  keywords: [
    'video analytics pilot',
    'CCTV AI proof of concept',
    'air-gapped vision AI evaluation',
    'on-premise CCTV intelligence trial',
    'defence video intelligence pilot',
    'multi-camera tracking POC',
    'enterprise security camera AI trial',
  ],
  alternates: {
    canonical: 'https://sentinel.bluevalegrp.com/pilot',
  },
  openGraph: {
    title: 'Deploy Sentinel in 48 Hours | 30-Day Sovereign Pilot',
    description:
      'Connect 10 to 50 existing RTSP streams. Zero camera replacements, zero network disruption, 100% air-gapped.',
    url: 'https://sentinel.bluevalegrp.com/pilot',
  },
};

export default function PilotRoute() {
  return <PilotPageClient />;
}
