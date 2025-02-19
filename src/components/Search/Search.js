import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const SearchContainer = styled.div`
  position: relative;
  width: 300px;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 10px 15px;
  border-radius: 20px;
  border: none;
  background: #333;
  color: white;
  font-size: 14px;

  &:focus {
    outline: none;
    background: #404040;
  }
`;

const SearchResults = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: #2a2a2a;
  border-radius: 8px;
  margin-top: 5px;
  max-height: 300px;
  overflow-y: auto;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  z-index: 1000;
`;

const SearchItem = styled.div`
  padding: 10px 15px;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;

  &:hover {
    background: #333;
  }

  img {
    width: 40px;
    height: 40px;
    border-radius: 4px;
    object-fit: cover;
  }

  .info {
    flex: 1;
    
    h4 {
      margin: 0;
      color: white;
    }

    .category {
      font-size: 0.8rem;
      color: #999;
    }
  }
`;

const Search = ({ games }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    const searchQuery = e.target.value;
    setQuery(searchQuery);

    if (searchQuery.trim()) {
      const filtered = games.filter(game => 
        game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        game.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setResults(filtered);
    } else {
      setResults([]);
    }
  };

  const handleSelect = (gameId) => {
    navigate(`/game/${gameId}`);
    setQuery('');
    setResults([]);
  };

  return (
    <SearchContainer>
      <SearchInput
        type="text"
        placeholder="搜索游戏..."
        value={query}
        onChange={handleSearch}
      />
      {results.length > 0 && (
        <SearchResults>
          {results.map(game => (
            <SearchItem key={game.id} onClick={() => handleSelect(game.id)}>
              <img src={game.thumbnail} alt={game.title} />
              <div className="info">
                <h4>{game.title}</h4>
                <div className="category">{game.category}</div>
              </div>
            </SearchItem>
          ))}
        </SearchResults>
      )}
    </SearchContainer>
  );
};

export default Search;