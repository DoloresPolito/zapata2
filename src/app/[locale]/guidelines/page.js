import styles from "./styles.module.scss";
import Header from "../../../structure/Header";
import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/components/TranslationsProvider";
import GuidelinesSection from "@/sections/GuidelinesSection";
import Footer from "@/structure/Footer";

const i18nNamespaces = ["procedures", "common"];

export default async function Guidelines({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <>
      <TranslationsProvider
        resources={resources}
        locale={locale}
        namespaces={i18nNamespaces}
      >
        <Header locale={locale} />

        <GuidelinesSection locale={locale} />
        <Footer locale={locale}/>
      </TranslationsProvider>
    </>
  );
}