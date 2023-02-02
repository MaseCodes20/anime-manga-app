import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import { fetchAnimesByName, fetchMangasByName } from "../api/anime";
import Card from "../components/Card";
import SearchResults from "../components/search/SearchResults";
import { Anime } from "../types/animeType";
import { Manga } from "../types/mangaType";

const SearchResultsPage = () => {
  const serachTerm = useLocation().pathname.split("/")[2];

  const { data: animes, isSuccess: animeSuccess } = useQuery(
    "searchAnimes",
    () => fetchAnimesByName(serachTerm)
  );

  const { data: mangas, isSuccess: mangaSuccess } = useQuery(
    "SearchMangas",
    () => fetchMangasByName(serachTerm)
  );

  return (
    <div>
      {animeSuccess && (
        <div className="bg-white/75 shadow-md rounded-md m-5 p-5">
          <h3 className="mb-3 text-xl font-bold text-center">Animes</h3>
          <SearchResults contents={animes} />
        </div>
      )}

      {mangaSuccess && (
        <div className="bg-white/75 shadow-md rounded-md m-5 p-5">
          <h3 className="mb-3 text-xl font-bold text-center">Mangas</h3>
          <SearchResults contents={mangas} />
        </div>
      )}
    </div>
  );
};

export default SearchResultsPage;
