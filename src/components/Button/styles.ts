import styled, { css } from 'styled-components';
import { ButtonProps } from '.'

type WrapperProps = { hasIcon: boolean } & Omit<ButtonProps, 'children'>

const wrapperModifiers = {
  small: () => css`
    height: 30px;
    font-size: 12px;
  `,
  medium: () => css`
    height: 40px;
    font-size: 14px;
  `,
  large: () => css`
    height: 50px;
    font-size: 16px;
  `,
  fullWidth: () => css`
    width: 100%;
  `,
  withIcon: () => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 26px;
      
      & + span {
        margin-left: 8px;
      }
    }
  `
}

export const Button = styled.button<WrapperProps>`
  ${({ size, fullWidth, hasIcon, type }) => css`
    width: 160px;
    padding: 8px;
    border-radius: 4px;
    border: none;

    background-color: #109CF1;
    color: #fff;
    font-weight: 600;

    ${!!size && wrapperModifiers[size]}
    ${!!fullWidth && wrapperModifiers.fullWidth}
    ${!!hasIcon && wrapperModifiers.withIcon}
  `}
`;