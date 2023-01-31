import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAnimesByName } from "../api/anime";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const navigate = useNavigate();

  const submitSearchFrom = async (e: FormEvent) => {
    e.preventDefault();

    navigate(`/search/${searchTerm}`);

    // return animes;
  };
  return (
    <form onSubmit={submitSearchFrom}>
      <input
        type="text"
        name="search"
        id="search"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <input type="submit" value="search" />
    </form>
  );
};

export default SearchBar;
