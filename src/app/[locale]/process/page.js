import styles from "./style.module.scss";
import Header from "../../../components/Header";
import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/components/TranslationsProvider";
import FaqsSection from "@/sections/FaqsSection";

const i18nNamespaces = ["procedures", "common"];


export default async function Procedures({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={i18nNamespaces}
    >
      <div className={styles.main}>
        <Header />
        <h2>{t("title")}</h2>

        <p>
          {locale === "es" ? "TEXTO EN PROCEDIMIENTOS" : "TEXT IN PROCEDURES"}
        </p>
 
      
<FaqsSection/>
        <p>locale: {locale}</p>
      </div>
    </TranslationsProvider>
  );
}
