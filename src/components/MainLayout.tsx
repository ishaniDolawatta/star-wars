import { useState } from "react";
import styled from "styled-components";

import useDebounce from "../hooks/use-debounce";

import CharacterList from "./star-wars/CharacterList";
import Input from "./shared/Input";
import Modal from "./shared/modal/Modal";

export default function MainLayout() {
  const [searchValue, setSearchValue] = useState("");
  const [selectedUrl, setSelectedUrl] = useState<string>();
  const debouncedSearchValue = useDebounce(searchValue, 1000);

  const handleDisplayModal = (url?: string) => {
    setSelectedUrl(url);
  };

  return (
    <Container>
      {selectedUrl && (
        <Modal onClose={() => handleDisplayModal()}>{selectedUrl}</Modal>
      )}
      <SearchContainer>
        <ImageContainer>
          <img alt="star-wars" src="./star-wars.png" />
        </ImageContainer>
        <Input
          id="search"
          placeholder="Search"
          data-type="search-text"
          onChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}
        />
      </SearchContainer>

      <CharacterList
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
