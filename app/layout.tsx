import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "MD Fataharul Islam | CSE Undergrad & Web Developer",
  description: "Computer Science undergraduate, competitive programmer, and web developer passionate about solving algorithmic problems and building scalable applications.",
  keywords: ["software engineer", "web developer", "competitive programming", "next.js", "react", "portfolio"],
  authors: [{ name: "MD Fataharul Islam" }],
  openGraph: {
    title: "MD Fataharul Islam | CSE Undergrad & Web Developer",
    description: "Computer Science undergraduate, competitive programmer, and web developer",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.variable} ${plusJakartaSans.variable} font-sans antialiased selection:bg-primary/30 selection:text-white`}>
        {children}
      </body>
    </html>
  );
}
