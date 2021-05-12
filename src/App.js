import styled from 'styled-components';

import Card from './components/Card';
import InputSection from './containers/InputSection/InputSection';

const MainSection = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100vh;
  background-color: ${(props) => props.theme.colors.background};

  font-size: 1.6rem;
`;

const App = () => {
  return (
    <MainSection>
      <Card>
        <InputSection />
      </Card>
      <Card>Results</Card>
    </MainSection>
  );
};

export default App;
