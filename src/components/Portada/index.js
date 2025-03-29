"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./styles.module.scss";
import logo1 from "../../../public/assets/images/logo.1.png";
import logo2 from "../../../public/assets/images/logo.2.png";
import logo3 from "../../../public/assets/images/logo.3.png";
import logo4 from "../../../public/assets/images/logo.4.png";

const logos = [
  { img: logo1, text: "Asociación Médica Argentina" },
  { img: logo2, text: "Sociedad Argentina de Cirugía Plástica, Estética y Reparadora" },
  { img: logo3, text: "Sociedad de Cirugía Plástica de Buenos Aires" },
  { img: logo4, text: "The American Society For Aesthetic Plastic Surgery, INC." },
];

export default function Portada() {
  const scrollContainerRef = useRef(null);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 600);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let velocidad = isSmallScreen ? 0.001 : 0.5;
    
    const scrollLoop = () => {


      if (!scrollContainer) return;
      scrollContainer.scrollLeft += velocidad;
      
      // Si el scroll llega a la mitad del contenido duplicado, lo reseteamos
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0;
      }

      requestAnimationFrame(scrollLoop);
    };

    requestAnimationFrame(scrollLoop);
  }, [isSmallScreen]);

  return (
    <div className={styles.homeCover} ref={scrollContainerRef}>
      <div className={styles.scrollContent}>
        {/* Logos duplicados para crear el efecto de loop infinito */}
        {[...logos, ...logos].map((logo, index) => (
          <div key={index} className={styles.logoitem}>
            <Image src={logo.img} alt={`logo-${index}`} />
            <p>{logo.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}