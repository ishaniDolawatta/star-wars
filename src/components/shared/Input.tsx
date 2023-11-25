import React, { InputHTMLAttributes } from "react";
import styled from "styled-components";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  id: string;
  placeholder: string;
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ id, placeholder, ...rest }, ref) => (
    <Container>
      <InputBase name={id} placeholder={placeholder} {...rest} />
    </Container>
  )
);

export default Input;

const InputBase = styled.input<{ hasError?: boolean }>`
  height: 45px;
  border: none;
  max-width: 500px;
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
  }
`;
