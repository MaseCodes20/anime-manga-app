import { useQuery } from "react-query";
import { fetchMangas } from "../../api/anime";
import Marquee from "react-fast-marquee";
import { Manga } from "../../types/mangaType";
import Card from "../Card";
import Title from "../Title";

const Mangas = () => {
  const { data: mangas } = useQuery("mangas", fetchMangas);
  return (
    <div className="border-b-[2px] py-3">
      <Title title="mangas" />
      <Marquee
        direction="right"
        gradient={false}
        pauseOnHover={true}
        speed={10}
      >
        {mangas?.data.map((manga: Manga) => (
          <Card key={manga.mal_id} content={manga} contentType="manga" />
        ))}
      </Marquee>
    </div>
  );
};

export default Mangas;
