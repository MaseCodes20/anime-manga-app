import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import { fetchAnimesByName, fetchMangasByName } from "../api/anime";
import SearchResults from "../components/search/SearchResults";

const SearchResultsPage = () => {
  const searchTerm = useLocation().pathname.split("/")[2];

  const { data: animes, isSuccess: animeSuccess } = useQuery(
    `searchAnimes${searchTerm}`,
    () => fetchAnimesByName(searchTerm)
  );

  const { data: mangas, isSuccess: mangaSuccess } = useQuery(
    `SearchMangas${searchTerm}`,
    () => fetchMangasByName(searchTerm)
  );

  return (
    <div>
      {animeSuccess && (
        <SearchResults
          contents={animes}
          title="Animes"
          searchTerm={searchTerm}
        />
      )}

      {mangaSuccess && (
        <SearchResults
          contents={mangas}
          title="Mangas"
          searchTerm={searchTerm}
        />
      )}
    </div>
  );
};

export default SearchResultsPage;
