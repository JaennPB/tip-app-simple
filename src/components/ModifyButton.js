import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  background-color: ${(props) => props.theme.colors.inputDark};
  border: none;
`;

const ModifyButton = (props) => {
  return <StyledButton>{props.children}</StyledButton>;
};

export default ModifyButton;
