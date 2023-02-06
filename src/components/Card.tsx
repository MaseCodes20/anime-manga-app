import { Anime } from "../types/animeType";
import { Manga } from "../types/mangaType";
import { Link } from "react-router-dom";

interface ICard {
  content: Anime | Manga;
  contentType: string;
}

const Card = ({ content, contentType }: ICard) => {
  const { images, title, mal_id } = content;

  return (
    <div className="mr-2 max-w-[100px]">
      <p className="truncate">{title}</p>
      <Link to={`/${contentType}/${mal_id}`} className="relative">
        <img
          src={images?.jpg.large_image_url}
          className="h-[124px] w-[100px] mx-auto"
          alt={title}
        />
      </Link>
    </div>
  );
};

export default Card;
