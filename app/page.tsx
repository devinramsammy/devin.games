"use client";

import { useState, ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Channel, { ChannelData } from "./components/Channel";
import ChannelView from "./components/ChannelView";
import NavigationArrow from "./components/NavigationArrow";
import BottomActionBar from "./components/BottomActionBar";

const DiscAnimation = () => (
  <motion.div
    className="relative w-28 h-28"
    animate={{ rotate: 360 }}
    transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
  >
    <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
      <defs>
        <radialGradient id="disc-outer" cx="38%" cy="32%" r="70%">
          <stop offset="0%" stopColor="#f0ecff" />
          <stop offset="18%" stopColor="#c8b4f0" />
          <stop offset="36%" stopColor="#94c8f0" />
          <stop offset="54%" stopColor="#88e0c0" />
          <stop offset="72%" stopColor="#c8e888" />
          <stop offset="100%" stopColor="#e8b868" />
        </radialGradient>
        <radialGradient id="disc-shine" cx="33%" cy="28%" r="55%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.8)" />
          <stop offset="50%" stopColor="rgba(255,255,255,0.15)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </radialGradient>
      </defs>
      <circle cx="32" cy="32" r="30" fill="url(#disc-outer)" />
      <circle cx="32" cy="32" r="30" fill="url(#disc-shine)" />
      <circle cx="32" cy="32" r="10" fill="rgba(255,255,255,0.28)" />
      <circle cx="32" cy="32" r="5" fill="rgba(255,255,255,0.75)" />
      <circle cx="32" cy="32" r="2.5" fill="#e0dcf8" />
    </svg>
  </motion.div>
);

const MiiAnimation = () => (
  <motion.div
    animate={{ y: [0, -5, 0] }}
    transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
  >
    <svg viewBox="0 0 48 56" fill="none" className="w-20 h-24">
      <ellipse cx="24" cy="16" rx="13" ry="14" fill="#ffe4b8" stroke="#e8b878" strokeWidth="0.8" />
      <ellipse cx="19" cy="14" rx="2.5" ry="3" fill="#2a1a0a" />
      <ellipse cx="29" cy="14" rx="2.5" ry="3" fill="#2a1a0a" />
      <ellipse cx="19.5" cy="13" rx="1" ry="1.2" fill="white" />
      <ellipse cx="29.5" cy="13" rx="1" ry="1.2" fill="white" />
      <path d="M20 22 Q24 26 28 22" stroke="#b88860" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <rect x="13" y="30" width="22" height="18" rx="6" fill="#2268c8" />
      <rect x="5" y="30" width="10" height="14" rx="4" fill="#2268c8" />
      <rect x="33" y="30" width="10" height="14" rx="4" fill="#2268c8" />
      <rect x="15" y="48" width="8" height="8" rx="3" fill="#222" />
      <rect x="25" y="48" width="8" height="8" rx="3" fill="#222" />
    </svg>
  </motion.div>
);

const MailAnimation = () => (
  <motion.div
    animate={{ y: [0, -5, 0], rotate: [0, -3, 3, 0] }}
    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
  >
    <svg viewBox="0 0 52 40" fill="none" className="w-24 h-[74px]">
      <rect x="2" y="2" width="48" height="36" rx="5" fill="#fff0f6" stroke="#e888b8" strokeWidth="1.5" />
      <path d="M2 8 L26 22 L50 8" stroke="#cc5599" strokeWidth="2" strokeLinecap="round" fill="none" />
    </svg>
  </motion.div>
);

const PhotoAnimation = () => (
  <motion.div
    animate={{ scale: [1, 1.06, 1] }}
    transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
  >
    <svg viewBox="0 0 52 44" fill="none" className="w-24 h-[82px]">
      <rect x="2" y="8" width="48" height="34" rx="5" fill="rgba(255,255,255,0.25)" stroke="rgba(255,255,255,0.75)" strokeWidth="1.5" />
      <circle cx="26" cy="26" r="10" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5" />
      <circle cx="26" cy="26" r="5.5" fill="rgba(255,255,255,0.7)" />
      <rect x="10" y="3" width="12" height="8" rx="3" fill="rgba(255,255,255,0.3)" stroke="rgba(255,255,255,0.7)" strokeWidth="1" />
    </svg>
  </motion.div>
);

const ShopAnimation = () => (
  <motion.div
    animate={{ y: [0, -4, 0] }}
    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
  >
    <svg viewBox="0 0 52 56" fill="none" className="w-20 h-24">
      <rect x="6" y="20" width="40" height="30" rx="4" fill="rgba(255,255,255,0.22)" stroke="rgba(255,255,255,0.85)" strokeWidth="1.8" />
      <path d="M17 20 C17 9 24 6 24 6 C24 6 31 9 31 20" stroke="rgba(255,255,255,0.85)" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <text x="26" y="41" textAnchor="middle" fill="rgba(255,255,255,0.9)" fontSize="13" fontWeight="bold" fontFamily="Arial, sans-serif">W</text>
      <circle cx="14" cy="31" r="1.5" fill="rgba(255,255,255,0.7)" />
      <circle cx="38" cy="31" r="1.5" fill="rgba(255,255,255,0.7)" />
    </svg>
  </motion.div>
);

const ForecastAnimation = () => (
  <div className="relative w-28 h-20">
    <motion.div
      className="absolute top-1 left-0"
      animate={{ x: [0, 3, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    >
      <svg viewBox="0 0 42 28" fill="none" className="w-20 h-14">
        <ellipse cx="21" cy="20" rx="19" ry="8" fill="rgba(255,255,255,0.65)" />
        <ellipse cx="14" cy="16" rx="10" ry="10" fill="rgba(255,255,255,0.75)" />
        <ellipse cx="26" cy="14" rx="11" ry="11" fill="rgba(255,255,255,0.85)" />
      </svg>
    </motion.div>
    <motion.div
      className="absolute bottom-0 right-0"
      animate={{ rotate: [0, 12, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    >
      <svg viewBox="0 0 30 30" fill="none" className="w-14 h-14">
        <circle cx="15" cy="15" r="7" fill="#ffe44a" />
        {[0, 40, 80, 120, 160, 200, 240, 280, 320].map((angle) => (
          <line
            key={angle}
            x1={15 + 9.5 * Math.cos((angle * Math.PI) / 180)}
            y1={15 + 9.5 * Math.sin((angle * Math.PI) / 180)}
            x2={15 + 13 * Math.cos((angle * Math.PI) / 180)}
            y2={15 + 13 * Math.sin((angle * Math.PI) / 180)}
            stroke="#ffe44a"
            strokeWidth="2"
            strokeLinecap="round"
          />
        ))}
      </svg>
    </motion.div>
  </div>
);

const NewsAnimation = () => (
  <motion.div
    animate={{ y: [0, -3, 0] }}
    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
  >
    <svg viewBox="0 0 48 48" fill="none" className="w-20 h-20">
      <rect x="4" y="2" width="40" height="44" rx="3" fill="rgba(255,255,255,0.18)" stroke="rgba(255,255,255,0.7)" strokeWidth="1.4" />
      <rect x="8" y="7" width="32" height="7" rx="1.5" fill="rgba(255,255,255,0.85)" />
      <rect x="8" y="18" width="22" height="3" rx="1" fill="rgba(255,255,255,0.65)" />
      <rect x="8" y="24" width="28" height="3" rx="1" fill="rgba(255,255,255,0.65)" />
      <rect x="8" y="30" width="18" height="3" rx="1" fill="rgba(255,255,255,0.65)" />
      <rect x="8" y="37" width="14" height="8" rx="2" fill="rgba(255,255,255,0.35)" />
    </svg>
  </motion.div>
);

const GlobeAnimation = () => (
  <motion.div
    animate={{ rotate: [0, 360] }}
    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
  >
    <svg viewBox="0 0 48 48" fill="none" className="w-20 h-20">
      <circle cx="24" cy="24" r="21" fill="rgba(52,190,237,0.25)" stroke="#34BEED" strokeWidth="1.5" />
      <ellipse cx="24" cy="24" rx="10" ry="21" stroke="#34BEED" strokeWidth="1.2" />
      <ellipse cx="24" cy="24" rx="21" ry="8" stroke="#34BEED" strokeWidth="1.2" />
      <line x1="3" y1="24" x2="45" y2="24" stroke="#34BEED" strokeWidth="1" />
    </svg>
  </motion.div>
);

const ALL_CHANNELS: ChannelData[] = [
  { id: "disc", name: "Disc Channel", bgFrom: "#ffffff", bgTo: "#e8e8f0", textColor: "#7070a0" },
  { id: "mii", name: "Mii Channel", bgFrom: "#ffffff", bgTo: "#f0f0f8", textColor: "#8888cc" },
  { id: "photo", name: "Photo Channel", bgFrom: "#c87840", bgTo: "#7a3c14", textColor: "#ffffff" },
  { id: "shop", name: "Wii Shop Channel", bgFrom: "#1e7ae0", bgTo: "#0848a8", textColor: "#ffffff" },
  { id: "forecast", name: "Forecast Channel", bgFrom: "#38c0f0", bgTo: "#0898d8", textColor: "#ffffff" },
  { id: "news", name: "News Channel", bgFrom: "#208820", bgTo: "#0a520a", textColor: "#ffffff" },
  { id: "internet", name: "Internet Channel", bgFrom: "#ffffff", bgTo: "#e0eef8", textColor: "#1e6aaa" },
  { id: "mail", name: "Wii Mail", bgFrom: "#fff0f6", bgTo: "#ffc8e0", textColor: "#c02878" },
];

const SLOTS_PER_PAGE = 12;
const TOTAL_PAGES = 4;
const TOTAL_SLOTS = SLOTS_PER_PAGE * TOTAL_PAGES;

const ALL_SLOTS: ChannelData[] = [
  ...ALL_CHANNELS,
  ...Array.from({ length: TOTAL_SLOTS - ALL_CHANNELS.length }, (_, i) => ({
    id: `empty${i + 1}`,
    name: "",
    bgFrom: "",
    bgTo: "",
    isEmpty: true,
  })),
];

const PAGES: ChannelData[][] = Array.from({ length: TOTAL_PAGES }, (_, i) =>
  ALL_SLOTS.slice(i * SLOTS_PER_PAGE, (i + 1) * SLOTS_PER_PAGE)
);

const CHANNEL_ANIMATIONS: Record<string, ReactNode> = {
  disc: <DiscAnimation />,
  mii: <MiiAnimation />,
  photo: <PhotoAnimation />,
  shop: <ShopAnimation />,
  forecast: <ForecastAnimation />,
  news: <NewsAnimation />,
  internet: <GlobeAnimation />,
  mail: <MailAnimation />,
};

export default function Dashboard() {
  const [currentPage, setCurrentPage] = useState(0);
  const [openChannelId, setOpenChannelId] = useState<string | null>(null);

  const openChannel = ALL_SLOTS.find((c) => c.id === openChannelId);

  const goLeft = () => {
    if (currentPage > 0) setCurrentPage((p) => p - 1);
  };

  const goRight = () => {
    if (currentPage < PAGES.length - 1) setCurrentPage((p) => p + 1);
  };

  const handleClose = () => setOpenChannelId(null);

  return (
    <div className="min-h-screen relative select-none">
      <div
        className="fixed top-0 left-0 right-0 bottom-0 overflow-hidden"
        style={{ bottom: "22vh", padding: "6vh 0 2vh" }}
      >
        <motion.div
          className="flex h-full"
          animate={{ x: `calc(${-currentPage} * (81.5vw + 0.8vw))` }}
          transition={{ type: "spring", stiffness: 200, damping: 28 }}
          style={{ paddingLeft: "5vw", gap: "0.8vw" }}
        >
          {PAGES.map((pageChannels, pageIndex) => (
            <div
              key={pageIndex}
              className="grid grid-cols-4 grid-rows-3 shrink-0 h-full"
              style={{
                width: "81.5vw",
                gap: "1.4vh 0.8vw",
              }}
            >
              {pageChannels.map((ch) => (
                <Channel
                  key={ch.id}
                  {...ch}
                  isOpen={ch.id === openChannelId}
                  onClick={() => !ch.isEmpty && setOpenChannelId(ch.id)}
                >
                  {CHANNEL_ANIMATIONS[ch.id]}
                </Channel>
              ))}
            </div>
          ))}
        </motion.div>

        <div className="absolute top-0 bottom-0 flex items-center pointer-events-none z-20" style={{ left: "1.2vw" }}>
          <div className="pointer-events-auto">
            <NavigationArrow
              direction="left"
              onClick={goLeft}
              disabled={currentPage === 0}
            />
          </div>
        </div>

        <div className="absolute top-0 bottom-0 flex items-center pointer-events-none z-20" style={{ right: "1.2vw" }}>
          <div className="pointer-events-auto">
            <NavigationArrow
              direction="right"
              onClick={goRight}
              disabled={currentPage === PAGES.length - 1}
            />
          </div>
        </div>
      </div>

      <AnimatePresence>
        {openChannelId && openChannel && !openChannel.isEmpty && (
          <ChannelView
            key={openChannelId}
            id={openChannelId}
            bgFrom={openChannel.bgFrom}
            bgTo={openChannel.bgTo}
          >
            <div className="pt-[4vh] px-[4vw]">
              <h1
                className="font-['Adventure'] font-extrabold tracking-wide drop-shadow-lg"
                style={{
                  fontSize: "clamp(24px, 5vh, 48px)",
                  color: openChannel.textColor === "#ffffff" ? "#ffffff" : "#333",
                  textShadow: openChannel.textColor === "#ffffff"
                    ? "0 2px 8px rgba(0,0,0,0.5)"
                    : "0 1px 4px rgba(255,255,255,0.6)",
                }}
              >
                {openChannel.name}
              </h1>
            </div>

            <div className="flex-1 flex items-center justify-center">
              <div style={{ transform: "scale(2)", transformOrigin: "center" }}>
                {CHANNEL_ANIMATIONS[openChannelId]}
              </div>
            </div>

            <div className="pb-[4vh] flex justify-center gap-[2vw] z-20">
              <motion.button
                onClick={handleClose}
                className="font-['Adventure'] font-extrabold cursor-pointer"
                style={{
                  fontSize: "clamp(12px, 2.4vh, 20px)",
                  padding: "1.2vh 3vw",
                  borderRadius: "12px",
                  background: "linear-gradient(180deg, #e8e8e8 0%, #c8c8c8 100%)",
                  border: "2px solid rgba(255,255,255,0.7)",
                  color: "#555",
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Wii Menu
              </motion.button>
              <motion.button
                className="font-['Adventure'] font-extrabold cursor-pointer"
                style={{
                  fontSize: "clamp(12px, 2.4vh, 20px)",
                  padding: "1.2vh 3vw",
                  borderRadius: "12px",
                  background: "linear-gradient(180deg, #e8e8e8 0%, #c8c8c8 100%)",
                  border: "2px solid rgba(255,255,255,0.7)",
                  color: "#555",
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start
              </motion.button>
            </div>
          </ChannelView>
        )}
      </AnimatePresence>

      {!openChannelId && (
        <BottomActionBar
          mode="home"
          onBack={handleClose}
        />
      )}
    </div>
  );
}
