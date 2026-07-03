import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { personalInfo } from "@/data/site";
import CustomCursor from "@/components/ui/CustomCursor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: `${personalInfo.name} | ${personalInfo.title}`,
  icons: {
    // icon: "/favicon.png.png",
    // icon: "/profile.jpg",
    icon: "P.jpg",
  },

  description: `${personalInfo.tagline}. ${personalInfo.summary}`,
  keywords: [
    "Full Stack Developer",
    "Python",
    "Django",
    "React",
    "Next.js",
    personalInfo.name,
  ],
  authors: [{ name: personalInfo.name }],
  openGraph: {
    title: `${personalInfo.name} — Portfolio`,
    description: personalInfo.tagline,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${personalInfo.name} — Portfolio`,
    description: personalInfo.tagline,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans`}>
        {/* <CustomCursor /> */}
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
