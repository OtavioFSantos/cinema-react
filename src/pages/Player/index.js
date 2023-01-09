import Banner from "components/Banner";
import Title from "components/Title";
import { useParams } from "react-router-dom";
import videos from "json/db.json";
import styles from "./Player.module.css";
import NotFound from "pages/NotFound";

export default function Player() {
  const params = useParams();
  const video = videos.find((video) => {
    return video.id === Number(params.id);
  });

  if (!video) {
    return <NotFound />;
  }

  return (
    <>
      <Banner image="player" />
      <Title>
        <h1>Watch {video.title} bellow!</h1>
      </Title>

      <section className={styles.container}>
        <iframe
          width="100%"
          height="100%"
          src={video.link}
          title={video.title}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </section>
    </>
  );
}
