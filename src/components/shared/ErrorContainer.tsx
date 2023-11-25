import React from "react";
import styled from "styled-components";

type Props = {
  textColor?: string;
  errorText: string;
};

const ErrorComponent: React.FC<Props> = ({ textColor, errorText }) => {
  return (
    <Container textColor={textColor}>
      <p>{errorText}</p>
    </Container>
  );
};

export default ErrorComponent;

const Container = styled.div<{ textColor?: string }>`
  color: ${(props) => (props.textColor ? props.textColor : "#ff6347")};
  font-size: 16px;
  p {
    margin-top: 5px;
  }
`;
