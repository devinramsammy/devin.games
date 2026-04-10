"use client";

import { AnimatePresence, motion } from "framer-motion";
import HomeActionBar from "./HomeActionBar";
import ChannelActionBar from "./ChannelActionBar";

interface BottomActionBarProps {
  mode: "home" | "channel";
  channelName?: string;
  onBack?: () => void;
}

const BottomActionBar = ({ mode, channelName = "", onBack }: BottomActionBarProps) => {
  return (
    <AnimatePresence mode="wait">
      {mode === "home" ? (
        <motion.div
          key="home"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <HomeActionBar onWiiMenu={onBack} />
        </motion.div>
      ) : (
        <motion.div
          key="channel"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChannelActionBar channelName={channelName} onBack={onBack ?? (() => {})} />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BottomActionBar;
