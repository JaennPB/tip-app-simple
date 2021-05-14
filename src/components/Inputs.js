import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import ModifyButton from './ModifyButton';

import {
  setBillData,
  setTipData,
  setDividedByData,
  increaseValue,
  decreaseValue,
} from '../store/reducer';

// =======================================================================================
// ============================================================================= styles

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

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const StyledInput2 = styled(StyledInput)`
  margin: 0 1rem 0 1rem;
`;

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

// =======================================================================================
// ============================================================================= component

const Inputs = (props) => {
  const dispatch = useDispatch();

  const billValue = useSelector((state) => state.billAmount);
  const tipValue = useSelector((state) => state.tipPercent);
  const dividedByValue = useSelector((state) => state.dividedBy);

  const sendBillData = (billAmount) => {
    dispatch(setBillData(billAmount));
  };

  const sendTipData = (tipPercent) => {
    dispatch(setTipData(tipPercent));
  };

  const sendDividedByData = (dividedBy) => {
    dispatch(setDividedByData(dividedBy));
  };

  const increaseValueHandler = (target) => {
    dispatch(increaseValue(target));
  };

  const decreaseValueHandler = (target) => {
    dispatch(decreaseValue(target));
  };

  return (
    <>
      <div>
        <StyledLabel htmlFor="bill">Bill amount $</StyledLabel>
        <StyledInput
          type="number"
          id="bill"
          value={!billValue ? '' : billValue}
          onChange={(e) => sendBillData(e.target.value)}
          placeholder="Bill Amount"
          min="1"
        />
      </div>
      <div>
        <StyledLabel htmlFor="tip" className="margin">
          Tip percent %
        </StyledLabel>
        <StyledDiv>
          <ModifyButton
            clicked={() => decreaseValueHandler('tip')}
            disabled={tipValue === 1}
          >
            -
          </ModifyButton>
          <StyledInput2
            type="number"
            id="tip"
            value={!tipValue ? '' : tipValue}
            onChange={(e) => sendTipData(e.target.value)}
            placeholder="Tip in percentage"
            min="1"
            max="100"
          />
          <ModifyButton
            clicked={() => increaseValueHandler('tip')}
            disabled={tipValue === 100}
          >
            +
          </ModifyButton>
        </StyledDiv>
      </div>
      <div>
        <StyledLabel htmlFor="people" className="margin">
          Divide by
        </StyledLabel>
        <StyledDiv>
          <ModifyButton
            clicked={() => decreaseValueHandler('people')}
            disabled={dividedByValue === 1}
          >
            -
          </ModifyButton>
          <StyledInput2
            type="number"
            id="people"
            value={!dividedByValue ? '' : dividedByValue}
            onChange={(e) => sendDividedByData(e.target.value)}
            placeholder="Number of people"
            min="1"
          />
          <ModifyButton clicked={() => increaseValueHandler('people')}>
            +
          </ModifyButton>
        </StyledDiv>
      </div>
    </>
  );
};

export default Inputs;
