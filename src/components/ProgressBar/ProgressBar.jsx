//style
import { useMatch } from 'react-router-dom';
import { SProgressBar } from './ProgressBar.styles';

const ProgressBar = () => {
  const pathName = useMatch('/*').params['*'];

  const barWidth = () => {
    switch (pathName) {
      case 'step1':
        return 14;
      case 'step2':
        return 30;
      case 'step3':
        return 45;
      case 'step4':
        return 60;
      case 'step5':
        return 85;
      case 'finish':
        return 100;
      default:
        return 5;
    }
  };

  return <SProgressBar width={barWidth()}></SProgressBar>;
};

export default ProgressBar;
