import styled from 'styled-components';

const StyledCard = styled.section`
  background-color: ${(props) => props.theme.colors.card};
  color: ${(props) => props.theme.colors.font};
  height: fit-content;
  width: 70%;
  margin-bottom: 5rem;
  border-radius: 1rem;
  padding: 4rem 6rem;
`;

const Card = (props) => {
  return <StyledCard>{props.children}</StyledCard>;
};

export default Card;
