import styled from 'styled-components';

import Inputs from '../../components/Inputs';

const StyledInputSection = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const InputSection = (props) => {
  return (
    <StyledInputSection>
      <Inputs />
    </StyledInputSection>
  );
};

export default InputSection;
