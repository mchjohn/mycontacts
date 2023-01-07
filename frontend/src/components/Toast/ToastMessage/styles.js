import styled, { css, keyframes } from 'styled-components';

const messageIn = keyframes`
  from { opacity: 0; transform: translateY(100px); }
  to { opacity: 1; transform: translateY(0px); }
`;

const messageOut = keyframes`
  from { opacity: 1; transform: translateY(0px); }
  to { opacity: 0; transform: translateY(100px); }
`;

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
  cursor: pointer;

  animation: ${messageIn} 0.3s;

  ${({ isLeaving }) => isLeaving && css`animation: ${messageOut} 0.3s forwards;`};

  ${({ type }) => containerVariants[type] || containerVariants.default};

  & + & {
    margin-top: 12px;
  }

  img {
    width: 24px;
    margin-right: 8px;
  }
`;
