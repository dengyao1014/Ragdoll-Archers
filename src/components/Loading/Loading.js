import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  min-height: 200px;
  background: rgba(0, 0, 0, 0.8);
`;

const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border: 5px solid #333;
  border-top: 5px solid #4a90e2;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

const LoadingText = styled.p`
  color: white;
  margin-top: 20px;
  font-size: 1.2rem;
`;

const Loading = () => {
  return (
    <LoadingContainer>
      <Spinner />
      <LoadingText>游戏加载中...</LoadingText>
    </LoadingContainer>
  );
};

export default Loading;