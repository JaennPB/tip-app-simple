import styled from 'styled-components';

import Title from './components/Title';
import Card from './components/Card';
import InputSection from './containers/InputSection/InputSection';
import OutputSection from './containers/OutputSection/OutputSection';

// =======================================================================================
// ============================================================================= styles

const MainSection = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100vh;
  background-color: ${(props) => props.theme.colors.tertiary};

  font-size: 1.6rem;
`;

// =======================================================================================
// ============================================================================= component

const App = () => {
  return (
    <MainSection>
      <Card title>
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
