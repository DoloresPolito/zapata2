"use client";
import React from "react";
import styles from "./styles.module.scss";

import Process from "../Process";
import Clinic from "../Clinic";

export default function SectionEffectTop({process_translations}) {
  return (
    <>
      <div className={styles.section}>
        <Clinic />
        <Process process_translations={process_translations} /> 
      </div>
    </>
  );
}