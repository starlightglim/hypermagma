import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavTabs } from "@/components/layout/nav-tabs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Magma hyperliquid vaults",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-black min-h-screen`}>
        <main className="min-h-screen p-4 md:p-8">
          <NavTabs />
          {children}
        </main>
      </body>
    </html>
  );
}
