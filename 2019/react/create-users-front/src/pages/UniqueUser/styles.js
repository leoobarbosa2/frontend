import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  
  span {
    margin-left: 10px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 700px;
  background: #fff;
  border: 1px solid rgba(0, 0, 0, .1);
  border-radius: 4px;
  margin: 80px auto;
`;


export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 10px;

  input {
    flex: 1;
    padding: 10px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    opacity: 40%;

    &:focus {
      border-color: rgba(0, 0, 0, 0.4);
      transition: 500ms;
      color: #7159c1;
      opacity: 100%;
    }
  }

  button {
    font-size: 14px;
    font-weight: bold;

    background: #000;
    color: #fff;
    padding: 10px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    cursor: pointer;

    &:hover {
      opacity: 60%;
      transition: 250ms;
    }
  }
`;

export const CancelButton = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0;

  a {
    text-decoration: none;
  }

`;