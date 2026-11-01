import LoginForm from "@/components/LoginForm/LoginForm";
import RegistrationForm from "@/components/RegistrationForm/RegistrationForm";
import ImageSlideShow from "@/components/ImageSlideShow/image-slide-show";
import styles from "./account.module.css";
export default function AccountPage() {
  return (
    <div className={styles.page}>
      <section className={styles.intro}>
        <h1>Create Your Account to Join Our Community</h1>
        <p>Fill out the form below to create your account and become part of our delicious community!.</p>
      </section>
      <div className={styles.columns}>
        <section className={styles.card}>
          <h2>Join the Community(New Users)</h2>
          <RegistrationForm />
        </section>
        <section className={styles.card}>
          <h2>Already a Member?</h2>
          <LoginForm />
        </section>
      </div>
    </div>
  );
}