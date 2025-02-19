import React from 'react';
import styled from 'styled-components';

const ErrorContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: #1a1a1a;
  color: white;
  text-align: center;
`;

const ErrorMessage = styled.div`
  background: #2a2a2a;
  padding: 20px;
  border-radius: 8px;
  max-width: 600px;
  
  h2 {
    color: #ff4757;
    margin-bottom: 15px;
  }
`;

const RetryButton = styled.button`
  background: #4a90e2;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  margin-top: 20px;
  cursor: pointer;

  &:hover {
    background: #357abd;
  }
`;

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error:', error);
    console.error('Error Info:', errorInfo);
  }

  handleRetry = () => {
    this.setState({ hasError: false });
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <ErrorContainer>
          <ErrorMessage>
            <h2>出错了！</h2>
            <p>抱歉，页面加载出现问题。</p>
            <RetryButton onClick={this.handleRetry}>
              重试
            </RetryButton>
          </ErrorMessage>
        </ErrorContainer>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;