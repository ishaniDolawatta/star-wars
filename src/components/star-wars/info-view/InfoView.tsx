import React, { ReactNode } from "react";
import styled from "styled-components";

import ErrorComponent from "../../shared/ErrorContainer";
import LoadingDots from "../../shared/LoadingDots";

import { ApiTypes } from "../../../models/StartWars";
import { getTypeAndIdFromUrl } from "../../../utils/star-wars";
import { useGetStarWarsDataById } from "../../../hooks/use-get";

import { SiStarship, SiAlienware } from "react-icons/si";
import { FaSpaceShuttle } from "react-icons/fa";
import { PiFilmReelFill } from "react-icons/pi";
import { IoPlanetSharp, IoPerson } from "react-icons/io5";
import { peopleNameProperty } from "../../../models/People";
import { planetNameProperty } from "../../../models/Planet";

type Props = {
  url: string;
};

const iconMap: { [key in ApiTypes]: React.ReactNode } = {
  people: <IoPerson />,
  films: <PiFilmReelFill />,
  starships: <SiStarship />,
  vehicles: <FaSpaceShuttle />,
  species: <SiAlienware />,
  planets: <IoPlanetSharp />,
};

const InfoView = ({ url }: Props) => {
  const { id, type } = getTypeAndIdFromUrl(url);
  const { data, isError, isLoading } = useGetStarWarsDataById(id, type);

  const getInfoContent = (): ReactNode => {
    switch (type) {
      case ApiTypes.People:
        return renderInfoContent(data[peopleNameProperty], ApiTypes.People);
      case ApiTypes.Planets:
        return renderInfoContent(data[planetNameProperty], ApiTypes.Planets);
      case ApiTypes.Films:
        return renderInfoContent(data.title, ApiTypes.Films);
      case ApiTypes.Species:
        return renderInfoContent(data.name, ApiTypes.Species);
      case ApiTypes.Starships:
        return renderInfoContent(data.name, ApiTypes.Starships);
      case ApiTypes.Vehicles:
        return renderInfoContent(data.name, ApiTypes.Vehicles);
      default:
        return null;
    }
  };

  return (
    <>
      {isError ? (
        <ErrorComponent errorText="Unable to load data" />
      ) : (
        <>
          {isLoading && <LoadingDots />}
          {data && getInfoContent()}
        </>
      )}
    </>
  );
};

export default InfoView;

const renderInfoContent = (text: string, type: ApiTypes) => {
  return (
    <ListItem>
      <LeftIcon>{iconMap[type]}</LeftIcon>
      <Link>{text}</Link>
    </ListItem>
  );
};

const LeftIcon = styled.span`
  margin-right: 5px;
  position: relative;
  bottom: -1px;
`;
const ListItem = styled.div`
  display: flex;
  margin: 7px 0;
`;

const Link = styled.a`
  font-size: 14px;
`;
