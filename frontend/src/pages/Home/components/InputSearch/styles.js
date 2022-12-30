import styled from 'styled-components';

export const Container = styled.header`
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
