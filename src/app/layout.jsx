import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Din Islam | MERN Stack Developer",
    template: "%s | Din Islam"
  },
  description: "Din Islam is a professional MERN Stack Developer specializing in React, Next.js, Node.js, and MongoDB. Explore my projects, skills, and professional experience in full-stack web development.",
  keywords: ["Din Islam", "MERN Stack Developer", "Full Stack Developer", "React Developer", "Next.js Developer", "Web Developer Bangladesh", "Software Engineer"],
  authors: [{ name: "Din Islam" }],
  creator: "Din Islam",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dinislam.dev", // Replace with actual domain if known
    title: "Din Islam | MERN Stack Developer",
    description: "Professional portfolio of Din Islam, a MERN Stack Developer specializing in high-performance web applications.",
    siteName: "Din Islam Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Din Islam | MERN Stack Developer",
    description: "Full-Stack Web Developer specialized in the MERN ecosystem.",
  },
  robots: {
    index: true,
    follow: true,
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Din Islam",
  "url": "https://dinislam.dev",
  "jobTitle": "MERN Stack Developer",
  "alumniOf": "Noakhali University",
  "knowsAbout": ["React", "Next.js", "Node.js", "MongoDB", "Full Stack Development"],
  "sameAs": [
    "https://github.com/Dinislamj6",
    "https://www.linkedin.com/in/dinislamdev",
    "https://instagram.com/dinislamdev"
  ]
};

import ClientLayout from "@/components/ClientLayout";

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="bg-brand-dark text-white selection:bg-blue-500/30">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
