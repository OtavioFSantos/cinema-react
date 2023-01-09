import styles from "./NotFound.module.css";

export default function NotFound() {
  return (
    <section className={styles.container}>
      <h2>Ops!</h2>
      <p>The content you seek is not here.</p>
    </section>
  );
}
