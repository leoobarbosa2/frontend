import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;

  span {
    font-size: 18px;
    margin-left: 10px;
    font-weight: bold;
  }
  `;

export const Container = styled.div`
  max-width: 1200px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 80px auto;
`;

export const Table = styled.table`
  margin: 0 auto;
  border: 1px solid #606060;
  border-spacing: 0;

  td {
    border: 1px solid #606060;
    padding: 10px;

    &.tdTitle {
      font-weight: bold;
      color: #7159c1;
    }

    button {
      background: none;
      border:none;
    
      cursor: pointer;
    }
  }
`

export const Add = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  
  a {
    text-decoration: none;
    color: #7159c1;
    padding: 6px;

    cursor: pointer;
  }
`;