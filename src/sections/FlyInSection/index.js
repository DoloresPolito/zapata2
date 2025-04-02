"use client";
import { useEffect, useState } from "react";
import { getTranslation } from "@/utils/getTranslation";
import styles from "./style.module.scss";
import Image from "next/image";
import Lenis from "lenis";
import AnimatedDiv from "@/components/AnimatedDiv";
import RoundedButton from "@/components/RoundedButton";

import image from "../../../public/assets/contact/contactnocompress.png";
import image1 from "../../../public/assets/home/fly.png";
export default function FlyInSection({ locale }) {
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
      text1: getTranslation(locale, "flyin.description1"),
      text2: getTranslation(locale, "flyin.description2"),

      imgSrc: "/assets/process/process1.png",
      reverse: false,
    },
    {
      index: "2",
      text1: getTranslation(locale, "flyin.description3"),
      text2: getTranslation(locale, "flyin.description4"),
      imgSrc: "/assets/process/process2.png",
      reverse: true,
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
              {getTranslation(locale, "flyin.label")}
            </h6>
          </AnimatedDiv>
          <AnimatedDiv>
            <h2
              className={
                isMobile
                  ? "typography-Ag-Mobile-Headlines"
                  : "typography-Ag-Camino-Final-H1"
              }
            >
              {getTranslation(locale, "flyin.title")}
            </h2>
          </AnimatedDiv>
        </div>

        <div className={styles.section1}>
          <div className={styles.rights1}>
            <Image src={image} alt="contact" />
          </div>

          <div className={styles.lefts1}>
            <div className={styles.textcontainer}>
              <AnimatedDiv delay={0.3}>
                <p className={`typography-Ag-P`}>
                  {getTranslation(locale, "flyin.text1")}
                </p>
                <p className={`typography-Ag-P`}>
                  {getTranslation(locale, "flyin.text2")}
                </p>
              </AnimatedDiv>
            </div>
            <div className={styles.imagecontainer}>

            <Image src={image1} alt="contact" />
            </div>
          </div>
        </div>

        <h2 className={`typography-Ag-Camino-Final-H1`}>
          {" "}
          {getTranslation(locale, "flyin.title2")}
        </h2>

        <div className={styles.itemssection}>
          {sections.map((section, i) => (
            <div
              key={i}
              className={`${styles.row} ${
                section.reverse ? styles.reverse : ""
              }`}
            >
              <div className={styles.textContainer}>
                <p className={`typography-Ag-P ${styles.texto}`}>
                  {section.text1}
                </p>
                <p className={`typography-Ag-P ${styles.texto}`}>
                  {section.text2}
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

        <h2 className={`typography-Ag-Camino-Final-H1`}>
          {" "}
          {getTranslation(locale, "flyin.title3")}
        </h2>

        <div className={styles.itemscontainer}>
          {[...Array(8)].map((_, i) => (
            <div key={i} className={styles.item}>
              <p className={`typography-Ag-P`}>
                {getTranslation(locale, `flyin.l${i + 1}`)}
              </p>
            </div>
          ))}
        </div>

        <h2 className={`typography-Ag-Camino-Final-H1`}>
          {" "}
          {getTranslation(locale, "flyin.title4")}
        </h2>
        <RoundedButton text={getTranslation(locale, "flyin.button")} link="/" />
      </div>
    </div>
  );
}
