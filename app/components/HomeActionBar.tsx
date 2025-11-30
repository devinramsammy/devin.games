"use client";

import CurrentTime from "./CurrentTime";

const HomeActionBar = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full z-50 pointer-events-none">
      <div
        className="relative w-full flex justify-center @container"
        style={{ containerType: "inline-size" }}
      >
        <svg
          viewBox="0 0 1200 180"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto overflow-visible"
        >
          <path
            d="M0 0H180C300 0 300 75 420 75H780C900 75 900 0 1020 0H1200V180H0V0Z"
            fill="#D9D9D9"
          />
          <path
            d="M0 0H180C300 0 300 75 420 75H780C900 75 900 0 1020 0H1200"
            stroke="#34BEED"
            strokeWidth="3"
          />
        </svg>

        <div className="absolute left-1/2 -translate-x-1/2 top-[36.11%] -translate-y-full flex justify-center">
          <CurrentTime />
        </div>
      </div>
    </div>
  );
};

export default HomeActionBar;
