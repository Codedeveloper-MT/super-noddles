import Link from "next/link";
import styles from "./LoginForm.module.css";
import ImageSlideShow from "@/components/ImageSlideShow/image-slide-show";
export default function LoginForm() {
  return (
    <div className={styles.loginForm}>
      <h2 className={styles.title}>Welcome back</h2>
      <div className={styles.slide}>
        <ImageSlideShow />
      </div>
      

      <form className={styles.form}>
        <div className={styles.field}>
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" name="email" required />
        </div>

        <div className={styles.field}>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>
       <p className={styles.links}>
        <Link href="/account/forgot-password">Forgot password?</Link>
      </p>
        <button type="submit" className={styles.button}>
          Login
        </button>
      </form>
    </div>
  );
}