import type { Metadata, Viewport } from 'next';
import { Sora } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
});

const SITE_URL = 'https://sentinel.bluevalegrp.com';

export const viewport: Viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Sentinel — AI Video Intelligence Platform | Bluevale Defence',
    template: '%s | Sentinel — AI Video Intelligence',
  },
  description:
    'Sentinel is an AI Video Intelligence Platform by Bluevale Defence. Search, understand and investigate video across your camera network in real time using natural language. Sovereign, on-premise and air-gapped security.',
  keywords: [
    'Sentinel',
    'Sentinel AI',
    'Sentinel video intelligence',
    'AI video intelligence',
    'AI video intelligence platform',
    'natural language video search',
    'video analytics software',
    'CCTV AI intelligence',
    'camera network search',
    'physical security intelligence',
    'real-time anomaly detection',
    'sovereign video intelligence',
    'air-gapped video analytics',
    'defence video intelligence',
    'critical infrastructure security',
    'perimeter video monitoring AI',
    'Bluevale Defence',
    'Bluevale Sentinel',
  ],
  authors: [{ name: 'Bluevale Defence', url: 'https://bluevalegrp.com' }],
  creator: 'Bluevale Defence',
  publisher: 'Bluevale Defence',
  applicationName: 'Sentinel',
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'Sentinel — AI Video Intelligence',
    title: 'Sentinel — AI Video Intelligence Platform | Bluevale Defence',
    description:
      'Search, understand and investigate video across your camera network in real time using natural language. Sovereign, on-premise and air-gapped security intelligence.',
    images: [
      {
        url: '/assets/sentinel-dashboard-final.png',
        width: 1200,
        height: 630,
        alt: 'Sentinel AI Video Intelligence Platform Dashboard',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sentinel — AI Video Intelligence Platform | Bluevale Defence',
    description:
      'Search, understand and investigate video across your camera network in real time using natural language. Built for high-security environments.',
    images: ['/assets/sentinel-dashboard-final.png'],
    creator: '@bluevaledefence',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/assets/sentinel-icon-transparent.png',
    shortcut: '/assets/sentinel-icon-transparent.png',
    apple: '/assets/sentinel-icon-transparent.png',
  },
  category: 'security technology',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://bluevalegrp.com/#organization',
        name: 'Bluevale Defence',
        url: 'https://bluevalegrp.com',
        logo: {
          '@type': 'ImageObject',
          url: `${SITE_URL}/assets/sentinel-logo.png`,
        },
        sameAs: ['https://github.com/bluevalegroup'],
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: 'Sentinel',
        publisher: {
          '@id': 'https://bluevalegrp.com/#organization',
        },
        description:
          'Sentinel is an AI Video Intelligence Platform that searches, understands, and investigates video across camera networks using natural language.',
      },
      {
        '@type': 'SoftwareApplication',
        '@id': `${SITE_URL}/#software`,
        name: 'Sentinel',
        applicationCategory: 'SecurityApplication',
        operatingSystem: 'Linux, Sovereign On-Premise, Air-Gapped Cloud',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
          description: 'Request a Demonstration',
        },
        description:
          'AI Video Intelligence Platform for real-time natural language search, anomaly detection, and automated video investigation across distributed camera streams.',
        applicationSubCategory: 'AI Video Intelligence & CCTV Video Analytics',
        featureList: [
          'Natural Language Video Search',
          'Autonomous Multi-Camera Tracking',
          'Sovereign On-Premise Deployment',
          'Zero-Latency Stream Processing',
          'Air-Gapped Infrastructure Support',
          'Real-time Anomaly Detection',
          'Object and Action Retrieval',
          'RTSP and ONVIF Camera Stream Integration',
        ],
        knowsAbout: [
          'Natural Language Video Search',
          'Computer Vision Surveillance',
          'CCTV Video Analytics',
          'Multi-Camera Tracking',
          'Perimeter Breach Detection',
          'Sovereign Air-Gapped AI',
          'Real-Time Security Anomaly Detection',
          'Video Forensic Investigation',
        ],
        author: {
          '@id': 'https://bluevalegrp.com/#organization',
        },
      },
      {
        '@type': 'FAQPage',
        '@id': `${SITE_URL}/#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: 'How can I search CCTV or security camera footage using natural language?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Modern AI video intelligence platforms like Sentinel translate live and recorded camera streams into semantic intelligence. Security operators can type plain-language queries—such as 'a person passing a bag to another person', 'a person in a red jacket', or 'a white delivery van'—and retrieve matching footage and timestamps across hundreds of cameras in seconds, replacing hours of manual video review.",
            },
          },
          {
            '@type': 'Question',
            name: 'What is an AI video intelligence platform and how does it work?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'An AI video intelligence platform connects directly to IP and CCTV camera networks (via standard RTSP/ONVIF streams) to continuously analyze video in real time. Using deep computer vision models, it understands objects, humans, vehicles, and behavioral actions, automatically detecting security anomalies and enabling instant natural language video investigations.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can AI track a specific person or vehicle across hundreds of camera feeds?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Sentinel correlates visual characteristics—such as clothing colors, carried objects, and vehicle attributes—across your entire distributed camera network. Operators can track a subject or event seamlessly across multiple camera views to reconstruct full movement timelines without external cloud processing.',
            },
          },
          {
            '@type': 'Question',
            name: 'What are the best on-premise, air-gapped video analytics solutions for critical infrastructure and defence?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Sentinel by Bluevale Defence is engineered specifically for sovereign, air-gapped, and mission-critical environments. It operates completely on-premise with zero cloud connectivity or external data transmission, ensuring defence bases, energy infrastructure, government sites, and industrial facilities maintain full operational sovereignty.',
            },
          },
          {
            '@type': 'Question',
            name: 'How does AI video intelligence reduce false alarms compared to traditional motion detection?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Traditional security camera motion detection triggers alerts on simple pixel changes caused by weather, moving shadows, leaves, or wildlife. AI video intelligence understands scene semantics and context, distinguishing benign environmental motion from genuine threats such as perimeter breaches, unauthorized vehicle movement, or suspicious interactions.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can Sentinel integrate with existing security cameras without replacing hardware?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Sentinel is hardware-agnostic and connects to existing security camera infrastructure via standard RTSP and ONVIF video feeds. Organizations can deploy Sentinel on local edge servers or private data centers without replacing cameras or rewiring facilities.',
            },
          },
        ],
      },
    ],
  };

  return (
    <html lang="en" className={sora.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
