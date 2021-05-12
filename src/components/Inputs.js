import styled from 'styled-components';

import ModifyButton from './ModifyButton';

const StyledLabel = styled.label`
  display: block;
  margin-bottom: 1rem;
`;

const StyledInput = styled.input`
  padding: 1rem 2rem;
  width: auto;
  outline: none;
  border: none;
  margin-bottom: 1rem;
`;

const StyledBillInput = styled(StyledInput)`
  width: 100%;
`;

const Inputs = (props) => {
  return (
    <>
      <div>
        <StyledLabel htmlFor="bill">Bill</StyledLabel>
        <StyledBillInput
          type="number"
          placeholder="Your total bill"
          id="bill"
        />
      </div>
      <div>
        <StyledLabel htmlFor="tip">Tip</StyledLabel>
        <ModifyButton>-</ModifyButton>
        <StyledInput type="text" id="tip" defaultValue="15%" />
        <ModifyButton>+</ModifyButton>
      </div>
    </>
  );
};

export default Inputs;
