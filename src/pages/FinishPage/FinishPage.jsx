import { motion } from 'framer-motion';
import React from 'react';
import { ImgContainer, SRoleWrap } from '../../shared/GlobalStyle';
import {
  hole,
  logo,
  rolePo,
  roleSm,
  roleTeam1,
  roleTeam2,
} from '../../shared/images';
import { SDarkBox, SFinish, Wrap } from './FinishPage.styles';
import { openHoleVariant, rolePopUp } from '../../shared/framerMotion';
import { useNavigate } from 'react-router-dom';

const FinishPage = () => {
  const navigate = useNavigate();

  return (
    <SFinish>
      <div>
        <ImgContainer width="60rem">
          <img src={logo} alt="logo" />
        </ImgContainer>
        <h2>恭喜你通過</h2>
        <SDarkBox>《 敏捷任務 - 最初の試煉 》</SDarkBox>
        <button onClick={() => navigate('/')}>再玩一次</button>
      </div>
      <div>
        <Wrap>
          <span>窩的冰淇淋ㄋ？</span>
          <motion.div
            variants={rolePopUp}
            initial="hidden"
            animate="visible"
            custom="2.5"
          >
            <ImgContainer width="15rem" style={{ transform: 'rotate(180deg)' }}>
              <img src={rolePo} />
            </ImgContainer>
          </motion.div>
          <motion.div
            variants={openHoleVariant}
            initial="hidden"
            animate="visible"
          >
            <ImgContainer width="16rem">
              <img src={hole} alt="hole" />
            </ImgContainer>
          </motion.div>
        </Wrap>
        <Wrap>
          <span>嗚嗚我會想尼QQ</span>
          <motion.div
            variants={rolePopUp}
            initial="hidden"
            animate="visible"
            custom="3"
          >
            <ImgContainer width="15rem">
              <img src={roleSm} />
            </ImgContainer>
          </motion.div>
          <motion.div
            variants={openHoleVariant}
            initial="hidden"
            animate="visible"
          >
            <ImgContainer width="16rem">
              <img src={hole} alt="hole" />
            </ImgContainer>
          </motion.div>
        </Wrap>
        <Wrap>
          <span>不愧似窩ㄉ學生</span>
          <motion.div
            variants={rolePopUp}
            initial="hidden"
            animate="visible"
            custom="3.5"
          >
            <ImgContainer width="15rem" style={{ transform: 'rotate(180deg)' }}>
              <img src={roleTeam1} />
            </ImgContainer>
          </motion.div>
          <motion.div
            variants={openHoleVariant}
            initial="hidden"
            animate="visible"
          >
            <ImgContainer width="16rem">
              <img src={hole} alt="hole" />
            </ImgContainer>
          </motion.div>
        </Wrap>
        <Wrap>
          <span>哇喔太厲害ㄌㄅ</span>
          <motion.div
            variants={rolePopUp}
            initial="hidden"
            animate="visible"
            custom="4"
          >
            <ImgContainer width="15rem" style={{ transform: 'rotate(180deg)' }}>
              <img src={roleTeam2} />
            </ImgContainer>
          </motion.div>
          <motion.div
            variants={openHoleVariant}
            initial="hidden"
            animate="visible"
          >
            <ImgContainer width="16rem">
              <img src={hole} alt="hole" />
            </ImgContainer>
          </motion.div>
        </Wrap>
      </div>
    </SFinish>
  );
};

export default FinishPage;
