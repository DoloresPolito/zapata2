"use client";
import { useEffect } from "react";
import { getTranslation } from "@/utils/getTranslation";
import styles from "./style.module.scss";
import Image from "next/image";
import image from "../../../public/assets/contact/contactnocompress.png";
import RoundedButton from "@/components/RoundedButton";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import {
  slideUp,
  slideUp2,
  opacity,
} from "../../subsections/home/Hero/animation";
import { motion } from "framer-motion";
import Lenis from "lenis";

export default function ContactSection({ locale }) {

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
        <div className={styles.left}>
          <motion.div
            className={styles.first}
            variants={slideUp2}
            initial="initial"
            animate="enter"
          >
            <p className={`typography-Ag-P ${styles.description}`}>
              {getTranslation(locale, "contact.description")}
            </p>
            <RoundedButton
              text="Solicitar un turno"
              color="#281A0F"
              background="#bcc090"
              border="#bcc090"
              hoverB="#281A0F"
              hoverC="#bcc090"
              hoverA="#BCC090"
              link="/contacto"
            />
          </motion.div>

          <motion.div
            className={styles.second}
            variants={slideUp}
            initial="initial"
            animate="enter"
          >
           
            <div className={styles.column1}>
              <div className={styles.titlecontactcontainer}>
                <Image
                  src={`/assets/icons/location.svg`}
                  alt="more"
                  width={25}
                  height={25}
                />

                <p className={`typography-Ag-camino-2-P ${styles.title}`}>
                  {getTranslation(locale, "contact.visit")}
                </p>
              </div>

              <p className={`typography-Ag-camino-2-P  `}>Austria 2630 — PB</p>
              <p className={`typography-Ag-camino-2-P  `}>CABA, Argentina</p>
              <Link
                href="https://maps.app.goo.gl/ew7RVyhtAvf42wzR7"
                target="_blank"
              >
                <p className={`typography-Ag-camino-2-P  `}>
                  {getTranslation(locale, "footer.column1.button")}
                </p>
              </Link>
            </div>
            <div className={styles.column2}>
              <div className={styles.titlecontactcontainer}>
                <Image
                  src={`/assets/icons/mail.svg`}
                  alt="more"
                  width={25}
                  height={25}
                />
                <p className={`typography-Ag-camino-2-P  ${styles.title}`}>
                  {getTranslation(locale, "contact.contact")}
                </p>
              </div>

              <p className={`typography-Ag-camino-2-P  `}>Tel: 011 4562 9283</p>

              <p className={`typography-Ag-camino-2-P  `}>
                WhatsApp:{" "}
                <Link
                  href="https://api.whatsapp.com/send/?phone=541148077889"
                  target="_blank"
                >
                  +54 9 11 4807 4040
                </Link>
              </p>

              <Link href="mailto:info@drzapata.com">
                <p className={`typography-Ag-camino-2-P  `}>info@drzapata.com</p>
              </Link>
            </div>
          </motion.div>

          <motion.div
            className={styles.imagecontainermobile}
            variants={opacity}
            initial="initial"
            animate="enter"
          >
            {/* <div className={styles.imagecontainermobile}> */}
            <Image src={image} alt="contact" />
          </motion.div>

          {/* <div className={styles.third}> */}

          <motion.div
            className={styles.third}
            variants={opacity}
            initial="initial"
            animate="enter"
          >
            <p className={`typography-Ag-P `}>
              {getTranslation(locale, "contact.formtitle")}
            </p>
            {/* <form>
              <label>{getTranslation(locale, "contact.name")}</label>
              <input type="text" />

              <label>{getTranslation(locale, "contact.email")}</label>
              <input type="email" />

              <label>{getTranslation(locale, "contact.message")}</label>
              <textarea />

              <button>{getTranslation(locale, "contact.send")}</button>
            </form> */}

            <ContactForm locale={locale} />
          </motion.div>
        </div>

        {/* <div className={styles.right}> */}

        <motion.div
          className={styles.right}
          variants={opacity}
          initial="initial"
          animate="enter"
        >
          <Image src={image} alt="contact" />
        </motion.div>
      </div>
    </div>
  );
}
