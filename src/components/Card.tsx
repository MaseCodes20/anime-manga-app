import { Anime } from "../types/animeType";
import { Manga } from "../types/mangType";

interface ICard {
  content: Anime | Manga;
}

const Card = ({ content }: ICard) => {
  const { images, title } = content;
  return (
    <div className="mr-2 max-w-[100px]">
      <p className="truncate">{title}</p>
      <div className="relative">
        <img
          src={images.jpg.large_image_url}
          className="h-[124px] w-[100px] mx-auto"
          alt={title}
        />
      </div>
    </div>
  );
};

export default Card;
