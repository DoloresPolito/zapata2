"use client";
import styles from "./style.module.scss";
import ContactForm from "@/components/ContactForm";
import logonacion from "../../../public/assets/home/logo-nacion.png";
import Image from "next/image";
import { getTranslation } from "@/utils/getTranslation";
import Link from "next/link";
import ContactColumnInfo from "@/components/ContactColumnInfo";
import AnimatedDiv from "@/components/AnimatedDiv";
export default function Footer({ locale }) {
  return (
    <>
      <div className={styles.section}>
        <div className={styles.container}>
          <div className={styles.left}>
            <div className={styles.row1}>
              <div className={styles.column1}>
              <AnimatedDiv>
                <p className={`typography-Ag-P ${styles.title}`}>
                  {getTranslation(locale, "footer.column1.title")}
                </p>
          

            
                <p className={`typography-Ag-P `}>Dr. Federico Zapata</p>
                <p className={`typography-Ag-P `}>Austria 2630 — PB</p>
                <p className={`typography-Ag-P `}>CABA, Argentina</p>
              
                <Link
                  href="https://maps.app.goo.gl/ew7RVyhtAvf42wzR7"
                  target="_blank"
                >
                  <p className={`typography-Ag-P `}>
                    {getTranslation(locale, "footer.column1.button")}
                  </p>
                </Link>
                </AnimatedDiv>
              </div>

              <div className={styles.column2}>
              <AnimatedDiv>
                <ContactColumnInfo locale={locale} />
        

                <p
                  className={`typography-Ag-P ${styles.title}`}
                  style={{ marginTop: "3vh" }}
                >
                  {getTranslation(locale, "footer.column3.title")}
                </p>
                <Link href="https://www.instagram.com/" target="_blank">
                  <p className={`typography-Ag-P `}> Instagram</p>{" "}
                </Link>
                </AnimatedDiv>
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
              <ContactForm locale={locale}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


