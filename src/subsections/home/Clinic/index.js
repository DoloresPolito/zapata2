"use client"

import { useState, useEffect, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import styles from "./styles.module.scss";

import image from "../../../../public/assets/home/clinicanocomp.png";

export default function Clinic() {
  const container = useRef();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 800);
    };

    handleResize(); // Detectar tamaño inicial
    window.addEventListener("resize", handleResize);
    
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
    layoutEffect: false,
  });

  const yTransform = useTransform(scrollYProgress, [0, 1], ["0vh", "100vh"]);
  
  return (
    <div ref={container} className={styles.section}>
      {isMobile ? (
        // Solo renderizar la imagen sin animación en pantallas pequeñas
        <div className={styles.imagecontainer}>
          <Image src={image} alt="clinica" />
        </div>
      ) : (
        // Animación en pantallas grandes
        <motion.div style={{ y: yTransform }} className={styles.motionDiv}>
          <div className={styles.container}>
            <div className={styles.imagecontainer}>
              <Image src={image} alt="clinica" />
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}