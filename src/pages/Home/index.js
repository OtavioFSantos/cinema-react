import Banner from "components/Banner";
import Title from "components/Title";
import Card from "components/Card";
import videos from "json/db.json";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <>
      <Banner image="home" />
      <Title>
        <h1>Select the movies you would like to watch!</h1>
      </Title>
      <section className={styles.container}>
        {videos.map((video) => {
          return <Card {...video} key={video.id} />;
        })}
      </section>
    </>
  );
}
