import styles from "./contact-form.module.css";

export default function ContactForm() {
  return (
    <form className={styles.form}>
      <div className={styles.field}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required />
      </div>

      <div className={styles.field}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />
      </div>

      <div className={styles.field}>
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows={5} required></textarea>
      </div>

      <button type="submit" className={styles.button}>
        Send Message
      </button>
    </form>
  );
}