'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { MagmaLogo } from "@/components/ui/magma-logo";

export function NavTabs() {
  const pathname = usePathname();

  return (
    <nav className="flex justify-between items-center mb-8">
      <div className="text-2xl font-bold text-[#A1FFCE]">
        <MagmaLogo />
      </div>
      
      <div className="flex gap-1 bg-black/50 p-1 rounded-lg border border-zinc-800">
        <Link href="/">
          <Button 
            variant="ghost" 
            className={`${
              pathname === "/" 
                ? "bg-[#A1FFCE]/10 text-[#A1FFCE]" 
                : "text-zinc-400 hover:text-[#A1FFCE]"
            }`}
          >
            Vaults
          </Button>
        </Link>
        <Link href="/portfolio">
          <Button 
            variant="ghost" 
            className={`${
              pathname === "/portfolio" 
                ? "bg-[#A1FFCE]/10 text-[#A1FFCE]" 
                : "text-zinc-400 hover:text-[#A1FFCE]"
            }`}
          >
            Portfolio
          </Button>
        </Link>
      </div>

      <Button 
        variant="outline" 
        className="bg-[#A1FFCE]/10 text-[#A1FFCE] hover:bg-[#A1FFCE]/20 border-[#A1FFCE]/20"
      >
        Connect wallet
      </Button>
    </nav>
  );
} 