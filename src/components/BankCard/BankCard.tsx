import { BankCardType } from '../BankAccount/BankAccount';
import styles from './BankCard.module.scss';

function BankCard({
  title,
  img,
  transactions,
  amount,
  backgroundColor,
}: BankCardType) {
  console.log(backgroundColor);
  return (
    <div className={styles.card} style={{ background: backgroundColor }}>
      <div className={styles.header}>
        <p className={styles.title}>{title}</p>
      </div>
      <div className={styles.container}>
        <div className={styles.transactions}>
          <p className={styles.subtitle}>Transaction</p>
          <p className={styles.value}>{transactions}</p>
        </div>
        <div className={styles.amount}>
          <p className={styles.subtitle}>Total balance</p>
          <p className={styles.value}>$ {amount}</p>
        </div>
      </div>
    </div>
  );
}

export default BankCard;
