"use client"

import { useState, useEffect, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import styles from "./styles.module.scss";

import image from "../../../../public/assets/home/clinic.png";

export default function Clinic() {
  const container = useRef();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 750);
    };

    // Check screen size on load
    handleResize();

    // Listen for resize events
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
    layoutEffect: false,
  });

  // Define y transform but control its value based on screen size
  const yTransform = useTransform(scrollYProgress, [0, 1], ["0vh", "100vh"]);
  const y = isMobile ? "0vh" : yTransform;

  return (
    <div ref={container} className={styles.section}>
      <motion.div style={{ y }} 
      className={styles.motionDiv}
      >
        <div className={styles.container}>
  

            <div className={styles.imagecontainer}>
              <Image src={image} alt="clinica" />
            </div>

        </div>
      </motion.div>

      
    </div>
  );
}