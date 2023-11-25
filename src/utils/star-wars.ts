import { ApiTypes } from "../models/StartWars";
import {
  peopleGeneralContentList,
  peopleNameProperty,
  peopleNavigateContentList,
  peopleNavigateContentSingle,
} from "../models/People";
import {
  planetGeneralContentList,
  planetNameProperty,
  planetNavigateContentList,
  planetNavigateContentSingle,
} from "../models/Planet";
import {
  filmGeneralContentList,
  filmNameProperty,
  filmNavigateContentList,
  filmNavigateContentSingle,
} from "../models/Film";
import {
  specieGeneralContentList,
  specieNameProperty,
  specieNavigateContentList,
  specieNavigateContentSingle,
} from "../models/Specie";
import {
  starshipGeneralContentList,
  starshipNameProperty,
  starshipNavigateContentList,
  starshipNavigateContentSingle,
} from "../models/Starship";
import {
  vehicleGeneralContentList,
  vehicleNameProperty,
  vehicleNavigateContentList,
  vehicleNavigateContentSingle,
} from "../models/Vehicle";

export const getTypeAndIdFromUrl = (
  url: string
): { id: string; type: ApiTypes } => {
  const urlParts = url.split("/");
  const id = urlParts[5];
  const type = urlParts[4] as ApiTypes;
  return { id, type };
};

export const getPage = (url?: string) => {
  const match = url?.match(/page=(\d+)/);
  return match ? parseInt(match[1]) : undefined;
};

export const getNameProperty = (type: ApiTypes): string => {
  switch (type) {
    case ApiTypes.People:
      return peopleNameProperty;
    case ApiTypes.Films:
      return filmNameProperty;
    case ApiTypes.Planets:
      return planetNameProperty;
    case ApiTypes.Species:
      return specieNameProperty;
    case ApiTypes.Starships:
      return starshipNameProperty;
    case ApiTypes.Vehicles:
      return vehicleNameProperty;
    default:
      return "";
  }
};

export const getGeneralContentList = (type: ApiTypes): string[] => {
  switch (type) {
    case ApiTypes.People:
      return peopleGeneralContentList;
    case ApiTypes.Films:
      return filmGeneralContentList;
    case ApiTypes.Planets:
      return planetGeneralContentList;
    case ApiTypes.Species:
      return specieGeneralContentList;
    case ApiTypes.Starships:
      return starshipGeneralContentList;
    case ApiTypes.Vehicles:
      return vehicleGeneralContentList;
    default:
      return [];
  }
};

export const getNavigateContentSingle = (type: ApiTypes): string[] => {
  switch (type) {
    case ApiTypes.People:
      return peopleNavigateContentSingle;
    case ApiTypes.Films:
      return filmNavigateContentSingle;
    case ApiTypes.Planets:
      return planetNavigateContentSingle;
    case ApiTypes.Species:
      return specieNavigateContentSingle;
    case ApiTypes.Starships:
      return starshipNavigateContentSingle;
    case ApiTypes.Vehicles:
      return vehicleNavigateContentSingle;
    default:
      return [];
  }
};

export const getNavigateContentList = (type: ApiTypes): string[] => {
  switch (type) {
    case ApiTypes.People:
      return peopleNavigateContentList;
    case ApiTypes.Films:
      return filmNavigateContentList;
    case ApiTypes.Planets:
      return planetNavigateContentList;
    case ApiTypes.Species:
      return specieNavigateContentList;
    case ApiTypes.Starships:
      return starshipNavigateContentList;
    case ApiTypes.Vehicles:
      return vehicleNavigateContentList;
    default:
      return [];
  }
};
