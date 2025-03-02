"use client";
import styles from "./style.module.scss";
import ContactForm from "@/components/ContactForm";
import logonacion from "../../../public/assets/home/logo-nacion.png";

import Image from "next/image";

export default function Footer() {
  return (
    <>
      <div className={styles.section}>
        <div className={styles.container}>
          <div className={styles.left}>
            <div className={styles.row1}>
              <div className={styles.column1}>
                <p className={styles.title}>Ubicación</p>
                <p>Dr. Federico Zapata</p>
                <p>Austria 2630 — PB</p>
                <p>CABA, Argentina</p>
              </div>

              <div className={styles.column2}>
                <p className={styles.title}>Contactanos</p>
                <p>WhatsApp: +54 9 11 4807 4040</p>
                <p>Tel: 011 4562 9283</p>
                <p>info@drzapata.com</p>
                <p className={styles.title}>Seguinos en redes</p>
                <p> Instagram</p>
              </div>
            </div>

            <div className={styles.row2}>
              <p className={styles.title}>Centro habilitado por</p>
              <Image src={logonacion} alt="logo nacion"/>
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.column3}>
              <p className={styles.title}>
                Dejanos un mensaje y te contactaremos a la brevedad
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
