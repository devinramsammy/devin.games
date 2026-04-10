"use client";

import { motion } from "framer-motion";

interface NavigationArrowProps {
  direction: "left" | "right";
  onClick: () => void;
  disabled?: boolean;
}

const NavigationArrow = ({
  direction,
  onClick,
  disabled = false,
}: NavigationArrowProps) => {
  if (disabled) return null;

  return (
    <motion.button
      onClick={onClick}
      className="flex items-center justify-center cursor-pointer"
      style={{
        width: "3.5vw",
        minWidth: "28px",
        height: "6vh",
        minHeight: "36px",
        background: "transparent",
        border: "none",
        outline: "none",
      }}
      whileHover={{ scale: 1.15, x: direction === "left" ? -3 : 3 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 380, damping: 22 }}
    >
      <svg
        viewBox="0 0 24 32"
        fill="none"
        style={{ width: "3vw", minWidth: "22px", height: "auto" }}
      >
        <defs>
          <radialGradient id={`arrow-grad-${direction}`} cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="#d4f0fc" />
            <stop offset="45%" stopColor="#a8e4f8" />
            <stop offset="100%" stopColor="#4bb8e0" />
          </radialGradient>
        </defs>
        {direction === "left" ? (
          <path
            d="M18 2 L4 16 L18 30"
            fill={`url(#arrow-grad-${direction})`}
            stroke="#88d4f0"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        ) : (
          <path
            d="M6 2 L20 16 L6 30"
            fill={`url(#arrow-grad-${direction})`}
            stroke="#88d4f0"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        )}
      </svg>
    </motion.button>
  );
};

export default NavigationArrow;
