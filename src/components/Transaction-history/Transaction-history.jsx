import PropTypes from 'prop-types';
import { TransactionData } from './Transaction-data';

export const TransactionHistory = ({ items }) => {
  return (
    <table class="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      {items.map(item => {
        return (
          <tbody key={item.id}>
            <TransactionData item={item} />
          </tbody>
        );
      })}
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
