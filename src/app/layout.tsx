import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/lib/theme-context";

const sora = Sora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Raindex - Deterministic AI for Logistics Contracts",
  description: "Raindex is a SaaS platform that lets shippers simulate, compare, and execute multi-carrier logistics strategy.",
  icons: {
    icon: "/images/favicon.ico",
  },
  openGraph: {
    title: "Raindex",
    description: "Simulate, compare, and execute logistics contract logic with deterministic AI.",
    url: "https://raindex.ai",
    siteName: "Raindex",
    images: [
      {
        url: "/images/socialpreview.png",
        width: 1200,
        height: 630,
        alt: "Raindex Hero Image",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Raindex",
    description: "Simulate, compare, and execute logistics contract logic with deterministic AI.",
    images: ["/images/socialpreview.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={sora.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
