"use client";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./style.module.scss";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import Mask from "./Nav";
import LanguageChanger from "../LanguageChanger";

export default function Index() {
  const { t, i18n } = useTranslation("common");
  // const locale = i18n.language;
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div className={styles.header}>
        <div className={styles.container}>

        <LanguageChanger />
     
          <div className={styles.logo}>
            <Link href="/">
              <div className={styles.name}>Dr. Federico Zapata</div>
            </Link>
          </div>

          <div className={styles.logo}>
            <Link href="/">
             
            </Link>
          </div>

          <div className={styles.headerButtonContainerMobile}>
            <button
              onClick={() => {
                setIsActive(!isActive);
              }}
              className={`${styles.button}`}
            >
              <div
                className={`${styles.burger} ${
                  isActive ? styles.burgerActive : ""
                }`}
              ></div>
            </button>
          </div>
          <AnimatePresence mode="wait">{isActive && <Mask />}</AnimatePresence>
        </div>
      </div>
    </>
  );
}
