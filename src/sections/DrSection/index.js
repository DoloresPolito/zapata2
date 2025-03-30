"use client";
import { useEffect, useState } from "react";
import { getTranslation } from "@/utils/getTranslation";
import styles from "./style.module.scss";

import Image from "next/image";
import image1 from "../../../public/assets/about/federico.png";
import image2 from "../../../public/assets/about/cv.png";
import Lenis from "lenis";
import AnimatedDiv from "@/components/AnimatedDiv";

export default function DrSection({ locale }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 800);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
          <AnimatedDiv>          <h2
            className={
              isMobile
                ? "typography-Ag-Camino-Label"
                : "typography-Ag-Camino-Final-H1"
            }
          >
            Dr. Federico Zapata
          </h2>
          </AnimatedDiv>
          <AnimatedDiv delay={0.3}>    
          <p
            className={
              isMobile
                ? "typography-Ag-Mobile-Headlines"
                : "typography-Ag-Camino-Final-P-Big"
            }
          >
            {getTranslation(locale, "about.subtitle")}
          </p>
          </AnimatedDiv>
        </div>

        <div className={styles.section1}>
          <div className={styles.imagecontainer}>
            <Image src={image1} alt="Federico Zapata" />
          </div>

          <div className={styles.textcontainer1}>
            <p className={`typography-Ag-P`}>
              {getTranslation(locale, "about.text1")}
            </p>
            <p className={`typography-Ag-P`}>
              {getTranslation(locale, "about.text2")}
            </p>
          </div>
        </div>

        <div className={styles.section2}>
          <div className={styles.textcontainer2}>
            <p className={`typography-Ag-P`}>Curriculum Vitae</p>

            <div className={styles.itemscontainer}>
              {[...Array(12)].map((_, i) => (
                <div key={i} className={styles.item}>
                  <p className={`typography-Ag-P`}>
                    {getTranslation(locale, `about.item${i + 1}`)}
                  </p>
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
