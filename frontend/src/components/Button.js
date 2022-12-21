import styled from 'styled-components';

export const Button = styled.button`
  width: 100%;
  height: 48px;

  font-size: 16px;
  font-weight: bold;

  border: none;
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.primary[900]};
  background: ${({ theme }) => theme.colors.primary[500]};

  box-shadow: 0px 4px 10px rgba(27, 29, 37, 0.04);

  transition: background 0.01s ease-in;

  &:hover {
    background: ${({ theme }) => theme.colors.primary[600]};
  }

  &:active {
    background: ${({ theme }) => theme.colors.primary[500]};
  }

  &[disabled] {
    cursor: not-allowed;
    color: ${({ theme }) => theme.colors.primary[600]};
    background: ${({ theme }) => theme.colors.primary[800]};
  }
`;
