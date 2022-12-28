import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 48px;
  padding: 0 16px;

  font-size: 16px;
  font-weight: bold;

  border: none;
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.primary[900]};
  background: ${({ theme }) => theme.colors.primary[500]};

  box-shadow: 0px 4px 10px rgba(27, 29, 37, 0.04);

  transition: background 0.01s ease-in;

  &:hover {
    background: ${({ theme }) => theme.colors.primary[600]};
  }

  &:active {
    background: ${({ theme }) => theme.colors.primary[500]};
  }

  &[disabled] {
    cursor: not-allowed;
    color: ${({ theme }) => theme.colors.primary[600]};
    background: ${({ theme }) => theme.colors.primary[800]};
  }

  ${({ theme, danger }) => danger && css`
    color: ${theme.colors.primary[900]};
    background: ${theme.colors.danger[500]};

    &:hover {
      background: ${theme.colors.danger[600]};
    }

    &:active {
      background: ${theme.colors.danger[500]};
    }
  `}
`;
