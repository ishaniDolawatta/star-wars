export interface Vehicle {
  cargo_capacity: string;
  consumables: string;
  cost_in_credits: string;
  created: string;
  crew: string;
  edited: string;
  length: string;
  manufacturer: string;
  max_atmosphering_speed: string;
  model: string;
  name: string;
  passengers: string;
  pilots: string[];
  films: string[];
  url: string;
  vehicle_class: string;
}

export const vehicleNameProperty: keyof Vehicle = "name";

export const vehicleGeneralContentList: (keyof Vehicle)[] = [
  "cargo_capacity",
  "consumables",
  "cost_in_credits",
  "crew",
  "length",
  "manufacturer",
  "max_atmosphering_speed",
  "model",
  "passengers",
  "vehicle_class",
];

export const vehicleNavigateContentList: (keyof Vehicle)[] = [
  "pilots",
  "films",
];
export const vehicleNavigateContentSingle: (keyof Vehicle)[] = [];
