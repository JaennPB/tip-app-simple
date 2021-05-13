import styled, { css } from 'styled-components';

import Inputs from '../../components/Inputs';
import Button from '../../components/Button';

const StyledInputSection = styled.div`
  display: flex;
  flex-direction: column;
  ${(props) =>
    props.buttonSection &&
    css`
      flex-direction: row;
      justify-content: space-evenly;
    `}

  &.margin {
    margin-top: 3rem;
  }
`;

const InputSection = (props) => {
  return (
    <>
      <StyledInputSection>
        <Inputs />
      </StyledInputSection>
      <StyledInputSection className="margin" buttonSection>
        <Button>Clear</Button>
        <Button primary="true">Calculate</Button>
      </StyledInputSection>
    </>
  );
};

export default InputSection;
