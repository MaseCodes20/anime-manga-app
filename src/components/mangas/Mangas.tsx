import { useQuery } from "react-query";
import { fetchMangas } from "../api/anime";

const Mangas = () => {
  const { data: mangas } = useQuery("mangas", fetchMangas);
  return <div>Mangas</div>;
};

export default Mangas;
