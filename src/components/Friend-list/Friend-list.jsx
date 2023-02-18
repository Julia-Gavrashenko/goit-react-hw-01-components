import PropTypes from 'prop-types';
import { FriendListItem } from './Friend-list-item';

export const FriendList = ({ friends }) => {
  return (
    <ul>
      {friends.map(friend => {
        return (
          <li key={friend.id}>
            <FriendListItem friend={friend} />
          </li>
        );
      })}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
