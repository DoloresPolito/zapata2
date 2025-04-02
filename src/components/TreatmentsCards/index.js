"use client";
import { useState, useEffect } from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { getTranslation } from "@/utils/getTranslation";
import cara from "../../../public/assets/home/t1.png";
import cuerpo from "../../../public/assets/home/t2.png";
import noinvasivos from "../../../public/assets/home/t3.png";
import AnimatedDiv from "../AnimatedDiv";

const images = {
  t1: cara,
  t2: cuerpo,
  t3: noinvasivos,
};

export default function TreatmentsCards({ locale }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [hoveredTreatment, setHoveredTreatment] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 600);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const treatmentsData = ["t1", "t2", "t3"].map((key) => {
    const section = getTranslation(locale, `treatments.${key}`);
    return {
      title: section.title,
      image: images[key],
      treatments: section.treatments || [],
    };
  });

  return (
    <div className={styles.tratamientos}>
      <div className={styles.container}>
        {treatmentsData.map((category, index) => (
          <div
            key={index}
            className={styles.imagecontainer}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => {
              setHoveredIndex(null);
              setHoveredTreatment(null);
            }}
          >
            <AnimatedDiv delay={index * 0.2}>
              <Image src={category.image} alt={category.title} />

              {/* 🔹 Muestra el título y la flecha en desktop cuando no hay hover */}
              {!isMobile && hoveredIndex !== index && (
                <div className={styles.topOverlay}>
                  <span className={`typography-Ag-P ${styles.title}`}>
                    {category.title}
                  </span>
                  <div className={styles.circle}>
                    {/* <span className={styles.circlearrow}>→</span> */}
                    <Image
                      className={styles.flecha}
                      src="/assets/icons/flecha.svg"
                      alt="flecha"
                      width={20}
                      height={20}
                    />
                  </div>
                </div>
              )}

              {/* 🔹 En desktop, muestra el overlay con tratamientos solo en hover */}
              {!isMobile && hoveredIndex === index && (
                <div className={styles.overlay}>
                  <ul>
                    {category.treatments.map((treatment, tIndex) => (
                      <div key={tIndex} className={styles.item}>
          

                        <li
                          className={`${
                            hoveredTreatment === tIndex ? styles.active : ""
                          } typography-Ag-P`}
                          onMouseEnter={() => setHoveredTreatment(tIndex)}
                          onMouseLeave={() => setHoveredTreatment(null)}
                          onClick={() => router.push(treatment.path)}
                        >
                          {treatment.name}
                          <Image
                            className={`${styles.flecha} ${
                              hoveredTreatment === tIndex ? styles.visible : ""
                            }`}
                            src="/assets/icons/flecha.svg"
                            alt="flecha"
                            width={20}
                            height={20}
                          />
                        </li>
                      </div>
                    ))}
                  </ul>
                </div>
              )}

              {/* 🔹 En mobile, el overlay con tratamientos siempre visible debajo */}
              {/* {isMobile && (
                <div className={styles.fixedOverlay}>
                  <ul>
                    {category.treatments.map((treatment, tIndex) => (
                      <div key={tIndex} className={styles.item}>
           

                        <li
                          className={`${
                            hoveredTreatment === tIndex ? styles.active : ""
                          } typography-Ag-P`}
                          onMouseEnter={() => setHoveredTreatment(tIndex)}
                          onMouseLeave={() => setHoveredTreatment(null)}
                          onClick={() => router.push(treatment.path)}
                        >
                          {treatment.name}
                          <Image
                            className={`${styles.flecha} ${
                              hoveredTreatment === tIndex ? styles.visible : ""
                            }`}
                            src="/assets/icons/flecha.svg"
                            alt="flecha"
                            width={20}
                            height={20}
                          />
                        </li>
                      </div>
                    ))}
                  </ul>
                </div>
              )} */}


{isMobile && (
  <div className={styles.fixedOverlay}>
    <ul>
      {category.treatments.map((treatment, tIndex) => (
        <div key={tIndex} className={styles.item}>
          <li
            className="typography-Ag-P"
            onClick={() => router.push(treatment.path)}
          >
            {treatment.name}
            <Image
              className={styles.flecha} // La flecha siempre visible en mobile
              src="/assets/icons/flecha.svg"
              alt="flecha"
              width={20}
              height={20}
            />
          </li>
        </div>
      ))}
    </ul>
  </div>
)}
            </AnimatedDiv>
          </div>
        ))}
      </div>
    </div>
  );
}
