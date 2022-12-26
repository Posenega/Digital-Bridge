import { useRef } from "react";
import CustomInput from "../custom/input/CustomInput";
import styles from "./ContactForm.module.scss";
import emailjs from "@emailjs/browser";
import CustomButton from "../custom/button/CustomButton";

export default function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1426o8k",
        "template_i6qq9da",
        form.current,
        "C4B0k8IkMTplnvTQw"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className={styles.main__container}>
      <h1>
        Love to hear from you,
        <br />
        Get in touch <span>👋</span>
      </h1>
      <form className={styles.main__form} ref={form} onSubmit={sendEmail}>
        <div className={styles.upper__form}>
          <div className={styles.first__column}>
            <div className={styles.first}>
              <CustomInput
                type="text"
                placeholder="Enter your full name"
                name="user_name"
                hintText="Your name"
              />
            </div>
            <div className={styles.second}>
              <CustomInput
                type="text"
                placeholder="What are you intrested in"
                name="user_intrest"
                hintText="Your intrest"
              />
            </div>
          </div>
          <div className={styles.second__column}>
            <div className={styles.first}>
              <CustomInput
                type="email"
                placeholder="Enter Email"
                name="user_email"
                hintText="Your email"
              />
            </div>
            <div className={styles.second}>
              <CustomInput
                type="number"
                placeholder="Select your budget"
                name="user_budget"
                hintText="Your budget"
              />
            </div>
          </div>
        </div>
        <div className={styles.lower__form}>
          <span className={styles.hint__text}>Message</span>
          <textarea
            className={styles.message}
            placeholder="Enter your message"
            name="user_message"
          />
        </div>
        <CustomButton />
      </form>
    </div>
  );
}
