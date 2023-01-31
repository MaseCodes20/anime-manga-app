import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import { fetchAnimeById } from "../api/anime";
import ContentCard from "../components/ContentCard";
import { Anime } from "../types/animeType";

const AnimePage = () => {
  const animeId = useLocation().pathname.split("/")[2];

  const { data: anime, isSuccess } = useQuery("anime", () =>
    fetchAnimeById(animeId)
  );

  return (
    <div className="flex items-center justify-center h-[calc(100vh-35px)]">
      {isSuccess && <ContentCard content={anime} />}
    </div>
  );
};

export default AnimePage;
