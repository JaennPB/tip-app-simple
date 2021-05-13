import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { setBillData, setTipData, setDividedByData } from '../store/reducer';

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

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  Firefox &[type='number'] {
    -moz-appearance: textfield;
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

  return (
    <>
      <div>
        <StyledLabel htmlFor="bill">Bill Amount</StyledLabel>
        <StyledInput
          type="number"
          id="bill"
          defaultValue="0.00"
          // value={billValue}
          onChange={(e) => sendBillData(e.target.value)}
        />
      </div>
      <div>
        <StyledLabel htmlFor="tip" className="margin">
          Tip percent %
        </StyledLabel>
        <StyledDiv>
          <ModifyButton>-</ModifyButton>
          <StyledInput2
            type="number"
            id="tip"
            defaultValue="15"
            // value={tipValue}
            onChange={(e) => sendTipData(e.target.value)}
          />
          <ModifyButton>+</ModifyButton>
        </StyledDiv>
      </div>
      <div>
        <StyledLabel htmlFor="people" className="margin">
          Divide by
        </StyledLabel>
        <StyledDiv>
          <ModifyButton>-</ModifyButton>
          <StyledInput2
            type="number"
            id="people"
            defaultValue="1"
            // value={dividedByValue}
            onChange={(e) => sendDividedByData(e.target.value)}
          />
          <ModifyButton>+</ModifyButton>
        </StyledDiv>
      </div>
    </>
  );
};

export default Inputs;
