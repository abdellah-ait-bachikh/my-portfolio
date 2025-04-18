import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import Header from "@/components/Header";
import ToggleDark from "@/components/ToggleDark";
import NavigationContextProvider from "@/context/navigationContext";
import Footer from "@/components/Footer";
import "./globals.css";
const rubikSans = Rubik({
  variable: "--font-rubik-sans",
  subsets: ["latin"],
});
import { NextIntlClientProvider } from "next-intl";
import { getLocale } from "next-intl/server";
import Settings from "@/components/Settings";

// const rubikMon = Rubik({
//   variable: "--font-rubik-mono",
//   subsets: ["latin"],
// });

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

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body
        className={`${rubikSans.variable}  antialiased bg-fixed dark:bg-slate-950 bg-teal-50 relative text-black dark:text-white`}
      >
        {" "}
        <NextIntlClientProvider>
          <NavigationContextProvider>
            <div className="fixed bottom-0 left-0 right-0 top-0 -z-10 bg-[linear-gradient(to_right,#cccccc33_1px,transparent_1px),linear-gradient(to_bottom,#cccccc33_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
            <Settings />
            <Header />
            <main className="z-20">{children}</main>
            <Footer />
          </NavigationContextProvider>{" "}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
