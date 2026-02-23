import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Harshvardhan Singh Jadon | DevOps & Platform Engineer",
  description:
    "DevOps & Platform Engineer with 4+ years of experience building cloud-native platforms across AWS and Azure. Kubernetes, Terraform, CI/CD, and Gen AI.",
  keywords: [
    "DevOps Engineer",
    "Platform Engineer",
    "AWS",
    "Azure",
    "Kubernetes",
    "Terraform",
    "Cloud Engineer",
    "Harshvardhan Singh Jadon",
    "jadonharsh",
    "Freelance DevOps",
    "Gen AI",
    "MLOps",
    "howie.systems",
    "Upwork",
  ],
  authors: [{ name: "Harshvardhan Singh Jadon" }],
  creator: "Harshvardhan Singh Jadon",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jadonharsh.in",
    title: "Harshvardhan Singh Jadon | DevOps & Platform Engineer",
    description:
      "DevOps & Platform Engineer with 4+ years of experience building cloud-native platforms across AWS and Azure.",
    siteName: "jadonharsh.in",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harshvardhan Singh Jadon | DevOps & Platform Engineer",
    description:
      "DevOps & Platform Engineer with 4+ years of experience building cloud-native platforms across AWS and Azure.",
  },
  metadataBase: new URL("https://jadonharsh.in"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrains.variable} antialiased bg-[#050505] text-[#ededed]`}
      >
        {children}
      </body>
    </html>
  );
}
