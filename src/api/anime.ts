import axios from "axios";

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
