import styled from 'styled-components';

import Title from './components/Title';
import Card from './components/Card';
import InputSection from './containers/InputSection/InputSection';
import OutputSection from './containers/OutputSection/OutputSection';

const MainSection = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100vh;
  background-color: ${(props) => props.theme.colors.tertiary};

  font-size: 1.6rem;
`;

const App = () => {
  return (
    <MainSection>
      <Card>
        <Title />
      </Card>
      <Card>
        <InputSection />
      </Card>
      <Card>
        <OutputSection />
      </Card>
    </MainSection>
  );
};

export default App;
