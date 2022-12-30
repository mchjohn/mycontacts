import styled from 'styled-components';

export const Container = styled.div`
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
