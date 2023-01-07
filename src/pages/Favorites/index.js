import Banner from "components/Banner";
import Title from "components/Title";
import Card from "components/Card";
import { useFavoriteContext } from "Context/Favorites";
import styles from "./Favorites.module.css";

export default function Favorites() {
  const { favorite } = useFavoriteContext();
  return (
    <>
      <Banner image="favorites" />
      <Title>
        <h1>These are the movies you liked!</h1>
      </Title>
      <section className={styles.container}>
        {favorite.map((fav) => {
          return <Card {...fav} key={fav.id} />;
        })}
      </section>
    </>
  );
}
