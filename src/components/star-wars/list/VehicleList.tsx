import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useGetStartWarsData } from "../../../hooks/use-get";

import { ApiTypes } from "../../../models/StartWars";
import { Vehicle } from "../../../models/Vehicle";

import Card from "../../shared/horizontal-list-with-pagination/Card";
import ErrorComponent from "../../shared/ErrorContainer";
import ListContainer from "../../shared/horizontal-list-with-pagination/ListContainer";
import LoadingDots from "../../shared/LoadingDots";
import PaginatedList from "../../shared/horizontal-list-with-pagination/PaginatedList";

type Props = {
  searchTerm: string;
  onExpandContent: (url: string) => void;
};

const VehicleList = ({ searchTerm, onExpandContent }: Props) => {
  const { t } = useTranslation();
  const observerTarget = useRef(null);
  const { data, isLoading, isError, fetchNextPage, hasNextPage } =
    useGetStartWarsData(ApiTypes.Vehicles, searchTerm);

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
    <ListContainer header={t(`${ApiTypes.Vehicles}.title`)}>
      {isError ? (
        <ErrorComponent errorText={t(`${ApiTypes.Vehicles}.error_text`)} />
      ) : (
        <PaginatedList>
          {isLoading && <LoadingDots />}
          {data?.pages.map((page, pageNum) => (
            <React.Fragment key={pageNum}>
              {page.results.map((vehicle: Vehicle, index) => (
                <Card
                  key={`${index}_${vehicle.model}`}
                  text={vehicle.name}
                  onClick={() => onExpandContent(vehicle.url)}
                />
              ))}
              {page.results.length === 0 && (
                <ErrorComponent
                  textColor="gray"
                  errorText={t(`${ApiTypes.Vehicles}.not_found`)}
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

export default VehicleList;
