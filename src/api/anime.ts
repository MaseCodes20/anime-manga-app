import axios from "axios";
import { Anime } from "../types/animeType";

const animesBaseURL: string = "https://api.jikan.moe/v4/anime";
const mangasBaseURL: string = "https://api.jikan.moe/v4/manga";
const genresBaseURL: string = "https://api.jikan.moe/v4/genres/anime";

export const fetchAnimes = async () => {
  const response = await axios.get(animesBaseURL);

  return response.data;
};

export const fetchGenres = async () => {
  const repsonse = await axios.get(genresBaseURL);

  return repsonse.data;
};

export const fetchMangas = async () => {
  const response = await axios.get(mangasBaseURL);

  return response.data;
};

// Query data
export const fetchAnimesByName = async (search: string) => {
  const response = await axios.get(`${animesBaseURL}?letter=${search}`);

  return response.data;
};

export const fetchAnimeById = async (id: string) => {
  const response = await axios.get(`${animesBaseURL}/${id}`);

  return response.data;
};
