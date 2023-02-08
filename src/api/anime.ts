import axios from "axios";

const animesBaseURL: string = "https://api.jikan.moe/v4/anime";
const topAnimesBaseURL: string = "https://api.jikan.moe/v4/top/anime";
const genresBaseURL: string = "https://api.jikan.moe/v4/genres/anime";

export const fetchAnimes = async () => {
  const response = await axios.get(animesBaseURL);

  return response.data;
};

export const fetchGenres = async () => {
  const repsonse = await axios.get(genresBaseURL);

  return repsonse.data;
};

// Query data
export const fetchAnimesByName = async (search: string) => {
  const response = await axios.get(`${animesBaseURL}?letter=${search}`);

  return response.data.data;
};

export const fetchAnimeById = async (id: string) => {
  const response = await axios.get(`${animesBaseURL}/${id}`);

  return response.data.data;
};

export const fetchTopAnimes = async (limit: number) => {
  const response = await axios.get(`${topAnimesBaseURL}?limit=${limit}`);

  return response.data.data;
};
