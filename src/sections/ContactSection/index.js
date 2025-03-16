import { getTranslation } from "@/utils/getTranslation";
import styles from "./style.module.scss";
import Image from "next/image";
import image from "../../../public/assets/contact/contactnocompress.png";
import LinkButton from "@/components/LinkButton";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export default function ContactSection({ locale }) {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.left}>
    

          <div className={styles.first}>
            <p className={`typography-Ag-P `}>{getTranslation(locale, "contact.description")}</p>
            <LinkButton text="Solicitar un turno" color="green"/>
          </div>

          <div className={styles.second}>
            <div className={styles.column1}>
              <p className={`typography-Ag-P ${styles.title}`} >{getTranslation(locale, "contact.visit")}</p>
              <p className={`typography-Ag-P `}>Austria 2630 — PB</p>
              <p className={`typography-Ag-P `}>CABA, Argentina</p>
              <Link href="https://maps.app.goo.gl/ew7RVyhtAvf42wzR7" target="_blank">
                  <p className={`typography-Ag-P `}>
                    {getTranslation(locale, "footer.column1.button")}
                  </p>
                </Link>
            </div>
            <div className={styles.column2}>
              <p className={`typography-Ag-P ${styles.title}`}>{getTranslation(locale, "contact.contact")}</p>
              <p className={`typography-Ag-P `}>Tel: + 54 11 4807 4040</p>
              <p className={`typography-Ag-P `}>WhatsApp: +54 11 4807 7889</p>
              <p className={`typography-Ag-P `}>coordinacion@federicozapata.com.ar</p>
            </div>
          </div>

          <div className={styles.third}>
            <p className={`typography-Ag-P `}>{getTranslation(locale, "contact.formtitle")}</p>
            {/* <form>
              <label>{getTranslation(locale, "contact.name")}</label>
              <input type="text" />

              <label>{getTranslation(locale, "contact.email")}</label>
              <input type="email" />

              <label>{getTranslation(locale, "contact.message")}</label>
              <textarea />

              <button>{getTranslation(locale, "contact.send")}</button>
            </form> */}

            <ContactForm/>
          </div>
        </div>

        <div className={styles.right}>
          <Image src={image} alt="contact" />
        </div>
      </div>
    </div>
  );
}
