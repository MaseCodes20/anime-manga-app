export type Images = {
  jpg: Image;
  webp: Image;
};

export type Image = {
  image_url: string;
  small_image_url: string;
  large_image_url: string;
};

export type Title = {
  type: string;
  title: string;
};

export type Genre = {
  mal_id: number;
  type: string;
  name: string;
  url: string;
};

export type Theme = {
  mal_id: number;
  type: string;
  name: string;
  url: string;
};

export type Demographic = {
  mal_id: number;
  type: string;
  name: string;
  url: string;
};
