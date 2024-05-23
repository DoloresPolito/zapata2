'use client';
import { useForm } from 'react-hook-form';
import { sendEmail } from '@/utils/send-email';
import styles from "./style.module.css"


const Contact = () => {
  const { register, handleSubmit } = useForm();

  function onSubmit(data) {
    console.log(data)
    sendEmail(data);
  }

  return (
    <div className={styles.formcontainer}>


    <form onSubmit={handleSubmit(onSubmit)} >
      <div       className={styles.inputcontainer}>
        <label
          htmlFor='name'
          className={styles.label}
        >
          Full Name
        </label>
        <input
          type='text'
          placeholder='Full Name'
          className={styles.input}
          {...register('name', { required: true })}
        />
      </div>
      <div       className={styles.inputcontainer}>
        <label
          htmlFor='email'
          className={styles.label}
        >
          Email Address
        </label>
        <input
          type='email'
          placeholder='example@domain.com'
          className={styles.input}
          {...register('email', { required: true })}
        />
      </div>
      <div       className={styles.inputcontainer}>
        <label
          htmlFor='message'
          className={styles.label}
        >
          Message
        </label>
        <textarea
          rows={4}
          placeholder='Type your message'
          className={styles.input}
          {...register('message', { required: true })}
        ></textarea>
      </div>
      <div>
        <button className={styles.button}>
          Submit
        </button>
      </div>
    </form>
    </div>
  );
};

export default Contact;