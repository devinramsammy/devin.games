"use client";

import { useState, useEffect } from "react";

const CurrentTime = () => {
  const [time, setTime] = useState<Date | null>(null);

  useEffect(() => {
    setTime(new Date());

    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!time) return null;

  const formatTime = (date: Date) => {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    const displayHours = hours % 12 || 12;
    const displayMinutes = minutes.toString().padStart(2, "0");

    return {
      hours: displayHours.toString(),
      minutes: displayMinutes,
      ampm,
    };
  };

  const { hours, minutes, ampm } = formatTime(time);

  return (
    <div className="grid grid-cols-[1fr_auto_1fr] items-baseline">
      <div className="text-right">
        <span className="text-[#9aa0a6] leading-none font-['QuartzMS'] tracking-[0.05em] text-[6.3cqw]">
          {hours}
        </span>
      </div>

      <div className="text-center px-0.5 relative top-[-0.05em]">
        <span className="text-[#9aa0a6] leading-none block animate-fade-6s font-['QuartzMS'] text-[6.3cqw]">
          :
        </span>
      </div>

      <div className="flex items-baseline text-left">
        <span className="text-[#9aa0a6] leading-none font-['QuartzMS'] text-[6.3cqw]">
          {minutes}
        </span>
        <span
          className="text-[#9aa0a6] font-semibold text-[1.65cqw] ml-[1.8cqw]"
          style={{
            fontFamily:
              '"Arial Rounded MT Bold", "Varela Round", "M PLUS Rounded 1c", system-ui, sans-serif',
          }}
        >
          {ampm}
        </span>
      </div>
    </div>
  );
};

export default CurrentTime;
