import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { NavTabs } from "@/components/layout/nav-tabs";

const mono = JetBrains_Mono({ 
  subsets: ["latin"],
  weight: ["400", "700"] 
});

export const metadata: Metadata = {
  title: "Magma hyperliquid vaults",
  description: "Monospace-inspired DeFi dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${mono.className} bg-black min-h-screen leading-relaxed`}>
        <main className="min-h-screen p-4 md:max-w-[80ch] md:mx-auto">
          <NavTabs />
          {children}
        </main>
      </body>
    </html>
  );
}
