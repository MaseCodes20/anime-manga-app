import { Anime } from "../../types/animeType";
import { Manga } from "../../types/mangaType";
import Card from "../Card";

const SearchResults = ({
  contents,
  title,
  searchTerm,
}: {
  contents: Anime[] | Manga[];
  title: string;
  searchTerm: string;
}) => {
  return (
    <>
      {contents.length >= 1 ? (
        <div className="bg-white/10 shadow-md rounded-md m-5 p-5">
          <h3 className="mb-3 text-xl font-bold text-center">{title}</h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 xl:grid-cols-8 gap-2">
            {contents.map((content: Anime | Manga) => {
              const contentType = content?.type !== "Manga" ? "anime" : "manga";
              return (
                <Card
                  key={content.mal_id + crypto.randomUUID()}
                  content={content}
                  contentType={contentType}
                />
              );
            })}
          </div>
        </div>
      ) : (
        <div className="text-center mt-5">
          <h2>
            No {title.slice(0, title.length - 1)} was found for{" "}
            <span className="font-bold">
              {searchTerm.split("%20").join(" ")}
            </span>
            !
          </h2>
        </div>
      )}
    </>
  );
};

export default SearchResults;
