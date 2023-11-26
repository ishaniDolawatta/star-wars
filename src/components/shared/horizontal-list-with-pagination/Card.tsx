import React from "react";
import styled from "styled-components";

export const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: fit-content;
  border: 1px solid gray;
  display: inline-block;
  margin-right: 3px;
  border-radius: 10px;
  padding: 10px;
  cursor: pointer;
  &.load-more-tag {
    border: none;
    cursor: default;
    padding: 0;
  }
`;

type Props = {
  text: string;
  onClick: () => void;
};

const Card: React.FC<Props> = ({ text, onClick }) => {
  return <CardWrapper onClick={() => onClick()}>{text}</CardWrapper>;
};

export default Card;
