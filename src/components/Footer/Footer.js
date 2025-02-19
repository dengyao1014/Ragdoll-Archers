import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FooterContainer = styled.div`
  background: #2a2a2a;
  padding: 40px 0;
  margin-top: 60px;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const FooterSection = styled.div`
  h3 {
    color: white;
    margin-bottom: 15px;
    font-size: 1.1rem;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 8px;
  }

  a {
    color: #999;
    transition: color 0.2s;
    
    &:hover {
      color: #4a90e2;
    }
  }
`;

const SocialIcon = styled.i`
  margin-right: 8px;
  font-size: 16px;
`;

const Copyright = styled.div`
  text-align: center;
  color: #666;
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid #333;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h3>Popular Games</h3>
          <ul>
            <li><Link to="/game/1">Ragdoll Archers</Link></li>
            <li><Link to="/game/2">Time Shooter 3</Link></li>
            <li><Link to="/game/3">Impostor Archer</Link></li>
          </ul>
        </FooterSection>

        <FooterSection>
          <h3>Categories</h3>
          <ul>
            <li><Link to="/category/shooting">Shooting</Link></li>
            <li><Link to="/category/action">Action</Link></li>
            <li><Link to="/category/adventure">Adventure</Link></li>
          </ul>
        </FooterSection>

        <FooterSection>
          <h3>About</h3>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
          </ul>
        </FooterSection>

        <FooterSection>
          <h3>Follow Us</h3>
          <ul>
            <li>
              <a href="https://twitter.com/ragdollgames" target="_blank" rel="noopener noreferrer">
                <SocialIcon className="fab fa-twitter" />Twitter
              </a>
            </li>
            <li>
              <a href="https://facebook.com/ragdollgames" target="_blank" rel="noopener noreferrer">
                <SocialIcon className="fab fa-facebook" />Facebook
              </a>
            </li>
            <li>
              <a href="https://discord.gg/ragdollgames" target="_blank" rel="noopener noreferrer">
                <SocialIcon className="fab fa-discord" />Discord
              </a>
            </li>
            <li>
              <a href="https://youtube.com/ragdollgames" target="_blank" rel="noopener noreferrer">
                <SocialIcon className="fab fa-youtube" />YouTube
              </a>
            </li>
          </ul>
        </FooterSection>
      </FooterContent>
      <Copyright>
        © 2024 Ragdoll Games. All rights reserved.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;