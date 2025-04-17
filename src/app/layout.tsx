import type { Metadata } from "next";
import { Geist, Geist_Mono, Rubik } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const rubikSans = Rubik({
  variable: "--font-rubik-sans",
  subsets: ["latin"],
});
const rubikMon = Rubik({
  variable: "--font-rubik-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abdellah | Full-Stack Developer Portfolio",
  description:
    "Welcome to my personal portfolio — I'm Abdellah, a passionate full-stack developer showcasing my projects, skills, and experience.",
  keywords: [
    "Abdellah",
    "Full-Stack Developer",
    "Web Developer",
    "Portfolio",
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
  ],
  authors: [{ name: "Abdellah" }],
  creator: "Abdellah",
  openGraph: {
    title: "Abdellah | Full-Stack Developer Portfolio",
    description: "Explore my projects, skills, and web development journey.",
    url: "https://your-portfolio-url.com", // replace with your real URL
    siteName: "Abdellah Portfolio",
    images: [
      {
        url: "https://your-portfolio-url.com/og-image.png", // replace with your Open Graph image URL
        width: 1200,
        height: 630,
        alt: "Abdellah Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdellah | Full-Stack Developer Portfolio",
    description:
      "Check out my personal portfolio — projects, skills, and web development experience.",
    images: ["https://your-portfolio-url.com/og-image.png"], // same as your Open Graph image
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${rubikSans.variable} ${rubikMon.variable} antialiased bg-fixed bg-gradient-to-br from-pink-100 via-gray-100 to-green-100 min-h-screen dark:from-slate-900 dark:via-slate-800/95 dark:to-slate-800/90 text-black dark:text-white relative`}
      >
        <Header />
        <main className="min-h-[200vh]">{children}</main>
      </body>
    </html>
  );
}
