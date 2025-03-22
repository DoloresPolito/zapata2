import React, { useState } from "react";
import styles from "./style.module.scss";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { menuSlide, slide } from "../animation";
import StyledLink from "../../../components/StyledLink";
import { useTranslation } from "react-i18next";
// import LanguageChanger from "@/components/LanguageChanger";

export default function Mask() {
  const { t, i18n } = useTranslation("common");

  // const locale = i18n.language;

  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <>
      <motion.div
        variants={menuSlide}
        initial="initial"
        animate="enter"
        exit="exit"
        className={styles.menu}
      >
        <div className={styles.body}>
          <div
            onMouseLeave={() => {
              setSelectedIndicator(pathname);
            }}
            className={styles.nav}
          >
     
            <motion.div
              variants={slide}
              animate="enter"
              exit="exit"
              initial="initial"
              className={styles.link}
            >
              <StyledLink link="/">
                <p className={styles.text}>{t("common:nav_home")}</p>
              </StyledLink>
            </motion.div>

            <motion.div
              variants={slide}
              animate="enter"
              exit="exit"
              initial="initial"
              className={styles.link}
            >
              <StyledLink link="/dr">
                <p className={styles.text}>{t("common:nav_dr")}</p>
              </StyledLink>
            </motion.div>
            <motion.div
              variants={slide}
              animate="enter"
              exit="exit"
              initial="initial"
              className={styles.link}
            >
              <StyledLink link="/proceso">
                <p className={styles.text}>{t("common:nav_process")}</p>
              </StyledLink>
            </motion.div>
            <motion.div
              variants={slide}
              animate="enter"
              exit="exit"
              initial="initial"
              className={styles.link}
            >
              <StyledLink link="/international">
                <p className={styles.text}>{t("common:nav_internacional")}</p>
              </StyledLink>
            </motion.div>
            <motion.div
              variants={slide}
              animate="enter"
              exit="exit"
              initial="initial"
              className={styles.link}
            >
              <StyledLink link="/tratamientos">
                <p className={styles.text}>{t("common:nav_tratamientos")}</p>
              </StyledLink>
            </motion.div>

            <motion.div
              variants={slide}
              animate="enter"
              exit="exit"
              initial="initial"
              className={styles.link}
            >
              <StyledLink link="/contacto">
                <p className={styles.text}>{t("common:nav_contacto")}</p>
              </StyledLink>
            </motion.div>
          </div>
          <div className={styles.column2}>
            <div className={styles.header}>
              <p>Contactanos</p>
            </div>
            <div className={styles.info}>
            <p>WhatsApp: +54 9 11 4807 4040</p>
            <p>Instagram</p>
            <p>Tel: 011 4562 9283</p>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
