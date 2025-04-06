"use client";
import { useForm } from "react-hook-form";
import { sendEmail } from "@/utils/send-email";
import styles from "./style.module.scss";
import LinkButton from "../LinkButton";
import { getTranslation } from "@/utils/getTranslation";

const ContactForm = ({locale}) => {
  const { register, handleSubmit } = useForm();

  function onSubmit(data) {
    sendEmail(data);
  }

  return (
    <div className={styles.formcontainer}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.inputcontainer}>
          <input
            type="text"
            placeholder=   {getTranslation(locale, "contact.name")}

            className={`typography-Ag-camino-2-P  ${styles.input}`}
            {...register("name", { required: true })}
          />
        </div>
        <div className={styles.inputcontainer}>
          <input
            type="email"
            placeholder="example@domain.com"
            className={`typography-Ag-camino-2-P  ${styles.input}`}
            {...register("email", { required: true })}
          />
        </div>
        <div className={styles.inputcontainer}>
          <textarea
            rows={4}
            placeholder={getTranslation(locale, "contact.message")}
  
            className={`typography-Ag-camino-2-P  ${styles.textarea}`}
            {...register("message", { required: true })}
          ></textarea>
        </div>
        {/* <button className={styles.button}> */}

   
        {/* <div className={styles.buttoncontainer}>
          <LinkButton text={getTranslation(locale, "contact.send")} color="black" link="/" />
        </div>
        </button> */}
        <button className={styles.button}>{getTranslation(locale, "contact.send")} </button>
      </form>
    </div>
  );
};

export default ContactForm;
