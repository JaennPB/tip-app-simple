import styled from 'styled-components';

import Inputs from '../../components/Inputs';
import Button from '../../components/Button';

const StyledInputSection = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const InputSection = (props) => {
  return (
    <StyledInputSection>
      <Inputs />
      <Button>Calculate</Button>
    </StyledInputSection>
  );
};

export default InputSection;
