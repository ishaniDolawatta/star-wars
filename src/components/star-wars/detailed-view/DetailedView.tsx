import styled from "styled-components";
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

  return (
    <Modal isLoading={isLoading} onClose={() => onClose()}>
      <DetailViewContainer>
        {isError ? (
          <ErrorComponent errorText="Unable to load data" />
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
                          <TextContent isBold={true}>{key}</TextContent>
                          <TextContent>{data[key]}</TextContent>
                        </ListItem>
                      );
                    })}
                  </KeyValuesList>
                </Section>
                <Section>
                  <WrapperList>
                    {getNavigateContentSingle(type).map((key: string) => {
                      return (
                        <FlexColumnWrapper key={key}>
                          <HeaderContent>{key}</HeaderContent>
                          <InfoView url={data[key]} />
                        </FlexColumnWrapper>
                      );
                    })}
                    {getNavigateContentList(type).map((key) => {
                      if (data[key].length === 0) return null;
                      return (
                        <FlexColumnWrapper key={key}>
                          <HeaderContent>{key}</HeaderContent>
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

const TextContent = styled.span<{ isBold?: boolean }>`
  padding: 5px 15px;
  font-size: 16px;
  font-weight: ${(props) => (props.isBold ? "bold" : "normal")};
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
  background: lightGray;
  padding: 5px;
  text-align: center;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const ListItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5px 0;
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
  display: flex;
  flex-wrap: wrap;

  li {
    margin-bottom: 8px;
  }
`;

const WrapperList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: space-evenly;
`;
