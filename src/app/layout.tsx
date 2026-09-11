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
        featureList: [
          'Natural Language Video Search',
          'Autonomous Multi-Camera Tracking',
          'Sovereign On-Premise Deployment',
          'Zero-Latency Stream Processing',
          'Air-Gapped Infrastructure Support',
          'Real-time Anomaly Detection',
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
            name: 'What is Sentinel?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Sentinel is an AI Video Intelligence Platform developed by Bluevale Defence. It connects directly to your existing camera infrastructure to allow security operators to search, understand, and investigate footage in real time using natural language.',
            },
          },
          {
            '@type': 'Question',
            name: 'How does natural language search work across security cameras?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Sentinel translates visual video streams into semantic intelligence, enabling operators to type plain-language queries—like 'a person in a red jacket' or 'a white delivery van'—to instantly locate matching events across hundreds of cameras.",
            },
          },
          {
            '@type': 'Question',
            name: 'Can Sentinel be deployed in air-gapped or classified environments?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Sentinel is built with sovereign, air-gapped architecture. All AI inference and video data stay completely within your local infrastructure, with zero cloud dependency or external data leakage.',
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
