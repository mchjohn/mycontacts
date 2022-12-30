import styled, { css, keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

const scaleIn = keyframes`
  from { transform: scale(0); }
  to { transform: scale(1); }
`;

const scaleOut = keyframes`
  from { transform: scale(1); }
  to { transform: scale(0); }
`;

export const Overlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  top: 0;
  left: 0;
  position: fixed;

  backdrop-filter: blur(3px);
  background: rgba(0, 0, 0, 0.6);

  animation: ${fadeIn} 0.3s;

  ${({ isLeaving }) => isLeaving && css`animation: ${fadeOut} 0.3s forwards;`}
`;

export const Container = styled.div`
  width: 100%;
  max-width: 450px;
  padding: 24px;

  border-radius: 4px;
  box-shadow: 0px 4px 10px rgba(27, 29, 37, 0.04);
  background: ${({ theme }) => theme.colors.primary[900]};

  > h1 {
    font-size: 22px;
    color: ${({ theme, danger }) => (danger ? theme.colors.danger[500] : theme.colors.primary[500])};
  }

  .modal-body {
    margin-top: 32px;
  }

  animation: ${scaleIn} 0.3s;

  ${({ isLeaving }) => isLeaving && css`animation: ${scaleOut} 0.3s; forwards`}
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  margin-top: 32px;

  .cancel-button {
    border: none;
    font-size: 16px;
    margin-right: 24px;
    background: transparent;
    color: ${({ theme }) => theme.colors.primary[500]};

    transition: background 0.01s ease-in;

    &:hover {
      color: ${({ theme }) => theme.colors.primary[600]};
    }

    &:active {
      color: ${({ theme }) => theme.colors.primary[500]};
    }

    &[disabled] {
      cursor: not-allowed;
    }
  }
`;
