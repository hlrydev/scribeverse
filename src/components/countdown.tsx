"use client";
import { useState, useEffect } from "react";

interface CountdownProps {
  targetDate: Date;
  title: string;
  className?: string;
}

export function useCountdown(targetDate: Date) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const target = targetDate.getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return timeLeft;
}

export default function Countdown({
  targetDate,
  title,
  className = "",
}: CountdownProps) {
  const countdown = useCountdown(targetDate);

  return (
    <div className={`text-center ${className}`}>
      <h4
        className="text-lg font-normal text-card-foreground mb-4"
        style={{
          fontFamily: "Lexend, sans-serif",
          color: "var(--color-secondary)",
        }}
      >
        {title}
      </h4>

      <div className="flex items-center justify-center gap-2">
        {[
          { value: String(countdown.days).padStart(3, "0"), label: "DAYS" },
          { value: String(countdown.hours).padStart(2, "0"), label: "HRS" },
          { value: String(countdown.minutes).padStart(2, "0"), label: "MINS" },
          { value: String(countdown.seconds).padStart(2, "0"), label: "SECS" },
        ].map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="bg-primary text-background px-4 py-3 rounded-lg font-mono text-3xl font-bold shadow-lg min-w-[80px] flex items-center justify-center">
              {item.value}
            </div>
            <span
              className="text-xs text-muted-foreground mt-2 font-bold tracking-wider"
              style={{ fontFamily: "Lexend, sans-serif" }}
            >
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
