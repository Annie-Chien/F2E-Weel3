import styled from 'styled-components';

export const SStep5 = styled.main`
  padding-top: 2rem;

  & > button {
    position: absolute;
    bottom: 5rem;
    right: 3rem;
  }
`;

export const QuestionContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 9rem;
  gap: 8rem;
`;

export const SQuestion = styled.div`
  width: 60rem;
`;

export const SQuestionTitle = styled.h2`
  width: 70%;
  margin: auto;
  margin-bottom: 4rem;
  padding: 0.4rem 3.2rem;
  background: var(--clr-primary);
  color: #0a0d14;
  font-size: 2.8rem;
  text-align: center;
`;
export const SOptionList = styled.fieldset`
  display: flex;
`;
export const SOption = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  gap: 2rem;

  & > label {
    width: 26rem;
    height: 13rem;
    background: rgba(10, 13, 20, 0.6);
    border: 4px solid var(--clr-primary);
    backdrop-filter: blur(5px);
    border-radius: 2rem;
    padding: 1.2rem 2rem;
    text-align: center;
    line-height: 1.8;
    font-size: 1.8rem;
  }
`;
