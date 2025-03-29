"use client";
import styles from "./style.module.scss";
import Image from "next/image";
import { getTranslation } from "@/utils/getTranslation";
import Link from "next/link";

export default function ContactColumnInfo({ locale }) {


  return (
    <>
    <div className={styles.contactcontainer}>


      <p className={`typography-Ag-camino-2-P  ${styles.title}`}>
        {getTranslation(locale, "footer.column2.title")}
      </p>
      <div className={styles.linkcontainer}>
        <Image
          src={`/assets/icons/whatsapp.svg`}
          alt="more"
          width={20}
          height={20}
        />
        <p className={`typography-Ag-camino-2-P  `}>
          WhatsApp:{" "}
          <Link
            href="https://api.whatsapp.com/send/?phone=541148077889"
            target="_blank"
          >
           
            +54 9 11 4807 4040
          </Link>
        </p>
      </div>

      <div className={styles.linkcontainer}>
        <Image
          src={`/assets/icons/mail.svg`}
          alt="more"
          width={20}
          height={20}
        />
        <Link href="mailto:info@drzapata.com">
          <p className={`typography-Ag-camino-2-P `}>info@drzapata.com</p>
        </Link>
      </div>

      <div className={styles.linkcontainer}>
        <Image
          src={`/assets/icons/phone.svg`}
          alt="more"
          width={20}
          height={20}
        />
        <Link href="/">
          <p className={`typography-Ag-camino-2-P  `}>Tel: 011 4562 9283</p>
        </Link>
      </div>
      </div>
    </>
  );}