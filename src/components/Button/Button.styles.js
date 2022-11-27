import styled from 'styled-components';

export const SButton = styled.button`
  padding: 1.2rem 4.8rem;
  color: inherit;
  font-weight: 700;
  letter-spacing: 3px;
  background-color: ${(props) =>
    props.disabled ? '#BBBBBB' : 'var(--clr-primary)'};
  border-radius: 4rem;
  position: relative;

  &::after {
    content: attr(data-label);
    height: 100%;
    display: grid;
    place-content: center;
    border-radius: 4rem;
    background: ${(props) =>
      props.disabled
        ? 'linear-gradient(0deg, rgba(238, 238, 238, 0) 0%, #DDDDDD 100%, #EEEEEE 100%), #555555'
        : 'linear-gradient(0deg, rgba(0, 255, 224, 0) 0%, #00FFE0 100%), #008D96'};
    opacity: 0.8;
    position: absolute;
    right: 0;
    left: 0;
    top: -0.5rem;
    transition: all 0.3s;

    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  }

  &:hover::after {
    top: ${(props) => (props.disabled ? '-0.5rem' : '-0.2rem')};
  }
`;
