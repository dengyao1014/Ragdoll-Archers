import React from 'react';
import styled from 'styled-components';
import GameCard from '../GameCard/GameCard';

const RelatedContainer = styled.div`
  margin-top: 30px;
  padding: 20px;
  background: #2a2a2a;
  border-radius: 8px;
`;

const Title = styled.h3`
  color: white;
  margin-bottom: 20px;
  font-size: 1.2rem;
`;

const GamesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 20px;
`;

const RelatedGames = ({ currentGame, games }) => {
  const relatedGames = games
    .filter(game => 
      game.category === currentGame.category && 
      game.id !== currentGame.id
    )
    .slice(0, 4);

  if (relatedGames.length === 0) return null;

  return (
    <RelatedContainer>
      <Title>相关游戏</Title>
      <GamesGrid>
        {relatedGames.map(game => (
          <GameCard key={game.id} game={game} />
        ))}
      </GamesGrid>
    </RelatedContainer>
  );
};

export default RelatedGames;