import { FC } from "react";
import { useQuery } from "react-query";
import { fetchAnimes } from "../api/anime";
import { Anime } from "../types/animeType";
import AnimeCard from "./AnimeCard";
import Marquee from "react-fast-marquee";

const Animes: FC = () => {
  const { data: animes } = useQuery("animes", fetchAnimes);

  return (
    <Marquee gradient={false} pauseOnHover={true}>
      {animes?.data
        .sort((a: Anime, b: Anime) => a.rank - b.rank)
        .map((anime: Anime) => (
          <AnimeCard key={anime.mal_id} anime={anime} />
        ))}
    </Marquee>
  );
};

export default Animes;
