import styled, { css } from 'styled-components';

// =======================================================================================
// ============================================================================= styles

const StyledCard = styled.section`
  background-color: ${(props) => props.theme.colors.card};
  color: ${(props) => props.theme.colors.font};
  border-radius: ${(props) => props.theme.margins.borderRadius};
  box-shadow: ${(props) => props.theme.shadow.card};
  height: fit-content;
  width: 70%;
  padding: 2.5rem 4rem;

  &:not(:last-child) {
    margin-bottom: 2rem;
  }

  ${(props) =>
    props.isTitle &&
    css`
      display: flex;
      align-items: center;
      gap: 2rem;
      padding: 1.6rem 3.5rem;
    `}
`;

// =======================================================================================
// ============================================================================= component

const Card = (props) => {
  return <StyledCard isTitle={props.title}>{props.children}</StyledCard>;
};

export default Card;
