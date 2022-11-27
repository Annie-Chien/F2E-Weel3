import styled, { createGlobalStyle, css } from 'styled-components';
import fontLink from '../assets/font/GenJyuuGothicX-Medium.ttf';
import fontLightLink from '../assets/font/GenJyuuGothicX-Light.ttf';
//Framer motion
import { motion } from 'framer-motion';

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Gen Jyuu Gothic P';
        font-weight: medium;
        src: url(${fontLink}) format("truetype");
    }

    
    /* ================ CSS Variables =============== */
    :root{
        //COLORS
        --clr-primary: rgb(0, 255, 224);
        --clr-primary-dark: rgb(0, 141, 150);
        --clr-primary-darker:  rgb(0, 86, 86);

        --clr-text:rgb(255,255,255);
        --clr-text-dark:rgb(28, 50, 69);
        --clr-text-tint:rgb(0, 255, 224);

        --clr-role-sm:rgb(211, 85, 255);
        --clr-role-sm-dark:rgb(76, 0, 113);
        --clr-role-sm-tint:rgb(255, 0, 245);
        --clr-role-team1:rgb(255, 199, 0);
        --clr-role-team2:rgb(255, 92, 0);
        --clr-role-team-dark:rgb(147, 53, 0);

        --clr-bg-dark:rgb(10, 13, 20);
        --clr-bg-gray60:rgba(10, 13, 20, 0.6);
        --clr-bg-transition:rgba(28, 50, 69, 0.6);

        --clr-danger:rgb(255, 0, 0);

        --gradient-primary: linear-gradient(180deg, rgba(0, 255, 224, 0) 0%, rgba(0, 255, 224, 0.25) 60.42%, rgba(0, 255, 224, 0.45) 79.69%, rgba(0, 255, 224, 0.7) 91.67%, rgba(0, 255, 224, 0.9) 100%);
        --gradient-role-sm: linear-gradient(180deg, rgba(211, 85, 255, 0) 0%, rgba(211, 85, 255, 0.05) 59.9%, rgba(211, 85, 255, 0.2) 78.12%, rgba(211, 85, 255, 0.6) 100%);
        --gradient-role-team1:linear-gradient(180deg, rgba(255, 199, 0, 0) 0%, rgba(255, 199, 0, 0.05) 59.9%, rgba(255, 199, 0, 0.2) 78.12%, rgba(255, 199, 0, 0.6) 100%);
        --gradient-role-team2:linear-gradient(180deg, rgba(255, 122, 0, 0) 0%, rgba(255, 122, 0, 0.05) 59.9%, rgba(255, 122, 0, 0.2) 78.12%, rgba(255, 122, 0, 0.6) 100%);
        --gradient-dialog-po:  linear-gradient(180deg, rgba(0, 255, 224, 0) 0%, rgba(0, 255, 224, 0.03) 59.9%, rgba(0, 255, 224, 0.12) 78.12%, rgba(0, 255, 224, 0.36) 100%), rgba(10, 13, 20, 0.6);
        //FONT SIZES
        --fz-h1: 5rem;
        --fz-h2: 3.2rem;
        --fz-h3: 2.4rem;
        --fz-p: 2rem;
        --fz-talk-l: 2.4rem;
        --fz-highlight: 2rem;
        --fz-cap: 1.6rem
        }
    
    /* ================ CSS Reset =============== */
    *, *::before, *::after{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html{
        font-size: 62.5%;
    }

    body{
        font-size: 1.6rem;
        font-family: 'Gen Jyuu Gothic P';
        color: var(--clr-text);
    }

    h2{
        font-size: var(--fz-h2);
    }

    h3{
        font-size: var(--fz-h3);
    }

    p{
        font-size: var(--fz-p);
        line-height: 180%;
    }

    button{
        font-size: var(--clr-body);
        font-family: inherit;
        letter-spacing: 0.05em;
        border: none;
        background: transparent;
        cursor: pointer;
    }

    img{
        display: block;
        max-width: 100%;
    }

`;

export default GlobalStyle;

//================================================//
//Global Styled Components
//================================================//

export const ImgContainer = styled.div`
  width: ${(props) => props.width ?? 'auto'};
  height: ${(props) => props.height ?? 'auto'};
  position: ${(props) => (props.absolute ? 'absolute' : 'static')};
  top: ${(props) => props.top ?? 'auto'};
  bottom: ${(props) => props.bottom ?? 'auto'};
  right: ${(props) => props.right ?? 'auto'};
  left: ${(props) => props.left ?? 'auto'};
  z-index: ${(props) => props.zIndex ?? '1'};
`;

export const HighlightedText = styled.span`
  color: var(--clr-primary);
`;

export const SRoleWrap = styled(motion.div)`
  width: 26rem;
  overflow: hidden;
  position: absolute;
  top: ${(props) => props.top ?? 'auto'};
  right: ${(props) => props.right ?? 'auto'};
  bottom: ${(props) => props.bottom ?? 'auto'};
  left: ${(props) => props.left ?? 'auto'};
`;

export const SRole = styled(motion.div)`
  position: relative;
  display: grid;
  place-content: center;
  z-index: 100;
`;

export const SDialog = styled(motion.div)`
  width: ${(props) => props.width || '70%'};
  margin: ${(props) => (props.right ? '5rem 3rem' : '3rem')};
  align-self: ${(props) => (props.right ? 'start' : 'end')};
  position: ${(props) => (props.absolute ? 'absolute' : 'static')};
  top: ${(props) => props.top ?? 'auto'};
  right: ${(props) => props.right ?? 'auto'};
  bottom: ${(props) => props.bottom ?? 'auto'};
  left: ${(props) => props.left ?? 'auto'};
  opacity: 0;
`;

export const CenterContainer = styled.div`
  width: 100%;
  height: 60%;
  margin-top: 2rem;
  display: flex;
  justify-content: ${(props) =>
    props.status === 'meeting' ? 'start' : 'center'};
  align-items: center;
  position: relative;
`;

export const SBackground = styled.div`
  width: 100%;
  height: 80%;
  position: absolute;
  bottom: 0;
  backdrop-filter: blur(5px);
  background: var(--gradient-primary);
  display: grid;
  place-content: center;
`;
