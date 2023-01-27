import { Manga } from "../../types/mangType";

interface IMangaCard {
  manga: Manga;
}

const MangaCard = ({ manga }: IMangaCard) => {
  const { title, images } = manga;

  return (
    <div className="mr-2 max-w-[200px]">
      <p className="truncate">{title}</p>
      <div className="relative">
        <img
          src={images.jpg.large_image_url}
          className="h-[248px] w-[200px] mx-auto"
          alt={title}
        />
      </div>
    </div>
  );
};

export default MangaCard;
