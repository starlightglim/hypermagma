import { Card } from "@/components/ui/card";

export default function Portfolio() {
  return (
    <Card className="bg-black/50 border-zinc-800 p-6 mb-8">
      <h1 className="text-2xl font-bold text-[#A1FFCE] mb-4">Your Portfolio</h1>
      <div className="text-zinc-400">Connect your wallet to view your portfolio</div>
    </Card>
  );
} 