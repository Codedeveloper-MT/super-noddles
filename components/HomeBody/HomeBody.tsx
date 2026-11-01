import styles from "./HomeBody.module.css";

export default function HomeBody() {
  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>
        Super Noddles for every craving and every kitchen.
      </h1>
      <p className={styles.subtitle}>
        Discover cozy recipes, connect with the community, and turn everyday
        meals into something memorable.
      </p>
    </section>
  );
}