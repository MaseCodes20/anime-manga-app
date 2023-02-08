import axios from "axios";
const mangasBaseURL: string = "https://api.jikan.moe/v4/manga";
const topMangasBaseURL: string = "https://api.jikan.moe/v4/top/manga";

export const fetchMangas = async () => {
  const response = await axios.get(mangasBaseURL);

  return response.data;
};

//   Query data
export const fetchMangaById = async (id: string) => {
  const response = await axios.get(`${mangasBaseURL}/${id}`);

  return response.data.data;
};

export const fetchMangasByName = async (search: string) => {
  const response = await axios.get(`${mangasBaseURL}?letter=${search}`);

  return response.data.data;
};

export const fetchTopMangas = async (limit: number) => {
  const response = await axios.get(`${topMangasBaseURL}?limit=${limit}`);

  return response.data.data;
};
