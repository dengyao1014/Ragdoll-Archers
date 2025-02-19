import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Card = styled.div`
  width: 300px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
  background: white;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 15px;
`;

const Title = styled.h3`
  margin: 0;
  color: #333;
  font-size: 1.2rem;
`;

const Description = styled.p`
  color: #666;
  margin-top: 8px;
  font-size: 0.9rem;
`;

const GameCard = ({ game }) => {
  return (
    <Link to={`/game/${game.id}`}>
      <Card>
        <Thumbnail src={game.thumbnail} alt={game.title} />
        <Content>
          <Title>{game.title}</Title>
          <Description>{game.description}</Description>
        </Content>
      </Card>
    </Link>
  );
};

export default GameCard;