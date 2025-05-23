"use client";
import styles from "./styles.module.scss";
import { slideUp, slideUp2 } from "./animation";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef, useEffect, useState } from "react";
import background from "../../../../public/assets/home/hero.svg";
import Image from "next/image";
import LinkButton from "@/components/LinkButton";
import gsap from "gsap";
import RoundedButton from "@/components/RoundedButton";
import "@/styles/base/_variables.scss";
import logo1 from "../../../../public/assets/logo/logosvgchico.svg";

export default function Hero({ title, reserva }) {
  const home = useRef(null);
  const container = useRef();
  const titleRef = useRef(null);
  const imageRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
    layoutEffect: false 
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "300vh"]);

  const [buttonColor, setButtonColor] = useState("white");
  const [roundedButtonProps, setRoundedButtonProps] = useState({
    text: reserva,
    color: "white",
    background: "transparent",
    border: "white",
    hoverB: "#BCC090",
    hoverC: "black",
    hoverA: "#BCC090",
    link: "/contacto",
  });

  useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth < 500) {
        setButtonColor("black");
        setRoundedButtonProps({
          text: "Solicitar un turno",
          color: "#281A0F",
          background: "#bcc090",
          border: "#bcc090",
          hoverB: "#281A0F",
          hoverC: "#bcc090",
          hoverA: "#BCC090",
          link: "/contacto",
        });
      } else {
        setButtonColor("white");
        setRoundedButtonProps({
          text: reserva,
          color: "white",
          background: "transparent",
          border: "white",
          hoverB: "#BCC090",
          hoverC: "black",
          hoverA: "#BCC090",
          link: "/contacto",
        });
      }
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, [reserva]);

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
    <div className={styles.section} ref={home} id="home">
      <motion.div style={{ y }} className={styles.motionDiv}>
        <motion.div
          className={styles.home}
          variants={slideUp2}
          initial="initial"
          animate="enter"
        >
          <div className={styles.imagecontainer} ref={imageRef}>
            <Image
              src={background}
              alt="background"
              layout="fill"
              objectFit="cover"
            />
          </div>

          <motion.div
            className={styles.textcontainer}
            variants={slideUp}
            initial="initial"
            animate="enter"
          >
            {/* <div className={styles.logomobilecontainer}>
              <Image src={logo1} alt="logo mobile" />
            </div> */}
            <h2
              className={`typography-Ag-P-Big ${title}`}
              ref={titleRef}
            >
              {title}
            </h2>

            <div className={styles.bottom}>
              <div className={styles.button1}>
                <RoundedButton {...roundedButtonProps} />
              </div>

              <LinkButton text="International patients" color={buttonColor} link="/international" />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}