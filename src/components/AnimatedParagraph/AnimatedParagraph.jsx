import { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { characterAnimation } from '../../shared/animation';
import { motion, useAnimationControls, useInView } from 'framer-motion';

//Styles
const SCharacter = styled(motion.span)`
  display: inline-block;
  color: ${(props) =>
    props.highlight ? 'var(--clr-primary)' : 'var(--clr-text)'};
`;

const AnimatedParagraph = ({ text, order }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const controls = useAnimationControls();
  const textArr = text.split('');
  //Highlight 文字的起點和終點
  const markedTextStart = textArr.findIndex((word) => word === '*');
  const markedTextEnd = textArr.findLastIndex((word) => word === '*');
  //欲顯示在畫面上的文字（剔除'*'）
  const newText = textArr.filter((word) => word !== '*');

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [isInView, controls]);

  return (
    <p>
      {newText.map((char, index) => (
        <SCharacter
          key={index}
          variants={characterAnimation}
          animate={controls}
          initial="hidden"
          ref={ref}
          highlight={
            index + 1 > markedTextStart && index + 1 < markedTextEnd
              ? 'true'
              : null
          }
          transition={{
            delay: order === 'later' ? index * 0.15 + 12 : index * 0.15 + 3.5,
          }}
        >
          {char}
        </SCharacter>
      ))}
    </p>
  );
};

AnimatedParagraph.defaultProps = {
  text: '我喔去去*亮亮亮*喔喔喔喔喔喔',
};
export default AnimatedParagraph;
