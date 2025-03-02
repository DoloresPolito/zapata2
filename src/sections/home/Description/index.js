import styles from "./styles.module.scss";
import ContactButtons from "@/home/ContactButtons";
export default function Description() {
  return (
    <>
      <div className={styles.description}>
        <h2>Solicitar turnos o consultas</h2>
        <ContactButtons />
      </div>
    </>
  );
}
