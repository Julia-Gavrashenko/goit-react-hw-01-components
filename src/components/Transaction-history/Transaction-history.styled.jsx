import styled from '@emotion/styled';

export const TransactionTable = styled.table`
  width: 600px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 60px;
  margin-bottom: 60px;
  border-radius: 6px;
  text-align: center;
  background-color: white;
  box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.3);
  }
`;

export const TableBody = styled.tbody`
  background-color: #f5f4fa;
  color: gray;
  font-size: smaller;

  &:nth-child(2n) {
    background-color: white;
  }
`;

export const TableName = styled.th`
  padding-top: 20px;
  padding-bottom: 20px;
  font-weight: 700;
  font-size: 20px;
  text-decoration: none;
  text-transform: uppercase;
  color: white;
  background-color: rgb(0, 200, 230);
  border-bottom: 1px solid grey;

  :not(:last-child) {
    border-right: 1px solid white;
  }
`;



export const TableContent = styled.td`
  width: 200px;
  padding-top: 10px;
  padding-bottom: 10px;
  font-weight: 500;
  font-size: 20px;
  color: #757575;
  text-transform: capitalize;

  :not(:last-child) {
    border-right: 1px solid white;
  }
`;
