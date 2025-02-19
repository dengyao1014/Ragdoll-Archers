import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Card = styled.div`
  width: 100%;
  aspect-ratio: 1;
  border-radius: 8px;
  overflow: hidden;
  background: #2a2a2a;
  position: relative;
  transition: transform 0.2s;
  &:hover {
    transform: translateY(-5px);
  }
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const GameInfo = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0,0,0,0.8));
  padding: 10px;
  color: white;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 0.9rem;
  font-weight: 500;
  color: white;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 0.8rem;
  margin-top: 4px;

  .stars {
    color: #ffd700;
  }

  .score {
    color: #ffd700;
  }
`;

const NewBadge = styled.span`
  background: #ff4757;
  color: white;
  padding: 2px 6px;
  border-radius: 3px;
  font-size: 0.7rem;
  text-transform: uppercase;
`;
const GameCard = ({ game }) => {
  const renderStars = (rating) => {
    const stars = "★".repeat(Math.floor(rating)) + "☆".repeat(5 - Math.floor(rating));
    return stars;
  };
  return (
    <Link to={`/game/${game.id}`} style={{ textDecoration: 'none' }}>
      <Card>
        <Thumbnail 
          src={game.thumbnail || `https://via.placeholder.com/300x300?text=${game.title}`} 
          alt={game.title} 
        />
        <GameInfo>
          <Title>
            {game.title}
            {game.isNew && <NewBadge>New</NewBadge>}
          </Title>
          <Rating>
            <span className="stars">{renderStars(parseFloat(game.rating))}</span>
            <span className="score">{game.rating}</span>
          </Rating>
        </GameInfo>
      </Card>
    </Link>
  );
};

export default GameCard;