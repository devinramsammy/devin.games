"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CircularButtonProps {
  icon: ReactNode;
  onClick?: () => void;
  label?: string;
}

const CircularButton = ({ icon, onClick, label }: CircularButtonProps) => {
  return (
    <motion.button
      onClick={onClick}
      title={label}
      className="flex items-center justify-center w-10 h-10 rounded-full bg-white/70 border border-white/90 shadow-sm cursor-pointer select-none"
      style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.8)" }}
      whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.9)" }}
      whileTap={{ scale: 0.93 }}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
    >
      <span className="text-[#4a6080] flex items-center justify-center">{icon}</span>
    </motion.button>
  );
};

export default CircularButton;
