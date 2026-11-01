import ContactForm from "@/components/ContactForm/contact-form";
import styles from "./contact.module.css";
import ImageSlideShow from "@/components/ImageSlideShow/image-slide-show";
export default function ContactPage() {
  return (
    <div className={styles.page}>
      <section className={styles.intro}>
        <h1>Contact Super Noddles</h1>
        <p>
          We would love to hear from enthusiasts! Choose from the options below
          to get in touch with our team.
        </p>
      </section>

      <div className={styles.columns}>
        <section className={styles.card}>
          <h2>Send us a Message</h2>
          <ContactForm />
          <h2>Contact Information</h2>
          <p>Address: 234 Noodle Street, Sunny Side, FL 33101, Pretoria, South Africa</p>
          <p>Phone: (023) 654-1789</p>
        </section>

        <section className={styles.card}>
            <h2>Noddles Image Gallery</h2>
            <ImageSlideShow />
          <p>Email: hello@supernoddles.com</p>
          <p>Customer Support: support@supernoddles.com</p>         
        </section>
      </div>
    </div>
  );
}