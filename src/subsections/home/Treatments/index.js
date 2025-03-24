"use client";

import styles from "./style.module.scss";

import TreatmentsCards from "@/components/TreatmentsCards";


export default function Treatments({locale}) {
  return (
    <div className={styles.tratamientos}>
      <h2 className={`typography-Ag-Camino-Final-H1`}>Tratamientos</h2>
      <div className={styles.container}>
        <TreatmentsCards locale={locale}/>
      </div>
    </div>
  );
}
