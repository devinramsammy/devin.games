"use client";

import { useState, useEffect } from "react";

const CurrentDate = () => {
  const [date, setDate] = useState<Date | null>(null);

  useEffect(() => {
    setDate(new Date());

    const timer = setInterval(() => {
      setDate(new Date());
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  if (!date) return null;

  const formatDate = (date: Date) => {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const dayName = days[date.getDay()];
    const month = date.getMonth() + 1;
    const day = date.getDate();

    return `${dayName} ${month}/${day}`;
  };

  return (
    <div className="text-[#70757a] font-['Adventure'] text-[3cqw] font-extrabold text-center leading-none">
      {formatDate(date)}
    </div>
  );
};

export default CurrentDate;
