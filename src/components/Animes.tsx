import { FC } from "react";
import { useQuery } from "react-query";
import { fetchAnimes } from "../api/anime";
import { Anime } from "../types/animeType";
import AnimeCard from "./AnimeCard";

const Animes: FC = () => {
  const { data: animes } = useQuery("animes", fetchAnimes);

  return (
    <div className="grid grid-cols-8 gap-3">
      {animes.data.map((anime: Anime) => (
        <AnimeCard key={anime.mal_id} anime={anime} />
      ))}
    </div>
  );
};

export default Animes;
