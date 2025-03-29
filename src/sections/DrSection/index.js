"use client"
import { useEffect } from "react";
import { getTranslation } from "@/utils/getTranslation";
import styles from "./style.module.scss";

import Image from "next/image";
import image1 from "../../../public/assets/about/federico.png";
import image2 from "../../../public/assets/about/cv.png";
import Lenis from "lenis";

export default function DrSection({ locale }) {


  useEffect(() => {
    const lenis = new Lenis();
  
    function raf(time) {
      lenis.raf(time);
  
      requestAnimationFrame(raf);
    }
  
    requestAnimationFrame(raf);
  }, []);
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.titlesection}>
          <h2 className={`typography-Ag-Camino-Final-H1`}>
            Dr. Federico Zapata
          </h2>
          <p className={`typography-Ag-P`}>
            {getTranslation(locale, "about.subtitle")}
          </p>
        </div>

        <div className={styles.section1}>
          <div className={styles.imagecontainer}>
            <Image src={image1} alt="Federico Zapata" />
          </div>

          <div className={styles.textcontainer}>
            <p className={`typography-Ag-P`}>{getTranslation(locale, "about.text1")}</p>
            <p className={`typography-Ag-P`}>{getTranslation(locale, "about.text2")}</p>
          </div>
        </div>

        <div className={styles.section2}>
          <div className={styles.textcontainer}>
            <p className={`typography-Ag-P`}>Curriculum Vitae</p>

            <div className={styles.itemscontainer}>
              {[...Array(12)].map((_, i) => (
                <div key={i} className={styles.item}>
                  <p className={`typography-Ag-P`}>{getTranslation(locale, `about.item${i + 1}`)}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.imagecontainer}>
            <Image src={image2} alt="Cirugía" />
          </div>
        </div>
      </div>
    </div>
  );
}
