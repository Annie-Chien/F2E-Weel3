import styled from 'styled-components';
import { fadeIn } from '../../shared/cssAnimation';

export const SStep2 = styled.main`
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const SCircleBg = styled.div`
  width: 40rem;
  height: 40rem;
  margin: ${(props) => props.margin ?? 0};
  border-radius: 50%;
  background-color: ${(props) =>
    props.variant === 'sm'
      ? 'rgba(255, 0, 245, 0.35)'
      : 'rgba(0, 255, 224, 0.3)'};
  backdrop-filter: blur(5px);
  position: relative;
  box-shadow: 12px 12px 0
    ${(props) =>
      props.variant === 'sm'
        ? ' rgba(255, 0, 245, 0.25)'
        : 'rgba(0, 255, 224, 0.15)'};
  backdrop-filter: blur(5px);
  opacity: 0;
  animation: ${fadeIn} 0.5s 4.5s forwards;
`;

export const SDecoLight = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0rem;
  left: 0rem;
  border-radius: 50%;
  background: ${(props) =>
    props.variant === 'sm'
      ? 'radial-gradient(50% 50% at 50% 50%, #FF00F5 0%, rgba(255, 48, 247, 0) 100%)'
      : 'radial-gradient(50% 50% at 50% 50%, #00FFE0 0%, rgba(0, 255, 224, 0) 100%)'};
  opacity: 0.9;
  backdrop-filter: blur(5px);
  z-index: -2;
`;

export const StoryContainer = styled.div`
  margin-top: 50rem;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  gap: 2rem;
  position: relative;

  & > div {
    display: flex;
    gap: 2rem;
  }
`;

export const Point = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background: rgba(0, 255, 224, 0.7);
  color: #fff;
  position: absolute;
  font-size: 3rem;
  transform: translate(6.5rem, -9rem);
  display: grid;
  place-content: center;
`;
