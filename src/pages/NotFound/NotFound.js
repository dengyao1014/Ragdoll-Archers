import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NotFoundContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #1a1a1a;
  color: white;
  padding: 20px;
`;

const ErrorCode = styled.h1`
  font-size: 120px;
  margin: 0;
  color: #4a90e2;
  text-shadow: 0 0 10px rgba(74, 144, 226, 0.3);
`;

const ErrorMessage = styled.p`
  font-size: 24px;
  margin: 20px 0;
  color: #999;
`;

const BackButton = styled(Link)`
  background: #4a90e2;
  color: white;
  padding: 12px 24px;
  border-radius: 4px;
  text-decoration: none;
  transition: background 0.2s;

  &:hover {
    background: #357abd;
  }
`;

const NotFound = () => {
  return (
    <NotFoundContainer>
      <ErrorCode>404</ErrorCode>
      <ErrorMessage>Page Not Found</ErrorMessage>
      <BackButton to="/">Back to Home</BackButton>
    </NotFoundContainer>
  );
};

export default NotFound;