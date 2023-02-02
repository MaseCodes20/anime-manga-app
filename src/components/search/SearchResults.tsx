import React from "react";
import { Anime } from "../../types/animeType";
import { Manga } from "../../types/mangaType";
import Card from "../Card";

const SearchResults = ({ contents }: { contents: Anime[] | Manga[] }) => {
  return (
    <div className="grid grid-cols-8 gap-2">
      {contents.map((content: Anime | Manga) => {
        const contentType = content?.type !== "Manga" ? "anime" : "manga";
        return (
          <Card
            key={content.mal_id}
            content={content}
            contentType={contentType}
          />
        );
      })}
    </div>
  );
};

export default SearchResults;
