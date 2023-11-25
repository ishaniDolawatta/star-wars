import React, { ReactNode } from "react";
import styled from "styled-components";

const ListContainerWrapper = styled.div`
  margin: 15px;
  padding: 10px;
`;

const HeaderContainer = styled.div`
  font-family: "Newsreader";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 130%;
  display: flex;
  align-items: flex-end;
  letter-spacing: -0.02em;
  border-bottom: 1px solid;
  margin-bottom: 8px;
  width: fit-content;
`;
type Props = {
  header: string;
  children: ReactNode;
};

const ListContainer: React.FC<Props> = ({ header, children }) => {
  return (
    <ListContainerWrapper>
      <HeaderContainer>{header}</HeaderContainer>
      {children}
    </ListContainerWrapper>
  );
};

export default ListContainer;
