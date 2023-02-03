import NavBar from "./NavBar";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <header className="sticky h-[35px] flex items-center justify-between bg-slate-200">
      <NavBar />
      <SearchBar />
    </header>
  );
};

export default Header;
