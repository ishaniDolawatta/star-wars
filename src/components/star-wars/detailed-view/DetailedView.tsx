import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { useGetStarWarsDataById } from "../../../hooks/use-get";

import {
  getGeneralContentList,
  getNameProperty,
  getNavigateContentList,
  getNavigateContentSingle,
  getTypeAndIdFromUrl,
} from "../../../utils/star-wars";
import ErrorComponent from "../../shared/ErrorContainer";

import InfoView from "../info-view/InfoView";
import Modal from "../../shared/modal/Modal";

type Props = {
  url: string;
  onClose: () => void;
};

const DetailedView = ({ url, onClose }: Props) => {
  const { id, type } = getTypeAndIdFromUrl(url);
  const { isLoading, data, isError } = useGetStarWarsDataById(id, type);
  const { t } = useTranslation();

  return (
    <Modal isLoading={isLoading} onClose={() => onClose()}>
      <DetailViewContainer>
        {isError ? (
          <ErrorComponent
            errorText={t(`${type}.error_text_for_single`, { id })}
          />
        ) : (
          <>
            {data && (
              <DetailViewContainer>
                <Title>{data[getNameProperty(type)]}</Title>
                <Section>
                  <KeyValuesList>
                    {getGeneralContentList(type).map((key) => {
                      return (
                        <ListItem key={key}>
                          <TextContent $isbold={true}>
                            {t(`${type}.${key}`)}
                          </TextContent>
                          <TextContent>{data[key]}</TextContent>
                        </ListItem>
                      );
                    })}
                  </KeyValuesList>
                </Section>
                <Section>
                  <WrapperList>
                    {getNavigateContentSingle(type).map((key: string) => {
                      if (!data[key]) return null;
                      return (
                        <FlexColumnWrapper key={key}>
                          <HeaderContent> {t(`${type}.${key}`)}</HeaderContent>
                          <InfoView url={data[key]} />
                        </FlexColumnWrapper>
                      );
                    })}
                    {getNavigateContentList(type).map((key) => {
                      if (data[key].length === 0) return null;
                      return (
                        <FlexColumnWrapper key={key}>
                          <HeaderContent> {t(`${type}.${key}`)}</HeaderContent>
                          {data[key].map((item: string) => {
                            return <InfoView key={item} url={item} />;
                          })}
                        </FlexColumnWrapper>
                      );
                    })}
                  </WrapperList>
                </Section>
              </DetailViewContainer>
            )}
          </>
        )}
      </DetailViewContainer>
    </Modal>
  );
};

export default DetailedView;

const DetailViewContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const TextContent = styled.span.attrs<{ $isbold?: boolean }>((props) => ({
  $isbold: props.$isbold || false,
}))`
  padding: 5px 15px;
  font-size: 16px;
  font-weight: ${(props) => (props.$isbold ? "bold" : "normal")};
`;

const Title = styled.h3`
  font-size: 24px;
  margin-bottom: 0;
  text-align: center;
  position: relative;
  top: -49px;
`;

const HeaderContent = styled.div`
  font-size: 16px;
  background: #e8e8e8;
  padding: 8px;
  text-align: center;
  border-radius: 20px;
  margin-bottom: 10px;
`;

const ListItem = styled.div`
  padding: 10px;
  display: grid;
  grid-template-columns: 200px 1fr;
  @media (max-width: 450px) {
    grid-template-columns: 1fr;
  }
`;

const FlexColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  width: 180px;
  @media (max-width: 768px) {
    width: 220px; /* One column on smaller screens */
  }
`;

const Section = styled.div`
  flex: 1;
  min-width: calc(50% - 10px); /* Two columns on larger screens */
  margin-bottom: 20px;

  @media (max-width: 768px) {
    min-width: 100%; /* One column on smaller screens */
  }
`;

const KeyValuesList = styled.div`
  padding: 10px;
`;

const WrapperList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: space-evenly;
`;
