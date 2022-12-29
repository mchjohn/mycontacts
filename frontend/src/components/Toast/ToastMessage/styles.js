import styled, { css } from 'styled-components';

const containerVariants = {
  default: css`
    background: ${({ theme }) => theme.colors.primary[600]};
  `,
  success: css`
    background: ${({ theme }) => theme.colors.success.main};
  `,
  danger: css`
    background: ${({ theme }) => theme.colors.danger[500]};
  `,
};

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 16px 32px;

  border-radius: 4px;
  box-shadow: 0px 4px 10px rgba(27, 29, 37, 0.04);

  color: #FDFFFF;

  ${({ type }) => containerVariants[type] || containerVariants.default};

  & + & {
    margin-top: 12px;
  }

  img {
    width: 24px;
    margin-right: 8px;
  }
`;
