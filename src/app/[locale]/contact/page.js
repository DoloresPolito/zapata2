import styles from "./style.module.scss";
import Header from "../../../structure/Header";
import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/components/TranslationsProvider";
import { getTranslation } from "@/utils/getTranslation";

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
        <div style={{ marginTop: "20vh" }}>
          <h1>{getTranslation(locale, "contact.title")}</h1>
          <p>{getTranslation(locale, "contact.subtitle")}</p>
          <form>
            <label>{getTranslation(locale, "contact.name")}</label>
            <input type="text" />

            <label>{getTranslation(locale, "contact.email")}</label>
            <input type="email" />

            <label>{getTranslation(locale, "contact.message")}</label>
            <textarea />

            <button>{getTranslation(locale, "contact.send")}</button>
          </form>
        </div>
      </TranslationsProvider>
    </>
  );
}
