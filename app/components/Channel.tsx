"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export interface ChannelData {
  id: string;
  name: string;
  bgFrom: string;
  bgTo: string;
  textColor?: string;
  isEmpty?: boolean;
}

interface ChannelProps extends ChannelData {
  children?: ReactNode;
  onClick?: () => void;
  isOpen?: boolean;
}

const Channel = ({
  id,
  name,
  bgFrom,
  bgTo,
  textColor = "#888888",
  isEmpty = false,
  children,
  onClick,
  isOpen = false,
}: ChannelProps) => {
  if (isEmpty) {
    return (
      <div
        className="h-full rounded-[16px] flex items-center justify-center"
        style={{
          background: "linear-gradient(175deg, #f0f0f0 0%, #e4e4e4 100%)",
          border: "1px solid rgba(255,255,255,0.8)",
        }}
      >
        <span
          className="font-[var(--font-nunito)] font-extrabold select-none"
          style={{
            fontSize: "clamp(10px, 2.2vh, 22px)",
            color: "rgba(200, 200, 200, 0.6)",
            letterSpacing: "0.05em",
          }}
        >
          Wii
        </span>
      </div>
    );
  }

  return (
    <motion.div
      layoutId={isOpen ? undefined : `channel-${id}`}
      className="h-full relative rounded-[16px] overflow-hidden cursor-pointer select-none"
      style={{
        background: `linear-gradient(175deg, ${bgFrom} 0%, ${bgTo} 100%)`,
        border: "1px solid rgba(255,255,255,0.6)",
      }}
      whileHover={{
        scale: 1.04,
        y: -2,
      }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 340, damping: 24 }}
      onClick={onClick}
    >
      <div
        className="absolute inset-x-0 top-0 pointer-events-none z-10"
        style={{
          height: "38%",
          borderRadius: "16px 16px 80% 80% / 16px 16px 55% 55%",
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.90) 0%, rgba(255,255,255,0.65) 30%, rgba(255,255,255,0.15) 65%, rgba(255,255,255,0) 100%)",
        }}
      />

      <div
        className="absolute inset-0 flex items-center justify-center overflow-hidden"
        style={{ paddingBottom: "14%", paddingTop: "6%" }}
      >
        <div style={{ transform: "scale(0.9)", transformOrigin: "center" }}>
          {children}
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 pb-[4px] text-center pointer-events-none z-20">
        <span
          className="font-['Adventure'] font-extrabold tracking-widest leading-none uppercase"
          style={{
            fontSize: "clamp(6px, 1.4vh, 12px)",
            color: textColor,
            textShadow:
              textColor === "#ffffff"
                ? "0 1px 3px rgba(0,0,0,0.55)"
                : "0 1px 2px rgba(255,255,255,0.8)",
          }}
        >
          {name}
        </span>
      </div>
    </motion.div>
  );
};

export default Channel;
