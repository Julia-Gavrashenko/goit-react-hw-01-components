import PropTypes from 'prop-types';
import { TableContent } from './Transaction-history.styled';

export const TransactionData = ({ item: { id, type, amount, currency } }) => {
  return (
    <tr>
      <TableContent>{type}</TableContent>
      <TableContent>{amount}</TableContent>
      <TableContent>{currency}</TableContent>
    </tr>
  );
};

TransactionData.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
