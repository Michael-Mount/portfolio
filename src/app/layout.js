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
  title: "Michael Mount | Front-End Web Developer",
  description:
    "Front-end web developer specializing in React, Next.js, WordPress, and conversion-focused hospitality websites. Explore projects focused on responsive design, performance, SEO, and modern user experiences.",
  keywords: [
    "Michael Mount",
    "Front-End Developer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "WordPress Developer",
    "Hospitality Web Developer",
    "Portfolio",
  ],
  authors: [{ name: "Michael Mount" }],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
