import { FC } from "react";
import { useQuery } from "react-query";
import { fetchAnimes, fetchTopAnimes } from "../../api/anime";
import { Anime } from "../../types/animeType";
import Marquee from "react-fast-marquee";
import Card from "../Card";
import Title from "../Title";
import TopContents from "../TopContents";

const Animes: FC = () => {
  const { data: animes } = useQuery("animes", fetchAnimes);
  const { data: topAnimes } = useQuery("topAnimes", () => fetchTopAnimes(10));

  return (
    <div className="border-b-[2px] py-3">
      <Title title="Animes" />

      <TopContents contents={topAnimes} contentType="anime" />

      <Marquee gradient={false} pauseOnHover={true} speed={10}>
        {animes?.data
          .sort((a: Anime, b: Anime) => a.rank - b.rank)
          .map((anime: Anime) => (
            <Card key={anime.mal_id} content={anime} contentType="anime" />
          ))}
      </Marquee>
    </div>
  );
};

export default Animes;
