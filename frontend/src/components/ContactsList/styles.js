import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 32px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  strong {
    font-size: 24px;
  }

  a {
    padding: 8px 16px;
    font-weight: bold;
    text-decoration: none;

    border-radius: 4px;
    color: ${({ theme }) => theme.colors.primary[500]};
    border: 2px solid ${({ theme }) => theme.colors.primary[500]};

    transition: all 0.1s ease-in;

    &:hover {
      color: ${({ theme }) => theme.colors.primary[900]};
      background: ${({ theme }) => theme.colors.primary[500]};
    }
  }
`;

export const ListContainer = styled.div`
  margin-top: 24px;

  header {
    margin-bottom: 8px;

    button {
      border: none;
      display: flex;
      align-items: center;
      background transparent;

      img {
        transform: rotate(90deg);
      }
    }

    span {
      margin-right: 8px;
      font-weight: bold;
      color: ${({ theme }) => theme.colors.primary[600]};
    }
  }
`;

export const Card = styled.div`
  padding: 16px;
  border-radius: 4px;
  box-shadow: 0px 4px 10px rgba(27, 29, 37, 0.04);
  background: ${({ theme }) => theme.colors.primary[800]};

  display: flex;
  align-items: center;
  justify-content: space-between;

  & + & {
    margin-top: 16px;
  }

  .info {
    .contact-name {
      display: flex;
      align-items: center;
      color: ${({ theme }) => theme.colors.primary[500]};

      small {
        padding: 4px;
        margin-left: 8px;

        border-radius: 4px;
        font-weight: bold;
        text-transform: uppercase;

        color: ${({ theme }) => theme.colors.primary[900]};
        background: ${({ theme }) => theme.colors.primary[600]};
      }
    }

    span {
      display: block;
      font-size: 14px;
    }
  }

  .actions {
    display: flex;
    align-items: center;

    button {
      border: none;
      margin-left: 8px;
      background: transparent;
    }

    img {
      width: 24px;
    }
  }
`;
