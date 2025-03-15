"use client";
import styles from "./style.module.scss";
import Link from "next/link";
import Image from "next/image";
import plus from "../../../public/assets/arrows/plus.png";

export default function ContactButtons() {
  const cards = [
    {
      id: 1,
      text1: "WhatsApp: +54 11 4807 7889",
      text2: "Escribinos",
      link: "https://api.whatsapp.com/send/?phone=541148077889",
      icon: "/icons/whatsapp.png",
    },
    {
      id: 2,
      text1: "coordinacion@federicozapata.com.ar",
      text2: "Enviar correo",
      link: "mailto:coordinacion@federicozapata.com.ar",
      icon: "/icons/mail.png",
    },
    {
      id: 3,
      text1: "Tel: +54 11 4807 4040",
      text2: "Llamanos",
      link: "https://api.whatsapp.com/send/?phone=541148074040",
      icon: "/icons/phone.png",
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
            width={25}
            height={25}
          />

          <p className={styles.cardText1}>{card.text1}</p>
          <p className={styles.cardText2}>{card.text2}</p>
        </div>
      </Link>
    </div>
  );
};
