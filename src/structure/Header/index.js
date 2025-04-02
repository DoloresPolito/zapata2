"use client";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();
  
  const [isActive, setIsActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showLanguageChanger, setShowLanguageChanger] = useState(true);
  const [isFullWidth, setIsFullWidth] = useState(false);
  const [logo, setLogo] = useState(null);
  const [hydrated, setHydrated] = useState(false); // Para evitar el parpadeo

  useEffect(() => {
    const handleResize = () => {
      const isSmallScreen = window.innerWidth < 800;
      setIsMobile(isSmallScreen);
      setShowLanguageChanger(!isSmallScreen);
      setIsFullWidth(!isSmallScreen);
      setLogo(isSmallScreen ? logomobile : logo1);
    };

    handleResize(); // Ejecutar una vez al montar
    setHydrated(true); // Marcar que ya se actualizó la pantalla

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Si aún no se determinó el tamaño, no renderizar nada
  if (!hydrated) return null;

  return (
    <div className={styles.header}>
      <div className={styles.container}>
        {showLanguageChanger && <LanguageChanger />}

        <div className={styles.logo}>
          <Link href="/">
            {logo && <Image src={logo} alt="logo" priority />}
          </Link>
        </div>

        <div className={styles.headerButtonContainerMobile}>
          <button
            onClick={() => setIsActive(!isActive)}
            className={`${styles.button}`}
          >
            <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
          </button>
        </div>

        <AnimatePresence mode="wait">
          {isActive && <Mask locale={locale} />}
        </AnimatePresence>
      </div>
    </div>
  );
}