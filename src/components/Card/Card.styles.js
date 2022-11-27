import styled, { css } from 'styled-components';

export const SCard = styled.div`
  width: 100%;
  padding: ${(props) =>
    props.variant ? '3rem 4rem 3rem 9rem' : '12rem 10% 10rem'};
  font-size: var(--fz-talk-l);
  letter-spacing: 0.05em;
  border: 2px solid ${(props) => props.mainColor};
  box-shadow: 0px 0px 24px 8px ${(props) => props.mainColor};
  backdrop-filter: blur(5px);
  border-radius: ${(props) => (props.variant ? '4' : '8')}rem;
  background: ${(props) => 'var(--clr-bg-gray60)'};
  position: relative;
  & > p + p {
    margin-top: ${(props) => (props.variant ? '0' : '3')}rem;
  }
`;

export const SLabel = styled.div`
  ${(props) =>
    props.img
      ? css`
          outline: red;
        `
      : css`
          width: 15rem;
          padding: 0.5rem 0;
          color: var(--clr-bg-dark);
          text-align: center;
          background: var(--clr-primary);
        `}

  position: absolute;
  top: 4rem;
  left: -1rem;

  & > span {
    display: block;
    position: absolute;
    top: 0.5rem;
    right: 0;
    left: 0;
    text-align: center;
  }

  &::after {
    position: absolute;
    ${(props) =>
      props.img
        ? css`
            content: '';
            display: grid;
            place-content: center;
            top: -0.5rem;
            right: 0;
            left: 0;
            bottom: 0;
          `
        : css`
            content: '';
            top: 100%;
            left: 0;
            border-top: 1rem solid var(--clr-primary);
            border-left: 1rem solid transparent;
          `}
  }
`;
