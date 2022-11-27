import styled, { keyframes } from 'styled-components';
import { fadeIn } from '../../shared/cssAnimation';

const scaleX = keyframes`
  from {
    transform: scaleX(0);
  }
  to{
    transform: scaleX(1);
  }
`;

export const SFinish = styled.main`
  height: 100vh;

  & > div:first-child {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  & > div:last-child {
    display: flex;
    justify-content: center;
    gap: 2rem;
  }

  h2 {
    opacity: 0;
    animation: ${fadeIn} 0.5s 0.5s forwards;
  }

  button {
    font-size: 2rem;
    color: var(--clr-primary);
    opacity: 0;
    animation: ${fadeIn} 0.5s 1.5s forwards;
  }
`;

export const SDarkBox = styled.div`
  margin-block: 1.5rem;
  padding: 2.5rem;
  font-size: 2.5rem;
  color: var(--clr-primary);
  background: linear-gradient(
      180deg,
      rgba(0, 255, 224, 0) 0%,
      rgba(0, 255, 224, 0.03) 59.9%,
      rgba(0, 255, 224, 0.12) 78.12%,
      rgba(0, 255, 224, 0.36) 100%
    ),
    rgba(10, 13, 20, 0.6);
  border: 2px solid var(--clr-primary);
  border-radius: 4rem;
  transform: scaleX(0);
  animation: ${scaleX} 0.5s 1s forwards;
`;

export const Wrap = styled.div`
  position: relative;
  text-align: center;

  & > span {
    display: block;
    margin-top: 3rem;
    margin-bottom: -2rem;
    opacity: 0;
    animation: ${fadeIn} 0.5s 4.5s forwards;
  }

  &:first-child > span {
    color: var(--clr-primary);
  }
  &:nth-child(2) > span {
    color: var(--clr-role-sm);
  }
  &:nth-child(3) > span {
    color: var(--clr-role-team1);
  }
  &:last-child > span {
    color: var(--clr-role-team2);
  }
`;
