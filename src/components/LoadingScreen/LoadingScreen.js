// ... 保持导入和样式不变 ...

const LoadingScreen = ({ progress = 0, text = "Loading..." }) => {
  return (
    <LoadingContainer>
      <Spinner />
      <LoadingText>{text}</LoadingText>
      <ProgressBar>
        <Progress progress={progress} />
      </ProgressBar>
    </LoadingContainer>
  );
};

export default LoadingScreen;