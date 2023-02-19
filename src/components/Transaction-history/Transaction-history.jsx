import PropTypes from 'prop-types';
import { TransactionData } from './Transaction-data';
import {
  TransactionTable,
  TableName,
  TableBody,
} from './Transaction-history.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionTable>
      <thead>
        <tr>
          <TableName>Type</TableName>
          <TableName>Amount</TableName>
          <TableName>Currency</TableName>
        </tr>
      </thead>

      {items.map(item => {
        return (
          <TableBody key={item.id}>
            <TransactionData item={item} />
          </TableBody>
        );
      })}
    </TransactionTable>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
