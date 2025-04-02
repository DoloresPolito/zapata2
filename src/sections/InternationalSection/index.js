"use client";
import { useEffect } from "react";
import { getTranslation } from "@/utils/getTranslation";
import styles from "./style.module.scss";

import Image from "next/image";
import image1 from "../../../public/assets/international/international.png";

import Lenis from "lenis";
import RoundedButton from "@/components/RoundedButton";
import AnimatedDiv from "@/components/AnimatedDiv";

export default function InternationalSection({ locale }) {
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
          <AnimatedDiv>

    
          <h2 className={`typography-Ag-Camino-Final-H1`}>
            {getTranslation(locale, "international.title")}
          </h2>
          </AnimatedDiv>
          <AnimatedDiv delay={0.3}>
          <p className={`typography-Ag-Camino-Final-P-Big ${styles.description}`}>
            {getTranslation(locale, "international.description")}
          </p>
          </AnimatedDiv>
          <div className={styles.buttoncontainer}>
            <RoundedButton
              text={getTranslation(locale, "international.button1")}
              color="#281A0F"
              background="#bcc090"
              border="#bcc090"
              hoverB="#281A0F"
              hoverC="#bcc090"
              hoverA="#BCC090"
              link="/fly-in"
            />

            <RoundedButton
              text={getTranslation(locale, "international.button2")}
              link="/"
              color="black"
              background="transparent"
              border="black"
              hoverB="#BCC090"
              hoverC="black"
              hoverA="#BCC090"
            />
          </div>
        </div>

        <div className={styles.section1}>
          <div className={styles.imagecontainer}>
            <Image src={image1} alt="Federico Zapata" />
          </div>

          <div className={styles.textcontainer1}>
            <p className={`typography-Ag-P ${styles.text}`}>
              {getTranslation(locale, "international.text1")}
            </p>
            <p className={`typography-Ag-P ${styles.text}`}>
              {getTranslation(locale, "international.text2")}
            </p>
            <p className={`typography-Ag-P ${styles.text}`}>
              {getTranslation(locale, "international.text3")}
            </p>
            {/* <div className={styles.buttoncontainer}>
            <RoundedButton
              text={getTranslation(locale, "international.button1")}
              color="#281A0F"
              background="#bcc090"
              border="#bcc090"
              hoverB="#281A0F"
              hoverC="#bcc090"
              hoverA="#BCC090"
              link="/"
            />

            <RoundedButton
              text={getTranslation(locale, "international.button2")}
              link="/"
              color="black"
              background="transparent"
              border="black"
              hoverB="#BCC090"
              hoverC="black"
              hoverA="#BCC090"
            />
          </div> */}
          </div>
          
        </div>
      </div>
    </div>
  );
}
