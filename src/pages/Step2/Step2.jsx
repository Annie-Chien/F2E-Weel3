//Styles
import {
  CenterContainer,
  HighlightedText,
  ImgContainer,
  SDialog,
  SRole,
  SRoleWrap,
} from '../../shared/GlobalStyle';
import {
  SStep2,
  SCircleBg,
  SDecoLight,
  StoryContainer,
  Point,
} from './Step2.styles';
//Images
import {
  hole,
  rolePo,
  rolePoLight,
  roleSm,
  roleSmLight,
  planningSprint,
  planningTeam,
  arrowPo,
  roleTeam1,
  roleTeam1Light,
  roleTeam2,
  roleTeam2Light,
  planningPoint,
  arrowSm,
  time,
  story,
} from '../../shared/images';
//Animation
import {
  openHoleVariant,
  rolePopDown,
  fadeInVariant,
  rolePopUp,
  fadeOutVariant,
} from '../../shared/framerMotion';
import Card from '../../components/Card/Card';
import { useEffect, useState } from 'react';
import { FadeInBox, FadeInParagraph } from '../../shared/cssAnimation';
import { AnimatePresence, motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
/* Note:
此頁面有5種狀態：1.default 2.intro 3.meeting 4.explain 5.detail 6. (navigate)
(透過滑鼠點擊按鈕或頁面來進入下一個狀態)
*/
//================================================//
const Step2 = () => {
  const [status, setStatus] = useState('default');
  let nextAvailable = false;
  const navigate = useNavigate();

  const handleClickContinue = () => {
    if (!nextAvailable) return;
    if (status === 'default') {
      setStatus('intro');
    } else if (status === 'intro') {
      setStatus('meeting');
    } else if (status === 'meeting') {
      setStatus('explain');
    } else if (status === 'explain') {
      setStatus('detail');
    } else {
      navigate('/step3');
    }
  };

  useEffect(() => {
    let time;
    if (status === 'default') {
      time = 5000;
    } else {
      time = 1500;
    }
    const timer = setTimeout(() => {
      nextAvailable = true;
    }, time);

    return () => clearTimeout(timer);
  }, [status]);

  const poDialogFactory = () => {
    switch (status) {
      case 'default':
        return (
          <>
            <FadeInParagraph delay="3">
              產品待辦清單好了之後，我們來召集 ScrumMaster 和開發團隊共同召開
              <HighlightedText>短衝規劃會議（Sprint Planning）</HighlightedText>
              。短衝即是一個迭代 ，具有固定時間限制，我們會在這個會議中，
              決定要完成哪些工作事項來達到商業需求，列出短衝待辦清單（Sprint
              Backlog），並由開發團隊在接下來的產品開發週期裡執行。
            </FadeInParagraph>
            <ImgContainer absolute bottom="2rem" right="3rem" width="3rem">
              <FadeInBox delay="3.5">
                <img src={arrowPo} alt="" className="continueIcon" />
              </FadeInBox>
            </ImgContainer>
          </>
        );
    }
  };

  const centerContentsFactory = () => {
    switch (status) {
      case 'default':
        return (
          <FadeInBox delay="0" key="defaultImg">
            <SCircleBg>
              <SDecoLight />
              <img src={planningSprint} alt="" />
            </SCircleBg>
          </FadeInBox>
        );
      case 'intro':
        return (
          <FadeInBox delay="0" key="introImg">
            <SCircleBg variant="sm">
              <SDecoLight variant="sm" />
              <img src={planningTeam} alt="" />
            </SCircleBg>
          </FadeInBox>
        );
      case 'meeting':
        return (
          <FadeInBox delay="0" key="meetingImg">
            <SCircleBg variant="sm" margin="0 20rem">
              <SDecoLight variant="sm" />
              <img src={planningPoint} alt="" />
            </SCircleBg>
          </FadeInBox>
        );
      case 'explain':
        return (
          <FadeInBox delay="0.5">
            <StoryContainer>
              <ImgContainer width="16rem" absolute bottom="80%" right="100%">
                <img src={time} alt="" />
              </ImgContainer>
              <div>
                {Array.from(new Array(3).fill(''), (_, index) => (
                  <ImgContainer width="15rem" key={index}>
                    <img src={story} alt="" />
                  </ImgContainer>
                ))}
              </div>
              <div>
                {Array.from(new Array(4).fill(''), (_, index) => (
                  <ImgContainer width="15rem" key={index}>
                    <img src={story} alt="" />
                  </ImgContainer>
                ))}
              </div>
            </StoryContainer>
          </FadeInBox>
        );
      case 'detail':
        return (
          <FadeInBox delay="0.5">
            <StoryContainer>
              <ImgContainer width="16rem" absolute bottom="80%" right="100%">
                <img src={time} alt="" />
              </ImgContainer>
              <div>
                {Array.from(new Array(3).fill(''), (_, index) => {
                  return (
                    <ImgContainer width="15rem" key={index}>
                      <img src={story} alt="" />
                      <Point>{index + 1}</Point>
                    </ImgContainer>
                  );
                })}
              </div>
              <div>
                {Array.from(new Array(4).fill(''), (_, index) => {
                  const points = [5, 8, 13, 21];
                  return (
                    <ImgContainer width="15rem" key={index}>
                      <img src={story} alt="" />
                      <Point>{points[index]}</Point>
                    </ImgContainer>
                  );
                })}
              </div>
            </StoryContainer>
          </FadeInBox>
        );
    }
  };

  const smDialogFactory = () => {
    switch (status) {
      case 'intro':
        return (
          <>
            <FadeInParagraph delay="0.5">
              哦哦，你是新來的前端吧！我是這次的 ScrumMaster MM，
              我的工作主要是促成開發團隊成員協作、引導團隊進行自省會議，
              提升團隊成員對 Scrum 瞭解 。
            </FadeInParagraph>
            <ImgContainer
              absolute="true"
              bottom="2rem"
              right="3rem"
              width="3rem"
            >
              <FadeInBox delay="1">
                <img src={arrowSm} alt="" className="continueIcon" />
              </FadeInBox>
            </ImgContainer>
          </>
        );
      case 'meeting':
        return (
          <>
            <FadeInParagraph delay=".5" key="meeting">
              這兩位是 EE 和 GG，是我們開發團隊的成員唷～我們團隊一次 Sprint
              週期是兩週的時間，依照我的觀察，目前團隊可以負擔的點數(Story
              Point)大約是 20 點左右。
            </FadeInParagraph>
            <ImgContainer absolute bottom="2rem" right="3rem" width="3rem">
              <FadeInBox delay="1">
                <img src={arrowSm} alt="" className="continueIcon" />
              </FadeInBox>
            </ImgContainer>
          </>
        );
    }
  };

  const eeDialogFactory = () => {
    switch (status) {
      case 'explain':
        return (
          <FadeInParagraph delay="0.5" key="explainEE">
            欸新來的，你應該不知道點數是什麼意思吧ㄏㄏ，我來跟你介紹一下吧～
            Story Point 目的是為了衡量速度，
            是用大概花費的時間預估出的相對點數哦 。
          </FadeInParagraph>
        );
      case 'detail':
        return (
          <FadeInParagraph delay="0.5" key="detailEE">
            以「 費氏數列 」的 1 、2 、3 、5 、8 、13 、21 來估算各項 Story
            的分數。Story Point 越小，表示這個 Story 花費時間越少； 越大，
            花費時間則越多。如果出現了一個 21 分， 可能表示這個 Story 太龐大
            ，需要再拆分細項執行唷！
          </FadeInParagraph>
        );
    }
  };

  return (
    <SStep2 onClick={handleClickContinue}>
      <AnimatePresence>
        {status === 'default' ? (
          <>
            <SRoleWrap top="3rem" left="3rem">
              <motion.img
                src={hole}
                alt=""
                variants={openHoleVariant}
                animate="visible"
                initial="hidden"
                exit={{ scaleX: 0, transition: { delay: 1 } }}
              />
              <SRole
                variants={rolePopDown}
                animate="visible"
                initial="hidden"
                exit={{ translateY: '-120%', transition: { delay: 0 } }}
              >
                <ImgContainer width="25rem">
                  <img src={rolePo} alt="" />
                </ImgContainer>
                <ImgContainer absolute top="0" width="28rem" zIndex="-1">
                  <img src={rolePoLight} alt="" />
                </ImgContainer>
              </SRole>
            </SRoleWrap>
            <SDialog
              variants={fadeInVariant}
              animate={'visible'}
              initial={'hidden'}
              exit={{ opacity: 0, transition: { delay: 0, duration: 0.5 } }}
            >
              <Card title="PO" variant="po">
                {poDialogFactory()}
              </Card>
            </SDialog>
          </>
        ) : null}
      </AnimatePresence>
      <CenterContainer status={status}>
        {centerContentsFactory()}
      </CenterContainer>
      <AnimatePresence>
        {status === 'default' || status === 'intro' || status === 'meeting' ? (
          <SRoleWrap
            key="roleSM"
            right="3rem"
            bottom="2rem"
            variants={openHoleVariant}
            exit={{ scaleX: 0, transition: { delay: 0.5, duration: 0.5 } }}
            animate="visible"
            initial="hidden"
            custom={3}
          >
            <SRole
              variants={rolePopUp}
              animate="visible"
              initial="hidden"
              exit={{
                translateY: '120%',
                transition: { delay: 0, duration: 0.5 },
              }}
            >
              <ImgContainer width="25rem">
                <img src={roleSm} alt="" />
              </ImgContainer>
              <ImgContainer
                absolute
                bottom="0"
                width="32rem"
                left="-3rem"
                zIndex="-1"
              >
                <img src={roleSmLight} alt="" />
              </ImgContainer>
            </SRole>
            <img src={hole} alt="" />
          </SRoleWrap>
        ) : null}

        {status === 'intro' || status === 'meeting' ? (
          <SDialog
            right="true"
            variants={fadeInVariant}
            animate="visible"
            initial="hidden"
            key="dialogSM"
            custom={0.5}
            absolute={true}
            bottom="0"
            exit={{ opacity: 0, transition: { delay: 0, duration: 0.5 } }}
          >
            <Card title="SM" variant="sm">
              {smDialogFactory()}
            </Card>
          </SDialog>
        ) : null}
      </AnimatePresence>

      {status === 'meeting' || status === 'explain' || status === 'detail' ? (
        <>
          <SRoleWrap
            variants={openHoleVariant}
            animate="visible"
            initial="hidden"
            top="3rem"
            right="30rem"
          >
            <img src={hole} alt="" />
            <SRole variants={rolePopDown}>
              <ImgContainer width="25rem">
                <img src={roleTeam1} alt="" />
              </ImgContainer>
              <ImgContainer absolute top="0rem" width="28rem" zIndex="-1">
                <img src={roleTeam1Light} alt="" />
              </ImgContainer>
            </SRole>
          </SRoleWrap>
          <SRoleWrap
            variants={openHoleVariant}
            animate="visible"
            initial="hidden"
            top="3rem"
            right="3rem"
            custom={0.5}
          >
            <img src={hole} alt="" />
            <SRole variants={rolePopDown}>
              <ImgContainer width="25rem">
                <img src={roleTeam2} alt="" />
              </ImgContainer>
              <ImgContainer
                absolute="true"
                top="0rem"
                width="30rem"
                zIndex="-1"
              >
                <img src={roleTeam2Light} alt="" />
              </ImgContainer>
            </SRole>
          </SRoleWrap>
        </>
      ) : null}

      {status === 'explain' || status === 'detail' ? (
        <SDialog
          variants={fadeInVariant}
          initial="hidden"
          animate="visible"
          absolute="true"
          top="0"
          left="0"
          width="60%"
        >
          <Card title="EE" variant="ee">
            {eeDialogFactory()}
          </Card>
        </SDialog>
      ) : null}
    </SStep2>
  );
};

export default Step2;
