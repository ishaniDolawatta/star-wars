export interface Film {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: string[];
  planets: string[];
  starships: string[];
  vehicles: string[];
  species: string[];
  created: string;
  edited: string;
  url: string;
}

export const filmNameProperty: keyof Film = "title";

export const filmGeneralContentList: (keyof Film)[] = [
  "episode_id",
  "opening_crawl",
  "director",
  "producer",
  "release_date",
];

export const filmNavigateContentList: (keyof Film)[] = [
  "planets",
  "starships",
  "vehicles",
  "species",
  "characters",
];
export const filmNavigateContentSingle: (keyof Film)[] = [];
