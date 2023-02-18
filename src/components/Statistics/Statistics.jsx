import PropTypes from 'prop-types';

export const Statistics = ({ stats, title }) => {
  return (
    <section className="statistics">
      {title && <h2>{title}</h2>}

      <ul>
        {stats.map(item => (
          <li key={item.id}>
            <span>{item.label}</span>
            <span>{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
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
