"use client"
import styles from "./style.module.css";
import { motion } from "framer-motion";
import Contact from "@/components/ContactForm";


export default function Index({translations}) {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
      <motion.div
          className={styles.box}
          animate={{ x: 100 }} // Mueve el div 100 pixeles hacia la derecha
          transition={{ duration: 1 }} // Duración de la animación
        />
        <p className={styles.montserratbold}>{translations.text1}</p>
        <Contact/>
      </div>
    </div>
  );
}
