"use client";
import Link from "next/link";
import styles from "./style.module.scss";


const LinkButton = ({text, link, color}) => {



  return (
    <>
      <Link href={link ? link : "/"}>
        <div className={styles.sectionlinks} style={{  borderBottom: `0.25vh solid ${color}`}}>
          <h6 style={{color: color, marginRight:"2vh"}}>{text}</h6>
     
          <span style={{color: color}}>→</span>
        </div>
      </Link>
    </>
  );
};

export default LinkButton;
