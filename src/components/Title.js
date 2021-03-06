import styled from 'styled-components';

import icon from '../assets/hand.svg';

// =======================================================================================
// ============================================================================= styles

const StyledTitle = styled.h1`
  font-size: 3rem;
  font-weight: 300;
`;

const StyledIcon = styled.img`
  height: 6rem;
`;

// =======================================================================================
// ============================================================================= component

const Title = (props) => {
  return (
    <>
      <StyledIcon src={icon} />
      <StyledTitle>Tip App</StyledTitle>
    </>
  );
};

export default Title;
