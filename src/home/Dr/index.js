"use client";
import styles from "./style.module.scss";
import dr from "../../../public/assets/home/dr-home.png";
import Image from "next/image";
import AnimatedDiv from "@/components/AnimatedDiv";
export default function Dr({ dr_translations }) {
  return (
    <>
      <div className={styles.section}>
        <div className={styles.container}>
          <Image src={dr} alt="dr" />

          <AnimatedDiv>
            <h2 className={`typography-Ag-P-Big`}>
              {dr_translations.dr_text1}
            </h2>
          </AnimatedDiv>
        </div>
      </div>
    </>
  );
}
