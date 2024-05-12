
import styles from "./page.module.css";
import Header from "../../components/Header";
import initTranslations from "../i18n";
import TranslationsProvider from "@/components/TranslationsProvider";
const i18nNamespaces = ['home', 'common']

export default async function Home({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);
  return (
    <TranslationsProvider resources={resources} locale={locale} namespaces={i18nNamespaces}>
      <div className={styles.main}>
        <Header />
        <h2>{t("title")}</h2>
  
 
      </div>
    </TranslationsProvider>
  );
}
