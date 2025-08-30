import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import "../css/floatingicons.css";

// const FloatingIcons = () => {
//   return (
//     <div className="floating__container">
//       <i className="fab fa-sass"></i>
//       <i className="fab fa-node"></i>
//       <i className="fab fa-js-square"></i>
//       <i className="fab fa-css3-alt"></i>
//       <i className="fab fa-html5"></i>
//       <i className="fab fa-python"></i>
//       <i className="fab fa-react"></i>
//       <i className="fab fa-r-project"></i>
//     </div>
//   );
// };

// Example icons array (replace with your actual icons)
const ICON_CLASSNAMES = [
  //   "fab fa-sass",
  "fab fa-node",
  "fab fa-js-square",
  "fab fa-css3-alt",
  "fab fa-html5",
  "fab fa-python",
  "fab fa-react",
  "fab fa-project",
  "fab fa-git",
  "fab fa-docker",
  // Add more icons as needed
];

const ICON_WIDTH = 60; // Adjust to your icon size
const GAP = 20; // Space between icons
const SPEED = 0.5; // Pixels per frame

export default function Carousel() {
  const [positions, setPositions] = useState(
    ICON_CLASSNAMES.map((_, i) => i * (ICON_WIDTH + GAP)),
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setPositions((prev) =>
        prev.map((pos) =>
          pos > (ICON_CLASSNAMES.length - 1) * (ICON_WIDTH + GAP)
            ? 0
            : pos + SPEED,
        ),
      );
    }, 16); // ~60fps
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        position: "relative",
        height: ICON_WIDTH,
        overflow: "hidden",

        width: "100%",
        border: "1px solid lightgray",
      }}
    >
      {ICON_CLASSNAMES.map((classname, i) => (
        <motion.i
          key={i}
          className={classname}
          //   src={icon}
          alt={`icon-${i}`}
          style={{
            fontSize: "44px",
            position: "absolute",
            left: positions[i],
            width: ICON_WIDTH,
            height: ICON_WIDTH,
          }}
        />
      ))}
    </div>
  );
}
