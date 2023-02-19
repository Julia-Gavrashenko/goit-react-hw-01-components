import styled from '@emotion/styled';

export const Friends = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-bottom: 60px;
`;

export const FriendCard = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 400px;
  padding: 20px;
  border-radius: 7px;
  background-color: white;
  box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.5);
  }

`;

export const FriendStatus = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => {
    return props.isOnline ? 'green' : 'orangered';
  }};
`;

export const FriendAvatar = styled.img`
  width: 70px;
  border-radius: 5px;
  box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.5);
  margin-right: 20px;
`;

export const FriendName = styled.p`
  font-weight: 700;
  font-size: 25px;
  text-decoration: none;
`;
