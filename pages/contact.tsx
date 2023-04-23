import { useForm, ValidationError } from "@formspree/react";
import styles from "@/styles/Contact.module.scss";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("signupForm");

  if (state.succeeded) {
    return <h1>Email Sent!</h1>;
  } else if (state.submitting) {
    <h1>Submitting...</h1>;
  }

  return (
    <form className={styles.contactForm} onSubmit={handleSubmit} method="POST">
      <label htmlFor="email">Your Email Address</label>
      <input
        id="email"
        type="email"
        name="email"
        className={styles.senderForm}
        placeholder="jane.doe@example.com"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <label htmlFor="message">Your Message</label>
      <textarea id="message" name="message" placeholder="Hello, World!" />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button
        type="submit"
        className={`action-button ${styles.submit}`}
        disabled={state.submitting}
      >
        Submit
      </button>
    </form>
  );
};

export default function Contact() {
  return (
    <>
      <h1>Contact</h1>
      <div className="container-md column">
        <div className="divider"></div>
      </div>
      <div
        id={styles.container}
        className={`container-md cutoff-corners notched-left ${styles.container}`}
      >
        <ContactForm />
      </div>
    </>
  );
}
