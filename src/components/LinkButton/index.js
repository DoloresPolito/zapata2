"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "./style.module.scss";

const ArrowIcon = ({ color, direction }) => (
  <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    {direction === "left" ? (
      <>
        <path d="M16 5.94922H2" stroke={color} strokeWidth="1.5"/>
        <path d="M6.94922 1L2 5.94975L6.94922 10.8995" stroke={color} strokeWidth="1.5"/>
      </>
    ) : (
      <>
        <path d="M0 5.94922H14" stroke={color} strokeWidth="1.5"/>
        <path d="M9.05078 1L14.0005 5.94975L9.05078 10.8995" stroke={color} strokeWidth="1.5"/>
      </>
    )}
  </svg>
);

const LinkButton = ({ text, link, color, hoverColor, reverse = false }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={link || "/"}>
      <div
        className={styles.sectionlinks}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          borderBottom: reverse ? "none" : `0.2vh solid ${color}`,
        }}
      >
        {reverse ? (
          <>
            <ArrowIcon color={color} direction="left" />
            <h6 style={{ color:color, marginLeft: "2vh" }}>{text}</h6>
          </>
        ) : (
          <>
            <h6 style={{ color: color, marginRight: "2vh" }}>{text}</h6>
            <ArrowIcon color={color} direction="right" />
          </>
        )}
      </div>
    </Link>
  );
};

export default LinkButton;
