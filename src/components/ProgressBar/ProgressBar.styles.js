import styled from 'styled-components';

export const SProgressBar = styled.div`
  width: 100%;
  height: 12px;
  background: var(--clr-primary-dark);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 200;

  &:after {
    content: '';

    width: ${(props) => props.width + '%'};
    height: 100%;
    background: linear-gradient(270deg, #00ffe0 0%, rgba(0, 255, 224, 0) 100%);
    position: absolute;
    left: 0%;
    transition: width 0.8s ease-out;
  }
`;
