import styled, { css } from 'styled-components';

export const Input = styled.input`
  width: 100%;
  height: 48px;
  padding: 0 16px;
  font-size: 16px;

  appearance: none;

  outline: 0;
  border-radius: 4px;
  border: 2px solid ${({ theme }) => theme.colors.primary[800]};

  box-shadow: 0px 4px 10px rgba(27, 29, 37, 0.04);
  color: ${({ theme }) => theme.colors.primary[500]};
  background: ${({ theme }) => theme.colors.primary[800]};

  transition: border-color 0.01s ease-in;

  &::placeholder {
    color: ${({ theme }) => theme.colors.primary[600]};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary[600]};
  }

  ${({ theme, error }) => error && css`
    color: ${theme.colors.danger[500]};
    border-color: ${theme.colors.danger[500]} !important;
  `}

  &[disabled] {
    opacity: 0.6;
  }
`;
