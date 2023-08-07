import React from 'react';
import { ButtonContainer } from './ButtonStyles';
import InnerButton from './components/InnerButton';

interface PropsButton {
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  variant?: 'primary' | 'secondary' | 'text' | 'action';
  loading?: boolean;
  disabled?: boolean;
  title?: string;
  type?: string;
  color?: string;
}

const Button = ({ children, variant = 'primary', onClick, disabled = false, loading = false, title = '', color }: PropsButton) => {
  return (
    <ButtonContainer className={`container ${title && 'tooltip_container'}`} color={color}>
      <button className={variant} onClick={onClick} disabled={disabled}>
        <InnerButton loading={loading}>{children}</InnerButton>
      </button>
      <div className={`${title ? 'tooltip' : ''}`}>{title}</div>
    </ButtonContainer>
  );
};

export default Button;
