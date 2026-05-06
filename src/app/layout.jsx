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
  title: "Din Islam | MERN Stack Developer",
  description: "Portfolio of Din Islam, a Full-Stack MERN Developer specializing in scalable web applications.",
};

import ClientLayout from "@/components/ClientLayout";

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="bg-brand-dark text-white selection:bg-blue-500/30">
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
