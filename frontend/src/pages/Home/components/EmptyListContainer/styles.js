import styled from 'styled-components';

export const Container = styled.div`
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
