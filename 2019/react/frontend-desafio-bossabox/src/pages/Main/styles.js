import styled, { css, keyframes } from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  border: none;
  padding: 15px;
  background: #fff;
  position: relative;
  max-width: 800px;
  margin: 0 auto;
`;

export const Options = styled.div`
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      margin-left: 10px;
      color: #00aa9e;
      font-weight: bold;
    }

    div {
      input {
        padding: 4px;
        margin-left: 10px;

        &:focus {
          color: #00aa9e;
        }
      }
    }
  }

  button {
    background: #5ce0d7;
    border: none;
    color: #fff;
    padding: 5px 20px;
    display: flex;
    align-items: center;

    cursor: pointer;

    &:hover {
      background: ${darken(0.25, '#5ce0d7')};
    }
  }
`;

export const ToolList = styled.ul`
  height: 700px;
  overflow: scroll;
  margin: 20px 0;
  list-style: none;
  overflow-x: hidden;

  li {
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    border: 3px solid rgba(0, 0, 0, 0.5);
    padding: 20px;
    border-radius: 4px;

    div {
      display: flex;
      flex-direction: column;

      a {
        color: #000;
        font-weight: bold;
        text-decoration: none;
      }

      p {
        margin-top: 10px;
      }

      span {
        color: #00aa9e;
        display: block;
        margin-top: 10px;
        font-weight: bold;
      }

      button {
        display: flex;
        align-items: center;
      }
    }

    button {
      cursor: pointer;
      background: none;
      border: 0;
      color: #00aa9e;
    }
  }
`;

export const ModalBody = styled.div`
  background: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: ${props => (props.visible ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
`;

const modalEffect = keyframes`
    from {
      opacity: 0;
      transform: translateY(-60px)
    } to {
      opacity: 1;
      transform: translateY(0)
    }
  `;

export const Modal = styled.div`
  border: none;
  border-radius: 4px;
  position: relative;
  background: #fff;
  min-width: 400px;
  padding: 30px;

  ${props =>
    props.visibleEffect &&
    css`
      animation: ${modalEffect} 0.3s;
    `}

  > h1 {
    svg {
      margin-right: 15px;
    }

    display: flex;
    align-items: center;

    font-size: 20px;
    margin-bottom: 20px;
  }

  > button {
    position: absolute;
    padding: 4px;
    top: 0;
    right: 0;
    border: 0;
    background: none;

    cursor: pointer;
  }

  form {
    display: flex;
    flex-direction: column;

    span {
      margin-top: 2px;
      color: #f00;
      font-weight: bold;
    }

    input {
      padding: 10px;
      border: 1px solid rgba(0, 0, 0, 0.7);
      border-radius: 4px;

      &:focus {
        color: #00aa9e;
      }
    }

    label {
      color: #00aa9e;
      font-weight: bold;
      svg {
        margin-right: 10px;
      }

      display: flex;
      align-items: center;
      margin: 20px 0;
    }

    div {
      button {
        background: #00aa9e;
        color: #fff;
        border: none;
        border-radius: 4px;
        padding: 6px;
        margin-top: 20px;
        float: right;

        cursor: pointer;
      }
    }
  }
`;

const rotate = keyframes`
  from{
    transform: rotate(0deg);
  } to {
    transform: rotate(360deg);
  }
`;

export const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  width: 700px;

  span {
  }

  ${props =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;
