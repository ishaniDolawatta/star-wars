import React from "react";
import styled, { keyframes } from "styled-components";

const bounceAnimation = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-6px);
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  height: 30px;
  align-items: center;
`;

const BouncingDot = styled.div`
  width: 8px;
  height: 8px;
  margin: 4px;
  border-radius: 50%;
  background-color: #E8E8E8;
  animation: ${bounceAnimation} 1.5s infinite ease-in-out;
  &:nth-child(2) {
    animation-delay: 0.5s;
  }
  &:nth-child(3) {
    animation-delay: 1s;
  }
`;

const LoadingDots: React.FC = () => {
  return (
    <LoadingContainer>
      <BouncingDot />
      <BouncingDot />
      <BouncingDot />
    </LoadingContainer>
  );
};

export default LoadingDots;
