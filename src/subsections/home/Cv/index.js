"use client";
import { useState, useEffect } from "react";
import styles from "./style.module.scss";
import cv from "../../../../public/assets/home/about.png";
import Image from "next/image";
import LinkButton from "@/components/LinkButton";
import Portada from "@/components/Portada";
import { getTranslation } from "@/utils/getTranslation";
import AnimatedDiv from "@/components/AnimatedDiv";

// Importación de logos
import logo1 from "../../../../public/assets/images/logo1.svg";
import logo2 from "../../../../public/assets/images/logo2.svg";
import logo3 from "../../../../public/assets/images/logo3.svg";
import logo4 from "../../../../public/assets/images/logo4.svg";

export default function Cv({ locale }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 800);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.cv}>
          <h2 className={`typography-Ag-P-Big`}>Dr. Federico Zapata</h2>
          <div className={styles.containercv}>
            <div className={styles.imagecontainer}>
              <Image src={cv} alt="cv" />
            </div>
            <div className={styles.textcontainer}>
              <AnimatedDiv>
                <p className={`typography-Ag-P`}>
                  {getTranslation(locale, "cv-home.description")}
                </p>
              </AnimatedDiv>
              <AnimatedDiv delay="0.5">
                <LinkButton   text={getTranslation(locale, "extras.button-home-cv")} link="/dr" color="#7a8025" />
              </AnimatedDiv>
            </div>
          </div>
        </div>

        <div className={styles.logossection}>
          <h4>{getTranslation(locale, "extras.subtitle-home-avalado")}</h4>
          {isMobile ? (
            <div className={styles.logoscontainer}>
              <div className={styles.logoitem}>
                <Image src={logo1} alt="logo1" />
                <p>Asociación Médica Argentina</p>
              </div>
              <div className={styles.logoitem}>
                <Image src={logo2} alt="logo2" />
                <p>
                  Sociedad Argentina de Cirugía Plástica, Estética y Reparadora
                </p>
              </div>
              <div className={styles.logoitem}>
                <Image src={logo3} alt="logo3" />
                <p>Sociedad de Cirugía Plástica de Buenos Aires</p>
              </div>
              <div className={styles.logoitem}>
                <Image src={logo4} alt="logo4" />
                <p>The American Society For Aesthetic Plastic Surgery, INC.</p>
              </div>
            </div>
          ) : (
            <Portada />
          )}
        </div>
      </div>
    </div>
  );
}
