import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { gameCategories } from '../../data/games';

const Nav = styled.nav`
  background: #2a2a2a;
  padding: 15px 0;
  border-bottom: 1px solid #333;
  position: sticky;
  top: 0;
  z-index: 100;
`;

const NavContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

const Logo = styled(Link)`
  font-size: 24px;
  font-weight: bold;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  white-space: nowrap;
  img {
    height: 30px;
    width: auto;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;
`;

const NavLink = styled(Link)`
  color: #fff;
  padding: 8px 12px;
  border-radius: 4px;
  transition: background 0.2s;

  &:hover {
    background: #333;
  }

  &.active {
    background: #4a90e2;
  }
`;

const SearchBar = styled.div`
  position: relative;
  width: 300px;

  input {
    width: 100%;
    padding: 8px 12px;
    border-radius: 4px;
    border: none;
    background: #333;
    color: #fff;
    font-size: 14px;

    &:focus {
      outline: none;
      background: #404040;
    }
  }

  button {
    position: absolute;
    right: 5px;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    color: #666;
    cursor: pointer;

    &:hover {
      color: #fff;
    }
  }
`;

const Navigation = () => {
  return (
    <Nav>
      <NavContent>
        <Logo to="/">
          <img src="/images/logo.svg" alt="Ragdoll Games" />
          Ragdoll Games
        </Logo>
        <NavLinks>
          <NavLink to="/category/shooting">Shooting</NavLink>
          <NavLink to="/category/action">Action</NavLink>
          <NavLink to="/category/adventure">Adventure</NavLink>
          <NavLink to="/category/strategy">Strategy</NavLink>
          <NavLink to="/category/multiplayer">Multiplayer</NavLink>
        </NavLinks>
      </NavContent>
    </Nav>
  );
};

export default Navigation;