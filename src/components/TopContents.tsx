import { Link } from "react-router-dom";
import { Anime } from "../types/animeType";
import { Manga } from "../types/mangaType";

const TopContents = ({
  contents,
  contentType,
}: {
  contents: Anime[] | Manga[];
  contentType: string;
}) => {
  return (
    <div className="flex gap-2 my-3">
      {contents?.map((topContent: Anime | Manga) => {
        const { mal_id, images, title, rank } = topContent;

        return (
          <Link
            to={`/${contentType}/${mal_id}`}
            key={mal_id}
            className="relative"
          >
            <img
              src={images.jpg.large_image_url}
              alt={title}
              className="max-h-[300px]"
            />
            <div className="absolute bottom-0 right-0 w-[30px] h-[30px] rounded-full bg-pink-500 flex items-center justify-center mr-1 mb-1">
              <p className="text-white font-semibold">{rank}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default TopContents;
