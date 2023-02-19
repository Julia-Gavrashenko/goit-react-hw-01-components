import styled from '@emotion/styled';

export const ProfileCard = styled.div`
  width: 300px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 60px;
  margin-bottom: 60px;
  border-radius: 6px;
  text-align: center;
  background-color: white;
  box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.5);
`;

export const ProfileDesc = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-top: 40px;
  padding-bottom: 30px;
`;

export const ProfileImg = styled.img`
  width: 140px;
  height: auto;
  border-radius: 50%;
  box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.5);
  margin-bottom: 50px;
  margin-left: auto;
  margin-right: auto;
`;

export const ProfileName = styled.p`
  margin-bottom: 15px;
  font-weight: 700;
  font-size: 25px;
  text-decoration: none;
`;

export const ProfileInfo = styled.p`
  margin-bottom: 10px;
  font-weight: 700;
  font-size: 20px;
  text-decoration: none;
  color: #757575;
`;

export const ProfileStats = styled.ul`
  display: flex;
  background-color: #f5f4fa;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100px;
  padding-top: 15px;
  padding-bottom: 15px;
  border-top: 1px solid rgba(0, 0, 0, 0.2);

  :not(:last-child) {
    border-right: 1px solid rgba(0, 0, 0, 0.2);
  }
`;

export const ItemName = styled.span`
  margin-bottom: 10px;
  font-weight: 500;
  font-size: 20px;
  text-decoration: none;
  color: #757575;
`;

export const ItemQuantity = styled.span`
  margin-bottom: 10px;
  font-weight: 700;
  font-size: 20px;
  text-decoration: none;
`;
