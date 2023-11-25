import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useGetStartWarsData } from "../../../hooks/use-get";

import { ApiTypes } from "../../../models/StartWars";
import { People } from "../../../models/People";

import Card from "../../shared/horizontal-list-with-pagination/Card";
import ErrorComponent from "../../shared/ErrorContainer";
import ListContainer from "../../shared/horizontal-list-with-pagination/ListContainer";
import LoadingDots from "../../shared/LoadingDots";
import PaginatedList from "../../shared/horizontal-list-with-pagination/PaginatedList";

type Props = {
  searchTerm: string;
  onExpandContent: (url: string) => void;
};

const CharacterList = ({ searchTerm, onExpandContent }: Props) => {
  const { t } = useTranslation();
  const observerTarget = useRef(null);
  const { data, isLoading, isError, fetchNextPage, hasNextPage } =
    useGetStartWarsData(ApiTypes.People, searchTerm);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      },
      { threshold: 1 }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => {
      if (observerTarget.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(observerTarget.current);
      }
    };
  }, [observerTarget, fetchNextPage, hasNextPage]);

  return (
    <ListContainer header={t(`${ApiTypes.People}.title`)}>
      {isError ? (
        <ErrorComponent errorText={t(`${ApiTypes.People}.error_text`)} />
      ) : (
        <PaginatedList>
          {isLoading && <LoadingDots />}
          {data?.pages.map((page, pageNum) => (
            <React.Fragment key={pageNum}>
              {page.results.map((character: People, index) => (
                <Card
                  key={`${index}_${character.height}`}
                  text={character.name}
                  onClick={() => onExpandContent(character.url)}
                />
              ))}
              {page.results.length === 0 && (
                <ErrorComponent
                  textColor="gray"
                  errorText={t(`${ApiTypes.People}.not_found`)}
                />
              )}
            </React.Fragment>
          ))}
        </PaginatedList>
      )}
      <div ref={observerTarget}></div>
    </ListContainer>
  );
};

export default CharacterList;
