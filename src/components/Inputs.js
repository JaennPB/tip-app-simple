import styled from 'styled-components';

import ModifyButton from './ModifyButton';

const StyledLabel = styled.label`
  display: block;
  margin-bottom: 1rem;
  font-size: 1.9rem;

  &.margin {
    margin-top: 1rem;
  }
`;

const StyledInput = styled.input`
  padding: ${(props) => props.theme.margins.padding};
  background-color: ${(props) => props.theme.colors.inputLight};
  border-radius: ${(props) => props.theme.margins.borderRadius};
  color: ${(props) => props.theme.colors.tertiary};
  width: 100%;
  outline: none;
  border: none;
  text-align: center;
`;

const StyledInput2 = styled(StyledInput)`
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
        <StyledInput type="text" id="bill" defaultValue="$0.00" />
      </div>
      <div>
        <StyledLabel htmlFor="tip" className="margin">
          Tip
        </StyledLabel>
        <StyledDiv>
          <ModifyButton>-</ModifyButton>
          <StyledInput2 type="text" id="tip" defaultValue="15%" />
          <ModifyButton>+</ModifyButton>
        </StyledDiv>
      </div>
      <div>
        <StyledLabel htmlFor="people" className="margin">
          Number of people
        </StyledLabel>
        <StyledDiv>
          <ModifyButton>-</ModifyButton>
          <StyledInput2 type="text" id="people" defaultValue="1" />
          <ModifyButton>+</ModifyButton>
        </StyledDiv>
      </div>
    </>
  );
};

export default Inputs;
