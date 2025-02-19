import React from 'react';
import styled from 'styled-components';
import GameCard from '../../components/GameCard/GameCard';
import { games } from '../../data/games';

const HomeContainer = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.header`
  text-align: center;
  padding: 2rem 0;
  background: #333;
  color: white;
  margin-bottom: 2rem;
`;

const GamesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;
`;

const Home = () => {
  return (
    <>
      <Header>
        <h1>游戏中心</h1>
        <p>发现精彩游戏</p>
      </Header>
      <HomeContainer>
        <GamesGrid>
          {games.map(game => (
            <GameCard key={game.id} game={game} />
          ))}
        </GamesGrid>
      </HomeContainer>
    </>
  );
};

export default Home;