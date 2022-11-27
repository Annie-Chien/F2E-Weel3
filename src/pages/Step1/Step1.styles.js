import styled, { keyframes, css } from 'styled-components';
//Framer motion
import { motion } from 'framer-motion';
import { fadeOutLittle } from '../../shared/cssAnimation';

const bgFadeout = keyframes`
  from{
    opacity: 1;
  }
  to{
    opacity: 0;
  }
`;

const fadeIn = keyframes`
from{
  opacity: 0;
  visibility: hidden;
  transform: translateY(5px);
}
to{
  opacity: 1;
  visibility: visible;
  transform: translateY(0px);
}
`;

export const SStep1 = styled.main`
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: var(--clr-bg-dark);
    animation: ${bgFadeout} 2s forwards;
  }
`;

export const SContinueHint = styled.span`
  width: 22rem;
  padding-block: 1rem;
  display: block;
  text-align: center;
  color: var(--clr-primary);
  border: 2px solid var(--clr-primary);
  border-radius: 2rem;
  opacity: 0;
  animation: ${fadeIn} 0.5s 4s forwards;
`;

export const CenterContainer = styled.div`
  width: 100%;
  height: 70%;
  display: grid;
  place-content: center;
  position: relative;

  & > button {
    position: absolute;
    bottom: 1rem;
    right: 5rem;
    opacity: 0;
    visibility: hidden;
    animation: ${fadeIn} 0.5s 1s forwards;
  }
`;

export const SStory = styled.div`
  width: max-content;
  padding: 1.2rem 2.4rem;
  font-size: var(--fz-p);
  background-color: var(--clr-bg-gray60);
  border: 4px solid var(--clr-primary);
  border-radius: 2rem;
  position: absolute;
  left: ${(props) => props.left ?? 'auto'} !important;
  top: ${(props) => props.top ?? 'auto'} !important;
  right: ${(props) => props.right ?? 'auto'};
  bottom: ${(props) => props.bottom ?? 'auto'};
  z-index: 100;
  ${(props) =>
    props.fadeOut
      ? css`
          animation: ${fadeOutLittle} 1s 0.5s forwards;
        `
      : css`
          animation: none;
        `}
`;

export const SDoneBg = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  background: var(--gradient-primary);
`;
