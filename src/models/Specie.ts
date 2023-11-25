export interface Specie {
  average_height: string;
  average_lifespan: string;
  classification: string;
  created: string;
  designation: string;
  edited: string;
  eye_colors: string;
  hair_colors: string;
  homeworld: string;
  language: string;
  name: string;
  people: string[];
  films: string[];
  skin_colors: string;
  url: string;
}

export const specieNameProperty: keyof Specie = "name";

export const specieGeneralContentList: (keyof Specie)[] = [
  "average_height",
  "average_lifespan",
  "classification",
  "designation",
  "eye_colors",
  "hair_colors",
  "language",
  "skin_colors",
];

export const specieNavigateContentList: (keyof Specie)[] = ["people", "films"];
export const specieNavigateContentSingle: (keyof Specie)[] = ["homeworld"];
