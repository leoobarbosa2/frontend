import styled from 'styled-components';

export const Container = styled.div`
  background: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Actions = styled.div`
  position: absolute;
  top: 290px;
  background: #fff;
  padding: 20px;
  border: none;
  border-radius: 4px;

  h1 {
    svg {
      margin-right: 30px;
    }

    display: flex;
    align-items: center;
    font-size: 25px;
    margin-bottom: 20px;
  }

  p {
    margin-bottom: 20px;

    span {
      font-weight: bold;
    }
  }

  div {
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;

    button {
      color: #fff;
      margin-top: 20px;
      background: #00aa9e;
      border: none;
      padding: 10px;

      &:nth-child(1) {
        background: #f44;
      }

      cursor: pointer;
    }
  }
`;
