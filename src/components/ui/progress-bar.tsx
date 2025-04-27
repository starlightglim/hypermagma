'use client';

interface ProgressBarProps {
  value: number;
  max: number;
  width?: number;
  label?: string;
}

export function ProgressBar({
  value,
  max,
  width = 40,
  label
}: ProgressBarProps) {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));
  const filledWidth = Math.round((width * percentage) / 100);
  const emptyWidth = width - filledWidth;

  const filled = '█'.repeat(filledWidth);
  const empty = '░'.repeat(emptyWidth);
  
  return (
    <div className="font-mono mb-2">
      {label && <div className="text-zinc-400 mb-1">{label}</div>}
      <div className="text-[#A1FFCE]">
        [{filled}{empty}] {percentage.toFixed(0)}%
      </div>
    </div>
  );
} 