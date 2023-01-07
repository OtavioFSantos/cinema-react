import styles from "./Card.module.css";
import like from "./like.png";

export default function Card({ id, title, image }) {
  return (
    <div className={styles.container}>
      <img src={image} alt={title} className={styles.image} />
      <h2>{title}</h2>
      <img src={like} alt="Like movie" className={styles.like} />
    </div>
  );
}
