import * as S from './styles';

export type ButtonProps = {
  children?: React.ReactNode
  type?: 'default' | 'primary' | 'disabled'
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
  icon?: JSX.Element
}

export const Button = ({ 
  children,
  icon, 
  size = 'medium', 
  fullWidth = false,
}: ButtonProps) => (
  <S.Button size={size} fullWidth={fullWidth} hasIcon={!!icon}>
    {!!icon && icon}
    {!!children && <span>{children}</span>}
  </S.Button>
);