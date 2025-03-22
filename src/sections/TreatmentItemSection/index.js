"use client";
import { useParams } from "next/navigation";
import dataes from "../../locales/es.json";
import dataen from "../../locales/en.json";
import styles from "./style.module.scss";
import Link from "next/link";

export default function TreatmentItemSection({ locale }) {
  const { tratamiento } = useParams(); // <-- El parámetro se llama "tratamiento"

  const data = locale === "es" ? dataes : dataen;

  function buscarTratamiento(data, nombreTratamiento) {
    for (const key in data) {
      if (data[key].treatments) {
        const tratamiento = data[key].treatments.find(
          (t) => t.id.toLowerCase() === nombreTratamiento.toLowerCase()
          // ||
          // t.name2.toLowerCase() === nombreTratamiento.toLowerCase()
        );
        if (tratamiento) return tratamiento;
      }
    }
    return null; // Si no se encuentra el tratamiento
  }

  // Ejemplo de uso
  const tratamientoEncontrado = buscarTratamiento(data.treatments, tratamiento); // Cambia "Nariz" por cualquier otro nombre
  console.log(tratamientoEncontrado);

  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.infocontainer}>
            <Link href="/tratamientos">
      
            <div className={styles.button}><p className={`typography-Ag-P`}>Todos los tratamientos</p></div>
            </Link>
          <div className={styles.titlecontainer}>
            <h1 className={`typography-Ag-Camino-Final-H1`}>
              {tratamientoEncontrado.name}
            </h1>
            <div className={styles.line}></div>
            <h1 className={`typography-Ag-Camino-Final-H1`}>
              {tratamientoEncontrado.name2}
            </h1>
          </div>

          <p className={`typography-Ag-P`}>
            {tratamientoEncontrado.description}
          </p>

          <div
          className={styles.imagecontainermobile}
          style={{
            backgroundImage: `url(${tratamientoEncontrado.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

          <ul className={styles.treatmentList}>
            {tratamientoEncontrado.items.map((item, index) => (
              <li key={index} className={styles.treatmentItem}>
                <strong  className={`typography-Ag-Camino-Label`}>{item.title}</strong>
                <p className={`typography-Ag-P ${styles.text}`}>{item.answer}</p>
              </li>
            ))}
          </ul>
        </div>

        <div
          className={styles.imagecontainerdesktop}
          style={{
            backgroundImage: `url(${tratamientoEncontrado.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>
    </div>
  );
}
