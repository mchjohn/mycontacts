import styled from 'styled-components';

export const Overlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  top: 0;
  left: 0;
  position: absolute;

  backdrop-filter: blur(3px);
  background: rgba(0, 0, 0, 0.6);
`;

export const Container = styled.div`
  width: 100%;
  max-width: 450px;
  padding: 24px;

  border-radius: 4px;
  box-shadow: 0px 4px 10px rgba(27, 29, 37, 0.04);
  background: ${({ theme }) => theme.colors.primary[900]};

  h1 {
    font-size: 22px;
    color: ${({ theme, danger }) => (danger ? theme.colors.danger[500] : theme.colors.primary[500])};
  }

  p {
    margin-top: 8px;
  }
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  margin-top: 32px;

  .cancel-button {
    border: none;
    font-size: 16px;
    margin-right: 8px;
    background: transparent;
    color: ${({ theme }) => theme.colors.primary[500]};

    transition: background 0.01s ease-in;

    &:hover {
      color: ${({ theme }) => theme.colors.primary[600]};
    }

    &:active {
      color: ${({ theme }) => theme.colors.primary[500]};
    }
  }
`;
