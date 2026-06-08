"use client";

import { useEffect, useState } from "react";

interface TimeLeft {
  kun: number;
  soat: number;
  min: number;
  sek: number;
}

function getTimeLeft(target: Date): TimeLeft {
  const diff = Math.max(0, target.getTime() - Date.now());
  const totalSeconds = Math.floor(diff / 1000);
  return {
    kun: Math.floor(totalSeconds / 86400),
    soat: Math.floor((totalSeconds % 86400) / 3600),
    min: Math.floor((totalSeconds % 3600) / 60),
    sek: totalSeconds % 60,
  };
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

interface TimerCardProps {
  value: number;
  label: string;
}

function TimerCard({ value, label }: TimerCardProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className="
          md:w-35 md:h-35
          h-13 w-13
          bg-[#0D1B2A]
          border-[3px] border-[#9B2335]
          rounded-2xl
          flex items-center justify-center
          shadow-[0_4px_24px_rgba(155,35,53,0.18)]
        "
      >
        <span
          className="
            text-white font-medium font-jakarta text-lg md:text-3xl
            leading-none tracking-widest
            select-none
          "
        >
          {pad(value)}
        </span>
      </div>
      <span className="text-[#0D1B2A] text-sm md:text-lg font-semibold font-jakarta tracking-[0.18em] uppercase">
        {label}
      </span>
    </div>
  );
}

interface CountdownTimerProps {
  targetDate?: Date | string;
  title?: string;
}

export default function CountdownTimer({
  targetDate,
  title = "1-IYULGACHA QOLGAN VAQT:",
}: CountdownTimerProps) {
  const target = targetDate
    ? new Date(targetDate)
    : (() => {
      const d = new Date();
      d.setMonth(6, 1);
      d.setHours(0, 0, 0, 0);
      if (d <= new Date()) d.setFullYear(d.getFullYear() + 1);
      return d;
    })();

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(getTimeLeft(target));

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(getTimeLeft(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  const units: { key: keyof TimeLeft; label: string }[] = [
    { key: "kun", label: "KUN" },
    { key: "soat", label: "SOAT" },
    { key: "min", label: "MIN" },
    { key: "sek", label: "SEK" },
  ];

  return (
    <div className="container text-center gap-3 py-5 rounded-3xl md:-mt-24 md:relative md:z-10 md:bg-(--secondary-neutral) md:backdrop-blur-md md:shadow-[0_-20px_40px_20px_rgba(249,249,249)]">
      <p className="text-[#5A403F] text-center mb-5 font-semibold font-jakarta text-2xl tracking-wide uppercase">
        {title}
      </p>
      <div className="flex justify-evenly items-start gap-4">
        {units.map(({ key, label }) => (
          <TimerCard key={key} value={timeLeft[key]} label={label} />
        ))}
      </div>
    </div>
  );
}