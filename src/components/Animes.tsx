import { FC } from "react";
import { useQuery } from "react-query";
import { fetchAnimes } from "../api/anime";
import { Anime } from "../types/animeType";
import AnimeCard from "./AnimeCard";

const Animes: FC = () => {
  const { data: animes } = useQuery("animes", fetchAnimes);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 m-3">
      {animes?.data
        .sort((a: Anime, b: Anime) => a.rank - b.rank)
        .map((anime: Anime) => (
          <AnimeCard key={anime.mal_id} anime={anime} />
        ))}
    </div>
  );
};

export default Animes;
