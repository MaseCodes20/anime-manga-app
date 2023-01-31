import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="sticky h-[35px]">
      <Link to="/">Home</Link>
    </div>
  );
};

export default NavBar;
