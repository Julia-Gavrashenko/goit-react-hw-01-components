import styled from '@emotion/styled';

export const StatisticsBoard = styled.section`
  margin-left: auto;
  margin-right: auto;
  width: 500px;
  margin-bottom: 60px;
  box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.2);
`;

export const StatisticsTitle = styled.h2`
  padding-top: 25px;
  padding-bottom: 25px;
  background-color: white;
  text-align: center;
  font-weight: 700;
  font-size: 30px;
  text-transform: uppercase;
  text-decoration: none;
  color: #757575;
`;

export const StatisticsList = styled.ul`
  display: flex;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100px;
  color: white;
  padding-top: 10px;
  padding-bottom: 10px;
  border-top: 1px solid rgba(0, 0, 0, 0.2);

  :not(:last-child) {
    border-right: 1px solid rgba(0, 0, 0, 0.2);
  }

  background-color: ${function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }};
`;

export const ItemLabel = styled.span`
  margin-bottom: 10px;
  font-weight: 500;
  font-size: 20px;
  text-decoration: none;
`;

export const ItemPercentage = styled.span`
  margin-bottom: 10px;
  font-weight: 700;
  font-size: 20px;
  text-decoration: none;
`;
