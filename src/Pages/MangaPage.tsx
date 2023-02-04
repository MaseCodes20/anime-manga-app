import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import { fetchMangaById } from "../api/anime";
import ContentCard from "../components/ContentCard";

const MangaPage = () => {
  const mangaId = useLocation().pathname.split("/")[2];

  const { data: manga, isSuccess } = useQuery("manga", () =>
    fetchMangaById(mangaId)
  );

  return (
    <div className="flex items-center justify-center md:h-[calc(100vh-35px)]">
      {isSuccess && <ContentCard content={manga} />}
    </div>
  );
};

export default MangaPage;
