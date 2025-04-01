import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "./styles.module.scss";
import Link from "next/link";

const ArrowIcon = ({ color }) => (
  <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 5.94922H14" stroke={color} strokeWidth="1.5"/>
    <path d="M9.05078 1L14.0005 5.94975L9.05078 10.8995" stroke={color} strokeWidth="1.5"/>
  </svg>
);

const RoundedButton = ({ text, color, background, border, hoverB, hoverC, hoverA, link }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={link} style={{ textDecoration: "none" }}>
      <motion.button
        className={styles.button}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          color: isHovered ? hoverC : color,
          backgroundColor: isHovered ? hoverB : background,
          border: `0.2vh solid ${isHovered ? hoverB : border}`,
        }}
      >
        <p>{text}</p>
        <ArrowIcon color={isHovered ? hoverC : color} />
      </motion.button>
    </Link>
  );
};

export default RoundedButton;