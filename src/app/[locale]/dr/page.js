import styles from "./style.module.scss";
import Header from "../../../structure/Header";
import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/components/TranslationsProvider";


const i18nNamespaces = ["about", "common"];

export default async function About({ params: { locale } }) {
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
        <h3>{t("subtitle")}</h3>

      </div>
    </TranslationsProvider>
  );
}
