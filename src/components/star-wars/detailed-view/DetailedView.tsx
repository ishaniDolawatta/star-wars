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
              <>
                <Title>{data[getNameProperty(type)]}</Title>
                <Section>
                  <KeyValuesList>
                    <tbody>
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
                    </tbody>
                  </KeyValuesList>
                </Section>
                <>
                  <WrapperList>
                    {getNavigateContentSingle(type).map((key: string) => {
                      if (!data[key]) return null;
                      return (
                        <ContentListWrapper key={key}>
                          <HeaderContent> {t(`${type}.${key}`)}</HeaderContent>
                          <FlexColumnWrapper>
                            <InfoView url={data[key]} />
                          </FlexColumnWrapper>
                        </ContentListWrapper>
                      );
                    })}
                    {getNavigateContentList(type).map((key) => {
                      if (data[key].length === 0) return null;
                      return (
                        <ContentListWrapper key={key}>
                          <HeaderContent> {t(`${type}.${key}`)}</HeaderContent>
                          <FlexColumnWrapper>
                            {data[key].map((item: string) => {
                              return <InfoView key={item} url={item} />;
                            })}
                          </FlexColumnWrapper>
                        </ContentListWrapper>
                      );
                    })}
                  </WrapperList>
                </>
              </>
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

const Title = styled.h3`
  font-size: 24px;
  margin-bottom: 0;
  text-align: center;
  position: relative;
  top: -25px;
`;

const Section = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

//Section 1 Stylings
const ListItem = styled.tr``;

const TextContent = styled.td.attrs<{ $isbold?: boolean }>((props) => ({
  $isbold: props.$isbold || false,
}))`
  padding: 5px 15px;
  font-size: 16px;
  font-weight: ${(props) => (props.$isbold ? "bold" : "normal")};
  min-width: 150px;
`;

const KeyValuesList = styled.table`
  max-width: 80%;
  padding: 10px;
`;

//Section 2 Stylings
const HeaderContent = styled.div`
  font-size: 16px;
  background: whitesmoke;
  border: 1px solid yellow;
  padding: 8px;
  text-align: center;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

const FlexColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 225px;
  height: 200px;
  overflow: scroll;
  background: lightgoldenrodyellow;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const WrapperList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  justify-items: center;
`;

const ContentListWrapper = styled.div`
  margin-bottom: 20px;
`;
