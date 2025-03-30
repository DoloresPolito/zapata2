"use client";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { usePathname } from "next/navigation"; // Importar para obtener la URL
import styles from "./style.module.scss";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import Mask from "./Nav";
import LanguageChanger from "../../components/LanguageChanger";
import logo1 from "../../../public/assets/logo/logosvgchico.svg";
import logomobile from "../../../public/assets/logo/logomobile.svg";
import Image from "next/image";

export default function Index({ locale }) {
  const { t, i18n } = useTranslation("common");
  const pathname = usePathname(); // Obtener la URL actual
  const [isActive, setIsActive] = useState(false);
  const [showLanguageChanger, setShowLanguageChanger] = useState(true);
  const [isFullWidth, setIsFullWidth] = useState(false);
  const [logo, setLogo] = useState(logo1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isSmallScreen = window.innerWidth < 800;
      setShowLanguageChanger(!isSmallScreen);
      setIsFullWidth(!isSmallScreen);
      setIsMobile(isSmallScreen); // Guardar si la pantalla es menor a 800px
      setLogo(isSmallScreen ? logomobile : logo1);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className={styles.header}>
        <div className={styles.container}>
          {showLanguageChanger && <LanguageChanger />}

          {/* No renderizar el logo si estamos en "/" y es mobile */}
          {!isMobile || pathname !== "/" ? (
            <div className={styles.logo}>
              <Link href="/">
                <Image src={logo} alt="logo" priority />
              </Link>
            </div>
          ) :       <div className={styles.logo}>
         
        </div>}

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
            {isActive && <Mask locale={locale} />}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}