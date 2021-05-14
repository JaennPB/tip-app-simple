import styled from 'styled-components';
import { useSelector } from 'react-redux';

const StyledOutputSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const StyledResult = styled.p`
  background-color: ${(props) =>
    props.total ? props.theme.colors.primary : props.theme.colors.inputDark};
  color: ${(props) =>
    props.total ? props.theme.colors.font : props.theme.colors.tertiary};
  border-radius: ${(props) => props.theme.margins.borderRadius};
  padding: ${(props) => props.theme.margins.padding};
  box-shadow: ${(props) => props.theme.shadow.normal};

  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 2rem;
  font-weight: 300;
`;

const OutputSection = (props) => {
  const tip = useSelector((state) => state.tip);
  const tipPerPerson = useSelector((state) => state.tipPerPerson);
  const totalWithTip = useSelector((state) => state.totalWithTip);
  const tipPercent = useSelector((state) => state.tipPercent);
  const dividedBy = useSelector((state) => state.dividedBy);

  return (
    <StyledOutputSection>
      <StyledResult>
        Tip ({tipPercent}%): <span>${tip.toFixed(2)}</span>
      </StyledResult>
      <StyledResult>
        Tip per Person ({dividedBy}): <span>${tipPerPerson.toFixed(2)}</span>
      </StyledResult>
      <StyledResult total>
        Total with tip: <span>${totalWithTip.toFixed(2)}</span>
      </StyledResult>
    </StyledOutputSection>
  );
};

export default OutputSection;
