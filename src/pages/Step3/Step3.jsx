import Card from '../../components/Card/Card';
import { DragDropContext } from 'react-beautiful-dnd';
import { FadeInBox, FadeInParagraph } from '../../shared/cssAnimation';
import {
  ImgContainer,
  SDialog,
  SRole,
  SRoleWrap,
  SBackground,
} from '../../shared/GlobalStyle';
import {
  arrowTeam2,
  hole,
  roleTeam2,
  roleTeam2Light,
} from '../../shared/images';
import { SStep3, BacklogContainer } from './Step3.styles';
import { fadeInVariant } from '../../shared/framerMotion';
import List from './List';
import Button from '../../components/Button/Button';
import { useState } from 'react';
import { SContinueHint, SDoneBg } from '../Step1/Step1.styles';
import { useNavigate } from 'react-router-dom';

//1.practice 2.start 3. done
/*
尚未點擊：黃紅角色，紅色對話筐出現
點擊＊1：黃紅角色，保留紅色對話筐，黃色對話筐出現，右下練習去囉按鈕出現
點擊練習去囉：黃色對畫框消失，黃色角色也消失，出現兩個list，右下開始sprint按鈕出現（但不能按）
（完成任務後，按鈕狀態為可以按）
點擊完成：紅色角色，紅色對話筐，綠色模糊背景，中間繼續提示紐
點擊畫面*2：navigate(step4)
*/

const Step3 = () => {
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [clickedStartSprint, setClickedStartSprint] = useState(false);
  const [clickedNextPage, setClickedNextPage] = useState(false);
  const navigate = useNavigate();
  const buttonDisabled = (score, length) => {
    if (score < 20 && length >= 2) {
      setBtnDisabled(false);
    } else {
      setBtnDisabled(true);
    }
  };

  const handleStartSprint = () => {
    setClickedStartSprint(true);
  };

  const handleClickNextPage = () => {
    if (!clickedStartSprint) return;
    navigate('/step4');
  };

  const ggDialogFactory = () => {
    if (!clickedStartSprint) {
      return (
        <>
          <FadeInParagraph size="3rem" delay=".5">
            換你來試試看吧！
          </FadeInParagraph>
          <FadeInParagraph delay=".5">
            把「 產品待辦清單 」的項目拖進「 開發Ａ組的短衝待辦清單 」裡吧
            ！提示：置入兩項以上的 Story，點數總和不能超過團隊負擔上限 20 點唷！
          </FadeInParagraph>
        </>
      );
    } else {
      return (
        <>
          <FadeInParagraph size="3rem" delay=".5">
            噢嗚嗚，太厲害ㄌ！又完成了一關！還有下一關等著你！
          </FadeInParagraph>
          <ImgContainer absolute bottom="2rem" right="3rem" width="3rem">
            <FadeInBox delay="1">
              <img src={arrowTeam2} alt="" className="continueIcon" />
            </FadeInBox>
          </ImgContainer>
        </>
      );
    }
  };
  return (
    <SStep3 onClick={handleClickNextPage}>
      <SDialog
        variants={fadeInVariant}
        initial="hidden"
        animate="visible"
        custom={0}
      >
        <Card title="GG" variant="gg">
          {ggDialogFactory()}
        </Card>
      </SDialog>
      <SRoleWrap top="3rem" right="3rem">
        <img src={hole} alt="" />
        <SRole initial={{ translateY: '-20%' }}>
          <ImgContainer absolute="true" top="0rem" width="30rem">
            <img src={roleTeam2Light} alt="" />
          </ImgContainer>
          <ImgContainer width="25rem">
            <img src={roleTeam2} alt="" />
          </ImgContainer>
        </SRole>
      </SRoleWrap>

      <BacklogContainer>
        <List checkButton={buttonDisabled} />
      </BacklogContainer>
      {clickedStartSprint ? null : (
        <Button disabled={btnDisabled} onClick={handleStartSprint}>
          開始sprint
        </Button>
      )}

      {clickedStartSprint ? (
        <SBackground>
          <SContinueHint>點擊畫面任意處繼續</SContinueHint>
        </SBackground>
      ) : null}
    </SStep3>
  );
};

export default Step3;
