import { useEffect, useState } from 'react';
import Card from '../../components/Card/Card';
import Button from '../../components/Button/Button';
import { FadeInBox, FadeInParagraph } from '../../shared/cssAnimation';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

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
  arrowTeam1,
  hole,
  roleTeam1,
  roleTeam1Light,
  sprintDaily,
  sprintRetro,
  sprintReview,
  sprintProcess,
} from '../../shared/images';
import {
  ContentContainer,
  PracticeContainer,
  SBlankList,
  SBox,
  SDefaultList,
  SEmptyBlank,
  SIntroText,
  SIntroTitle,
  SPracticelist,
  SStep4,
} from './Step4.styles';
import { SContinueHint } from '../Step1/Step1.styles';
import { useNavigate } from 'react-router-dom';
//Data
const introData = [
  {
    img: sprintDaily,
    title: '每日站立會議',
    subTitle: 'Daily Scrum',
    paragraph: '每天都要進行的會議，以15分鐘為限制',
    lists: [
      '昨天為團隊的短衝目標 (Sprint Goal)做了那些進度',
      '今天我會如何準備來幫助團隊達到短衝目標',
      '過程中有遇到什麼問題、難題',
    ],
    ending: '透過團隊分享，追蹤大家的工作狀況。',
  },
  {
    img: sprintReview,
    title: '短衝檢視會議',
    subTitle: 'Sprint Review',
    paragraph: '用來檢視該次短衝增量的成果，以蒐集相關的回饋數據或意見。',
    lists: [],
    ending: '',
  },
  {
    img: sprintRetro,
    title: '短衝自省會議',
    subTitle: 'Sprint Retrospective',
    paragraph: '團隊在自省會議裡 , 會共同回顧該短衝歷程發生的事情',
    lists: ['好的地方', '可以改進的地方', ' 如何維持我們已有的成功經驗'],
    ending: '',
  },
];

const defaultData = [
  {
    title: '產品待辦清單',
    subTitle: 'Product Backlog',
  },
  {
    title: '短衝規劃會議',
    subTitle: 'Sprint Planning',
  },
  {
    title: '短衝代辦清單',
    subTitle: 'Sprint Backlog',
  },
];

const practiceData = {
  practiceList: [
    {
      title: '每日站立會議',
      subTitle: 'Daily Scrum',
    },
    {
      title: '短衝檢視會議',
      subTitle: 'Sprint Review',
    },
    {
      title: '短衝自省會議',
      subTitle: 'Sprint Retrospective',
    },
  ],
  blankList: [],
};

