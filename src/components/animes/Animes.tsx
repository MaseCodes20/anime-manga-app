import { FC } from "react";
import { useQuery } from "react-query";
import { fetchAnimes } from "../../api/anime";
import { Anime } from "../../types/animeType";
import Marquee from "react-fast-marquee";
import Card from "../Card";

const Animes: FC = () => {
  const { data: animes } = useQuery("animes", fetchAnimes);

  return (
    <Marquee gradient={false} pauseOnHover={true} speed={10}>
      {animes?.data
        .sort((a: Anime, b: Anime) => a.rank - b.rank)
        .map((anime: Anime) => (
          <Card key={anime.mal_id} content={anime} />
        ))}
    </Marquee>
  );
};

export default Animes;
