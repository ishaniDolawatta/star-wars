export interface Starship {
  MGLT: string;
  cargo_capacity: string;
  consumables: string;
  cost_in_credits: string;
  created: string;
  crew: string;
  edited: string;
  hyperdrive_rating: string;
  length: string;
  manufacturer: string;
  max_atmosphering_speed: string;
  model: string;
  name: string;
  passengers: string;
  films: string[];
  pilots: string[];
  starship_class: string;
  url: string;
}

export const starshipNameProperty: keyof Starship = "name";

export const starshipGeneralContentList: (keyof Starship)[] = [
  "MGLT",
  "cargo_capacity",
  "consumables",
  "crew",
  "hyperdrive_rating",
  "length",
  "manufacturer",
  "max_atmosphering_speed",
  "passengers",
  "starship_class",
];

export const starshipNavigateContentList: (keyof Starship)[] = [
  "pilots",
  "films",
];
export const starshipNavigateContentSingle: (keyof Starship)[] = [];
