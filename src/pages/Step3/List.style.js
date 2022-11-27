import styled from 'styled-components';

export const ListContainer = styled.div`
  display: inline-block;
  width: 45rem;
  height: 100%;
  background: ${(props) =>
    props.sec ? ' rgba(255, 122, 0, 0.4)' : 'rgba(0, 255, 224, 0.3)'};
  backdrop-filter: blur(5px);
  border-radius: 2rem;
  box-shadow: ${(props) =>
    props.sec
      ? '12px 12px  rgba(255, 122, 0, 0.3), 24px 24px rgba(255, 122, 0, 0.2)'
      : '12px 12px rgba(0, 255, 224, 0.2), 24px 24px rgba(0, 255, 224, 0.2)'};
  position: relative;
`;
export const SListHeader = styled.div`
  padding-block: 1.5rem;
  border-radius: 2rem 2rem 0 0;
  background-color: ${(props) =>
    props.sec ? 'var(--clr-role-team1)' : 'var(--clr-primary)'};
  color: var(--clr-bg-dark);
  text-align: center;

  & > h2 {
    font-size: 2.8rem;
  }

  & > small {
    color: ${(props) =>
      props.sec ? 'var( --clr-role-team-dark)' : 'var(--clr-primary-dark)'};
    font-weight: 700;
    font-size: var(--fz-cap);
  }
`;

export const SDecoLight = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: ${(props) =>
    props.sec
      ? 'radial-gradient(50% 50% at 50% 50%, #FFC700 0%, rgba(255, 199, 0, 0) 100%)'
      : 'radial-gradient(50% 50% at 50% 50%, #00FFE0 0%, rgba(0, 255, 224, 0) 100%)'};
  opacity: 0.9;
  backdrop-filter: blur(5px);
  border-radius: 2rem;
  z-index: -2;
`;

export const DroppableContainer = styled.div`
  height: 70%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1rem;
`;

export const SLogItem = styled.div`
  padding: 1rem 2rem;
  background: var(--clr-bg-gray60);
  border: 4px solid var(--clr-primary);
  backdrop-filter: blur(2px);
  border-radius: 2rem;
  display: flex;
  align-items: center;
  gap: 2rem;
  left: auto !important;
  top: auto !important;

  &:nth-child(2) {
    top: 20rem !important;
  }
  &:nth-child(3) {
    top: 30rem !important;
  }

  &:nth-child(4) {
    top: 40rem !important;
  }

  & > span {
    width: 5rem;
    height: 5rem;
    background: rgba(0, 255, 224, 0.7);
    border-radius: 100px;
    display: grid;
    place-content: center;
    font-size: 3.2rem;
  }

  & > p {
    font-size: 1.8rem;
    width: 80%;
  }
`;

export const Scorebar = styled.div`
  margin: 0 1rem;
  background-color: var(--clr-role-team-dark);
  border-radius: 2rem;
  text-align: center;
  position: relative;

  & > span {
    position: relative;
    z-index: 10;
  }
`;

export const Innerbar = styled.div`
  height: 1.5rem;
  position: absolute;
  width: ${(props) => props.width || 1.5}rem;
  left: 0.5rem;
  top: 0;
  bottom: 0;
  margin: auto;
  background-color: ${(props) => props.bgColor};
  border-radius: 2rem;
  transition: width 0.5s;
  z-index: 0;
`;
