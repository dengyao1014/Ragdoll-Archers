import React, { useState } from 'react';
import styled from 'styled-components';

const ControlsContainer = styled.div`
  background: rgba(0, 0, 0, 0.8);
  padding: 10px;
  border-radius: 4px;
  display: flex;
  gap: 15px;
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
`;

const ControlButton = styled.button`
  background: transparent;
  border: none;
  color: white;
  padding: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  
  &:hover {
    color: #4a90e2;
  }
`;

const GameControls = ({ onFullscreen }) => {
  const [isMuted, setIsMuted] = useState(false);

  return (
    <ControlsContainer>
      <ControlButton onClick={onFullscreen}>
        <span>⛶</span> Fullscreen
      </ControlButton>
      <ControlButton onClick={() => setIsMuted(!isMuted)}>
        <span>{isMuted ? '🔇' : '🔊'}</span>
        {isMuted ? 'Unmute' : 'Mute'}
      </ControlButton>
    </ControlsContainer>
  );
};

export default GameControls;