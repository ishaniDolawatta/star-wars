import React, { useEffect, useRef } from "react";
import { useGetStartWarsData } from "../../hooks/use-get";

import { ApiTypes } from "../../models/StartWars";
import { Starship } from "../../models/Starship";

import Card from "../shared/horizontal-list-with-pagination/Card";
import ErrorComponent from "../shared/ErrorContainer";
import ListContainer from "../shared/horizontal-list-with-pagination/ListContainer";
import LoadingDots from "../shared/LoadingDots";
import PaginatedList from "../shared/horizontal-list-with-pagination/PaginatedList";

type Props = {
  searchTerm: string;
  onExpandContent: (url: string) => void;
};

const StarshiptList = ({ searchTerm, onExpandContent }: Props) => {
  const observerTarget = useRef(null);
  const { data, isLoading, isError, fetchNextPage, hasNextPage } =
    useGetStartWarsData(ApiTypes.Starships, searchTerm);

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
    <ListContainer header={ApiTypes.Starships.toUpperCase()}>
      {isError ? (
        <ErrorComponent errorText="Unable to load characters" />
      ) : (
        <PaginatedList>
          {isLoading && <LoadingDots />}
          {data?.pages.map((page, pageNum) => (
            <React.Fragment key={pageNum}>
              {page.results.map((startship: Starship, index) => (
                <Card
                  key={`${index}_${startship.name}`}
                  text={startship.name}
                  onClick={() => onExpandContent(startship.url)}
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

export default StarshiptList;
