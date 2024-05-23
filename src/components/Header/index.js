"use client"

import { useTranslation } from "react-i18next";
import styles from "./style.module.css";
import Link from "next/link";
import LanguageChanger from "@/components/LanguageChanger";

export default function Index() {

const {t} = useTranslation('common');
  return (
    <div className={styles.section}>
        <div className={styles.container}>

            <Link href="/"><p className={styles.text}>{t('common:nav_home')}</p></Link>
            <Link href="/about"><p className={styles.text}>{t('common:nav_about')}</p></Link>
            <Link href="/procedures"><p className={styles.text}>{t('common:nav_procedures')}</p></Link>
            <Link href="/space"><p className={styles.text}>{t('common:nav_space')}</p></Link>
            <Link href="/testimonials"><p className={styles.text}>{t('common:nav_testimonials')}</p></Link>
            <Link href="/contact"><p className={styles.text}>{t('common:nav_contact')}</p></Link>
            <LanguageChanger/>
        </div>
      
    </div>
  );
}
