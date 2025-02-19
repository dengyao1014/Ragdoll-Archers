import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { useParams, Link } from 'react-router-dom';
import { games } from '../../data/games';
import Loading from '../../components/Loading/Loading';
import RelatedGames from '../../components/RelatedGames/RelatedGames';
import GameControls from '../../components/GameControls/GameControls';

const GameContainer = styled.div`
  background: #1a1a1a;
  min-height: 100vh;
  color: white;
`;

const TopBar = styled.div`
  background: #2a2a2a;
  padding: 15px 20px;
  display: flex;
  align-items: center;
  gap: 20px;
`;

const GameContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 20px;
`;

const GameFrame = styled.div`
  background: #2a2a2a;
  border-radius: 8px;
  overflow: hidden;
  aspect-ratio: 16/9;
  position: relative;
`;

const GameTitle = styled.h1`
  margin: 0;
  font-size: 1.5rem;
`;

const BackButton = styled(Link)`
  color: white;
  padding: 8px 16px;
  border-radius: 4px;
  background: #4a90e2;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9rem;

  &:hover {
    background: #357abd;
  }
`;

const GameInfo = styled.div`
  background: #2a2a2a;
  border-radius: 8px;
  padding: 20px;
`;

const InfoTabs = styled.div`
  display: flex;
  gap: 2px;
  margin-bottom: 15px;
`;

const Tab = styled.button`
  background: ${props => props.active ? '#4a90e2' : '#333'};
  color: white;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  
  &:hover {
    background: ${props => props.active ? '#4a90e2' : '#444'};
  }
`;

const Game = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('info');
  const gameFrameRef = useRef(null);
  const { id } = useParams();
  const game = games.find(g => g.id === parseInt(id));

  if (!game) return <div>Game not found</div>;

  return (
    <GameContainer>
      <TopBar>
        <BackButton to="/">← Back to Home</BackButton>
        <GameTitle>{game.title}</GameTitle>
      </TopBar>

      <GameContent>
        <div>
          <GameFrame ref={gameFrameRef}>
            {isLoading && <Loading />}
            <iframe
              src={game.url}
              title={game.title}
              width="100%"
              height="100%"
              frameBorder="0"
              allowFullScreen
              onLoad={() => setIsLoading(false)}
            />
            <GameControls onFullscreen={() => gameFrameRef.current?.requestFullscreen()} />
          </GameFrame>
          <RelatedGames currentGame={game} games={games} />
        </div>

        <GameInfo>
          <InfoTabs>
            <Tab 
              active={activeTab === 'info'} 
              onClick={() => setActiveTab('info')}
            >
              Game Info
            </Tab>
            <Tab 
              active={activeTab === 'controls'} 
              onClick={() => setActiveTab('controls')}
            >
              Controls
            </Tab>
          </InfoTabs>

          {activeTab === 'info' && (
            <>
              <h2>Game Information</h2>
              <p>{game.description}</p>
              {game.features && (
                <>
                  <h3>Features</h3>
                  <ul>
                    <li>Players: {game.features.players}</li>
                    {game.features.mode && (
                      <li>Game Modes: {game.features.mode.join(', ')}</li>
                    )}
                  </ul>
                </>
              )}
            </>
          )}

          {activeTab === 'controls' && (
            <>
              <h2>Controls</h2>
              {game.features?.controls && (
                <ul>
                  {Object.entries(game.features.controls).map(([key, value]) => (
                    <li key={key}>{key}: {value}</li>
                  ))}
                </ul>
              )}
            </>
          )}
        </GameInfo>
      </GameContent>
    </GameContainer>
  );
};

export default Game;