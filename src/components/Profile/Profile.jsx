import PropTypes from 'prop-types';
import { ProfileCard, ProfileImg, ProfileStats, ProfileDesc } from './Profile.styled';

export const Profile = ({
  avatar = 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640',
  username,
  tag,
  location,
  stats: { followers, views, likes },
}) => {
  return (
    <ProfileCard>
      <ProfileDesc>
        <ProfileImg src={avatar} alt="User avatar"/>
        <p className="name">{username}</p>
        <p className="tag">@ {tag}</p>
        <p className="location">{location}</p>
      </ProfileDesc>

      
      <ProfileStats>
        <li>
          <span className="label">Followers</span>
          <span className="quantity">{followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity">{views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity">{likes}</span>
        </li>
      </ProfileStats>
    </ProfileCard>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
