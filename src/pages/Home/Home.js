import React from 'react';
import styled from 'styled-components';
import CategoryNav from '../../components/CategoryNav/CategoryNav';
import GameCard from '../../components/GameCard/GameCard';
import { games } from '../../data/games';

const HomeContainer = styled.div`
  background: #1a1a1a;
  min-height: 100vh;
  color: white;
`;

const Header = styled.header`
  background: #2a2a2a;
  padding: 1rem;
  position: sticky;
  top: 0;
  z-index: 100;
`;

const SearchBar = styled.div`
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  gap: 10px;
  
  input {
    flex: 1;
    padding: 8px 15px;
    border-radius: 20px;
    border: none;
    background: #333;
    color: white;
    
    &:focus {
      outline: none;
      background: #444;
    }
  }
`;

const MainContent = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const GamesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  padding: 20px 0;
`;

const CategoryTitle = styled.h2`
  margin: 30px 0 20px;
  font-size: 1.5rem;
  color: #fff;
`;

const GameContainer = styled.div`
  width: 100%;
  height: 70vh;
  background: #2a2a2a;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 30px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const GameHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const GameTitle = styled.h1`
  font-size: 2rem;
  color: #fff;
  margin: 0;
`;

const GameDescription = styled.p`
  color: #999;
  margin-bottom: 20px;
`;

const FaqSection = styled.section`
  margin-top: 40px;
  padding: 30px;
  background: #2a2a2a;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const FaqGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 20px;
`;

const FaqCard = styled.div`
  background: #333;
  padding: 20px;
  border-radius: 8px;
  
  h3 {
    color: #4a90e2;
    margin-bottom: 15px;
    font-size: 1.2rem;
  }
  
  p, ul {
    color: #999;
    line-height: 1.6;
  }

  ul {
    padding-left: 20px;
  }
`;

const LeaderboardSection = styled(FaqSection)`
  margin-top: 30px;
`;

const LeaderboardTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  
  th, td {
    padding: 12px;
    text-align: left;
    border-bottom: 1px solid #444;
  }
  
  th {
    color: #4a90e2;
    font-weight: 500;
  }
  
  td {
    color: #999;
  }
`;

const ReviewSection = styled(FaqSection)`
  margin-top: 30px;
`;

const ReviewCard = styled(FaqCard)`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ReviewHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ReviewerAvatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #4a90e2;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
`;

const Home = () => {
  return (
    <HomeContainer>
      <CategoryNav />
      <MainContent>
        <GameHeader>
          <div>
            <GameTitle>Ragdoll Archers</GameTitle>
            <GameDescription>
              A physics-based archery game with unique ragdoll mechanics
            </GameDescription>
          </div>
        </GameHeader>
        <GameContainer>
          <iframe 
            src="https://www.crazygames.com/embed/ragdoll-archers" 
            style={{ width: '100%', height: '100%' }} 
            frameBorder="0" 
            allow="gamepad *;"
            title="Ragdoll Archers"
          />
        </GameContainer>
        <CategoryTitle>More Games</CategoryTitle>
        <GamesGrid>
          {games.map(game => (
            <GameCard key={game.id} game={game} />
          ))}
        </GamesGrid>

        <FaqSection>
          <CategoryTitle>Game Guide</CategoryTitle>
          <FaqGrid>
            <FaqCard>
              <h3>How to Play</h3>
              <ul>
                <li>Aim with your mouse</li>
                <li>Hold left click to charge shot</li>
                <li>Release to fire arrows</li>
                <li>Use WASD for movement</li>
                <li>Space to jump/double jump</li>
              </ul>
            </FaqCard>

            <FaqCard>
              <h3>Game Features</h3>
              <ul>
                <li>Physics-based combat</li>
                <li>Realistic ragdoll effects</li>
                <li>Multiple game modes</li>
                <li>Local multiplayer support</li>
                <li>Custom match settings</li>
              </ul>
            </FaqCard>

            <FaqCard>
              <h3>Pro Tips</h3>
              <ul>
                <li>Master the charge timing</li>
                <li>Use cover effectively</li>
                <li>Watch for wind effects</li>
                <li>Aim for headshots</li>
                <li>Practice movement combos</li>
              </ul>
            </FaqCard>

            <FaqCard>
              <h3>System Requirements</h3>
              <ul>
                <li>Modern web browser</li>
                <li>Stable internet connection</li>
                <li>Mouse and keyboard</li>
                <li>2GB RAM minimum</li>
                <li>No download needed</li>
              </ul>
            </FaqCard>
          </FaqGrid>
        </FaqSection>
      </MainContent>
    </HomeContainer>
  );
};

export default Home;