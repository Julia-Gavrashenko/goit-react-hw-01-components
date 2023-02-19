import PropTypes from 'prop-types';
import {
  ProfileCard,
  ProfileImg,
  ProfileStats,
  ProfileDesc,
  ProfileName,
  ProfileInfo,
  StatsItem,
  ItemName,
  ItemQuantity,
} from './Profile.styled';

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
        <ProfileImg src={avatar} alt="User avatar" />
        <ProfileName>{username}</ProfileName>
        <ProfileInfo>@ {tag}</ProfileInfo>
        <ProfileInfo>{location}</ProfileInfo>
      </ProfileDesc>

      <ProfileStats>
        <StatsItem>
          <ItemName>Followers</ItemName>
          <ItemQuantity>{followers}</ItemQuantity>
        </StatsItem>
        <StatsItem>
          <ItemName>Views</ItemName>
          <ItemQuantity>{views}</ItemQuantity>
        </StatsItem>
        <StatsItem>
          <ItemName>Likes</ItemName>
          <ItemQuantity>{likes}</ItemQuantity>
        </StatsItem>
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
