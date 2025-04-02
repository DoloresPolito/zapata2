"use client";
import styles from "./style.module.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect, useState} from "react";
// import Process from "../../subsections/home/Process";
import Dr from "../../subsections/home/Dr";
import Footer from "@/structure/Footer";
import Treatments from "@/subsections/home/Treatments";
import Reviews from "@/subsections/home/Reviews";
import Cv from "@/subsections/home/Cv";

import Hero from "@/subsections/home/Hero";
import Description from "@/subsections/home/Description";
// import RoundedButton from "@/components/RoundedButton";
import SectionEffectTop from "../../subsections/home/SectionEffectTop";

import HeroMobile from "@/subsections/home/HeroMobile";

import Lenis from "lenis";



gsap.registerPlugin(ScrollTrigger);

export default function Index({
  translations,
  process_translations,
  dr_translations,
  locale
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

  useEffect(() => {
    const lenis = new Lenis();
  
    function raf(time) {
      lenis.raf(time);
  
      requestAnimationFrame(raf);
    }
  
    requestAnimationFrame(raf);
  }, []);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 800);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
    {isMobile ? ( <HeroMobile title={translations.title} reserva={translations.reserva} />) : (
       <Hero title={translations.title} reserva={translations.reserva} />
    )
    
  }
     
      <Description locale={locale}/>

      <Dr dr_translations={dr_translations} />
      <SectionEffectTop process_translations={process_translations} />
      {/* <Process process_translations={process_translations} /> */}
      <Cv locale={locale}/>
      <Treatments   locale={locale}/>
      <Reviews />
      <Footer locale={locale} />

      {/* <div className={styles.buttoncontainer}>
        <RoundedButton
          text="Solicitar un turno"
          color="#281A0F"
          background="#bcc090"
          border="#bcc090"
          hoverB="#281A0F"
          hoverC="#bcc090"
          hoverA="#BCC090"
          link="/contacto"

     
        />
      </div> */}
    </>
  );
}
