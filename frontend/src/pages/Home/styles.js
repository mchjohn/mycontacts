import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 32px;
`;

export const InputSearchContainer = styled.header`
  width: 100%;

  input {
    width: 100%;
    height: 48px;
    outline: 0;
    padding: 0 16px;

    font-size: 16px;
    box-shadow: 0px 4px 10px rgba(27, 29, 37, 0.04);
    color: ${({ theme }) => theme.colors.primary[500]};
    background: ${({ theme }) => theme.colors.primary[800]};

    border-radius: 4px;
    border: 2px solid ${({ theme }) => theme.colors.primary[800]};

    &::placeholder {
      color: ${({ theme }) => theme.colors.primary[600]};
    }

    &:focus {
      border-color: ${({ theme }) => theme.colors.primary[600]};
    }
  }
`;

export const Header = styled.header`
  display: flex;
  margin-top: 32px;
  padding-bottom: 16px;
  align-items: center;
  justify-content: ${({ justifyContent }) => justifyContent};
  border-bottom: solid 2px ${({ theme }) => theme.colors.primary[800]};

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

export const ErrorContainer = styled.div`
  margin-top: 16px;

  display: flex;
  align-items: center;

  .details {
    margin-left: 24px;

    strong {
      display: block;
      font-size: 20px;
      margin-bottom: 8px;
      color: ${({ theme }) => theme.colors.danger[500]};
    }
  }
`;

export const EmptyListContainer = styled.div`
  margin-top: 16px;

  display: flex;
  align-items: center;
  flex-direction: column;

  img {
    margin-bottom: 8px;
  }

  strong {
    color: ${({ theme }) => theme.colors.primary[500]};
  }
`;

export const SearchNotFoundContainer = styled.div`
  margin-top: 16px;

  display: flex;
  align-items: center;

  span {
    word-break: break-word;

    margin-left: 24px;
    color: ${({ theme }) => theme.colors.primary[600]};
  }

  strong {
    color: ${({ theme }) => theme.colors.primary[500]};
  }
`;
