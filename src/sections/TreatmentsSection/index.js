"use client";
import styles from "./style.module.scss";

import TreatmentsCards from "@/components/TreatmentsCards";
import { getTranslation } from "@/utils/getTranslation";
import AnimatedDiv from "@/components/AnimatedDiv";

export default function TreatmentsSection({ locale }) {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <AnimatedDiv>
          <h2 className={`typography-Ag-Camino-Final-H1`}>
            {" "}
            {getTranslation(locale, "treatments.title")}
          </h2>{" "}
        </AnimatedDiv>
        <AnimatedDiv delay={0.3}>
          {" "}
          <p className={`typography-Ag-P`}>
            {getTranslation(locale, "treatments.subtitle")}
          </p>{" "}
        </AnimatedDiv>
        <TreatmentsCards locale={locale} />
      </div>
    </div>
  );
}
