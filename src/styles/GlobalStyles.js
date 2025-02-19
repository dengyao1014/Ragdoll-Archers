import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background: #1a1a1a;
    color: white;
    line-height: 1.5;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
    border: none;
    background: #4a90e2;
    color: white;
    padding: 8px 16px;
    border-radius: 4px;
    font-size: 14px;
    transition: background 0.2s;

    &:hover {
      background: #357abd;
    }
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #2a2a2a;
  }

  ::-webkit-scrollbar-thumb {
    background: #4a4a4a;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #5a5a5a;
  }
`;

export default GlobalStyles;