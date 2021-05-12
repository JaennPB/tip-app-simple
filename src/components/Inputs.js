import styled from 'styled-components';

import ModifyButton from './ModifyButton';

const StyledLabel = styled.label`
  display: block;
  margin-bottom: 1rem;
  font-size: 1.9rem;

  &.last {
    margin-top: 1rem;
  }
`;

const StyledInput = styled.input`
  padding: 1rem 2rem;
  background-color: ${(props) => props.theme.colors.inputLight};
  width: 100%;
  outline: none;
  border: none;
  border-radius: 0.5rem;
  text-align: center;
`;

const StyledTipInput = styled(StyledInput)`
  margin: 0 1rem 0 1rem;
`;

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const Inputs = (props) => {
  return (
    <>
      <div>
        <StyledLabel htmlFor="bill">Bill</StyledLabel>
        <StyledInput type="number" placeholder="Your total bill" id="bill" />
      </div>
      <div>
        <StyledLabel htmlFor="tip" className="last">
          Tip
        </StyledLabel>
        <StyledDiv>
          <ModifyButton>-</ModifyButton>
          <StyledTipInput type="text" id="tip" defaultValue="15%" />
          <ModifyButton>+</ModifyButton>
        </StyledDiv>
      </div>
    </>
  );
};

export default Inputs;
