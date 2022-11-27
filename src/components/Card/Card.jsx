//Styles
import { SCard, SLabel } from './Card.styles';
//Images
import {
  dialog_po,
  dialog_sm,
  dialog_team1,
  dialog_team2,
} from '../../shared/images';
//================================================//

const Card = ({ children, title, variant }) => {
  const labelImgFactory = () => {
    switch (variant) {
      case 'po':
        return dialog_po;
      case 'sm':
        return dialog_sm;
      case 'ee':
        return dialog_team1;
      case 'gg':
        return dialog_team2;
      default:
        return dialog_po;
    }
  };

  const background = () => {
    switch (variant) {
      case 'po':
        return 'var(--gradient-dialog-po)';
      case 'sm':
        return 'var(--gradient-role-sm)';
      case 'ee':
        return 'var(--gradient-role-team1)';
      case 'gg':
        return 'var(--gradient-role-team2)';
      default:
        return 'var(--gradient-dialog-po)';
    }
  };

  const mainColor = () => {
    switch (variant) {
      case 'po':
        return 'rgba(0, 255, 224, 0.8)';
      case 'sm':
        return 'var(--clr-role-sm)';
      case 'ee':
        return 'var(--clr-role-team1)';
      case 'gg':
        return 'var(--clr-role-team2)';
      default:
        return 'rgba(0, 255, 224, 0.8)';
    }
  };
  return (
    <SCard variant={variant} background={background()} mainColor={mainColor()}>
      {variant ? (
        <SLabel img title="title">
          <img src={labelImgFactory()} alt="" />
          <span>{title}</span>
        </SLabel>
      ) : (
        <SLabel title="title">
          <h3>{title}</h3>
        </SLabel>
      )}
      {/* <SLabel>
        <h3>{title}</h3>
      </SLabel> */}
      {children}
    </SCard>
  );
};

export default Card;
