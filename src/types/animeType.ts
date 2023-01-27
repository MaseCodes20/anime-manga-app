import { Demographic, Genre, Images, Theme, Title } from "./types";

export type Anime = {
  mal_id: number;
  url: string;
  images: Images;
  trailer: Trailer;
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
  broadcast: Broadcast;
  producers: Producer[];
  licensors: Licensor[];
  studios: Studio[];
  genres: Genre[];
  themes: Theme[];
  demographics: Demographic[];
};

type Trailer = {
  youtube_id: string;
  url: string;
  embed_url: string;
  images: TrailerImages;
};

type TrailerImages = {
  image_url: string;
  small_image_url: string;
  medium_image_url: string;
  large_image_url: string;
  maximum_image_url: string;
};

type Aired = {
  from: string;
  to: string;
  string: string;
};

type Broadcast = {
  day: string;
  time: string;
  timezone: string;
  string: string;
};

type Producer = {
  mal_id: number;
  type: string;
  name: string;
  url: string;
};

type Licensor = {
  mal_id: number;
  type: string;
  name: string;
  url: string;
};

type Studio = {
  mal_id: number;
  type: string;
  name: string;
  url: string;
};
