import styled from 'styled-components';
import { motion } from 'framer-motion';
import { sprintProcess } from '../../shared/images';

export const SStep4 = styled.main`
  height: 100vh;
  padding: 2rem 0;

  & > button:last-child {
    position: absolute;
    right: 3rem;
    bottom: 5rem;
  }
`;

export const ContentContainer = styled.div`
  height: 60%;
  display: flex;
  justify-content: space-around;
`;

export const SBox = styled(motion.div)`
  width: 38rem;
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 1.5rem;
`;

export const SIntroTitle = styled.div`
  padding-block: 0.3rem;
  padding-inline: 2rem;
  text-align: center;
  color: ${(props) =>
    props.default ? 'var(--clr-primary)' : 'var(--clr-role-team1)'};
  background: var(--clr-bg-gray60);
  border: 4px solid currentColor;
  backdrop-filter: blur(5px);
  border-radius: 2rem;

  & > h2 {
    font-size: 2.8rem;
  }

  & > small {
    color: var(--clr-text-tint);
  }
`;

export const SIntroText = styled.div`
  line-height: 2;
  font-weight: lighter;

  & > p {
    font-size: 1.7rem;
  }

  & > ul {
    margin-left: 2rem;
  }
`;

export const PracticeContainer = styled.div`
  width: 100%;
  outline: 1px solid red;
  position: relative;
`;

export const SDefaultList = styled.div`
  position: absolute;
  left: 12rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const SPracticelist = styled.div`
  width: 30rem;
  outline: 1px solid red;
  position: absolute;
  right: 3rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const SBlankList = styled.div`
  outline: 1px solid red;
  display: flex;
  position: absolute;
  bottom: 0rem;
  right: 30rem;
  gap: 1rem;
`;

export const SEmptyBlank = styled.div`
  width: 20rem;
  border: 2px dashed var(--clr-primary);
  height: 9rem;
  border-radius: 20px;
`;
