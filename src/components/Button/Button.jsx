import { SButton } from './Button.styles';

const Button = ({ children, disabled, onClick }) => {
  return (
    <SButton disabled={disabled} data-label={children} onClick={onClick}>
      {children}
    </SButton>
  );
};

//For Testing
Button.defaultProps = {
  disabled: false,
};

export default Button;
