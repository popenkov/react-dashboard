import { BankCardType } from '../BankAccount/BankAccount';
import styles from './BankCard.module.scss';

function BankCard({
  title,
  img,
  transactions,
  amount,
  backgroundColor,
}: BankCardType) {
  return (
    <div className={styles.card} style={{ background: backgroundColor }}>
      BankCard
    </div>
  );
}

export default BankCard;
