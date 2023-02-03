import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import { fetchAnimesByName, fetchMangasByName } from "../api/anime";
import SearchResults from "../components/search/SearchResults";

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
      {animeSuccess && <SearchResults contents={animes} title="Animes" />}

      {mangaSuccess && <SearchResults contents={mangas} title="Mangas" />}
    </div>
  );
};

export default SearchResultsPage;
