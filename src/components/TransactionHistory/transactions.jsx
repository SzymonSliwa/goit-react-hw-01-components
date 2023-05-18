import PropTypes from 'prop-types';
import css from './Transaction.module.css';
import { TransactionHistoryRow } from './TransactionRow';

export const TransactionHistory = ({ transactions }) => {
  return (
    <section className={css.transaction}>
      <table className={css.transaction_history}>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map(({ id, type, amount, currency }) => (
            <TransactionHistoryRow
              key={id}
              type={type}
              amount={amount}
              currency={currency}
            />
          ))}
        </tbody>
      </table>
    </section>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
