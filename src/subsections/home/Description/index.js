import styles from "./styles.module.scss";
import ContactButtons from "@/components/ContactButtons";
import { getTranslation } from "@/utils/getTranslation";

import AnimatedDiv from "@/components/AnimatedDiv";
export default function Description({ locale }) {
  return (
    <>
      <div className={styles.description}>
        <AnimatedDiv>
          <h2 className={`typography-Ag-P-Big`}>
            {" "}
            {getTranslation(locale, "book.title")}
          </h2>
        </AnimatedDiv>
        <ContactButtons locale={locale} />
      </div>
    </>
  );
}
