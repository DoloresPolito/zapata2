import React from "react";
import { motion } from "framer-motion";
import styles from "./styles.module.scss";
import Link from "next/link";

const RoundedButton = ({ text, color, background, border, hoverB, hoverC, hoverA,isHovered, link}) => {
  return (
    <Link href={link} style={{ textDecoration: "none" }}>
    <motion.button
      className={styles.button}
      initial="rest"
      animate={isHovered ? "hover" : "rest"} 
      style={{
        color: isHovered ? hoverC : color,
        backgroundColor: isHovered ? hoverB : background,
        border: `0.05vh solid ${isHovered ? hoverB : border}`
      }}
      whileHover={{
        backgroundColor: hoverB,
        border: `0.05vh solid ${hoverA}`, 
        color: hoverC,
      }}
    >
      <p >{text}</p>
      <span>→</span>

    </motion.button>
    </Link>
  );
};

export default RoundedButton;