import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 1rem 2rem;
  background-color: ${(props) => props.theme.colors.font};
  border: none;
`;

const ModifyButton = (props) => {
  return <StyledButton>{props.children}</StyledButton>;
};

export default ModifyButton;
