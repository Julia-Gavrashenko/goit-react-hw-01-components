import PropTypes from 'prop-types';
import { FriendListItem } from './Friend-list-item';
import {Friends, FriendCard} from './Friend-list.styled'

export const FriendList = ({ friends }) => {
  return (
    <Friends>
      {friends.map(friend => {
        return (
          <FriendCard key={friend.id}>
            <FriendListItem friend={friend} />
          </FriendCard>
        );
      })}
    </Friends>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
