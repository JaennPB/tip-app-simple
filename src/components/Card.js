import styled from 'styled-components';

const StyledCard = styled.section`
  background-color: ${(props) => props.theme.colors.card};
  color: ${(props) => props.theme.colors.font};
  border-radius: ${(props) => props.theme.margins.borderRadius};
  box-shadow: ${(props) => props.theme.shadow.card};
  height: fit-content;
  width: 70%;
  margin-bottom: 3rem;
  padding: 3rem 4.5rem;
`;

const Card = (props) => {
  return <StyledCard>{props.children}</StyledCard>;
};

export default Card;
