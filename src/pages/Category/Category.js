import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { games } from '../../data/games';
import GameCard from '../../components/GameCard/GameCard';
import CategoryNav from '../../components/CategoryNav/CategoryNav';

const CategoryContainer = styled.div`
  background: #1a1a1a;
  min-height: 100vh;
  color: white;
`;

const CategoryContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const CategoryHeader = styled.div`
  margin-bottom: 30px;
  
  h1 {
    font-size: 2rem;
    margin-bottom: 10px;
  }
  
  p {
    color: #999;
  }
`;

const GamesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
`;

const NoGames = styled.div`
  text-align: center;
  padding: 50px;
  color: #666;
`;

const Category = () => {
  const { category } = useParams();
  const categoryGames = games.filter(game => game.category === category);

  return (
    <CategoryContainer>
      <CategoryNav />
      <CategoryContent>
        <CategoryHeader>
          <h1>{category}游戏</h1>
          <p>共 {categoryGames.length} 个游戏</p>
        </CategoryHeader>
        
        {categoryGames.length > 0 ? (
          <GamesGrid>
            {categoryGames.map(game => (
              <GameCard key={game.id} game={game} />
            ))}
          </GamesGrid>
        ) : (
          <NoGames>
            该分类下暂无游戏
          </NoGames>
        )}
      </CategoryContent>
    </CategoryContainer>
  );
};

export default Category;