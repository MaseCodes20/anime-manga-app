import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import { fetchAnimesByName } from "../api/anime";
import Card from "../components/Card";
import { Anime } from "../types/animeType";
import { Manga } from "../types/mangaType";

const SearchResultsPage = () => {
  const serachTerm = useLocation().pathname.split("/")[2];

  const { data: contents, isSuccess } = useQuery("searchResults", () =>
    fetchAnimesByName(serachTerm)
  );
  return (
    <div className="grid grid-cols-4 gap-3">
      {isSuccess &&
        contents.map((content: Anime | Manga) => {
          const contentType = content?.type !== "Manga" ? "anime" : "manga";
          return (
            <Card
              key={content.mal_id}
              content={content}
              contentType={contentType}
            />
          );
        })}
    </div>
  );
};

export default SearchResultsPage;
