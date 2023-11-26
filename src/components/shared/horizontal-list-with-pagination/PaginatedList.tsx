import React, { ReactNode } from "react";
import styled from "styled-components";

const ScrollingWrapper = styled.div`
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  width: calc(100vw - 50px);
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    display: none;
  }
`;

type Props = {
  children: ReactNode;
};

const PaginatedList: React.FC<Props> = ({ children }) => {
  return <ScrollingWrapper data-testid="paginated-list-wrapper">{children}</ScrollingWrapper>;
};

export default PaginatedList;
