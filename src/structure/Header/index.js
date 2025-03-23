"use client";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import styles from "./style.module.scss";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import Mask from "./Nav";
import LanguageChanger from "../../components/LanguageChanger";
import logo from "../../../public/assets/logo/logo.png";
import Image from "next/image";

export default function Index({ locale }) {
  const { t, i18n } = useTranslation("common");
  const [isActive, setIsActive] = useState(false);
  const [showLanguageChanger, setShowLanguageChanger] = useState(true);
  const [isFullWidth, setIsFullWidth] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setShowLanguageChanger(window.innerWidth >= 800);
      setIsFullWidth(window.innerWidth >= 800);
    };

    handleResize(); // Ejecutar al montar el componente
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className={styles.header}>
        <div className={styles.container}>
          {showLanguageChanger && <LanguageChanger />}

          <div className={styles.logo}>
            <Link href="/">
              <Image src={logo} alt="logo" />
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
          <AnimatePresence mode="wait">
            {isActive && <Mask locale={locale} 
        
            />}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}