import styled from 'styled-components';
//Animation
import { grabIn } from '../../shared/cssAnimation';

export const SBacklog = styled.div`
  width: 45rem;
  background: rgba(0, 255, 224, 0.3);
  backdrop-filter: blur(5px);
  border-radius: 2rem;
  // FIXME:
  box-shadow: 12px 12px rgba(0, 255, 224, 0.2), 24px 24px rgba(0, 255, 224, 0.2);
  position: relative;
`;

export const SDecoLight = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: radial-gradient(
    50% 50% at 50% 50%,
    #00ffe0 0%,
    rgba(0, 255, 224, 0) 100%
  );
  opacity: 0.9;
  backdrop-filter: blur(5px);
  border-radius: 2rem;
  z-index: -1;
`;

export const SBacklogHeader = styled.div`
  padding-block: 1.5rem;
  border-radius: 2rem 2rem 0 0;
  color: var(--clr-bg-dark);
  background-color: var(--clr-primary);
  text-align: center;

  & > h2 {
    font-size: 2.8rem;
  }

  & > small {
    color: var(--clr-primary-dark);
    font-weight: 700;
    font-size: var(--fz-cap);
  }
`;

export const SBacklogContent = styled.div`
  padding: 2rem;
  display: flex;
  gap: 1rem;
`;

export const SCaption = styled.div`
  width: min-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
`;

export const SArrow = styled.div`
  width: 2px;
  height: 80%;
  background-color: currentColor;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 100%;
    right: 0;
    left: 0;
    margin: auto;
    width: 10px;
    height: 10px;
    border-top: 2px solid currentColor;
    border-right: 2px solid currentColor;
    transform: rotate(135deg);
    transform-origin: top;
  }
`;

export const SBacklogList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;

  & > li {
    width: 100%;
    height: 7rem;
    border: 2px dashed #00ffe0;
    border-radius: 2rem;
    position: relative;
  }
`;

export const SDemoItem = styled.li`
  position: relative;

  &:after {
    width: 38rem;
    content: '前台職缺列表、應徵';
    padding-inline-start: 2rem;
    display: grid;
    align-content: center;
    background: var(--clr-bg-gray60);
    border: 4px solid var(--clr-primary);
    backdrop-filter: blur(2px);
    border-radius: 2rem;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transform: translate(45rem, 25rem);
    animation: ${grabIn} 1s 1s forwards;
  }
  /* 小手 */
  & > img {
    position: absolute;
    bottom: -1.5rem;
    right: 6rem;
    z-index: 100;
    animation: ${grabIn} 1s 1s forwards;
    transform: translate(45rem, 25rem);
  }
`;

export const SStoryItem = styled.div`
  width: 38rem;
  height: 100%;
  padding-inline: 2rem;
  display: grid;
  align-content: center;
  background: var(--clr-bg-gray60);
  border: 4px solid var(--clr-primary);
  backdrop-filter: blur(2px);
  border-radius: 2rem;
  position: absolute;
  top: auto !important;
  left: auto !important;
  user-select: none;
`;
