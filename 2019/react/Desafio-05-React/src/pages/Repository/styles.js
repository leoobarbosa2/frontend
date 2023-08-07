import styled, { keyframes, css } from 'styled-components';

const rotate = keyframes`
  from{
    transform: rotate(0deg);
  } to {
    transform: rotate(360deg);
  }
`;

export const Loading = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  ${props =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;

export const Owner = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    color: #7159c1;
    text-decoration: none;
    font-size: 16px;
  }

  img {
    width: 120px;
    border-radius: 50%;
    margin-top: 20px;
  }

  h1 {
    font-size: 24px;
    margin-top: 10px;
  }

  p {
    margin-top: 5px;
    font-size: 14px;
    color: #666;
    line-height: 1.4;
    text-align: center;
    max-width: 400px;
  }
`;

export const IssueList = styled.ul`
  padding-top: 30px;
  margin-top: 30px;
  border-top: 1px solid #eee;
  list-style: none;

  li {
    display: flex;
    padding: 15px 10px;
    border: 1px solid #eee;
    border-radius: 4px;
  }

  & + li {
    margin-top: 10px;
  }

  img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: 2px solid #eee;
  }

  div {
    flex: 1;
    margin-left: 15px;

    strong {
      font-size: 16px;

      a {
        text-decoration: none;
        color: #333;

        &:hover {
          color: #7159c1;
        }
      }

      span {
        background: #cecece;
        color: #333;
        border-radius: 2px;
        font-size: 12px;
        font-weight: 600;
        height: 20px;
        padding: 3px 4px;
        margin-left: 10px;
      }
    }

    p {
      margin-top: 5px;
      font-size: 12px;
      color: #999;
    }
  }
`;

export const IssueFilter = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-around;

  button {
    background: #7159c1;
    color: #fff;
    padding: 8px;
    border: 1px solid #eee;
    border-radius: 4px;
    &:hover {
      background: #000;
    }
  }
`;

export const FilterIssues = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;

  button {
    background: #7159c1;
    color: #fff;
    padding: 10px;
    border: 1px solid #eee;
    border-radius: 4px;

    &:hover {
      opacity: 60%;
    }
  }
`;

export const PageController = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-around;
  align-content: center;

  button {
    background: #7159c1;
    color: #fff;
    padding: 6px;
    border: 1px solid #eee;
    border-radius: 4x;

    &:disabled {
      opacity: 15%;
      cursor: not-allowed;
    }
  }
`;

export const PageCounter = styled.div`
  text-align: center;
  color: #7159c1;
`;
