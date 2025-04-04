"use client";
import { useEffect, useState } from "react";
import { getTranslation } from "@/utils/getTranslation";
import styles from "./style.module.scss";
import Image from "next/image";
import Lenis from "lenis";
import AnimatedDiv from "@/components/AnimatedDiv";

export default function GuidelinesSection({ locale }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 800);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const translatedList1 = getTranslation(locale, "guidelines.list1") || [];

  const translatedList3 = getTranslation(locale, "guidelines.list3") || [];

  const translatedList4 = getTranslation(locale, "guidelines.list4") || [];

  const translatedList5 = getTranslation(locale, "guidelines.list5") || [];

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
        <h2 className={"typography-Ag-Camino-Final-H1"}>
          {getTranslation(locale, "guidelines.title")}
        </h2>

        <div className={styles.section1}>
          <div className={styles.itemssection}>
            <ul className={styles.customList}>
              {translatedList1.map((text, index) => (
                <li key={index} className={styles.listItem}>
                  <p className={`typography-Ag-P ${styles.texto}`}>{text}</p>
                </li>
              ))}
            </ul>
          </div>

          <p className={`typography-Ag-P ${styles.strong}`}>{getTranslation(locale, "guidelines.finishlist1")}</p>
        </div>

        <div className={styles.section2}>
          <h4>{getTranslation(locale, "guidelines.subtitle2")}</h4>
          <p className={`typography-Ag-P ${styles.texto}`}>{getTranslation(locale, "guidelines.text2-1")}</p>
          <br/>
          <p className={`typography-Ag-P ${styles.texto}`}>{getTranslation(locale, "guidelines.text2-2")}</p>
        </div>

        <div className={styles.section3}>
          <h4>{getTranslation(locale, "guidelines.subtitle3")}</h4>

          <div className={styles.itemssection}>
            <ul className={styles.customList}>
              {translatedList3.map((text, index) => (
                <li key={index} className={styles.listItem}>
                  <p className={`typography-Ag-P ${styles.texto}`}>{text}</p>
                </li>
              ))}
            </ul>
          </div>

          <p className={`typography-Ag-P ${styles.texto}`}>{getTranslation(locale, "guidelines.finishlist3")}</p>
        </div>

        <div className={styles.section4}>
          <h4>{getTranslation(locale, "guidelines.subtitle4")}</h4>
          <p className={`typography-Ag-P ${styles.strong}`}>{getTranslation(locale, "guidelines.text4")}</p>
          <div className={styles.itemssection}>
            <ul className={styles.customList}>
              {translatedList4.map((text, index) => (
                <li key={index} className={styles.listItem}>
                  <p className={`typography-Ag-P ${styles.texto}`}>{text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.section5}>
          <h4>{getTranslation(locale, "guidelines.subtitle5")}</h4>
          <p className={`typography-Ag-P ${styles.texto}`}>{getTranslation(locale, "guidelines.text5")}</p>
          <div className={styles.itemssection}>
            <ul className={styles.customList}>
              {translatedList5.map((text, index) => (
                <li key={index} className={styles.listItem}>
                  <p className={`typography-Ag-P ${styles.texto}`}>{text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
