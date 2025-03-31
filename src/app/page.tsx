'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { SortIcon } from "@/components/ui/sort-icon";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const initialVaults = [
  { name: "HYPE/PURR", tvl: "132.2K", tvlValue: 132200, ratio: "50/50", apr: "100%", aprVsFr: "70%" },
  { name: "HYPE/UBTC", tvl: "123.3K", tvlValue: 123300, ratio: "50/50", apr: "100%", aprVsFr: "70%" },
  { name: "HYPE/USDXL", tvl: "543.5K", tvlValue: 543500, ratio: "50/50", apr: "100%", aprVsFr: "70%" },
  { name: "HYPE/UETH", tvl: "1.324M", tvlValue: 1324000, ratio: "50/50", apr: "100%", aprVsFr: "70%" },
  { name: "HYPE/USOL", tvl: "3.1K", tvlValue: 3100, ratio: "50/50", apr: "100%", aprVsFr: "70%" },
];

export default function Home() {
  const [vaults, setVaults] = useState(initialVaults);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc' | null>(null);

  const handleSort = () => {
    const newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
    setSortOrder(newSortOrder);
    
    const sortedVaults = [...vaults].sort((a, b) => {
      if (newSortOrder === 'asc') {
        return a.tvlValue - b.tvlValue;
      } else {
        return b.tvlValue - a.tvlValue;
      }
    });
    
    setVaults(sortedVaults);
  };

  return (
    <>
      <Card className="bg-black/50 border-zinc-800 p-6 mb-8 w-fit mx-auto">
        <div className="text-center">
          <div className="text-zinc-400 mb-2">Total Value Locked:</div>
          <div className="text-4xl font-bold text-[#A1FFCE]">$500,243,312</div>
        </div>
      </Card>

      <Card className="bg-black/50 border-zinc-800 p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-[#A1FFCE]">Vaults</h2>
          <div className="relative">
            <Input
              placeholder="Search vaults..."
              className="w-64 bg-black/50 border-zinc-800 text-zinc-400 focus:border-[#A1FFCE]"
            />
          </div>
        </div>

        <Table>
          <TableHeader>
            <TableRow className="border-zinc-800">
              <TableHead className="text-[#A1FFCE]">Vault</TableHead>
              <TableHead 
                className="text-[#A1FFCE] cursor-pointer hover:text-[#A1FFCE]/80"
                onClick={handleSort}
              >
                <div className="flex items-center">
                  TVL
                  <SortIcon />
                </div>
              </TableHead>
              <TableHead className="text-[#A1FFCE]">Ratio</TableHead>
              <TableHead className="text-[#A1FFCE]">APR</TableHead>
              <TableHead className="text-[#A1FFCE]">APR vs FR</TableHead>
              <TableHead className="text-[#A1FFCE]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {vaults.map((vault) => (
              <TableRow key={vault.name} className="border-zinc-800">
                <TableCell className="font-medium text-zinc-300">{vault.name}</TableCell>
                <TableCell className="text-zinc-300">{vault.tvl}</TableCell>
                <TableCell className="text-zinc-300">{vault.ratio}</TableCell>
                <TableCell className="text-[#A1FFCE]">{vault.apr}</TableCell>
                <TableCell className="text-[#A1FFCE]">{vault.aprVsFr}</TableCell>
                <TableCell>
                  <Button
                    size="sm"
                    className="bg-[#A1FFCE]/10 text-[#A1FFCE] hover:bg-[#A1FFCE]/20 border-[#A1FFCE]/20"
                  >
                    Deposit
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </>
  );
}
