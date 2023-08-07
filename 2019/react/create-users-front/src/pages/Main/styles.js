import styled from 'styled-components'

export const Container = styled.div`
  max-width: 700px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 80px auto;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    font-size: 18px;
    margin-left: 10px;
    font-weight: bold;
  }
`

export const Form = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction: column;

  input {
    flex: 1;
    padding: 10px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    opacity: 40%;

    &:focus{
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

export const ReturnButton = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: center;

  a {
    text-decoration: none;
  }
`;