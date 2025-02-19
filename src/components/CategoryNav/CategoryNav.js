import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { gameCategories } from '../../data/games';
import GameWindow from '../GameWindow/GameWindow';

const NavContainer = styled.div`
  background: #2a2a2a;
  padding: 15px 0;
  margin-bottom: 30px;
`;

const NavContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  gap: 20px;
  overflow-x: auto;
  scrollbar-width: none;
  
  &::-webkit-scrollbar {
    display: none;
  }
`;

const CategoryLink = styled(Link)`
  color: ${props => props.active ? '#fff' : '#999'};
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 20px;
  background: ${props => props.active ? '#4a90e2' : 'transparent'};
  white-space: nowrap;
  transition: all 0.2s;

  &:hover {
    background: ${props => props.active ? '#4a90e2' : '#333'};
    color: white;
  }
`;

const PlayButton = styled.button`
  color: white;
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 20px;
  background: #4a90e2;
  white-space: nowrap;
  transition: all 0.2s;
  border: none;
  cursor: pointer;

  &:hover {
    background: #357abd;
  }
`;

const CategoryNav = () => {
  const [showGame, setShowGame] = useState(false);
  const location = useLocation();
  const currentCategory = location.pathname.split('/')[2];

  return (
    <NavContainer>
      <NavContent>
        <PlayButton onClick={() => setShowGame(true)}>
          Play Now
        </PlayButton>
        <CategoryLink 
          to="/category/shooting"
          active={(currentCategory === 'shooting').toString()}
        >
          Shooting
        </CategoryLink>
        <CategoryLink 
          to="/category/action"
          active={(currentCategory === 'action').toString()}
        >
          Action
        </CategoryLink>
        <CategoryLink 
          to="/category/adventure"
          active={(currentCategory === 'adventure').toString()}
        >
          Adventure
        </CategoryLink>
        <CategoryLink 
          to="/category/strategy"
          active={(currentCategory === 'strategy').toString()}
        >
          Strategy
        </CategoryLink>
        <CategoryLink 
          to="/category/multiplayer"
          active={(currentCategory === 'multiplayer').toString()}
        >
          Multiplayer
        </CategoryLink>
      </NavContent>
      {showGame && <GameWindow onClose={() => setShowGame(false)} />}
    </NavContainer>
  );
};

export default CategoryNav;