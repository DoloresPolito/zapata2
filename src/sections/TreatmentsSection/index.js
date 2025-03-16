"use client";
import styles from "./style.module.scss";

import TreatmentsCards from "@/components/TreatmentsCards";
import { getTranslation } from "@/utils/getTranslation";

export default function TreatmentsSection({locale}) {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
           <h2 className={`typography-Ag-Camino-Final-H1`}>  {getTranslation(locale, "treatments.title")}</h2>
        <p className={`typography-Ag-P`}>
        {getTranslation(locale, "treatments.subtitle")}
        </p>
        <TreatmentsCards locale={locale}/>
      </div>
    </div>
  );
}
