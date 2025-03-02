"use client";
import styles from "./style.module.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect, useState } from "react";
import Process from "../home/Process";
import Dr from "../../home/Dr";
import Contact from "@/structure/Footer";
import Treatments from "@/home/Treatments";
import Reviews from "@/sections/home/Reviews";
import Cv from "@/sections/home/Cv";


import Hero from "@/sections/home/Hero";
import Description from "@/sections/home/Description";
import RoundedButton from "@/components/RoundedButton";
import SectionEffectTop from "../home/SectionEffectTop";

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
      <Hero title={translations.title} reserva={translations.reserva} />
      <Description />

      <Dr dr_translations={dr_translations} />
      <SectionEffectTop process_translations={process_translations}/>
      {/* <Process process_translations={process_translations} /> */}
      <Cv />
      <Treatments />
      <Reviews />
      <Contact />

      <div className={styles.buttoncontainer}>
        <RoundedButton
          text="Solicitar un turno"
          color="#281A0F"
          background="#bcc090"
          border="#bcc090"
          hoverB="#281A0F"
          hoverC="#bcc090"
        />
      </div>
    </>
  );
}
