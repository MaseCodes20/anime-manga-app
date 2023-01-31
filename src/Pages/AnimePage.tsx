import { useLoaderData } from "react-router-dom";
import { Anime } from "../types/animeType";

const AnimePage = () => {
  const anime: Anime = useLoaderData() as Anime;

  const { images, title, type, status, year, synopsis, genres, trailer } =
    anime;

  console.log(anime);
  return (
    <div className="flex items-center justify-center h-[calc(100vh-35px)]">
      <div className="flex items-center justify-between w-full bg-gray-200 rounded-md p-5 mx-5">
        <div className="flex items-center">
          <img
            src={images.jpg.large_image_url}
            className="max-h-[400px] mr-5"
          />

          <div>
            <div>
              <h3 className="font-semibold">Title:</h3>
              <p>{title}</p>
            </div>

            <div>
              <h3 className="font-semibold">Year of Release:</h3>
              <p>{year}</p>
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

              <div className="flex">
                {genres.map((genre) => {
                  return (
                    <div
                      key={genre.mal_id}
                      className="mr-2 rounded-md p-1 bg-blue-200"
                    >
                      <p>{genre.name}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-[400px] ">
          <h3 className="mb-2 font-semibold">Description</h3>
          <div className="max-h-[300px] overflow-y-scroll">
            <p>{synopsis}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimePage;

export const animeLoader = async (id: string) => {
  try {
    const req = await fetch(`https://api.jikan.moe/v4/anime/${id}`);
    const response = await req.json();
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
