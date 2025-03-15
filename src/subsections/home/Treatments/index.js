"use client";
import { useState } from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import { useRouter } from "next/navigation"; // Importar el router para la navegación

import cara from "../../../../public/assets/home/t1.png";
import cuerpo from "../../../../public/assets/home/t2.png";
import noinvasivos from "../../../../public/assets/home/t3.png";

const treatmentsData = [
  {
    title: "Cara",
    image: cara,
    treatments: [
      { name: "Bótox", path: "/tratamientos/botox" },
      { name: "Ácido hialurónico", path: "/tratamientos/acido-hialuronico" },
      { name: "Lifting facial", path: "/tratamientos/lifting-facial" },
    ],
  },
  {
    title: "Cuerpo",
    image: cuerpo,
    treatments: [
      { name: "Liposucción", path: "/tratamientos/liposuccion" },
      { name: "Abdominoplastia", path: "/tratamientos/abdominoplastia" },
      { name: "Gluteoplastia", path: "/tratamientos/gluteoplastia" },
    ],
  },
  {
    title: "No Invasivos",
    image: noinvasivos,
    treatments: [
      { name: "Radiofrecuencia", path: "/tratamientos/radiofrecuencia" },
      { name: "Criolipólisis", path: "/tratamientos/criolipolisis" },
    ],
  },
];

export default function Treatments() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [hoveredTreatment, setHoveredTreatment] = useState(null);
  const router = useRouter();

  return (
    <div className={styles.tratamientos}>
      <h1>Tratamientos</h1>
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

            {/* Div Overlay al hacer hover */}
            {hoveredIndex === index && (
              <div className={styles.overlay}>
                <ul>
                  {category.treatments.map((treatment, tIndex) => (
                    <div    key={tIndex} className={styles.item}>
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
