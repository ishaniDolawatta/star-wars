import React from "react";
import styled from "styled-components";

type Props = {
  textColor?: string;
  errorText: string;
};

const ErrorComponent: React.FC<Props> = ({ textColor, errorText }) => {
  return (
    <Container data-testid="error-container" textcolor={textColor}>
      <p data-testid="error-text">{errorText}</p>
    </Container>
  );
};

export default ErrorComponent;

const Container = styled.div<{ textcolor?: string }>`
  color: ${(props) => (props.textcolor ? props.textcolor : "#ff6347")};
  font-size: 16px;
  p {
    margin-top: 5px;
  }
`;