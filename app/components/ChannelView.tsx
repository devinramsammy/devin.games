"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ChannelViewProps {
  id: string;
  bgFrom: string;
  bgTo: string;
  children: ReactNode;
}

const ChannelView = ({ id, bgFrom, bgTo, children }: ChannelViewProps) => {
  return (
    <motion.div
      layoutId={`channel-${id}`}
      className="fixed inset-0 z-40 flex items-center justify-center"
      style={{ background: "#000" }}
    >
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          background: `linear-gradient(155deg, ${bgFrom} 0%, ${bgTo} 100%)`,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.4 }}
      />

      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          borderRadius: "24px",
          boxShadow:
            "inset 0 0 0 6px #222, inset 0 0 0 8px #444, inset 0 0 30px rgba(0,0,0,0.5)",
        }}
      />

      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          borderRadius: "24px",
          background:
            "radial-gradient(ellipse at center, transparent 55%, rgba(0,0,0,0.35) 100%)",
        }}
      />

      <motion.div
        className="relative z-5 w-full h-full flex flex-col"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.35 }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default ChannelView;
