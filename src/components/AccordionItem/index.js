import React from "react";
import up from "../../../public/assets/up.png";
import down from "../../../public/assets/down.png";
import styles from "./styles.module.scss"

export const AccordionItem = ({
  handleToggle,
  active,
  header,
  id,
  content,
}) => {
  return (
    <div className={styles.card} >
      <div 
      onClick={() => handleToggle(id)} 
      className={styles.header}>
        {header}

        <img src={active === id ? up : down} alt="+" />
      </div>
      <div className={`${styles.content} ${active === id ? styles.show : ""}`}>{content}</div>
    </div>
  );
};



export default AccordionItem;
