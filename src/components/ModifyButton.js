import styled from 'styled-components';

// =======================================================================================
// ============================================================================= styles

const StyledButton = styled.button`
  padding: ${(props) => props.theme.margins.padding};
  border-radius: ${(props) => props.theme.margins.borderRadius};
  background-color: ${(props) => props.theme.colors.inputDark};
  box-shadow: ${(props) => props.theme.shadow.normal};
  border: none;

  &:active {
    box-shadow: ${(props) => props.theme.shadow.clicked};
  }

  &:hover {
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  }
`;

// =======================================================================================
// ============================================================================= component

const ModifyButton = (props) => {
  return (
    <StyledButton onClick={props.clicked} disabled={props.disabled}>
      {props.children}
    </StyledButton>
  );
};

export default ModifyButton;
