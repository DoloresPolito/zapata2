"use client";
import styles from "./style.module.scss";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <>
      <div className={styles.section}>
        <div className={styles.contact}>
          <div className={styles.contactcontainer}>
            <div className={styles.column1}>
              <p>Dr. Federico Zapata</p>
              <p>Austria 2630 — PB</p>
              <p>CABA, Argentina</p>
            </div>
            <div className={styles.column2}>
              <p>Contacto</p>
              <p>WhatsApp: +54 9 11 4807 4040</p>
              <p>Tel: 011 4562 9283</p>
              <p>info@drzapata.com</p>

              <p> Instagram</p>
            </div>
            <div className={styles.column3}>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
