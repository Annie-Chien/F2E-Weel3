import styled, { keyframes } from 'styled-components';

export const fadeout = keyframes`
  from{
    opacity: 1;
  }
  to{
    opacity: 0;
  }
`;

export const fadeOutLittle = keyframes`
  from{
    opacity: 1;
  }
  to{
    opacity: 0.3;
  }
`;

export const fadeIn = keyframes`
from{
  opacity: 0;
  transform: translateY(5px);
}
to{
  opacity: 1;
  transform: translateY(0px);
}
`;

export const grabIn = keyframes`
  from{
    opacity: 0;
    transform: translate(45rem, 25rem);
  }to{
    opacity: 1;
    transform: translate(0, 0);
  }
`;

// animated elements
export const FadeInParagraph = styled.p`
  opacity: 0;
  animation: ${fadeIn} 0.5s ${(props) => props.delay}s forwards;
  font-size: ${(props) => props.size ?? 'var(--fz-p)'};

  & > img {
    width: 8rem;
    display: inline-block;
    vertical-align: middle;
    margin-inline: 0.5rem;
  }
`;

export const FadeInBox = styled.div`
  opacity: 0;
  animation: ${fadeIn} 0.5s ${(props) => props.delay}s forwards;
`;
