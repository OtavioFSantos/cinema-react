import { useFavoriteContext } from "Context/Favorites";
import styles from "./Card.module.css";
import like from "./like.png";
import dislike from "./dislike.png";

export default function Card({ id, title, image }) {
  const { favorite, addFavorite } = useFavoriteContext();
  const isFavorite = favorite.some((fav) => fav.id === id);
  const icon = isFavorite ? dislike : like;

  return (
    <div className={styles.container}>
      <img src={image} alt={title} className={styles.image} />
      <h2>{title}</h2>
      <img
        src={icon}
        alt="Like movie"
        className={styles.like}
        onClick={() => {
          addFavorite({ id, title, image });
        }}
      />
    </div>
  );
}
