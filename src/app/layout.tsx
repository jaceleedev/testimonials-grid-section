import type { Metadata } from 'next';
import { Barlow_Semi_Condensed } from 'next/font/google';
import './globals.css';

const barlowSemiCondensed = Barlow_Semi_Condensed({
  subsets: ['latin'],
  display: 'swap',
  style: 'normal',
  weight: ['500', '600'],
  variable: '--font-barlow-semi-condensed',
});

export const metadata: Metadata = {
  title: 'Frontend Mentor | Testimonials grid section',
  description:
    'A responsive testimonials grid section built for a Frontend Mentor challenge.',
  generator: 'Next.js',
  applicationName: 'Testimonials Grid Section',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'Frontend Mentor Challenge',
    'Testimonials grid section',
    'Next.js',
    'Tailwind CSS',
    'Typescript',
  ],
  authors: [
    {
      name: 'jaceleedev',
      url: 'https://github.com/jaceleedev/testimonials-grid-section.git',
    },
  ],
  creator: 'jaceleedev',
  publisher: 'jaceleedev',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(
    'https://testimonials-grid-section-zeta-eight.vercel.app'
  ),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Frontend Mentor | Testimonials grid section',
    description:
      'A responsive testimonials grid section built for a Frontend Mentor challenge.',
    url: 'https://testimonials-grid-section-zeta-eight.vercel.app',
    siteName: 'Frontend Mentor | Testimonials grid section',
    images: [
      {
        url: 'https://res.cloudinary.com/dz209s6jk/image/upload/v1603385725/Challenges/uctyehbyqpp90valvmwn.jpg',
        width: 1440,
        height: 900,
        alt: 'Testimonials grid section desktop preview',
      },
      {
        url: 'https://res.cloudinary.com/dz209s6jk/image/upload/v1603385839/Challenges/dzrtw7rkgp2hyilxobkk.jpg',
        width: 500,
        height: 1813,
        alt: 'Testimonials grid section mobile preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Frontend Mentor | Testimonials grid section',
    description:
      'A responsive testimonials grid section built for a Frontend Mentor challenge.',
    images: [
      'https://res.cloudinary.com/dz209s6jk/image/upload/v1603385725/Challenges/uctyehbyqpp90valvmwn.jpg',
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${barlowSemiCondensed.variable}`}>{children}</body>
    </html>
  );
}
