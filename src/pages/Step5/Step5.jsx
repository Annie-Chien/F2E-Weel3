import React, { createRef, useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';
import { FadeInBox, FadeInParagraph } from '../../shared/cssAnimation';
import {
  fadeInVariant,
  openHoleVariant,
  rolePopDown,
} from '../../shared/framerMotion';
import {
  ImgContainer,
  SBackground,
  SDialog,
  SRole,
  SRoleWrap,
} from '../../shared/GlobalStyle';
import {
  arrowTeam2,
  hole,
  rolePo,
  roleSm,
  roleTeam1,
  roleTeam2,
  roleTeam2Light,
} from '../../shared/images';
import { SContinueHint } from '../Step1/Step1.styles';
import {
  QuestionContainer,
  SOption,
  SOptionList,
  SQuestion,
  SQuestionTitle,
  SStep5,
} from './Step5.styles';

const questionData = [
  {
    title: 'Q1.做得好的地方?',

    options: [
      { img: roleSm, label: '這次我幫了很多人救火耶～ ', id: '1a' },
      {
        img: rolePo,
        label: '大家在開發上都會互相 cover ，讓任務都有準在時間內完成。',
        id: '1b',
      },
    ],
  },
  {
    title: 'Q2.有哪些可以做得更好？',

    options: [
      {
        img: roleTeam1,
        label: '可以記錄這次的開發時間，讓預估團隊點數可以更精準 。',
        id: '2a',
      },
      {
        img: roleTeam2,
        label: '開發時間預估不準確，請後端下次改進，避免 delay 到我 。',
        id: '2b',
      },
    ],
  },
];

const Step5 = () => {
  const [status, setStatus] = useState('default');
  const [q1Ans, setQ1Ans] = useState();
  const [q2Ans, setQ2Ans] = useState();
  const inputRef = useMemo(
    () =>
      Array(2)
        .fill()
        .map(() => createRef()),
    []
  );

  let nextAvailable = false;
  const navigate = useNavigate();

  const handleClick = () => {
    if (!nextAvailable) return;

    if (status === 'default') {
      setStatus('question');
    }
  };

  const handleNavigate = () => {
    navigate('/finish');
  };

  const handleDone = () => {
    const allCorrect = q1Ans === '1b' && q2Ans === '2a';
    if (allCorrect) {
      setStatus('done');
    }
  };

  const handleChange = (e) => {
    const value = e.target.id;
    if (value[0] === '1') {
      setQ1Ans(value);
    } else {
      setQ2Ans(value);
    }
  };

  useEffect(() => {
    let time;
    if (status === 'default') {
      time = 4500;
    } else {
      time = 1500;
    }

    const timer = setTimeout(() => {
      nextAvailable = true;
    }, time);

    return () => clearTimeout(timer);
  }, [status]);

  const ggDialogFactory = () => {
    switch (status) {
      case 'default':
        return (
          <>
            <FadeInParagraph delay="3.5">
              嗚啊啊新來的，你真的很幸運，今天剛好是開發 B 組的
              Retro，你也來見識一下，看看 Retro 都該做些什麼吧～～
            </FadeInParagraph>
            <ImgContainer absolute bottom="2rem" right="3rem" width="3rem">
              <FadeInBox delay="4">
                <img src={arrowTeam2} alt="" className="continueIcon" />
              </FadeInBox>
            </ImgContainer>
          </>
        );
      case 'question':
        return (
          <FadeInParagraph delay="0.5">
            我們會在會議裡請團隊成員提出哪些是做得好的地方、哪些可以繼續改善的地方？並記錄再
            Confluence 中。Retro 重點在於「正面表述，你也思考看看，哪一些是適合
            Retro 的回饋呢？
          </FadeInParagraph>
        );
      case 'done':
        return (
          <>
            <FadeInParagraph delay="0.5" key="done-txet">
              太酷ㄌ吧，根本天才，畢業之後不要忘記我唷 !
            </FadeInParagraph>
            <ImgContainer absolute bottom="2rem" right="3rem" width="3rem">
              <FadeInBox delay="1" key="done-continue">
                <img src={arrowTeam2} alt="" className="continueIcon" />
              </FadeInBox>
            </ImgContainer>
          </>
        );
    }
  };

  return (
    <SStep5 handleClick={handleClick}>
      <SDialog variants={fadeInVariant} initial="hidden" animate="visible">
        <Card title="GG" variant="gg">
          {ggDialogFactory()}
        </Card>
      </SDialog>
      <SRoleWrap
        variants={openHoleVariant}
        animate="visible"
        initial="hidden"
        top="3rem"
        right="0rem"
      >
        <img src={hole} alt="" />
        <SRole variants={rolePopDown}>
          <ImgContainer width="22rem">
            <img src={roleTeam2} alt="" />
          </ImgContainer>
          <ImgContainer absolute top="0rem" width="28rem" zIndex="-1">
            <img src={roleTeam2Light} alt="" />
          </ImgContainer>
        </SRole>
      </SRoleWrap>
      <QuestionContainer>
        {questionData.map((q, index) => (
          <SQuestion key={index}>
            <SQuestionTitle>{q.title}</SQuestionTitle>
            <SOptionList>
              {q.options.map((o, index) => (
                <SOption onChange={handleChange} key={index}>
                  <ImgContainer width="15rem" zIndex="0">
                    <img src={o.img} alt="" />
                  </ImgContainer>
                  <input
                    type="radio"
                    id={o.id}
                    name={q.title}
                    ref={inputRef[index]}
                  />
                  <label htmlFor={o.id}>{o.label}</label>
                </SOption>
              ))}
            </SOptionList>
          </SQuestion>
        ))}
      </QuestionContainer>
      {status === 'done' ? (
        <SBackground onClick={handleNavigate}>
          <SContinueHint>點擊畫面任意處繼續</SContinueHint>
        </SBackground>
      ) : null}
      {status === 'done' ? null : (
        <Button onClick={handleDone} disabled={!q1Ans || !q2Ans}>
          我選好了
        </Button>
      )}
    </SStep5>
  );
};

export default Step5;
