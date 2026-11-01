import PasswordForm from "@/components/PasswordForm/PasswordForm";
import ImageSlideShow from "@/components/ImageSlideShow/image-slide-show";
import styles from "./forgot-password.module.css";

export default function ForgetPasswordPage() {
  return (
    <div className={styles.page}>
      <section className={styles.intro}>
        <p>Forgot your password? No worries! Just enter your email address below, and we'll send you a link to reset it. Check your inbox and follow the instructions to regain access to your account.</p>
      </section>
      <div className={styles.content}>
        <div className={styles.slide}>
          <ImageSlideShow />
        </div>
        <div className={styles.form}>
          <PasswordForm />
        </div>
      </div>
    </div>
  );
}