import styled from 'styled-components';

const StyledButton = styled.button`
  padding: ${(props) => props.theme.margins.padding};
  border-radius: ${(props) => props.theme.margins.borderRadius};
  background-color: ${(props) => props.theme.colors.inputDark};
  box-shadow: ${(props) => props.theme.shadow.normal};
  border: none;

  &:active {
    box-shadow: ${(props) => props.theme.shadow.clicked};
  }
`;

const ModifyButton = (props) => {
  return <StyledButton>{props.children}</StyledButton>;
};

export default ModifyButton;
