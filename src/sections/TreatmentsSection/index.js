"use client";
import styles from "./style.module.scss";

import Treatments from "../../subsections/home/Treatments";

export default function TreatmentsSection({ translations }) {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <h4>
          Nuestro equipo especializado ofrece una amplia gama de tratamientos de
          cirugía plástica diseñados para mejorar su bienestar y confianza. Cada
          procedimiento es cuidadosamente personalizado para cumplir con sus
          expectativas, utilizando las técnicas más avanzadas y seguras
          disponibles en el campo.
        </h4>
        <Treatments />
      </div>
    </div>
  );
}
