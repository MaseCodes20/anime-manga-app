import { useQuery } from "react-query";
import { fetchMangas, fetchTopMangas } from "../../api/anime";
import Marquee from "react-fast-marquee";
import { Manga } from "../../types/mangaType";
import Card from "../Card";
import Title from "../Title";
import TopContents from "../TopContents";

const Mangas = () => {
  const { data: mangas } = useQuery("mangas", fetchMangas);
  const { data: topMangas } = useQuery("topMangas", () => fetchTopMangas(10));

  return (
    <div className="border-b-[2px] py-3 mb-5">
      <Title title="mangas" />

      <TopContents contents={topMangas} contentType="manga" />

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
