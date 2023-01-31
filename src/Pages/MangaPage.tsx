import { useLoaderData } from "react-router-dom";
import { Manga } from "../types/mangaType";

const MangaPage = () => {
  const anime: Manga = useLoaderData() as Manga;
  console.log(anime.title);
  return <div>MangaPage</div>;
};

export default MangaPage;

export const mangaLoader = async (id: string) => {
  try {
    const req = await fetch(`https://api.jikan.moe/v4/manga/${id}`);
    const res = await req.json();
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
