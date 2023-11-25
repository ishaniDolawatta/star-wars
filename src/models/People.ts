export interface People {
  name: string;
  url: string;
  birth_year: string;
  eye_color: string;
  films: string[];
  gender: string;
  hair_color: string;
  height: string;
  homeworld: string;
  mass: string;
  skin_color: string;
  created: string;
  edited: string;
  species: string[];
  starships: string[];
  vehicles: string[];
}

export const peopleNameProperty: keyof People = "name";

export const peopleGeneralContentList: (keyof People)[] = [
  "birth_year",
  "eye_color",
  "gender",
  "hair_color",
  "height",
  "mass",
  "skin_color",
];

export const peopleNavigateContentList: (keyof People)[] = [
  "films",
  "species",
  "vehicles",
  "starships",
];
export const peopleNavigateContentSingle: (keyof People)[] = ["homeworld"];
