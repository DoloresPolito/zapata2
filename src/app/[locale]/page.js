
"use client"
import styles from "./page.module.css";
import Header from "../../components/Header";
import initTranslations from "../i18n";
import TranslationsProvider from "@/components/TranslationsProvider";
import HomeSection from "../../sections/HomeSection";

const i18nNamespaces = ["home", "common"];

export default async function Home({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  const translations = {
    title: t("title"),
    reserva: t("reserva"),
   
    cv_text:t("cv_text"),

 
  };

  const process_translations = {

    process_title: t("process_title"),
    process_button: t("process_button"),

    process_1_title: t("process_1_title"),
    process_1_text: t("process_1_text"),

    process_2_title: t("process_2_title"),
    process_2_text: t("process_2_text"),

    process_3_title: t("process_3_title"),
    process_3_text: t("process_3_text"),

    process_4_title: t("process_4_title"),
    process_4_text: t("process_4_text"),

  }

  const dr_translations ={
    dr_title: t("dr_title"),
    dr_text1: t("dr_text1"),
    dr_text2: t("dr_text2"),
    dr_button: t("dr_button"),

  }




  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={i18nNamespaces}
    >
      <div className={styles.main}>
        <Header locale={locale} />

  

        <HomeSection translations={translations} process_translations={process_translations} dr_translations={dr_translations}/>


      </div>
    </TranslationsProvider>
  );
}
