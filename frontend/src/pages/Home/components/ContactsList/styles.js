import styled from 'styled-components';

export const ListHeader = styled.header`
  margin-top: 24px;
  margin-bottom: 8px;

  button {
    border: none;
    display: flex;
    align-items: center;
    background transparent;

    img {
      transform: ${({ orderBy }) => (orderBy === 'asc' ? 'rotate(-90deg)' : 'rotate(90deg)')};
      transition: transform 0.2s ease-in;
    }

    &:hover span {
      color: ${({ theme }) => theme.colors.primary[500]};
    }

    &:active span {
      color: ${({ theme }) => theme.colors.primary[600]};
    }
  }

  span {
    margin-right: 8px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.primary[600]};
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
