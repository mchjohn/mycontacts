import styled from 'styled-components';

export const Container = styled.header`
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
