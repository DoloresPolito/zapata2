"use client";
import Link from "next/link";
import styles from "./style.module.scss";
import arrowwhite from "../../../public/assets/arrows/small-white.svg";
import arrowblack from "../../../public/assets/arrows/small-black.svg";
import Image from "next/image";

const LinkButton = ({text, link, color}) => {

  const arrow = color === "white" ? arrowwhite : arrowblack;
  const border_bottom = color === "white" ? "1px solid white" : "1px solid black" 

  return (
    <>
      <Link href={link ? link : "/"}>
        <div className={styles.sectionlinks} style={{  borderBottom: border_bottom}}>
          <h6 style={{color: color}}>{text}</h6>
          <Image src={arrow} alt="arrow" />
        </div>
      </Link>
    </>
  );
};

export default LinkButton;
