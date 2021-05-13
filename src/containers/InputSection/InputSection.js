import styled, { css } from 'styled-components';
import { useDispatch } from 'react-redux';

import { calculateBill } from '../../store/reducer';

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
  const dispatch = useDispatch();

  const calculateHandler = () => {
    dispatch(calculateBill());
  };

  return (
    <>
      <StyledInputSection>
        <Inputs />
      </StyledInputSection>
      <StyledInputSection className="margin" buttonSection>
        <Button>Clear</Button>
        <Button primary="true" clicked={calculateHandler}>
          Calculate
        </Button>
      </StyledInputSection>
    </>
  );
};

export default InputSection;
