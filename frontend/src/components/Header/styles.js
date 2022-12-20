import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  margin-top: 74px;
  align-items: center;
  flex-direction: column;

  img {
    width: 200px;
  }
`;

export const InputSearchContainer = styled.header`
  width: 100%;
  margin-top: 48px;

  input {
    width: 100%;
    height: 48px;
    outline: 0;
    padding: 0 16px;

    border: none;
    background: #fff;
    border-radius: 4px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);

    &::placeholder {
      color: #bcbcbc;
    }
  }
`;
