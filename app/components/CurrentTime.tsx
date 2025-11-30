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
      <div className="text-right px-[0.6cqw]">
        <span className="text-[#9aa0a6] leading-none font-['QuartzMS'] tracking-[0.05em] text-[6cqw]">
          {hours}
        </span>
      </div>

      <div className="text-center relative top-[-.9cqw]">
        <span className="text-[#9aa0a6] leading-none block animate-fade-6s text-[4.5cqw]">
          :
        </span>
      </div>

      <div className="text-left flex items-baseline">
        <span className="text-[#9aa0a6] leading-none font-['QuartzMS'] text-[6cqw]">
          {minutes}
        </span>
        <span className="text-[#9aa0a6] font-['Adventure'] font-extrabold text-[2.2cqw] ml-[1.9cqw] ">
          {ampm}
        </span>
      </div>
    </div>
  );
};

export default CurrentTime;
