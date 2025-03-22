"use client";
import styles from "./style.module.scss";
import RoundedButton from "@/components/RoundedButton";

export default function Process({ process_translations }) {
  const boxesData = [
    {
      index: 1,
      title: process_translations.process_1_title,
      text: process_translations.process_1_text,
    },
    {
      index: 2,
      title: process_translations.process_2_title,
      text: process_translations.process_2_text,
    },
    {
      index: 3,
      title: process_translations.process_3_title,
      text: process_translations.process_3_text,
    },
    {
      index: 4,
      title: process_translations.process_4_title,
      text: process_translations.process_4_text,
    },
  ];
  return (
    <>
      <div className={styles.section}>
        <div className={styles.container}>
          <div className={styles.top}>
            <h2 className={`typography-Ag-P-Big`}>
              {process_translations.process_title}
            </h2>
          </div>

          <div className={styles.gridcontainer}>
            <div className={styles.grid}>
              {boxesData.map((box) => (
                <Box key={box.index} box={box} />
              ))}
            </div>
          </div>

          <div className={styles.bottom}>
            <RoundedButton
              text={process_translations.process_button}
              link="/proceso"
              background="transparent"
              color="black"
              border="black"
              hoverB="#BCC090"
              hoverC="black"
              hoverA="#BCC090"
            />
          </div>
        </div>
      </div>
    </>
  );
}

const Box = ({ box }) => {
  return (
    <>
      <div className={styles.box}>
        <div className={styles.top}>
          <p className={`typography-Ag-Numbers`}>{box.index}</p>
        </div>
        <div className={styles.bottom}>
          <h2 className={`typography-Ag-P ${styles.titulo}`}>{box.title}</h2>
          <p className={`typography-Ag-P ${styles.texto}`}>{box.text}</p>
        </div>
      </div>
    </>
  );
};
