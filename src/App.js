import styled from 'styled-components';

const Test = styled.p`
  color: ${(props) => props.theme.colors.primary};
`;

const App = () => {
  return <Test>test</Test>;
};

export default App;
