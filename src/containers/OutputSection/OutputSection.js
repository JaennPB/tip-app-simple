import styled from 'styled-components';

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
`;

const OutputSection = (props) => {
  return (
    <StyledOutputSection>
      <StyledResult>
        Tip: <span>$3.99</span>
      </StyledResult>
      <StyledResult total>
        Total: <span>$12.99</span>
      </StyledResult>
    </StyledOutputSection>
  );
};

export default OutputSection;
