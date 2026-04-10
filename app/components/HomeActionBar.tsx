"use client";

import { motion } from "framer-motion";
import CurrentTime from "./CurrentTime";
import CurrentDate from "./CurrentDate";

const BAR_VH = 20;
const INDENT_DEPTH = 7;
const INDENT_PCT = (INDENT_DEPTH / BAR_VH) * 100;

const BAR_FILL =
  "M0 0H18C26 0 28 7 38 7H62C72 7 74 0 82 0H100V20H0V0Z";
const BAR_STROKE =
  "M0 0H18C26 0 28 7 38 7H62C72 7 74 0 82 0H100";

const BTN_VH = BAR_VH * 0.65;
const SMALL_BTN_VH = BAR_VH * 0.38;
const CircularButton = ({
  onClick,
  children,
  showTray = false,
  trayDirection = "right",
}: {
  onClick?: () => void;
  children: React.ReactNode;
  showTray?: boolean;
  trayDirection?: "left" | "right";
}) => (
  <div className="relative flex items-center shrink-0"
    style={{ width: showTray ? `${BTN_VH * 1.35}vh` : undefined }}
  >
    {showTray && (
      <div
        className="absolute pointer-events-none"
        style={{
          width: `${BTN_VH * 2.8}vh`,
          height: `${BTN_VH * 1.05}vh`,
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse at 55% 40%, #f0f0f0 0%, #eaeaea 25%, #e0e0e0 50%, #d4d4d4 75%, #c8c8c8 100%)",
          boxShadow: [
            "0 4px 10px rgba(0,0,0,0.16)",
            "0 2px 4px rgba(0,0,0,0.1)",
            "0 1px 1px rgba(0,0,0,0.08)",
          ].join(", "),
          border: "1px solid rgba(190,190,190,0.35)",
          top: "50%",
          transform: "translateY(-50%)",
          ...(trayDirection === "right"
            ? { right: `${BTN_VH * 0.15}vh` }
            : { left: `${BTN_VH * 0.15}vh` }),
        }}
      />
    )}
    <motion.button
      onClick={onClick}
      className="relative flex items-center justify-center rounded-full cursor-pointer shrink-0 z-10"
      style={{
        width: `${BTN_VH}vh`,
        height: `${BTN_VH}vh`,
        background:
          "radial-gradient(circle at 46% 38%, #ffffff 0%, #f8f8f8 20%, #ededed 45%, #dedede 70%, #c8c8c8 100%)",
        boxShadow: [
          "0 8px 20px rgba(0,0,0,0.22)",
          "0 4px 8px rgba(0,0,0,0.16)",
          "0 0 0 3px #4dc4ea",
        ].join(", "),
      }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
    >
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          top: "8%",
          left: "14%",
          width: "44%",
          height: "40%",
          background:
            "radial-gradient(ellipse at 48% 42%, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.6) 30%, rgba(255,255,255,0.15) 60%, rgba(255,255,255,0) 80%)",
        }}
      />
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          top: "4%",
          left: "10%",
          right: "10%",
          height: "50%",
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0) 100%)",
        }}
      />
      {children}
    </motion.button>
  </div>
);

const GearButton = ({ onClick }: { onClick?: () => void }) => (
  <motion.button
    onClick={onClick}
    className="relative flex items-center justify-center rounded-full cursor-pointer shrink-0"
    style={{
      width: `${SMALL_BTN_VH}vh`,
      height: `${SMALL_BTN_VH}vh`,
      background:
        "radial-gradient(circle at 42% 38%, #6a6a6a 0%, #505050 55%, #3a3a3a 100%)",
      boxShadow:
        "0 3px 8px rgba(0,0,0,0.3), inset 0 1px 2px rgba(255,255,255,0.15)",
    }}
    whileHover={{ scale: 1.06 }}
    whileTap={{ scale: 0.95 }}
    transition={{ type: "spring", stiffness: 400, damping: 22 }}
  >
    <svg
      viewBox="0 0 24 24"
      fill="none"
      style={{ width: `${SMALL_BTN_VH * 0.5}vh`, height: `${SMALL_BTN_VH * 0.5}vh` }}
    >
      <path
        d="M12 15a3 3 0 100-6 3 3 0 000 6z"
        fill="rgba(200,200,200,0.9)"
      />
      <path
        d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"
        stroke="rgba(200,200,200,0.9)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  </motion.button>
);

const SdCardButton = () => (
  <motion.button
    className="flex items-center justify-center cursor-pointer shrink-0"
    style={{
      width: `${BAR_VH * 0.32}vh`,
      height: `${BAR_VH * 0.38}vh`,
      background: "transparent",
      border: "none",
    }}
    whileHover={{ scale: 1.06 }}
    whileTap={{ scale: 0.95 }}
    transition={{ type: "spring", stiffness: 400, damping: 22 }}
  >
    <svg
      viewBox="0 0 30 38"
      fill="none"
      style={{ width: "100%", height: "100%" }}
    >
      {/* Outer card shape with notched top-left */}
      <path
        d="M7 1L23 1Q25 1 25 3L25 35Q25 37 23 37L3 37Q1 37 1 35L1 7Z"
        fill="#e8f4fa"
        stroke="#6dcef5"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      {/* White inner label area */}
      <rect
        x="4" y="5" width="18" height="18" rx="1.5"
        fill="white"
        stroke="#a8ddf0"
        strokeWidth="0.8"
      />
      {/* SD logo drawn as paths - stylized italic */}
      {/* S letter */}
      <path
        d="M8 11.5 Q8 9.5 10.5 9.5 L12.5 9.5 Q14 9.5 14 11 Q14 12.2 12.5 12.5 L10.5 13 Q8.5 13.5 8.5 15 Q8.5 16.8 10.5 16.8 L13 16.8 Q14.5 16.8 14.5 15.5"
        stroke="#4db8da"
        strokeWidth="1.6"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* D letter */}
      <path
        d="M16 9.5 L16 16.8 M16 9.5 L18.5 9.5 Q21.5 9.5 21.5 13.2 Q21.5 16.8 18.5 16.8 L16 16.8"
        stroke="#4db8da"
        strokeWidth="1.6"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Swoosh arc under the letters */}
      <path
        d="M7 15 Q11 11.5 18 13.5 Q21 14.5 22 13.5"
        stroke="#4db8da"
        strokeWidth="1.1"
        fill="none"
        strokeLinecap="round"
        opacity="0.55"
      />
      {/* Blue bar at bottom */}
      <rect
        x="4" y="27" width="18" height="5" rx="1"
        fill="#6dcef5"
      />
    </svg>
  </motion.button>
);

