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
  font-weight: 300;
`;

const OutputSection = (props) => {
  return (
    <StyledOutputSection>
      <StyledResult>
        Tip (15%): <span>$10.00</span>
      </StyledResult>
      <StyledResult>
        Tip per Person (2): <span>$5.00</span>
      </StyledResult>
      <StyledResult total>
        Total with tip: <span>$110.00</span>
      </StyledResult>
    </StyledOutputSection>
  );
};

export default OutputSection;
