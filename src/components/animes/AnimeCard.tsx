import { Anime } from "../../types/animeType";

interface IAnimeCard {
  anime: Anime;
}

const AnimeCard = ({ anime }: IAnimeCard) => {
  const { images, title } = anime;
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

export default AnimeCard;
