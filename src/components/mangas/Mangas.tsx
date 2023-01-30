import { useQuery } from "react-query";
import { fetchMangas } from "../../api/anime";
import Marquee from "react-fast-marquee";
import { Manga } from "../../types/mangType";
import Card from "../Card";

const Mangas = () => {
  const { data: mangas } = useQuery("mangas", fetchMangas);
  return (
    <Marquee direction="right" gradient={false} pauseOnHover={true} speed={10}>
      {mangas?.data.map((manga: Manga) => (
        <Card key={manga.mal_id} content={manga} />
      ))}
    </Marquee>
  );
};

export default Mangas;
