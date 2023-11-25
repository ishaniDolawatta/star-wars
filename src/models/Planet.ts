export interface Planet {
  climate: string;
  created: string;
  diameter: string;
  edited: string;
  films: string[];
  gravity: string;
  name: string;
  orbital_period: string;
  population: string;
  residents: string[];
  rotation_period: string;
  surface_water: string;
  terrain: string;
  url: string;
}

export const planetNameProperty: keyof Planet = "name";

export const planetGeneralContentList: (keyof Planet)[] = [
  "climate",
  "diameter",
  "gravity",
  "orbital_period",
  "population",
  "rotation_period",
  "surface_water",
  "terrain",
];

export const planetNavigateContentList: (keyof Planet)[] = [
  "films",
  "residents",
];
export const planetNavigateContentSingle: (keyof Planet)[] = [];
