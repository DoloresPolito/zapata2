"use client";
import { useForm } from "react-hook-form";
import { sendEmail } from "@/utils/send-email";
import styles from "./style.module.scss";
import LinkButton from "../LinkButton";

const ContactForm = () => {
  const { register, handleSubmit } = useForm();

  function onSubmit(data) {
    console.log(data);
    sendEmail(data);
  }

  return (
    <div className={styles.formcontainer}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.inputcontainer}>
          <input
            type="text"
            placeholder="Full Name"
            className={styles.input}
            {...register("name", { required: true })}
          />
        </div>
        <div className={styles.inputcontainer}>
          <input
            type="email"
            placeholder="example@domain.com"
            className={styles.input}
            {...register("email", { required: true })}
          />
        </div>
        <div className={styles.inputcontainer}>
          <textarea
            rows={4}
            placeholder="Type your message"
            className={styles.input}
            {...register("message", { required: true })}
          ></textarea>
        </div>
        <div>
          <LinkButton text="enviar" color="white" link="/" />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
