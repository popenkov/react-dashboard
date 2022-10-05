import BankCard from '../BankCard/BankCard';
import styles from './BankAccount.module.scss';

export type BankCardType = {
  title: string;
  img: string;
  transactions: number;
  amount: number;
  backgroundColor: string;
};

const bankCardData: BankCardType[] = [
  {
    title: 'Chase',
    img: '',
    transactions: 73,
    amount: 74330,
    backgroundColor:
      'linear-gradient(254.92deg, #0A2A99 -6%, #002190 106.84%);',
  },
  {
    title: 'Test',
    img: '',
    transactions: 73,
    amount: 74330,
    backgroundColor:
      'linear-gradient(254.92deg, #3B2A79 -6%, #3B2A26 106.84%);',
  },
];

function BankAccount() {
  return (
    <div className={styles.account}>
      <h3 className={styles.title}>Bank Account</h3>
      <div className={styles.cardsContainer}>
        {bankCardData &&
          bankCardData.map((item, index) => {
            return <BankCard {...item} key={index} />;
          })}
      </div>
      <button className={styles.addButton}>Add new card</button>
    </div>
  );
}

export default BankAccount;
