import { Demographic, Genre, Images, Theme, Title } from "./types";

export type Manga = {
  mal_id: number;
  url: string;
  images: Images;
  approved: boolean;
  titles: Title[];
  title: string;
  title_english: string;
  title_japanese: string;
  title_synonyms: string[];
  type: string;
  chapters: number;
  volumes: number;
  status: string;
  publishing: boolean;
  published: Published;
  score: number;
  scored_by: number;
  rank: number;
  popularity: number;
  members: number;
  favorites: number;
  synopsis: string;
  background: string;
  authors: Author[];
  serializations: Serialization[];
  genres: Genre[];
  explicit_genres: Genre[];
  themes: Theme[];
  demographics: Demographic[];
  relations: Relation[];
  external: External[];
};

export type Published = {
  from: string;
  to: string;
};

export type Author = {
  mal_id: number;
  type: string;
  name: string;
  url: string;
};

type Serialization = {
  mal_id: number;
  type: string;
  name: string;
  url: string;
};

type Relation = {
  relation: string;
  entry: Entry[];
};

type Entry = {
  mal_id: number;
  type: string;
  name: string;
  url: string;
};

type External = {
  name: string;
  url: string;
};
