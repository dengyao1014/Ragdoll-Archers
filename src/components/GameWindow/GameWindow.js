import React from 'react';
import styled from 'styled-components';

const WindowContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80vw;
  height: 80vh;
  background: #1a1a1a;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0,0,0,0.5);
  z-index: 1000;
`;

const GameFrame = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
`;

const CloseButton = styled.button`
  position: absolute;
  top: -40px;
  right: 0;
  background: #ff4757;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  
  &:hover {
    background: #ff6b81;
  }
`;

const GameWindow = ({ onClose }) => {
  return (
    <WindowContainer>
      <CloseButton onClick={onClose}>Close</CloseButton>
      <GameFrame>
        <iframe 
          src="https://www.crazygames.com/embed/ragdoll-archers" 
          style={{ width: '100%', height: '100%' }} 
          frameBorder="0" 
          allow="gamepad *;"
          title="Ragdoll Archers"
        />
      </GameFrame>
    </WindowContainer>
  );
};

export default GameWindow;