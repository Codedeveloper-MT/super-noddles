import Link from "next/link";
import styles from "./RegistrationForm.module.css";

export default function RegistrationForm() {
  return (
    <div className={styles.registrationForm}>
      <h2 className={styles.title}>Create your account</h2>

      <form className={styles.form}>
        <div className={styles.row}>
          <div className={styles.field}>
            <label htmlFor="reg-name">Name</label>
            <input type="text" id="reg-name" name="name" required />
          </div>

          <div className={styles.field}>
            <label htmlFor="reg-surname">Surname</label>
            <input type="text" id="reg-surname" name="surname" required />
          </div>
        </div>

        <div className={styles.field}>
          <label htmlFor="reg-username">Username</label>
          <input type="text" id="reg-username" name="username" required />
        </div>

        <div className={styles.field}>
          <label htmlFor="reg-email">Email Address</label>
          <input type="email" id="reg-email" name="email" required />
        </div>

        <div className={styles.field}>
          <label htmlFor="reg-password">New Password</label>
          <input type="password" id="reg-password" name="password" required />
        </div>
        <div className={styles.field}>
          <label htmlFor="reg-confirm-password">Confirm Password</label>
          <input type="password" id="reg-confirm-password" name="confirmPassword" required />
        </div>
        <button type="submit" className={styles.button}>
          Register Your Account
        </button>
      </form>
    </div>
  );
}