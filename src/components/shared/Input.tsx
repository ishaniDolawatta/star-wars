import React, { InputHTMLAttributes, RefObject } from "react";
import styled from "styled-components";

// eslint-disable-next-line react/display-name
const Input = React.forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  ({ ...rest }, ref) => (
    <Container data-testid="input-container">
      <InputBase
        data-testid="input-element"

        {...rest}
        ref={ref as RefObject<HTMLInputElement>}
      />
    </Container>
  )
);

export default Input;

const InputBase = styled.input`
  height: 45px;
  border: none;
  width: calc(100% - 25px);
  font-size: 16px;
  outline: none;
`;

const Container = styled.div`
  margin: 0 auto;
  max-width: 575px;
  padding-left: 20px;
  border-radius: 30px;
  border: 1px solid #dcdcdc;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 1px 1px 8px 1px #dcdcdc;
  }

  &:focus-within {
    box-shadow: 1px 1px 8px 1px #dcdcdc;
    outline: none;
    `;
