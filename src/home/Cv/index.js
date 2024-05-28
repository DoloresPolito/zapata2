"use client";
import styles from "./style.module.scss";
import logo1 from "../../../public/assets/images/logo.1.png";
import logo2 from "../../../public/assets/images/logo.2.png";
import logo3 from "../../../public/assets/images/logo.3.png";
import logo4 from "../../../public/assets/images/logo.4.png";
import cv from "../../../public/assets/images/cv.png";

import Image from "next/image";

export default function Cv() {
  return (
    <>
      <div className={styles.logossection}>
        <div className={styles.logos}>
          <Image src={logo1} alt="logo1" />
          <Image src={logo2} alt="logo2" />
          <Image src={logo3} alt="logo3" />
          <Image src={logo4} alt="logo4" />
        </div>
      </div>

      <div className={styles.cv}>
        <div className={styles.containercv}>
          <div className={styles.textcontainer}>
            <h2>Curriculum Vitae</h2>

            <p>text</p>
          </div>
          <div className={styles.imagecontainer}>
            <Image src={cv} alt="cv" />
          </div>
        </div>
      </div>
    </>
  );
}