interface HomeActionBarProps {
  onWiiMenu?: () => void;
}

const HomeActionBar = ({ onWiiMenu }: HomeActionBarProps) => {
  const timeCenterPct = INDENT_PCT * 0.38;
  const datePct = INDENT_PCT + 10;

  return (
    <div
      className="fixed bottom-0 left-0 w-full z-50 pointer-events-none"
      style={{ height: `${BAR_VH + 2}vh`, paddingBottom: "2vh" }}
    >
      <div
        className="absolute bottom-0 left-0 w-full"
        style={{ height: "2vh", background: "#E2E2E2" }}
      />
      <div className="relative w-full h-full overflow-visible">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 100 20"
          preserveAspectRatio="none"
          className="absolute inset-0"
          aria-hidden="true"
        >
          <path d={BAR_FILL} fill="#E2E2E2" />
          <path
            d={BAR_STROKE}
            stroke="#34BEED"
            strokeWidth="2.5"
            fill="none"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        <div
          className="absolute pointer-events-none"
          style={{
            width: `${BTN_VH * 3.5}vh`,
            height: `${BTN_VH * 1.15}vh`,
            borderRadius: `${BTN_VH * 0.575}vh`,
            background:
              "radial-gradient(ellipse at 60% 40%, #f0f0f0 0%, #eaeaea 25%, #e0e0e0 50%, #d4d4d4 75%, #c8c8c8 100%)",
            boxShadow: [
              "0 4px 10px rgba(0,0,0,0.16)",
              "0 2px 4px rgba(0,0,0,0.1)",
            ].join(", "),
            border: "1px solid rgba(190,190,190,0.35)",
            top: "50%",
            transform: "translateY(calc(-50% + 1vh))",
            left: `calc(-${BTN_VH * 1.9}vh)`,
            zIndex: 1,
          }}
        />

        <div
          className="absolute pointer-events-auto z-[2]"
          style={{
            left: "-5vw",
            top: "50%",
            transform: "translateY(-50%)",
          }}
        >
          <GearButton />
        </div>

        <div
          className="absolute left-0 top-0 bottom-0 flex items-center pointer-events-none z-[2]"
          style={{ paddingLeft: `${BTN_VH * 0.35}vh`, gap: "2vw" }}
        >
          <div className="pointer-events-auto">
            <CircularButton onClick={onWiiMenu}>
              <span
                className="font-[var(--font-nunito)] font-black text-[#b0b0b0] leading-none z-10 select-none"
                style={{ fontSize: `${BTN_VH * 0.28}vh` }}
              >
                Wii
              </span>
            </CircularButton>
          </div>

          <div className="pointer-events-auto z-20" style={{ marginLeft: "1vw" }}>
            <SdCardButton />
          </div>
        </div>

        <div
          className="absolute left-1/2"
          style={{
            top: `${timeCenterPct}%`,
            transform: "translate(-50%, -50%)",
          }}
        >
          <CurrentTime />
        </div>

        <div
          className="absolute left-1/2"
          style={{
            top: `${datePct}%`,
            transform: "translateX(calc(-50% + 1vw))",
          }}
        >
          <CurrentDate />
        </div>

        <div
          className="absolute pointer-events-none"
          style={{
            width: `${BTN_VH * 3.5}vh`,
            height: `${BTN_VH * 1.15}vh`,
            borderRadius: `${BTN_VH * 0.575}vh`,
            background:
              "radial-gradient(ellipse at 40% 40%, #f0f0f0 0%, #eaeaea 25%, #e0e0e0 50%, #d4d4d4 75%, #c8c8c8 100%)",
            boxShadow: [
              "0 4px 10px rgba(0,0,0,0.16)",
              "0 2px 4px rgba(0,0,0,0.1)",
            ].join(", "),
            border: "1px solid rgba(190,190,190,0.35)",
            top: "50%",
            transform: "translateY(calc(-50% + 1vh))",
            right: `calc(-${BTN_VH * 1.7}vh)`,
            zIndex: 1,
          }}
        />

        <div
          className="absolute right-0 top-0 bottom-0 flex items-center pointer-events-none z-[2]"
          style={{ paddingRight: `${BTN_VH * 0.55}vh` }}
        >
          <div className="pointer-events-auto">
            <CircularButton>
              <svg
                viewBox="0 0 32 26"
                fill="none"
                className="z-10"
                style={{ width: `${BTN_VH * 0.42}vh`, height: "auto" }}
              >
                <rect
                  x="1" y="1" width="30" height="24" rx="3"
                  fill="white" opacity="0.12"
                  stroke="#aaa" strokeWidth="1.8"
                />
                <path
                  d="M1 6 L16 16 L31 6"
                  stroke="#aaa" strokeWidth="1.8"
                  strokeLinecap="round" fill="none"
                />
              </svg>
            </CircularButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeActionBar;
