import { getTranslation } from "@/utils/getTranslation";
import styles from "./style.module.scss";
import Image from "next/image";
import image from "../../../public/assets/contact/contactnocompress.png";
import LinkButton from "@/components/LinkButton";

export default function ContactSection({ locale }) {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.left}>
    

          <div className={styles.first}>
            <p>{getTranslation(locale, "contact.description")}</p>
            <LinkButton text="Solicitar un turno" color="green"/>
          </div>

          <div className={styles.second}>
            <div className={styles.column1}>
              <p >{getTranslation(locale, "contact.visit")}</p>
              <p>Austria 2630 — PB</p>
              <p>CABA, Argentina</p>
              <p>Ver en Google Maps</p>
            </div>
            <div className={styles.column2}>
              <p>{getTranslation(locale, "contact.contact")}</p>
              <p>Tel: + 54 11 4807 4040</p>
              <p>WhatsApp: +54 11 4807 7889</p>
              <p>coordinacion@federicozapata.com.ar</p>
            </div>
          </div>

          <div className={styles.third}>
            <p>{getTranslation(locale, "contact.formtitle")}</p>
            <form>
              <label>{getTranslation(locale, "contact.name")}</label>
              <input type="text" />

              <label>{getTranslation(locale, "contact.email")}</label>
              <input type="email" />

              <label>{getTranslation(locale, "contact.message")}</label>
              <textarea />

              <button>{getTranslation(locale, "contact.send")}</button>
            </form>
          </div>
        </div>

        <div className={styles.right}>
          <Image src={image} alt="contact" />
        </div>
      </div>
    </div>
  );
}
