import Header from "../../../structure/Header";
import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/components/TranslationsProvider";
import DrSection from "@/sections/DrSection";
import Footer from "@/structure/Footer";

const i18nNamespaces = ["procedures", "common"];

export default async function Procedures({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <>
      <TranslationsProvider
        resources={resources}
        locale={locale}
        namespaces={i18nNamespaces}
      >
        <Header locale={locale} />

        <DrSection locale={locale} />
        <Footer/>
      </TranslationsProvider>
    </>
  );
}