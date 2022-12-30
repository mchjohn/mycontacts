import styled from 'styled-components';

export const Container = styled.div`
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