const Step4 = () => {
  const [status, setStatus] = useState('default');
  const [itemObj, setItemObj] = useState(practiceData);
  const navigate = useNavigate();

  let nextAvailable = false;

  const handleClick = () => {
    if (!nextAvailable) return;
    if (status === 'default') {
      setStatus('introStart');
    } else if (status === 'introStart') {
      setStatus('introEnd');
    } else if (status === 'done') {
      navigate('/step5');
    }
  };

  const handleClickPractice = () => {
    setStatus('practice');
  };
  const handleClickDone = () => {
    setStatus('done');
  };

  const onDragEnd = (event) => {
    const { source, destination } = event;
    if (!destination) {
      return;
    }
    let newItemObj = { ...itemObj };
    const [remove] = newItemObj[source.droppableId].splice(source.index, 1);
    newItemObj[destination.droppableId].splice(destination.index, 0, remove);
    setItemObj(newItemObj);
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

  const eeDialogFactory = () => {
    switch (status) {
      case 'default':
        return (
          <>
            <FadeInParagraph delay="3">
              等等等等等，你都還不知道什麼是 Sprint 吧！讓我先為你介紹一下～
            </FadeInParagraph>
            <FadeInParagraph delay="3.5">
              仔細聽好唷，等等會考考你！
            </FadeInParagraph>
            <ImgContainer absolute bottom="2rem" right="3rem" width="3rem">
              <FadeInBox delay="4">
                <img src={arrowTeam1} alt="" className="continueIcon" />
              </FadeInBox>
            </ImgContainer>
          </>
        );
      case 'introStart':
        return (
          <>
            <FadeInParagraph delay=".5" key="introStart">
              Sprint
              是一個短衝，開發團隊會在這期間執行開發。在這段期間內，開發團隊舉辦每日站立會議
              (Daily Scrum)，追蹤成員間的工作狀況，在 Sprint
              的結束也會包含短衝檢視會議 (Sprint Review) 以及短衝自省會議
              (Sprint Retrospective)。
            </FadeInParagraph>
            <ImgContainer absolute bottom="2rem" right="3rem" width="3rem">
              <FadeInBox delay="1">
                <img src={arrowTeam1} alt="" className="continueIcon" />
              </FadeInBox>
            </ImgContainer>
          </>
        );
      case 'introEnd':
        return (
          <FadeInParagraph delay=".5">
            Sprint是一個短衝，開發團隊會在這期間執行開發。在這段期間內，開發團隊舉辦每日站立會議
            (Daily Scrum)，追蹤成員間的工作狀況，在 Sprint
            的結束也會包含短衝檢視會議 (Sprint Review) 以及短衝自省會議 (Sprint
            Retrospective)。
          </FadeInParagraph>
        );
      case 'practice':
        return (
          <>
            <FadeInParagraph delay=".5">換你來試試看吧！</FadeInParagraph>
            <FadeInParagraph delay="1">
              在這經典的 Surum 流程圖中，這些流程分別代表哪一個會議呢？
            </FadeInParagraph>
            <FadeInParagraph delay="1.5">
              提示：把右側的三個流程拖移至正確的位置上吧！
            </FadeInParagraph>
          </>
        );
      case 'done':
        return (
          <>
            <FadeInParagraph delay=".5">
              哼哼沒想到你這麼快就學會惹，快結束了加油加油！
            </FadeInParagraph>
            <ImgContainer absolute bottom="2rem" right="3rem" width="3rem">
              <FadeInBox delay="1">
                <img src={arrowTeam1} alt="" className="continueIcon" />
              </FadeInBox>
            </ImgContainer>
          </>
        );
    }
  };
  return (
    <SStep4 onClick={handleClick}>
      <SDialog variants={fadeInVariant} initial="hidden" animate="visible">
        <Card title="EE" variant="ee">
          {eeDialogFactory()}
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
            <img src={roleTeam1} alt="" />
          </ImgContainer>
          <ImgContainer absolute top="0rem" width="28rem" zIndex="-1">
            <img src={roleTeam1Light} alt="" />
          </ImgContainer>
        </SRole>
      </SRoleWrap>

      <ContentContainer>
        {status === 'introStart' || status === 'introEnd'
          ? introData.map((data, index) => {
              const { img, title, subTitle, paragraph, lists, ending } = data;
              return (
                <SBox
                  key={index}
                  animate={{ x: 0, opacity: 1 }}
                  initial={{ x: '-10%', opacity: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.5 + 0.5 }}
                >
                  <ImgContainer width="40rem">
                    <img src={img} alt="" />
                  </ImgContainer>
                  <SIntroTitle>
                    <h2>{title}</h2>
                    <small>{subTitle}</small>
                  </SIntroTitle>
                  <SIntroText>
                    <p>{paragraph}</p>
                    <ul>
                      {lists.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                    <p>{ending}</p>
                  </SIntroText>
                </SBox>
              );
            })
          : null}
        {status === 'practice' ? (
          <DragDropContext onDragEnd={onDragEnd}>
            <PracticeContainer>
              <ImgContainer absolute="true" top="-3rem" left="10rem">
                <img
                  src={sprintProcess}
                  alt=""
                  style={{ height: '53rem', width: '105rem' }}
                />
              </ImgContainer>

              <SDefaultList>
                {defaultData.map((item, index) => (
                  <SIntroTitle key={index} default>
                    <h2>{item.title}</h2>
                    <small>{item.subTitle}</small>
                  </SIntroTitle>
                ))}
              </SDefaultList>
              <Droppable droppableId="practiceList">
                {(provided) => (
                  <SPracticelist
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                  >
                    {itemObj.practiceList.map((item, index) => (
                      <Draggable
                        draggableId={item.subTitle}
                        index={index}
                        key={index}
                      >
                        {(provided, snapshot) => {
                          return (
                            <SIntroTitle
                              ref={provided.innerRef}
                              snapshot={snapshot}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                            >
                              <h2>{item.title}</h2>
                              <small>{item.subTitle}</small>
                            </SIntroTitle>
                          );
                        }}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </SPracticelist>
                )}
              </Droppable>
              <Droppable droppableId="blankList">
                {(provided) => (
                  <SBlankList
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                  >
                    {itemObj.blankList.map((item, index) => {
                      return (
                        <Draggable
                          draggableId={item.subTitle}
                          index={index}
                          key={index}
                        >
                          {(provided, snapshot) => {
                            return (
                              <SIntroTitle
                                ref={provided.innerRef}
                                snapshot={snapshot}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                              >
                                <h2>{item.title}</h2>
                                <small>{item.subTitle}</small>
                              </SIntroTitle>
                            );
                          }}
                        </Draggable>
                      );
                    })}
                    <SEmptyBlank></SEmptyBlank>
                    {provided.placeholder}
                  </SBlankList>
                )}
              </Droppable>
            </PracticeContainer>
          </DragDropContext>
        ) : null}
      </ContentContainer>
      {status === 'introEnd' ? (
        <Button onClick={handleClickPractice}>練習去囉</Button>
      ) : null}
      {status === 'practice' ? (
        <Button onClick={handleClickDone}>我完成了</Button>
      ) : null}
      {status === 'done' ? (
        <SBackground>
          <SContinueHint>點擊畫面任意處繼續</SContinueHint>
        </SBackground>
      ) : null}
    </SStep4>
  );
};

export default Step4;
