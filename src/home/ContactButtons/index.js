"use client";
import styles from "./style.module.scss";
import Link from "next/link";
import Image from "next/image";
import plus from "../../../public/assets/arrows/plus.png"

export default function ContactButtons() {
  const cards = [
    {
      id: 1,
      text: "Consultas por Whatsapp",
      link: "https://api.whatsapp.com/send/?phone=543446584076",
    },
    {
      id: 2,
      text: "Solicitar un turno",
      link: "https://api.whatsapp.com/send/?phone=543446584076",
    },
    {
      id: 3,
      text: "Enviar un e-mail",
      link: "mailto:dolores.polito@gmail.com",
    },
  ];
  return (
    <>
      <div className={styles.section}>
        <div className={styles.container}>
          {cards.map((card) => {
            return (
              <>
                <Card key={card.id} text={card.text} link={card.link} />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}



const Card = ({ text, link }) => {
    return (
      <div className={styles.cardWrapper}>
        <Link href={link} target="_blank" style={{ textDecoration: "none"}}>
          <div className={styles.cardcontainer}>
            <p className={styles.cardText}>{text}</p>
            <div className={styles.circle}>
                <Image src={plus} alt="more"/>
            </div>
          </div>
          </Link>
      </div>
    );
  };
