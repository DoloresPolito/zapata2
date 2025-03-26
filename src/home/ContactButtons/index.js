"use client";
import styles from "./style.module.scss";
import Link from "next/link";
import Image from "next/image";

import { getTranslation } from "@/utils/getTranslation";

export default function ContactButtons({ locale }) {
  const cards = [
    {
      id: 1,
      text1: "WhatsApp: +54 11 4807 7889",
      text2: getTranslation(locale, "book.button1"),
      link: "https://api.whatsapp.com/send/?phone=541148077889",
      icon: "/icons/whatsapp.svg",
    },
    {
      id: 2,
      text1: "coordinacion@federicozapata.com.ar",
      text2: getTranslation(locale, "book.button2"),
      link: "mailto:coordinacion@federicozapata.com.ar",
      icon: "/icons/mail.svg",
    },
    {
      id: 3,
      text1: "Tel: +54 11 4807 4040",
      text2: getTranslation(locale, "book.button3"),
      link: "https://api.whatsapp.com/send/?phone=541148074040",
      icon: "/icons/phone.svg",
    },
  ];
  return (
    <>
      <div className={styles.section}>
        <div className={styles.container}>
          {cards.map((card) => {
            return <Card key={card.id} card={card} />;
          })}
        </div>
      </div>
    </>
  );
}

const Card = ({ card }) => {
  return (
    <div className={styles.cardWrapper}>
      <Link href={card.link} target="_blank" style={{ textDecoration: "none" }}>
        <div className={styles.cardcontainer}>
          <Image
            src={`/assets${card.icon}`}
            alt="more"
            width={40}
            height={40}
          />

          <p  className={`typography-Ag-P`}>{card.text1}</p>
          <p  className={`typography-Ag-P ${styles.cardText2}`}>{card.text2}</p>
        </div>
      </Link>
    </div>
  );
};
