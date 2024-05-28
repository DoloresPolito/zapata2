"use client";
import styles from "./style.module.scss";
import Image from "next/image";
import cara from "../../../public/assets/images/cara.png";
import cuerpo from "../../../public/assets/images/cuerpo.png";

export default function Treatments() {
  return (
    <>
      <div className={styles.tratamientos}>
        <div className={styles.container}>
        <div className={styles.imagecontainer}>
          <Image src={cara} alt="cara" />
        </div>
        <div className={styles.imagecontainer}>
          <Image src={cuerpo} alt="cuerpo" />
        </div>

        </div>
       
      </div>
    </>
  );
}
