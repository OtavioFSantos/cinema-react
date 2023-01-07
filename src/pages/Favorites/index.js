import Banner from "components/Banner";
import Title from "components/Title";
import styles from "./Favorites.module.css";

export default function Favorites() {
  return (
    <>
      <Banner image="favorites" />
      <Title>
        <h1>These are the movies you liked!</h1>
      </Title>
      <section className={styles.container}></section>
    </>
  );
}
