import { Anime } from "../../types/animeType";
import { Manga } from "../../types/mangaType";
import Card from "../Card";

const SearchResults = ({
  contents,
  title,
}: {
  contents: Anime[] | Manga[];
  title: string;
}) => {
  return (
    <div className="bg-white/75 shadow-md rounded-md m-5 p-5">
      <h3 className="mb-3 text-xl font-bold text-center">{title}</h3>
      <div className="grid grid-cols-8 gap-2">
        {contents.map((content: Anime | Manga) => {
          const contentType = content?.type !== "Manga" ? "anime" : "manga";
          return (
            <Card
              key={content.mal_id}
              content={content}
              contentType={contentType}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SearchResults;
