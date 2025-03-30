"use client"
import { useEffect, useState } from "react";
import { getTranslation } from "@/utils/getTranslation";
import styles from "./style.module.scss";

import Image from "next/image";
import Lenis from "lenis";
import AnimatedDiv from "@/components/AnimatedDiv";
export default function ProcessSection({ locale }) {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 800);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sections = [
    {
      index: "1",
      title: getTranslation(locale, "process-section.title1"),
      text: getTranslation(locale, "process-section.description1"),
      imgSrc: "/assets/process/process1.png",
      reverse: false,
    },
    {
      index: "2",
      title: getTranslation(locale, "process-section.title2"),
      text: getTranslation(locale, "process-section.description2"),
      imgSrc: "/assets/process/process2.png",
      reverse: true,
    },
    {
      index: "3",
      title: getTranslation(locale, "process-section.title3"),
      text: getTranslation(locale, "process-section.description3"),
      imgSrc: "/assets/process/process3.png",
      reverse: false,
    },
  ];

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

      
          <h6 className={`typography-Ag-Camino-Label`}>
       

            {getTranslation(locale, "process-section.label")}
          </h6>
          </AnimatedDiv>
          <AnimatedDiv>
          <h2 
    
  className={isMobile ? "typography-Ag-Mobile-Headlines" : "typography-Ag-Camino-Final-H1"}>
            {getTranslation(locale, "process-section.title")}
          </h2>
          </AnimatedDiv>
          <AnimatedDiv delay={0.3}>
          <p className={`typography-Ag-P`}>
   
          {getTranslation(locale, "process-section.description")}
          </p>
          </AnimatedDiv>
        </div>

        <div className={styles.itemssection}>
          {sections.map((section, i) => (
            <div
              key={i}
              className={`${styles.row} ${
                section.reverse ? styles.reverse : ""
              }`}
            >
              <div className={styles.textContainer}>
                <span className={`typography-Ag-Numbers`}>{section.index}</span>
                <h2 className={`typography-Ag-P ${styles.titulo}`}>
                  {section.title}
                </h2>
                <p className={`typography-Ag-P ${styles.texto}`}>
                  {section.text}
                </p>
              </div>
              <div className={styles.imageContainer}>
                <Image
                  src={section.imgSrc}
                  alt={section.title}
                  width={500}
                  height={300}
                  className={styles.image}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
