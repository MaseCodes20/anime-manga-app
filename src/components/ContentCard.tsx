import { Aired, Studio } from "../types/animeType";
import { Author, Published } from "../types/mangaType";
import { Demographic, Genre, Images, Theme, Title } from "../types/types";

interface IContentCard {
  content: Content;
}

type Content = {
  mal_id: number;
  url: string;
  images: Images;
  titles: Title[];
  title: string;
  type: string;
  source: string;
  status: string;
  airing: boolean;
  aired: Aired;
  duration: string;
  rating: string;
  score: number;
  rank: number;
  synopsis: string;
  background: string;
  season: string;
  year: number;
  authors: Author[];
  published: Published;
  studios: Studio[];
  genres: Genre[];
  themes: Theme[];
  demographics: Demographic[];
};

const ContentCard = ({ content }: IContentCard) => {
  const {
    images,
    title,
    type,
    status,
    year,
    synopsis,
    genres,
    authors,
    published,
  } = content;

  const releaseYear = year ?? new Date(published?.from).getFullYear();

  return (
    <div className="lg:flex items-center justify-between w-full bg-gray-200/20 border-[2px] rounded-md p-5 mx-5">
      <div className="md:flex items-center my-5 mx-5">
        <img
          src={images.jpg.large_image_url}
          className="max-h-[400px] mb-3 md:mb-0 md:mr-5"
        />

        <div>
          <div>
            <h3 className="font-semibold">Title:</h3>
            <p>{title}</p>
          </div>

          {authors && (
            <div>
              <h3 className="font-semibold">Author:</h3>
              <p>{authors[0].name}</p>
            </div>
          )}

          <div>
            <h3 className="font-semibold">Year of Release:</h3>
            <p>{releaseYear}</p>
          </div>

          <div>
            <h3 className="font-semibold">Status:</h3>
            <p>{status}</p>
          </div>

          <div>
            <h3 className="font-semibold">Type:</h3>
            <p>{type}</p>
          </div>

          <div>
            <h3 className="font-semibold">Genres:</h3>

            <div className="grid grid-cols-2 gap-2 xl:flex max-w-[300px]">
              {genres.map((genre) => {
                return (
                  <div
                    key={genre.mal_id}
                    className="mr-2 rounded-md p-1 w-fit bg-blue-800/50"
                  >
                    <p>{genre.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[400px] mx-5">
        <h3 className="mb-2 font-semibold">Description</h3>
        <div className="max-h-[300px] max-w-[400px] overflow-y-scroll border-[2px]">
          <p className="m-2">{synopsis}</p>
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
