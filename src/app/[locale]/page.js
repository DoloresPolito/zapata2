import styles from "./page.module.css";
import Header from "../../components/Header";
import initTranslations from "../i18n";
import TranslationsProvider from "@/components/TranslationsProvider";
import HomeSection from "../../sections/HomeSection";
import LayeredSections from "@/sections/LayeredSections";
const i18nNamespaces = ["home", "common"];

export default async function Home({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  const translations = {
    title: t("title"),
    reserva: t("reserva"),
    dr_title: t("dr_title"),
    dr_text1: t("dr_text1"),
    dr_text2: t("dr_text2"),
    cv_text:t("cv_text"),

 
  };

  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={i18nNamespaces}
    >
      <div className={styles.main}>
        <Header locale={locale} />

        <HomeSection translations={translations} />
        {/* <LayeredSections/> */}
      </div>
    </TranslationsProvider>
  );
}
