
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
    subtitle: t("subtitle"),
    text1: t("text1"),
    // Añade otras traducciones necesarias aquí
  };


 

  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={i18nNamespaces}
    >
      <div className={styles.main}>
        <Header locale={locale}  />
    
        <HomeSection translations={translations}/>
      </div>
    </TranslationsProvider>
  );
}
