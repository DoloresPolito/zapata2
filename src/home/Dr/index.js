"use client";
import styles from "./style.module.scss";
import LinkButton from "@/components/LinkButton";
import dr from "../../../public/assets/images/dr.png";
import Image

from "next/image";
export default function Dr({ dr_translations }) {
return(<>
      <div className={styles.dr}>
        <div className={styles.container}>
          <div className={styles.title}>
            <h2>{dr_translations.dr_title}</h2>
          </div>
          <div className={styles.containerrowdr}>
            <div className={styles.imagecontainer}>
              <Image src={dr} alt="dr" />
            </div>

            <div className={styles.textcontainer}>
              <p>{dr_translations.dr_text1}</p>
              <p>{dr_translations.dr_text2}</p>
              <LinkButton text={dr_translations.dr_button}link="/" color="black"/>
            </div>
          </div>
        </div>
      </div>

</>)
}