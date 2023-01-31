import { useLoaderData } from "react-router-dom";

type Params = {
  animeId: string;
};

const Anime = () => {
  const anime = useLoaderData();

  console.log(anime);

  return <div>Anime</div>;
};

export default Anime;

export const animeLoader = async (id: string) => {
  const req = await fetch(`https://api.jikan.moe/v4/anime/${id}`);
  const response = await req.json();

  return response;
};
