import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="font-bold flex items-center">
      <Link to="/" className="text-[10px] md:text-base">
        AniManga Hub
      </Link>
    </div>
  );
};

export default NavBar;
