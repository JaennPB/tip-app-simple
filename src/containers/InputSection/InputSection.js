import styled, { css } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import Inputs from '../../components/Inputs';
import Button from '../../components/Button';

import { calculateBill, clearInputs } from '../../store/reducer';

// =======================================================================================
// ============================================================================= styles

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

// =======================================================================================
// ============================================================================= component

const InputSection = (props) => {
  const billValue = useSelector((state) => state.billAmount);
  const tipValue = useSelector((state) => state.tipPercent);

  const dispatch = useDispatch();

  const calculateHandler = () => {
    if (billValue && tipValue) {
      dispatch(calculateBill());
    } else {
      alert('Please add valid data 😉');
    }
  };

  const clearInputsHandler = () => {
    dispatch(clearInputs());
  };

  return (
    <>
      <StyledInputSection>
        <Inputs />
      </StyledInputSection>
      <StyledInputSection className="margin" buttonSection>
        <Button clicked={clearInputsHandler}>Clear</Button>
        <Button primary="true" clicked={calculateHandler}>
          Calculate
        </Button>
      </StyledInputSection>
    </>
  );
};

export default InputSection;
