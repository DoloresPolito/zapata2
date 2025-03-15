import styles from "./styles.module.scss";
import ContactButtons from "@/home/ContactButtons";
import { getTranslation } from "@/utils/getTranslation";
export default function Description({locale}) {


  return (
    <>
      <div className={styles.description}>
        <h2 className={`typography-Ag-P-Big`}> {getTranslation(locale, "book.title")}</h2>
        <ContactButtons locale={locale}/>
      </div>
    </>
  );
}
