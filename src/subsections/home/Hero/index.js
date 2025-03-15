"use client";
import styles from "./styles.module.scss";
import { slideUp, slideUp2 } from "./animation";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef, useEffect } from "react";
import background from "../../../../public/assets/home/hero.png";
import Image from "next/image";
import LinkButton from "@/components/LinkButton";
import gsap from "gsap";
import RoundedButton from "@/components/RoundedButton";
import "@/styles/base/_variables.scss";

export default function Hero({ title, reserva }) {
  const home = useRef(null);

  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "150vh"]);

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
              <h2 className={styles.title} ref={titleRef}>
                {title}
              </h2>

              <div className={styles.bottom}>
                <RoundedButton
                  text={reserva}
                  background="transparent"
                  color="white"
                  border="white"
                  hoverB="#BCC090"
                  hoverC="black"
              
        
                />
                <LinkButton
                  text="International patients"
                  color="white"
                  link="/international"
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>{" "}
      </div>
    </>
  );
}
