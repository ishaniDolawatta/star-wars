import React, { useEffect, useRef } from "react";
import { useGetStartWarsData } from "../../hooks/use-get";

import { ApiTypes } from "../../models/StartWars";
import { Specie } from "../../models/Specie";

import Card from "../shared/horizontal-list-with-pagination/Card";
import ErrorComponent from "../shared/ErrorContainer";
import ListContainer from "../shared/horizontal-list-with-pagination/ListContainer";
import LoadingDots from "../shared/LoadingDots";
import PaginatedList from "../shared/horizontal-list-with-pagination/PaginatedList";

type Props = {
  searchTerm: string;
  onExpandContent: (url: string) => void;
};

const SpecietList = ({ searchTerm, onExpandContent }: Props) => {
  const observerTarget = useRef(null);
  const { data, isLoading, isError, fetchNextPage, hasNextPage } =
    useGetStartWarsData(ApiTypes.Species, searchTerm);

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
    <ListContainer header={ApiTypes.Species.toUpperCase()}>
      {isError ? (
        <ErrorComponent errorText="Unable to load characters" />
      ) : (
        <PaginatedList>
          {isLoading && <LoadingDots />}
          {data?.pages.map((page, pageNum) => (
            <React.Fragment key={pageNum}>
              {page.results.map((specie: Specie, index) => (
                <Card
                  key={`${index}_${specie.name}`}
                  text={specie.name}
                  onClick={() => onExpandContent(specie.url)}
                />
              ))}
              {page.results.length === 0 && (
                <ErrorComponent
                  textColor="gray"
                  errorText="Characters not found."
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

export default SpecietList;
