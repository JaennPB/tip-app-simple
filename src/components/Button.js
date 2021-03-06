import styled from 'styled-components';

// =======================================================================================
// ============================================================================= styles

const StyledButton = styled.button`
  background-color: ${(props) =>
    props.color ? props.theme.colors.primary : props.theme.colors.secondary};
  border-radius: ${(props) => props.theme.margins.borderRadius};
  padding: ${(props) => props.theme.margins.padding};
  color: ${(props) => props.theme.colors.font};
  box-shadow: ${(props) => props.theme.shadow.normal};
  outline: none;
  border: none;
  font-size: 2rem;
  font-weight: 300;

  &:active {
    box-shadow: ${(props) => props.theme.shadow.clicked};
  }

  &:hover {
    cursor: pointer;
  }
`;

// =======================================================================================
// ============================================================================= component

const Button = (props) => {
  return (
    <StyledButton color={props.primary} onClick={props.clicked}>
      {props.children}
    </StyledButton>
  );
};

export default Button;
