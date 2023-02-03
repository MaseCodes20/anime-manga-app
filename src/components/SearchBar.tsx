import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const navigate = useNavigate();

  const submitSearchFrom = async (e: FormEvent) => {
    e.preventDefault();

    navigate(`/search/${searchTerm}`);
  };

  return (
    <form onSubmit={submitSearchFrom} className="flex items-center">
      <input
        type="text"
        name="search"
        id="search"
        onChange={(e) => setSearchTerm(e.target.value)}
        className="md:w-[600px] h-[30px] text-black pl-3 pb-[2px] mr-3 w-full border-[1px] rounded-full border-gray-500 hover:border-black focus:ring-0 focus:outline-none focus:border-b focus:border-black"
      />
      <button
        type="submit"
        className="border-[1px] rounded-full text-black border-gray-500 hover:border-black hover:bg-green-500 hover:text-white font-semibold bg-white px-3 py-[2px]"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
