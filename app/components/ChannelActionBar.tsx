"use client";

import { motion } from "framer-motion";

const BAR_VH = 22;
const INDENT_PCT = (9.24 / 22) * 100;
const BAR_FILL =
  "M0 0H15C25 0 25 9.24 35 9.24H65C75 9.24 75 0 85 0H100V22H0V0Z";
const BAR_STROKE =
  "M0 0H15C25 0 25 9.24 35 9.24H65C75 9.24 75 0 85 0H100";

const BTN_VH = BAR_VH * 0.45;
const BTN_TOP_PCT = 70;

const WiiCircleButton = ({ onClick, label }: { onClick?: () => void; label: string }) => (
  <motion.button
    onClick={onClick}
    className="relative flex items-center justify-center rounded-full cursor-pointer shrink-0"
    style={{
      width: `${BTN_VH}vh`,
      height: `${BTN_VH}vh`,
      background:
        "radial-gradient(circle at 42% 38%, #e8e8e8 0%, #d0d0d0 55%, #b8b8b8 100%)",
      boxShadow:
        "0 4px 10px rgba(0,0,0,0.25), inset 0 2px 4px rgba(255,255,255,0.7), 0 0 0 3px #34BEED",
    }}
    whileHover={{ scale: 1.06 }}
    whileTap={{ scale: 0.95 }}
    transition={{ type: "spring", stiffness: 400, damping: 22 }}
  >
    <div
      className="absolute rounded-full pointer-events-none"
      style={{
        inset: "6px",
        border: "1px solid rgba(255,255,255,0.5)",
        boxShadow: "inset 0 1px 4px rgba(0,0,0,0.12)",
      }}
    />
    <span
      className="font-['Adventure'] font-extrabold text-[#777777] leading-none z-10 select-none"
      style={{ fontSize: `${BTN_VH * 0.27}vh` }}
    >
      {label}
    </span>
  </motion.button>
);

interface ChannelActionBarProps {
  channelName: string;
  onBack: () => void;
}

const ChannelActionBar = ({ channelName, onBack }: ChannelActionBarProps) => {
  const nameCenterPct = INDENT_PCT * 0.5;

  return (
    <div
      className="fixed bottom-0 left-0 w-full z-50 pointer-events-none"
      style={{ height: `${BAR_VH}vh` }}
    >
      <div className="relative w-full h-full">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 100 22"
          preserveAspectRatio="none"
          className="absolute inset-0"
          aria-hidden="true"
        >
          <path d={BAR_FILL} fill="#D9D9D9" />
          <path
            d={BAR_STROKE}
            stroke="#34BEED"
            strokeWidth="3"
            fill="none"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        <div
          className="absolute pointer-events-auto"
          style={{
            left: `${BAR_VH * 0.07}vh`,
            top: `${BTN_TOP_PCT}%`,
            transform: "translateY(-50%)",
          }}
        >
          <WiiCircleButton onClick={onBack} label="Back" />
        </div>

        <div
          className="absolute left-1/2"
          style={{
            top: `${nameCenterPct}%`,
            transform: "translate(-50%, -50%)",
          }}
        >
          <span
            className="text-[#6a7075] font-['Adventure'] font-extrabold leading-none"
            style={{ fontSize: `${BAR_VH * 0.14}vh` }}
          >
            {channelName}
          </span>
        </div>

        <div
          className="absolute pointer-events-auto"
          style={{
            right: `${BAR_VH * 0.07}vh`,
            top: `${BTN_TOP_PCT}%`,
            transform: "translateY(-50%)",
          }}
        >
          <WiiCircleButton onClick={onBack} label="Wii" />
        </div>
      </div>
    </div>
  );
};

export default ChannelActionBar;
