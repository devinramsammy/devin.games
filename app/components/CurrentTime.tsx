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
      <div className="text-right" style={{ paddingRight: "0.4vh" }}>
        <span
          className="text-[#80878e] leading-none font-['QuartzMS'] tracking-[0.05em]"
          style={{ fontSize: "7vh" }}
        >
          {hours}
        </span>
      </div>

      <div className="text-center" style={{ position: "relative", top: "-0.6vh" }}>
        <span
          className="text-[#80878e] leading-none block animate-fade-6s"
          style={{ fontSize: "5.5vh" }}
        >
          :
        </span>
      </div>

      <div className="text-left flex items-baseline">
        <span
          className="text-[#80878e] leading-none font-['QuartzMS']"
          style={{ fontSize: "7vh" }}
        >
          {minutes}
        </span>
        <span
          className="text-[#80878e] font-['Adventure'] font-extrabold"
          style={{ fontSize: "2.4vh", marginLeft: "0.8vh" }}
        >
          {ampm}
        </span>
      </div>
    </div>
  );
};

export default CurrentTime;
