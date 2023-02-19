import PropTypes from 'prop-types';
import {
  StatisticsBoard,
  StatisticsList,
  StatisticsTitle,
  ListItem,
  ItemLabel,
  ItemPercentage,
} from './Statistics.styled';

export const Statistics = ({ stats, title }) => {
  return (
    <StatisticsBoard>
      {title && <StatisticsTitle>{title}</StatisticsTitle>}

      <StatisticsList>
        {stats.map(item => (
          <ListItem key={item.id}>
            <ItemLabel>{item.label}</ItemLabel>
            <ItemPercentage>{item.percentage}%</ItemPercentage>
          </ListItem>
        ))}
      </StatisticsList>
    </StatisticsBoard>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number,
    })
  ),
};
