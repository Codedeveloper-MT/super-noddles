import Link from "next/link";
import styles from "./PasswordForm.module.css";

export default function PasswordForm() {
  return (
    <div className={styles.passwordForm}>
      <h2 className={styles.title}>Reset your password</h2>

      <form className={styles.form}>
        <div className={styles.field}>
          <label htmlFor="pw-email">Email Address</label>
          <input type="email" id="pw-email" name="email" required />
        </div>

        <div className={styles.field}>
          <label htmlFor="pw-password">New Password</label>
          <input
            type="password"
            id="pw-password"
            name="password"
            minLength={8}
            required
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="pw-confirm">Confirm Password</label>
          <input
            type="password"
            id="pw-confirm"
            name="confirm_password"
            minLength={8}
            required
          />
        </div>

        <button type="submit" className={styles.button}>
          My New Password
        </button>
      </form>

      <p className={styles.links}>
        Remembered it? <Link href="/account">Back to login</Link>
      </p>
    </div>
  );
}