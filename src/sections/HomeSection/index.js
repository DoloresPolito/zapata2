"use client";
import styles from "./style.module.scss";
import Image from "next/image";
import background from "../../../public/assets/images/background.png";
import logo1 from "../../../public/assets/images/logo.1.png";
import logo2 from "../../../public/assets/images/logo.2.png";
import logo3 from "../../../public/assets/images/logo.3.png";
import logo4 from "../../../public/assets/images/logo.4.png";
import cv from "../../../public/assets/images/cv.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";
import Process from "../../home/Process";
import Dr from "../../home/Dr";
import Contact from "@/home/Contact";
import Treatments from "@/home/Treatments";
import Reviews from "@/home/Reviews";

gsap.registerPlugin(ScrollTrigger);

export default function Index({
  translations,
  process_translations,
  dr_translations,
}) {
  const titleRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.to(titleRef.current, {
      y: 50,
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 80%",
        end: "bottom top",
        scrub: 1,
      },
    });

    gsap.to(imageRef.current, {
      scale: 1.2,
      scrollTrigger: {
        trigger: document.documentElement,
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });
  }, []);

  return (
    <>
      <div className={styles.home}>
        <div className={styles.imagecontainer} ref={imageRef}>
          <Image
            src={background}
            alt="background"
            layout="fill"
            objectFit="cover"
          />
        </div>

        <h2 className={styles.title} ref={titleRef}>
          {translations.title}
        </h2>

        <div className={styles.button}>
          <p>{translations.reserva}</p>
        </div>
      </div>

      <Dr dr_translations={dr_translations} />
      <Process process_translations={process_translations} />

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
          <div className={styles.textcontainer}>
            <h2>Curriculum Vitae</h2>

            <p>{translations.cv_text}</p>
          </div>
          <div className={styles.imagecontainer}>
            <Image src={cv} alt="cv" />
          </div>
        </div>
      </div>

      <Treatments />
<Reviews/>

      <Contact />
      {/* 
      <div>
        <SectionParallax />
      </div> */}
    </>
  );
}
