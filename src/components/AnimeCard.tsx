import { Anime } from "../types/animeType";

interface IAnimeCard {
  anime: Anime;
}

const AnimeCard = ({ anime }: IAnimeCard) => {
  const { images, title, rank, genres } = anime;
  return (
    <div className="bg-blue-300/20 p-2 rounded-md shadow-md">
      <p className="truncate">{title}</p>
      <div className="relative">
        <img
          src={images.jpg.large_image_url}
          className="h-[248px] w-[200px] mx-auto"
          alt={title}
        />

        <p className="absolute bottom-0 right-0 mb-1 mr-1 bg-pink-500 rounded-full p-2">
          {rank}
        </p>
      </div>

      {genres.map((genre) => (
        <div key={genre.mal_id}>
          <p>{genre.name}</p>
        </div>
      ))}
    </div>
  );
};

export default AnimeCard;
