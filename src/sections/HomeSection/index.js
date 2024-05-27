"use client";
import styles from "./style.module.scss";
// import { motion } from "framer-motion";
import Contact from "@/components/ContactForm";
// import SectionParallax from "../../components/SectionsParallax";
import Image from "next/image";
import background from "../../../public/assets/images/background.png";
import dr from "../../../public/assets/images/dr.png";
import logo1 from "../../../public/assets/images/logo.1.png";
import logo2 from "../../../public/assets/images/logo.2.png";
import logo3 from "../../../public/assets/images/logo.3.png";
import logo4 from "../../../public/assets/images/logo.4.png";
import cv from "../../../public/assets/images/cv.png";
import cara from "../../../public/assets/images/cara.png"
import cuerpo from "../../../public/assets/images/cuerpo.png"
export default function Index({ translations }) {
  return (
    //   <div className={styles.container}>
    //   <motion.div
    //       className={styles.box}
    //       animate={{ x: 100 }}
    //       transition={{ duration: 1 }}
    //     />
    //     <p className={styles.montserratbold}>{translations.text1}</p>
    //     <Contact/>
    //   </div>

    <>
      <div className={styles.home}>
        <div className={styles.imagecontainer}>
          <Image src={background} alt="background" />
        </div>

        <h2>{translations.title}</h2>

        <div className={styles.button}>
          <p>{translations.reserva}</p>
        </div>
      </div>

      <div className={styles.dr}>
        <div className={styles.container}>
          <div className={styles.title}>
            <h2>{translations.dr_title}</h2>
          </div>
          <div className={styles.containerrowdr}>
            <div className={styles.imagecontainer}>
              <Image src={dr} alt="dr" />
            </div>

            <div className={styles.textcontainer}>
              <p>{translations.dr_text1}</p>
              <p>{translations.dr_text2}</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.process}>
        <div className={styles.container}></div>
      </div>

      <div className={styles.logossection}>
        <div className={styles.logos}>
          <Image src={logo1} alt="logo1" />
          <Image src={logo2} alt="logo2" />
          <Image src={logo3} alt="logo3" />
          <Image src={logo4} alt="logo4" />
        </div>
      </div>

      <div className={styles.cv}>
        <div className={styles.containercv}>

    
        {/* <div className={styles.containerrow}> */}
          <div className={styles.textcontainer}>
            <h2>Curriculum Vitae</h2>

            <p>{translations.cv_text}</p>
          </div>
          <div className={styles.imagecontainer}>
            <Image src={cv} alt="cv" />
          </div>
        </div>
        {/* </div> */}
      </div>

      <div className={styles.tratamientos}>
        <div className={styles.imagecontainer}>

        <Image src={cara} alt="cara" />
        </div>
        <div className={styles.imagecontainer}>
        <Image src={cuerpo} alt="cuerpo" />
        </div>
      </div>

      <div className={styles.testimonios}>

        <div className={styles.carouselcontainer}>

        </div>

        <div className={styles.contact}>
          <div className={styles.container}>
          <Contact/>
          </div>
    
        </div>
      </div>
      {/* 
      <div>
        <SectionParallax />
      </div> */}
    </>
  );
}
