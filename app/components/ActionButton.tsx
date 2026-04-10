"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ActionButtonProps {
  label: string;
  icon?: ReactNode;
  onClick?: () => void;
}

const ActionButton = ({ label, icon, onClick }: ActionButtonProps) => {
  return (
    <motion.button
      onClick={onClick}
      className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 border border-white/90 shadow-sm cursor-pointer select-none"
      style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.8)" }}
      whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.9)" }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
    >
      {icon && <span className="w-4 h-4 flex items-center justify-center">{icon}</span>}
      <span className="text-[#4a6080] font-['Adventure'] font-extrabold text-sm leading-none">
        {label}
      </span>
    </motion.button>
  );
};

export default ActionButton;
