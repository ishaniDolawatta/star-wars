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
  background-color: #e8e8e8;
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
    <LoadingContainer data-testid="loading-dot-container">
      <BouncingDot data-testid="dot-1" />
      <BouncingDot data-testid="dot-2" />
      <BouncingDot data-testid="dot-3" />
    </LoadingContainer>
  );
};

export default LoadingDots;
