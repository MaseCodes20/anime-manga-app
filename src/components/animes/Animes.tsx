import { FC } from "react";
import { useQuery } from "react-query";
import { fetchAnimes } from "../../api/anime";
import { Anime } from "../../types/animeType";
import Marquee from "react-fast-marquee";
import Card from "../Card";
import Title from "../Title";

const Animes: FC = () => {
  const { data: animes } = useQuery("animes", fetchAnimes);

  return (
    <div className="border-b-[2px] py-3">
      <Title title="Animes" />
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
