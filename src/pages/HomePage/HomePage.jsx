import { useEffect, useState } from 'react';
//Styles
import {
  SHome,
  SHeading,
  SFrontLeaves,
  SBackLeaves,
  SSecretSound,
} from './HomePage.styles';
import { HighlightedText, ImgContainer } from '../../shared/GlobalStyle';

//Images
import {
  logoHoleTxt,
  bgLeafTint_lb,
  bgLeafTint_lt,
  bgLeafTint_t,
  bgLeafTint_rb,
  bgLeafDark_l,
  bgLeafDark_b,
  bgLeafDark_r,
  bgLeafDark_t,
  logoHole,
} from '../../shared/images';

//React Components
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';

// React Router
import { useNavigate } from 'react-router-dom';

//================================================//

const HomePage = () => {
  const [start, setStart] = useState(false);
  const [accept, setAccept] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    let timeout;
    if (accept) {
      timeout = setTimeout(() => {
        navigate('/step1');
      }, 1500);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [accept, navigate]);

  return (
    <SHome>
      <SHeading isStart={start}>
        <img src={logoHole} alt="logo" />
        <h2>深入敏捷の村一探究竟</h2>
        <Button onClick={() => setStart(true)}>進入村莊</Button>
      </SHeading>

      <SSecretSound isAccept={accept} isStart={start}>
        <Card title="（謎之音）">
          <p>
            呦呼，歡迎進入<HighlightedText> SCRUM 新手村</HighlightedText>，
            在正式加入專案開發之前，需要請你先了解 Scrum 的流程與精神！
          </p>
          <p>請接受挑戰任務，成功通過 Scrum 新手村的挑戰任務吧～</p>
        </Card>
        <Button onClick={() => setAccept(true)}>接受挑戰</Button>
      </SSecretSound>

      <SFrontLeaves isStart={start}>
        <ImgContainer absolute bottom="0" left="0" width="65rem">
          <img src={bgLeafTint_lb} alt="" />
        </ImgContainer>
        <ImgContainer absolute bottom="0" right="0" width="55rem">
          <img src={bgLeafTint_rb} alt="" />
        </ImgContainer>
        <ImgContainer absolute top="0" right="40rem" width="60rem">
          <img src={bgLeafTint_t} alt="" />
        </ImgContainer>
        <ImgContainer absolute top="0" left="0" width="48rem">
          <img src={bgLeafTint_lt} alt="" />
        </ImgContainer>
      </SFrontLeaves>

      <SBackLeaves isAccept={accept}>
        <ImgContainer absolute top="0" right="30rem" width="85rem">
          <img src={bgLeafDark_t} alt="" />
        </ImgContainer>
        <ImgContainer absolute left="0" width="70rem">
          <img src={bgLeafDark_l} alt="" />
        </ImgContainer>
        <ImgContainer absolute bottom="0" left="20rem" width="70rem">
          <img src={bgLeafDark_b} alt="" />
        </ImgContainer>
        <ImgContainer absolute right="0" width="65rem">
          <img src={bgLeafDark_r} alt="" />
        </ImgContainer>
      </SBackLeaves>
    </SHome>
  );
};

export default HomePage;
