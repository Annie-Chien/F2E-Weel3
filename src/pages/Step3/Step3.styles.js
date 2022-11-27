import styled from 'styled-components';

export const SStep3 = styled.main`
  padding-block: 1rem;
  position: relative;
  height: 100vh;

  & > button:last-child {
    position: absolute;
    right: 3rem;
    bottom: 5rem;
  }
`;

export const BacklogContainer = styled.div`
  height: 60%;
  margin-left: 4rem;
  display: flex;
  gap: 8rem;
`;
