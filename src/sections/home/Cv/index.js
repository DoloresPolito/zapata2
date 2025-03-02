"use client";
import styles from "./style.module.scss";
import logo1 from "../../../../public/assets/images/logo.1.png";
import logo2 from "../../../../public/assets/images/logo.2.png";
import logo3 from "../../../../public/assets/images/logo.3.png";
import logo4 from "../../../../public/assets/images/logo.4.png";
import cv from "../../../../public/assets/home/about.png";
import Image from "next/image";
import LinkButton from "@/components/LinkButton";

export default function Cv() {
  return (
    <>
      <div className={styles.section}>
        <div className={styles.container}>
          <div className={styles.cv}>
            <h2>Dr. Federico Zapata</h2>
            <div className={styles.containercv}>
              <div className={styles.imagecontainer}>
                <Image src={cv} alt="cv" />
              </div>

              <div className={styles.textcontainer}>
                <p>
                  El Dr. Federico E. Zapata es un reconocido cirujano plástico,
                  egresado de la Universidad de Buenos Aires y con entrenamiento
                  de posgrado en prestigiosas instituciones en Estados Unidos,
                  donde, además, realizó fellowships de perfeccionamiento junto
                  a los grandes maestros quienes le enseñaron la artesanía
                  quirúrgica en las distintas áreas plásticas, tanto estéticas
                  como reparadoras.
                </p>
                <LinkButton text="Ver CV completo"/>
              </div>
            </div>
          </div>

          <div className={styles.logossection}>
          <h4>Avalado por</h4>
            <div className={styles.logoscontainer}>

              <div className={styles.logoitem}>
              <Image src={logo1} alt="logo1" />
              <p>Asociación Médica Argentina</p>
              </div>

              <div className={styles.logoitem}>
              <Image src={logo2} alt="logo2" />
              <p>Sociedad Argentina de Cirugía Plástica, Estética y Reparadora</p>
              </div>

              <div className={styles.logoitem}>
              <Image src={logo3} alt="logo3" />
              <p>Sociedad de Cirugía Plástica de  Buenos Aires</p>
              </div>

              <div className={styles.logoitem}>
              <Image src={logo4} alt="logo4" />
              <p>The American Society For Aesthetic Plastic Surgery, INC.</p>
              </div>
       
           
         
            
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
