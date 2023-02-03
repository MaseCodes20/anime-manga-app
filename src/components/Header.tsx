import { useEffect, useState } from "react";
import DarkModeButton from "./DarkModeButton";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";

const Header = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <header
      className={`sticky top-0 h-[35px] z-50 flex items-center justify-between px-5 ${
        theme === "light" ? "bg-white" : "bg-black"
      }`}
    >
      <NavBar />
      <SearchBar />
      <DarkModeButton theme={theme} setTheme={setTheme} />
    </header>
  );
};

export default Header;
