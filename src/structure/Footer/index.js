"use client";
import styles from "./style.module.scss";
import ContactForm from "@/components/ContactForm";
import logonacion from "../../../public/assets/home/logo-nacion.png";
import Image from "next/image";
import { getTranslation } from "@/utils/getTranslation";
import Link from "next/link";

export default function Footer({ locale }) {
  return (
    <>
      <div className={styles.section}>
        <div className={styles.container}>
          <div className={styles.left}>
            <div className={styles.row1}>
              <div className={styles.column1}>
                <p className={`typography-Ag-P ${styles.title}`}>
                  {getTranslation(locale, "footer.column1.title")}
                </p>
                <p className={`typography-Ag-P `}>Dr. Federico Zapata</p>
                <p className={`typography-Ag-P `}>Austria 2630 — PB</p>
                <p className={`typography-Ag-P `}>CABA, Argentina</p>
                <Link href="https://maps.app.goo.gl/ew7RVyhtAvf42wzR7" target="_blank">
                  <p className={`typography-Ag-P `}>
                    {getTranslation(locale, "footer.column1.button")}
                  </p>
                </Link>
              </div>

              <div className={styles.column2}>
                <p className={`typography-Ag-P ${styles.title}`}>
                  {getTranslation(locale, "footer.column2.title")}
                </p>
                <div className={styles.linkcontainer}>
                  <Image
                    src={`/assets/icons/whatsapp.png`}
                    alt="more"
                    width={20}
                    height={18}
                  />
                  <p className={`typography-Ag-P `}>
                    WhatsApp:           <Link href="https://api.whatsapp.com/send/?phone=541148077889" target="_blank"> +54 9 11 4807 4040</Link>
                  </p>
                </div>

                <div className={styles.linkcontainer}>
                  <Image
                    src={`/assets/icons/mail.png`}
                    alt="more"
                    width={20}
                    height={20}
                  />
                  <Link href="mailto:info@drzapata.com">
                  <p className={`typography-Ag-P `}>info@drzapata.com</p>
                  </Link>
                </div>

                <div className={styles.linkcontainer}>
                  <Image
                    src={`/assets/icons/phone.png`}
                    alt="more"
                    width={20}
                    height={20}
                  />
                  <Link href="/"> 
                  <p className={`typography-Ag-P `}>Tel: 011 4562 9283</p>
                  </Link>
                </div>

                <p
                  className={`typography-Ag-P ${styles.title}`}
                  style={{ marginTop: "3vh" }}
                >
                  {getTranslation(locale, "footer.column3.title")}
                </p>
                <Link href="https://www.instagram.com/" target="_blank"> 
                <p className={`typography-Ag-P `}> Instagram</p>       </Link>
              </div>
            </div>

            <div className={styles.row2}>
              <p className={`typography-Ag-P ${styles.title}`}>
                {getTranslation(locale, "footer.column4.title")}
              </p>
              <Image src={logonacion} alt="logo nacion" />
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.column3}>
              <p className={`typography-Ag-P ${styles.title}`}>
                {getTranslation(locale, "footer.form.title")}
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
