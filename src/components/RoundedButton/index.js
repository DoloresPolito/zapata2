import React from "react";
import { motion } from "framer-motion";
import styles from "./styles.module.scss";

const RoundedButton = ({ text, color, background, border, hoverB, hoverC, isHovered}) => {
  return (
    <motion.button
      className={styles.button}
      initial="rest"
      animate={isHovered ? "hover" : "rest"} 
      style={{
        color: isHovered ? hoverC : color,
        borderColor: isHovered ? hoverB : border,
        backgroundColor: isHovered ? hoverB : background,
        border: `0.05vh solid ${isHovered ? hoverC : color}`
      }}
      whileHover={{
        backgroundColor: hoverB,
        border: `0.05vh solid ${hoverB}`, 
        color: hoverC,
      }}
    >
      <p>{text}</p>

      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="20"
        viewBox="0 0 16 20"
        fill="none"
        initial={{ fill: color }}
        animate={{ fill: isHovered ? hoverC : color }} 
        whileHover={{ fill: hoverC }}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.3678 11.024L6.37289 15.6053V18H6.5535C6.61093 17.2971 6.9667 16.6525 7.53081 16.2292L14.5 11L7.53081 5.77082C6.9667 5.34755 6.61093 4.70291 6.5535 4H6.37289V6.39474L14.37 10.9773L0.499514 10.4945L0.499513 11.4499L14.3678 11.024Z"
          fill="currentColor"
        ></path>
      </motion.svg>
    </motion.button>
  );
};

export default RoundedButton;