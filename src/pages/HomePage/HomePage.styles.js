import styled, { keyframes } from 'styled-components';
import { translateY } from '../../shared/framerMotion';

export const SHome = styled.main`
  width: 100vw;
  height: 100vh;
  background-color: var(--clr-bg-dark);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SHeading = styled.div`
  width: 90rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translateY(-5rem);
  position: relative;
  z-index: 10;
  transition: all 0.5s;

  visibility: ${(props) => (props.isStart ? 'hidden' : 'visible')};
  opacity: ${(props) => (props.isStart ? '0' : '1')};

  & > h2 {
    margin: -20rem 0 2rem;
  }
`;

export const SFrontLeaves = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 5;
  overflow: hidden;

  & > * {
    transition: all 1s 0.5s;
  }
  /* Left Bottom */
  & > div:first-child {
    transform: ${(props) =>
      props.isStart ? 'translate(-100%, 100%)' : 'none'};
  }
  /* Right Bottom */
  & > div:nth-child(2) {
    transform: ${(props) => (props.isStart ? 'translate(100%, 100%)' : 'none')};
  }
  /* TOP */
  & > div:nth-child(3) {
    transform: ${(props) => (props.isStart ? 'translateY(-100%)' : 'none')};
  }
  /* Left Top */
  & > div:last-child {
    transform: ${(props) =>
      props.isStart ? 'translate(-100%, -100%)' : 'none'};
  }
`;

export const SBackLeaves = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
  overflow: hidden;

  & > * {
    transition: all 1s 0.5s;
  }
  /* Top */
  & > div:first-child {
    transform: ${(props) => (props.isAccept ? 'translateY(-100%)' : 'none')};
  }
  /* Left */
  & > div:nth-child(2) {
    transform: ${(props) => (props.isAccept ? 'translateX(-100%)' : 'none')};
  }
  /* Bottom */
  & > div:nth-child(3) {
    transform: ${(props) => (props.isAccept ? 'translateY(100%)' : 'none')};
  }
  /* Right */
  & > div:last-child {
    transform: ${(props) => (props.isAccept ? 'translateX(100%)' : 'none')};
  }
`;

export const SSecretSound = styled.div`
  width: 60%;
  max-width: 90rem;
  height: 50%;
  margin: auto;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0%;
  z-index: 100;
  display: grid;
  justify-items: center;
  gap: 4rem;
  transition: all 0.5s ${(props) => (props.isAccept ? '0s' : '1.5s')};
  visibility: ${(props) =>
    props.isAccept ? 'hidden' : props.isStart ? 'visible' : 'hidden'};
  opacity: ${(props) => (props.isAccept ? '0' : props.isStart ? '1' : '0')};

  p {
    transition: opacity 0.5s 2s;
    opacity: ${(props) => (props.isStart ? '1' : '0')};
  }

  p:last-child {
    transition: opacity 0.5s 2.5s;
  }

  & > button:last-child {
    transition: opacity 0.5s 3s;
    opacity: ${(props) => (props.isStart ? '1' : '0')};
  }
`;
