import { useState, useEffect } from 'react';
// Styles
import {
  SStep1,
  SContinueHint,
  CenterContainer,
  SStory,
  SDoneBg,
} from './Step1.styles';
import {
  HighlightedText,
  ImgContainer,
  SRoleWrap,
  SRole,
  SDialog,
} from '../../shared/GlobalStyle';

// Images
import {
  hole,
  rolePo,
  arrowPo,
  arrow,
  jiraWhite,
  rolePoLight,
} from '../../shared/images';
// Animation
import {
  openHoleVariant,
  rolePopDown,
  fadeInVariant,
} from '../../shared/framerMotion';
import { FadeInBox, FadeInParagraph } from '../../shared/cssAnimation';
// React Components
import Card from '../../components/Card/Card';
import Button from '../../components/Button/Button';
import Backlog from '../../components/Backlog/Backlog';
//React Router
import { useNavigate } from 'react-router-dom';
/* Notes:
此頁面有5種狀態：1.default 2.continue 3.ready 4.try 5.done
(透過滑鼠點擊按鈕或頁面來進入下一個狀態)
*/

//================================================//

const Step1 = () => {
  const [status, setStatus] = useState('default');
  const [storyList, setStoryList] = useState([]);
  //TODO: 要統一在一個地方設定就好呢？還是每一個page都要在import 一次navigate呀
  const navigate = useNavigate();

  let nextAvailable = false;

  const handleClickContinue = () => {
    if (!nextAvailable) return;
    if (status === 'default') {
      setStatus('continue');
    } else if (status === 'ready') {
      setStatus('try');
    } else if (status === 'done') {
      navigate('/step2');
    }
  };

  const handleOnDrag = (e) => {
    const newStory = e.target.textContent;
    setStoryList((prev) => [...prev, newStory]);
  };

  const handleOnDragEnd = (e) => {
    e.target.style.visibility = 'hidden';
  };

  const updateStoryList = (newList) => {
    setStoryList(newList);
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

  //Content Factory
  const poDialogFactoy = () => {
    switch (status) {
      case 'default':
        return (
          <>
            <FadeInParagraph delay="3">
              <HighlightedText>\ 碰 /</HighlightedText>我是短衝小精靈，開發 A
              組的 PO 。
            </FadeInParagraph>
            <FadeInParagraph delay="3.5">
              <HighlightedText>
                PO 也就是產品負責人（Product Owner）
              </HighlightedText>
              ，產品負責人會負責評估產品待辦清單的價值與重要性，依序排列要執行的優先順序，對齊產品目標。最後排出產品待辦清單（Product
              Backlog）唷！
            </FadeInParagraph>
            <ImgContainer absolute bottom="2rem" right="3rem" width="3rem">
              <FadeInBox delay="4">
                <img src={arrowPo} alt="" className="continueIcon" />
              </FadeInBox>
            </ImgContainer>
          </>
        );
      case 'continue':
        return (
          <FadeInParagraph delay=".5">
            剛好我最近手邊有一個「人才招募系統」的案子，我才剛列出了「產品需求清單」。既然你都來了，來試試看調整產品優先度，排出
            <HighlightedText>產品待辦清單吧</HighlightedText>！
          </FadeInParagraph>
        );
      case 'ready':
        return (
          <>
            <FadeInParagraph delay=".5">
              在這階段我們要把需求放進產品待辦清單，並調整其優先順序。
            </FadeInParagraph>
            <FadeInParagraph delay="1">
              對了！我們公司也推薦使用
              <img src={jiraWhite} alt="jira logo" />
              來做任務的管理呢！
            </FadeInParagraph>
            <ImgContainer absolute bottom="2rem" right="3rem" width="3rem">
              <FadeInBox delay="1.5">
                <img src={arrowPo} alt="" className="continueIcon" />
              </FadeInBox>
            </ImgContainer>
          </>
        );
      case 'try':
        return (
          <>
            <FadeInParagraph key="try" delay=".5" size="3.2rem">
              換你來試試看吧！
            </FadeInParagraph>
            <FadeInParagraph key="try1" delay="1">
              提示：請把需求拖移至產品待辦清單，並調整其優先順序。
            </FadeInParagraph>
          </>
        );
      case 'done':
        return (
          <FadeInParagraph delay=".5">
            哇喔完成惹，尼太棒ㄌ！我們繼續吧！
          </FadeInParagraph>
        );
      default:
        return;
    }
  };

  return (
    <SStep1 onClick={handleClickContinue}>
      {status === 'done' ? <SDoneBg /> : null}
      <SRoleWrap variants={openHoleVariant} animate="visible" initial="hidden">
        <img src={hole} alt="" />
        <SRole variants={rolePopDown}>
          <ImgContainer width="25rem">
            <img src={rolePo} alt="" />
          </ImgContainer>
          <ImgContainer absolute top="0rem" width="27rem" zIndex="-1">
            <img src={rolePoLight} alt="" />
          </ImgContainer>
        </SRole>
      </SRoleWrap>
      <SDialog variants={fadeInVariant} animate="visible" initial="hidden">
        <Card title="PO" variant="po">
          {poDialogFactoy()}
        </Card>
      </SDialog>
      <CenterContainer>
        {status === 'default' || status === 'done' ? (
          <SContinueHint>點擊畫面任意處繼續</SContinueHint>
        ) : null}
        {status === 'continue' ? (
          <Button
            onClick={() => {
              setStatus('ready');
            }}
          >
            準備好了
          </Button>
        ) : null}
        {status === 'try' ? (
          <Button
            onClick={() => setStatus('done')}
            disabled={storyList.length < 4}
          >
            我完成了
          </Button>
        ) : null}

        {status === 'ready' || status === 'try' ? (
          <FadeInBox delay="1">
            <SStory
              top="40%"
              right="111%"
              fadeOut={status === 'ready'}
              draggable="true"
              onDragStart={handleOnDrag}
              onDragEnd={handleOnDragEnd}
            >
              應徵者的線上履歷編輯器
            </SStory>
            <SStory
              top="65%"
              right="120%"
              fadeOut={status === 'ready'}
              draggable="true"
              onDragStart={handleOnDrag}
              onDragEnd={handleOnDragEnd}
            >
              後台職缺管理功能（資訊上架、
              <br /> 下架、顯示應徵者資料）
            </SStory>

            <SStory
              top="40%"
              left="120%"
              fadeOut={status === 'ready'}
              draggable="true"
              onDragStart={handleOnDrag}
              onDragEnd={handleOnDragEnd}
            >
              會員系統（登入、註冊、權限管理）
            </SStory>
            <SStory
              top="65%"
              left="111%"
              draggable="true"
              onDragStart={handleOnDrag}
              onDragEnd={handleOnDragEnd}
            >
              前台職缺列表、應徵
              {status === 'try' ? null : (
                <ImgContainer absolute bottom="100%" left="-12rem">
                  <img src={arrow} alt="" />
                </ImgContainer>
              )}
            </SStory>
            <Backlog
              variant={status === 'try' ? null : 'demo'}
              storyList={storyList}
              updateStoryList={updateStoryList}
            />
          </FadeInBox>
        ) : null}
      </CenterContainer>
    </SStep1>
  );
};

export default Step1;
