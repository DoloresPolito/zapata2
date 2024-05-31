"use client";
import styles from "./style.module.scss";
import Image from "next/image";
import background from "../../../public/assets/images/back.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";
import Process from "../../home/Process";
import Dr from "../../home/Dr";
import Contact from "@/home/Contact";
import Treatments from "@/home/Treatments";
import Reviews from "@/home/Reviews";
import Cv from "@/home/Cv";
import LinkButton from "@/components/LinkButton";
import whitearrow from "../../../public/assets/arrows/small-white.svg"
import ContactButtons from "../../home/ContactButtons"

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

        <div className={styles.textcontainer}>
          <h2 className={styles.title} ref={titleRef}>
            {translations.title}
          </h2>

          <div className={styles.bottom}>
            <div className={styles.button}>
              <p>{translations.reserva}</p>
              <Image src={whitearrow} alt="arrow"/>
            </div>
            <LinkButton
              text="International patients"
              color="white"
              link="/international"
            />
          </div>
        </div>
      </div>

      <ContactButtons/>

      <Dr dr_translations={dr_translations} />
      <Process process_translations={process_translations} />
      <Cv />
      <Treatments />
      <Reviews />
      <Contact />
      {/* 
      <div>
        <SectionParallax />
      </div> */}
    </>
  );
}
