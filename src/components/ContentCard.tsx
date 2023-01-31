import React from "react";
import { Aired, Anime, Studio } from "../types/animeType";
import { Author, Manga } from "../types/mangaType";
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
  studios: Studio[];
  genres: Genre[];
  themes: Theme[];
  demographics: Demographic[];
};

const ContentCard = ({ content }: IContentCard) => {
  const { images, title, type, status, year, synopsis, genres } = content;

  return (
    <div className="flex items-center justify-between w-full bg-gray-200 rounded-md p-5 mx-5">
      <div className="flex items-center">
        <img src={images.jpg.large_image_url} className="max-h-[400px] mr-5" />

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
  );
};

export default ContentCard;
