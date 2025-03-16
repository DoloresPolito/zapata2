"use client";
import { useState } from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { getTranslation } from "@/utils/getTranslation";

import cara from "../../../public/assets/home/t1.png";
import cuerpo from "../../../public/assets/home/t2.png";
import noinvasivos from "../../../public/assets/home/t3.png";



const images = {
  t1: cara,
  t2: cuerpo,
  t3: noinvasivos,
};

export default function TreatmentsCards({ locale }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [hoveredTreatment, setHoveredTreatment] = useState(null);
  const router = useRouter();

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
            <Image src={category.image} alt={category.title} />
            
    
            {hoveredIndex !== index && (
              <div className={styles.topOverlay}>
                <span className={styles.title}>{category.title}</span>
                <div className={styles.circle}>
                  <span className={styles.circlearrow}>→</span>
                </div>
              </div>
            )}

           
            {hoveredIndex === index && (
              <div className={styles.overlay}>
                <ul>
                  {category.treatments.map((treatment, tIndex) => (
                    <div key={tIndex} className={styles.item}>
                      <li
                        className={hoveredTreatment === tIndex ? styles.active : ""}
                        onMouseEnter={() => setHoveredTreatment(tIndex)}
                        onClick={() => router.push(treatment.path)}
                      >
                        {treatment.name}
                        <span className={styles.arrow}>→</span>
                      </li>
                    </div>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}


      </div>
    </div>
  );
}
