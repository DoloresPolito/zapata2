import styles from "../style.module.scss";
import Header from "../../../../structure/Header";
import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/components/TranslationsProvider";
import Footer from "@/structure/Footer";

const i18nNamespaces = ["procedures", "common"];

import TreatmentItemSection from "@/sections/TreatmentItemSection";

export default async function Treatment({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={i18nNamespaces}
    >
      <div className={styles.main}>
        <Header />

        <TreatmentItemSection locale={locale} />
        <Footer />
      </div>
    </TranslationsProvider>
  );
}
