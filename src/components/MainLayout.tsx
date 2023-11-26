import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import useDebounce from "../hooks/use-debounce";

import CharacterList from "./star-wars/list/CharacterList";
import DetailedView from "./star-wars/detailed-view/DetailedView";
import Input from "./shared/Input";
import PlanetList from "./star-wars/list/PlanetList";
import FilmList from "./star-wars/list/FilmList";
import SpecietList from "./star-wars/list/SpecieList";
import StarshiptList from "./star-wars/list/StarshipList";
import VehicleList from "./star-wars/list/VehicleList";

export default function MainLayout() {
  const { t } = useTranslation();
  const [searchValue, setSearchValue] = useState("");
  const [selectedUrl, setSelectedUrl] = useState<string>();
  const debouncedSearchValue = useDebounce(searchValue, 1000);

  const handleDisplayModal = (url?: string) => {
    setSelectedUrl(url);
  };

  return (
    <Container data-testid="container">
      {selectedUrl && (
        <DetailedView url={selectedUrl} onClose={() => handleDisplayModal()} />
      )}
      <SearchContainer data-testid="search-container">
        <ImageContainer data-testid="image-container">
          <img data-testid="main-image" alt="star-wars" src="./star-wars.png" />
        </ImageContainer>
        <Input
          id="search"
          placeholder={t("search")}
          data-type="search-text"
          onChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}
        />
      </SearchContainer>

      <CharacterList
        searchTerm={debouncedSearchValue}
        onExpandContent={(url) => handleDisplayModal(url)}
      />
      <FilmList
        searchTerm={debouncedSearchValue}
        onExpandContent={(url) => handleDisplayModal(url)}
      />
      <StarshiptList
        searchTerm={debouncedSearchValue}
        onExpandContent={(url) => handleDisplayModal(url)}
      />
      <VehicleList
        searchTerm={debouncedSearchValue}
        onExpandContent={(url) => handleDisplayModal(url)}
      />
      <SpecietList
        searchTerm={debouncedSearchValue}
        onExpandContent={(url) => handleDisplayModal(url)}
      />
      <PlanetList
        searchTerm={debouncedSearchValue}
        onExpandContent={(url) => handleDisplayModal(url)}
      />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const SearchContainer = styled.div`
  margin-top: 30px;
  padding: 0 10px;

  image {
    margin: 0 auto;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;

  img {
    width: 300px;
  }
`;
