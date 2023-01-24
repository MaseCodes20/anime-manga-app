import axios from "axios";

const animesBaseURL: string = "https://api.jikan.moe/v4/anime";
const mangasBaseURL: string = "https://api.jikan.moe/v4/manga";

export const fetchAnimes = async () => {
  const response = await axios.get(animesBaseURL);

  return response.data;
};
